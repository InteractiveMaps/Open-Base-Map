const bases = [
    {
        country:"Australia",
        numberOfBases: "2",
        baseLocations:[
            {
                baseName:"Butterworth Air Base",
                coordinates:[5.4647,100.3831]
            },
            {
                baseName:"Al Minhad Air Base",
                coordinates:[25.0261,55.3707]
            },

        ]
    },
    {
        country:"Bangladesh",
        numberOfBases: "1",
        baseLocations:[
            {
                baseName:"Bangladesh-Kuwait Base *",
                coordinates:[29.3117,47.4818]
            },

        ]
    },
    {
        country:"China",
        numberOfBases: "1",
        baseLocations:[
            {
                baseName:"Peoples Liberation Army Support Base",
                coordinates:[11.58747,43.06082]
            },

        ]
    },
    {
        country:"France",
        numberOfBases: "3",
        baseLocations:[
            {
                baseName:"État-major des FFDJ",
                coordinates:[11.565642181765126, 43.151344450644295]
            },
            {
                baseName:"Camp de la Paix",
                coordinates:[24.52151, 54.396107]
            },
            {
                baseName:"Les forces françaises en Côte d’Ivoire #",
                coordinates:[5.316667, -4.033333]
            },
            {
                baseName:"Eléments Français au Sénégal",
                coordinates:[14.714829589660296, -17.481848830690566]
            },
            {
                baseName:"N'Djamena International Airport",
                coordinates:[12.133611, 15.033889]
            },
            {
                baseName:"Prince Hassan Air Base",
                coordinates:[32.160833, 37.149722]
            },
            {
                baseName:"Chabelley Airport",
                coordinates:[11.516667, 43.066667]
            },

        ]
    },
    {
        country:"Germany",
        numberOfBases: "1",
        baseLocations:[
            {
                baseName:"Illkirch-Graffenstaden (Franco-German Brigade)",
                coordinates:[47.8092,7.6180]
            },

        ]
    },
    {
        country:"Greece",
        numberOfBases: "1",
        baseLocations:[
            {
                baseName:"Camp of Major Sotirios Staurianakos, Nicosa",
                coordinates:[35.1856,33.3823]
            },

        ]
    },
    {
        country:"India",
        numberOfBases: "4",
        baseLocations:[
            {
                baseName:"North Agalega Base *",
                coordinates:[-10.37431554980248, 56.60823918450346]
            },
            {
                baseName:"Farkhor Air Base",
                coordinates:[37.4701, 69.3809]
            },
            {
                baseName:"Ayni Air Force Base",
                coordinates:[38.5142, 68.6755]
            },
            {
                baseName:"Duqm Port ^",
                coordinates:[19.650, 57.700]
            },
        ]
    },
    {
        country:"Iran",
        numberOfBases: "4",
        baseLocations:[
            {
                baseName:"Al Kiswah Base *",
                coordinates:[33.3552, 36.2484]
            },
            {
                baseName:"Dushanbe Drone Factory Base *",
                coordinates:[38.5598, 68.7870]
            },
            {
                baseName:"Ayni Air Force Base",
                coordinates:[38.5142, 68.6755]
            },
            {
                baseName:"Duqm Port ^",
                coordinates:[19.650, 57.700]
            },
        ]
    },
    {
        country:"Italy",
        numberOfBases: "1",
        baseLocations:[
            {
                baseName:"Amedeo Guillet BMIS",
                coordinates:[11.528889, 43.146361]
            },

        ]
    },
    {
        country:"Netherlands",
        numberOfBases: "3",
        baseLocations:[
            {
                baseName:"Parera Naval Base",
                coordinates:[12.113409117293491, -68.92023398095779]
            },
            {
                baseName:"Suffisant Naval Barracks",
                coordinates:[12.150711, -68.916378]
            },
            {
                baseName:"Savaneta Marine Barracks",
                coordinates:[12.452639, -69.949653]
            },

        ]
    },
    {
        country:"Pakistan",
        numberOfBases: "1",
        baseLocations:[
            {
                baseName:"Tabuk Base *",
                coordinates:[28.397222, 36.578889]
            },
        ]
    },
    {
        country:"Russia",
        numberOfBases: "14",
        baseLocations:[
            {
                baseName:"102nd Military Base",
                coordinates:[40.790019, 43.825667]
            },
            {
                baseName:"Erebuni Airport",
                coordinates:[40.128333, 44.472778]
            },
            {
                baseName:"Baranavichy Radar Station",
                coordinates:[52.8575, 26.481944]
            },
            {
                baseName:"Vilyeyka VLF transmitter",
                coordinates:[54.463611, 26.778889]
            },
            {
                baseName:"Ouagadougou Base *",
                coordinates:[12.36566, -1.53388]
            },
            {
                baseName:"4th Guards Military Base",
                coordinates:[42.189, 43.939]
            },
            {
                baseName:"7th Military Base",
                coordinates:[43.104, 40.579]
            },
            {
                baseName:"Sary Shagan Missile Testing Base",
                coordinates:[46.383333, 72.866667]
            },
            {
                baseName:"Baikonur Cosmodrome Spaceport ^",
                coordinates:[45.965, 63.305]
            },
            {
                baseName:"Kant Air Base",
                coordinates:[42.853056, 74.846389]
            },
            {
                baseName:"Kambala Air Base",
                coordinates:[46.025556, 73.495833]
            },
            {
                baseName:"720th Material-Technical Support Point",
                coordinates:[34.915, 35.874]
            },
            {
                baseName:"Khmeimim Air Base",
                coordinates:[35.411667, 35.945]
            },
            {
                baseName:"Shayrat Airbase",
                alsoUsedBy: "Iran",
                coordinates:[34.49, 36.908889]
            },
            {
                baseName:"201st Military Base",
                coordinates:[38.505489828126414, 68.73239128733985]
            },
            {
                baseName:"Sevastopol Naval Base",
                coordinates:[44.607778, 33.53]
            },
        ]
    },
    {
        country:"Singapore",
        numberOfBases: "3",
        baseLocations:[
            {
                baseName:"Jalan Aman Camp",
                coordinates:[4.947584205796581, 114.96984403354787]
            },
            {
                baseName:"Sai Yok Camp",
                coordinates:[14.002407035999092, 99.24171960022565]
            },
            {
                baseName:"Mountain Home Air Force Base",
                coordinates:[43.04, -115.87]
            },

        ]
    },
    {
        country:"Turkey",
        numberOfBases: "6",
        baseLocations:[
            {
                baseName:"Pasha Liman Base",
                coordinates:[40.323889, 19.419167]
            },
            {
                baseName:"Fatih Sultan Mehmet Barracks #",
                coordinates:[43.9159, 17.6791]
            },
            {
                baseName:"Bamarni Air Base #",
                coordinates:[37.05, 43.15]
            },
            {
                baseName:"Bashiqa Air Base *",
                coordinates:[36.2714, 43.3737]
            },
            {
                baseName:"Cyprus Turkish Peace Force Command *",
                coordinates:[35.340278, 33.319167]
            },
            {
                baseName:"Camp TURKSOM",
                coordinates:[1.996, 45.268]
            },
        ]
    },
    {
        country:"UAE",
        numberOfBases: "3",
        baseLocations:[
            {
                baseName:"Al Khadim Airbase !",
                coordinates:[32.05013393363698, 21.1835554144562]
            },
            {
                baseName:"Perim Island Airbase *",
                coordinates:[12.661359422799334, 43.418732092573016]
            },
            {
                baseName:"Socotra Airport and Seaport *",
                coordinates:[12.630556, 53.905556]
            },

        ]
    },
    {
        country:"United Kingdom",
        numberOfBases: "13",
        baseLocations:[
            {
                baseName:"British Army Training and Support Unit Belize",
                coordinates:[17.543611, -88.306111]
            },
            {
                baseName:"BFB, Brunei Garrison",
                coordinates:[4.608709, 114.314091]
            },
            {
                baseName:"RAF Trodos",
                coordinates:[34.912778, 32.883889]
            },
            {
                baseName:"Westfalen Garrison",
                coordinates:[51.778, 8.72]
            },
            {
                baseName:"Nyati Barracks",
                coordinates:[0.03733301403349672, 37.05572755767204]
            },
            {
                baseName:"Pokhara Camp *",
                coordinates:[28.191206507653714, 83.99430791141182]
            },
            {
                baseName:"Bardufoss Air Station",
                coordinates:[69.056111, 18.540278]
            },
            {
                baseName:"Camp Viking #",
                coordinates:[69.03038285344051, 19.293376003027994]
            },
            {
                baseName:"Omani-British Joint Training Area #",
                coordinates:[18.98032286330739, 57.78875086840502]
            },
            {
                baseName:"UK Joint Logistics Support Base",
                coordinates:[19.668611, 57.706111]
            },
            {
                baseName:"Al Udeid Air Base",
                alsoUsedBy: "USA",
                coordinates:[25.118611, 51.318611]
            },
            {
                baseName:"British Defence Singapore Support Unit",
                coordinates:[1.463, 103.83325]
            },
            {
                baseName:"Al Minhad Air Base",
                coordinates:[25.026833, 55.366333]
            },
        ]
    },
    {
        country:"USA",
        numberOfBases: "52",
        baseLocations:[
            {
                baseName:"Naval Station Rota",
                coordinates:[36.620763, -6.331558]
            },
            {
                baseName:"Misawa Airbase",
                coordinates:[40.68682,141.38969]
            },
            {
                baseName:"Camp Lemonnier",
                coordinates: [11.542180661235463, 43.15889755075717]
            },
            {
                baseName:"Pine Gap",
                coordinates: [-23.8001, 133.7368]
            },
            {
                baseName:"Robertson Barracks",
                coordinates: [-12.44500, 130.97444]
            },
            {
                baseName: "Nigerien Air Base 201",
                coordinates: [16.950278, 8.013889 ]
            },
            {
                baseName: "Arlit US Base *",
                coordinates: [18.733333, 7.383333]
            },
            {
                baseName: "Niamey Spy Base *",
                coordinates: [13.515, 2.1175]
            },
            {
                baseName: "RSS Singapura - Changi Naval Base",
                coordinates: [1.32111, 104.02583]
            },
            {
                baseName: "RAF Ascension Island",
                coordinates: [-7.969444, -14.393889]
            },
            {
                baseName: "Atlantic Undersea Test and Evaluation Center (AUTEC)",
                coordinates: [24.705556, -77.769167]
            },
            {
                baseName: "Naval Support Activity Bahrain",
                coordinates: [26.209722, 50.609722]
            },
            {
                baseName: "Isa Air Base ^",
                coordinates: [25.918333, 50.590556]
            },
            {
                baseName: "Chièvres Air Base",
                coordinates: [50.575833, 3.831111]
            },
            {
                baseName: "Kleine Brogel Air Base",
                coordinates: [51.168333, 5.47]
            },
            {
                baseName: "NATO Headquarters Sarajevo",
                coordinates: [43.81198049607752, 18.339697584658175]
            },
            {
                baseName: "Naval Support Facility Diego Garcia",
                coordinates: [-7.313333, 72.411111]
            },
            {
                baseName: "Aytos Logistics Center",
                coordinates: [42.711389, 27.232778]
            },
            {
                baseName: "Bezmer Air Base",
                coordinates: [42.454722, 26.352222]
            },
            {
                baseName: "Graf Ignatievo Air Base",
                coordinates: [42.290278, 24.713889]
            },
            {
                baseName: "Novo Selo Range",
                coordinates: [42.720278, 26.591944]
            },
            {
                baseName: "Contingecy Location Garoua #",
                coordinates: [9.3, 13.4]
            },
            {
                baseName: "Guantanamo Bay Naval Base",
                coordinates: [19.9175, -75.16]
            },
            {
                baseName: "USAF Forward Operating Base #",
                coordinates: [12.188889, -68.959722]
            },
            {
                baseName: "Ämari Air Base ^",
                coordinates: [59.262222, 24.218611]
            },
            {
                baseName: "Panzer Kaserne",
                coordinates: [48.6818, 9.046]
            },
            {
                baseName: "Ramstein Air Base",
                coordinates: [49.436833, 7.600333]
            },
            {
                baseName: "Spangdahlem Air Base",
                coordinates: [49.975833, 6.697222]
            },
            {
                baseName: "Baumholder Army Airfield",
                coordinates: [49.651389, 7.305278]
            },
            {
                baseName: "Landstuhl Regional Medical Center",
                coordinates: [49.404167, 7.560278]
            },
            {
                baseName: "Alexandroupoli Army Base",
                coordinates: [40.863056, 25.865556]
            },
            {
                baseName: "Larissa National Airport !",
                coordinates: [39.6491, 22.465453]
            },
            {
                baseName: "Crete Naval Base",
                coordinates: [35.49625, 24.147639]
            },
            {
                baseName: "Pituffik Space Base",
                coordinates: [76.531111, -68.703056]
            },
            {
                baseName: "Soto Cano Air Base",
                coordinates: [14.3825, -87.621111]
            },
            {
                baseName: "Naval Air Station Keflavik",
                coordinates: [63.985, -22.605556]
            },
            {
                baseName: "Al-Asad Airbase",
                coordinates: [33.8, 42.433333]
            },
            {
                baseName: "Dimona Radar Facility",
                coordinates: [30.968591, 35.097121]
            },
            {
                baseName: "Darby Military Community",
                coordinates: [43.633333, 10.316667]
            },
            {
                baseName: "Naval Air Station Sigonella",
                coordinates: [37.401667, 14.922222]
            },
            {
                baseName: "Naval Support Activity Naples",
                coordinates: [40.882389, 14.292361]
            },
            {
                baseName: "Aviano Air Base",
                coordinates: [46.031389, 12.596944]
            },
            {
                baseName: "Yokota Air Base",
                coordinates: [35.748611, 139.348611]
            },
            {
                baseName: "Camp Zama",
                coordinates: [35.48989878257603, 139.39569088415163]
            },
            {
                baseName: "Kadena Air Base",
                coordinates: [26.351667, 127.769444]
            },
            {
                baseName: "Camp Fuji",
                coordinates: [35.32059, 138.86873]
            },
            {
                baseName: "Marine Corps Air Station Iwakuni",
                coordinates: [34.145, 132.244167]
            },
            {
                baseName: "Marine Corps Air Station Futenma",
                coordinates: [26.270833, 127.748056]
            },
            {
                baseName: "Camp Hansen",
                coordinates: [26.460467, 127.915076]
            },
            {
                baseName: "Camp Schwab",
                coordinates: [26.524612, 128.044324]
            },
            {
                baseName: "United States Fleet Activities Sasebo",
                coordinates: [33.162778, 129.711389]
            },
            {
                baseName: "United States Fleet Activities Yokosuka",
                coordinates: [35.2932, 139.671293]
            },
            {
                baseName: "Naval Air Facility Atsugi",
                coordinates: [35.454722, 139.45]
            },
            {
                baseName: "Camp Gonsalves Marine Corps Jungle Warfare Training Center",
                coordinates: [26.688973, 128.22916]
            },
            {
                baseName: "Camp Foster",
                coordinates: [26.301389, 127.779722]
            },
            {
                baseName: "Torii Station",
                coordinates: [26.379192, 127.736694]
            },
            {
                baseName: "Camp Courtney",
                coordinates: [26.391944, 127.859444]
            },
            {
                baseName: "Camp McTureous",
                coordinates: [26.381389, 127.846389]
            },
            {
                baseName: "Marine Corps Base Smedley D. Butler",
                coordinates: [26.29736, 127.782983]
            },
            {
                baseName: "Muwaffaq Salti Air Base - Azraq",
                coordinates: [31.834167, 36.787222]
            },
            {
                baseName: "Camp Bondsteel",
                coordinates: [42.365667, 21.248333]
            },
            {
                baseName: "Ali Al Salem Air Base",
                coordinates: [29.346667, 47.520556]
            },
            {
                baseName: "Camp Arifjan",
                coordinates: [28.878, 48.1579]
            },
            {
                baseName: "Camp Buehring",
                coordinates: [29.697778, 47.426389]
            },
            {
                baseName: "Mohammed Al-Ahmad Kuwait Naval Base ^",
                coordinates: [28.862229016018233, 48.37491833644669]
            },
            {
                baseName: "Šiauliai Air Base ^",
                coordinates: [55.893889, 23.394722]
            },
            {
                baseName: "Volkel Air Base",
                coordinates: [51.657222, 5.690833]
            },
            {
                baseName: "Værnes Air Station",
                coordinates: [63.4575, 10.924167]
            },
            {
                baseName: "Antonio Bautista Air Base",
                coordinates: [9.744167, 118.758889]
            },
            {
                baseName: "Cesar Basa Air Base",
                coordinates: [14.983333, 120.483333]
            },
            {
                baseName: "Fort Magsaysay",
                coordinates: [15.433889, 121.087222]
            },
            {
                baseName: "Lumbia Airfield",
                coordinates: [8.415556, 124.611111]
            },
            {
                baseName: "Mactan–Benito Ebuen Air Base",
                coordinates: [10.307222, 123.978889]
            },
            {
                baseName: "Łask Air Base",
                coordinates: [51.5516, 19.1791]
            },
            {
                baseName: "Lajes Field",
                coordinates: [38.761944, -27.090833]
            },
            {
                baseName: "RoAF 57th Air Base ^",
                coordinates: [44.362997, 28.486997]
            },
            {
                baseName: "Deveselu Military Base",
                coordinates: [44.078667, 24.413417]
            },
            {
                baseName: "Prince Sultan Air Base",
                coordinates: [24.055278, 47.563611]
            },
            {
                baseName: "Seychelles International Airport Drone Base *",
                coordinates: [-4.674444, 55.521944]
            },
            {
                baseName: "Paya Lebar Air Base",
                coordinates: [1.360278, 103.909444]
            },
            {
                baseName: "Changi Air Base",
                coordinates: [1.376258, 103.983183]
            },
            {
                baseName: "Morón Air Base",
                coordinates: [37.174722, -5.615833]
            },
            {
                baseName: "Al-Tanf",
                coordinates: [33.505833, 38.617778]
            },
            {
                baseName: "Incirlik Air Base",
                coordinates: [37.001944, 35.425833]
            },
            {
                baseName: "Izmir Air Station",
                coordinates: [38.4575, 27.1705]
            },
            {
                baseName: "Kürecik Radar Station",
                coordinates: [38.349444, 37.793611]
            },
            {
                baseName: "Al Dhafra Air Base",
                coordinates: [24.24, 54.548333]
            },
            {
                baseName: "Port of Jebel Ali ^",
                coordinates: [25.01126, 55.06116]
            },
            {
                baseName: "RAF Alconbury",
                coordinates: [52.363333, -0.222778]
            },
            {
                baseName: "RAF Croughton",
                coordinates: [51.9875, -1.186111]
            },
            {
                baseName: "RAF Fairford",
                coordinates: [51.682222, -1.79]
            },
            {
                baseName: "RAF Lakenheath",
                coordinates: [52.408333, 0.556667]
            },
            {
                baseName: "RAF Menwith Hill",
                coordinates: [54.008056, -1.69]
            },
            {
                baseName: "RAF Mildenhall",
                coordinates: [52.365, 0.480833]
            },
            {
                baseName: "RAF Welford",
                coordinates: [51.468333, -1.403611]
            },
            {
                baseName: "United States Army Garrison Daegu",
                coordinates: [35.85, 128.6]
            },
            {
                baseName: "Camp Humphreys",
                coordinates: [36.966667, 127.033333]
            },
            {
                baseName: "Busan Naval Base",
                coordinates: [35.0996, 129.1065]
            },
            {
                baseName: "Osan Air Base",
                coordinates: [37.090556, 127.029722]
            },
            {
                baseName: "Commander Fleet Activities Chinhae",
                coordinates: [35.148091, 128.633766]
            },
            {
                baseName: "Camp Mujuk",
                coordinates: [35.96, 129.426111]
            },
            {
                baseName: "Camp Thunder Cove",
                coordinates: [-7.290833, 72.385833]
            },
        ]
    },
    {
        country:"Japan",
        numberOfBases: "1",
        baseLocations:[
            {
                baseName:"Japan Self-Defense Force Base Djibouti",
                coordinates:[11.553109,43.1442278]
            },

        ]
    },
    
]

export {bases}