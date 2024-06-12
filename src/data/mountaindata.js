const mountain_data = [
    {"country":"Afghanistan","name":"Noshakh","height":7492,"heightF":24580,"coordinates":[36.431667, 71.828333]},
    {"country":"Albania","name":"Korab","height":2764,"heightF":9068,"coordinates":[41.791111, 20.547778]},
    {"country":"Algeria","name":"Mount Tahat","height":3003,"heightF":9852,"coordinates":[23.288889, 5.533611]},
    {"country":"American Samoa","name":"Lata Mountain","height":966,"heightF":3169,"coordinates":[-14.236944, -169.456944]},
    {"country":"Andorra","name":"Coma Pedrosa","height":2942,"heightF":9652,"coordinates":[42.590556, 1.444781]},
    {"country":"Angola","name":"Mount Moco","height":2620,"heightF":8596,"coordinates":[-12.466667, 15.166667]},
    {"country":"Anguilla","name":"Crocus Hill","height":73,"heightF":240,"coordinates":[18.211944, -63.070556]},
    {"country":"Antarctica","name":"Mount Vinson","height":4892,"heightF":16050,"coordinates":[-78.525556, -85.617222]},
    {"country":"Antigua and Barbuda","name":"Boggy Peak","height":402,"heightF":1319,"coordinates":[17.041944, -61.851111]},
    {"country":"Argentina","name":"Aconcagua","height":6960,"heightF":22835,"coordinates":[-32.653056, -70.011667]},
    {"country":"Armenia","name":"Mount Aragats","height":4090,"heightF":13419,"coordinates":[40.533333, 44.2]},
    {"country":"Aruba","name":"Mount Jamanota","height":188,"heightF":617,"coordinates":[12.487222, -69.940278]},
    {"country":"Australia","name":"Mount Kosciuszko","height":2228,"heightF":7310,"coordinates":[-36.455833, 148.263611]},
    {"country":"Austria","name":"Grossglockner","height":3798,"heightF":12461,"coordinates":[47.074867, 12.69525]},
    {"country":"Azerbaijan","name":"Mount Bazardüzü","height":4485,"heightF":14715,"coordinates":[41.224444, 47.858333]},
    {"country":"Bahamas","name":"Mount Alvernia","height":63,"heightF":207,"coordinates":[24.294167, -75.408333]},
    {"country":"Bahrain","name":"Mountain of Smoke","height":122,"heightF":400,"coordinates":[26.038889, 50.543056]},
    {"country":"Bangladesh","name":"Saka Haphong","height":1063,"heightF":3488,"coordinates":[21.788611, 92.608611]},
    {"country":"Barbados","name":"Mount Hillaby","height":336,"heightF":1102,"coordinates":[13.2105, -59.5818]},
    {"country":"Belarus","name":"Dzyarzhynskaya Hara","height":346,"heightF":1135,"coordinates":[53.848611, 27.065278]},
    {"country":"Belgium","name":"Signal de Botrange","height":694,"heightF":2277,"coordinates":[50.501667, 6.092778]},
    {"country":"Belize","name":"Doyle's Delight","height":1124,"heightF":3688,"coordinates":[16.494167, -89.045833]},
    {"country":"Benin","name":"Mont Sokbaro","height":658,"heightF":2159,"coordinates":[9.328056, 1.415556]},
    {"country":"Bermuda","name":"Town Hill","height":76,"heightF":249,"coordinates":[32.316667, -64.733333]},
    {"country":"Bhutan","name":"Gangkhar Puensum","height":7570,"heightF":24836,"coordinates":[28.048333, 90.454167]},
    {"country":"Bolivia","name":"Sajama","height":6542,"heightF":21463,"coordinates":[-18.108056, -68.883056]},
    {"country":"Bosnia and Herzegovina","name":"Maglić","height":2386,"heightF":7828,"coordinates":[43.281111, 18.736944]},
    {"country":"Botswana","name":"Otse Hill","height":1491,"heightF":4892,"coordinates":[-25.008333, 25.715833]},
    {"country":"Bouvet Island","name":"Olavtoppen","height":935,"heightF":3068,"coordinates":[-54.420556, 3.386944]},
    {"country":"Brazil","name":"Pico da Neblina","height":2995,"heightF":9826,"coordinates":[0.804722, -66.006667]},
    {"country":"Brunei","name":"Bukit Pagon","height":1850,"heightF":6070,"coordinates":[4.294444, 115.322222]},
    {"country":"Bulgaria","name":"Musala","height":2925,"heightF":9596,"coordinates":[42.179722, 23.586667]},
    {"country":"Burkina Faso","name":"Mount Tenakourou","height":749,"heightF":2457,"coordinates":[10.75, -5.416667]},
    {"country":"Burundi","name":"Mount Heha","height":2684,"heightF":8806,"coordinates":[-3.603333, 29.499167]},
    {"country":"Cambodia","name":"Phnom Aural","height":1810,"heightF":5938,"coordinates":[12.0333, 104.1667]},
    {"country":"Cameroon","name":"Mount Cameroon","height":4040,"heightF":13255,"coordinates":[4.216667, 9.1725]},
    {"country":"Canada","name":"Mount Logan","height":5959,"heightF":19551,"coordinates":[60.567222, -140.405278]},
    {"country":"Cape Verde","name":"Pico do Fogo","height":2829,"heightF":9281,"coordinates":[14.95, -24.341667]},
    {"country":"Cayman Islands","name":"The Bluff","height":46,"heightF":151,"coordinates":[19.733333, -79.75]},
    {"country":"Central African Republic","name":"Mont Ngaoui","height":1420,"heightF":4659,"coordinates":[6.751389, 14.959722]},
    {"country":"Chad","name":"Emi Koussi","height":3445,"heightF":11302,"coordinates":[19.7925, 18.546389]},
    {"country":"Chile","name":"Ojos del Salado","height":6893,"heightF":22615,"coordinates":[-27.109, -68.541]},
    {"country":"China","name":"Mount Everest","height":8849,"heightF":29032,"coordinates":[27.988333, 86.925278]},
    {"country":"Christmas Island","name":"Murray Hill","height":361,"heightF":1184,"coordinates":[-10.483333, 105.580833]},
    {"country":"Clipperton Island","name":"Rocher Clipperton","height":29,"heightF":95,"coordinates":[10.3, -109.216667]},
    {"country":"Colombia","name":"Pico Cristóbal Colón","height":5730,"heightF":18799,"coordinates":[10.838333, -73.686667]},
    {"country":"Comoros","name":"Mount Karthala","height":2360,"heightF":7743,"coordinates":[-11.76028, 43.35306]},
    {"country":"Democratic Republic of the Congo","name":"Mount Stanley","height":5109,"heightF":16762,"coordinates":[0.385833, 29.871667]},
    {"country":"Republic of the Congo","name":"Mont Nabemba","height":1020,"heightF":3346,"coordinates":[1.85, 13.983333]},
    {"country":"Cook Islands","name":"Te Manga","height":652,"heightF":2139,"coordinates":[-21.228333, -159.750556]},
    {"country":"Costa Rica","name":"Cerro Chirrip","height":3820,"heightF":12533,"coordinates":[9.484083, -83.488667]},
    {"country":"Ivory Coast","name":"Mont Nimba","height":1752,"heightF":5748,"coordinates":[7.6225, -8.405556]},
    {"country":"Croatia","name":"Dinara","height":1831,"heightF":6007,"coordinates":[43.945094, 16.59693]},
    {"country":"Cuba","name":"Pico Turquino","height":1974,"heightF":6476,"coordinates":[19.989444, -76.835833]},
    {"country":"Curaçao","name":"Christoffelberg","height":375,"heightF":1230,"coordinates":[12.336944, -69.123056]},
    {"country":"Cyprus","name":"Mount Olympus","height":1952,"heightF":6404,"coordinates":[34.936389, 32.863333]},
    {"country":"Czech Republic","name":"Sněžka","height":1603,"heightF":5259,"coordinates":[50.736111, 15.740278]},
    {"country":"Denmark","name":"Møllehøj","height":171,"heightF":561,"coordinates":[55.977189, 9.826228]},
    {"country":"Djibouti","name":"Mousa Ali","height":2028,"heightF":6654,"coordinates":[12.468611, 42.404167]},
    {"country":"Dominica","name":"Morne Diablotins","height":1447,"heightF":4747,"coordinates":[15.503333, -61.397222]},{"country":"Dominican Republic","name":"Pico Duarte","height":3098,"heightF":10164,"coordinates":[19.023056, -70.998056]},{"country":"Ecuador","name":"Chimborazo","height":6267,"heightF":20561,"coordinates":[-1.469167, -78.8175]},
    {"country":"Egypt","name":"Mount Catherine","height":2629,"heightF":8625,"coordinates":[28.511667, 33.9525]},
    {"country":"El Salvador","name":"Cerro El Pital","height":2730,"heightF":8957,"coordinates":[14.383333, -89.116667]},{"country":"Equatorial Guinea","name":"Pico Basile","height":3008,"heightF":9869,"coordinates":[3.583333, 8.766667]},{"country":"Eritrea","name":"Emba Soira","height":3018,"heightF":9902,"coordinates":[14.75, 39.533333]},
    {"country":"Estonia","name":"Suur Munamägi","height":318,"heightF":1043,"coordinates":[57.714444, 27.059167]},
    {"country":"Eswatini","name":"Emlembe","height":1862,"heightF":6109,"coordinates":[-25.916667, 31.133333]},
    {"country":"Ethiopia","name":"Ras Dejen","height":4550,"heightF":14928,"coordinates":[13.235833, 38.370833]},
    {"country":"Falkland Islands","name":"Mount Usborne","height":705,"heightF":2313,"coordinates":[-51.691667, -58.834444]},{"country":"Faroe Islands","name":"Slættaratindur","height":880,"heightF":2887,"coordinates":[62.296389, -7.0125]},
    {"country":"Fiji","name":"Tomanivi","height":1324,"heightF":4344,"coordinates":[-17.633056, 178.016667]},
    {"country":"Finland","name":"Halti","height":1324,"heightF":4344,"coordinates":[69.322778, 21.278889]},
    {"country":"France","name":"Mont Blanc","height":4810,"heightF":15781,"coordinates":[45.832778, 6.865]},
    {"country":"French Guiana","name":"Bellevue de l'Inini","height":851,"heightF":2792,"coordinates":[3.540556, -53.573333]},{"country":"French Polynesia","name":"Mont Orohena","height":2241,"heightF":7352,"coordinates":[-17.623056, -149.476944]},{"country":"French Southern and Antarctic Lands","name":"Mont Ross","height":1850,"heightF":6070,"coordinates":[-49.592222, 69.495833]},
    {"country":"Gabon","name":"Mont Bengoué","height":1070,"heightF":3510,"coordinates":[0.95, 13.683333]},
    {"country":"Gambia","name":"Sare Firasu Hill","height":90,"heightF":295,"coordinates":[13.221566, -14.159756 ]},
    {"country":"Georgia","name":"Shkhara","height":5201,"heightF":17064,"coordinates":[43.000556, 43.112222]},
    {"country":"Germany","name":"Zugspitze","height":2962,"heightF":9718,"coordinates":[47.421111, 10.985278]},
    {"country":"Ghana","name":"Mount Afadjato","height":880,"heightF":2887,"coordinates":[7.026944, 0.603333]},
    {"country":"Gibraltar","name":"Rock of Gibraltar","height":426,"heightF":1398,"coordinates":[36.124472, -5.343111]},{"country":"Greece","name":"Mount Olympus","height":2917,"heightF":9570,"coordinates":[40.085556, 22.358611]},
    {"country":"Greenland","name":"Gunnbjørn Fjeld","height":3700,"heightF":12139,"coordinates":[68.9195, -29.898533]},{"country":"Grenada","name":"Mount Saint Catherine","height":840,"heightF":2756,"coordinates":[12.162281, -61.675035]},{"country":"Guadeloupe","name":"La Grande Soufrière","height":1484,"heightF":4869,"coordinates":[16.0446, -61.6642]},{"country":"Guam","name":"Mount Lamlam","height":406,"heightF":1332,"coordinates":[13.338611, 144.662778]},
    {"country":"Guatemala","name":"Volcán Tajumulco","height":4220,"heightF":13845,"coordinates":[15.043685, -91.903308]},{"country":"Guernsey","name":"Le Moulin","height":114,"heightF":374,"coordinates":[49.431111, -2.362222]},
    {"country":"Guinea","name":"Mont Nimba","height":1752,"heightF":5748,"coordinates":[7.6225, -8.405556]},
    {"country":"Guinea-Bissau","name":"Monte Torin","height":262,"heightF":860,"coordinates":[11.684444, -13.888333]},
    {"country":"Guyana","name":"Mount Roraima","height":2772,"heightF":9094,"coordinates":[5.143333, -60.7625]},
    {"country":"Haiti","name":"Pic la Selle","height":2680,"heightF":8793,"coordinates":[18.366667, -71.983333]},
    {"country":"Heard Island and McDonald Islands","name":"Big Ben","height":2745,"heightF":9006,"coordinates":[-53.1, 73.516667]},{"country":"Honduras","name":"Cerro Las Minas","height":2870,"heightF":9416,"coordinates":[14.534167, -88.68]},
    {"country":"Hong Kong","name":"Tai Mo Shan","height":958,"heightF":3143,"coordinates":[22.411811, 114.123144]},
    {"country":"Hungary","name":"Kékes","height":1014,"heightF":3327,"coordinates":[47.878889, 20.010278]},
    {"country":"Iceland","name":"Hvannadalshnúkur","height":2110,"heightF":6923,"coordinates":[64.015833, -16.674722]},
    {"country":"India","name":"Kangchenjunga","height":8586,"heightF":28169,"coordinates":[27.7025, 88.146667]},
    {"country":"Indonesia","name":"Puncak Jaya","height":4884,"heightF":16024,"coordinates":[-4.078889, 137.158333]},
    {"country":"Iran","name":"Damavand","height":5610,"heightF":18406,"coordinates":[35.951, 52.109]},
    {"country":"Iraq","name":"Cheekha Dar","height":3611,"heightF":11847,"coordinates":[36.776667, 44.918611]},
    {"country":"Ireland","name":"Carrauntoohil","height":1038,"heightF":3406,"coordinates":[51.999445, -9.742693]},
    {"country":"Isle of Man","name":"Snaefell","height":621,"heightF":2037,"coordinates":[54.263278, -4.461611]},
    {"country":"Israel","name":"Mount Meron","height":1208,"heightF":3963,"coordinates":[32.997778, 35.413611]},
    {"country":"Italy","name":"Mont Blanc","height":4810,"heightF":15781,"coordinates":[45.832778, 6.865]},
    {"country":"Jamaica","name":"Blue Mountain Peak","height":2256,"heightF":7402,"coordinates":[18.046667, -76.579167]},{"country":"Japan","name":"Mount Fuji","height":3776,"heightF":12388,"coordinates":[35.360833, 138.7275]},
    {"country":"Jersey","name":"Les Platons","height":136,"heightF":446,"coordinates":[49.247792, -2.104842]},
    {"country":"Jordan","name":"Jabal Umm ad Dami","height":1854,"heightF":6083,"coordinates":[29.308333, 35.429167]},{"country":"Kazakhstan","name":"Khan Tengri","height":7010,"heightF":22999,"coordinates":[42.210833, 80.175]},
    {"country":"Kenya","name":"Mount Kenya","height":5199,"heightF":17057,"coordinates":[-0.150833, 37.3075]},
    {"country":"North Korea","name":"Paektu Mountain","height":2744,"heightF":9003,"coordinates":[41.993333, 128.0775]},
    {"country":"South Korea","name":"Halla-san","height":1947,"heightF":6388,"coordinates":[33.361667, 126.529167]},
    {"country":"Kosovo","name":"Velika Rudoka","height":2660,"heightF":8727,"coordinates":[41.918333, 20.776389]},{"country":"Kuwait","name":"Mutla Ridge","height":306,"heightF":1004,"coordinates":[29.383333, 47.633333]},
    {"country":"Kyrgyzstan","name":"Jengish Chokusu","height":7439,"heightF":24406,"coordinates":[42.0375, 80.125]},
    {"country":"Laos","name":"Phou Bia","height":2817,"heightF":9242,"coordinates":[18.981667, 103.151944]},
    {"country":"Latvia","name":"Gaiziņkalns","height":312,"heightF":1024,"coordinates":[56.870258, 25.959356]},
    {"country":"Lebanon","name":"Qurnat as Sawda'","height":3088,"heightF":10131,"coordinates":[34.3, 36.116667]},
    {"country":"Lesotho","name":"Thabana Ntlenyana","height":3482,"heightF":11424,"coordinates":[-29.466667, 29.266667]},
    {"country":"Liberia","name":"Mount Wuteve","height":1440,"heightF":4724,"coordinates":[8.145833, -9.925]},
    {"country":"Libya","name":"Bikku Bitti","height":2267,"heightF":7438,"coordinates":[22.003611, 19.206667]},
    {"country":"Liechtenstein","name":"Grauspitz","height":2599,"heightF":8527,"coordinates":[47.052778, 9.581944]},
    {"country":"Lithuania","name":"Aukštojas Hill","height":294,"heightF":965,"coordinates":[54.527083, 25.626056]},
    {"country":"Luxembourg","name":"Kneiff","height":560,"heightF":1837,"coordinates":[50.157694, 6.037167]},
    {"country":"Macau","name":"Coloane Alto","height":172,"heightF":564,"coordinates":[22.120833, 113.561389]},
    {"country":"North Macedonia","name":"Golem Korab","height":2764,"heightF":9068,"coordinates":[41.791111, 20.547778]},
    {"country":"Madagascar","name":"Maromokotro","height":2876,"heightF":9436,"coordinates":[-14.023333, 48.965833]},
    {"country":"Malawi","name":"Mount Mulanje","height":3002,"heightF":9849,"coordinates":[-15.949722, 35.593611]},
    {"country":"Malaysia","name":"Mount Kinabalu","height":4095,"heightF":13435,"coordinates":[6.075, 116.558611]},
    {"country":"Maldives","name":"Mount Villingili","height":5,"heightF":16,"coordinates":[-0.688072, 73.188413]},
    {"country":"Mali","name":"Mount Hombori","height":1155,"heightF":3789,"coordinates":[15.257222, -1.668889]},
    {"country":"Malta","name":"Ta' Dmejrek","height":253,"heightF":830,"coordinates":[35.845833, 14.396944]},
    {"country":"Martinique","name":"Mount Pelée","height":1397,"heightF":4583,"coordinates":[14.816667, -61.166667]},
    {"country":"Mauritania","name":"Kediet ej Jill","height":915,"heightF":3002,"coordinates":[22.651111, -12.574167]},
    {"country":"Mauritius","name":"Piton de la Petite Rivière Noire","height":828,"heightF":2717,"coordinates":[-20.4, 57.466667]},
    {"country":"Mayotte","name":"Benara","height":660,"heightF":2165,"coordinates":[-12.879444, 45.163056]},
    {"country":"Mexico","name":"Pico de Orizaba","height":5636,"heightF":18491,"coordinates":[19.03, -97.27]},
    {"country":"Federated States of Micronesia","name":"Nanlaud","height":782,"heightF":2566,"coordinates":[6.873611, 158.228611]},{"country":"Moldova","name":"Bălănești Hill","height":430,"heightF":1411,"coordinates":[47.217222, 28.083056]},
    {"country":"Monaco","name":"Chemin des Révoires","height":161,"heightF":528,"coordinates":[43.734569, 7.412861]},
    {"country":"Mongolia","name":"Khüiten Peak","height":4374,"heightF":14350,"coordinates":[49.145833, 87.818889]},
    {"country":"Montenegro","name":"Zla Kolata","height":2534,"heightF":8314,"coordinates":[42.485, 19.897222]},
    {"country":"Montserrat","name":"Chances Peak","height":915,"heightF":3002,"coordinates":[16.711111, -62.177222]},
    {"country":"Morocco","name":"Jbel Toubkal","height":4167,"heightF":13671,"coordinates":[31.05963, -7.91513]},
    {"country":"Mozambique","name":"Monte Binga","height":2436,"heightF":7992,"coordinates":[-19.776667, 33.061944]},
    {"country":"Myanmar","name":"Hkakabo Razi","height":5881,"heightF":19295,"coordinates":[28.328333, 97.535556]},
    {"country":"Namibia","name":"Brandberg Mountain","height":2573,"heightF":8442,"coordinates":[-21.12582, 14.54865]},
    {"country":"Nauru","name":"Command Ridge","height":65,"heightF":213,"coordinates":[-0.531111, 166.916667]},
    {"country":"Nepal","name":"Mount Everest","height":8849,"heightF":29032,"coordinates":[27.988333, 86.925278]},
    {"country":"Netherlands","name":"Mount Scenery","height":887,"heightF":2910,"coordinates":[17.635, -63.239167]},
    {"country":"New Caledonia","name":"Mont Panié","height":1628,"heightF":5341,"coordinates":[-20.588333, 164.770833]},
    {"country":"New Zealand","name":"Aoraki / Mount Cook","height":3724,"heightF":12218,"coordinates":[-43.595, 170.141944]},
    {"country":"Nicaragua","name":"Mogotón","height":2107,"heightF":6913,"coordinates":[13.762944, -86.3985]},
    {"country":"Niger","name":"Mont Idoukal-n-Taghès","height":2022,"heightF":6634,"coordinates":[17.839167, 8.720278]},
    {"country":"Nigeria","name":"Chappal Waddi","height":2419,"heightF":7936,"coordinates":[7.036111, 11.715]},
    {"country":"Norfolk Island","name":"Mount Bates","height":319,"heightF":1047,"coordinates":[-29.018333, 167.935556]},
    {"country":"Northern Mariana Islands","name":"Mount Agrihan","height":965,"heightF":3166,"coordinates":[18.77, 145.67]},
    {"country":"Norway","name":"Galdhøpiggen","height":2469,"heightF":8100,"coordinates":[61.63644, 8.31248]},
    {"country":"Oman","name":"Jabal Shams","height":3009,"heightF":9872,"coordinates":[23.236944, 57.263889]},
    {"country":"Pakistan","name":"K2","height":8611,"heightF":28251,"coordinates":[35.8825, 76.513333]},
    {"country":"Palau","name":"Mount Ngerchelchuus","height":242,"heightF":794,"coordinates":[7.565278, 134.569444]},
    {"country":"Palestine","name":"Mount Nabi Yunis","height":1030,"heightF":3379,"coordinates":[31.579444, 35.105]},
    {"country":"Panama","name":"Volcán Barú","height":3475,"heightF":11401,"coordinates":[8.808811, -82.542339]},
    {"country":"Papua New Guinea","name":"Mount Wilhelm","height":4509,"heightF":14793,"coordinates":[-5.8, 145.033333]},
    {"country":"Paraguay","name":"Cerro Tres Kandú","height":842,"heightF":2762,"coordinates":[-25.901667, -56.16]},
    {"country":"Peru","name":"Huascarán","height":6768,"heightF":22205,"coordinates":[-9.121667, -77.604167]},
    {"country":"Philippines","name":"Mount Apo","height":2954,"heightF":9692,"coordinates":[6.9875, 125.270833]},
    {"country":"Pitcairn Islands","name":"Pawala Valley Ridge","height":347,"heightF":1138,"coordinates":[-25.068333, -130.113333]},
    {"country":"Poland","name":"Northwestern peak of Rysy","height":2499,"heightF":8199,"coordinates":[49.179444, 20.088056]},
    {"country":"Portugal","name":"Mount Pico","height":2351,"heightF":7713,"coordinates":[38.468889, -28.398889]},
    {"country":"Puerto Rico","name":"Cerro de Punta","height":1338,"heightF":4390,"coordinates":[18.1725, -66.591944]},
    {"country":"Qatar","name":"Qurayn Abu al Bawl","height":103,"heightF":338,"coordinates":[24.717778, 51.0475]},
    {"country":"Réunion","name":"Piton des Neiges","height":3069,"heightF":10069,"coordinates":[-21.098333, 55.480833]},
    {"country":"Romania","name":"Moldoveanu","height":2544,"heightF":8346,"coordinates":[45.6, 24.737778]},
    {"country":"Russia","name":"Mount Elbrus","height":5642,"heightF":18510,"coordinates":[43.355, 42.439167]},
    {"country":"Rwanda","name":"Mount Karisimbi","height":4507,"heightF":14787,"coordinates":[-1.508333, 29.445]},
    {"country":"Sahrawi Arab Democratic Republic","name":"Tikhzoukhane","height":605,"heightF":1985,"coordinates":[27.64555556,-10.73888889]},
    {"country":"Saint Barthélemy","name":"Morne du Vitet","height":286,"heightF":938,"coordinates":[17.899167, -62.806389]},
    {"country":"Saint Helena, Ascension and Tristan da Cunha","name":"Queen Mary's Peak","height":2060,"heightF":6759,"coordinates":[-37.111111, -12.288333]},
    {"country":"Saint Kitts and Nevis","name":"Mount Liamuiga","height":1156,"heightF":3793,"coordinates":[17.37, -62.8]},
    {"country":"Saint Lucia","name":"Mount Gimie","height":950,"heightF":3117,"coordinates":[13.863275, -61.01122]},
    {"country":"Saint Martin","name":"Pic Paradis","height":424,"heightF":1391,"coordinates":[18.0775, -63.05]},
    {"country":"Saint Pierre and Miquelon","name":"Morne de la Grande Montagneon","height":240,"heightF":787,"coordinates":[47.046944, -56.306389]},
    {"country":"Saint Vincent and the Grenadines","name":"La Soufrière","height":1234,"heightF":4049,"coordinates":[13.333333, -61.183333]},
    {"country":"Samoa","name":"Mauga Silisili","height":1857,"heightF":6093,"coordinates":[-13.618333, -172.485833]},
    {"country":"San Marino","name":"Monte Titano","height":739,"heightF":2425,"coordinates":[43.935, 12.45]},
    {"country":"São Tomé and Príncipe","name":"Pico de São Tomé","height":2024,"heightF":6640,"coordinates":[0.269444, 6.541667]},
    {"country":"Saudi Arabia","name":"Jabal Soudah","height":3000,"heightF":9843,"coordinates":[18.266717, 42.368264]},
    {"country":"Senegal","name":"Baunez ridge","height":648,"heightF":2126,"coordinates":[12.373333, -12.543611]},
    {"country":"Serbia","name":"Midžor","height":2169,"heightF":7116,"coordinates":[43.393889, 22.681667]},
    {"country":"Seychelles","name":"Morne Seychellois","height":905,"heightF":2969,"coordinates":[-4.643833, 55.4389]},
    {"country":"Sierra Leone","name":"Mount Bintumani","height":1948,"heightF":6391,"coordinates":[9.225, -11.116667]},
    {"country":"Singapore","name":"Bukit Timah Hill","height":164,"heightF":538,"coordinates":[1.354681, 103.776375]},
    {"country":"Slovakia","name":"Gerlachovský štít","height":2655,"heightF":8711,"coordinates":[49.164028, 20.134028]},
    {"country":"Slovenia","name":"Triglav","height":2864,"heightF":9396,"coordinates":[46.378333, 13.836667]},
    {"country":"Solomon Islands","name":"Mount Popomanaseu","height":2335,"heightF":7661,"coordinates":[-9.703611, 160.061944]},
    {"country":"Somalia","name":"Shimbiris","height":2450,"heightF":8038,"coordinates":[10.735833, 47.245]},
    {"country":"South Africa","name":"Mafadi","height":3450,"heightF":11319,"coordinates":[-29.202333, 29.357083]},
    {"country":"South Georgia and the South Sandwich Islands","name":"Mount Paget","height":2934,"heightF":9626,"coordinates":[-54.440833, -36.555278]},
    {"country":"South Sudan","name":"Kinyeti","height":3187,"heightF":10456,"coordinates":[3.9475, 32.908889]},
    {"country":"Spain","name":"Mount Teide","height":3715,"heightF":12188,"coordinates":[28.273056, -16.639444]},
    {"country":"Sri Lanka","name":"Pidurutalagala","height":2524,"heightF":8281,"coordinates":[7.000833, 80.773889]},
    {"country":"Sudan","name":"Deriba Caldera","height":3042,"heightF":9980,"coordinates":[12.95, 24.27]},
    {"country":"Suriname","name":"Julianatop","height":1230,"heightF":4035,"coordinates":[3.682778, -56.535556]},
    {"country":"Svalbard and Jan Mayen","name":"Beerenberg","height":2277,"heightF":7470,"coordinates":[71.076667, -8.164444]},
    {"country":"Sweden","name":"Kebnekaise","height":2097,"heightF":6880,"coordinates":[67.904444, 18.528333]},
    {"country":"Switzerland","name":"Dufourspitze","height":4634,"heightF":15203,"coordinates":[45.936833, 7.867056]},
    {"country":"Syria","name":"Jabal el-Sheikh/Mount Hermon","height":2814,"heightF":9232,"coordinates":[33.416111, 35.8575]},
    {"country":"Taiwan","name":"Yu Shan (Jade Mountain)","height":3952,"heightF":12966,"coordinates":[23.47, 120.957222]},
    {"country":"Tajikistan","name":"Ismoil Somoni Peak","height":7495,"heightF":24590,"coordinates":[38.943333, 72.016111]},{"country":"Tanzania","name":"Kilimanjaro","height":5892,"heightF":19331,"coordinates":[-3.075833, 37.353333]},
    {"country":"Thailand","name":"Doi Inthanon","height":2565,"heightF":8415,"coordinates":[18.5875, 98.486667]},
    {"country":"Timor-Leste","name":"Mount Ramelau","height":2963,"heightF":9721,"coordinates":[-8.906667, 125.493333]},
    {"country":"Togo","name":"Mont Agou","height":986,"heightF":3235,"coordinates":[6.866667, 0.75]},
    {"country":"Tonga","name":"Kao","height":1033,"heightF":3389,"coordinates":[-19.67, -175.03]},
    {"country":"Trinidad and Tobago","name":"El Cerro del Aripo","height":940,"heightF":3084,"coordinates":[10.716667, -61.25]},
    {"country":"Tunisia","name":"Jebel ech Chambi","height":1544,"heightF":5066,"coordinates":[35.206667, 8.683056]},
    {"country":"Turkey","name":"Mount Ararat","height":5137,"heightF":16854,"coordinates":[39.7019, 44.2983]},
    {"country":"Turkmenistan","name":"Aýrybaba","height":3139,"heightF":10299,"coordinates":[37.7875, 66.556667]},
    {"country":"Turks and Caicos Islands","name":"Blue Hills","height":49,"heightF":161,"coordinates":[21.8, -72.283333]},{"country":"Uganda","name":"Mount Stanley (Margherita Peak)","height":5109,"heightF":16762,"coordinates":[0.385833, 29.871667]},{"country":"Ukraine","name":"Hoverla","height":2061,"heightF":6762,"coordinates":[48.16, 24.500278]},
    {"country":"United Arab Emirates","name":"Jabal Al Jais","height":1910,"heightF":6266,"coordinates":[25.953056, 56.184167]},{"country":"United Kingdom","name":"Ben Nevis","height":1345,"heightF":4413,"coordinates":[56.79685, -5.003508]},
    {"country":"United States","name":"Denali","height":6190.5,"heightF":203100,"coordinates":[63.0695, -151.0074]},
    {"country":"Uruguay","name":"Cerro Catedral","height":514,"heightF":1686,"coordinates":[-34.382194, -54.674361]},{"country":"Uzbekistan","name":"Alpomish","height":4668,"heightF":15315,"coordinates":[38.891667, 68.176667]},
    {"country":"Vanuatu","name":"Mount Tabwemasana","height":1877,"heightF":6158,"coordinates":[-15.3625, 166.755]},
    {"country":"Vatican City","name":"Vatican Hill","height":75,"heightF":246,"coordinates":[41.903611, 12.450278]},{"country":"Venezuela","name":"Pico Bolívar","height":4978,"heightF":16332,"coordinates":[8.541667, -71.045833]},
    {"country":"Vietnam","name":"Fansipan","height":3143,"heightF":10312,"coordinates":[22.303333, 103.775]},
    {"country":"British Virgin Islands","name":"Mount Sage","height":521,"heightF":1709,"coordinates":[18.4, -64.65]},
    {"country":"United States Virgin Islands","name":"Crown Mountain","height":474,"heightF":1555,"coordinates":[18.357222, -64.974722]},{"country":"Wallis and Futuna","name":"Mont Puke","height":524,"heightF":1719,"coordinates":[-14.270833, -178.138889]},{"country":"Yemen","name":"Jabal An-Nabi Shu'ayb","height":3666,"heightF":12028,"coordinates":[15.279167, 43.975833]},{"country":"Zambia","name":"Mafinga Central","height":2329,"heightF":7641,"coordinates":[-9.952694, 33.352361]},{"country":"Zimbabwe","name":"Mount Nyangani","height":2592,"heightF":8504,"coordinates":[-18.3, 32.841667]}
]

const mountain_data_references = [
    {
        referenceType:"Data sources",
        sources:[
           {name:"List of Elevation extremes", link:"https://en.wikipedia.org/wiki/List_of_elevation_extremes_by_country"},
           {name:"Kao (island)",link:"https://en.wikipedia.org/wiki/Kao_(island)"},
           {name:"Nepen Diakha",link:"https://en.wikipedia.org/wiki/Nepen_Diakha"},
           {name:"R/Geography" ,link:"https://www.reddit.com/r/geography/comments/lhm24q/the_high_point_of_every_country_sahrawi_arab/"}
        ]
    },
    {
        referenceType:"Image sources",
        sources:[
            {name:"Flaticon",link:"https://flaticon.com"},{name:"Freepik",link:"https://freepik.com"}
        ]
    },
]

export {mountain_data, mountain_data_references}