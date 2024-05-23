document.addEventListener('DOMContentLoaded', () => {
    const heroGrid = document.querySelector('.hero-grid');
    const banSlots = document.querySelectorAll('.ban-slot');
    const pickSlots1 = document.querySelectorAll('#team1 .pick-slot');
    const pickSlots2 = document.querySelectorAll('#team2 .pick-slot');
    const categories = document.querySelectorAll('.hero-categories button');

    let selectedHero = null;
    let globalCat = 'all';

    // Example hero data with multiple categories
    const heroes = [
        { name: 'Miya', categories: ['marksman'], img: 'src/miya.webp', selected:false },
        { name: 'Balmond', categories: ['fighter'], img: 'src/balmond.webp', selected:false },
        { name: 'Saber', categories: ['assassin'], img: 'src/saber.webp', selected:false },
        { name: 'Alice', categories: ['mage','tank'], img: 'src/alice.webp', selected:false },
        { name: 'Nana', categories: ['mage'], img: 'src/nana.webp', selected:false },
        { name: 'Tigreal', categories: ['tank'], img: 'src/tigreal.webp', selected:false },
        { name: 'Alucard', categories: ['fighter','assassin'], img: 'src/alucard.webp', selected:false },
        { name: 'Karina', categories: ['assassin'], img: 'src/karina.webp', selected:false },
        { name: 'Akai', categories: ['tank'], img: 'src/akai.webp', selected:false },
        { name: 'Franco', categories: ['tank'], img: 'src/franco.webp', selected:false },
        { name: 'Bane', categories: ['fighter','mage'], img: 'src/bane.webp', selected:false },
        { name: 'Bruno', categories: ['marksman'], img: 'src/bruno.webp', selected:false },
        { name: 'Clint', categories: ['marksman'], img: 'src/clint.webp', selected:false },
        { name: 'Rafaela', categories: ['support'], img: 'src/rafaela.webp' , selected:false},
        { name: 'Eudora', categories: ['mage'], img: 'src/eudora.webp', selected:false },
        { name: 'Zilong', categories: ['fighter','assassin'], img: 'src/zilong.webp', selected:false },
        { name: 'Fanny', categories: ['assassin'], img: 'src/fanny.webp', selected:false },
        { name: 'Layla', categories: ['marksman'], img: 'src/layla.webp' , selected:false},
        { name: 'Minotaur', categories: ['tank','support'], img: 'src/minotaur.webp', selected:false },
        { name: 'Lolita', categories: ['tank','support'], img: 'src/lolita.webp', selected:false },
        { name: 'Hayabusa', categories: ['assassin'], img: 'src/hayabusa.webp', selected:false },
        { name: 'Freya', categories: ['fighter','assassin'], img: 'src/freya.webp', selected:false },
        { name: 'Gord', categories: ['mage'], img: 'src/gord.webp' , selected:false},
        { name: 'Natalia', categories: ['assassin'], img: 'src/natalia.webp', selected:false },
        { name: 'Kagura', categories: ['mage'], img: 'src/kagura.webp', selected:false },
        { name: 'Chou', categories: ['fighter'], img: 'src/chou.webp', selected:false },
        { name: 'Sun', categories: ['fighter'], img: 'src/sun.webp', selected:false },
        { name: 'Alpha', categories: ['fighter'], img: 'src/alpha.webp', selected:false },
        { name: 'Ruby', categories: ['fighter','tank'], img: 'src/ruby.webp', selected:false },
        { name: 'Yi Sun-shin', categories: ['assassin','marksman'], img: 'src/yss.webp', selected:false },
        { name: 'Moskov', categories: ['marksman'], img: 'src/moskov.webp', selected:false },
        { name: 'Johnson', categories: ['tank','support'], img: 'src/johnson.webp', selected:false },
        { name: 'Cyclops', categories: ['mage'], img: 'src/cyclops.webp', selected:false },
        { name: 'Estes', categories: ['support'], img: 'src/estes.webp', selected:false },
        { name: 'Hilda', categories: ['fighter','tank'], img: 'src/hilda.webp', selected:false },
        { name: 'Aurora', categories: ['mage'], img: 'src/aurora.webp', selected:false },
        { name: 'Lapu-Lapu', categories: ['fighter'], img: 'src/lapulapu.webp', selected:false },
        { name: 'Vexana', categories: ['mage'], img: 'src/vexana.webp', selected:false },
        { name: 'Roger', categories: ['marksman','fighter'], img: 'src/roger.webp', selected:false },
        { name: 'Karrie', categories: ['marksman'], img: 'src/karrie.webp', selected:false },
        { name: 'Gatotkaca', categories: ['tank','fighter'], img: 'src/gatot.webp', selected:false },
        { name: 'Harley', categories: ['mage','assassin'], img: 'src/harley.webp', selected:false },
        { name: 'Irithel', categories: ['marksman'], img: 'src/irithel.webp', selected:false },
        { name: 'Grock', categories: ['tank','fighter'], img: 'src/vexana.webp', selected:false },
        { name: 'Argus', categories: ['fighter'], img: 'src/argus.webp', selected:false },
        { name: 'Odette', categories: ['mage'], img: 'src/odette.webp', selected:false },
        { name: 'Lancelot', categories: ['assassin'], img: 'src/lancelot.webp', selected:false },
        { name: 'Diggie', categories: ['support'], img: 'src/diggie.webp', selected:false },
        { name: 'Hylos', categories: ['tank'], img: 'src/hylos.webp' , selected:false},
        { name: 'Zhask', categories: ['mage'], img: 'src/zhask.webp', selected:false },
        { name: 'Helcurt', categories: ['assassin'], img: 'src/helcurt.webp', selected:false },
        { name: 'Pharsa', categories: ['mage'], img: 'src/pharsa.webp', selected:false },
        { name: 'Lesley', categories: ['assassin','marksman'], img: 'src/lesley.webp', selected:false },
        { name: 'Jawhead', categories: ['fighter'], img: 'src/jawhead.webp', selected:false },
        { name: 'Angela', categories: ['support'], img: 'src/angela.webp', selected:false },
        { name: 'Gusion', categories: ['assassin'], img: 'src/gusion.webp' , selected:false},
        { name: 'Valir', categories: ['mage'], img: 'src/vexana.webp' , selected:false},
        { name: 'Martis', categories: ['fighter'], img: 'src/martis.webp', selected:false },
        { name: 'Uranus', categories: ['tank'], img: 'src/uranus.webp', selected:false },
        { name: 'Hanabi', categories: ['marksman'], img: 'src/hanabi.webp', selected:false },
        { name: 'Chang\'e', categories: ['mage'], img: 'src/change.webp', selected:false },
        { name: 'Kaja', categories: ['support','fighter'], img: 'src/kaja.webp', selected:false },
        { name: 'Selena', categories: ['assassin','mage'], img: 'src/selena.webp', selected:false },
        { name: 'Aldous', categories: ['fighter'], img: 'src/aldous.webp', selected:false },
        { name: 'Claude', categories: ['marksman'], img: 'src/claude.webp', selected:false },
        { name: 'Vale', categories: ['mage'], img: 'src/vale.webp', selected:false },
        { name: 'Leomord', categories: ['fighter'], img: 'src/leomord.webp', selected:false },
        { name: 'Lunox', categories: ['mage'], img: 'src/Lunox.webp', selected:false },
        { name: 'Hanzo', categories: ['assassin'], img: 'src/hanzo.webp', selected:false },
        { name: 'Belerick', categories: ['tank'], img: 'src/belerick.webp', selected:false },
        { name: 'Kimmy', categories: ['marksman','mage'], img: 'src/kimmy.webp', selected:false },
        { name: 'Thamuz', categories: ['fighter'], img: 'src/thamuz.webp', selected:false },
        { name: 'Harith', categories: ['mage'], img: 'src/harith.webp' , selected:false},
        { name: 'Minsitthar', categories: ['fighter'], img: 'src/minsi.webp', selected:false },
        { name: 'Kadita', categories: ['mage','assassin'], img: 'src/kadita.webp', selected:false },
        { name: 'Faramis', categories: ['mage','support'], img: 'src/faramis.webp', selected:false },
        { name: 'Badang', categories: ['fighter'], img: 'src/badang.webp', selected:false },
        { name: 'Khufra', categories: ['tank'], img: 'src/khufra.webp', selected:false },
        { name: 'Granger', categories: ['marksman'], img: 'src/granger.webp', selected:false },
        { name: 'Guinevere', categories: ['fighter'], img: 'src/guin.webp', selected:false },
        { name: 'Esmeralda', categories: ['mage','tank'], img: 'src/esme.webp', selected:false },
        { name: 'Terizla', categories: ['fighter','tank'], img: 'src/terizla.webp', selected:false },
        { name: 'X.Borg', categories: ['fighter'], img: 'src/xborg.webp', selected:false },
        { name: 'Ling', categories: ['assassin'], img: 'src/ling.webp', selected:false },
        { name: 'Dyrroth', categories: ['fighter'], img: 'src/dyrroth.webp', selected:false },
        { name: 'Lylia', categories: ['mage'], img: 'src/lylia.webp', selected:false },
        { name: 'Baxia', categories: ['tank'], img: 'src/baxia.webp', selected:false },
        { name: 'Masha', categories: ['fighter','tank'], img: 'src/masha.webp', selected:false },
        { name: 'Wanwan', categories: ['marksman'], img: 'src/wanwan.webp', selected:false },
        { name: 'Silvanna', categories: ['fighter'], img: 'src/silvanna.webp', selected:false },
        { name: 'Cecilion', categories: ['mage'], img: 'src/ceci.webp', selected:false },
        { name: 'Carmilla', categories: ['support','tank'], img: 'src/carmilla.webp', selected:false },
        { name: 'Atlas', categories: ['tank'], img: 'src/atlas.webp', selected:false },
        { name: 'Popol and Kupa', categories: ['marksman'], img: 'src/pnk.webp', selected:false },
        { name: 'Yu Zhong', categories: ['fighter'], img: 'src/yz.webp', selected:false },
        { name: 'Luo Yi', categories: ['mage'], img: 'src/yi.webp', selected:false },
        { name: 'Benedetta', categories: ['assassin'], img: 'src/bene.webp', selected:false },
        { name: 'Khaleed', categories: ['fighter'], img: 'src/khaleed.webp', selected:false },
        { name: 'Barats', categories: ['tank','fighter'], img: 'src/barats.webp', selected:false },
        { name: 'Brody', categories: ['marksman'], img: 'src/brody.webp', selected:false },
        { name: 'Yve', categories: ['mage'], img: 'src/yve.webp', selected:false },
        { name: 'Mathilda', categories: ['assassin','support'], img: 'src/mathilda.webp', selected:false },
        { name: 'Paquito', categories: ['fighter','assassin'], img: 'src/paq.webp' , selected:false},
        { name: 'Gloo', categories: ['tank'], img: 'src/gloo.webp', selected:false },
        { name: 'Beatrix', categories: ['marksman'], img: 'src/beatrix.webp', selected:false },
        { name: 'Phoveus', categories: ['fighter'], img: 'src/phov.webp', selected:false },
        { name: 'Natan', categories: ['marksman'], img: 'src/natan.webp', selected:false },
        { name: 'Aulus', categories: ['fighter'], img: 'src/aulus.webp', selected:false },
        { name: 'Aamon', categories: ['assassin'], img: 'src/aamon.webp', selected:false },
        { name: 'Valentina', categories: ['mage'], img: 'src/valentina.webp', selected:false },
        { name: 'Edith', categories: ['tank','marksman'], img: 'src/edith.webp', selected:false },
        { name: 'Floryn', categories: ['support'], img: 'src/floryn.webp', selected:false },
        { name: 'Yin', categories: ['fighter','assassin'], img: 'src/yin.webp', selected:false },
        { name: 'Melissa', categories: ['marksman'], img: 'src/melissa.webp', selected:false },
        { name: 'Xavier', categories: ['mage'], img: 'src/xavier.webp' , selected:false},
        { name: 'Julian', categories: ['fighter','mage'], img: 'src/julian.webp', selected:false },
        { name: 'Fredrinn', categories: ['fighter','tank'], img: 'src/fredrinn.webp' , selected:false},
        { name: 'Joy', categories: ['assassin'], img: 'src/joy.webp', selected:false},
        { name: 'Novaria', categories: ['mage'], img: 'src/novaria.webp' , selected:false},
        { name: 'Arlott', categories: ['fighter','assassin'], img: 'src/arlott.webp', selected:false },
        { name: 'Ixia', categories: ['marksman'], img: 'src/ixia.webp' , selected:false},
        { name: 'Nolan', categories: ['assassin'], img: 'src/nolan.webp', selected:false },
        { name: 'Cici', categories: ['fighter'], img: 'src/cici.webp' , selected:false},
        { name: 'Chip', categories: ['support','tank'], img: 'src/chip.webp', selected:false },
        { name: 'Zhuxin', categories: ['mage'], img: 'src/zhuxin.webp' , selected:false},

    ];
    

    // Function to load heroes into the grid
    const loadHeroes = (category) => {
        heroGrid.innerHTML = '';
        heroes.forEach(hero => {
            if (category === 'all' || hero.categories.includes(category)) {
                const heroDiv = document.createElement('div');
                heroDiv.classList.add('hero');
                heroDiv.dataset.hero = hero.name;
                heroDiv.dataset.categories = hero.categories.join(',');
                if ( hero.selected=== true){
                    heroDiv.innerHTML = `<img src="${hero.img}" alt="${hero.name}" style="-webkit-filter: grayscale(1);">`;
                }
                else{
                    heroDiv.innerHTML = `<img src="${hero.img}" alt="${hero.name}" style="cursor: pointer;">`;
                    heroDiv.addEventListener('click', () => {
                        selectedHero = hero;
                    });
                }
                heroGrid.appendChild(heroDiv);
            }
        });
    };

    // Load all heroes initially
    loadHeroes('all');

    // Filter heroes by category
    categories.forEach(button => {
        button.addEventListener('click', () => {
            loadHeroes(button.dataset.category);
            globalCat = button.dataset.category;
        });
    });

    // Handle hero banning
    banSlots.forEach(slot => {
        slot.addEventListener('click', () => {
            if (selectedHero) {
                slot.innerHTML = `
                    <img src="${selectedHero.img}" alt="${selectedHero.name}">
                    <span class="remove">⛒</span>
                `;
                slot.dataset.hero = selectedHero.name;
                slot.querySelector('.remove').addEventListener('click', (e) => {
                    e.stopPropagation();
                    enableHeroInGrid(slot.dataset.hero);
                    slot.innerHTML = '';
                    slot.removeAttribute('data-hero');
                });
                disableHeroInGrid(selectedHero);
            }
        });
    });

    // Handle hero picking for Team 1
    pickSlots1.forEach(slot => {
        slot.addEventListener('click', () => {
            if (selectedHero) {
                slot.innerHTML = `
                    <img src="${selectedHero.img}" alt="${selectedHero.name}">
                    <span class="remove">⛒</span>
                `;
                slot.dataset.hero = selectedHero.name;
                slot.querySelector('.remove').addEventListener('click', (e) => {
                    e.stopPropagation();
                    enableHeroInGrid(slot.dataset.hero);
                    slot.innerHTML = '';
                    slot.removeAttribute('data-hero');
                });
                disableHeroInGrid(selectedHero);
            }
        });
    });

    // Handle hero picking for Team 2
    pickSlots2.forEach(slot => {
        slot.addEventListener('click', () => {
            if (selectedHero) {
                slot.innerHTML = `
                    <img src="${selectedHero.img}" alt="${selectedHero.name}">
                    <span class="remove">⛒</span>
                `;
                slot.dataset.hero = selectedHero.name;
                slot.querySelector('.remove').addEventListener('click', (e) => {
                    e.stopPropagation();
                    enableHeroInGrid(slot.dataset.hero);
                    slot.innerHTML = '';
                    slot.removeAttribute('data-hero');
                });
                disableHeroInGrid(selectedHero);
            }
        });
    });

    // Function to disable a hero in the grid
    const disableHeroInGrid = (heroName) => {
        heroName.selected = true;
        selectedHero=null;
        loadHeroes(globalCat);
    };

    // Function to enable a hero in the grid
    const enableHeroInGrid = (heroName) => {
        const foundHero = heroes.find(hero => hero.name === heroName);
        foundHero.selected = false;
        loadHeroes(globalCat);
    };
});
