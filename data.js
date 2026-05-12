// data.js — Dataset dei veicoli storici leggendari per LegendaryDrives (progetto scolastico/culturale)

const vehicles = [
  {
    id: 1,
    name: "Ferrari 250 GTO",
    brand: "Ferrari",
    year: 1962,
    category: "auto",
    units: 36,
    estimatedValueEUR: 52000000,
    description: "La Ferrari 250 GTO è considerata la vettura da corsa più iconica e preziosa mai prodotta. Progettata da Giotto Bizzarrini, dominò le gare GT degli anni '60 vincendo tre volte consecutive il Campionato Mondiale GT. Con soli 36 esemplari costruiti, è il Sacro Graal del collezionismo automobilistico mondiale.",
    specs: {
      engine: "V12 3.0L Colombo",
      power: "300 CV",
      topSpeed: "280 km/h",
      weight: "880 kg"
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Ferrari_250_GTO_0.jpg/1280px-Ferrari_250_GTO_0.jpg",
    tags: ["ferrari", "gto", "v12", "gara", "leggenda", "record-asta", "1960s"]
  },
  {
    id: 2,
    name: "Ferrari F40",
    brand: "Ferrari",
    year: 1987,
    category: "auto",
    units: 1315,
    estimatedValueEUR: 1400000,
    description: "L'ultima vettura approvata personalmente da Enzo Ferrari prima della sua morte. La F40 fu la prima auto di serie a superare i 320 km/h e rappresentò il punto di rottura tra la tradizione artigianale e la tecnologia moderna. Telaio in fibra di carbonio, twin-turbo e assenza totale di comfort: pura filosofia racing.",
    specs: {
      engine: "V8 2.9L Twin-Turbo",
      power: "478 CV",
      topSpeed: "324 km/h",
      weight: "1100 kg"
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Ferrari_F40_2.jpg/1280px-Ferrari_F40_2.jpg",
    tags: ["ferrari", "f40", "twin-turbo", "supercar", "enzo-ferrari", "1980s", "icona"]
  },
  {
    id: 3,
    name: "Bugatti Type 57 SC Atlantic",
    brand: "Bugatti",
    year: 1936,
    category: "auto",
    units: 4,
    estimatedValueEUR: 40000000,
    description: "Il Bugatti Type 57 SC Atlantic è considerato da molti il più bello e prezioso automobile mai costruito. Con la sua carrozzeria in alluminio rivettata esternamente — tecnica adottata perché l'alluminio era difficile da saldare — e le linee aerodinamiche radicali per l'epoca, ne furono costruiti appena 4 esemplari. Uno è scomparso durante la Seconda Guerra Mondiale.",
    specs: {
      engine: "Straight-8 3.3L Supercharged",
      power: "210 CV",
      topSpeed: "230 km/h",
      weight: "975 kg"
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Bugatti_Atlantic_1.jpg/1280px-Bugatti_Atlantic_1.jpg",
    tags: ["bugatti", "atlantic", "art-deco", "prewar", "rarissima", "1930s", "capolavoro"]
  },
  {
    id: 4,
    name: "Bugatti La Voiture Noire",
    brand: "Bugatti",
    year: 2019,
    category: "auto",
    units: 1,
    estimatedValueEUR: 16700000,
    description: "La Voiture Noire — 'L'Auto Nera' — è un tributo moderno al leggendario Type 57 Atlantic perduto. Presentata al Salone di Ginevra 2019, è stata venduta ancora prima della presentazione per circa 16,7 milioni di euro, diventando l'auto più costosa mai venduta nuova. Montava lo stesso motore W16 della Chiron, portato a 1500 CV.",
    specs: {
      engine: "W16 8.0L Quad-Turbo",
      power: "1500 CV",
      topSpeed: "420 km/h",
      weight: "1995 kg"
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Bugatti_La_Voiture_Noire%2C_front.jpg/1280px-Bugatti_La_Voiture_Noire%2C_front.jpg",
    tags: ["bugatti", "la-voiture-noire", "w16", "hypercar", "esemplare-unico", "2019", "record"]
  },
  {
    id: 5,
    name: "Yamaha YZF-R1",
    brand: "Yamaha",
    year: 1998,
    category: "moto",
    units: 25000,
    estimatedValueEUR: 35000,
    description: "La prima generazione della YZF-R1 rivoluzionò il segmento delle superbike di serie nel 1998. Con un motore quattro cilindri in linea da 998cc e le masse centralizzate ispirate alle MotoGP dell'epoca, offrì prestazioni mai viste prima su una moto stradale. Stabilì il riferimento tecnico che tutte le sue rivali avrebbero inseguito per anni.",
    specs: {
      engine: "Inline-4 998cc",
      power: "150 CV",
      topSpeed: "270 km/h",
      weight: "177 kg"
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Yamaha_YZF_R1_1998.jpg/1280px-Yamaha_YZF_R1_1998.jpg",
    tags: ["yamaha", "r1", "superbike", "inline-4", "1998", "giapponese", "rivoluzione"]
  },
  {
    id: 6,
    name: "Ducati Desmosedici RR",
    brand: "Ducati",
    year: 2008,
    category: "moto",
    units: 1500,
    estimatedValueEUR: 72000,
    description: "La Desmosedici RR è la replica stradale della moto da MotoGP di Ducati, la prima volta nella storia che un costruttore omologò per la strada una moto da gran premio pressoché identica all'originale. Il motore V4 desmodromico da 989cc erogava 200 CV, lo stesso schema dell'esemplare guidato da Casey Stoner nel mondiale.",
    specs: {
      engine: "V4 989cc Desmodromico",
      power: "200 CV",
      topSpeed: "299 km/h",
      weight: "171 kg"
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Ducati_Desmosedici_RR_%282%29.JPG/1280px-Ducati_Desmosedici_RR_%282%29.JPG",
    tags: ["ducati", "desmosedici", "motogp", "v4", "desmodromico", "2008", "replica"]
  },
  {
    id: 7,
    name: "MV Agusta F4 Serie Oro",
    brand: "MV Agusta",
    year: 1998,
    category: "moto",
    units: 300,
    estimatedValueEUR: 110000,
    description: "La F4 Serie Oro fu la prima moto prodotta dalla rinata MV Agusta e segnò il ritorno trionfale del marchio di Varese. Progettata da Massimo Tamburini — il genio dietro la Ducati 916 — con telaio in alluminio, motore quattro cilindri in linea radiale e scarichi laterali sotto la sella, è universalmente riconosciuta tra le moto più belle di sempre.",
    specs: {
      engine: "Inline-4 749cc",
      power: "126 CV",
      topSpeed: "270 km/h",
      weight: "184 kg"
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/MV_Agusta_F4_Serie_Oro_1999.jpg/1280px-MV_Agusta_F4_Serie_Oro_1999.jpg",
    tags: ["mv-agusta", "f4", "serie-oro", "tamburini", "italiana", "1998", "design"]
  },
  {
    id: 8,
    name: "Ducati 916",
    brand: "Ducati",
    year: 1994,
    category: "moto",
    units: 15000,
    estimatedValueEUR: 45000,
    description: "La Ducati 916 è considerata da molti la moto più bella mai costruita. Progettata da Massimo Tamburini, introdusse linee rivoluzionarie, i monoammortizzatori anteriori e posteriori e i famosi scarichi sotto la sella. Con Carl Fogarty dominò il Mondiale Superbike per quattro anni consecutivi, diventando l'icona assoluta del motociclismo sportivo italiano.",
    specs: {
      engine: "L-twin 916cc Desmodromico",
      power: "114 CV",
      topSpeed: "270 km/h",
      weight: "195 kg"
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Ducati_916_SP_1994.jpg/1280px-Ducati_916_SP_1994.jpg",
    tags: ["ducati", "916", "superbike", "tamburini", "fogarty", "1994", "italiana"]
  },
  {
    id: 9,
    name: "McLaren F1",
    brand: "McLaren",
    year: 1993,
    category: "auto",
    units: 106,
    estimatedValueEUR: 20000000,
    description: "La McLaren F1 fu per quasi un decennio l'auto di serie più veloce del mondo, con il suo record di 386,4 km/h stabilito nel 1998 che resistette per sette anni. Gordon Murray la progettò con sedile centrale del guidatore, telaio in fibra di carbonio e un motore V12 BMW costruito appositamente. Un capolavoro assoluto dell'ingegneria automobilistica.",
    specs: {
      engine: "V12 6.1L BMW S70/2",
      power: "627 CV",
      topSpeed: "386 km/h",
      weight: "1138 kg"
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/McLarenF1-describtion.jpg/1280px-McLarenF1-describtion.jpg",
    tags: ["mclaren", "f1", "v12", "bmw", "record", "1993", "hypercar", "gordon-murray"]
  },
  {
    id: 10,
    name: "Lamborghini Miura P400",
    brand: "Lamborghini",
    year: 1966,
    category: "auto",
    units: 763,
    estimatedValueEUR: 2200000,
    description: "La Lamborghini Miura è considerata la prima supercar mid-engine della storia. Presentata al Salone di Ginevra nel 1966, il suo motore V12 trasversale posteriore e le linee disegnate da Bertone scatenarono una rivoluzione nel design automobilistico. Frank Sinatra e Miles Davis ne possedettero una, consacrando il mito.",
    specs: {
      engine: "V12 3.9L Trasversale",
      power: "350 CV",
      topSpeed: "280 km/h",
      weight: "1292 kg"
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Lamborghini_Miura_P400_S_1970.jpg/1280px-Lamborghini_Miura_P400_S_1970.jpg",
    tags: ["lamborghini", "miura", "v12", "mid-engine", "1960s", "bertone", "prima-supercar"]
  },
  {
    id: 11,
    name: "Porsche 917K",
    brand: "Porsche",
    year: 1970,
    category: "auto",
    units: 37,
    estimatedValueEUR: 14000000,
    description: "La Porsche 917K è la vettura che regalò a Porsche le prime vittorie assolute alla 24 Ore di Le Mans nel 1970 e 1971. Con il suo flat-12 da 4,9 litri e oltre 600 CV, terrorizzò le strade e i circuiti dell'epoca. Steve McQueen la immortalò nel film Le Mans del 1971, rendendola leggenda assoluta della cultura popolare e motorsport.",
    specs: {
      engine: "Flat-12 4.9L",
      power: "630 CV",
      topSpeed: "380 km/h",
      weight: "820 kg"
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Porsche_917_K_1970.jpg/1280px-Porsche_917_K_1970.jpg",
    tags: ["porsche", "917", "le-mans", "flat-12", "1970", "mcqueen", "endurance"]
  },
  {
    id: 12,
    name: "Honda RC166",
    brand: "Honda",
    year: 1966,
    category: "moto",
    units: 6,
    estimatedValueEUR: 1800000,
    description: "La Honda RC166 è forse la moto da corsa tecnicamente più avanzata della sua era. Con il suo motore sei cilindri in linea da 250cc che raggiungeva i 18.000 giri, Mike Hailwood vinse il Campionato Mondiale 250cc nel 1966 e 1967. La RC166 dimostrò che la complessità tecnica giapponese poteva battere qualsiasi rivale europea.",
    specs: {
      engine: "Inline-6 250cc",
      power: "60 CV",
      topSpeed: "240 km/h",
      weight: "130 kg"
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Honda_RC166_1966.jpg/1280px-Honda_RC166_1966.jpg",
    tags: ["honda", "rc166", "250cc", "hailwood", "1966", "gp", "sei-cilindri"]
  },
  {
    id: 13,
    name: "Jaguar D-Type",
    brand: "Jaguar",
    year: 1954,
    category: "auto",
    units: 75,
    estimatedValueEUR: 8500000,
    description: "La Jaguar D-Type fu la prima vettura da corsa costruita con principi aerodinamici e struttura monoscocca in alluminio. Vinse tre edizioni consecutive della 24 Ore di Le Mans (1955, 1956, 1957) e la sua caratteristica deriva posteriore è diventata uno dei simboli più riconoscibili del motorsport degli anni '50.",
    specs: {
      engine: "Straight-6 3.4L DOHC",
      power: "275 CV",
      topSpeed: "280 km/h",
      weight: "900 kg"
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Jaguar_D-Type_-_Flickr_-_andrewbasterfield.jpg/1280px-Jaguar_D-Type_-_Flickr_-_andrewbasterfield.jpg",
    tags: ["jaguar", "d-type", "le-mans", "1950s", "monoscocca", "british", "aerodynamica"]
  },
  {
    id: 14,
    name: "Aston Martin DB5",
    brand: "Aston Martin",
    year: 1963,
    category: "auto",
    units: 1059,
    estimatedValueEUR: 1200000,
    description: "L'Aston Martin DB5 è diventata la più famosa automobile della storia grazie alla sua comparsa in Goldfinger del 1964 come auto di James Bond. Ma al di là del mito cinematografico, rappresentava il punto più alto del Gran Turismo britannico: carrozzeria Superleggera di Touring, meccanica raffinata e un'eleganza senza pari che incarna lo spirito di un'epoca.",
    specs: {
      engine: "Straight-6 3.9L DOHC",
      power: "282 CV",
      topSpeed: "233 km/h",
      weight: "1466 kg"
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Aston_Martin_DB5_silver_Flickr.jpg/1280px-Aston_Martin_DB5_silver_Flickr.jpg",
    tags: ["aston-martin", "db5", "james-bond", "gt", "british", "1963", "touring"]
  },
  {
    id: 15,
    name: "Ford GT40 Mk II",
    brand: "Ford",
    year: 1966,
    category: "auto",
    units: 31,
    estimatedValueEUR: 9000000,
    description: "Il Ford GT40 Mk II fu il simbolo della vendetta americana contro Ferrari a Le Mans. Nel 1966 occupò i primi tre posti assoluti alla 24 Ore, ponendo fine alla supremazia di Maranello. Il progetto fu voluto da Henry Ford II dopo che Ferrari rifiutò di essere acquistata da Ford nel 1963: una rivalità che divenne storia del motorsport.",
    specs: {
      engine: "V8 7.0L Big Block",
      power: "485 CV",
      topSpeed: "330 km/h",
      weight: "1100 kg"
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Ford_GT40_MkII_%2340.jpg/1280px-Ford_GT40_MkII_%2340.jpg",
    tags: ["ford", "gt40", "le-mans", "v8", "1966", "americano", "ferrari-beater"]
  },
  {
    id: 16,
    name: "Kawasaki Ninja H2R",
    brand: "Kawasaki",
    year: 2015,
    category: "moto",
    units: 120,
    estimatedValueEUR: 55000,
    description: "La Kawasaki Ninja H2R è la moto di serie più potente e veloce mai costruita per uso in pista. Il suo motore supercharged da 998cc — con compressore centrifugo sviluppato internamente da Kawasaki — eroga 310 CV e ha raggiunto i 400 km/h in test ufficiali. Non è omologata per la strada: è pura ingegneria estrema destinata al circuito.",
    specs: {
      engine: "Inline-4 998cc Supercharged",
      power: "310 CV",
      topSpeed: "400 km/h",
      weight: "216 kg"
    },
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Kawasaki_Ninja_H2R.jpg/1280px-Kawasaki_Ninja_H2R.jpg",
    tags: ["kawasaki", "h2r", "supercharged", "pista", "2015", "record", "estrema"]
  }
];

export default vehicles;
