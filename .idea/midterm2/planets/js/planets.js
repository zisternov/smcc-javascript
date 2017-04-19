/*
 Mariya Khokhlova
 mariyakhokhlova@my.smccd.edu
 CIS 114 OL
 planets.js
 Assignment # midterm2
 Apr-17-2017
 */

(function () {
    // Getting references to HTML elements
    var galaxy = document.getElementById('galaxy');
    var planet = document.getElementById('planet');
    var output = document.getElementById('output');

    // Declaring variables for elements to be added to DOM
    var image = document.createElement('img');
    var outputInfo = document.createElement('div');
    var info = '';

    // Function for removing content when dropdown selection changes
    function resetOutput() {
        while (output.firstChild) {
            output.removeChild(output.firstChild);
        }
    } // end of resetOutput

    // Function for adding content when dropdown selection changes
    function populateOutput(elem, info) {
        output.appendChild(image); // Adds img element to DOM
        image.src = 'images/' + elem.value + '.jpg'; // Builds a path to image
        outputInfo.id = 'description'; // Defines id for output div
        output.appendChild(outputInfo); // Adds a div to DOM
        // Builds an output text and populates Output
        outputInfo.innerHTML = '<h1>' + elem.options[elem.selectedIndex].text + '</h1><br>' + info;
    } // end of populateOutput

    // Function for displaying Planet's details
    function displayPlanet() {
        'use strict'

        // Removes previously generated children of Output if any
        resetOutput();

        // Hides Galaxy dropdown if it's not hidden
        galaxy.setAttribute('hidden', true);

        // Array for storing Planets details
        var planetInfo = ['',
            'Earth is the third planet from the Sun, and the densest and fifth-largest of the eight planets in the Solar System. It is also the largest of the Solar System\'s four terrestrial planets. It is sometimes referred to as the world, the Blue Planet, or by its Latin name, Terra. Earth formed approximately 4.54 billion years ago, and life appeared on its surface within one billion years. Earth\'s biosphere then significantly altered the atmospheric and other basic physical conditions, which enabled the proliferation of organisms as well as the formation of the ozone layer, which together with Earth\'s magnetic field blocked harmful solar radiation, and permitted formerly ocean-confined life to move safely to land.',
            'Jupiter is the fifth planet from the Sun and the largest planet in the Solar System. It is a gas giant with mass one-thousandth that of the Sun but is two and a half times the mass of all the other planets in our Solar System combined. Jupiter is classified as a gas giant along with Saturn, Uranus and Neptune. Together, these four planets are sometimes referred to as the Jovian or outer planets. The planet was known by astronomers of ancient times, and was associated with the mythology and religious beliefs of many cultures. The Romans named the planet after the Roman god Jupiter. When viewed from Earth, Jupiter can reach an apparent magnitude of -2.94, making it on average the third-brightest object in the night sky after the Moon and Venus. (Mars can briefly match Jupiter\'s brightness at certain points in its orbit.)',
            'Mars is the fourth planet from the Sun and the second smallest planet in the Solar System. Named after the Roman god of war, it is often described as the "Red Planet", as the iron oxide prevalent on its surface gives it a reddish appearance. Mars is a terrestrial planet with a thin atmosphere, having surface features reminiscent both of the impact craters of the Moon and the volcanoes, valleys, deserts, and polar ice caps of Earth. The rotational period and seasonal cycles of Mars are likewise similar to those of Earth, as is the tilt that produces the seasons. Mars is the site of Olympus Mons, the second highest known mountain within the Solar System, and of Valles Marineris, one of the largest canyons. The smooth Borealis basin in the northern hemisphere covers 40% of the planet and may be a giant impact feature. Mars has two moons, Phobos and Deimos, which are small and irregularly shaped. These may be captured asteroids, similar to 5261 Eureka, a Martian trojan asteroid.',
            'Mercury is the innermost planet in the Solar System. It is also the smallest, and its orbit is the most eccentric (that is, the least perfectly circular) of the eight planets. It orbits the Sun once in about 88 Earth days, completing three rotations about its axis for every two orbits. The planet is named after the Roman god Mercury, the messenger to the gods. Mercury\'s surface is heavily cratered and similar in appearance to Earth\'s Moon, indicating that it has been geologically inactive for billions of years. Due to its near lack of an atmosphere to retain heat, Mercury\'s surface experiences the steepest temperature gradient of all the planets, ranging from a very cold 100 K at night to a very hot 700 K during the day. Mercury\'s axis has the smallest tilt of any of the Solar System\'s planets, but Mercury\'s orbital eccentricity is the largest. The seasons on the planet\'s surface are caused by the variation of its distance from the Sun rather than by the axial tilt, which is the main cause of seasons on Earth and other planets. At perihelion, the intensity of sunlight on Mercury\'s surface is more than twice the intensity at aphelion.',
            'Neptune is the eighth and farthest planet from the Sun in the Solar System. It is the fourth-largest planet by diameter and the third-largest by mass. Neptune is 17 times the mass of Earth and is somewhat more massive than its near-twin Uranus, which is 15 times the mass of Earth but not as dense.[12] On average, Neptune orbits the Sun at a distance of 30.1 AU, approximately 30 times the EarthñSun distance. Named for the Roman god of the sea. Neptune was the first planet found by mathematical prediction rather than by empirical observation. Unexpected changes in the orbit of Uranus led Alexis Bouvard to deduce that its orbit was subject to gravitational perturbation by an unknown planet. Neptune was subsequently observed on 23 September 1846 by Johann Galle within a degree of the position predicted by Urbain Le Verrier, and its largest moon, Triton, was discovered shortly thereafter, though none of the planet\'s remaining 12 moons were located telescopically until the 20th century. Neptune has been visited by only one spacecraft, Voyager 2, which flew by the planet on 25 August 1989.',
            'Saturn is the sixth planet from the Sun and the second largest planet in the Solar System, after Jupiter. Named after the Roman god Saturn, its astronomical symbol represents the god\'s sickle. Saturn is a gas giant with an average radius about nine times that of Earth. While only one-eighth the average density of Earth, with its larger volume Saturn is just over 95 times as massive as Earth. Saturn\'s interior is probably composed of a core of iron, nickel and rock (silicon and oxygen compounds), surrounded by a deep layer of metallic hydrogen, an intermediate layer of liquid hydrogen and liquid helium and an outer gaseous layer. The planet exhibits a pale yellow hue due to ammonia crystals in its upper atmosphere. Electrical current within the metallic hydrogen layer is thought to give rise to Saturn\'s planetary magnetic field, which is slightly weaker than Earth\'s and around one-twentieth the strength of Jupiter\'s. The outer atmosphere is generally bland and lacking in contrast, although long-lived features can appear. Wind speeds on Saturn can reach 1,800 km/h (1,100 mph), faster than on Jupiter, but not as fast as those on Neptune.',
            'Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System. It is named after the ancient Greek deity of the sky Uranus, the father of Cronus (Saturn) and grandfather of Zeus (Jupiter). Though it is visible to the naked eye like the five classical planets, it was never recognized as a planet by ancient observers because of its dimness and slow orbit. Sir William Herschel announced its discovery on March 13, 1781, expanding the known boundaries of the Solar System for the first time in modern history. Uranus was also the first planet discovered with a telescope. Uranus is similar in composition to Neptune, and both are of different chemical composition than the larger gas giants Jupiter and Saturn. Astronomers sometimes place them in a separate category called "ice giants". Uranus\'s atmosphere, while similar to Jupiter\'s and Saturn\'s in its primary composition of hydrogen and helium, contains more "ices" such as water, ammonia, and methane, along with traces of hydrocarbons.',
            'Venus is the second planet from the Sun, orbiting it every 224.7 Earth days. The planet is named after the Roman goddess of love and beauty. After the Moon, it is the brightest natural object in the night sky, reaching an apparent magnitude of -4.6, bright enough to cast shadows. Because Venus is an inferior planet from Earth, it never appears to venture far from the Sun: its elongation reaches a maximum of 47.8 degrees. Venus reaches its maximum brightness shortly before sunrise or shortly after sunset, for which reason it has been referred to by ancient cultures as the Morning Star or Evening Star. Venus is classified as a terrestrial planet and is sometimes called Earth\'s "sister planet" owing to their similar size, gravity, and bulk composition (Venus is both the closest planet to Earth and the planet closest in size to Earth). However, it has been shown to be very different from Earth in other respects. Venus is shrouded by an opaque layer of highly reflective clouds of sulfuric acid, preventing its surface from being seen from space in visible light. It has the densest atmosphere of the four terrestrial planets, consisting mostly of carbon dioxide.'
        ];

        // Checks the value of selected option
        if (planet.value == 'galaxies') {
            updateMenu() // If galaxies is selected, calls function to display Galaxy dropdown
        }
        else if (planet.value != 'select') { // If not 'select', assigns correspondent description to Info
            switch (planet.value) {
                case 'earth':
                    info = planetInfo[1];
                    break;
                case 'jupiter':
                    info = planetInfo[2];
                    break;
                case 'mars':
                    info = planetInfo[3];
                    break;
                case 'mercury':
                    info = planetInfo[4];
                    break;
                case 'neptune':
                    info = planetInfo[5];
                    break;
                case 'saturn':
                    info = planetInfo[6];
                    break;
                case 'uranus':
                    info = planetInfo[7];
                    break;
                case 'venus':
                    info = planetInfo[8];
                    break;
            }
            // Calls function to display description and image
            populateOutput(planet, info);
        }
    } // end of displayPlanet

    // Function to display Galaxy's details
    function displayGalaxy() {
        // Array for storing Planets details
        var galaxyInfo = ['',
            'The Andromeda Galaxy is a spiral galaxy approximately 2.5 million light-years from Earth in the Andromeda constellation. Also known as Messier 31, M31, or NGC 224, it is often referred to as the Great Andromeda Nebula in older texts. The Andromeda Galaxy is the nearest spiral galaxy to our Milky Way galaxy, but not the closest galaxy overall. It gets its name from the area of the sky in which it appears, the constellation of Andromeda, which was named after the mythological princess Andromeda.',
            'Messier 82 (also known as NGC 3034, Cigar Galaxy or M82) is the prototype nearby starburst galaxy about 12 million light-years away in the constellation Ursa Major. The starburst galaxy is five times as bright as the whole Milky Way and one hundred times as bright as our galaxy\'s center.',
            'The Milky Way is the galaxy that contains the Earth. This name derives from its appearance as a dim "milky" glowing band arching across the night sky, in which the naked eye cannot distinguish individual stars. The term "Milky Way" is a translation of the Classical Latin via lactea, from the Hellenistic Greek galaxias kyklos, milky circle). The Milky Way appears like a band because it is a disk-shaped structure being viewed from inside. The fact that this faint band of light is made up of stars was proven in 1610 when Galileo Galilei used his telescope to resolve it into individual stars. In the 1920s, observations by astronomer Edwin Hubble showed that the Milky Way is just one of many galaxies.',
            'NGC 5866 (also called the Spindle Galaxy or Messier 102) is a relatively bright lenticular or spiral galaxy. NGC 5866 was probably discovered by Pierre Mechain or Charles Messier in 1781, and independently found by William Herschel in 1788.',
            'Discovered by Edmond Halley in 1677 who listed it as a nebula. Omega Centauri had been listed in Ptolemy\'s catalog 2000 years ago as a star. It was first recognized as a globular cluster by the English astronomer John William Herschel in the 1830s. Orbiting the Milky Way, it is both the brightest and the largest known globular cluster associated with our galaxy (1.6 Em).',
            'The Whirlpool Galaxy (also known as Messier 51a, M51a, or NGC 5194) is an interacting grand-design spiral galaxy in the constellation Canes Venatici. Recently it was estimated to be 23+-4 million light-years from the Milky Way Galaxy, but different methods yield distances between 15 and 35 million ly. Messier 51 is one of the best known galaxies in the sky.'
        ];

        if (galaxy.value == 'select') {
            resetOutput(); // if 'select' is selected, removes previously generated children of Output if any
        }
        else { // if not 'select', assigns correspondent description to Info
            switch (galaxy.value) {
                case 'andromeda':
                    info = galaxyInfo[1];
                    break;
                case 'm82':
                    info = galaxyInfo[2];
                    break;
                case 'milky':
                    info = galaxyInfo[3];
                    break;
                case 'ngc':
                    info = galaxyInfo[4];
                    break;
                case 'omega':
                    info = galaxyInfo[5];
                    break;
                case 'whirlpool':
                    info = galaxyInfo[6];
                    break;
            }
            // Calls function to display description and image
            populateOutput(galaxy, info);
        }
    } // end of displayGalaxy

    // Function to display Galaxy dropdown and reset it to the default state
    function updateMenu() {
        resetOutput(); // Removes previously generated children of Output if any
        galaxy.removeAttribute('hidden'); // Removes hidden flag to make Galaxy visible
        galaxy.selectedIndex = 0; // Resets selected option to 'select'
        galaxy.onchange = displayGalaxy; // Event handler for Galaxy dropdown

    }

    window.onload = function () {
        'use strict';

        // Event handler for Planet dropdown
        planet.onchange = displayPlanet;

    };
})();