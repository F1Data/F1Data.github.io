//------------------------------------------------------------------------------
const COUNTRIES = [{"pais":"Afganistán","country":"Afghanistan","iso_num":4,"iso_alfa2":"AF","iso_alfa3":"AFG","gentilicio":"Afgano","demonym":"Afghan",flag:"&#127462&#127467"},
{"pais":"Albania","country":"Albany","iso_num":8,"iso_alfa2":"AL","iso_alfa3":"ALB","gentilicio":"Albanés","demonym":"Albanian",flag:"&#127462&#127473",},
{"pais":"Alemania","country":"Germany","iso_num":276,"iso_alfa2":"DE","iso_alfa3":"DEU","gentilicio":"Alemán","demonym":"German",flag:"&#127465&#127466",},
{"pais":"Alemania del Este","country":"East Germany","iso_num":276,"iso_alfa2":"DE","iso_alfa3":"_DEU","gentilicio":"Alemán del Este","demonym":"East German",flag:"&#127465&#127466"},
{"pais":"Andorra","country":"Andorra","iso_num":20,"iso_alfa2":"AD","iso_alfa3":"AND","gentilicio":"Andorrino","demonym":"Andorran",flag:"&#127462&#127465"},
{"pais":"Angola","country":"Angola","iso_num":24,"iso_alfa2":"AO","iso_alfa3":"AGO","gentilicio":"Angoleño","demonym":"Angolan",flag:"&#127462&#127476"},
{"pais":"Anguila","country":"Anguila","iso_num":660,"iso_alfa2":"AI","iso_alfa3":"AIA","gentilicio":"Anguileño","demonym":"Anguillan",flag:"&#127462&#127470"},
{"pais":"Antártida","country":"Antarctica","iso_num":10,"iso_alfa2":"AQ","iso_alfa3":"ATA","gentilicio":"Antártico","demonym":"Antartic",flag:"&#127462&#127478"},
{"pais":"Antigua y Barbuda","country":"Antigua y Barbuda","iso_num":28,"iso_alfa2":"AG","iso_alfa3":"ATG","gentilicio":"Barbadense","demonym":"Antiguan",flag:"&#127462&#127468"},
{"pais":"Antillas Neerlandesas","country":"Netherlands Antilles","iso_num":530,"iso_alfa2":"AN","iso_alfa3":"ANT","gentilicio":"Antillano","demonym":"Antillan",flag:"&nbsp"},
{"pais":"Arabia Saudita","country":"Saudi Arabia","iso_num":682,"iso_alfa2":"SA","iso_alfa3":"SAU","gentilicio":"Saudí","demonym":"Saudi",flag:"&#127480&#127462"},
{"pais":"Argelia","country":"Argel","iso_num":12,"iso_alfa2":"DZ","iso_alfa3":"DZA","gentilicio":"Argelino","demonym":"Algerian",flag:"&#127465&#127487"},
{"pais":"Argentina","country":"Argentina","iso_num":32,"iso_alfa2":"AR","iso_alfa3":"ARG","gentilicio":"Argentino","demonym":"Argentine",flag:"&#127462&#127479"},
{"pais":"Armenia","country":"Armenia","iso_num":51,"iso_alfa2":"AM","iso_alfa3":"ARM","gentilicio":"Armenio","demonym":"Armenian",flag:"&#127462&#127474"},
{"pais":"Aruba","country":"Aruba","iso_num":533,"iso_alfa2":"AW","iso_alfa3":"ABW","gentilicio":"","demonym":"",flag:"&#127462&#127484"},
{"pais":"Australia","country":"Australia","iso_num":36,"iso_alfa2":"AU","iso_alfa3":"AUS","gentilicio":"Australiano","demonym":"Australian",flag:"&#127462&#127482"},
{"pais":"Austria","country":"Austria","iso_num":40,"iso_alfa2":"AT","iso_alfa3":"AUT","gentilicio":"Austríaco","demonym":"Austrian",flag:"&#127462&#127481"},
{"pais":"Azerbaiyán","country":"Azerbaijan","iso_num":31,"iso_alfa2":"AZ","iso_alfa3":"AZE","gentilicio":"Azerbaijaní","demonym":"Azerbaijani",flag:"&#127462&#127487"},
{"pais":"Bahamas","country":"Bahamas","iso_num":44,"iso_alfa2":"BS","iso_alfa3":"BHS","gentilicio":"Bahameño","demonym":"Bahamian",flag:"&#127463&#127480"},
{"pais":"Bahréin","country":"Bahrain","iso_num":48,"iso_alfa2":"BH","iso_alfa3":"BHR","gentilicio":"Bahrainí","demonym":"Bahraini",flag:"&#127463&#127469"},
{"pais":"Bangladesh","country":"Bengala Libre","iso_num":50,"iso_alfa2":"BD","iso_alfa3":"BGD","gentilicio":"Bengalí","demonym":"Bangladeshi",flag:"&#127463&#127465"},
{"pais":"Barbados","country":"Barbados","iso_num":52,"iso_alfa2":"BB","iso_alfa3":"BRB","gentilicio":"Barbadense","demonym":"Barbadian",flag:"&#127463&#127463"},
{"pais":"Belarús","country":"Bielorrusia","iso_num":112,"iso_alfa2":"BY","iso_alfa3":"BLR","gentilicio":"Bielorruso","demonym":"Belarusian",flag:"&#127463&#127486"},
{"pais":"Bélgica","country":"Belgium","iso_num":56,"iso_alfa2":"BE","iso_alfa3":"BEL","gentilicio":"Belga","demonym":"Belgian",flag:"&#127463&#127466"},
{"pais":"Belice","country":"Belice","iso_num":84,"iso_alfa2":"BZ","iso_alfa3":"BLZ","gentilicio":"Beliceño","demonym":"Belizean",flag:"&#127463&#127487"},
{"pais":"Benin","country":"Benin","iso_num":204,"iso_alfa2":"BJ","iso_alfa3":"BEN","gentilicio":"Beninense","demonym":"Beninese",flag:"&#127463&#127471"},
{"pais":"Bermudas","country":"Bermudas","iso_num":60,"iso_alfa2":"BM","iso_alfa3":"BMU","gentilicio":"Bermudeño","demonym":"Bermudean",flag:"&#127463&#127474"},
{"pais":"Bhután","country":"Bhutan","iso_num":64,"iso_alfa2":"BT","iso_alfa3":"BTN","gentilicio":"Bhutanense","demonym":"Bhutanese",flag:"&#127463&#127481"},
{"pais":"Bolivia","country":"Bolivia","iso_num":68,"iso_alfa2":"BO","iso_alfa3":"BOL","gentilicio":"Boliviano","demonym":"Bolivian",flag:"&#127463&#127476"},
{"pais":"Bosnia y Herzegovina","country":"Bosnia Herzegovina","iso_num":70,"iso_alfa2":"BA","iso_alfa3":"BIH","gentilicio":"Bosnio","demonym":"Bosnian",flag:"&#127463&#127462"},
{"pais":"Botsuana","country":"Botsuana","iso_num":72,"iso_alfa2":"BW","iso_alfa3":"BWA","gentilicio":"Botsuano","demonym":"Motswana",flag:"&#127463&#127484"},
{"pais":"Brasil","country":"Brazil","iso_num":76,"iso_alfa2":"BR","iso_alfa3":"BRA","gentilicio":"Brasileño","demonym":"Brazilian",flag:"&#127463&#127479"},
{"pais":"Brunéi","country":"Brunei","iso_num":96,"iso_alfa2":"BN","iso_alfa3":"BRN","gentilicio":"Bruneiano","demonym":"Bruneian",flag:"&#127463&#127475"},
{"pais":"Bulgaria","country":"Bulgary","iso_num":100,"iso_alfa2":"BG","iso_alfa3":"BGR","gentilicio":"Búlgaro","demonym":"Bulgarian",flag:"&#127463&#127468"},
{"pais":"Burkina Faso","country":"Burkina Faso","iso_num":854,"iso_alfa2":"BF","iso_alfa3":"BFA","gentilicio":"Burkino","demonym":"Burkinabe",flag:"&#127463&#127467"},
{"pais":"Burundi","country":"Burundi","iso_num":108,"iso_alfa2":"BI","iso_alfa3":"BDI","gentilicio":"Burundí","demonym":"Burundian",flag:"&#127463&#127470"},
{"pais":"Cabo Verde","country":"Green Cape","iso_num":132,"iso_alfa2":"CV","iso_alfa3":"CPV","gentilicio":"Vaboverdiano","demonym":"Cape Verdean",flag:"&#127464&#127483"},
{"pais":"Camboya","country":"Cambodia","iso_num":116,"iso_alfa2":"KH","iso_alfa3":"KHM","gentilicio":"Camboyano","demonym":"Cambodian",flag:"&#127472&#127469"},
{"pais":"Camerún","country":"Cameroon","iso_num":120,"iso_alfa2":"CM","iso_alfa3":"CMR","gentilicio":"Camerunés","demonym":"Cameroonian",flag:"&#127464&#127474"},
{"pais":"Canadá","country":"Canada","iso_num":124,"iso_alfa2":"CA","iso_alfa3":"CAN","gentilicio":"Canadiense","demonym":"Canadian",flag:"&#127464&#127462"},
{"pais":"Chad","country":"Chad","iso_num":148,"iso_alfa2":"TD","iso_alfa3":"TCD","gentilicio":"Chadiano","demonym":"Chadian",flag:"&#127481&#127465"},
{"pais":"Chile","country":"Chile","iso_num":152,"iso_alfa2":"CL","iso_alfa3":"CHL","gentilicio":"Chileno","demonym":"Chilean",flag:"&#127464&#127473"},
{"pais":"China","country":"China","iso_num":156,"iso_alfa2":"CN","iso_alfa3":"CHN","gentilicio":"Chino","demonym":"Chinese",flag:"&#127464&#127475"},
{"pais":"Chipre","country":"Chipre","iso_num":196,"iso_alfa2":"CY","iso_alfa3":"CYP","gentilicio":"Chipriota","demonym":"Chipriot",flag:"&#127464&#127486"},
{"pais":"Ciudad del Vaticano","country":"Vatican City","iso_num":336,"iso_alfa2":"VA","iso_alfa3":"VAT","gentilicio":"Vaticano","demonym":"Vatican",flag:"&#127483&#127462"},
{"pais":"Colombia","country":"Colombia","iso_num":170,"iso_alfa2":"CO","iso_alfa3":"COL","gentilicio":"Colombiano","demonym":"Colombian",flag:"&#127464&#127476"},
{"pais":"Comoros","country":"Comoros","iso_num":174,"iso_alfa2":"KM","iso_alfa3":"COM","gentilicio":"Comorense","demonym":"Comorian",flag:"&#127472&#127474"},
{"pais":"Congo","country":"Congo","iso_num":178,"iso_alfa2":"CG","iso_alfa3":"COG","gentilicio":"Congoleño","demonym":"Congolese",flag:"&#127464&#127465"},
{"pais":"Corea del Norte","country":"Corea del Norte","iso_num":408,"iso_alfa2":"KP","iso_alfa3":"PRK","gentilicio":"Coreano","demonym":"Korean",flag:"&#127472&#127477"},
{"pais":"Corea del Sur","country":"Corea del Sur","iso_num":410,"iso_alfa2":"KR","iso_alfa3":"KOR","gentilicio":"Coreano","demonym":"Korean",flag:"&#127472&#127479"},
{"pais":"Costa de Marfil","country":"Costa de Marfil","iso_num":384,"iso_alfa2":"CI","iso_alfa3":"CIV","gentilicio":"Marfileño","demonym":"Ivorian",flag:"&#127464&#127470"},
{"pais":"Costa Rica","country":"Costa Rica","iso_num":188,"iso_alfa2":"CR","iso_alfa3":"CRI","gentilicio":"Costaricense","demonym":"Costa Rican",flag:"&#127464&#127479"},
{"pais":"Croacia","country":"Croatia","iso_num":191,"iso_alfa2":"HR","iso_alfa3":"HRV","gentilicio":"Croata","demonym":"Croatian",flag:"&#127469&#127479"},
{"pais":"Cuba","country":"Cuba","iso_num":192,"iso_alfa2":"CU","iso_alfa3":"CUB","gentilicio":"Cubano","demonym":"Cuban",flag:"&#127464&#127482"},
{"pais":"Dinamarca","country":"Denmark","iso_num":208,"iso_alfa2":"DK","iso_alfa3":"DNK","gentilicio":"Danés","demonym":"Danish",flag:"&#127465&#127472"},
{"pais":"Domínica","country":"Dominica","iso_num":212,"iso_alfa2":"DM","iso_alfa3":"DMA","gentilicio":"Dominicano","demonym":"Dominican",flag:"&#127465&#127474"},
{"pais":"Ecuador","country":"Ecuador","iso_num":218,"iso_alfa2":"EC","iso_alfa3":"ECU","gentilicio":"Ecuatoriano","demonym":"Ecuadorean",flag:"&#127466&#127464"},
{"pais":"Egipto","country":"Egypt","iso_num":818,"iso_alfa2":"EG","iso_alfa3":"EGY","gentilicio":"Egipcio","demonym":"Egyptian",flag:"&#127466&#127468"},
{"pais":"El Salvador","country":"El Salvador","iso_num":222,"iso_alfa2":"SV","iso_alfa3":"SLV","gentilicio":"Salvadoreño","demonym":"Salvadoran",flag:"&#127480&#127483"},
{"pais":"Emiratos Árabes Unidos","country":"United Emirates","iso_num":784,"iso_alfa2":"AE","iso_alfa3":"ARE","gentilicio":"Emiratí","demonym":"Emirati",flag:"&#127462&#127466"},
{"pais":"Emiratos Árabes Unidos","country":"UAE","iso_num":784,"iso_alfa2":"AE","iso_alfa3":"ARE","gentilicio":"Emiratí","demonym":"Emirati",flag:"&#127462&#127466"},
{"pais":"Eritrea","country":"Eritrea","iso_num":232,"iso_alfa2":"ER","iso_alfa3":"ERI","gentilicio":"Eritreo","demonym":"Eritrean",flag:"&#127466&#127479"},
{"pais":"Eslovaquia","country":"Slovakia","iso_num":703,"iso_alfa2":"SK","iso_alfa3":"SVK","gentilicio":"Eslovaco","demonym":"Slovakian",flag:"&#127480&#127472"},
{"pais":"Eslovenia","country":"Slovenia","iso_num":705,"iso_alfa2":"SI","iso_alfa3":"SVN","gentilicio":"Esloveno","demonym":"Slovenian",flag:"&#127480&#127470"},
{"pais":"España","country":"Spain","iso_num":724,"iso_alfa2":"ES","iso_alfa3":"ESP","gentilicio":"Español","demonym":"Spanish",flag:"&#127466&#127480"},
{"pais":"Estados Unidos de América","country":"USA","iso_num":840,"iso_alfa2":"US","iso_alfa3":"USA","gentilicio":"Estadounidense","demonym":"American",flag:"&#127482&#127480"},
{"pais":"Estados Unidos de América","country":"United States","iso_num":840,"iso_alfa2":"US","iso_alfa3":"USA","gentilicio":"Estadounidense","demonym":"American",flag:"&#127482&#127480"},
{"pais":"Estonia","country":"Estonia","iso_num":233,"iso_alfa2":"EE","iso_alfa3":"EST","gentilicio":"Estonio","demonym":"Estonian",flag:"&#127466&#127466"},
{"pais":"Etiopía","country":"Ethiopia","iso_num":231,"iso_alfa2":"ET","iso_alfa3":"ETH","gentilicio":"Etíope","demonym":"Ethiopian",flag:"&#127466&#127481"},
{"pais":"Fiji","country":"Fiji","iso_num":242,"iso_alfa2":"FJ","iso_alfa3":"FJI","gentilicio":"Fiyeano","demonym":"Fijean",flag:"&#127467&#127471"},
{"pais":"Filipinas","country":"Philipines","iso_num":608,"iso_alfa2":"PH","iso_alfa3":"PHL","gentilicio":"Filipino","demonym":"Filipino",flag:"&#127477&#127469"},
{"pais":"Finlandia","country":"Finland","iso_num":246,"iso_alfa2":"FI","iso_alfa3":"FIN","gentilicio":"Finlandés","demonym":"Finnish",flag:"&#127467&#127470"},
{"pais":"Francia","country":"France","iso_num":250,"iso_alfa2":"FR","iso_alfa3":"FRA","gentilicio":"Francés","demonym":"French",flag:"&#127467&#127479"},
{"pais":"Gabón","country":"Gaon","iso_num":266,"iso_alfa2":"GA","iso_alfa3":"GAB","gentilicio":"Gabonés","demonym":"Gabonese",flag:"&#127468&#127462"},
{"pais":"Gambia","country":"Gambia","iso_num":270,"iso_alfa2":"GM","iso_alfa3":"GMB","gentilicio":"Gambio","demonym":"Gambian",flag:"&#127468&#127474"},
{"pais":"Georgia","country":"Georgia","iso_num":268,"iso_alfa2":"GE","iso_alfa3":"GEO","gentilicio":"Gerogiano","demonym":"Georgian",flag:"&#127468&#127466"},
{"pais":"Georgia del Sur e Islas Sandwich del Sur","country":"Georgia del Sur e Islas Sandwich del Sur","iso_num":239,"iso_alfa2":"GS","iso_alfa3":"SGS","gentilicio":"","demonym":"Georgia del Sur e Islas Sandwich del Sur",flag:"&#127468&#127480"},
{"pais":"Ghana","country":"Ghana","iso_num":288,"iso_alfa2":"GH","iso_alfa3":"GHA","gentilicio":"Ghanense","demonym":"Ghanaian",flag:"&#127468&#127469"},
{"pais":"Gibraltar","country":"Gibraltar","iso_num":292,"iso_alfa2":"GI","iso_alfa3":"GIB","gentilicio":"Gibraltarense","demonym":"Gibraltarian",flag:"&#127468&#127470"},
{"pais":"Granada","country":"Grenade","iso_num":308,"iso_alfa2":"GD","iso_alfa3":"GRD","gentilicio":"Granadés","demonym":"Grenadian",flag:"&#127468&#127465"},
{"pais":"Grecia","country":"Greece","iso_num":300,"iso_alfa2":"GR","iso_alfa3":"GRC","gentilicio":"Griego","demonym":"Greek",flag:"&#127468&#127479"},
{"pais":"Groenlandia","country":"Greenland","iso_num":304,"iso_alfa2":"GL","iso_alfa3":"GRL","gentilicio":"Groenlandés","demonym":"Greenlander",flag:"&#127468&#127473"},
{"pais":"Guadalupe","country":"Guadalupe","iso_num":312,"iso_alfa2":"GP","iso_alfa3":"GLP","gentilicio":"Guadalupeño","demonym":"Guadeloupean",flag:"&#127468&#127477"},
{"pais":"Guam","country":"Guam","iso_num":316,"iso_alfa2":"GU","iso_alfa3":"GUM","gentilicio":"Guameño","demonym":"Guamanian",flag:"&#127468&#127482"},
{"pais":"Guatemala","country":"Guatemala","iso_num":320,"iso_alfa2":"GT","iso_alfa3":"GTM","gentilicio":"Guatemalteco","demonym":"Guatemalan",flag:"&#127468&#127481"},
{"pais":"Guayana","country":"Guyana","iso_num":328,"iso_alfa2":"GY","iso_alfa3":"GUY","gentilicio":"Guyano","demonym":"Guyanian",flag:"&#127468&#127486"},
{"pais":"Guayana Francesa","country":"Guayana Francesa","iso_num":254,"iso_alfa2":"GF","iso_alfa3":"GUF","gentilicio":"Guyano","demonym":"Guyanese",flag:"&#127468&#127467"},
{"pais":"Guernsey","country":"Guernsey","iso_num":831,"iso_alfa2":"GG","iso_alfa3":"GGY","gentilicio":"Guernseyés","demonym":"Guernseyman",flag:"&#127468&#127468"},
{"pais":"Guinea","country":"Guinea","iso_num":324,"iso_alfa2":"GN","iso_alfa3":"GIN","gentilicio":"Guineo","demonym":"Guinean",flag:"&#127468&#127475"},
{"pais":"Guinea Ecuatorial","country":"Guinea Ecuatorial","iso_num":226,"iso_alfa2":"GQ","iso_alfa3":"GNQ","gentilicio":"Guineo","demonym":"Guinean",flag:"&#127468&#127478"},
{"pais":"Guinea-Bissau","country":"Guinea-Bissau","iso_num":624,"iso_alfa2":"GW","iso_alfa3":"GNB","gentilicio":"Guineo","demonym":"Guinea-Bissauan",flag:"&#127468&#127484"},
{"pais":"Haití","country":"Haití","iso_num":332,"iso_alfa2":"HT","iso_alfa3":"HTI","gentilicio":"Haitiano","demonym":"Haitian",flag:"&#127469&#127481"},
{"pais":"Honduras","country":"Honduras","iso_num":340,"iso_alfa2":"HN","iso_alfa3":"HND","gentilicio":"Hondureño","demonym":"Honduran",flag:"&#127469&#127475"},
{"pais":"Hong Kong","country":"Hong Kong","iso_num":344,"iso_alfa2":"HK","iso_alfa3":"HKG","gentilicio":"Hongkonés","demonym":"Hongkongers",flag:"&#127469&#127472"},
{"pais":"Hungría","country":"Hungary","iso_num":348,"iso_alfa2":"HU","iso_alfa3":"HUN","gentilicio":"Húngaro","demonym":"Hungarian",flag:"&#127469&#127482"},
{"pais":"India","country":"India","iso_num":356,"iso_alfa2":"IN","iso_alfa3":"IND","gentilicio":"Indio","demonym":"Indian",flag:"&#127470&#127475"},
{"pais":"Indonesia","country":"Indonesia","iso_num":360,"iso_alfa2":"ID","iso_alfa3":"IDN","gentilicio":"Indonesio","demonym":"Indonesian",flag:"&#127470&#127465"},
{"pais":"Irak","country":"Irak","iso_num":368,"iso_alfa2":"IQ","iso_alfa3":"IRQ","gentilicio":"Iraquí","demonym":"Iraqi",flag:"&#127470&#127478"},
{"pais":"Irán","country":"Iran","iso_num":364,"iso_alfa2":"IR","iso_alfa3":"IRN","gentilicio":"Inraí","demonym":"Iranian",flag:"&#127470&#127479"},
{"pais":"Irlanda","country":"Ireland","iso_num":372,"iso_alfa2":"IE","iso_alfa3":"IRL","gentilicio":"Irlandés","demonym":"Irish",flag:"&#127470&#127466"},
{"pais":"Isla Bouvet","country":"Isla Bouvet","iso_num":74,"iso_alfa2":"BV","iso_alfa3":"BVT","gentilicio":"-","demonym":"-",flag:"&#127463&#127483"},
{"pais":"Isla de Man","country":"Isle of Man","iso_num":833,"iso_alfa2":"IM","iso_alfa3":"IMN","gentilicio":"-","demonym":"-",flag:"&#127470&#127474"},
{"pais":"Islandia","country":"Iceland","iso_num":352,"iso_alfa2":"IS","iso_alfa3":"ISL","gentilicio":"Islandés","demonym":"Icelander",flag:"&#127470&#127480"},
{"pais":"Islas Áland","country":"Islas Áland","iso_num":248,"iso_alfa2":"AX","iso_alfa3":"ALA","gentilicio":"-","demonym":"-",flag:"&#127462&#127485"},
{"pais":"Islas Canarias","country":"Canary Islands","iso_num":0,"iso_alfa2":"IC","iso_alfa3":"ICA","gentilicio":"Canario","demonym":"Canarian",flag:"&#127470&#127464"},
{"pais":"Islas Caimán","country":"Cayman Islands","iso_num":136,"iso_alfa2":"KY","iso_alfa3":"CYM","gentilicio":"-","demonym":"-",flag:"&#127472&#127486"},
{"pais":"Islas Christmas","country":"Christmas Islands","iso_num":162,"iso_alfa2":"CX","iso_alfa3":"CXR","gentilicio":"-","demonym":"-",flag:"&#127464&#127485"},
{"pais":"Islas Cocos","country":"Cocos Islands","iso_num":166,"iso_alfa2":"CC","iso_alfa3":"CCK","gentilicio":"-","demonym":"-",flag:"&#127464&#127464"},
{"pais":"Islas Cook","country":"Cook Islands","iso_num":184,"iso_alfa2":"CK","iso_alfa3":"COK","gentilicio":"-","demonym":"-",flag:"&#127464&#127472"},
{"pais":"Islas Faroe","country":"Faroe Islands","iso_num":234,"iso_alfa2":"FO","iso_alfa3":"FRO","gentilicio":"-","demonym":"-",flag:"&#127467&#127476"},
{"pais":"Islas Heard y McDonald","country":"Islas Heard y McDonald","iso_num":334,"iso_alfa2":"HM","iso_alfa3":"HMD","gentilicio":"-","demonym":"-",flag:"&#127469&#127474"},
{"pais":"Islas Malvinas","country":"Islas Malvinas","iso_num":238,"iso_alfa2":"FK","iso_alfa3":"KLK","gentilicio":"-","demonym":"-",flag:"&#127462&#127479"},
{"pais":"Islas Marshall","country":"Islas Marshall","iso_num":584,"iso_alfa2":"MH","iso_alfa3":"MHL","gentilicio":"-","demonym":"-",flag:"&#127474&#127469"},
{"pais":"Islas Norkfolk","country":"Islas Norkfolk","iso_num":574,"iso_alfa2":"NF","iso_alfa3":"NFK","gentilicio":"-","demonym":"-",flag:"&#127475&#127467"},
{"pais":"Islas Palaos","country":"Palau Islands","iso_num":585,"iso_alfa2":"PW","iso_alfa3":"PLW","gentilicio":"-","demonym":"-",flag:"&#127477&#127484"},
{"pais":"Islas Pitcairn","country":"Islas Pitcairn","iso_num":612,"iso_alfa2":"PN","iso_alfa3":"PCN","gentilicio":"-","demonym":"-",flag:"&#127477&#127475"},
{"pais":"Islas Solomón","country":"Solomon Islands","iso_num":90,"iso_alfa2":"SB","iso_alfa3":"SLB","gentilicio":"-","demonym":"-",flag:"&#127480&#127463"},
{"pais":"Islas Svalbard y Jan Mayen","country":"Islas Svalbard y Jan Mayen","iso_num":744,"iso_alfa2":"SJ","iso_alfa3":"SJM","gentilicio":"-","demonym":"-",flag:"&#127480&#127471"},
{"pais":"Islas Turcas y Caicos","country":"Islas Turcas y Caicos","iso_num":796,"iso_alfa2":"TC","iso_alfa3":"TCA","gentilicio":"-","demonym":"-",flag:"&nbsp;"},
{"pais":"Islas Vírgenes Británicas","country":"Islas Vírgenes Británicas","iso_num":92,"iso_alfa2":"VG","iso_alfa3":"VGB","gentilicio":"-","demonym":"-",flag:"&#127483&#127468"},
{"pais":"Islas Vírgenes de los Estados Unidos de América","country":"Islas Vírgenes de los Estados Unidos de América","iso_num":850,"iso_alfa2":"VI","iso_alfa3":"VIR","gentilicio":"-","demonym":"-",flag:"&#127483&#127470"},
{"pais":"Israel","country":"Israel","iso_num":376,"iso_alfa2":"IL","iso_alfa3":"ISR","gentilicio":"Israelí","demonym":"Israeli",flag:"&#127470&#127473"},
{"pais":"Italia","country":"Italy","iso_num":380,"iso_alfa2":"IT","iso_alfa3":"ITA","gentilicio":"Italiano","demonym":"Italian",flag:"&#127470&#127481"},
{"pais":"Jamaica","country":"Jamaica","iso_num":388,"iso_alfa2":"JM","iso_alfa3":"JAM","gentilicio":"Jamaiquino","demonym":"Jamaican",flag:"&#127471&#127474"},
{"pais":"Japón","country":"Japan","iso_num":392,"iso_alfa2":"JP","iso_alfa3":"JPN","gentilicio":"Japonés","demonym":"Japanese",flag:"&#127471&#127477"},
{"pais":"Jersey","country":"Jersey","iso_num":832,"iso_alfa2":"JE","iso_alfa3":"JEY","gentilicio":"Jerseyés","demonym":"Jerseyman",flag:"&#127471&#127466"},
{"pais":"Jordania","country":"Jordania","iso_num":400,"iso_alfa2":"JO","iso_alfa3":"JOR","gentilicio":"Jordano","demonym":"Jordanian",flag:"&#127471&#127476"},
{"pais":"Kazajstán","country":"Kazajstán","iso_num":398,"iso_alfa2":"KZ","iso_alfa3":"KAZ","gentilicio":"Kazakhstaní","demonym":"Kazakhstani",flag:"&#127472&#127487"},
{"pais":"Kenia","country":"Kenia","iso_num":404,"iso_alfa2":"KE","iso_alfa3":"KEN","gentilicio":"Keniano","demonym":"Kenyan",flag:"&#127472&#127466"},
{"pais":"Kirguistán","country":"Kirguistan","iso_num":417,"iso_alfa2":"KG","iso_alfa3":"KGZ","gentilicio":"Kirguistanés","demonym":"Kirguistian",flag:"&#127472&#127468"},
{"pais":"Kiribati","country":"Kiribati","iso_num":296,"iso_alfa2":"KI","iso_alfa3":"KIR","gentilicio":"Kiribatí","demonym":"I-Kiribati",flag:"&#127472&#127470"},
{"pais":"Kuwait","country":"Kuwait","iso_num":414,"iso_alfa2":"KW","iso_alfa3":"KWT","gentilicio":"Kuwaití","demonym":"Kuwaiti",flag:"&#127472&#127484"},
{"pais":"Laos","country":"Laos","iso_num":418,"iso_alfa2":"LA","iso_alfa3":"LAO","gentilicio":"Laosiano","demonym":"Laotian",flag:"&#127473&#127462"},
{"pais":"Lesoto","country":"Lesotho","iso_num":426,"iso_alfa2":"LS","iso_alfa3":"LSO","gentilicio":"Lesotense​","demonym":"Mosotho",flag:"&#127473&#127480"},
{"pais":"Letonia","country":"Letonia","iso_num":428,"iso_alfa2":"LV","iso_alfa3":"LVA","gentilicio":"Letonio","demonym":"Letonian",flag:"&nbsp;"},
{"pais":"Líbano","country":"Líbano","iso_num":422,"iso_alfa2":"LB","iso_alfa3":"LBN","gentilicio":"Libanés","demonym":"Lebanese",flag:"&#127473&#127463"},
{"pais":"Liberia","country":"Liberia","iso_num":430,"iso_alfa2":"LR","iso_alfa3":"LBR","gentilicio":"Leberiano","demonym":"Liberian",flag:"&#127473&#127479"},
{"pais":"Libia","country":"Lybia","iso_num":434,"iso_alfa2":"LY","iso_alfa3":"LBY","gentilicio":"Libio","demonym":"Libyan",flag:"&#127473&#127486"},
{"pais":"Liechtenstein","country":"Liechtenstein","iso_num":438,"iso_alfa2":"LI","iso_alfa3":"LIE","gentilicio":"Liechtensteiniano","demonym":"Liechtensteiner",flag:"&#127473&#127470"},
{"pais":"Lituania","country":"Lituania","iso_num":440,"iso_alfa2":"LT","iso_alfa3":"LTU","gentilicio":"Lituano","demonym":"Lithuanian",flag:"&#127473&#127481"},
{"pais":"Luxemburgo","country":"Luxembrug","iso_num":442,"iso_alfa2":"LU","iso_alfa3":"LUX","gentilicio":"Luxemburgués","demonym":"Luxembourger",flag:"&#127473&#127482"},
{"pais":"Macao","country":"Macao","iso_num":446,"iso_alfa2":"MO","iso_alfa3":"MAC","gentilicio":"Macaense","demonym":"Macanese",flag:"&#127474&#127472"},
{"pais":"Macedonia","country":"Macedonia","iso_num":807,"iso_alfa2":"MK","iso_alfa3":"MKD","gentilicio":"Macedonio","demonym":"Macedonian",flag:"&#127474&#127468"},
{"pais":"Madagascar","country":"Madagascar","iso_num":450,"iso_alfa2":"MG","iso_alfa3":"MDG","gentilicio":"Malgache","demonym":"Malagasy",flag:"&nbsp;"},
{"pais":"Malasia","country":"Malaysia","iso_num":458,"iso_alfa2":"MY","iso_alfa3":"MYS","gentilicio":"Malayo","demonym":"Malaysian",flag:"&#127474&#127486"},
{"pais":"Malawi","country":"Malawi","iso_num":454,"iso_alfa2":"MW","iso_alfa3":"MWI","gentilicio":"Malauí","demonym":"Malawian",flag:"&#127474&#127484"},
{"pais":"Maldivas","country":"Maldivas","iso_num":462,"iso_alfa2":"MV","iso_alfa3":"MDV","gentilicio":"Maldivo","demonym":"Maldivan",flag:"&#127474&#127483"},
{"pais":"Mali","country":"Mali","iso_num":466,"iso_alfa2":"ML","iso_alfa3":"MLI","gentilicio":"Maliense","demonym":"Malian",flag:"&#127474&#127473"},
{"pais":"Malta","country":"Malta","iso_num":470,"iso_alfa2":"MT","iso_alfa3":"MLT","gentilicio":"Maltés","demonym":"Maltese",flag:"&#127474&#127481"},
{"pais":"Marruecos","country":"Morocco","iso_num":504,"iso_alfa2":"MA","iso_alfa3":"MAR","gentilicio":"Marroquí","demonym":"Moroccan",flag:"&#127474&#127462"},
{"pais":"Martinica","country":"Martinica","iso_num":474,"iso_alfa2":"MQ","iso_alfa3":"MTQ","gentilicio":"Martinicense","demonym":"Martican",flag:"&#127474&#127478"},
{"pais":"Mauricio","country":"Mauricio","iso_num":480,"iso_alfa2":"MU","iso_alfa3":"MUS","gentilicio":"Mauriciano","demonym":"Mauritian",flag:"&#127474&#127482"},
{"pais":"Mauritania","country":"Mauritania","iso_num":478,"iso_alfa2":"MR","iso_alfa3":"MRT","gentilicio":"Mauritano","demonym":"Mauritanian",flag:"&#127474&#127479"},
{"pais":"Mayotte","country":"Mayotte","iso_num":175,"iso_alfa2":"YT","iso_alfa3":"MYT","gentilicio":"Mayotense","demonym":"Mayotian",flag:"&#127486&#127481"},
{"pais":"México","country":"Mexico","iso_num":484,"iso_alfa2":"MX","iso_alfa3":"MEX","gentilicio":"Mexicano","demonym":"Mexican",flag:"&#127474&#127485"},
{"pais":"Micronesia","country":"Micronesia","iso_num":583,"iso_alfa2":"FM","iso_alfa3":"FSM","gentilicio":"Micronesio","demonym":"Micronesian",flag:"&#127467&#127474"},
{"pais":"Moldova","country":"Moldova","iso_num":498,"iso_alfa2":"MD","iso_alfa3":"MDA","gentilicio":"Moldoviano","demonym":"Moldovan",flag:"&#127474&#127465"},
{"pais":"Mónaco","country":"Monaco","iso_num":492,"iso_alfa2":"MC","iso_alfa3":"MCO","gentilicio":"Monegasco","demonym":"Monegasque",flag:"&#127474&#127464"},
{"pais":"Mongolia","country":"Mongolia","iso_num":496,"iso_alfa2":"MN","iso_alfa3":"MNG","gentilicio":"Mongol","demonym":"Mongolian",flag:"&#127474&#127475"},
{"pais":"Montenegro","country":"Montenegro","iso_num":499,"iso_alfa2":"ME","iso_alfa3":"MNE","gentilicio":"Montenegrino","demonym":"Montenegrin",flag:"&#127474&#127466"},
{"pais":"Montserrat","country":"Montserrat","iso_num":500,"iso_alfa2":"MS","iso_alfa3":"MSR","gentilicio":"Montserratense","demonym":"Montserratian",flag:"&#127474&#127480"},
{"pais":"Mozambique","country":"Mozambique","iso_num":508,"iso_alfa2":"MZ","iso_alfa3":"MOZ","gentilicio":"Mozambiqueño","demonym":"Mozambican",flag:"&#127474&#127487"},
{"pais":"Myanmar","country":"Myanmar","iso_num":104,"iso_alfa2":"MM","iso_alfa3":"MMR","gentilicio":"Myanmarense","demonym":"Myanmarese",flag:"&#127474&#127474"},
{"pais":"Namibia","country":"Namibia","iso_num":516,"iso_alfa2":"NA","iso_alfa3":"NAM","gentilicio":"Namibio","demonym":"Namibian",flag:"&#127475&#127462"},
{"pais":"Nauru","country":"Nauru","iso_num":520,"iso_alfa2":"NR","iso_alfa3":"NRU","gentilicio":"Nauruano","demonym":"Nauruan",flag:"&#127475&#127479"},
{"pais":"Nepal","country":"Nepal","iso_num":524,"iso_alfa2":"NP","iso_alfa3":"NPL","gentilicio":"Nepalés","demonym":"Nepalese",flag:"&#127475&#127477"},
{"pais":"Nicaragua","country":"Nicaragua","iso_num":558,"iso_alfa2":"NI","iso_alfa3":"NIC","gentilicio":"Nicaragüense","demonym":"Nicaraguan",flag:"&#127475&#127470"},
{"pais":"Níger","country":"Níger","iso_num":562,"iso_alfa2":"NE","iso_alfa3":"NER","gentilicio":"Nigerino","demonym":"Nigerien",flag:"&#127475&#127466"},
{"pais":"Nigeria","country":"Nigeria","iso_num":566,"iso_alfa2":"NG","iso_alfa3":"NGA","gentilicio":"Nigeriano","demonym":"Nigerian",flag:"&#127475&#127468"},
{"pais":"Niue","country":"Niue","iso_num":570,"iso_alfa2":"NU","iso_alfa3":"NIU","gentilicio":"Niueño","demonym":"Niuenian",flag:"&#127475&#127482"},
{"pais":"Noruega","country":"Noruega","iso_num":578,"iso_alfa2":"NO","iso_alfa3":"NOR","gentilicio":"Noruego","demonym":"Norwegian",flag:"&#127475&#127476"},
{"pais":"Nueva Caledonia","country":"New Caledonia","iso_num":540,"iso_alfa2":"NC","iso_alfa3":"NCL","gentilicio":"Nuevacaledonense","demonym":"New Caledoner",flag:"&#127475&#127464"},
{"pais":"Nueva Zelanda","country":"New Zealand","iso_num":554,"iso_alfa2":"NZ","iso_alfa3":"NZL","gentilicio":"Neocelandés","demonym":"New Zealander",flag:"&#127475&#127487"},
{"pais":"Omán","country":"Omán","iso_num":512,"iso_alfa2":"OM","iso_alfa3":"OMN","gentilicio":"Omaní","demonym":"Omani",flag:"&#127476&#127474"},
{"pais":"Países Bajos","country":"Netherlands","iso_num":528,"iso_alfa2":"NL","iso_alfa3":"NLD","gentilicio":"Holandés","demonym":"Dutch",flag:"&#127475&#127473"},
{"pais":"Pakistán","country":"Pakistán","iso_num":586,"iso_alfa2":"PK","iso_alfa3":"PAK","gentilicio":"Pakistaní","demonym":"Pakistani",flag:"&#127477&#127472"},
{"pais":"Palestina","country":"Palestina","iso_num":275,"iso_alfa2":"PS","iso_alfa3":"PSE","gentilicio":"Palestino","demonym":"Palestinian",flag:"&#127477&#127480"},
{"pais":"Panamá","country":"Panamá","iso_num":591,"iso_alfa2":"PA","iso_alfa3":"PAN","gentilicio":"Panameño","demonym":"Panamanian",flag:"&#127477&#127462"},
{"pais":"Papúa Nueva Guinea","country":"Papúa New Guinea","iso_num":598,"iso_alfa2":"PG","iso_alfa3":"PNG","gentilicio":"Papú","demonym":"Papua New Guinean",flag:"&#127477&#127468"},
{"pais":"Paraguay","country":"Paraguay","iso_num":600,"iso_alfa2":"PY","iso_alfa3":"PRY","gentilicio":"Paraguayo","demonym":"Paraguayan",flag:"&#127477&#127486"},
{"pais":"Perú","country":"Perú","iso_num":604,"iso_alfa2":"PE","iso_alfa3":"PER","gentilicio":"Peruano","demonym":"Peruvian",flag:"&#127477&#127466"},
{"pais":"Polinesia Francesa","country":"French Polynesia","iso_num":258,"iso_alfa2":"PF","iso_alfa3":"PYF","gentilicio":"Polinesio","demonym":"Polynesian",flag:"&#127477&#127467"},
{"pais":"Polonia","country":"Poland","iso_num":616,"iso_alfa2":"PL","iso_alfa3":"POL","gentilicio":"Polaco","demonym":"Polish",flag:"&#127477&#127473"},
{"pais":"Portugal","country":"Portugal","iso_num":620,"iso_alfa2":"PT","iso_alfa3":"PRT","gentilicio":"Portugués","demonym":"Portuguese",flag:"&#127477&#127481"},
{"pais":"Puerto Rico","country":"Puerto Rico","iso_num":630,"iso_alfa2":"PR","iso_alfa3":"PRI","gentilicio":"-","demonym":"-",flag:"&#127477&#127479"},
{"pais":"Qatar","country":"Qatar","iso_num":634,"iso_alfa2":"QA","iso_alfa3":"QAT","gentilicio":"Qatarí","demonym":"Qatari",flag:"&#127478&#127462"},
{"pais":"Reino Unido","country":"United Kingdom","iso_num":826,"iso_alfa2":"GB","iso_alfa3":"GBR","gentilicio":"Británico","demonym":"British",flag:"&#127468&#127463;"},
{"pais":"Reino Unido","country":"UK","iso_num":826,"iso_alfa2":"GB","iso_alfa3":"GBR","gentilicio":"Británico","demonym":"British",flag:"&#127468&#127463;"},
{"pais":"República Centro-Africana","country":"República Centro-Africana","iso_num":140,"iso_alfa2":"CF","iso_alfa3":"CAF","gentilicio":"-","demonym":"-",flag:"&#127464&#127467"},
{"pais":"República Checa","country":"República Checa","iso_num":203,"iso_alfa2":"CZ","iso_alfa3":"CZE","gentilicio":"Checo","demonym":"Czech",flag:"&#127464&#127487"},
{"pais":"República Dominicana","country":"República Dominicana","iso_num":214,"iso_alfa2":"DO","iso_alfa3":"DOM","gentilicio":"Dominicano","demonym":"Dominican",flag:"&#127465&#127476"},
{"pais":"Reunión","country":"Reunion","iso_num":638,"iso_alfa2":"RE","iso_alfa3":"REU","gentilicio":"Renunionés","demonym":"Reunionese",flag:"&#127479&#127466"},
{"pais":"Rodesia","country":"Rhodesia","iso_num":0,"iso_alfa2":"RH","iso_alfa3":"RHO","gentilicio":"Rodesiano","demonym":"Rhodesian",flag:"&nbsp;"},
{"pais":"Ruanda","country":"Ruanda","iso_num":646,"iso_alfa2":"RW","iso_alfa3":"RWA","gentilicio":"Ruandés","demonym":"Rwandan",flag:"&#127479&#127484"},
{"pais":"Rumanía","country":"Rumanía","iso_num":642,"iso_alfa2":"RO","iso_alfa3":"ROU","gentilicio":"Rumano","demonym":"Romanian",flag:"&#127479&#127476"},
{"pais":"Rusia","country":"Rusia","iso_num":643,"iso_alfa2":"RU","iso_alfa3":"RUS","gentilicio":"Ruso","demonym":"Russian",flag:"&#127479&#127482"},
{"pais":"Sahara Occidental","country":"Sahara Occidental","iso_num":732,"iso_alfa2":"EH","iso_alfa3":"ESH","gentilicio":"-","demonym":"-",flag:"&#127466&#127469"},
{"pais":"Samoa","country":"Samoa","iso_num":882,"iso_alfa2":"WS","iso_alfa3":"WSM","gentilicio":"Samoano","demonym":"Samoan",flag:"&#127484&#127480"},
{"pais":"Samoa Americana","country":"Samoa Americana","iso_num":16,"iso_alfa2":"AS","iso_alfa3":"ASM","gentilicio":"Samoano","demonym":"Samoan",flag:"&#127462&#127480"},
{"pais":"San Bartolomé","country":"San Bartolomé","iso_num":652,"iso_alfa2":"BL","iso_alfa3":"BLM","gentilicio":"-","demonym":"-",flag:"&#127463&#127473"},
{"pais":"San Cristóbal y Nieves","country":"San Cristóbal y Nieves","iso_num":659,"iso_alfa2":"KN","iso_alfa3":"KNA","gentilicio":"-","demonym":"-",flag:"&#127480&#127474"},
{"pais":"San Marino","country":"San Marino","iso_num":674,"iso_alfa2":"SM","iso_alfa3":"SMR","gentilicio":"","demonym":"Sammarinese",flag:"&#127480&#127474"},
{"pais":"San Pedro y Miquelón","country":"San Pedro y Miquelón","iso_num":666,"iso_alfa2":"PM","iso_alfa3":"SPM","gentilicio":"-","demonym":"-",flag:"&#127477&#127474"},
{"pais":"San Vicente y las Granadinas","country":"San Vicente y las Granadinas","iso_num":670,"iso_alfa2":"VC","iso_alfa3":"VCT","gentilicio":"","demonym":"",flag:"&#127483&#127464"},
{"pais":"Santa Elena","country":"Santa Elena","iso_num":654,"iso_alfa2":"SH","iso_alfa3":"SHN","gentilicio":"-","demonym":"-",flag:"&#127480&#127469"},
{"pais":"Santa Lucía","country":"Santa Lucía","iso_num":662,"iso_alfa2":"LC","iso_alfa3":"LCA","gentilicio":"-","demonym":"-",flag:"&nbsp;"},
{"pais":"Santo Tomé y Príncipe","country":"Sao Tomé e Príncipe","iso_num":678,"iso_alfa2":"ST","iso_alfa3":"STP","gentilicio":"-","demonym":"-",flag:"&#127480&#127481"},
{"pais":"Senegal","country":"Senegal","iso_num":686,"iso_alfa2":"SN","iso_alfa3":"SEN","gentilicio":"Senegalés","demonym":"Senegalese",flag:"&#127480&#127475"},
{"pais":"Serbia y Montenegro","country":"Serbia y Montenegro","iso_num":688,"iso_alfa2":"RS","iso_alfa3":"SRB","gentilicio":"Serbio","demonym":"Serbian",flag:"&#127479&#127480"},
{"pais":"Seychelles","country":"Seychelles","iso_num":690,"iso_alfa2":"SC","iso_alfa3":"SYC","gentilicio":"Seychellense","demonym":"Seychellois",flag:"&#127480&#127464"},
{"pais":"Sierra Leona","country":"Sierra Leona","iso_num":694,"iso_alfa2":"SL","iso_alfa3":"SLE","gentilicio":"Sierraleonés","demonym":"Sierra Leonean",flag:"&#127480&#127473"},
{"pais":"Singapur","country":"Singapore","iso_num":702,"iso_alfa2":"SG","iso_alfa3":"SGP","gentilicio":"Singapurense","demonym":"Singaporean",flag:"&#127480&#127468"},
{"pais":"Siria","country":"Siria","iso_num":760,"iso_alfa2":"SY","iso_alfa3":"SYR","gentilicio":"Sirio","demonym":"Syrian",flag:"&#127480&#127486"},
{"pais":"Somalia","country":"Somalia","iso_num":706,"iso_alfa2":"SO","iso_alfa3":"SOM","gentilicio":"Somalí","demonym":"Somali",flag:"&#127480&#127476"},
{"pais":"Sri Lanka","country":"Sri Lanka","iso_num":144,"iso_alfa2":"LK","iso_alfa3":"LKA","gentilicio":"Esrilanqués","demonym":"Sri Lankan",flag:"&#127473&#127472"},
{"pais":"Suazilandia","country":"Swaziland","iso_num":748,"iso_alfa2":"SZ","iso_alfa3":"SWZ","gentilicio":"Swazi","demonym":"Swazi",flag:"&nbsp;"},
{"pais":"Sudáfrica","country":"South Africa","iso_num":710,"iso_alfa2":"ZA","iso_alfa3":"ZAF","gentilicio":"Sudafricano","demonym":"South African",flag:"&#127487&#127462"},
{"pais":"Sudán","country":"Sudán","iso_num":736,"iso_alfa2":"SD","iso_alfa3":"SDN","gentilicio":"Sudanés","demonym":"Sudanese",flag:"&#127480&#127465"},
{"pais":"Suecia","country":"Suecia","iso_num":752,"iso_alfa2":"SE","iso_alfa3":"SWE","gentilicio":"Sueco","demonym":"Swedish",flag:"&#127480&#127466"},
{"pais":"Suiza","country":"Switzerland","iso_num":756,"iso_alfa2":"CH","iso_alfa3":"CHE","gentilicio":"Suizo","demonym":"Swiss",flag:"&#127464&#127469"},
{"pais":"Surinam","country":"Surinam","iso_num":740,"iso_alfa2":"SR","iso_alfa3":"SUR","gentilicio":"Surinamés","demonym":"Surinamer",flag:"&#127480&#127479"},
{"pais":"Tailandia","country":"Thailandia","iso_num":764,"iso_alfa2":"TH","iso_alfa3":"THA","gentilicio":"Tailandés","demonym":"Thai",flag:"&#127481&#127469"},
{"pais":"Taiwán","country":"Taiwan","iso_num":158,"iso_alfa2":"TW","iso_alfa3":"TWN","gentilicio":"Taiwanés","demonym":"Taiwanese",flag:"&#127481&#127484"},
{"pais":"Tanzania","country":"Tanzania","iso_num":834,"iso_alfa2":"TH","iso_alfa3":"TZA","gentilicio":"Tanzano","demonym":"Tanzanian",flag:"&#127481&#127487"},
{"pais":"Tayikistán","country":"Tajikistán","iso_num":762,"iso_alfa2":"TJ","iso_alfa3":"TJK","gentilicio":"Tayico","demonym":"Tajik",flag:"&#127481&#127471"},
{"pais":"Territorio Británico del Océano Índico","country":"Territorio Británico del Océano Índico","iso_num":86,"iso_alfa2":"IO","iso_alfa3":"IOT","gentilicio":"-","demonym":"-",flag:"&#127470&#127476"},
{"pais":"Territorios Australes Franceses","country":"Territorios Australes Franceses","iso_num":260,"iso_alfa2":"TF","iso_alfa3":"ATF","gentilicio":"-","demonym":"-",flag:"&#127481&#127467"},
{"pais":"Timor-Leste","country":"Timor-Leste","iso_num":626,"iso_alfa2":"TL","iso_alfa3":"TLS","gentilicio":"-","demonym":"-",flag:"&#127481&#127473"},
{"pais":"Togo","country":"Togo","iso_num":768,"iso_alfa2":"TG","iso_alfa3":"TGO","gentilicio":"Togolés","demonym":"Togolese",flag:"&#127481&#127468"},
{"pais":"Tokelau","country":"Tokelau","iso_num":772,"iso_alfa2":"TK","iso_alfa3":"TKL","gentilicio":"-","demonym":"-",flag:"&#127481&#127472"},
{"pais":"Tonga","country":"Tonga","iso_num":776,"iso_alfa2":"TO","iso_alfa3":"TON","gentilicio":"Tongano","demonym":"Tongan",flag:"&#127481&#127476"},
{"pais":"Trinidad y Tobago","country":"Trinidad y Tobago","iso_num":780,"iso_alfa2":"TT","iso_alfa3":"TTO","gentilicio":"Trinidadiense","demonym":"Trinidadian",flag:"&#127481&#127481"},
{"pais":"Túnez","country":"Túnez","iso_num":788,"iso_alfa2":"TN","iso_alfa3":"TUN","gentilicio":"Tunesino","demonym":"Tunisian",flag:"&#127481&#127475"},
{"pais":"Turkmenistán","country":"Turkmenistán","iso_num":795,"iso_alfa2":"TM","iso_alfa3":"TKM","gentilicio":"Turkmenistaní","demonym":"Turkmen",flag:"&#127481&#127474"},
{"pais":"Turquía","country":"Turkey","iso_num":792,"iso_alfa2":"TR","iso_alfa3":"TUR","gentilicio":"Turco","demonym":"Turkish",flag:"&#127481&#127479"},
{"pais":"Tuvalu","country":"Tuvalu","iso_num":798,"iso_alfa2":"TV","iso_alfa3":"TUV","gentilicio":"-","demonym":"-",flag:"&#127481&#127483"},
{"pais":"Ucrania","country":"Ukrania","iso_num":804,"iso_alfa2":"UA","iso_alfa3":"UKR","gentilicio":"Ucraniano","demonym":"Ukrainian",flag:"&#127482&#127462"},
{"pais":"Uganda","country":"Uganda","iso_num":800,"iso_alfa2":"UG","iso_alfa3":"UGA","gentilicio":"Igandés","demonym":"Ugandan",flag:"&#127482&#127468"},
{"pais":"Uruguay","country":"Uruguay","iso_num":858,"iso_alfa2":"UY","iso_alfa3":"URY","gentilicio":"Uruguayo","demonym":"Uruguayan",flag:"&#127482&#127486"},
{"pais":"Uzbekistán","country":"Uzbekistán","iso_num":860,"iso_alfa2":"UZ","iso_alfa3":"UZB","gentilicio":"Uzbekistaní","demonym":"Uzbekistani",flag:"&#127482&#127487"},
{"pais":"Vanuatu","country":"Vanuatu","iso_num":548,"iso_alfa2":"VU","iso_alfa3":"VUT","gentilicio":"Vanuatuano","demonym":"Vanuatuan",flag:"&#127483&#127482"},
{"pais":"Venezuela","country":"Venezuela","iso_num":862,"iso_alfa2":"VE","iso_alfa3":"VEN","gentilicio":"Venezolano","demonym":"Venezuelan",flag:"&#127483&#127466"},
{"pais":"Vietnam","country":"Vietnam","iso_num":704,"iso_alfa2":"VN","iso_alfa3":"VNM","gentilicio":"Vietnamita","demonym":"Vietnami",flag:"&#127483&#127475"},
{"pais":"Wallis y Futuna","country":"Wallis y Futuna","iso_num":876,"iso_alfa2":"WF","iso_alfa3":"WLF","gentilicio":"-","demonym":"-",flag:"&#127484&#127467"},
{"pais":"Yemen","country":"Yemen","iso_num":887,"iso_alfa2":"YE","iso_alfa3":"YEM","gentilicio":"Yemení","demonym":"Yemeni",flag:"&#127486&#127466"},
{"pais":"Yibuti","country":"Djibouti","iso_num":262,"iso_alfa2":"DJ","iso_alfa3":"DJI","gentilicio":"Yibutí","demonym":"Yibuti",flag:"&#127465&#127471"}
];
//------------------------------------------------------------------------------
var getFlagFromDemonymMap = new Map();

export function getFlagFromDemonym(demonym) {

  if (demonym && getFlagFromDemonymMap.has(demonym)) return getFlagFromDemonymMap.get(demonym);

  let country = COUNTRIES.find((item) => item.demonym === demonym);

  let c = country != undefined ? country.iso_alfa2 + '.jpg' : 'none.jpg';

  getFlagFromDemonymMap.set(c);

  return c;

}
//------------------------------------------------------------------------------
var getFlagFromCountryMap = new Map();

export function getFlagFromCountry(iCountry) {

  if (iCountry && getFlagFromCountryMap.has(iCountry)) return getFlagFromCountryMap.get(iCountry);

  let country = COUNTRIES.find((item) => item.country === iCountry);

  let c = country != undefined ? country.iso_alfa2 + '.jpg' : 'none.jpg';

  getFlagFromCountryMap.set(c);

  return c;

}
//------------------------------------------------------------------------------
var getISO3FromDemonymMap = new Map();

export function getISO3FromDemonym(demonym) {

  if (demonym && getFlagFromDemonymMap.has(demonym)) return getISO3FromDemonymMap.get(demonym);

  let country = COUNTRIES.find((item) => item.demonym === demonym);

  let c = country != undefined ? country.iso_alfa3 : '';

  getISO3FromDemonymMap.set(c);

  return c;

}//------------------------------------------------------------------------------
var getPaisFromDemonymMap = new Map();

export function getPaisFromDemonym(demonym) {

  if (demonym && getPaisFromDemonymMap.has(demonym)) return getPaisFromDemonymMap.get(demonym);

  let country = COUNTRIES.find((item) => item.demonym === demonym);

  let c = country != undefined ? country.pais : '';

  getPaisFromDemonymMap.set(c);

  return c;

}
//------------------------------------------------------------------------------
var getPaisFromCountryMap = new Map();

export function getPaisFromCountry(country) {

  if (country && getPaisFromCountryMap.has(country)) return getPaisFromCountryMap.get(country);

  let country2 = COUNTRIES.find((item) => item.country == country);

  let c = country2 != undefined ? country2.pais : '';

  getPaisFromCountryMap.set(c);

  return c;

}
//------------------------------------------------------------------------------
var getFlagBoxFromCountryMap = new Map();

export function getFlagBoxFromCountry(iCountry, iImgPath) {

  if (iCountry && getFlagBoxFromCountryMap.has(iCountry)) return getFlagBoxFromCountryMap.get(iCountry);

  let country = COUNTRIES.find((item) => item.country === iCountry);

  let c = country != undefined ? country.iso_alfa2 + '.jpg' : 'none.jpg';

  let html = `
    <div class="flag-box">
      <img src="${iImgPath + c}" title="${country.pais}"/>
      <span>${country.iso_alfa3}</span>
    </div>
  `;

  getFlagBoxFromCountryMap.set(html);

  return html;

}

//------------------------------------------------------------------------------