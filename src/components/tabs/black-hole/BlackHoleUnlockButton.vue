<script>
export default {
  name: "BlackHoleUnlockButton",
  data() {
    return {
      canBeUnlocked: false,
    };
  },
  computed: {
    classObject() {
      return {
        "c-reality-upgrade-btn--unavailable": !this.canBeUnlocked
      };
    },
  },
  methods: {
    update() {
      this.canBeUnlocked = BlackHoles.canBeUnlocked;
    },
    unlock() {
      BlackHoles.unlock();
      this.$emit("blackholeunlock");
    }
  }
};
</script>

<template>
  <button
    :class="classObject"
    class="l-reality-upgrade-btn c-reality-upgrade-btn c-reality-upgrade-btn--black-hole-unlock"
    @click="unlock"
  >
    Освободить Чёрную Дыру
    <br>
    Цена: {{ formatInt(100) }} Машин Реальности
  </button>
</template>

<style scoped>

</style>
