export const eternityMilestones = {
  autobuyerIPMult: {
    eternities: 1,
    reward: "Открывает автопокупатель множителя Очков Бесконечности",
    pelleUseless: true
  },
  keepAutobuyers: {
    eternities: 2,
    reward: "Вы начинаете Вечности со всеми пройденными Испытаниями, открытыми обычными автопокупатели и разорванной бесконечностью"
  },
  autobuyerReplicantiGalaxy: {
    eternities: 3,
    reward: "Открывает автопокупатель Галактик Репликантий"
  },
  keepInfinityUpgrades: {
    eternities: 4,
    reward: "Вы начинаете Вечности со всеми улучшениями Бесконечности",
    givenByPelle: () => PelleUpgrade.keepInfinityUpgrades.isBought,
    pelleUseless: true
  },
  bigCrunchModes: {
    eternities: 5,
    reward: "Открывает больше режимов автопокупателю Большого Взрыва"
  },
  autoEP: {
    eternities: 6,
    reward: () => {
      const EPmin = getOfflineEPGain(TimeSpan.fromMinutes(1).totalMilliseconds);
      const em200 = getEternitiedMilestoneReward(TimeSpan.fromHours(1).totalMilliseconds,
        EternityMilestone.autoEternities.isReached).gt(0);
      const em1000 = getInfinitiedMilestoneReward(TimeSpan.fromHours(1).totalMilliseconds,
        EternityMilestone.autoInfinities.isReached).gt(0);
      if (!player.options.offlineProgress) return `Этот этап давал бы ОВ в оффлайне, но оффлайн прогресс пока что выключен`;
      const effectText = (em200 || em1000) ? "Не работает" : `Даёт ${format(EPmin, 2, 2)} ОВ/мин`;
      return `В оффлайне даёт ${formatPercents(0.25)} от лучших Очков Вечности в минуту с прошлых
        Вечностей (${effectText})`;
    },
    activeCondition: () => (player.options.offlineProgress
      ? `Работает только если другие оффлайн-зависимые этапы
        (${formatInt(200)} или ${formatInt(1000)}) неактивны`
      : ""),
  },
  autoIC: {
    eternities: 7,
    reward: `Вы проходите Испытания Бесконечности в момент их открытия,
      и автопокупатель Жертвования Измерений сохраняется`,
    pelleUseless: true
  },
  keepBreakUpgrades: {
    eternities: 8,
    reward: "Вы начинаете Вечности со всеми улучшениями Разрыва Бесконечности",
    givenByPelle: () => PelleUpgrade.keepBreakInfinityUpgrades.isBought,
    pelleUseless: true
  },
  autobuyMaxGalaxies: {
    eternities: 9,
    reward: "Открывает режим 'купить макс.' автопокупателю Галактик Антиматерии"
  },
  unlockReplicanti: {
    eternities: 10,
    reward: "Вы начинаете с открытыми Репликантиями",
    givenByPelle: () => PelleUpgrade.replicantiStayUnlocked.isBought,
    pelleUseless: true
  },
  autobuyerID1: {
    eternities: 11,
    reward: "Открывает автопокупатель 1-го Измерения Бесконечности",
    givenByPelle: () => PelleUpgrade.IDAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerID2: {
    eternities: 12,
    reward: "Открывает автопокупатель 2-го Измерения Бесконечности",
    givenByPelle: () => PelleUpgrade.IDAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerID3: {
    eternities: 13,
    reward: "Открывает автопокупатель 3-го Измерения Бесконечности",
    givenByPelle: () => PelleUpgrade.IDAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerID4: {
    eternities: 14,
    reward: "Открывает автопокупатель 4-го Измерения Бесконечности",
    givenByPelle: () => PelleUpgrade.IDAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerID5: {
    eternities: 15,
    reward: "Открывает автопокупатель 5-го Измерения Бесконечности",
    givenByPelle: () => PelleUpgrade.IDAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerID6: {
    eternities: 16,
    reward: "Открывает автопокупатель 6-го Измерения Бесконечности",
    givenByPelle: () => PelleUpgrade.IDAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerID7: {
    eternities: 17,
    reward: "Открывает автопокупатель 7-го Измерения Бесконечности",
    givenByPelle: () => PelleUpgrade.IDAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerID8: {
    eternities: 18,
    reward: "Открывает автопокупатель 8-го Измерения Бесконечности",
    givenByPelle: () => PelleUpgrade.IDAutobuyers.isBought,
    pelleUseless: true
  },
  autoUnlockID: {
    eternities: 25,
    reward: "Измерения Бесконечности автоматически открываются при их достижении"
  },
  unlockAllND: {
    eternities: 30,
    reward: "В начале все Измерения Антиматерии доступны к покупке"
  },
  replicantiNoReset: {
    eternities: 40,
    reward: `Галактики Репликантий не сбрасывают Антиматерию, Измерения Антиматерии,
      Тик-скорость, Жертвование Измерениями или Ускорения измерений`,
    pelleUseless: true
  },
  autobuyerReplicantiChance: {
    eternities: 50,
    reward: "Открывает автопокупатель шанса Репликантий",
    givenByPelle: () => PelleUpgrade.replicantiAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerReplicantiInterval: {
    eternities: 60,
    reward: "Открывает автопокупатель интервалов Репликантий",
    givenByPelle: () => PelleUpgrade.replicantiAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerReplicantiMaxGalaxies: {
    eternities: 80,
    reward: "Открывает автопокупатель максимальных Галактик Репликатний",
    givenByPelle: () => PelleUpgrade.replicantiAutobuyers.isBought,
    pelleUseless: true
  },
  autobuyerEternity: {
    eternities: 100,
    reward: "Открывает автопокупатель Вечностей"
  },
  autoEternities: {
    eternities: 200,
    reward: () => {
      if (!player.options.offlineProgress) return `Этот этап давал бы Вечности в оффлайне, но оффлайн прогресс пока что выключен`;
      const eternities = getEternitiedMilestoneReward(TimeSpan.fromHours(1).totalMilliseconds,
        player.eternities.gte(200));
      // As far as I can tell, using templates here as Codefactor wants would lead to nested templates,
      // which seems messy to say the least.
      const realTime = PlayerProgress.seenAlteredSpeed() ? " в реал. времени" : "";
      // eslint-disable-next-line prefer-template
      return `В оффлайне даёт Вечности с частотой ${formatPercents(0.5)} самой быстрой Вечности ${realTime} ` +
        (eternities.gt(0) ? `(Даёт ${format(eternities, 2, 2)}/час)` : "(Не работает)");
    },
    activeCondition: () => (player.options.offlineProgress
      ? `Вы должны быть вне всех Испытаний и Замедления, и автопокупатель Вечностей должен быть поставлен 'Вечность при нуле ОВ'.
        Эффект ограничен на ${formatInt(33)}мс.`
      : ""),
      pelleUseless: true
  },
  autoInfinities: {
    eternities: 1000,
    reward: () => {
      if (!player.options.offlineProgress) return `Этот этап давал бы Бесконечности в оффлайне, но оффлайн прогресс пока что выключен`;
      const infinities = getInfinitiedMilestoneReward(TimeSpan.fromHours(1).totalMilliseconds,
        player.eternities.gte(1000));
      // eslint-disable-next-line prefer-template
      return `В оффлайне даёт Бесконечности с частотой ${formatPercents(0.5)}
        лучших Бесконечностей/час эту Вечность ` +
        (infinities.gt(0) ? `(Даёт ${format(infinities, 2, 2)}/час)` : "(Не работает)");
    },
    activeCondition: () => (player.options.offlineProgress
      ? `Вы должны быть вне обычных Испытаний, Испытаний Бесконечности и вне ИВ4 и ИВ12,
        автопокупатель Большого Взрыва должен быть включен и поставлен в режим 'Большой взрыв каждые ${formatInt(5)} или менее секунд',
        и автопокупатель Вечности должен быть выключен.`
      : ""),
      pelleUseless: true
  }
};
