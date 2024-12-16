import { DC } from "@/core/constants";

export const MatterScale = {
  proton: new Decimal("2.82e-45"),

  estimate(matter) {
    if (!matter) return ["Антиматерии пока нет."];
    if (matter.gt(DC.E100000)) {
      return [
        `Если писать ${formatInt(3)} цифры в секунду, то займёт`,
        TimeSpan.fromSeconds(matter.log10() / 3).toString()`,`,
        "чтобы написать всё число антиматерии."
      ];
    }
    const planck = new Decimal("4.22419e-105");
    const planckedMatter = matter.times(planck);
    if (planckedMatter.gt(this.proton)) {
      const scale = this.macroScale(planckedMatter);
      const amount = format(planckedMatter.dividedBy(scale.amount), 2, 1);
      return [`Если бы каждая антиматерия имела планковый объём, этого было бы достаточно,
        чтобы ${scale.verb} ${amount} ${scale.name}`];
    }
    const scale = this.microScale(matter);
    return [`Если бы каждая антиматерия была ${format(this.proton.div(scale.amount).div(matter), 2, 1)} ${scale.name}, этого было бы достаточто, чтобы создать протон.`];
  },

  microScale(matter) {
    const micro = this.microObjects;
    for (let i = 0; i < micro.length; i++) {
      const scale = micro[i];
      if (matter.times(scale.amount).lt(this.proton)) {
        return scale;
      }
    }
    throw "Cannot determine smallest antimatter scale";
  },

  macroScale(matter) {
    const macro = this.macroObjects;
    const last = macro.last();
    if (matter.gte(last.amount)) return last;
    let low = 0;
    let high = macro.length;
    while (low !== high) {
      const mid = Math.floor((low + high) / 2);
      if (macro[mid].amount.lte(matter)) {
        low = mid + 1;
      } else {
        high = mid;
      }
    }
    return macro[high - 1];
  },

  microObjects: [
    { amount: new Decimal("1e-54"), name: "кубических аттометров" },
    { amount: new Decimal("1e-63"), name: "кубических зептометров" },
    { amount: new Decimal("1e-72"), name: "кубических йоктометров" },
    { amount: new Decimal("4.22419e-105"), name: "планковый объём" }
  ],

  macroObjects: [
    { amount: new Decimal("2.82e-45"), name: "протон(ов)", verb: "создать" },
    { amount: new Decimal("1e-42"), name: "ядро/ядер", verb: "создать" },
    { amount: new Decimal("7.23e-30"), name: "атом(ов) водорода", verb: "создать" },
    { amount: new Decimal("5e-21"), name: "вирус(ов)", verb: "создать" },
    { amount: new Decimal("9e-17"), name: "эритроцит(ов)", verb: "создать" },
    { amount: new Decimal("6.2e-11"), name: "песчинку(ок)", verb: "создать" },
    { amount: new Decimal("5e-8"), name: "крупинку(ок) риса", verb: "создать" },
    { amount: new Decimal("3.555e-6"), name: "чайн. ложку(ек)", verb: "наполнить" },
    { amount: new Decimal("7.5e-4"), name: "бутылку(ок) из под вина", verb: "наполнить" },
    { amount: DC.D1, name: "морозилку(ок)", verb: "наполнить" },
    { amount: new Decimal("2.5e3"), name: "Olympic-sized swimming pools", verb: "наполнить" },
    { amount: new Decimal("2.6006e6"), name: "Great Pyramids of Giza", verb: "создать" },
    { amount: new Decimal("3.3e8"), name: "Great Walls of China", verb: "создать" },
    { amount: new Decimal("5e12"), name: "large asteroids", verb: "создать" },
    { amount: new Decimal("4.5e17"), name: "dwarf planets", verb: "создать" },
    { amount: new Decimal("1.08e21"), name: "Earths", verb: "создать" },
    { amount: new Decimal("1.53e24"), name: "Jupiters", verb: "создать" },
    { amount: new Decimal("1.41e27"), name: "Suns", verb: "создать" },
    { amount: new Decimal("5e32"), name: "red giants", verb: "создать" },
    { amount: new Decimal("8e36"), name: "hypergiant stars", verb: "создать" },
    { amount: new Decimal("1.7e45"), name: "nebulas", verb: "создать" },
    { amount: new Decimal("1.7e48"), name: "Oort clouds", verb: "создать" },
    { amount: new Decimal("3.3e55"), name: "Local Bubbles", verb: "создать" },
    { amount: new Decimal("3.3e61"), name: "galaxies", verb: "создать" },
    { amount: new Decimal("5e68"), name: "Local Groups", verb: "создать" },
    { amount: new Decimal("1e73"), name: "Sculptor Voids", verb: "создать" },
    { amount: new Decimal("3.4e80"), name: "observable universes", verb: "создать" },
    { amount: new Decimal("1e113"), name: "Измерений", verb: "создать" },
    { amount: DC.C2P1024, name: "Изм. Бесконечности", verb: "создать" },
    { amount: new Decimal("1e65000"), name: "Изм. Времени", verb: "создать" }
  ]
};
