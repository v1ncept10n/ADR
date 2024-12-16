<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "ExitChallengeModal",
  components: {
    ModalWrapperChoice
  },
  props: {
    challengeName: {
      type: String,
      required: true,
    },
    normalName: {
      type: String,
      required: true,
    },
    hasHigherLayers: {
      type: Boolean,
      required: true,
    },
    exitFn: {
      type: Function,
      required: true,
    }
  },
  computed: {
    isCelestial() {
      return this.challengeName.match("Reality");
    },
    isRestarting() {
      return this.isCelestial ? player.options.retryCelestial : player.options.retryChallenge;
    }
  },
  methods: {
    handleYesClick() {
      this.exitFn();
      EventHub.ui.offAll(this);
    }
  },
};
</script>

<template>
  <ModalWrapperChoice
    option="exitChallenge"
    @confirm="handleYesClick"
  >
    <template #header>
      {{ isRestarting ? "Перезапуск" : "Выход из" }} {{ challengeName }}
    </template>

    <div class="c-modal-message__text">
      <span v-if="isRestarting">
        Вы сразу же перезайдёте в {{ challengeName }} после подтверждения.
      </span>
      <span v-else>
        Вас обратно вернёт в {{ normalName }} без каких-либо ограничений.
      </span>
      <span v-if="hasHigherLayers">
        Другие эффекты higher-layer ограничений всё ещё будут действовать.
      </span>
    </div>
    <template #confirm-text>
      {{ isRestarting ? "Перезапуск" : "Выйти" }}
    </template>
  </ModalWrapperChoice>
</template>
