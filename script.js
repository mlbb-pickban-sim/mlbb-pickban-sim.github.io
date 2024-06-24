document.addEventListener("DOMContentLoaded", () => {

window.scrollTo(1, 0);
let currentHeroIndex = 0;

const heroes = [
    { name: 'Miya', categories: ['marksman'], img: 'src/miya.webp', bigimg: 'src/miya2.webp', smlimg: 'src/miya3.png', splash:'src/miya4.webp',selected:false, wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1  },
    { name: 'Balmond', categories: ['fighter'], img: 'src/balmond.webp', bigimg: 'src/balmond2.webp', smlimg: 'src/balmond3.png', selected:false, wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1  },
    { name: 'Saber', categories: ['assassin'], img: 'src/saber.webp', bigimg: 'src/saber2.webp', smlimg: 'src/saber3.png', selected:false, wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1  },
    { name: 'Alice', categories: ['mage', 'tank'], img: 'src/alice.webp', bigimg: 'src/alice2.webp', smlimg: 'src/alice3.png', selected:false, wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1  },
    { name: 'Nana', categories: ['mage'], img: 'src/nana.webp', bigimg: 'src/nana2.webp', smlimg: 'src/nana3.png', selected:false, wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1  },
    { name: 'Tigreal', categories: ['tank'], img: 'src/tigreal.webp', bigimg: 'src/tigreal2.webp', smlimg: 'src/tigreal3.png', selected:false, wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1  },
    { name: 'Alucard', categories: ['fighter', 'assassin'], img: 'src/alucard.webp', bigimg: 'src/alucard2.webp', smlimg: 'src/alucard3.png', selected:false, wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1  },
    { name: 'Karina', categories: ['assassin'], img: 'src/karina.webp', bigimg: 'src/karina2.webp', smlimg: 'src/karina3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Akai', categories: ['tank'], img: 'src/akai.webp', bigimg: 'src/akai2.webp', smlimg: 'src/akai3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Franco', categories: ['tank'], img: 'src/franco.webp', bigimg: 'src/franco2.webp', smlimg: 'src/franco3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Bane', categories: ['fighter', 'mage'], img: 'src/bane.webp', bigimg: 'src/bane2.webp', smlimg: 'src/bane3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Bruno', categories: ['marksman'], img: 'src/bruno.webp', bigimg: 'src/bruno2.webp', smlimg: 'src/bruno3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Clint', categories: ['marksman'], img: 'src/clint.webp', bigimg: 'src/clint2.webp', smlimg: 'src/clint3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Rafaela', categories: ['support'], img: 'src/rafaela.webp', bigimg: 'src/rafaela2.webp', smlimg: 'src/rafaela3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Eudora', categories: ['mage'], img: 'src/eudora.webp', bigimg: 'src/eudora2.webp', smlimg: 'src/eudora3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Zilong', categories: ['fighter', 'assassin'], img: 'src/zilong.webp', bigimg: 'src/zilong2.webp', smlimg: 'src/zilong3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Fanny', categories: ['assassin'], img: 'src/fanny.webp', bigimg: 'src/fanny2.webp', smlimg: 'src/fanny3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Layla', categories: ['marksman'], img: 'src/layla.webp', bigimg: 'src/layla2.webp', smlimg: 'src/layla3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Minotaur', categories: ['tank', 'support'], img: 'src/minotaur.webp', bigimg: 'src/minotaur2.webp', smlimg: 'src/minotaur3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Lolita', categories: ['tank', 'support'], img: 'src/lolita.webp', bigimg: 'src/lolita2.webp', smlimg: 'src/lolita3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Hayabusa', categories: ['assassin'], img: 'src/hayabusa.webp', bigimg: 'src/hayabusa2.webp', smlimg: 'src/hayabusa3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Freya', categories: ['fighter', 'assassin'], img: 'src/freya.webp', bigimg: 'src/freya2.webp', smlimg: 'src/freya3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Gord', categories: ['mage'], img: 'src/gord.webp', bigimg: 'src/gord2.webp', smlimg: 'src/gord3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Natalia', categories: ['assassin'], img: 'src/natalia.webp', bigimg: 'src/natalia2.webp', smlimg: 'src/natalia3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Kagura', categories: ['mage'], img: 'src/kagura.webp', bigimg: 'src/kagura2.webp', smlimg: 'src/kagura3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Chou', categories: ['fighter'], img: 'src/chou.webp', bigimg: 'src/chou2.webp', smlimg: 'src/chou3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Sun', categories: ['fighter'], img: 'src/sun.webp', bigimg: 'src/sun2.webp', smlimg: 'src/sun3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Alpha', categories: ['fighter'], img: 'src/alpha.webp', bigimg: 'src/alpha2.webp', smlimg: 'src/alpha3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Ruby', categories: ['fighter', 'tank'], img: 'src/ruby.webp', bigimg: 'src/ruby2.webp', smlimg: 'src/ruby3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Yi Sun-shin', categories: ['assassin', 'marksman'], img: 'src/yss.webp', bigimg: 'src/yss2.webp', smlimg: 'src/yss3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Moskov', categories: ['marksman'], img: 'src/moskov.webp', bigimg: 'src/moskov2.webp', smlimg: 'src/moskov3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Johnson', categories: ['tank', 'support'], img: 'src/johnson.webp', bigimg: 'src/johnson2.webp', smlimg: 'src/johnson3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Cyclops', categories: ['mage'], img: 'src/cyclops.webp', bigimg: 'src/cyclops2.webp', smlimg: 'src/cyclops3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Estes', categories: ['support'], img: 'src/estes.webp', bigimg: 'src/estes2.webp', smlimg: 'src/estes3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Hilda', categories: ['fighter', 'tank'], img: 'src/hilda.webp', bigimg: 'src/hilda2.webp', smlimg: 'src/hilda3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Aurora', categories: ['mage'], img: 'src/aurora.webp', bigimg: 'src/aurora2.webp', smlimg: 'src/aurora3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Lapu-Lapu', categories: ['fighter'], img: 'src/lapulapu.webp', bigimg: 'src/lapulapu2.webp', smlimg: 'src/lapulapu3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Vexana', categories: ['mage'], img: 'src/vexana.webp', bigimg: 'src/vexana2.webp', smlimg: 'src/vexana3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Roger', categories: ['marksman', 'fighter'], img: 'src/roger.webp', bigimg: 'src/roger2.webp', smlimg: 'src/roger3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Karrie', categories: ['marksman'], img: 'src/karrie.webp', bigimg: 'src/karrie2.webp', smlimg: 'src/karrie3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Gatotkaca', categories: ['tank', 'fighter'], img: 'src/gatot.webp', bigimg: 'src/gatot2.webp', smlimg: 'src/gatot3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Harley', categories: ['mage', 'assassin'], img: 'src/harley.webp', bigimg: 'src/harley2.webp', smlimg: 'src/harley3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Irithel', categories: ['marksman'], img: 'src/irithel.webp', bigimg: 'src/irithel2.webp', smlimg: 'src/irithel3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Grock', categories: ['tank', 'fighter'], img: 'src/grock.webp', bigimg: 'src/grock2.webp', smlimg: 'src/grock3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Argus', categories: ['fighter'], img: 'src/argus.webp', bigimg: 'src/argus2.webp', smlimg: 'src/argus3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Odette', categories: ['mage'], img: 'src/odette.webp', bigimg: 'src/odette2.webp', smlimg: 'src/odette3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Lancelot', categories: ['assassin'], img: 'src/lancelot.webp', bigimg: 'src/lancelot2.webp', smlimg: 'src/lancelot3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Diggie', categories: ['support'], img: 'src/diggie.webp', bigimg: 'src/diggie2.webp', smlimg: 'src/diggie3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Hylos', categories: ['tank'], img: 'src/hylos.webp', bigimg: 'src/hylos2.webp', smlimg: 'src/hylos3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Zhask', categories: ['mage'], img: 'src/zhask.webp', bigimg: 'src/zhask2.webp', smlimg: 'src/zhask3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Helcurt', categories: ['assassin'], img: 'src/helcurt.webp', bigimg: 'src/helcurt2.webp', smlimg: 'src/helcurt3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Pharsa', categories: ['mage'], img: 'src/pharsa.webp', bigimg: 'src/pharsa2.webp', smlimg: 'src/pharsa3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Lesley', categories: ['assassin', 'marksman'], img: 'src/lesley.webp', bigimg: 'src/lesley2.webp', smlimg: 'src/lesley3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Jawhead', categories: ['fighter'], img: 'src/jawhead.webp', bigimg: 'src/jawhead2.webp', smlimg: 'src/jawhead3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Angela', categories: ['support'], img: 'src/angela.webp', bigimg: 'src/angela2.webp', smlimg: 'src/angela3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Gusion', categories: ['assassin'], img: 'src/gusion.webp', bigimg: 'src/gusion2.webp', smlimg: 'src/gusion3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Valir', categories: ['mage'], img: 'src/valir.webp', bigimg: 'src/valir2.webp', smlimg: 'src/valir3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Martis', categories: ['fighter'], img: 'src/martis.webp', bigimg: 'src/martis2.webp', smlimg: 'src/martis3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Uranus', categories: ['tank'], img: 'src/uranus.webp', bigimg: 'src/uranus2.webp', smlimg: 'src/uranus3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Hanabi', categories: ['marksman'], img: 'src/hanabi.webp', bigimg: 'src/hanabi2.webp', smlimg: 'src/hanabi3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Chang\'e', categories: ['mage'], img: 'src/change.webp', bigimg: 'src/change2.webp', smlimg: 'src/change3.png', splash: "src/change4.webp", selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Kaja', categories: ['support', 'fighter'], img: 'src/kaja.webp', bigimg: 'src/kaja2.webp', smlimg: 'src/kaja3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Selena', categories: ['assassin', 'mage'], img: 'src/selena.webp', bigimg: 'src/selena2.webp', smlimg: 'src/selena3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Aldous', categories: ['fighter'], img: 'src/aldous.webp', bigimg: 'src/aldous2.webp', smlimg: 'src/aldous3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Claude', categories: ['marksman'], img: 'src/claude.webp', bigimg: 'src/claude2.webp', smlimg: 'src/claude3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Vale', categories: ['mage'], img: 'src/vale.webp', bigimg: 'src/vale2.webp', smlimg: 'src/vale3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Leomord', categories: ['fighter'], img: 'src/leomord.webp', bigimg: 'src/leomord2.webp', smlimg: 'src/leomord3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Lunox', categories: ['mage'], img: 'src/lunox.webp', bigimg: 'src/lunox2.webp', smlimg: 'src/lunox3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Hanzo', categories: ['assassin'], img: 'src/hanzo.webp', bigimg: 'src/hanzo2.webp', smlimg: 'src/hanzo3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Belerick', categories: ['tank'], img: 'src/belerick.webp', bigimg: 'src/belerick2.webp', smlimg: 'src/belerick3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Kimmy', categories: ['marksman', 'mage'], img: 'src/kimmy.webp', bigimg: 'src/kimmy2.webp', smlimg: 'src/kimmy3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Thamuz', categories: ['fighter'], img: 'src/thamuz.webp', bigimg: 'src/thamuz2.webp', smlimg: 'src/thamuz3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Harith', categories: ['mage'], img: 'src/harith.webp', bigimg: 'src/harith2.webp', smlimg: 'src/harith3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Minsitthar', categories: ['fighter'], img: 'src/minsi.webp', bigimg: 'src/minsi2.webp', smlimg: 'src/minsi3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Kadita', categories: ['mage', 'assassin'], img: 'src/kadita.webp', bigimg: 'src/kadita2.webp', smlimg: 'src/kadita3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Faramis', categories: ['mage', 'support'], img: 'src/faramis.webp', bigimg: 'src/faramis2.webp', smlimg: 'src/faramis3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Badang', categories: ['fighter'], img: 'src/badang.webp', bigimg: 'src/badang2.webp', smlimg: 'src/badang3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Khufra', categories: ['tank'], img: 'src/khufra.webp', bigimg: 'src/khufra2.webp', smlimg: 'src/khufra3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Granger', categories: ['marksman'], img: 'src/granger.webp', bigimg: 'src/granger2.webp', smlimg: 'src/granger3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Guinevere', categories: ['fighter'], img: 'src/guin.webp', bigimg: 'src/guin2.webp', smlimg: 'src/guin3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Esmeralda', categories: ['mage', 'tank'], img: 'src/esme.webp', bigimg: 'src/esme2.webp', smlimg: 'src/esme3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Terizla', categories: ['fighter', 'tank'], img: 'src/terizla.webp', bigimg: 'src/terizla2.webp', smlimg: 'src/terizla3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'X.Borg', categories: ['fighter'], img: 'src/xborg.webp', bigimg: 'src/xborg2.webp', smlimg: 'src/xborg3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Ling', categories: ['assassin'], img: 'src/ling.webp', bigimg: 'src/ling2.webp', smlimg: 'src/ling3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Dyrroth', categories: ['fighter'], img: 'src/dyrroth.webp', bigimg: 'src/dyrroth2.webp', smlimg: 'src/dyrroth3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Lylia', categories: ['mage'], img: 'src/lylia.webp', bigimg: 'src/lylia2.webp', smlimg: 'src/lylia3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Baxia', categories: ['tank'], img: 'src/baxia.webp', bigimg: 'src/baxia2.webp', smlimg: 'src/baxia3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Masha', categories: ['fighter', 'tank'], img: 'src/masha.webp', bigimg: 'src/masha2.webp', smlimg: 'src/masha3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Wanwan', categories: ['marksman'], img: 'src/wanwan.webp', bigimg: 'src/wanwan2.webp', smlimg: 'src/wanwan3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Silvanna', categories: ['fighter'], img: 'src/silvanna.webp', bigimg: 'src/silvanna2.webp', smlimg: 'src/silvanna3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Cecilion', categories: ['mage'], img: 'src/ceci.webp', bigimg: 'src/ceci2.webp', smlimg: 'src/ceci3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Carmilla', categories: ['support', 'tank'], img: 'src/carmilla.webp', bigimg: 'src/carmilla2.webp', smlimg: 'src/carmilla3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Atlas', categories: ['tank'], img: 'src/atlas.webp', bigimg: 'src/atlas2.webp', smlimg: 'src/atlas3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Popol and Kupa', categories: ['marksman'], img: 'src/pnk.webp', bigimg: 'src/pnk2.webp', smlimg: 'src/pnk3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Yu Zhong', categories: ['fighter'], img: 'src/yz.webp', bigimg: 'src/yz2.webp', smlimg: 'src/yz3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Luo Yi', categories: ['mage'], img: 'src/yi.webp', bigimg: 'src/yi2.webp', smlimg: 'src/yi3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Benedetta', categories: ['assassin'], img: 'src/bene.webp', bigimg: 'src/bene2.webp', smlimg: 'src/bene3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Khaleed', categories: ['fighter'], img: 'src/khaleed.webp', bigimg: 'src/khaleed2.webp', smlimg: 'src/khaleed3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Barats', categories: ['tank', 'fighter'], img: 'src/barats.webp', bigimg: 'src/barats2.webp', smlimg: 'src/barats3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Brody', categories: ['marksman'], img: 'src/brody.webp', bigimg: 'src/brody2.webp', smlimg: 'src/brody3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Yve', categories: ['mage'], img: 'src/yve.webp', bigimg: 'src/yve2.webp', smlimg: 'src/yve3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Mathilda', categories: ['assassin', 'support'], img: 'src/mathilda.webp', bigimg: 'src/mathilda2.webp', smlimg: 'src/mathilda3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Paquito', categories: ['fighter', 'assassin'], img: 'src/paq.webp', bigimg: 'src/paq2.webp', smlimg: 'src/paq3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Gloo', categories: ['tank'], img: 'src/gloo.webp', bigimg: 'src/gloo2.webp', smlimg: 'src/gloo3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Beatrix', categories: ['marksman'], img: 'src/beatrix.webp', bigimg: 'src/beatrix2.webp', smlimg: 'src/beatrix3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Phoveus', categories: ['fighter'], img: 'src/phov.webp', bigimg: 'src/phov2.webp', smlimg: 'src/phov3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Natan', categories: ['marksman'], img: 'src/natan.webp', bigimg: 'src/natan2.webp', smlimg: 'src/natan3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Aulus', categories: ['fighter'], img: 'src/aulus.webp', bigimg: 'src/aulus2.webp', smlimg: 'src/aulus3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Aamon', categories: ['assassin'], img: 'src/aamon.webp', bigimg: 'src/aamon2.webp', smlimg: 'src/aamon3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Valentina', categories: ['mage'], img: 'src/valentina.webp', bigimg: 'src/valentina2.webp', smlimg: 'src/valentina3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Edith', categories: ['tank', 'marksman'], img: 'src/edith.webp', bigimg: 'src/edith2.webp', smlimg: 'src/edith3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Floryn', categories: ['support'], img: 'src/floryn.webp', bigimg: 'src/floryn2.webp', smlimg: 'src/floryn3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Yin', categories: ['fighter', 'assassin'], img: 'src/yin.webp', bigimg: 'src/yin2.webp', smlimg: 'src/yin3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Melissa', categories: ['marksman'], img: 'src/melissa.webp', bigimg: 'src/melissa2.webp', smlimg: 'src/melissa3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Xavier', categories: ['mage'], img: 'src/xavier.webp', bigimg: 'src/xavier2.webp', smlimg: 'src/xavier3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Julian', categories: ['fighter', 'mage'], img: 'src/julian.webp', bigimg: 'src/julian2.webp', smlimg: 'src/julian3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Fredrinn', categories: ['fighter', 'tank'], img: 'src/fredrinn.webp', bigimg: 'src/fredrinn2.webp', smlimg: 'src/fredrinn3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Joy', categories: ['assassin'], img: 'src/joy.webp', bigimg: 'src/joy2.webp', smlimg: 'src/joy3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Novaria', categories: ['mage'], img: 'src/novaria.webp', bigimg: 'src/novaria2.webp', smlimg: 'src/novaria3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Arlott', categories: ['fighter', 'assassin'], img: 'src/arlott.webp', bigimg: 'src/arlott2.webp', smlimg: 'src/arlott3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Ixia', categories: ['marksman'], img: 'src/ixia.webp', bigimg: 'src/ixia2.webp', smlimg: 'src/ixia3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Nolan', categories: ['assassin'], img: 'src/nolan.webp', bigimg: 'src/nolan2.webp', smlimg: 'src/nolan3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Cici', categories: ['fighter'], img: 'src/cici.webp', bigimg: 'src/cici2.webp', smlimg: 'src/cici3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Chip', categories: ['support', 'tank'], img: 'src/chip.webp', bigimg: 'src/chip2.webp', smlimg: 'src/chip3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 },
    { name: 'Zhuxin', categories: ['mage'], img: 'src/zhuxin.webp', bigimg: 'src/zhuxin2.webp', smlimg: 'src/zhuxin3.png', selected:false , wave: 1, dps: 1, vision: 1, cc: 1, obj: 1, push: 1, supp: 1, teamfight: 1, etm: 1, dot: 1, iso: 1, late: 1, burst: 1 }
];

heroes.forEach(function (element){
    if(element.name != "Chang\'e")
        element.splash = "src/"+element.name.toLowerCase()+"4.webp";
})

let heroOrder;
if(screen.width<=820){
    heroOrder = [
        10, 15, 11, 16, 12, 17, 5, 5, 6, 6, 7, 7, 18, 13, 19, 14, 8, 8, 9, 9
    ];
}
else{
    heroOrder = [
        0, 5, 1, 6, 2, 7, 0, 0, 1, 1, 2, 2, 8, 3, 9, 4, 3, 3, 4, 4
    ];
}

const heroGrid = document.querySelector('.hero-grid');
const heroGrid2 = document.querySelector('.hero-grid2');
const categories = document.querySelectorAll('.hero-categories button');
const categories2 = document.querySelectorAll('.hero-categories2 button');
let banSlots = document.querySelectorAll('.small-div');
let pickSlots1 = document.querySelectorAll('.large-div2');
let pickSlots2 = document.querySelectorAll('.large-div');
let selectedHero = null;

const searchInput = document.getElementById('search');
const searchInput2 = document.getElementById('search2');
let blueTeamIndicator;
let redTeamIndicator;
if(screen.width<=820){
    blueTeamIndicator = document.getElementById('blueTeamIndicator');
    redTeamIndicator = document.getElementById('redTeamIndicator');
}
else{
    blueTeamIndicator = document.getElementById('blueTeamIndicator2');
    redTeamIndicator = document.getElementById('redTeamIndicator2');
}

searchInput.addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    filterHeroes(query);
});

searchInput2.addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    trueFilter(query, globalCat);
});

const ctx10 = document.getElementById('mobileBar').getContext('2d');
const ctx = document.getElementById('myChart').getContext('2d');

const mobileBar = new Chart(ctx10, {
    type: 'bar',
    data: {
        labels: ['Wave Clear', 'Hero DPS', 'Vision and Info', 'Crowd Control', 'Objective', 'Push', 'Support Utility'],
        datasets: [
            {
                label: 'Blue Team',
                data:  [0,0,0,0,0,0,0], // Negative values
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'Red Team',
                data:  [0,0,0,0,0,0,0], // Positive values
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ]
    },
    options: {
        indexAxis: 'y',
        scales: {
            x: {
                beginAtZero: true,
                min: -10,
                max: 10,
                ticks: {
                    callback: function(value) {
                        return Math.abs(value);
                    }
                }
            },
            y: {
                stacked: true
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += Math.abs(context.raw);
                        return label;
                    }
                }
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        categoryPercentage: 1,
        barPercentage: 0.3,
    },
});
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Wave Clear', 'Hero DPS', 'Vision and Info', 'Crowd Control', 'Objective', 'Push', 'Support Utility'],
        datasets: [
            {
                label: 'Blue Side',
                data:  [0,0,0,0,0,0,0], // Negative values
                backgroundColor: 'rgba(54, 162, 235, 0.6)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            },
            {
                label: 'Red Side',
                data:  [0,0,0,0,0,0,0], // Positive values
                backgroundColor: 'rgba(255, 99, 132, 0.6)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1
            }
        ]
    },
    options: {
        indexAxis: 'y',
        scales: {
            x: {
                grid:{
                color: "#424242",
                },
                beginAtZero: true,
                min: -10,
                max: 10,
                ticks: {
                    callback: function(value) {
                        return Math.abs(value);
                    }
                }
            },
            y: {
                grid:{
                color: "#424242",
                },
                stacked: true
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        label += Math.abs(context.raw);
                        return label;
                    }
                }
            }
        },
        responsive: true,
        maintainAspectRatio: false,
        categoryPercentage: 1.0,
        barPercentage: 0.5,
    },
});

const ctx2 = document.getElementById('myRadarChart').getContext('2d');
const myRadarChart = new Chart(ctx2,{
    type: 'radar',
    data: {
        labels: ['Team Fight', 'Early-to-mid', 'DOT/Sustain', 'ISO', 'Late Game', 'Burst'],
        datasets: [
            {
                label: 'Blue Team',
                data: [0, 0, 0, 0, 0, 0], // Update these values with your data
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(54, 162, 235, 1)'
            },
            {
                label: 'Red Team',
                data: [0, 0, 0, 0, 0, 0], // Update these values with your data
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255, 99, 132, 1)'
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio:false,
        animation: {
            duration: 500
        },
        scales: {
            r: {
                min: 0,
                max: 10,
                ticks: {
                    beginAtZero: true,
                    stepSize: 1,
                    display: false
                },
                angleLines: {
                    display: true,
                    color: 'gray'
                },
                grid: {
                    color: 'gray'
                },
                pointLabels: {
                    color: 'gray'
                }
            }
        }
    }
});

const ctx4 = document.getElementById('mobileRadar1').getContext('2d');
const mobileChart = new Chart(ctx4,{
    type: 'radar',
    data: {
        labels: ['Team Fight', 'Early-to-mid', 'DOT/Sustain', 'ISO', 'Late Game', 'Burst'],
        datasets: [
            {
                label: 'Blue Team',
                data: [0, 0, 0, 0, 0, 0], // Update these values with your data
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(54, 162, 235, 1)'
            },
            {
                label: 'Red Team',
                data: [0, 0, 0, 0, 0, 0], // Update these values with your data
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
                pointBackgroundColor: 'rgba(255, 99, 132, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(255, 99, 132, 1)'
            }
        ]
    },
    options: {
        responsive: true,
        animation: {
            duration: 500
        },
        scales: {
            r: {
                min: 0,
                max: 10,
                ticks: {
                    beginAtZero: true,
                    stepSize: 1,
                    display: false
                },
                angleLines: {
                    display: true,
                    color: 'gray'
                },
                grid: {
                    color: 'gray'
                },
                pointLabels: {
                    color: 'gray'
                }
            }
        }
    }
});

function updateMobileRadar(chart, heroName, team, mode){
    const foundHero = heroes.find(hero => hero.name === heroName);
    const extractedProperties = [foundHero.teamfight,foundHero.etm,foundHero.dot,foundHero.iso,foundHero.late,foundHero.burst];

    if(team == 1){
        temp = chart.data.datasets[1].data;
        for (let i = 0; i < extractedProperties.length; i++) {
            if (mode) {
            temp[i] -= extractedProperties[i];
            } else {
            temp[i] += extractedProperties[i];
            }
        }
        chart.data.datasets[1].data = temp;
    }
    else{
        temp = chart.data.datasets[0].data;
        for (let i = 0; i < extractedProperties.length; i++) {
            if (mode) {
            temp[i] -= extractedProperties[i];
            } else {
            temp[i] += extractedProperties[i];
            }
        } 
        chart.data.datasets[0].data = temp;
    }
    chart.update();
}

const loadHeroes = (category) => {
     const heroesToDisplay = category === 'all' ? heroes : heroes.filter(hero => hero.categories.includes(category));
     displayHeroes(heroesToDisplay);
};

const loadHeroes2 = (category) => {
    const heroesToDisplay = category === 'all' ? heroes : heroes.filter(hero => hero.categories.includes(category));
    displayHeroes2(heroesToDisplay);
};

const filterHeroes = (query) => {
    const filteredHeroes = heroes.filter(hero => hero.name.toLowerCase().includes(query));
    displayHeroes(filteredHeroes);
};

const trueFilter = (query, category) => {
    if(query != ''){
    const filteredHeroes = heroes.filter(hero => hero.name.toLowerCase().includes(query));
    displayHeroes2(filteredHeroes);
    }
    else{
    loadHeroes2(category);
}
}

const displayHeroes = (heroesToDisplay) => {
    heroGrid.innerHTML = '';
    heroesToDisplay.forEach(hero => {
        const heroDiv = document.createElement('div');
        heroDiv.classList.add('hero');
        heroDiv.dataset.hero = hero.name;
        heroDiv.dataset.categories = hero.categories.join(',');
        if (hero.selected === true) {
            heroDiv.innerHTML = `<img title="${hero.name}" src="${hero.img}" alt="${hero.name}" style="-webkit-filter: grayscale(1);">`;
        } else {
            heroDiv.innerHTML = `<img title="${hero.name}" src="${hero.img}" alt="${hero.name}" style="cursor: pointer;">`;
            heroDiv.addEventListener('mouseover', () =>{
                if(inDraft){
                    let targetDiv;
                    if (currentHeroIndex < 6 || (currentHeroIndex >= 12 && currentHeroIndex < 16)) {
                        return;
                    } else if (currentHeroIndex == 6 || currentHeroIndex == 9 || currentHeroIndex == 10 || currentHeroIndex == 17 || currentHeroIndex == 18) {
                        targetDiv = document.querySelectorAll('.large-div2')[heroOrder[currentHeroIndex]];
                        targetDiv.style.backgroundImage = "url('" + hero.splash + "')";
                        targetDiv.style.backgroundSize = "cover";
                        targetDiv.style.backgroundPosition = "top";
                        targetDiv.style.backgroundRepeat = "no-repeat";
                    } else {
                        targetDiv = document.querySelectorAll('.large-div')[heroOrder[currentHeroIndex]];
                        targetDiv.style.backgroundImage = "url('" + hero.splash + "')";
                        targetDiv.style.backgroundSize = "cover";
                        targetDiv.style.backgroundPosition = "top";
                        targetDiv.style.backgroundRepeat = "no-repeat";
                    }
                }
            });
            heroDiv.addEventListener('mouseout', () =>{
                if(inDraft){
                    let targetDiv;
                    if (currentHeroIndex < 6 || (currentHeroIndex >= 12 && currentHeroIndex < 16)) {
                        return;
                    } else if (currentHeroIndex == 6 || currentHeroIndex == 9 || currentHeroIndex == 10 || currentHeroIndex == 17 || currentHeroIndex == 18) {
                        targetDiv = document.querySelectorAll('.large-div2')[heroOrder[currentHeroIndex]];
                        targetDiv.style.backgroundImage = "";
                    } else {
                        targetDiv = document.querySelectorAll('.large-div')[heroOrder[currentHeroIndex]];
                        targetDiv.innerHTML = ``;
                        targetDiv.style.backgroundImage = "";
                    }
                }
            });
            heroDiv.addEventListener('click', () => {
                selectedHero = hero;
                if(inDraft){
                    let targetDiv;
                    startTimer();
                    if(currentHeroIndex == 0 || currentHeroIndex == 2 || currentHeroIndex == 4 || currentHeroIndex == 6 ||  currentHeroIndex == 7 ||currentHeroIndex == 10 || currentHeroIndex == 11 || currentHeroIndex == 13 || currentHeroIndex == 15|| currentHeroIndex == 18){
                        blueTeamIndicator.style.visibility = 'hidden';
                        redTeamIndicator.style.visibility = 'visible';
                    }
                    else{
                        blueTeamIndicator.style.visibility = 'visible';
                        redTeamIndicator.style.visibility = 'hidden';
                    }

                    if (currentHeroIndex == 0 || currentHeroIndex == 2 || currentHeroIndex == 4||currentHeroIndex == 11|| currentHeroIndex == 13) {
                        targetDiv = document.querySelectorAll('.small-div')[heroOrder[currentHeroIndex+1]];
                        if(targetDiv)
                            targetDiv.classList.add('glow-red-small');
                    } else if(currentHeroIndex == 1 || currentHeroIndex == 3 || currentHeroIndex == 12||currentHeroIndex == 14){
                        targetDiv = document.querySelectorAll('.small-div')[heroOrder[currentHeroIndex+1]];
                        if(targetDiv)
                            targetDiv.classList.add('glow-blue-small');
                    } else if(currentHeroIndex == 5 || currentHeroIndex == 8 || currentHeroIndex == 9 || currentHeroIndex == 16||currentHeroIndex == 17){
                        targetDiv = document.querySelectorAll('.large-div2')[heroOrder[currentHeroIndex+1]];
                        if(targetDiv){
                            targetDiv.classList.add('glow-blue');
                        }
                    } else{
                        targetDiv = document.querySelectorAll('.large-div')[heroOrder[currentHeroIndex+1]];
                        if(targetDiv){
                            targetDiv.classList.add('glow-red');
                        }
                    }

                    if (currentHeroIndex < 6 || (currentHeroIndex >= 12 && currentHeroIndex < 16)) {
                        targetDiv = document.querySelectorAll('.small-div')[heroOrder[currentHeroIndex]];
                        targetDiv.innerHTML = `<img title="${selectedHero.name}" src="${selectedHero.smlimg}" alt="${selectedHero.name}">
                                                <div class="ban-indicator"></div>`;
                    } else if (currentHeroIndex == 6 || currentHeroIndex == 9 || currentHeroIndex == 10 || currentHeroIndex == 17 || currentHeroIndex == 18) {
                        targetDiv = document.querySelectorAll('.large-div2')[heroOrder[currentHeroIndex]];
                        targetDiv.style.backgroundImage = "";
                        targetDiv.innerHTML = `<img title="${selectedHero.name}" src="${selectedHero.splash}" alt="${selectedHero.name}"><div class="gradient-overlay"></div><div class="pick-slot-text" style="right: 1vw; left:auto;">${selectedHero.name}</div>`;
                        updateMobileRadar(myRadarChart, selectedHero.name, 0, false);
                        updateBar(myChart, selectedHero.name, 0, false);
                        updateBar(mobileBar, selectedHero.name, 0, false); 
                        updateMobileRadar(mobileChart, selectedHero.name, 0, false);
                        resetDivs(0);
                    } else {
                        targetDiv = document.querySelectorAll('.large-div')[heroOrder[currentHeroIndex]];
                        targetDiv.style.backgroundImage = "";
                        targetDiv.innerHTML = `<img title="${selectedHero.name}" src="${selectedHero.splash}" alt="${selectedHero.name}"><div class="gradient-overlay"></div><div class="pick-slot-text">${selectedHero.name}</div>`;
                        updateMobileRadar(myRadarChart, selectedHero.name, 1, false);
                        updateBar(myChart, selectedHero.name, 1, false);
                        updateBar(mobileBar, selectedHero.name, 1, false);
                        updateMobileRadar(mobileChart, selectedHero.name, 1, false);
                        resetDivs(1);
                    }
                    targetDiv.classList.remove('glow-blue');
                    targetDiv.classList.remove('glow-red');
                    targetDiv.classList.remove('glow-blue-small');
                    targetDiv.classList.remove('glow-red-small');
                    targetDiv.dataset.hero = selectedHero.name;

                    if (currentHeroIndex == 0 || currentHeroIndex == 2 || currentHeroIndex == 4||currentHeroIndex == 11|| currentHeroIndex == 13) {
                    } else if(currentHeroIndex == 1 || currentHeroIndex == 3 || currentHeroIndex == 12||currentHeroIndex == 14){
                    } else if(currentHeroIndex == 5 || currentHeroIndex == 8 || currentHeroIndex == 9 || currentHeroIndex == 16||currentHeroIndex == 17){
                        targetDiv = document.querySelectorAll('.large-div2')[heroOrder[currentHeroIndex+1]];
                        if(targetDiv){
                            expandDiv(targetDiv,0);
                        }
                    } else{
                        targetDiv = document.querySelectorAll('.large-div')[heroOrder[currentHeroIndex+1]];
                        if(targetDiv){
                            expandDiv(targetDiv,1);
                        }
                    }
                
                disableHeroInGrid(selectedHero);
                currentHeroIndex++;
                if (currentHeroIndex >= heroOrder.length){ 
                    hideTimer();
                    inDraft = false;
                    redTeamIndicator.style.visibility = 'hidden';
                    blueTeamIndicator.style.visibility = 'hidden';
                    disableDraftMode();
                    return;
                }
            }
            });
            
        }
        heroGrid.appendChild(heroDiv);
    });
};

const displayHeroes2 = (heroesToDisplay) => {
    heroGrid2.innerHTML = '';
    heroesToDisplay.forEach(hero => {
        const heroDiv = document.createElement('div');
        heroDiv.classList.add('hero');
        heroDiv.dataset.hero = hero.name;
        heroDiv.dataset.categories = hero.categories.join(',');

        if (hero.selected === true) {
            heroDiv.innerHTML = `<img title="${hero.name}" src="${hero.img}" alt="${hero.name}" style="-webkit-filter: grayscale(1);">`;
        } else {
            heroDiv.innerHTML = `<img title="${hero.name}" src="${hero.img}" alt="${hero.name}" style="cursor: pointer;">`;
            heroDiv.addEventListener('click', () => {
                selectedHero = hero;
                if(inDraft){
                    let targetDiv;
                    startTimer();
                    if(currentHeroIndex == 0 || currentHeroIndex == 2 || currentHeroIndex == 4 || currentHeroIndex == 6 ||  currentHeroIndex == 7 ||currentHeroIndex == 10 || currentHeroIndex == 11 || currentHeroIndex == 13 || currentHeroIndex == 15|| currentHeroIndex == 18){
                        blueTeamIndicator.style.visibility = 'hidden';
                        redTeamIndicator.style.visibility = 'visible';
                    }
                    else{
                        blueTeamIndicator.style.visibility = 'visible';
                        redTeamIndicator.style.visibility = 'hidden';
                    }

                    if (currentHeroIndex == 0 || currentHeroIndex == 2 || currentHeroIndex == 4||currentHeroIndex == 11|| currentHeroIndex == 13) {
                        targetDiv = document.querySelectorAll('.small-div')[heroOrder[currentHeroIndex+1]];
                        if(targetDiv)
                            targetDiv.classList.add('glow-red-small');
                    } else if(currentHeroIndex == 1 || currentHeroIndex == 3 || currentHeroIndex == 12||currentHeroIndex == 14){
                        targetDiv = document.querySelectorAll('.small-div')[heroOrder[currentHeroIndex+1]];
                        if(targetDiv)
                            targetDiv.classList.add('glow-blue-small');
                    } else if(currentHeroIndex == 5 || currentHeroIndex == 8 || currentHeroIndex == 9 || currentHeroIndex == 16||currentHeroIndex == 17){
                        targetDiv = document.querySelectorAll('.large-div2')[heroOrder[currentHeroIndex+1]];
                        if(targetDiv)
                            targetDiv.classList.add('glow-blue');
                    } else{
                        targetDiv = document.querySelectorAll('.large-div')[heroOrder[currentHeroIndex+1]];
                        if(targetDiv)
                            targetDiv.classList.add('glow-red');
                    }

                    if (currentHeroIndex < 6 || (currentHeroIndex >= 12 && currentHeroIndex < 16)) {
                        targetDiv = document.querySelectorAll('.small-div')[heroOrder[currentHeroIndex]];
                        targetDiv.innerHTML = `<img title="${selectedHero.name}" src="${selectedHero.smlimg}" alt="${selectedHero.name}">
                                                <div class="ban-indicator"></div>`;
                    } else if (currentHeroIndex == 6 || currentHeroIndex == 9 || currentHeroIndex == 10 || currentHeroIndex == 17 || currentHeroIndex == 18) {
                        targetDiv = document.querySelectorAll('.large-div2')[heroOrder[currentHeroIndex]];
                        targetDiv.innerHTML = `<img title="${selectedHero.name}" src="${selectedHero.bigimg}" alt="${selectedHero.name}">`;
                        updateMobileRadar(myRadarChart, selectedHero.name, 0, false);
                        updateBar(myChart, selectedHero.name, 0, false);
                        updateBar(mobileBar, selectedHero.name, 0, false);
                        updateMobileRadar(mobileChart, selectedHero.name, 0, false);
                    } else {
                        targetDiv = document.querySelectorAll('.large-div')[heroOrder[currentHeroIndex]];
                        targetDiv.innerHTML = `<img title="${selectedHero.name}" src="${selectedHero.bigimg}" alt="${selectedHero.name}">`;
                        updateMobileRadar(myRadarChart, selectedHero.name, 1, false);
                        updateBar(myChart, selectedHero.name, 1, false);
                        updateBar(mobileBar, selectedHero.name, 1, false);
                        updateMobileRadar(mobileChart, selectedHero.name, 1, false);
                    }
                    targetDiv.classList.remove('glow-blue');
                    targetDiv.classList.remove('glow-red');
                    targetDiv.classList.remove('glow-blue-small');
                    targetDiv.classList.remove('glow-red-small');
                    targetDiv.dataset.hero = selectedHero.name;
                
                disableHeroInGrid(selectedHero);
                currentHeroIndex++;
                if (currentHeroIndex >= heroOrder.length){ 
                    hideTimer();
                    inDraft = false;
                    redTeamIndicator.style.visibility = 'hidden';
                    blueTeamIndicator.style.visibility = 'hidden';
                    disableDraftMode();
                    return;
                }
            }
            });
        }
        heroGrid2.appendChild(heroDiv);
    });
};

if(screen.width<=820){
    loadHeroes2('mage');
    globalCat = 'mage';
}
else{
    loadHeroes('all');
    globalCat = 'all';
}

categories.forEach(button => {
    button.addEventListener('click', () => {
        loadHeroes(button.dataset.category);
        globalCat = button.dataset.category;
    });
});
categories2.forEach(button => {
    button.addEventListener('click', () => {
        loadHeroes2(button.dataset.category);
        globalCat = button.dataset.category;
    });
});

banSlots.forEach(slot => {
    const banSlotClickListener = () => {
        if (selectedHero) {
            slot.innerHTML = `
                <img title="${selectedHero.name}" src="${selectedHero.smlimg}" alt="${selectedHero.name}">
                <div class="ban-indicator"></div>
                <span class="remove-sml">✕</span>
            `;
            slot.dataset.hero = selectedHero.name;
            slot.querySelector('.remove-sml').addEventListener('click', (e) => {
                e.stopPropagation();
                enableHeroInGrid(slot.dataset.hero);
                slot.innerHTML = '';
                slot.removeAttribute('data-hero');
                slot.addEventListener('click', banSlotClickListener); 
            });
            disableHeroInGrid(selectedHero);
            slot.removeEventListener('click', banSlotClickListener); 
        }
    }
    slot.addEventListener('click', banSlotClickListener);
});

function expandDiv(element, team) {
    let allDivs;
    if(team == 1){
        allDivs = document.querySelectorAll('.large-div');
    }
    else{
        allDivs = document.querySelectorAll('.large-div2');
    }
    allDivs.forEach(div => {
        if(div != element){
        const pickSlotText = div.querySelector('.pick-slot-text');
        setTimeout(() => {
            div.style.height = '15.5vh';
        }, 2000);
        }
    });
    const pickSlotText = element.querySelector('.pick-slot-text');

    setTimeout(() => {
        element.style.height = '28vh';
    }, 2000);
    
}
function resetDivs(team) {
    let allDivs
    if(team == 1)
        allDivs = document.querySelectorAll('.large-div');
    else
        allDivs = document.querySelectorAll('.large-div2');

    allDivs.forEach(div => {
        const pickSlotText = div.querySelector('.pick-slot-text');
        setTimeout(() => {
            div.style.height = '18vh';
        }, 2000);
        
    });
}

pickSlots1.forEach(slot => {
    const slotClickListener = () => {
        if (selectedHero) {
            if(screen.width <= 820){
                slot.innerHTML = `<img title="${selectedHero.name}" src="${selectedHero.bigimg}" alt="${selectedHero.name}">
                <span class="remove">✕</span>`;
            }
            else{
                slot.innerHTML = `<img title="${selectedHero.name}" src="${selectedHero.splash}" alt="${selectedHero.name}">
                <div class="gradient-overlay"></div>
                <span class="pick-slot-text" style="right: 1vw; left:auto;">${selectedHero.name}</span>
                <span class="remove">✕</span>`;
            }
            var img = slot.querySelector('img');
            img.onload = function() {
                img.classList.add('animate');
            };
            slot.dataset.hero = selectedHero.name;
            slot.querySelector('.remove').addEventListener('click', (e) => {
                e.stopPropagation();
                enableHeroInGrid(slot.dataset.hero);
                updateMobileRadar(myRadarChart, slot.dataset.hero, 0, true);
                updateBar(myChart, slot.dataset.hero, 0, true);
                updateBar(mobileBar, slot.dataset.hero, 0, true);
                updateMobileRadar(mobileChart, slot.dataset.hero, 0, true);
                slot.innerHTML = '';
                slot.removeAttribute('data-hero');
                slot.addEventListener('click', slotClickListener); 
            });
            disableHeroInGrid(selectedHero);
            updateMobileRadar(myRadarChart, slot.dataset.hero, 0, false);
            updateBar(myChart, slot.dataset.hero, 0, false);
            updateBar(mobileBar, slot.dataset.hero, 0, false);
            updateMobileRadar(mobileChart, slot.dataset.hero, 0, false);
            slot.removeEventListener('click', slotClickListener); 
        }
    };

    slot.addEventListener('click', slotClickListener);
})

pickSlots2.forEach(slot => {
    const slotClickListener = () => {
        if (selectedHero) {
            if(screen.width <= 820){
                slot.innerHTML = `<img title="${selectedHero.name}" src="${selectedHero.bigimg}" alt="${selectedHero.name}">
                <span class="remove">✕</span>`;
            }
            else{
                slot.innerHTML = `<img title="${selectedHero.name}" src="${selectedHero.splash}" alt="${selectedHero.name}">
                <div class="gradient-overlay"></div>
                <span class="pick-slot-text">${selectedHero.name}</span>
                <span class="remove">✕</span>`;
            }
            var img = slot.querySelector('img');
            img.onload = function() {
                img.classList.add('animate');
            };
            slot.dataset.hero = selectedHero.name;
            slot.querySelector('.remove').addEventListener('click', (e) => {
                e.stopPropagation();
                enableHeroInGrid(slot.dataset.hero);
                updateMobileRadar(myRadarChart, slot.dataset.hero, 1, true);
                updateBar(myChart, slot.dataset.hero, 1, true);
                updateBar(mobileBar, slot.dataset.hero, 1, true);
                updateMobileRadar(mobileChart, slot.dataset.hero, 1, true);
                slot.innerHTML = '';
                slot.removeAttribute('data-hero');
                slot.addEventListener('click', slotClickListener); // Re-attach the click listener
            });
            disableHeroInGrid(selectedHero);
            updateMobileRadar(myRadarChart, slot.dataset.hero, 1, false);
            updateBar(myChart, slot.dataset.hero, 1, false);
            updateBar(mobileBar, slot.dataset.hero, 1, false);
            updateMobileRadar(mobileChart, slot.dataset.hero, 1, false);
            slot.removeEventListener('click', slotClickListener); // Remove the click listener
        }
    };

    slot.addEventListener('click', slotClickListener);
});


const disableHeroInGrid = (heroName) => {
    heroName.selected = true;
    selectedHero=null;
    loadHeroes(globalCat);
    loadHeroes2(globalCat);
};

const enableHeroInGrid = (heroName) => {
    const foundHero = heroes.find(hero => hero.name === heroName);
    foundHero.selected = false;
    loadHeroes(globalCat);
    loadHeroes2(globalCat);
};

function updateBar(chart, heroName, team, mode){
    const foundHero = heroes.find(hero => hero.name === heroName);
    const extractedProperties = [foundHero.wave,foundHero.dps,foundHero.vision,foundHero.cc,foundHero.obj,foundHero.push, foundHero.supp];

    if(team == 1){
        temp = chart.data.datasets[1].data;
        for (let i = 0; i < extractedProperties.length; i++) {
            if (mode) {
            temp[i] -= extractedProperties[i];
            } else {
            temp[i] += extractedProperties[i];
            }
        }
        chart.data.datasets[1].data = temp;
    }
    else{
        temp = chart.data.datasets[0].data;
        for (let i = 0; i < extractedProperties.length; i++) {
            if (mode) {
            temp[i] += extractedProperties[i];
            } else {
            temp[i] -= extractedProperties[i];
            }
        } 
        chart.data.datasets[0].data = temp;
    }
    chart.update();
}

let currentIndex = 0;
const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;
const dots = document.querySelectorAll('.dot');

let startX, currentX, deltaX;
let isDragging = false;

carousel.addEventListener('touchstart', handleTouchStart, false);
carousel.addEventListener('touchmove', handleTouchMove, false);
carousel.addEventListener('touchend', handleTouchEnd, false);

function handleTouchStart(event) {
    startX = event.touches[0].clientX;
    isDragging = true;
    items.forEach(item => {
        item.style.transition = 'none';
    });
}

function handleTouchMove(event) {
    if (!isDragging) return;
    currentX = event.touches[0].clientX;
    deltaX = currentX - startX;
    const offset = -currentIndex * 100 + (deltaX / carousel.offsetWidth) * 100;
    items.forEach(item => {
        item.style.transform = `translateX(${offset}%)`;
    });
}

function handleTouchEnd(event) {
    isDragging = false;
    items.forEach(item => {
        item.style.transition = 'transform 0.3s ease';
    });
    const endX = event.changedTouches[0].clientX;
    handleSwipe(endX);
}

function handleSwipe(endX) {
    if (startX - endX > 50) {
        nextItem();
    } else if (endX - startX > 50) {
        prevItem();
    } else {
        updateCarousel();
    }
}

function nextItem() {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    }
    updateCarousel();
}

function prevItem() {
    if (currentIndex > 0) {
        currentIndex--;
    } 
    updateCarousel();
}

function updateCarousel() {
    const offset = -currentIndex * 100;
    items.forEach(item => {
        item.style.transform = `translateX(${offset}%)`;
    });
    updateDots();
}

function updateDots() {
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    dots[currentIndex].classList.add('active');
}

let inDraft = false;
const playButton = document.getElementById('playButton');
const draftButton = document.getElementById('draft-button');
const icon = document.getElementById('icon');

const draftModeEnableClick = () => {
    if(screen.width<=820){
        icon.classList.remove('play-icon');
        icon.classList.add('pause-icon');
    }
    enableDraftMode();
}

playButton.addEventListener('click', draftModeEnableClick);
draftButton.addEventListener('click', draftModeEnableClick);
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        disableDraftMode();
    }
});

const draftModeDisableClick = () => {
    if(screen.width<=820){
        icon.classList.add('play-icon');
        icon.classList.remove('pause-icon');
    }
    disableDraftMode();
}

function disableDraftMode() {
    hideTimer();
    pickSlots2 = document.querySelectorAll('.large-div');
    pickSlots1 = document.querySelectorAll('.large-div2');
    banSlots = document.querySelectorAll('.small-div');

    playButton.addEventListener('click', draftModeEnableClick);
    playButton.removeEventListener('click', draftModeDisableClick);
    inDraft = false;

    pickSlots2.forEach(slot => {
        const slotClickListener = () => {
            if (selectedHero) {
                if(screen.width <= 820){
                    slot.innerHTML = `<img title="${selectedHero.name}" src="${selectedHero.bigimg}" alt="${selectedHero.name}">
                    <span class="remove">✕</span>`;
                }   
                else{
                    slot.innerHTML = `<img title="${selectedHero.name}" src="${selectedHero.splash}" alt="${selectedHero.name}">
                    <div class="gradient-overlay"></div>
                    <span class="pick-slot-text">${selectedHero.name}</span>
                    <span class="remove">✕</span>`;
                }
                var img = slot.querySelector('img');
                img.onload = function() {
                    img.classList.add('animate');
                };
                slot.dataset.hero = selectedHero.name;
                slot.querySelector('.remove').addEventListener('click', (e) => {
                    e.stopPropagation();
                    enableHeroInGrid(slot.dataset.hero);
                    updateMobileRadar(myRadarChart, slot.dataset.hero, 1, true);
                    updateBar(myChart, slot.dataset.hero, 1, true);
                    updateBar(mobileBar, slot.dataset.hero, 1, true);
                    updateMobileRadar(mobileChart, slot.dataset.hero, 1, true);
                    slot.innerHTML = '';
                    slot.removeAttribute('data-hero');
                    slot.addEventListener('click', slotClickListener); 
                });
                disableHeroInGrid(selectedHero);
                updateMobileRadar(myRadarChart, slot.dataset.hero, 1, false);
                updateBar(myChart, slot.dataset.hero, 1, false);
                updateBar(mobileBar, slot.dataset.hero, 1, false);
                updateMobileRadar(mobileChart, slot.dataset.hero, 1, false);
                slot.removeEventListener('click', slotClickListener); 
            }
        };
        
        if (slot.dataset.hero != null) {
            var span = document.createElement('span');
            span.className = 'remove';
            span.innerHTML = '✕';
            slot.appendChild(span);
            slot.querySelector('.remove').addEventListener('click', (e) => {
                e.stopPropagation();
                enableHeroInGrid(slot.dataset.hero);
                updateMobileRadar(myRadarChart, slot.dataset.hero, 1, true);
                updateBar(myChart, slot.dataset.hero, 1, true);
                updateBar(mobileBar, slot.dataset.hero, 1, true);
                updateMobileRadar(mobileChart, slot.dataset.hero, 1, true);
                slot.innerHTML = '';
                slot.removeAttribute('data-hero');
                slot.addEventListener('click', slotClickListener); 
            });
        }
        else {
            slot.addEventListener('click', slotClickListener); 
        }

        slot.classList.remove('glow-red');
    });

    pickSlots1.forEach(slot => {
        const slotClickListener = () => {
            if (selectedHero) {
                if(screen.width <= 820){
                    slot.innerHTML = `<img title="${selectedHero.name}" src="${selectedHero.bigimg}" alt="${selectedHero.name}">
                    <span class="remove">✕</span>`;
                }
                    else{
                    slot.innerHTML = `<img title="${selectedHero.name}" src="${selectedHero.splash}" alt="${selectedHero.name}">
                    <span class="pick-slot-text" style="right: 1vw; left:auto;">${selectedHero.name}</span>
                    <div class="gradient-overlay"></div>
                    <span class="remove">✕</span>`;
                }
                var img = slot.querySelector('img');
                img.onload = function() {
                    img.classList.add('animate');
                };
                slot.dataset.hero = selectedHero.name;
                slot.querySelector('.remove').addEventListener('click', (e) => {
                    e.stopPropagation();
                    enableHeroInGrid(slot.dataset.hero);
                    updateMobileRadar(myRadarChart, slot.dataset.hero, 0, true);
                    updateBar(myChart, slot.dataset.hero, 0, true);
                    updateBar(mobileBar, slot.dataset.hero, 0, true);
                    updateMobileRadar(mobileChart, slot.dataset.hero, 0, true);
                    slot.innerHTML = '';
                    slot.removeAttribute('data-hero');
                    slot.addEventListener('click', slotClickListener); 
                });
                disableHeroInGrid(selectedHero);
                updateMobileRadar(myRadarChart, slot.dataset.hero, 0, false);
                updateBar(myChart, slot.dataset.hero, 0, false);
                updateBar(mobileBar, slot.dataset.hero, 0, false);
                updateMobileRadar(mobileChart, slot.dataset.hero, 0, false);
                slot.removeEventListener('click', slotClickListener); 
            }
        };
        
        if (slot.dataset.hero != null) {
            var span = document.createElement('span');
            span.className = 'remove';
            span.innerHTML = '✕';
            slot.appendChild(span);
            slot.querySelector('.remove').addEventListener('click', (e) => {
                e.stopPropagation();
                enableHeroInGrid(slot.dataset.hero);
                updateMobileRadar(myRadarChart, slot.dataset.hero, 0, true);
                updateBar(myChart, slot.dataset.hero, 0, true);
                updateBar(mobileBar, slot.dataset.hero, 0, true);
                updateMobileRadar(mobileChart, slot.dataset.hero, 0, true);
                slot.innerHTML = '';
                slot.removeAttribute('data-hero');
                slot.addEventListener('click', slotClickListener); // Re-attach the click listener
            });
        }
        else {
            slot.addEventListener('click', slotClickListener); 
        }
        slot.classList.remove('glow-blue');
    });

    banSlots.forEach(slot => {
        const banSlotClickListener = () => {
            if (selectedHero) {
                slot.innerHTML = `
                    <img title="${selectedHero.name}" src="${selectedHero.smlimg}" alt="${selectedHero.name}">
                    <div class="ban-indicator"></div>
                    <span class="remove-sml">✕</span>
                `;
                slot.dataset.hero = selectedHero.name;
                slot.querySelector('.remove-sml').addEventListener('click', (e) => {
                    e.stopPropagation();
                    enableHeroInGrid(slot.dataset.hero);
                    slot.innerHTML = '';
                    slot.removeAttribute('data-hero');
                    slot.addEventListener('click', banSlotClickListener); 
                });
                disableHeroInGrid(selectedHero);
                slot.removeEventListener('click', banSlotClickListener); 
            }
        };

        if (slot.dataset.hero != null) {
            const foundHero = heroes.find(hero => hero.name === slot.dataset.hero);
            slot.innerHTML = ``;
            slot.innerHTML = `
                <img title="${foundHero.name}" src="${foundHero.smlimg}" alt="${foundHero.name}">
                <div class="ban-indicator"></div>
                <span class="remove-sml">✕</span>
            `;
            slot.querySelector('.remove-sml').addEventListener('click', (e) => {
                e.stopPropagation();
                enableHeroInGrid(slot.dataset.hero);
                slot.innerHTML = '';
                slot.removeAttribute('data-hero');
                slot.addEventListener('click', banSlotClickListener); 
            });
        }
        else {
            slot.addEventListener('click', banSlotClickListener); 
        }
        slot.classList.remove('glow-blue-small');
        slot.classList.remove('glow-red-small');
        redTeamIndicator.style.visibility = 'hidden';
        blueTeamIndicator.style.visibility = 'hidden';
    });
}
function enableDraftMode() {
    currentHeroIndex = 0;
    const largeDivs = document.querySelectorAll('.large-div');
    const largeDiv2s = document.querySelectorAll('.large-div2');
    const smallDivs = document.querySelectorAll('.small-div');

    largeDivs.forEach(div => div.innerHTML = '');
    largeDiv2s.forEach(div => div.innerHTML = '');
    smallDivs.forEach(div => div.innerHTML = '');

    largeDivs.forEach(div => div.removeAttribute('data-hero'));
    largeDiv2s.forEach(div => div.removeAttribute('data-hero'));
    smallDivs.forEach(div => div.removeAttribute('data-hero'));
    if(screen.width<=820)
        smallDivs[10].classList.add('glow-blue-small');
    else
        smallDivs[0].classList.add('glow-blue-small');

    mobileBar.data.datasets[0].data = [0,0,0,0,0,0,0];
    mobileBar.data.datasets[1].data = [0,0,0,0,0,0,0];
    mobileChart.data.datasets[0].data = [0,0,0,0,0,0];
    mobileChart.data.datasets[1].data = [0,0,0,0,0,0];
    myRadarChart.data.datasets[0].data = [0,0,0,0,0,0];
    myRadarChart.data.datasets[1].data = [0,0,0,0,0,0];
    myChart.data.datasets[0].data = [0,0,0,0,0,0,0];
    myChart.data.datasets[1].data = [0,0,0,0,0,0,0];

    mobileChart.update();
    mobileBar.update();
    myChart.update();
    myRadarChart.update();

    banSlots.forEach(slot => slot.replaceWith(slot.cloneNode(true)));
    pickSlots1.forEach(slot => slot.replaceWith(slot.cloneNode(true)));
    pickSlots2.forEach(slot => slot.replaceWith(slot.cloneNode(true)));

    heroes.forEach(hero => {
        hero.selected = false;
    });

    loadHeroes(globalCat);
    loadHeroes2(globalCat);

    inDraft = true;
    playButton.removeEventListener('click', draftModeEnableClick);
    playButton.addEventListener('click', draftModeDisableClick);
    draftButton.style.visibility = 'hidden';

    if(screen.width<=820)
        showNotification('Draft Mode Enabled');

    blueTeamIndicator.style.visibility = 'visible';
    redTeamIndicator.style.visibility = 'hidden';
    timerContainer.style.visibility = 'visible';
    if(countdownText)
        countdownText.style.visibility = 'visible'; 
    startTimer(); 
}
    
function showNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerText = message;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 500); 
    }, 2500);
}
let countdownBar;
let timerContainer;
let countdownText = null;
if(screen.width<=820){ 
    countdownBar = document.getElementById('countdown-bar');
    timerContainer = document.getElementById('timer-container');
}
else{
    countdownBar = document.getElementById('countdown-bar2');
    timerContainer = document.getElementById('timer-container2');
    countdownText = document.getElementById('countdown-text');
}

let totalTime = 30; 
let currentTime = totalTime;
const updateInterval = 10; 
const initialWidth = 100; 
let timerInterval;

function updateCountdown(callback) {
    if (currentTime <= 0) {
        clearInterval(timerInterval);
        currentTime = 0;
        countdownBar.style.width = '0%'; 
        if(countdownText)
            countdownText.textContent = '0'; 
        if(callback){
            callback();
        }
    }

    currentTime -= updateInterval / 1000; 
    let widthPercentage = (currentTime / totalTime) * initialWidth;
    countdownBar.style.width = widthPercentage + '%';
    if(countdownText)
        countdownText.textContent = Math.ceil(currentTime); 
}

function startTimer() {
    let targetDiv;
    defaultCallback = () => {
        console.log(1)
        if (currentHeroIndex == 0 || currentHeroIndex == 2 || currentHeroIndex == 4 || currentHeroIndex == 13) {
            blueTeamIndicator.style.visibility = 'hidden';
            redTeamIndicator.style.visibility = 'visible';
            targetDiv = document.querySelectorAll('.small-div')[heroOrder[currentHeroIndex+1]];
            if (targetDiv) targetDiv.classList.add('glow-red-small');
            targetDiv = document.querySelectorAll('.small-div')[heroOrder[currentHeroIndex]];
            if (targetDiv) {
                targetDiv.classList.remove('glow-blue-small');
                targetDiv.classList.remove('glow-red-small');
            }
            currentHeroIndex++;
            startTimer();
        } else if (currentHeroIndex == 1 || currentHeroIndex == 3 || currentHeroIndex == 12 || currentHeroIndex == 14) {
            blueTeamIndicator.style.visibility = 'visible';
            redTeamIndicator.style.visibility = 'hidden';
            targetDiv = document.querySelectorAll('.small-div')[heroOrder[currentHeroIndex+1]];
            if (targetDiv) targetDiv.classList.add('glow-blue-small');
            targetDiv = document.querySelectorAll('.small-div')[heroOrder[currentHeroIndex]];
            if (targetDiv) {
                targetDiv.classList.remove('glow-blue-small');
                targetDiv.classList.remove('glow-red-small');
            }
            currentHeroIndex++;
            startTimer();
        } else if (currentHeroIndex == 5) {
            blueTeamIndicator.style.visibility = 'visible';
            redTeamIndicator.style.visibility = 'hidden';
            targetDiv = document.querySelectorAll('.large-div2')[heroOrder[currentHeroIndex+1]];
            if (targetDiv) targetDiv.classList.add('glow-blue');
            targetDiv = document.querySelectorAll('.small-div')[heroOrder[currentHeroIndex]];
            if (targetDiv) {
                targetDiv.classList.remove('glow-blue-small');
                targetDiv.classList.remove('glow-red-small');
            }
            currentHeroIndex++;
            startTimer();
        } else if (currentHeroIndex == 15) {
            blueTeamIndicator.style.visibility = 'hidden';
            redTeamIndicator.style.visibility = 'visible';
            targetDiv = document.querySelectorAll('.large-div')[heroOrder[currentHeroIndex+1]];
            if (targetDiv) targetDiv.classList.add('glow-red');
            targetDiv = document.querySelectorAll('.small-div')[heroOrder[currentHeroIndex]];
            if (targetDiv) {
                targetDiv.classList.remove('glow-blue-small');
                targetDiv.classList.remove('glow-red-small');
            }
            currentHeroIndex++;
            startTimer();
        } 
    };
    currentTime = totalTime;
    countdownBar.style.width = initialWidth + '%'; 
    if(countdownText)
        countdownText.textContent = totalTime; 
    clearInterval(timerInterval); 
    timerInterval = setInterval(() => updateCountdown(defaultCallback), updateInterval); 
}

function hideTimer(){
    timerContainer.style.visibility = 'hidden';
    if(countdownText)
        countdownText.style.visibility = 'hidden'; 
    clearInterval(timerInterval);
    draftButton.style.visibility= 'visible';
    if(screen.width>820){
        resetDivs(1);
        resetDivs(0);
    }
}
});