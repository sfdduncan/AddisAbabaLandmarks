'use strict';

// Debug statement letting us know the file is loaded
console.log('Loaded map.js');

// Wait for the DOM to fully load
    
    // Your Mapbox token
    mapboxgl.accessToken = 'pk.eyJ1Ijoic2ZkdW5jYW4iLCJhIjoiY2x2Z3QybHh2MHlwcTJpczJyejAyYWVpNyJ9.DLToR14vGnafkx-pCGj6KA';

    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/sfduncan/clvgsemvr05kv01nuggof5gin',
        center: [38.744575, 9.004118],
        zoom: 12.89,
        bearing: -29.60,
        pitch: 65.00
    });

    // Create an instance of NavigationControl
    let navigation = new mapboxgl.NavigationControl({});
    map.addControl(navigation, 'top-left');

    // Scale control
    let scale = new mapboxgl.ScaleControl({
        maxWidth: 80,
        unit: 'imperial'
    });
    map.addControl(scale, 'bottom-right');

let data = [
    {'location': [38.7443405, 9.0001000], 'architect_nationality': 'Chinese', 'content': '<b>Landmark Name</b>: African Union Conference Center (AUCC)<br><b>Description</b>: Present home of the African Union and hub of intra-continental politics. The Center was constructed on the former site of Kerchele prison and has received criticism for its insensitive imposition and lack of a dedication to the atrocities committed at Kerchele. There is a plaque.<br><b>Neighborhood</b>: Old Airport/Mekanisa<br><b>Year Built</b>: 2012<br><b>Chief Architect(s)</b>: China Architecture and Design group in collaboration with Tongji University<br><b>Architect Nationality(ies)</b>: China<br><b>Construction Cost</b>: $200 million USD<br><b>Primary Funding Source</b>: A gift from the People\'s Republic of China<br><b>Status</b>: In use<br> <img src="AddisAbaba/AUCC.jpg" width="100" height="100">'},
    {'location': [38.7642067, 9.0148067], 'architect_nationality': 'Italian', 'content': '<b>Landmark Name</b>: Africa Hall (UN Economic Commission for Africa)<br><b>Description</b>: Former home of the Organization of African Unity (OAU), now home to the United Nations Economic Commission for Africa (ECA), and one of 3 UN buildings in Addis Ababa.<br><b>Neighborhood</b>: Kazanchis/ECA<br><b>Year Built</b>: 1960<br><b>Chief Architect(s)</b>: Arturo Mezzedimi<br><b> Architect Nationality(ies)</b>: Italy<br><b>Construction Cost</b>: Original is unknown; renovation is appx. $3.5 million USD<br><b>Primary Funding Source</b>: Original building was donated by Emperor Haile Selassie; renovation was primarily aid from the People\'s Republic of China<br><b>Status</b>: Undergoing renovations <img src="AddisAbaba/AfricaHall.jpg" width="100" height="100">'},
    {'location': [38.7443405, 9.0000350], 'architect_nationality': 'French', 'content': '<b>Landmark Name</b>: Kerchele Prison (Alem Bekagne)<br><b>Description</b>: Kerchele was Addis Ababa\'s first prison complex built during the time of Empress Zewditu; the prison confined politicians, activists, and Ethiopian intellectuals during the Italian invasion, and again during the communist regime, becoming notorious for its human rights abuses and overcrowding. \"Kerchele\" stemming from the Italian \"carcare\"; was designed in a 2-story, octagonal shape as derived from panopticon principles.<br><b>Neighborhood</b>: Old Airport/Mekanisa<br><b>Chief Architect(s)</b>: Unknown<br><b>Architect Nationality(ies)</b>: French (rumored)<br><b>Year Built</b>: 1924<br><b> Construction Cost</b>: Unknown<br><b>Primary Funding Source</b>: Likely domestic<br><b>Status</b>: Closed in 2004, demolished in 2007, now the site of the AUCC'},
    {'location': [38.7525858, 9.0142067], 'architect_nationality': 'Italian', 'content': '<b>Landmark Name</b>: Ras Shell Gas Station<br><b>Description</b>: Former gas station adjacent to the Ras Hotel. There are stories of people lining up to take photos soon after its opening due to its peculiar shape. The station was known for selling delicious kitfo.<br><b>Neighborhood</b>: Beherawi<br><b>Chief Architect(s)</b>: Arturo Mezzedimi, with support<br><b>Architect Nationality(ies)</b>: Italy<br><b>Year Built</b>: 1968/69<br><b> Construction Cost</b>:Unknown <br><b>Primary Funding Source</b>: Unknown <br><b>Status</b>: Now Chaka Coffee <br> <img src="AddisAbaba/Ras Shell Gas Station.jpg" width="100" height="100">'},
    {'location': [38.7518073, 9.0177407], 'architect_nationality': 'French','content': '<b>Landmark Name</b>: Commercial Bank of Ethiopia<br><b>Description</b>: First modern domestic bank in Ethiopia. The end of the Italian occupation caused the closure and expulsion of Banco di Roma, an Italian bank which introduced modern banking practices to the country (jumpstarted from a loan of approximately 4 million Italian lira). It is believed that Emperor Haile Selassie\'s desire for a bank that exemplified Ethiopian independence and civility brought him to personally finance part of the construction. The Bank\'s first governer, American George Blowers, was trusted to reintroduce the national currency birr.<br><b>Neighborhood</b>: Beherawi<br><b>Chief Architect(s)</b>: Henri Chomette (with regular collaborator Romain de Seela)<br><b>Architect Nationality</b>: France<br><b>Year Built</b>: 1963<br> <b> Construction Cost</b>: Unknown <br><b>Primary Funding Source</b>: Unknown <br><b>Status</b>: In use <br> <img src="AddisAbaba/Commercial Bank of Ethiopia (Ngdet Bank).jpg" width="100" height="100">'},
    {'location': [38.7508893, 9.0143857], 'architect_nationality': 'French','content': '<b>Landmark Name</b>: Bedilu/Bedlu Building<br><b>Description</b>: High-rise residential building that was the subject of an international design competition held by the Imperial Palace of Ethiopia. Chomette was appointed Chief Architect of Addis Ababa from 1953 to 1959.<br><b>Neighborhood</b>: Mexico Square/Sarbet<br><b>Chief Architect(s)</b>: Henri Chommette<br><b>Architect Nationality</b>: France<br><b>Year Built</b>: 1963<br> <b>Construction Cost</b>: Unknown <br><b>Primary Funding Source</b>: Unknown <br><b>Status</b>: In use <br> <img src="AddisAbaba/Bedulu Building.jpg" width="100" height="100">'},
    {'location': [38.7601957, 9.0137617], 'content': '<b>Landmark Name</b>: Ghion Hotel<br><b>Description</b>: One of the few hotels explicitly designed for the impression, rest, and care of international diplomats <br><b>Neighborhood</b>: Meskel Square/Kazanchis<br><b>Chief Architect(s)</b>: Unknown<br><b>Architect Nationality</b>: Unknown <br><b>Year Built</b>: 1951<br><b>Construction Cost</b>: Unknown <br><b>Primary Funding Source</b>: Unknown <br><b>Status</b>: In use <br> <img src="AddisAbaba/Ghion Hotel.jpg" width="100" height="100">'},
    {'location': [38.7295000, 9.0077202], 'content': '<b>Landmark Name</b>: Ministry of Defense site of old airport<br><b>Description</b>: The site of the old international airport which predated the construction of Bole International Airport. The site transitioned to a military airport before becoming a state-of-the-art compound for the Ministry of Defense.<br><b>Neighborhood</b>: Mekanisa/Old Airport<br><b>Chief Architect(s)</b>:<br><b>Architect Nationality</b>: Likely to have involved an Ethiopian team due to sensitive nature of compound needs.<br><b>Year Built</b>: 2022<br><b>Construction Cost</b>: Unknown <br><b>Primary Funding Source</b>: At least partially funded by taxpayer dollars. <br><b>Status</b>: In use <br><img src="AddisAbaba/Ministry of Defense.jpg" width="100" height="100">'},
    {'location': [38.7386452, 8.9946204], 'architect_nationality': 'Chinese', 'content': '<b>Landmark Name</b>: Pushkin Square<br><b>Description</b>: A rotary that formally centered a statue of Russian writer Alexandar Pushkin, a 2002 gift from the Russian Federation; Pushkin is widely believed to be of mixed-Ethiopian heritage. The statue was taken down during demolition and reconstruction but is planned to be returned. Rotaries and street squares can be thought of as essential joints within Addis Ababa\'s transportation network. The roundabout form (mezoria) are pervasive and have become common sites for political monuments as the center of a rotary maximizes directional visibility.<br><b>Neighborhood</b>: Mekanisa/Old Airport<br><b>Chief Architect(s)</b>:Unknown<br><b>Architect Nationality</b>: China<br><b>Year Built</b>:2022<br><b>Construction Cost</b>: New Construction estimated at $26 million USD<br><b>Primary Funding Source</b>: New construction is being greatly funded through Chinese government aid <br><b>Status</b>: Undergoing reconstruction as a part of a highway expansion project <br> <img src="AddisAbaba/Pushkin Square.jpg" width="100" height="100">'},
    {'location': [38.7578874, 9.0181610], 'architect_nationality': 'Israeli', 'content': '<b>Landmark Name</b>: Filwoha Hotel and Baths<br><b>Description</b>: Filwoha was a hot spring area in Addis Ababa which Emeperor Menelik would visit as a contrast to his colder, mountain-perched Entoto palace. Time spent in Fil woha and a realization that the area offered strategic benefit prompted Menelik to build another palace nearby. The current hotel and bath was designed to be a self-sufficient low-rise building made with local materials to produce a new form of modernity. <br><b>Neighborhood</b>: Filwoha<br><b>Chief Architect(s)</b>: Zalmann Enav and Michel Tewdros<br><b>Architect Nationality</b>: Israel, Ethiopia<br><b>Year Built</b>: 1965<br><b>Construction Cost</b>: Unknown <br><b>Primary Funding Source</b>: Unknown<br><b>Status</b>: In use <br> <img src="AddisAbaba/Filwoha Bathhouse.jpg" width="100" height="100">'},
    {'location': [38.7635669, 9.0121499], 'content': '<b>Landmark Name</b>: St Estifanos Church<br><b>Description</b>: The church of former Emperor Haile Selassie. It was reconstructed, despite it being fairly young, according to Selassie\'s wish to spatially experience a contemporary Ethiopian Orthodox church that was harmonious with surrounding modern buildings and wide boulevards. The church remains popular today.<br><b>Neighborhood</b>: Kazanchis/Arat Kilo<br><b>Chief Architect(s)</b>:Unknown<br><b>Architect Nationality</b>:Unknown<br><b>Year Built</b>: 1960s<br><b>Construction Cost</b>:Unknown<br><b>Primary Funding Sources</b>:Unknown<br><b>Status</b>: In use<br><img src="AddisAbaba/St. Estifanos.jpg" width="100" height="100">'},   
    {'location': [38.7639201, 9.0252010], 'content': '<b>Landmark Name</b>: Jubilee Palace (Menelik\'s Imperial Palace)<br><b>Description</b>: One of three standing palace compounds in Addis Ababa. The palace temporarily contained formerly high ranking political prisoners during the communist regime.<br><b>Neighborhood</b>: Arat Kilo<br><b>Chief Architect(s)</b>: Unknown<br><b>Architect Nationality</b>: Unknown<br><b>Year Built</b>: 1887<br><b>Construction Cost</b>: Unknown <br><b>Primary Funding Sources</b>: Unknown <br><b>Status</b>: Now preserved as a museum<br><img src="AddisAbaba/Menelik Palace.jpg" width="100" height="100">'},
    {'location': [38.7609913, 9.0166216], 'content': '<b>Landmark Name</b>: Eyubelyu Palace (Selassie\'s Imperial Palace)<br><b>Description</b>: One of three standing palace compounds in Addis Ababa, and one of many homes of Emperor Selassie. <br><b>Neighborhood</b>: Kazanchis<br><b>Chief Architect(s)</b>: Unknown<br><b>Architect Nationality</b>: Unknown<br><b>Year Built</b>: 1955<br><b>Construction Cost</b>: Unknown <br><b>Primary Funding Sources</b>: Unknown<br><b>Status</b>:In use<br> <img src="AddisAbaba/Eyubulu Palace.jpg" width="100" height="100">'},
    {'location': [38.7704229, 9.0190321], 'content': '<b>Landmark Name</b>: Fendika Cultural Center<br><b>Description</b>: Iconic perfomance space (azmari bet) highlighting traditional dances from across Ethiopian ethnic groups, and other forms of Ethiopian musical artistry. Among the first entertainment spaces to open and gain popularity after the fall of the Derg, which had previously enforced curfews and regulated entertainment.<br><b>Neighborhood</b>: Kazanchis<br><b>Chief Architect(s)</b>: Unknown<br><b>Architect Nationality(ies)</b>: Unknown<br><b>Year Built</b>: 1990s<br><b>Construction Cost</b>: Unknown <br><b>Primary Funding Sources</b>: Unknown, currently community owned and financed <br><b>Status</b>: In use <br><img src="AddisAbaba/Fendika Cultural Center.jpg" width="100" height="100">'},
    {'location': [38.7523927, 9.0160022], 'architect_nationality':'French', 'content': '<b>Landmark Name</b>: Berawhi Theatre (National Theater) & Lion of Judah Statue<br><b>Description</b>: An expansion and total renovation of a former Italian cinema, commissioned to commemorate the Silver Jubilee, the 25th anniversary of Emperor Haile Selassie\’s coronation. Theater programming focused on reviving native musical and theatrical practices, while also welcoming international performances.<br><b>Neighborhood</b>: Beherawi<br><b>Chief Architect(s)</b>: Antoine Laget (Abidjan Director of BEHC), Maurice Calka Statue by Georges Gardet<br><b>Architect Nationality</b>: France<br><b>Year Built</b>: 1956/57<br><b>Construction Cost</b>: Unknown <br><b>Primary Funding Sources</b>: Partially domestic <br><b>Status</b>: In use<br><img src="AddisAbaba/Lion of Judah Statue.jpg" width="100" height="100">'},
    {'location': [38.7500844, 9.0106486], 'architect_nationality':'French', 'content': '<b>Landmark Name</b>: La Gare, Train Station (Stazione Ferroviaria)<br><b>Description</b>: Regional train station that was the sole rail connection to Djibouti and the Red Sea. The station was been inoperable for decades and has undergone numerous unsuccessful attempts at sale.<br><b>Neighborhood</b>: Between Mexico and Meskel Square<br><b>Chief Architect(s)</b>: Paul Barrias<br><b>Architect Nationality</b>: France<br><b>Year Built</b>: 1917<br><b>Construction Cost</b>: Unknown <br><b>Primary Funding Sources</b>: A donation from France<br><b>Status</b>: Closed and pending sale and demolition <br><img src="AddisAbaba/La Gare, Train Station (Stazione Ferroviaria).jpg" width="100" height="100">'},
    {'location': [38.7621651, 9.0117053], 'architect_nationality':'Italian', 'content': '<b>Landmark Name</b>: Zewditu Building<br><b>Description</b>: Office building and residence.<br><b>Neighborhood</b>: Kazanchis<br><b>Chief Architect(s)</b>: Arturo Mezzedimi<br><b>Architect Nationality(ies)</b>: Italy<br><b>Year Built</b>: 1962-64<br><b>Construction Cost</b>: Unknown <br><b>Primary Funding Sources</b>: Unknown<br><b>Status</b>: In use <br><img src="AddisAbaba/Zewditu Building.jpg" width="100" height="100">'},
    {'location': [38.7542072, 9.0180882], 'content': '<b>Landmark Name</b>: Ambassador Theater<br><b>Description</b>: Performance Theater and cinema.<br><b>Neighborhood</b>: Ambassador<br><b>Chief Architect(s)</b>: Unknown<br><b>Architect Nationality(ies)</b>: Unknown, under Ethiopian management<br><b>Year Built</b>: 1964<br><b>Construction Cost</b>: Unknown <br><b>Primary Funding Sources</b>: Unknown <br><b>Status</b>: In use<br><img src="AddisAbaba/Ambassador Theater.jpg" width="100" height="100">'},
    {'location': [38.7621125, 9.0114050], 'architect_nationality':'Italian','content': '<b>Landmark Name</b>: FinFinne Building<br><b>Description</b>: Currently the Bank of Abyssinia. Finfinne is the Oromo name for Addis Ababa, and it is uncertain if many people would associate the given name with this structure.<br><b>Neighborhood</b>: Outer Mekanisa<br><b>Chief Architect(s)</b>: Arturo Mezzedimi<br><b>Architect Nationality(ies)</b>: Italy<br><b>Year Built</b>: 1962-64<br><b>Construction Cost</b>: Unknown<br><b>Primary Funding Sources</b>: Unknown <br><b>Status</b>: In use <br><img src="AddisAbaba/FinFinne Building.jpg" width="100" height="100">'},
    {'location': [38.756198,  9.0131574], 'content': '<b>Landmark Name</b>: Addis Ababa Stadium<br><b>Description</b>: Addis Ababa\'s primary soccer stadium that hosts the professional league. A new, nearly $70 milllion USD, stadium named Adey Ababa, is planned to succeed the current stadium, however construction has been repeatedly delayed due to lack of financing power.<br><b>Neighborhood</b>: Meskel Square<br><b>Chief Architect(s)</b>: Unknown<br><b>Architect Nationality(ies)</b>: Unknown<br><b>Year Built</b>: 1947 (construction started)<br><b>Construction Cost</b>: New Construction estimated at $70 million USD <br><b>Primary Funding Sources</b>: Unknown<br><b>Status</b>: In use until succeeding stadium is completed <br><img src="AddisAbaba/Addis Ababa Stadium.jpg" width="100" height="100">'},
    {'location': [38.7275794, 8.9966012], 'architect_nationality':'Israeli', 'content': '<b>Landmark Name</b>: International Community School of Addis Ababa<br><b>Description</b>:The school was born from a 15 acre donation by Haile Selassie, who wanted to establish an academic hub for international and diplomat communities.<br><b>Neighborhood</b>: Mekanisa/Old Airport<br><b>Chief Architect(s)</b>: Zalmann Enav and Michel Tewdros<br><b>Architect Nationality(ies)</b>: Israel, Ehtiopia<br><b>Year Built</b>: 1964<br><b>Construction Cost</b>: Unknown<br><b>Primary Funding Sources</b>: A loan from the World Bank <br><b>Status</b>: Renovated and in use <br><img src="AddisAbaba/International Community School of Addis Ababa.jpg" width="100" height="100">'},        
    {'location': [38.7645207, 9.0204441], 'architect_nationality':'Israeli', 'content': '<b>Landmark Name</b>: 82 Apartment<br><b>Description</b>: Apartment building for UN workers and international diplomats. <br><b>Neighborhood</b>: Kazanchis/Arat Kilo<br><b>Chief Architect(s)</b>: Zalmann Enav and Michel Tewdros<br><b>Architect Nationality(ies)</b>: Israel, Ehtiopia<br><b>Year Built</b>: 1962<br><b>Construction Cost</b>: Unknown<br><b>Primary Funding Sources</b>: Unknown <br><b>Status</b>: In use <br><img src="AddisAbaba/82 Apartment.jpg" width="100" height="100">'},
    {'location': [38.7625032, 9.0200666], 'architect_nationality':'Israeli', 'content': '<b>Landmark Name</b>: Ethiopian Mapping Agency, Formerly Mapping and Geography Institute<br><b>Description</b>: The country\'s first geography agency. Though the agency has gone through over three name changes, some form of capacity has remained. The office itself has not experienced impactful renovation since its construction.<br><b>Neighborhood</b>: Kazanchis<br><b>Chief Architect(s)</b>: Zalmann Enav and Michel Tewdros<br><b>Architect Nationality(ies)</b>: Israel, Ehtiopia<br><b>Year Built</b>: 1964<br><b>Construction Cost</b>: Unknown<br><b>Primary Funding Sources</b>: Domestic, taxpayer dollars. <br><b>Status</b>: In use <br><img src="AddisAbaba/Ethiopian Mapping Agency, Formerly Mapping and Geography Institute.jpg" width="100" height="100">'},
    {'location': [38.7626500, 9.0191458], 'architect_nationality':'Israeli', 'content': '<b>Landmark Name</b>: Ministry of Foreign Affairs<br><b>Description</b>: Designed in the shape of an \“Ethiopian Star\”, referring to the star of Solomon. The architects attempted to push back against a sterile, glass-oriented modernist aesthetic and blend details such as exposed-concrete with local traditional motifs. <br><b>Neighborhood</b>: Kazanchis <br><b>Chief Architect(s)</b>: Zalmann Enav and Michel Tewdros<br><b>Architect Nationality(ies)</b>: Israel, Ehtiopia<br><b>Year Built</b>: 1962/64<br><b>Construction Cost</b>: Unknown<br><b>Primary Funding Sources</b>: Domestic, taxpayer dollars. <br><b>Status</b>: In use <br><img src="AddisAbaba/Ministry of Foreign Affairs.jpg" width="100" height="100">'},
    {'location': [38.7542953, 9.0166094], 'architect_nationality':'Chinese', 'content': '<b>Landmark Name</b>: Commercial Bank of Ethiopia (Ngdet Bank) <br><b>Description</b>: OCBE\'s assets have grown to 1.1 trillion birr, becoming the most successful bank in the country\'s history. The new headquarters includes a 209-meter-tall tower which is said to be the tallest building in East Africa. The project was the first of HENN\'s on the African continent, a potential introduction for a longer stay.<br><b>Neighborhood</b>: Ambassador<br><b>Chief Architect(s)</b>: Henn GmbH<br><b>Architect Nationality(ies)</b>: China, Germany<br><b>Year Built</b>: 2021<br> <b>Construction Cost</b>: Approximately $303.5 million USD<br><b>Primary Funding Sources</b>: Unknown <br><b>Status</b>: In use <br><img src="AddisAbaba/Commercial Bank of Ethiopia.jpg" width="100" height="100">'},
    {'location': [38.7648285, 9.0187883], 'content': '<b>Landmark Name</b>: Hilton Hotel Addis Ababa<br><b>Description</b>: Culturally prominent hotel intentionally located near imperial palaces to be a comfortable respite for international dignitatries.<br><b>Neighborhood</b>: Arat Kilo/Kazanchis<br><b>Chief Architect(s)</b>: Unknown, overseen by Hilton Worldwide<br><b>Architect Nationality(ies)</b>: American <br><b>Year Built</b>: 1969<br><b>Construction Cost</b>: Unknown<br><b>Primary Funding Sources</b>: United States <br><b>Status</b>: In use<br><img src="AddisAbaba/Hilton Hotel Addis Ababa.jpg" width="100" height="100">'},
    {'location': [38.7595403, 9.0204567], 'content': '<b>Landmark Name</b>: Sheraton Hotel <br><b>Description</b>: Palatial, and perhaps most famous contemporary hotel in Ethiopia, adorned with years of visits by international diplomats and celebrities (Bill Clinton, Beyonce, Rihanna, Akon). The hotel is a compound stretching out over 42 acres.<br><b>Neighborhood</b>: Piassa/Arat Kilo<br><b>Chief Architect(s)</b>: Kosek Ivo<br><b>Architect Nationality(ies)</b>: Czech<br><b>Year Built</b>: 1998<br> <b>Construction Cost</b>: Approximately $200 million USD, with an addition of over $100 million in incoming renovations)<br><b>Primary Funding Sources</b>: MIDROC, constructed as a gift from Sheikh Mohammed Hussein Al-Amoudi, one of Ethiopia\'s wealthiest nationals<br><b>Status</b>: In use<br><img src="AddisAbaba/Committee of Intelligence and Security Services of Africa (CISSA).jpg" width="100" height="100">'},
    {'location': [38.7608138, 9.0214518], 'content': '<b>Landmark Name</b>: Ethiopian Science Museum<br><b>Description</b>: Addis Ababa\'s newest museum which underwent a well publicized grand opening, yet remains virtually empty of both exhibits an visitors.<br><b>Neighborhood</b>: Arat Kilo/Kazanchis<br><b>Chief Architect(s)</b>: Unknown, Museum exhibition design by Israeli company, MadaTech<br><b>Architect Nationality(ies)</b>: Chinese<br><b>Year Built</b>: 2022<br><b>Construction Cost</b>: A little over $19 million USD<br><b>Primary Funding Sources</b>: People\'s Republic of China (government aid)<br><b>Status</b>: In use<br><img src="AddisAbaba/AddisMuseumofSciencefromRecollectMedia.jpeg" width="100" height="100">'},
    {'location': [38.7460793, 8.9971523], 'content': '<b>Landmark Name</b>: Committee of Intelligence and Security Services of Africa (CISSA)<br><b>Description</b>: Diplomacy<br><b>Neighborhood</b>: Mekanisa/Old Airport<br><b>Chief Architect(s)</b>: Unknown<br><b>Architect Nationality(ies)</b>: Unknown<br><b>Year Built</b>: 2020<br> <b>Construction Cost</b>: Unknown<br><b>Primary Funding Sources</b>: Unknown<br><b>Status</b>: In use<br><img src="AddisAbaba/Committee of Intelligence and Security Services of Africa (CISSA).jpg" width="100" height="100">'},
    {'location': [38.7424922, 9.0019457], 'content': '<b>Landmark Name</b>: Congo Hall<br><b>Description</b>:<br><b>Neighborhood</b>: Mekanisa/Old Airport<br><b>Chief Architect(s)</b>: Unknown<br><b>Architect Nationality(ies)</b>: Unknown<br><b>Year Built</b>: Unknown<br><b>Construction Cost</b>: Unknown<br><b>Primary Funding Sources</b>: Unknown<br><b>Status</b>: Unknown<br>'},
    {'location': [38.7392183, 8.9948634], 'content': '<b>Landmark Name</b>: Adams Pavillion<br><b>Description</b>:<br><b>Neighborhood</b>: Mekanisa/Old Airport<br><b>Chief Architect(s)</b>: Unknown<br><b>Architect Nationality(ies)</b>: Unknown<br><b>Year Built</b>: Unknown<br><b>Construction Cost</b>: Unknown<br><b>Primary Funding Sources</b>: Unknown<br><b>Status</b>: In use<br><img src="AddisAbaba/Adams Pavillion.jpg" width="100" height="100">'},
    {'location': [38.7733222, 9.0167340], 'content': '<b>Landmark Name</b>: Lakech Cinema<br><b>Description</b>: Movie theater/Cultural hub </b>: Unknown<br><b>Neighborhood</b>: Kazanchis<br><b>Chief Architect(s)</b>: Unknown<br><b>Architect Nationality(ies)</b>: Unknown<br><b>Year Built</b>: Unknown<br> <b>Construction Cost</b>: Unknown<br><b>Primary Funding Sources</b>: Unknown<br><b>Status</b>: In use<br><img src="AddisAbaba/Lakech Cinema.jpg" width="100" height="100">'},
    {'location': [38.7754832, 9.0270175], 'content': '<b>Landmark Name</b>: German Square<br><b>Description</b>: Unknown<br><b>Neighborhood</b>: Kazanchis<br><b>Chief Architect(s)</b>: Unknown<br><b>Architect Nationality(ies)</b>: Unknown<br><b>Year Built</b>: Unknown'},
    {'location': [38.7357451, 8.9963508], 'content': '<b>Landmark Name</b>: Tomoca Coffee (Sarbet Branch<br><b>Description</b>: Coffee shop<br><b>Neighborhood</b>: Mekanisa/Old Airport<br><b>Chief Architect(s)</b>: Unknown<br><b>Architect Nationality(ies)</b>: Unknown<br><b>Year Built</b>: Unknown<br><b>Construction Cost</b>: Unknown<br><b>Primary Funding Sources</b>: Unknown<br><b>Status</b>: In use<br>'},

    ];


function addMarkers(filterCriteria) {
    if (window.markers) {
        window.markers.forEach(marker => marker.remove());
    }
    window.markers = [];

    data.forEach(function(d) {
        if (!filterCriteria || d.architect_nationality === filterCriteria) {
            var el = document.createElement('div');
            el.innerHTML = '<svg height="15" width="15"><circle cx="7.5" cy="7.5" r="5" fill="#473144" fill-opacity=".75" /></svg>';

            let marker = new mapboxgl.Marker(el)
                .setLngLat(d.location)
                .addTo(map);

            let popup = new mapboxgl.Popup({ 
                closeButton: false,
                anchor: 'bottom',
                offset: 25, 
                maxWidth: '300px'
            
            })
                .setHTML(d.content);
            marker.setPopup(popup);

            window.markers.push(marker);
        }
    });
}

// Initially add all markers
addMarkers();

// Event listener for filtering
document.getElementById('countryFilter').addEventListener('change', function(e) {
    const selectedCountry = e.target.value;
    console.log("Selected country:", selectedCountry); // Debugging
    addMarkers(selectedCountry); 
});


   // Filter window toggle functionality
   const filterWindow = document.getElementById('filterWindow');
   const toggleButton = document.getElementById('toggleFilterWindow');

   toggleButton.addEventListener('click', () => {
       if (filterWindow.classList.contains('minimized')) {
           filterWindow.classList.remove('minimized');
           toggleButton.textContent = 'Hide Filters';
       } else {
           filterWindow.classList.add('minimized');
           toggleButton.textContent = 'Show Filters';
       }
   });

   

   map.on('load', function () {
       map.addSource('sfduncan.bs7fd9xd', {
            type: 'vector',
            url: 'mapbox://sfduncan.bs7fd9xd'
        });
        
        map.addSource('sfduncan.1o2haf9j', {
            type: 'vector',
            url: 'mapbox://sfduncan.1o2haf9j'
        });
    
        map.addSource('sfduncan.bg1rmv4d', {
            type: 'vector',
            url: 'mapbox://sfduncan.bg1rmv4d'
        });
    
        map.addSource('sfduncan.41r7j7ep', {
            type: 'vector',
            url: 'mapbox://sfduncan.41r7j7ep'
        });
    
        map.addSource('sfduncan.5of3n0hh', {
            type: 'vector',
            url: 'mapbox://sfduncan.5of3n0hh'
        });
    
        map.addSource('sfduncan.5j0ek65q', {
            type: 'vector',
            url: 'mapbox://sfduncan.5j0ek65q'
        });


        map.addLayer({
            'id': 'OuterMekanisa',
            'type': 'line',  // Or 'line' or 'symbol', depending on how you want to render the layer
            'source': 'sfduncan.41r7j7ep',  // Example source
            'source-layer': 'MekanisaOuter-683h74',  // The source-layer as seen in Mapbox Studio
            'layout': {},
            'paint': {
                'fill-color': '#fcfdfd', // Customize based on the visual you want
                'fill-opacity': 1
            }
        });

        map.addLayer({
            'id': 'InnerMekanisa',
            'type': 'fill',  // Or 'line' or 'symbol', depending on how you want to render the layer
            'source': 'sfduncan.bg1rmv4d',  // Example source
            'source-layer': 'InnerMekanisa-7icaq5',  // The source-layer as seen in Mapbox Studio
            'layout': {},
            'paint': {
                'stroke': '#ffffff',
                'fill-color': '#96729d', // Customize based on the visual you want
                'fill-opacity': .2
            }
        });

        map.addLayer({
            'id': 'Mekanisa',
            'type': 'fill',  // Or 'line' or 'symbol', depending on how you want to render the layer
            'source': 'sfduncan.5j0ek65q',  // Example source
            'source-layer': 'Mekanisa-8tant1',  // The source-layer as seen in Mapbox Studio
            'layout': {},
            'paint': {
                'fill-color': '#96729d', // Customize based on the visual you want
                'fill-opacity': .2
            }
        });

        map.addLayer({
            'id': 'InnerKazanchis',
            'type': 'fill',  // Or 'line' or 'symbol', depending on how you want to render the layer
            'source': 'sfduncan.1o2haf9j',  // Example source
            'source-layer': 'KazanchisInner-ccl2da',  // The source-layer as seen in Mapbox Studio
            'layout': {},
            'paint': {
                'fill-color': '#96729d', // Customize based on the visual you want
                'fill-opacity': .2,
                'fill-outline-color':"#ffffff"
            }
        });

        map.addLayer({
            'id': 'OuterKazanchis',
            'type': 'line',  // Or 'line' or 'symbol', depending on how you want to render the layer
            'source': 'sfduncan.bs7fd9xd',  // Example source
            'source-layer': 'KazanchisOuter-6jmkly',  // The source-layer as seen in Mapbox Studio
            'layout': {},
            'paint': {
                'stroke': '#ffffff', // Customize based on the visual you want
            }
        });

        map.addLayer({
            'id': 'Kazanchis',
            'type': 'fill',  // Or 'line' or 'symbol', depending on how you want to render the layer
            'source': 'sfduncan.5of3n0nh',  // Example source
            'source-layer': 'Kazanchis-1lvnf1',  // The source-layer as seen in Mapbox Studio
            'layout': {},
            'paint': {
                'fill-color': '#96729d', // Customize based on the visual you want
                'fill-opacity': .2,
            }
        });


        function setLayerVisibility(layerId, visibility) {
            const visibilityStatus = visibility ? 'visible' : 'none';
            map.setLayoutProperty(layerId, 'visibility', visibilityStatus);
        }
    
        // Checkbox event listeners
        document.getElementById('OuterKazanchis').addEventListener('change', function (e) {
            setLayerVisibility('OuterKazanchis', e.target.checked);
        });
    
        document.getElementById('InnerKazanchis').addEventListener('change', function (e) {
            setLayerVisibility('InnerKazanchis', e.target.checked);
        });
    
        document.getElementById('InnerMekanisa').addEventListener('change', function (e) {
            setLayerVisibility('InnerMekanisa', e.target.checked);
        });
    
        document.getElementById('OuterMekanisa').addEventListener('change', function (e) {
            setLayerVisibility('OuterMekanisa', e.target.checked);
        });
    
        document.getElementById('Kazanchis').addEventListener('change', function (e) {
            setLayerVisibility('Kazanchis', e.target.checked);
        });
    
        document.getElementById('Mekanisa').addEventListener('change', function (e) {
            setLayerVisibility('Mekanisa', e.target.checked);
        });


    
        // Add event listeners for the rest of your layers
    });