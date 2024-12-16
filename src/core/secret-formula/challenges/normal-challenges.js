import { DC } from "../../constants";

// I tried to make it relatively simple to add more locks; the idea is that you give it a value here
// and then it's all handled in the backend
// If you need to lock a challenge, set lockedAt to a new Decimal variable reflective of a desired number of Infinities
// They will always be unlocked post-eternity

export const normalChallenges = [
  {
    id: 1,
    legacyId: 1,
    isQuickResettable: false,
    description() {
      return PlayerProgress.eternityUnlocked()
        ? "Сделай Бесконечность впервые вне испытания."
        : "Сделай Бесконечность впервые.";
    },
    name: "Автопокупатель 1-го Измерения антиматерии",
    reward: "Улучшаемый Автопокупатель 1-го Измерения антиматерии",
    lockedAt: DC.D0,
  },
  {
    id: 2,
    legacyId: 2,
    isQuickResettable: false,
    description:
      () => "покупка Измерений Антиматерии или улучшений Тик-скорости обнуляет производство всех Измерений Антиматерии. " +
      `Производство постепенно возращается к норме на протяжении ${formatInt(3)} минут.`,
    name: "Автопокупатель 2-го Измерения антиматерии",
    reward: "Upgradeable 2nd Antimatter Dimension Autobuyer",
    lockedAt: DC.D0,
  },
  {
    id: 3,
    legacyId: 3,
    isQuickResettable: false,
    description:
      `the 1st Antimatter Dimension is heavily weakened, but gets an uncapped exponentially increasing multiplier.
        This multiplier resets after Dimension Boosts and Antimatter Galaxies.`,
    name: "Автопокупатель 3-го Измерения антиматерии",
    reward: "Upgradeable 3rd Antimatter Dimension Autobuyer",
    lockedAt: DC.D0,
  },
  {
    id: 4,
    legacyId: 8,
    isQuickResettable: false,
    description: "buying an Antimatter Dimension automatically erases all lower tier Antimatter Dimensions, " +
      "like a sacrifice without the boost.",
    name: "Автопокупатель 4-го Измерения антиматерии",
    reward: "Upgradeable 4th Antimatter Dimension Autobuyer",
    lockedAt: DC.D0,
  },
  {
    id: 5,
    legacyId: 6,
    isQuickResettable: false,
    description:
      () => `the Tickspeed purchase multiplier starts at ${formatX(1.080, 0, 3)} instead of ${formatX(1.1245, 0, 3)}.`,
    name: "Автопокупатель 5-го Измерения антиматерии",
    reward: "Upgradeable 5th Antimatter Dimension Autobuyer",
    lockedAt: DC.D0,
  },
  {
    id: 6,
    legacyId: 10,
    isQuickResettable: false,
    description: () => `upgrading each Antimatter Dimension costs the Antimatter Dimension ${formatInt(2)} tiers ` +
      "below it instead of antimatter. Antimatter Dimension prices are modified.",
    name: "Автопокупатель 6-го Измерения антиматерии",
    reward: "Upgradeable 6th Antimatter Dimension Autobuyer",
    lockedAt: DC.D0,
  },
  {
    id: 7,
    legacyId: 9,
    isQuickResettable: false,
    description: () =>
      `the multiplier from buying ${formatInt(10)} Antimatter Dimensions is reduced to ${formatX(1)}. This increases by
        ${formatX(0.2, 1, 1)} per Dimension Boost, to a maximum of ${formatX(2)}, and is unaffected by any upgrades.`,
    name: "Автопокупатель 7-го Измерения антиматерии",
    reward: "Upgradeable 7th Antimatter Dimension Autobuyer",
    lockedAt: DC.D0,
  },
  {
    id: 8,
    legacyId: 11,
    isQuickResettable: false,
    description: `Dimension Boosts provide no multiplier and Antimatter Galaxies cannot be bought. Dimensional
      Sacrifice resets antimatter and all Antimatter Dimensions, but also gives a significantly stronger multiplier.`,
    name: "Автопокупатель 8-го Измерения антиматерии",
    reward: "Upgradeable 8th Antimatter Dimension Autobuyer",
    lockedAt: DC.D0,
  },
  {
    id: 9,
    legacyId: 5,
    isQuickResettable: true,
    description: () => `whenever you buy Tickspeed upgrades or ${formatInt(10)} of an Antimatter Dimension, ` +
      "everything else of equal cost will increase to its next cost step.",
    name: "Автопокупатель Тик-скорости",
    reward: "Upgradeable Tickspeed Autobuyer",
    lockedAt: DC.D0,
  },
  {
    id: 10,
    legacyId: 4,
    isQuickResettable: false,
    description: () => `существует только ${formatInt(6)} Измерений Антиматерии. Цены Ускорений Измерений ` +
      "и Галактик Антиматерии изменены.",
    name: "Автоматизированные Ускорения Измерений",
    reward: "Dimension Boosts Autobuyer",
    lockedAt: DC.D16,
  },
  {
    id: 11,
    legacyId: 12,
    isQuickResettable: true,
    description: () => `there is normal matter which rises once you have at least ${formatInt(1)} 2nd Antimatter ` +
      "Dimension. If it exceeds your antimatter, it will Dimension Boost without giving the bonus.",
    name: "Automated Antimatter Galaxies",
    reward: "Antimatter Galaxies Autobuyer",
    lockedAt: DC.D16,
  },
  {
    id: 12,
    legacyId: 7,
    isQuickResettable: false,
    description: () => `each Antimatter Dimension produces the Dimension ${formatInt(2)} tiers below it
      instead of ${formatInt(1)}. Both 1st and 2nd Dimensions produce antimatter.
      Для компенсации, 2-ое, 4-ое и 6-ое Измерения сделаны сильнее.`,
    name: "Automated Big Crunches",
    reward: "Big Crunches Autobuyer",
    lockedAt: DC.D16,
  }
];
