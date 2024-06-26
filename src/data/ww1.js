const ww1_battles = [
    {
        name:"Battle of Mons",
        date:"23 August 1914",
        location: "Mons, Belgium",
        coordinates:[50.45, 3.95],
        latitude:50.45,
        longitude:3.95,
        "zoom":9,
        between:["German Empire", "United Kingdom"],
        casualties:6600,
        reference:"https://en.wikipedia.org/wiki/Battle_of_Mons"
    },
    {
        name:"Battle of Tannenberg",
        date:"23–30 August 1914",
        location: "Tannenberg, East Prussia, German Empire (present-day Poland)",
        coordinates:[53.495833, 20.134444],
        latitude:53.495833,
        longitude:20.134444,
        "zoom":9,
        between:["German Empire", "Russian Empire"],
        casualties:120000,
        reference:"https://en.wikipedia.org/wiki/Battle_of_Tannenberg"
    },
    {
        name:"First Battle of the Marne",
        date:"7–14 September 1914",
        location: "Marne River near Brasles, east of Paris, France",
        coordinates:[49.016667, 3.383333],
        latitude:49.016667,
        longitude:3.383333,
        "zoom":9,
        between:["France and United Kingdom", "Germany"],
        casualties:520000,
        reference:"https://en.wikipedia.org/wiki/First_Battle_of_the_Marne"
    },
    {
        name:"First Battle of Ypres",
        date:"19 October – 22 November 1914",
        location: "Ypres, Belgium",
        coordinates:[50.8641, 2.8956],
        latitude:50.8641,
        longitude:2.8956,
        "zoom":9,
        between:["France and United Kingdom", "Germany"],
        result: "Inconclusive",
        casualties:300000,
        reference:"https://en.wikipedia.org/wiki/First_Battle_of_Ypres"
    },
    {
        name:"Battle of Dogger Bank",
        date:"24 January 1915",
        location: "Dogger Bank, North Sea",
        coordinates:[54.557778, 5.463889],
        latitude:54.557778,
        longitude: 5.463889,
        "zoom":9,
        between:["United Kingdom", "Germany"],
        casualties:1300,
        reference:"https://en.wikipedia.org/wiki/Battle_of_Dogger_Bank_(1915)"
    },
    {
        name:"Battle of Verdun",
        date:"21 February – 18 December 1916",
        location: "Verdun-sur-Meuse, France",
        coordinates:[49.208056, 5.421944],
        latitude:49.208056,
        longitude: 5.421944,
        "zoom":9,
        between:["France", "German Empire"],
        casualties:750000,
        reference:"https://en.wikipedia.org/wiki/Battle_of_Verdun"
    },
    {
        name:"Battle of Gallipoli",
        date:"19 February 1915 – 9 January 1916",
        location: "Gallipoli Peninsula, Sanjak of Gelibolu, Adrianople Vilayet, Ottoman Empire (present-day Turkey)",
        coordinates:[40.2375, 26.2775],
        latitude:40.2375,
        longitude: 26.2775,
        "zoom":9,
        between:["Ottoman Empire, Germany and Austria-Hungary", "United Kingdom, France and Russian Empire"],
        casualties:555000,
        reference:"https://en.wikipedia.org/wiki/Gallipoli_campaign"
    },
    {
        name:"Battle of Jutland",
        date:"31 May – 1 June 1916",
        location: "North Sea, near Denmark",
        coordinates:[56.7, 5.9],
        latitude:56.7,
        longitude: 5.9,
        "zoom":9,
        between:["United Kingdom", "Germany"],
        result: "Inconclusive",
        casualties:9900,
        reference:"https://en.wikipedia.org/wiki/Battle_of_Jutland"
    },
    {
        name:"Battle of the Somme",
        date:"1 July 1916 – 18 November 1916",
        location: "Somme River, north-central Somme and south-eastern Pas-de-Calais Départements, France",
        coordinates:[50.015556, 2.6975],
        latitude:50.015556,
        longitude:2.6975,
        "zoom":9,
        between:["United Kingdom and France", "Germany"],
        result: "Inconclusive",
        casualties:1100000,
        reference:"https://en.wikipedia.org/wiki/Battle_of_the_Somme"
    },
    {
        name:"Battles of the Isonzo",
        date:"23 May 1915 – 27 October 1917",
        location: "Isonzo River valley, Slovenia/Italy",
        coordinates:[45.994444, 13.641389],
        latitude:45.994444,
        longitude:13.641389,
        "zoom":9,
        between:["Italy", "Austria-Hungary and Germany"],
        result: "Italy(5), Inconclusive(3), Austria-Hungary and Germany(4)",
        casualties:1100000,
        reference:"https://en.wikipedia.org/wiki/Battles_of_the_Isonzo"
    },
    {
        name:"Battle of Vimy Ridge",
        date:"9–12 April 1917",
        location: "Vimy, Pas-de-Calais, France",
        coordinates:[50.379444, 2.773889],
        latitude:50.379444,
        longitude:2.773889,
        "zoom":9,
        between:["Canada and United Kingdom", "German Empire"],
        casualties:15000,
        reference:"https://en.wikipedia.org/wiki/Battle_of_Vimy_Ridge"
    },
    {
        name:"June Offensive/Kerensky offensive",
        date:"1–19 July 1917",
        location: "Galicia, Central Europe (present-day in Poland and Ukraine)",
        coordinates:[49.83, 24.0142],
        latitude:49.83,
        longitude:24.0142,
        "zoom":9,
        between:["German Empire, Austria-Hungary and Ottoman Empire", "Russian Empire"],
        casualties:140000,
        reference:"https://en.wikipedia.org/wiki/Kerensky_offensive"
    },
    {
        name:"Battle of Caporetto",
        date:"24 October – 19 November 1917",
        location: "Kobarid, Austria-Hungary (present day Slovenia)",
        coordinates:[46.214444, 13.6425],
        latitude:46.214444,
        longitude:13.6425,
        "zoom":9,
        between:["German Empire and Austria-Hungary", "Italy"],
        casualties:740000,
        reference:"https://en.wikipedia.org/wiki/Battle_of_Caporetto"
    },
    {
        name:"Battle of Cambrai (1917)",
        date:"20 November – 7 December 1917",
        location: "Cambrai, France",
        coordinates:[50.176667, 3.235556],
        latitude:50.176667,
        longitude:3.235556,
        "zoom":9,
        between:["United Kingdom, France and United States", "German Empire"],
        result: "Inconclusive",
        casualties:130000,
        reference:"https://en.wikipedia.org/wiki/Battle_of_Cambrai_(1917)"
    },
    {
        name:"Second Battle of the Somme",
        date:"21 March – 5 April 1918",
        location: "Somme River, France",
        coordinates:[50.016666, 2.8],
        latitude:50.016666,
        longitude:2.8,
        "zoom":9,
        between:["United Kingdom, United States", "German Empire"],
        casualties:23000,
        reference:"https://en.wikipedia.org/wiki/Second_Battle_of_the_Somme"
    },
    {
        name:"Ludendorff Offensive",
        date:"21 March – 18 July 1918",
        location: "Northern France; West Flanders, Belgium",
        coordinates:[50.002778, 2.652778],
        latitude:50.002778,
        longitude: 2.652778,
        "zoom":9,
        between:[ "German Empire","United Kingdom, United States, France, Portugal, Italy, Belgium"],
        casualties:1500000,
        reference:"https://en.wikipedia.org/wiki/German_spring_offensive"
    },
    {
        name:"Second Battle of the Marne",
        date:"15 July – 18 July 1918",
        location: "Marne River near Paris, France",
        coordinates:[49.083333, 3.666667],
        latitude:49.083333,
        longitude:  3.666667,
        "zoom":9,
        between:[ "United Kingdom, United States, France, Russia, Italy, Siam","German Empire"],
        casualties:300000,
        reference:   "https://en.wikipedia.org/wiki/Second_Battle_of_the_Marne",
    },
    {
        name:"Battle of Amiens",
        date:"8–12 August 1918 ",
        location: "East of Amiens, Picardy, France",
        coordinates:[49.893889, 2.294167],
        latitude:49.893889,
        longitude:  2.294167,
        "zoom":9,
        between:[ "United Kingdom, United States, France","German Empire"],
        casualties:121000,
        reference:"https://en.wikipedia.org/wiki/Battle_of_Amiens_(1918)",
    },
    {
        name:"Battles of the Meuse-Argonne",
        date:"September 26 – November 11, 1918 ",
        location: "Near Montfaucon, northwest of Verdun (present-day Grand Est region), France",
        coordinates:[49.2725, 5.141944],
        latitude:49.2725,
        longitude: 5.141944,
        "zoom":9,
        between:[ "United States, France, Siam","German Empire"],
        casualties:318000,
        reference: "https://en.wikipedia.org/wiki/Meuse%E2%80%93Argonne_offensive"
    },
    {
        name:"Battle of Cambrai (1918)",
        date:"8–10 October 1918",
        location: "Cambrai, France",
        coordinates:[50.1767, 3.2356],
        latitude:50.1767,
        longitude: 3.2356,
        "zoom":9,
        between:[ "British Empire","German Empire"],
        casualties:22000,
        reference: "https://en.wikipedia.org/wiki/Battle_of_Cambrai_(1918)"
    },
    {
        name:"Second Battle of Mons",
        date:"9–11 November 1918",
        location: "Mons, Belgium",
        coordinates:[50.45, 3.95],
        latitude: 50.45,
        longitude: 3.95,
        "zoom":9,
        between:[ "Canada","German Empire"],
        casualties:280,
        reference: "https://en.wikipedia.org/wiki/Second_Battle_of_Mons"
    },


]

const ww1_references= [
    {
        referenceType:"Data Sources",
        sources:[
            {name:"History - World War I Battles: Timeline", link:"https://www.history.com/topics/world-war-i/world-war-i-battles-timeline" },
            {name:"Wikipedia - List of military engagements of World War I",link:"https://en.wikipedia.org/wiki/List_of_military_engagements_of_World_War_I"},
        ]
    },
]
export {ww1_battles, ww1_references}