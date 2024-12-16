<script>
export default {
  name: "EternityPointsHeader",
  data() {
    return {
      eternityPoints: new Decimal()
    };
  },
  methods: {
    update() {
      this.eternityPoints.copyFrom(Currency.eternityPoints.value.floor());
    }
  }
};
</script>

<template>
  <div class="c-eternity-tab__header">
    У вас
    <span class="c-eternity-tab__eternity-points">{{ format(eternityPoints, 2) }}</span>
    Очков Вечности.
  </div>
</template>

<style scoped>

</style>
