const moon_landings = [
    {
        name:"Luna 2",
        country:"Soviet Union",
        type:"Impactor",
        status:"Success",
        imageUrl:"country/Soviet Union.png",
        date:"13/09/1959",
        coordinates:[29.1, 0]
    },
    {
        name:"Ranger 7",
        country:"USA",
        type:"Impactor",
        status:"Success",
        imageUrl:"country/USA.png",
        date:"30/07/1964",
        coordinates:[-10.634, -20.6771]
    },
    {
        name:"Ranger 8",
        country:"USA",
        type:"Impactor",
        status:"Success",
        imageUrl:"country/USA.png",
        date:"20/02/1965",
        coordinates:[2.6377, 24.7881]
    },
    {
        name:"Ranger 9",
        country:"USA",
        type:"Impactor",
        status:"Success",
        imageUrl:"country/USA.png",
        date:"24/03/1965",
        coordinates:[-12.83, -2.37]
    },
    {
        name:"Luna 9",
        country:"Soviet Union",
        type:"Lander",
        status:"Success",
        imageUrl:"country/Soviet Union.png",
        date:"03/02/1966",
        coordinates:[7.08, -64.37]
    },
    {
        name:"Surveyor 1",
        country:"USA",
        type:"Lander",
        status:"Success",
        imageUrl:"country/USA.png",
        date:"02/06/1966",
        coordinates:[-2.474, -43.339]
    },
    {
        name:"Surveyor 2",
        country:"USA",
        type:"Lander",
        status:"Failed",
        imageUrl:"country/USA_bw.png",
        date:"23/09/1966",
        coordinates:[ -4, -11]
    },
    {
        name:"Lunar Orbiter 2",
        country:"USA",
        type:"Orbiter",
        status:"Success",
        imageUrl:"country/USA.png",
        date:"10/11/1966",
        coordinates:[3, 119.1]
    },
    {
        name:"Luna 13",
        country:"Soviet Union",
        type:"Lander",
        status:"Success",
        imageUrl:"country/Soviet Union.png",
        date:"24/12/1966",
        coordinates:[18.87, -62.05]
    },
    {
        name:"Lunar Orbiter 3",
        country:"USA",
        type:"Orbiter",
        status:"Success",
        imageUrl:"country/USA.png",
        date:"09/10/1967",
        coordinates:[14.3, -97.7]
    },
    {
        name:"Surveyor 3",
        country:"USA",
        type:"Lander",
        status:"Success",
        imageUrl:"country/USA.png",
        date:"20/04/1967",
        coordinates:[-3.01612, -23.41791]
    },
    {
        name:"Surveyor 4",
        country:"USA",
        type:"Lander",
        status:"Failed",
        imageUrl:"country/USA_bw.png",
        date:"17/07/1967",
        coordinates:[0.45, -1.39]
    },
    {
        name:"Lunar Orbiter 5",
        country:"USA",
        type:"Orbiter",
        status:"Success",
        imageUrl:"country/USA.png",
        date:"31/01/1968",
        coordinates:[-2.79, -83.01]
    },
    {
        name:"Surveyor 5",
        country:"USA",
        type:"Lander",
        status:"Success",
        imageUrl:"country/USA.png",
        date:"11/09/1967",
        coordinates:[1.41, 23.18]
    },
    {
        name:"Surveyor 6",
        country:"USA",
        type:"Lander",
        status:"Success",
        imageUrl:"country/USA.png",
        date:"10/11/1967",
        coordinates:[0.46, -1.37]
    },
    {
        name:"Surveyor 7",
        country:"USA",
        type:"Lander",
        status:"Success",
        imageUrl:"country/USA.png",
        date:"10/01/1968",
        coordinates:[-41.01, -11.41]
    },
    {
        name:"Luna 15",
        country:"Soviet Union",
        type:"Lander and Sample Return",
        status:"Failure",
        imageUrl:"country/Soviet Union.png",
        date:"21/07/1969",
        coordinates:[17, 60]
    },
    {
        name:"Apollo 11 - Lunar Module Eagle",
        country:"USA",
        type:"Crewed Lander",
        status:"Success",
        imageUrl:"country/USA.png",
        date:"20/07/1969",
        coordinates:[0.67416, 23.47314]
    },
    {
        name:"Apollo 12 - Lunar Module Intrepid",
        country:"USA",
        type:"Crewed Lander",
        status:"Success",
        imageUrl:"country/USA.png",
        date:"19/11/1969",
        coordinates:[-3.01239, -23.42157]
    },
    {
        name:"Luna 16",
        country:"Soviet Union",
        type:"Lander and Sample Return",
        status:"Success",
        imageUrl:"country/Soviet Union.png",
        date:"20/09/1970",
        coordinates:[ -0.5137, 56.3638]
    },
    {
        name:"Luna 17 and Lunokhold 1",
        country:"Soviet Union",
        type:"Lander and Rover",
        status:"Success",
        imageUrl:"country/Soviet Union.png",
        date:"17/11/1970",
        coordinates:[38.28, -35]
    },
    {
        name:"Apollo 14 - Lunar Module Antares",
        country:"USA",
        type:"Crewed Lander",
        status:"Success",
        imageUrl:"country/USA.png",
        date:"05/02/1971",
        coordinates:[-3.6453, -17.47136]
    },
    {
        name:"Apollo 15 - Lunar Module Falcon",
        country:"USA",
        type:"Crewed Lander and Roving Vehicle",
        status:"Success",
        imageUrl:"country/USA.png",
        date:"30/07/1971",
        coordinates:[26.1322, 3.6339]
    },
    {
        name:"Luna 18",
        country:"Soviet Union",
        type:"Lander",
        status:"Failed",
        imageUrl:"country/Soviet Union_bw.png",
        date:"11/09/1971",
        coordinates:[3.566667, 56.5]
    },
    {
        name:"Luna 20",
        country:"Soviet Union",
        type:"Lander and Sample Return",
        status:"Success",
        imageUrl:"country/Soviet Union.png",
        date:"21/02/1972",
        coordinates:[3.7863, 56.6242]
    },
    {
        name:"Apollo 16 - Lunar Module Orion",
        country:"USA",
        type:"Crewed Lander and Roving Vehicle",
        status:"Success",
        imageUrl:"country/USA.png",
        date:"21/04/1972",
        coordinates:[-8.97301, 15.50019]
    },
    {
        name:"Apollo 17 - Lunar Module Challenger",
        country:"USA",
        type:"Crewed Lander and Roving Vehicle",
        status:"Success",
        imageUrl:"country/USA.png",
        date:"11/12/1972",
        coordinates:[20.1908, 30.7717]
    },
    {
        name:"Luna 21 and Lunokhold 2",
        country:"Soviet Union",
        type:"Lander and Rover",
        status:"Success",
        imageUrl:"country/Soviet Union.png",
        date:"15/01/1973",
        coordinates:[25.85, 30.45]
    },
    {
        name:"Luna 23",
        country:"Soviet Union",
        type:"Lander and Sample Return",
        status:"Partial Failure",
        imageUrl:"country/Soviet Union.png",
        date:"06/11/1974",
        coordinates:[12.6669, 62.1511]
    },
    {
        name:"Luna 24",
        country:"Soviet Union",
        type:"Lander and Sample Return",
        status:"Success",
        imageUrl:"country/Soviet Union.png",
        date:"18/08/1976",
        coordinates:[12.7145, 62.2097]
    },
    {
        name:"Hiten-Hagoromo",
        country:"Japan",
        type:"Orbiter",
        status:"Success",
        imageUrl:"country/Japan.png",
        date:"10/04/1993",
        coordinates:[-34.3, 55.6]
    },
    {
        name:"SMART-1",
        country:"EU",
        type:"Orbiter",
        status:"Success",
        imageUrl:"country/United Kingdom.png",
        date:"03/09/2006",
        coordinates:[-34.262, -46.193]
    },
    {
        name:"SELENE/Kaguya",
        country:"Japan",
        type:"Orbiter",
        status:"Success",
        imageUrl:"country/Japan.png",
        date:"10/06/2009",
        coordinates:[-65.5, 80.4]
    },
    {
        name:"Chang'e 1",
        country:"China",
        type:"Orbiter",
        status:"Success",
        imageUrl:"country/China.png",
        date:"01/03/2009",
        coordinates:[-1.5, 52.36]
    },
    {
        name:"Chandrayaan-1 - Moon Impact Probe",
        country:"India",
        type:"Orbiter and Impactor",
        status:"Success",
        imageUrl:"country/India.png",
        date:"14/11/2008",
        coordinates:[-89.55, -122.93]
    },
    {
        name:"LCROSS",
        country:"USA",
        type:"Impactor",
        status:"Success",
        imageUrl:"country/USA.png",
        date:"09/10/2009",
        coordinates:[ -84.675, 31.1275]
    },
    {
        name:"GRAIL A",
        country:"USA",
        type:"Orbiter",
        status:"Success",
        imageUrl:"country/USA.png",
        date:"17/12/2012",
        coordinates:[ 75.6083, 33.4043]
    },
    {
        name:"GRAIL B",
        country:"USA",
        type:"Orbiter",
        status:"Success",
        imageUrl:"country/USA.png",
        date:"17/12/2012",
        coordinates:[ 75.6504, 33.1643]
    },
    {
        name:"LADEE",
        country:"USA",
        type:"Orbiter",
        status:"Success",
        imageUrl:"country/USA.png",
        date:"18/04/2014",
        coordinates:[ 11.8494, 26.67506]
    },
    {
        name:"Chang'e 3 and Yutu",
        country:"China",
        type:"Lander and Rover",
        status:"Success",
        imageUrl:"country/China.png",
        date:"14/12/2012",
        coordinates:[44.1214, 19.5116]
    },
    {
        name:"Manfred Memorial Moon Mission",
        country:"Luxembourg",
        type:"Impactor",
        status:"Success",
        imageUrl:"country/Luxembourg.png",
        date:"14/12/2012",
        coordinates:[44.1214, 19.5116]
    },
    {
        name:"Chang'e 4 and Yutu 2",
        country:"China",
        type:"Lander and Rover",
        status:"Success",
        imageUrl:"country/China.png",
        date:"03/01/2019",
        coordinates:[-45.444, 177.599]
    },
    {
        name:"Beresheet",
        country:"Israel",
        type:"Lander",
        staus:"Failed",
        imageUrl:"country/Israel_bw.png",
        date:"11/04/2019",
        coordinates:[ 32.5956, 19.3496]
    },
    {
        name:"Chandrayaan-2",
        country:"India",
        type:"Lander and Rover",
        status:"Failed",
        imageUrl:"country/India_bw.png",
        date:"06/09/2019",
        coordinates:[ -70.881, 22.784]
    },
    {
        name:"Chang'e 5",
        country:"China",
        type:"Lander and Sample Return",
        status:"Success",
        imageUrl:"country/China.png",
        date:"01/12/2020",
        coordinates:[43.0576, -51.9161]
    },
    {
        name:"Hakuto-R Mission 1 and Rashid",
        country:"UAE and Japan",
        type:"Lander and Rover",
        status:"Failed",
        imageUrl:"country/UAE.png",
        date:"25/04/2023",
        coordinates:[ 47.581, 44.094]
    },
    {
        name:"Chandrayaan-3 and Pragyan",
        country:"India",
        type:"Lander and Rover",
        status:"Success",
        imageUrl:"country/India.png",
        date:"23/08/2023",
        coordinates:[-69.373, 32.319]
    },
    {
        name:"Luna 25",
        country:"Russia",
        type:"Lander",
        status:"Failed",
        imageUrl:"country/Russia_bw.png",
        date:"19/08/2023",
        coordinates:[-57.865, 61.36]
    },
    {
        name:"SLIM and LEV-1 & LEV-2",
        country:"Japan",
        type:"Lander and Rover",
        status:"Failed",
        imageUrl:"country/Japan_bw.png",
        date:"19/01/2024",
        coordinates:[-13.316, 25.251]
    },
    {
        name:"IM-1",
        country:"USA",
        type:"Lander",
        status:"Success",
        imageUrl:"country/USA.png",
        date:"22/02/2024",
        coordinates:[-80.13, 1.44]
    },
    {
        name:"Chang'e 6",
        country:"China",
        type:"Lander and Rover",
        status:"Success",
        imageUrl:"country/China.png",
        date:"01/06/2024",
        coordinates:[-41.6383, -153.9856]
    },
    
    
]

const moon_landings_filtered = [
    {
        missionType:"Impactor",
        baseLocations:[
            {
                name:"Luna 2",
                country:"Soviet Union",
                type:"Impactor",
                status:"Success",
                imageUrl:"country/Soviet Union.png",
                date:"13/09/1959",
                coordinates:[29.1, 0]
            },
            {
                name:"Ranger 7",
                country:"USA",
                type:"Impactor",
                status:"Success",
                imageUrl:"country/USA.png",
                date:"30/07/1964",
                coordinates:[-10.634, -20.6771]
            },
            {
                name:"Ranger 8",
                country:"USA",
                type:"Impactor",
                status:"Success",
                imageUrl:"country/USA.png",
                date:"20/02/1965",
                coordinates:[2.6377, 24.7881]
            },
            {
                name:"Ranger 9",
                country:"USA",
                type:"Impactor",
                status:"Success",
                imageUrl:"country/USA.png",
                date:"24/03/1965",
                coordinates:[-12.83, -2.37]
            },
            {
                name:"LCROSS",
                country:"USA",
                type:"Impactor",
                status:"Success",
                imageUrl:"country/USA.png",
                date:"09/10/2009",
                coordinates:[ -84.675, 31.1275]
            },
            {
                name:"Manfred Memorial Moon Mission",
                country:"Luxembourg",
                type:"Impactor",
                status:"Success",
                imageUrl:"country/Luxembourg.png",
                date:"14/12/2012",
                coordinates:[44.1214, 19.5116]
            },
        ]
    },
    {
        missionType:"Lander",
        baseLocations:[
            {
                name:"Luna 9",
                country:"Soviet Union",
                type:"Lander",
                status:"Success",
                imageUrl:"country/Soviet Union.png",
                date:"03/02/1966",
                coordinates:[7.08, -64.37]
            },
            {
                name:"Surveyor 1",
                country:"USA",
                type:"Lander",
                status:"Success",
                imageUrl:"country/USA.png",
                date:"02/06/1966",
                coordinates:[-2.474, -43.339]
            },
            {
                name:"Surveyor 2",
                country:"USA",
                type:"Lander",
                status:"Failed",
                imageUrl:"country/USA_bw.png",
                date:"23/09/1966",
                coordinates:[ -4, -11]
            },
            {
                name:"Luna 13",
                country:"Soviet Union",
                type:"Lander",
                status:"Success",
                imageUrl:"country/Soviet Union.png",
                date:"24/12/1966",
                coordinates:[18.87, -62.05]
            },
            {
                name:"Surveyor 3",
                country:"USA",
                type:"Lander",
                status:"Success",
                imageUrl:"country/USA.png",
                date:"20/04/1967",
                coordinates:[-3.01612, -23.41791]
            },
            {
                name:"Surveyor 4",
                country:"USA",
                type:"Lander",
                status:"Failed",
                imageUrl:"country/USA_bw.png",
                date:"17/07/1967",
                coordinates:[0.45, -1.39]
            },
            {
                name:"Surveyor 5",
                country:"USA",
                type:"Lander",
                status:"Success",
                imageUrl:"country/USA.png",
                date:"11/09/1967",
                coordinates:[1.41, 23.18]
            },
            {
                name:"Surveyor 6",
                country:"USA",
                type:"Lander",
                status:"Success",
                imageUrl:"country/USA.png",
                date:"10/11/1967",
                coordinates:[0.46, -1.37]
            },
            {
                name:"Surveyor 7",
                country:"USA",
                type:"Lander",
                status:"Success",
                imageUrl:"country/USA.png",
                date:"10/01/1968",
                coordinates:[-41.01, -11.41]
            },
            {
                name:"Luna 18",
                country:"Soviet Union",
                type:"Lander",
                status:"Failed",
                imageUrl:"country/Soviet Union_bw.png",
                date:"11/09/1971",
                coordinates:[3.566667, 56.5]
            },
            {
                name:"Beresheet",
                country:"Israel",
                type:"Lander",
                staus:"Failed",
                imageUrl:"country/Israel_bw.png",
                date:"11/04/2019",
                coordinates:[ 32.5956, 19.3496]
            },
            {
                name:"Luna 25",
                country:"Russia",
                type:"Lander",
                status:"Failed",
                imageUrl:"country/Russia_bw.png",
                date:"19/08/2023",
                coordinates:[-57.865, 61.36]
            },
            {
                name:"SLIM and LEV-1 & LEV-2",
                country:"Japan",
                type:"Lander and Rover",
                status:"Failed",
                imageUrl:"country/Japan_bw.png",
                date:"19/01/2024",
                coordinates:[-13.316, 25.251]
            },
            {
                name:"IM-1",
                country:"USA",
                type:"Lander",
                status:"Success",
                imageUrl:"country/USA.png",
                date:"22/02/2024",
                coordinates:[-80.13, 1.44]
            },
            
        ]
    },
    {
        missionType:"Orbiter",
        baseLocations:[
            {
                name:"Lunar Orbiter 2",
                country:"USA",
                type:"Orbiter",
                status:"Success",
                imageUrl:"country/USA.png",
                date:"10/11/1966",
                coordinates:[3, 119.1]
            },
            {
                name:"Lunar Orbiter 3",
                country:"USA",
                type:"Orbiter",
                status:"Success",
                imageUrl:"country/USA.png",
                date:"09/10/1967",
                coordinates:[14.3, -97.7]
            },
            {
                name:"Lunar Orbiter 5",
                country:"USA",
                type:"Orbiter",
                status:"Success",
                imageUrl:"country/USA.png",
                date:"31/01/1968",
                coordinates:[-2.79, -83.01]
            },
            {
                name:"Hiten-Hagoromo",
                country:"Japan",
                type:"Orbiter",
                status:"Success",
                imageUrl:"country/Japan.png",
                date:"10/04/1993",
                coordinates:[-34.3, 55.6]
            },
            {
                name:"SMART-1",
                country:"EU",
                type:"Orbiter",
                status:"Success",
                imageUrl:"country/United Kingdom.png",
                date:"03/09/2006",
                coordinates:[-34.262, -46.193]
            },
            {
                name:"SELENE/Kaguya",
                country:"Japan",
                type:"Orbiter",
                status:"Success",
                imageUrl:"country/Japan.png",
                date:"10/06/2009",
                coordinates:[-65.5, 80.4]
            },
            {
                name:"Chang'e 1",
                country:"China",
                type:"Orbiter",
                status:"Success",
                imageUrl:"country/China.png",
                date:"01/03/2009",
                coordinates:[-1.5, 52.36]
            },
            {
                name:"GRAIL A",
                country:"USA",
                type:"Orbiter",
                status:"Success",
                imageUrl:"country/USA.png",
                date:"17/12/2012",
                coordinates:[ 75.6083, 33.4043]
            },
            {
                name:"GRAIL B",
                country:"USA",
                type:"Orbiter",
                status:"Success",
                imageUrl:"country/USA.png",
                date:"17/12/2012",
                coordinates:[ 75.6504, 33.1643]
            },
            {
                name:"LADEE",
                country:"USA",
                type:"Orbiter",
                status:"Success",
                imageUrl:"country/USA.png",
                date:"18/04/2014",
                coordinates:[ 11.8494, 26.67506]
            },
        ]
    },
    {
        missionType: "Orbiter and Impactor",
        baseLocations:[
            {
                name:"Chandrayaan-1 - Moon Impact Probe",
                country:"India",
                type:"Orbiter and Impactor",
                status:"Success",
                imageUrl:"country/India.png",
                date:"14/11/2008",
                coordinates:[-89.55, -122.93]
            },
        ]
    },
    {
        missionType:"Lander and Rover",
        baseLocations:[
            {
                name:"Luna 17 and Lunokhold 1",
                country:"Soviet Union",
                type:"Lander and Rover",
                status:"Success",
                imageUrl:"country/Soviet Union.png",
                date:"17/11/1970",
                coordinates:[38.28, -35]
            },
            {
                name:"Luna 21 and Lunokhold 2",
                country:"Soviet Union",
                type:"Lander and Rover",
                status:"Success",
                imageUrl:"country/Soviet Union.png",
                date:"15/01/1973",
                coordinates:[25.85, 30.45]
            },
            {
                name:"Chang'e 3 and Yutu",
                country:"China",
                type:"Lander and Rover",
                status:"Success",
                imageUrl:"country/China.png",
                date:"14/12/2012",
                coordinates:[44.1214, 19.5116]
            },
            {
                name:"Chang'e 4 and Yutu 2",
                country:"China",
                type:"Lander and Rover",
                status:"Success",
                imageUrl:"country/China.png",
                date:"03/01/2019",
                coordinates:[-45.444, 177.599]
            },
            {
                name:"Chandrayaan-2",
                country:"India",
                type:"Lander and Rover",
                status:"Failed",
                imageUrl:"country/India_bw.png",
                date:"06/09/2019",
                coordinates:[ -70.881, 22.784]
            },
            {
                name:"Hakuto-R Mission 1 and Rashid",
                country:"UAE and Japan",
                type:"Lander and Rover",
                status:"Failed",
                imageUrl:"country/Japan_bw.png",
                date:"25/04/2023",
                coordinates:[ 47.581, 44.094]
            },
            {
                name:"Chandrayaan-3 and Pragyan",
                country:"India",
                type:"Lander and Rover",
                status:"Success",
                imageUrl:"country/India.png",
                date:"23/08/2023",
                coordinates:[-69.373, 32.319]
            },
            {
                name:"SLIM and LEV-1 & LEV-2",
                country:"Japan",
                type:"Lander and Rover",
                status:"Failed",
                imageUrl:"country/Japan_bw.png",
                date:"19/01/2024",
                coordinates:[-13.316, 25.251]
            },
            {
                name:"Chang'e 6",
                country:"China",
                type:"Lander and Rover",
                status:"Success",
                imageUrl:"country/China.png",
                date:"01/06/2024",
                coordinates:[-41.6383, -153.9856]
            },
        ]
    },
    {
        missionType:"Crewed Lander",
        baseLocations:[
            {
                name:"Apollo 11 - Lunar Module Eagle",
                country:"USA",
                type:"Crewed Lander",
                status:"Success",
                imageUrl:"country/USA.png",
                date:"20/07/1969",
                coordinates:[0.67416, 23.47314]
            },
            {
                name:"Apollo 12 - Lunar Module Intrepid",
                country:"USA",
                type:"Crewed Lander",
                status:"Success",
                imageUrl:"country/USA.png",
                date:"19/11/1969",
                coordinates:[-3.01239, -23.42157]
            },
            {
                name:"Apollo 14 - Lunar Module Antares",
                country:"USA",
                type:"Crewed Lander",
                status:"Success",
                imageUrl:"country/USA.png",
                date:"05/02/1971",
                coordinates:[-3.6453, -17.47136]
            },
        ]
    },
    {
        missionType:"Crewed Lander and Roving Vehicle",
        baseLocations:[
            {
                name:"Apollo 15 - Lunar Module Falcon",
                country:"USA",
                type:"Crewed Lander and Roving Vehicle",
                status:"Success",
                imageUrl:"country/USA.png",
                date:"30/07/1971",
                coordinates:[26.1322, 3.6339]
            },
            {
                name:"Apollo 16 - Lunar Module Orion",
                country:"USA",
                type:"Crewed Lander and Roving Vehicle",
                status:"Success",
                imageUrl:"country/USA.png",
                date:"21/04/1972",
                coordinates:[-8.97301, 15.50019]
            },
            {
                name:"Apollo 17 - Lunar Module Challenger",
                country:"USA",
                type:"Crewed Lander and Roving Vehicle",
                status:"Success",
                imageUrl:"country/USA.png",
                date:"11/12/1972",
                coordinates:[20.1908, 30.7717]
            },
        ]
    },
    {
        missionType:"Lander and Sample Return",
        baseLocations:[
            {
                name:"Luna 15",
                country:"Soviet Union",
                type:"Lander and Sample Return",
                status:"Failure",
                imageUrl:"country/Soviet Union.png",
                date:"21/07/1969",
                coordinates:[17, 60]
            },
            {
                name:"Luna 16",
                country:"Soviet Union",
                type:"Lander and Sample Return",
                status:"Success",
                imageUrl:"country/Soviet Union.png",
                date:"20/09/1970",
                coordinates:[ -0.5137, 56.3638]
            },
            {
                name:"Luna 20",
                country:"Soviet Union",
                type:"Lander and Sample Return",
                status:"Success",
                imageUrl:"country/Soviet Union.png",
                date:"21/02/1972",
                coordinates:[3.7863, 56.6242]
            },
            {
                name:"Luna 23",
                country:"Soviet Union",
                type:"Lander and Sample Return",
                status:"Partial Failure",
                imageUrl:"country/Soviet Union.png",
                date:"06/11/1974",
                coordinates:[12.6669, 62.1511]
            },
            {
                name:"Luna 24",
                country:"Soviet Union",
                type:"Lander and Sample Return",
                status:"Success",
                imageUrl:"country/Soviet Union.png",
                date:"18/08/1976",
                coordinates:[12.7145, 62.2097]
            },
            {
                name:"Chang'e 5",
                country:"China",
                type:"Lander and Sample Return",
                status:"Success",
                imageUrl:"country/China.png",
                date:"01/12/2020",
                coordinates:[43.0576, -51.9161]
            },
        ]
    }
]

const moon_landings_references= [
    {
        referenceType:"Data Sources",
        sources:[
            {name:"Wikipedia - List of missions to the Moon", link:"https://en.wikipedia.org/wiki/List_of_missions_to_the_Moon" },
            {name:"NASA - Moon Missions",link:"https://science.nasa.gov/moon/missions/"},
            {name:"The Planetary Society - Every Mission to the Moon, Ever", link:"https://www.planetary.org/space-missions/every-moon-mission"}
        ]
    },
    {
        referenceType:"Image sources",
        sources:[
            {name:"Flaticon",link:"https://flaticon.com"},{name:"Freepik",link:"https://freepik.com"}
        ]
    },
]

export {moon_landings,moon_landings_filtered, moon_landings_references}