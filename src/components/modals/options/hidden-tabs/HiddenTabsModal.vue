<script>
import HiddenTabGroup from "@/components/modals/options/hidden-tabs/HiddenTabGroup";
import ModalWrapperOptions from "@/components/modals/options/ModalWrapperOptions";
import PrimaryButton from "@/components/PrimaryButton";

export default {
  name: "HiddenTabsModal",
  components: {
    HiddenTabGroup,
    ModalWrapperOptions,
    PrimaryButton,
  },
  data() {
    return {
      isEnslaved: false,
      isAlmostEnd: false,
    };
  },
  computed: {
    tabs: () => Tabs.currentUIFormat,
  },
  methods: {
    update() {
      this.isEnslaved = Enslaved.isRunning;
      this.isAlmostEnd = Pelle.hasGalaxyGenerator;
    },
    showAllTabs() {
      for (const tab of this.tabs) {
        tab.unhideTab();
        for (const subtab of tab.subtabs)
          subtab.unhideTab();
      }
    }
  },
};
</script>

<template>
  <ModalWrapperOptions class="l-wrapper">
    <template #header>
      Видимые вкладки
    </template>
    <div class="c-modal--short">
      Нажми на кнопку чтобы переключить показ вкладки.
      <br>
      Некоторые вкладки нельзя скрыть, включая текущую.
      <br>
      Показ вкладки, где все подвкладки скрыты, покажет все подвкладки,
      и скрытие всех подвкладок скроет саму вкладку.
      <br>
      <div v-if="isAlmostEnd">
        Нельзя скрывать вкладки после разблокировки Генератор Галактик.
      </div>
      <div v-if="isEnslaved">
        <br>
        <i>Ты должен... видеть всё...</i>
        <br>
        (В этой Реальности нельзя скрывать вкладки)
      </div>
      <PrimaryButton
        @click="showAllTabs"
      >
        Показать все вкладки
      </PrimaryButton>
      <HiddenTabGroup
        v-for="(tab, index) in tabs"
        :key="index"
        :tab="tab"
        :change-enabled="!isEnslaved && !isAlmostEnd"
        class="l-hide-modal-tab-container"
      />
    </div>
  </ModalWrapperOptions>
</template>

<style scoped>
.l-wrapper {
  width: 62rem;
}

.t-s12 .l-wrapper {
  width: 65rem;
}
</style>