<script>
import ModalWrapperChoice from "@/components/modals/ModalWrapperChoice";

export default {
  name: "HardResetModal",
  components: {
    ModalWrapperChoice
  },
  data() {
    return {
      input: ""
    };
  },
  computed: {
    willHardReset() {
      return this.input === "Шрек - моя любовь, Шрек - моя жизнь";
    },
    hasExtraNG() {
      return player.records.fullGameCompletions > 0;
    },
    hasSpeedrun() {
      return player.speedrun.isUnlocked;
    }
  },
  destroyed() {
    if (this.willHardReset) SecretAchievement(38).unlock();
  },
  methods: {
    hardReset() {
      if (this.willHardReset) GameStorage.hardReset();
      this.input = "";
    },
  },
};
</script>

<template>
  <ModalWrapperChoice
    :show-cancel="!willHardReset"
    :show-confirm="willHardReset"
    confirm-class="o-primary-btn--width-medium c-modal__confirm-btn c-modal-hard-reset-btn"
    @confirm="hardReset"
  >
    <template #header>
      ПОЛНЫЙ СБРОС СОХРАНЕНИЯ
    </template>
    <div class="c-modal-message__text">
      Подумай дважды насчёт полного сброса файла сохранения.
      <span class="c-modal-hard-reset-danger">Удаление сохранения не откроет ничего секретного.</span>
      Напиши "Шрек - моя любовь, Шрек - моя жизнь" чтобы подтвердить.
      <div class="c-modal-hard-reset-danger">
        СОХРАНЕНИЕ ПОЛНОСТЬЮ СБРОСИТСЯ.
        <span v-if="hasExtraNG">
          <br>
          Это также уберёт все косметические Глифы, открытые при прохождении игры!
        </span>
        <span v-if="hasSpeedrun">
          <br>
          Ты потеряешь способность делать спидраны. Чтобы сбросить забег в спидране, используй "Начать спидран".
        </span>
      </div>
    </div>
    <input
      ref="input"
      v-model="input"
      type="text"
      class="c-modal-input c-modal-hard-reset__input"
      @keyup.esc="emitClose"
    >
    <div class="c-modal-hard-reset-info">
      <div
        v-if="willHardReset"
        class="c-modal-hard-reset-danger"
      >
        Фраза подтверждена - пути назад больше не будет!
      </div>
      <div v-else>
        Напиши фразу правильно, чтобы сбросить сохранение.
      </div>
    </div>
    <template #confirm-text>
      УДАЛИТЬ
    </template>
  </ModalWrapperChoice>
</template>
