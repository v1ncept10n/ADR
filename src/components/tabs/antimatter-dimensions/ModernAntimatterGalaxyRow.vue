<script>
export default {
  name: "ModernAntimatterGalaxyRow",
  data() {
    return {
      type: GALAXY_TYPE.NORMAL,
      galaxies: {
        normal: 0,
        replicanti: 0,
        dilation: 0
      },
      requirement: {
        tier: 1,
        amount: 0
      },
      canBeBought: false,
      distantStart: 0,
      remoteStart: 0,
      lockText: null,
      canBulkBuy: false,
      creditsClosed: false,
      scalingText: {
        distant: null,
        remote: null,
      },
      hasTutorial: false,
    };
  },
  computed: {
    isDoomed: () => Pelle.isDoomed,
    dimName() {
      return AntimatterDimension(this.requirement.tier).shortDisplayName;
    },
    buttonText() {
      if (this.lockText !== null) return this.lockText;
      const reset = [];
      let tempstring = "мне нужно не только переводить но и думать как написать правильно код"
      if (!Achievement(143).isUnlocked) reset.push("Ускорения Измерений");
      if (!Achievement(143).isUnlocked) tempstring = "Ускорения Измерения";
      if (!Achievement(111).isUnlocked) reset.push("Измерения");
      if (!Achievement(111).isUnlocked) tempstring = "Измерения";
      if ((!Achievement(111).isUnlocked) && (!Achievement(143).isUnlocked)) (tempstring = "Измерения и Ускорения Измерений");
      return reset.length === 0
        ? `Увеличивает силу улучшений Тик-скорости`
        : `Сбрасывает ${tempstring} для увеличения силы улучшений Тик-скорости`; // ${makeEnumeration(reset)}
    },
    sumText() {
      const parts = [Math.max(this.galaxies.normal, 0)];
      if (this.galaxies.replicanti > 0) parts.push(this.galaxies.replicanti);
      if (this.galaxies.dilation > 0) parts.push(this.galaxies.dilation);
      const sum = parts.map(this.formatGalaxies).join(" + ");
      if (parts.length >= 2) {
        return `${sum} = ${this.formatGalaxies(parts.sum())}`;
      }
      return sum;
    },
    typeName() {
      switch (this.type) {
        case GALAXY_TYPE.NORMAL: return "Галактики Антиматерии";
        case GALAXY_TYPE.DISTANT: return "Далёкие Галактики Антиматерии";
        case GALAXY_TYPE.REMOTE: return "Сверх-далёкие Галактики Антиматерии";
      }
      return undefined;
    },
    hasIncreasedScaling() {
      return this.type !== GALAXY_TYPE.NORMAL;
    },
    costScalingText() {
      switch (this.type) {
        case GALAXY_TYPE.DISTANT:
          return `Каждая галактика дороже после ${this.distantStart} гал.`;
        case GALAXY_TYPE.REMOTE: {
          const scalings = [
            { type: "distant", function: "quadratic", amount: this.distantStart },
            { type: "remote", function: "exponential", amount: this.remoteStart }
          ];
          return `Более сильное увеличение цены галактик: ${scalings.sort((a, b) => a.amount - b.amount)
            .map(scaling => `${scaling.function} scaling past ${this.formatGalaxies(scaling.amount)} (${scaling.type})`)
            .join(", ").capitalize()}`;
        }
      }
      return undefined;
    },
    classObject() {
      return {
        "o-primary-btn o-primary-btn--new o-primary-btn--dimension-reset": true,
        "tutorial--glow": this.canBeBought && this.hasTutorial,
        "o-primary-btn--disabled": !this.canBeBought,
        "o-pelle-disabled-pointer": this.creditsClosed
      };
    }
  },
  methods: {
    update() {
      this.type = Galaxy.type;
      this.galaxies.normal = player.galaxies + GalaxyGenerator.galaxies;
      this.galaxies.replicanti = Replicanti.galaxies.total;
      this.galaxies.dilation = player.dilation.totalTachyonGalaxies;
      const requirement = Galaxy.requirement;
      this.requirement.amount = requirement.amount;
      this.requirement.tier = requirement.tier;
      this.canBeBought = requirement.isSatisfied && Galaxy.canBeBought;
      this.distantStart = EternityChallenge(5).isRunning ? 0 : Galaxy.costScalingStart;
      this.remoteStart = Galaxy.remoteStart;
      this.lockText = Galaxy.lockText;
      this.canBulkBuy = EternityMilestone.autobuyMaxGalaxies.isReached;
      this.creditsClosed = GameEnd.creditsEverClosed;
      if (this.isDoomed) {
        this.scalingText = {
          distant: this.formatGalaxies(this.distantStart),
          remote: this.formatGalaxies(Galaxy.remoteStart),
        };
      }
      this.hasTutorial = Tutorial.isActive(TUTORIAL_STATE.GALAXY);
    },
    buyGalaxy(bulk) {
      if (!this.canBeBought) return;
      manualRequestGalaxyReset(this.canBulkBuy && bulk);
    },
    formatGalaxies(num) {
      return num > 1e8 ? format(num, 2) : formatInt(num);
    },
  }
};
</script>

<template>
  <div class="reset-container galaxy">
    <h4>{{ typeName }} ({{ sumText }})</h4>
    <span>Требование: {{ formatInt(requirement.amount) }} {{ dimName }} Изм. Антиматерии</span>
    <span v-if="hasIncreasedScaling">{{ costScalingText }}</span>
    <button
      :class="classObject"
      @click.exact="buyGalaxy(true)"
      @click.shift.exact="buyGalaxy(false)"
    >
      {{ buttonText }}
      <div
        v-if="hasTutorial"
        class="fas fa-circle-exclamation l-notification-icon"
      />
    </button>
  </div>
</template>
