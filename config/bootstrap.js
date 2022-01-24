/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs just before your Sails app gets lifted.
 * > Need more flexibility?  You can also do this by creating a hook.
 *
 * For more information on bootstrapping your app, check out:
 * https://sailsjs.com/config/bootstrap
 */

const bcrypt = require('bcryptjs');

module.exports.bootstrap = async function (done) {

  sails.getStatium = function () {
    var stadiums = [
      {
        "id": "1",
        "name": "香港公園體育館",
        "address": "中環紅棉路29號",
        "coord": "22.277260,114.159320",
        "region": "香港",
        "phone": "2521 5072"
      },
      {
        "id": "2",
        "name": "石塘咀體育館",
        "address": "香港皇后大道西470號石塘咀市政大廈5樓",
        "coord": "22.285560,114.136166",
        "region": "香港",
        "phone": "2858 0541"
      },
      {
        "id": "3",
        "name": "上環體育館",
        "address": "上環皇后大道中345號上環市政大廈11樓",
        "coord": "22.286193,114.1497605",
        "region": "香港",
        "phone": "2853 2574"
      },
      {
        "id": "4",
        "name": "士美非路體育館",
        "address": "香港士美非路12 K號士美非路市政大廈4樓",
        "coord": "22.281693631125876, 114.12860703164375",
        "region": "香港",
        "phone": "2855 7321"
      },
      {
        "id": "5",
        "name": "西區公園體育館",
        "address": "西營盤東邊街北18號",
        "coord": "22.29006101552589, 114.1435212610498",
        "region": "香港",
        "phone": "2858 2493"
      },
      {
        "id": "6",
        "name": "柴灣體育館",
        "address": "柴灣怡順街6號",
        "coord": "22.264886827805558, 114.23980728874388",
        "region": "香港",
        "phone": "2897 9144"
      },
      {
        "id": "7",
        "name": "港島東體育館",
        "address": "西灣河鯉景道52號",
        "coord": "22.284687925272625, 114.2222627923066",
        "region": "香港",
        "phone": "2151 4070"
      },
      {
        "id": "8",
        "name": "渣華道體育館",
        "address": "北角渣華道99號渣華道市政大廈3樓",
        "coord": "22.29234939454044, 114.19933722793364",
        "region": "香港",
        "phone": "2516 9419"
      },
      {
        "id": "9",
        "name": "鰂魚涌體育館",
        "address": "鰂魚涌街38號鰂魚涌市政大廈7至8樓",
        "coord": "22.283714203440763, 114.21179019790279",
        "region": "香港",
        "phone": "2562 0374"
      },
      {
        "id": "10",
        "name": "西灣河體育館",
        "address": "西灣河筲箕灣道111號西灣河市政大廈2樓",
        "coord": "22.2824745123459, 114.22275687208459",
        "region": "香港",
        "phone": "2569 7330"
      },
      {
        "id": "11",
        "name": "長洲體育館",
        "address": "長洲醫院路三號",
        "coord": "22.20756643891436, 114.03112261788063",
        "region": "離島",
        "phone": "2981 6285"
      },
      {
        "id": "12",
        "name": "梅窩體育館",
        "address": "大嶼山銀石街9號梅窩市政大廈1樓",
        "coord": "22.267108329163534, 113.99641385540644",
        "region": "新界",
        "phone": "2984 2334"
      },
      {
        "id": "13",
        "name": "坪洲體育館",
        "address": "坪洲寶坪街6號坪洲市政大廈",
        "coord": "22.284808167604055, 114.03792329763557",
        "region": "離島",
        "phone": "2983 1271"
      },
      {
        "id": "14",
        "name": "海傍街體育館",
        "address": "長洲大興堤路2號長洲市政大廈1樓",
        "coord": "22.206722631409434, 114.02843098921159",
        "region": "離島",
        "phone": "2981 5409"
      },
      {
        "id": "15",
        "name": "佛光街體育館",
        "address": "何文田牧愛街18號",
        "coord": "22.314809035063856, 114.1811100104741",
        "region": "九龍",
        "phone": "2712 2652"
      },
      {
        "id": "16",
        "name": "何文田體育館",
        "address": "何文田忠義街1號",
        "coord": "22.3116047401905, 114.1811993638475",
        "region": "九龍",
        "phone": "2762 7837"
      },
      {
        "id": "17",
        "name": "紅磡市政大廈體育館",
        "address": "紅磡馬頭圍道11號紅磡市政大廈3至5樓",
        "coord": "22.307440946662435, 114.1872495107005",
        "region": "九龍",
        "phone": "2765 0586"
      },
      {
        "id": "18",
        "name": "九龍城體育館",
        "address": "九龍城衙前圍道100號九龍城市政大廈3樓",
        "coord": "22.32953145622299, 114.18902944807101",
        "region": "九龍",
        "phone": "2716 1007"
      },
      {
        "id": "19",
        "name": "土瓜灣體育館",
        "address": "土瓜灣下鄉道66號",
        "coord": "22.31889166354584, 114.19028333778297",
        "region": "九龍",
        "phone": "2364 9285"
      },
      {
        "id": "20",
        "name": "長發體育館",
        "address": "青衣長發邨長發商場4樓",
        "coord": "22.36228326153414, 114.10280909777566",
        "region": "新界",
        "phone": "2433 5886"
      },
      {
        "id": "21",
        "name": "楓樹窩體育館",
        "address": "青衣楓樹窩路10號青衣邨第2期",
        "coord": "22.35549286030523, 114.10273766187522",
        "region": "新界",
        "phone": "2433 6523"
      },
      {
        "id": "22",
        "name": "荔景體育館",
        "address": "葵涌麗祖路60號",
        "coord": "22.34977746546282, 114.12768716897943",
        "region": "新界",
        "phone": "2744 5678"
      },
      {
        "id": "23",
        "name": "北葵涌鄧肇堅體育館",
        "address": "葵涌和宜合道292號",
        "coord": "22.373886401541842, 114.1375370692323",
        "region": "新界",
        "phone": "2426 3269"
      },
      {
        "id": "24",
        "name": "林士德體育館",
        "address": "葵涌興芳路176號",
        "coord": "22.361225917091144, 114.12942537202191",
        "region": "新界",
        "phone": "2422 5610"
      },
      {
        "id": "25",
        "name": "大窩口體育館",
        "address": "葵涌大窩口大廈街39號",
        "coord": "22.369984946412092, 114.12496314019937",
        "region": "新界",
        "phone": "2920 2011"
      },
      {
        "id": "26",
        "name": "青衣體育館",
        "address": "青衣青綠街38號青衣市政大廈2樓",
        "coord": "22.35401589747235, 114.10652801359016",
        "region": "新界",
        "phone": "2495 4631"
      },
      {
        "id": "27",
        "name": "振華道體育館",
        "address": "牛頭角振華道50號樂雅苑停車場頂樓",
        "coord": "22.32262474524421, 114.22056446522902",
        "region": "九龍",
        "phone": "2318 1767"
      },
      {
        "id": "28",
        "name": "曉光街體育館",
        "address": "觀塘曉光街2號",
        "coord": "22.31965975878526, 114.22782871427032",
        "region": "九龍",
        "phone": "2347 0384"
      },
      {
        "id": "29",
        "name": "九龍灣體育館",
        "address": "九龍灣啟樂街15號",
        "coord": "22.326874419188524, 114.21148513955205",
        "region": "九龍",
        "phone": "2750 9539"
      },
      {
        "id": "30",
        "name": "藍田(南)體育館",
        "address": "觀塘藍田碧雲道170號",
        "coord": "22.303861428214514, 114.23885021625763",
        "region": "九龍",
        "phone": "2379 9254"
      },
      {
        "id": "31",
        "name": "鯉魚門體育館",
        "address": "油塘鯉魚門徑6號鯉魚門市政大廈2至5樓",
        "coord": "22.29217981539088, 114.23874002963973",
        "region": "九龍",
        "phone": "2349 3954"
      },
      {
        "id": "32",
        "name": "牛頭角道體育館",
        "address": "牛頭角道183號牛頭角市政大廈2至4樓",
        "coord": "22.321480439774582, 114.2163887048196",
        "region": "九龍",
        "phone": "2756 3466"
      },
      {
        "id": "33",
        "name": "瑞和街體育館",
        "address": "觀塘瑞和街9號瑞和街市政大廈8至9樓",
        "coord": "22.31547154875262, 114.22433216806131",
        "region": "九龍",
        "phone": "2797 3350"
      },
      {
        "id": "34",
        "name": "順利邨體育館",
        "address": "觀塘順利邨道33號",
        "coord": "22.330012620155117, 114.22527794204116",
        "region": "九龍",
        "phone": "2951 4136"
      },
      {
        "id": "35",
        "name": "聯和墟體育館",
        "address": "粉嶺聯和墟和滿街9號3樓",
        "coord": "22.500065414862, 114.14463766653215",
        "region": "新界",
        "phone": "2677 5149"
      },
      {
        "id": "36",
        "name": "龍琛路體育館",
        "address": "上水馬會道155號",
        "coord": "22.505022530708548, 114.13062450849812",
        "region": "新界",
        "phone": "2673 4433"
      },
      {
        "id": "37",
        "name": "天平體育館",
        "address": "上水天平邨天平商場3樓",
        "coord": "22.503475160895242, 114.13351527772598",
        "region": "新界",
        "phone": "2673 3699"
      },
      {
        "id": "38",
        "name": "和興體育館",
        "address": "粉嶺和鳴里8號",
        "coord": "22.484641401497687, 114.14322374710584",
        "region": "新界",
        "phone": "2669 7057"
      },
      {
        "id": "39",
        "name": "寶林體育館",
        "address": "將軍澳寶林邨",
        "coord": "22.325852645972407, 114.25523033557413",
        "region": "新界",
        "phone": "2701 5933"
      },
      {
        "id": "40",
        "name": "將軍澳體育館",
        "address": "將軍澳運隆路9號",
        "coord": "22.317394880120506, 114.25955509217181",
        "region": "新界",
        "phone": "2701 2317"
      },
      {
        "id": "41",
        "name": "翠林體育館",
        "address": "將軍澳翠林邨",
        "coord": "22.322193353234546, 114.24954784498532",
        "region": "新界",
        "phone": "2703 1137"
      },
      {
        "id": "42",
        "name": "長沙灣體育館",
        "address": "興華街與長沙灣道交界",
        "coord": "22.338005183400217, 114.15345287431977",
        "region": "九龍",
        "phone": "2741 7287"
      },
      {
        "id": "43",
        "name": "荔枝角公園體育館",
        "address": "荔枝角荔灣道1號",
        "coord": "22.34052233569832, 114.13837485878751",
        "region": "九龍",
        "phone": "2745 2796"
      },
      {
        "id": "44",
        "name": "北河街體育館",
        "address": "深水埗基隆街333號北河街市政大廈5至U6樓",
        "coord": "22.329353643164488, 114.16108622485203",
        "region": "九龍",
        "phone": "2729 1010"
      },
      {
        "id": "45",
        "name": "保安道體育館",
        "address": "深水埗保安道325至329號保安道市政大廈2至3樓",
        "coord": "22.338356269471195, 114.15805974673516",
        "region": "九龍",
        "phone": "2729 4237"
      },
      {
        "id": "46",
        "name": "石硤尾公園體育館",
        "address": "深水埗石硤尾南昌街290號",
        "coord": "22.337212145774174, 114.16959978333777",
        "region": "九龍",
        "phone": "2784 7424"
      },
      {
        "id": "47",
        "name": "恒安體育館",
        "address": "馬鞍山恒安邨恒安商場4樓",
        "coord": "22.41693732508484, 114.22785607997395",
        "region": "新界",
        "phone": "2642 0203"
      },
      {
        "id": "48",
        "name": "顯徑體育館",
        "address": "沙田顯徑邨顯徑商場",
        "coord": "22.363281728524385, 114.17126297179632",
        "region": "新界",
        "phone": "2605 8407"
      },
      {
        "id": "49",
        "name": "馬鞍山體育館",
        "address": "馬鞍山鞍駿街14號",
        "coord": "22.426016539338757, 114.22953658506928",
        "region": "新界",
        "phone": "2631 1597"
      },
      {
        "id": "50",
        "name": "美林體育館",
        "address": "大圍美林邨第3期",
        "coord": "22.379070774586047, 114.17557423677206",
        "region": "新界",
        "phone": "2695 9318"
      },
      {
        "id": "51",
        "name": "源禾路體育館",
        "address": "沙田源禾路4號",
        "coord": "22.382990282081217, 114.19253369862642",
        "region": "新界",
        "phone": "2604 5987"
      },
      {
        "id": "52",
        "name": "香港仔體育館",
        "address": "香港仔大道203號香港仔市政大廈6樓",
        "coord": "22.249333127656627, 114.1544834654801",
        "region": "香港",
        "phone": "2555 8909"
      },
      {
        "id": "53",
        "name": "鴨脷洲體育館",
        "address": "鴨脷洲洪聖街8號鴨脷洲市政大廈1樓",
        "coord": "22.24450213648805, 114.15542749950298",
        "region": "離島",
        "phone": "2554 0832"
      },
      {
        "id": "54",
        "name": "黃竹坑體育館",
        "address": "香港仔黃竹坑道168號",
        "coord": "22.24965083879212, 114.17338874585606",
        "region": "香港",
        "phone": "2553 6663"
      },
      {
        "id": "55",
        "name": "漁光道體育館",
        "address": "香港仔漁光道43號",
        "coord": "22.25044635869624, 114.15693641805174",
        "region": "香港",
        "phone": "2554 9132"
      },
      {
        "id": "56",
        "name": "赤柱體育館",
        "address": "赤柱市場道6號赤柱市政大廈",
        "coord": "22.21906931047038, 114.21187402581202",
        "region": "離島",
        "phone": "2813 5106"
      },
      {
        "id": "57",
        "name": "富亨體育館",
        "address": "大埔富亨邨富亨商場1樓",
        "coord": "22.45807163071662, 114.1712081305247",
        "region": "新界",
        "phone": "2665 2753"
      },
      {
        "id": "58",
        "name": "富善體育館",
        "address": "大埔富善邨多層停車場6樓",
        "coord": "22.453731528564763, 114.17451200740334",
        "region": "新界",
        "phone": "2661 4144"
      },
      {
        "id": "59",
        "name": "大埔墟體育館",
        "address": "大埔鄉事會街8號大埔綜合大樓6樓",
        "coord": "22.446377203280907, 114.16620828087835",
        "region": "新界",
        "phone": "3183 9011"
      },
      {
        "id": "60",
        "name": "大埔體育館",
        "address": "大埔汀太路13號",
        "coord": "22.44636142759726, 114.16619977725539",
        "region": "新界",
        "phone": "2664 7222"
      },
      {
        "id": "61",
        "name": "太和體育館",
        "address": "大埔太和邨太和商場平台",
        "coord": "22.450878535529917, 114.16035521142364",
        "region": "新界",
        "phone": "2656 3398"
      },
      {
        "id": "62",
        "name": "荃景圍體育館",
        "address": "荃灣荃景圍美環街38號",
        "coord": "22.37750265415267, 114.1113563801531",
        "region": "九龍",
        "phone": "2405 6960"
      },
      {
        "id": "63",
        "name": "荃灣西約體育館",
        "address": "荃灣海安路68號",
        "coord": "22.370506308268567, 114.10056703416308",
        "region": "九龍",
        "phone": "2412 0904"
      },
      {
        "id": "64",
        "name": "蕙荃體育館",
        "address": "荃灣廟崗街6號",
        "coord": "22.372144169678712, 114.12225796340766",
        "region": "九龍",
        "phone": "2415 2621"
      },
      {
        "id": "65",
        "name": "楊屋道體育館",
        "address": "荃灣楊屋道45號楊屋道市政大廈4樓",
        "coord": "22.36921189123818, 114.1142441675683",
        "region": "九龍",
        "phone": "2415 4445"
      },
      {
        "id": "66",
        "name": "良田體育館",
        "address": "屯門田景邨多層停車場4樓",
        "coord": "22.40662182439522, 113.96515869507316",
        "region": "新界",
        "phone": "2467 1594"
      },
      {
        "id": "67",
        "name": "大興體育館",
        "address": "屯門青松觀路38號",
        "coord": "22.403292246240255, 113.9732386612035",
        "region": "新界",
        "phone": "2463 1248"
      },
      {
        "id": "68",
        "name": "賽馬會屯門蝴蝶灣體育館",
        "address": "屯門湖山路11號",
        "coord": "22.378626819745385, 113.9646732799533",
        "region": "新界",
        "phone": "2465 7610"
      },
      {
        "id": "69",
        "name": "友愛體育館",
        "address": "屯門興安里3號",
        "coord": "22.385342782197142, 113.97176755344294",
        "region": "新界",
        "phone": "2450 8850"
      },
      {
        "id": "70",
        "name": "港灣道體育館",
        "address": "灣仔港灣道27號",
        "coord": "22.28159772041488, 114.17643529180681",
        "region": "香港",
        "phone": "2827 9684"
      },
      {
        "id": "71",
        "name": "駱克道體育館",
        "address": "灣仔軒尼詩道225號駱克道市政大廈10至12樓",
        "coord": "22.278107464109475, 114.17527306215233",
        "region": "香港",
        "phone": "2879 5521"
      },
      {
        "id": "72",
        "name": "伊利沙伯體育館",
        "address": "灣仔愛群道18號",
        "coord": "22.275181795036605, 114.17897184605388",
        "region": "香港",
        "phone": "2591 1331"
      },
      {
        "id": "73",
        "name": "黃泥涌體育館",
        "address": "跑馬地毓秀街2號黃泥涌市政大廈4字樓",
        "coord": "22.26912614404121, 114.18568000148743",
        "region": "香港",
        "phone": "2891 8438"
      },
      {
        "id": "74",
        "name": "彩虹道體育館",
        "address": "黃大仙彩虹道150號",
        "coord": "22.337072964956736, 114.19646950057917",
        "region": "九龍",
        "phone": "2326 2714"
      },
      {
        "id": "75",
        "name": "竹園體育館",
        "address": "黃大仙竹園道竹園北邨",
        "coord": "22.345526907125098, 114.1935330709889",
        "region": "九龍",
        "phone": "2324 3960"
      },
      {
        "id": "76",
        "name": "東啟德體育館",
        "address": "新蒲崗六合街30號",
        "coord": "22.335802551217327, 114.20063529219075",
        "region": "九龍",
        "phone": "2326 9940"
      },
      {
        "id": "77",
        "name": "摩士公園體育館",
        "address": "黃大仙鳳舞街40號",
        "coord": "22.338320392472504, 114.1900582084706",
        "region": "九龍",
        "phone": "2326 2207"
      },
      {
        "id": "78",
        "name": "牛池灣體育館",
        "address": "清水灣道11號牛池灣市政大廈1樓",
        "coord": "22.334557295638895, 114.20964693696268",
        "region": "九龍",
        "phone": "2327 4915"
      },
      {
        "id": "79",
        "name": "蒲崗村道體育館",
        "address": "黃大仙慈雲山蒲崗村道120號",
        "coord": "22.34553301140625, 114.20160961207658",
        "region": "九龍",
        "phone": "2325 3585"
      },
      {
        "id": "80",
        "name": "界限街體育館",
        "address": "旺角洗衣街200號",
        "coord": "22.326139390203334, 114.1705370507686",
        "region": "九龍",
        "phone": "2380 9751"
      },
      {
        "id": "81",
        "name": "花園街體育館",
        "address": "旺角花園街123A號花園街市政大廈10至13樓",
        "coord": "22.320761271305035, 114.1705644768573",
        "region": "九龍",
        "phone": "2395 1501"
      },
      {
        "id": "82",
        "name": "九龍公園體育館",
        "address": "尖沙咀柯士甸道22號",
        "coord": "22.30178881899185, 114.17040216053391",
        "region": "九龍",
        "phone": "2724 3120"
      },
      {
        "id": "83",
        "name": "官涌體育館",
        "address": "油麻地佐敦寶靈街17號官涌市政大廈5至7樓",
        "coord": "22.304586428974595, 114.16829133656937",
        "region": "九龍",
        "phone": "2302 1275"
      },
      {
        "id": "84",
        "name": "大角咀體育館",
        "address": "大角咀福全街63號大角咀市政大廈5至7樓",
        "coord": "22.32217333589556, 114.16285398145278",
        "region": "九龍",
        "phone": "2393 1084"
      },
      {
        "id": "85",
        "name": "元朗體育館",
        "address": "元朗馬田路52號元朗文化康樂大樓",
        "coord": "22.441280080119434, 114.02361123681435",
        "region": "新界",
        "phone": "2891 9207"
      },
      {
        "id": "86",
        "name": "朗屏體育館",
        "address": "元朗朗屏邨朗屏商場2樓202號",
        "coord": "22.450008558618563, 114.02365685326211",
        "region": "新界",
        "phone": "2475 1444"
      },
      {
        "id": "87",
        "name": "天水圍體育館",
        "address": "天水圍天柏路一號",
        "coord": "22.454995332277377, 114.0065082416004",
        "region": "新界",
        "phone": "2446 4778"
      },
      {
        "id": "88",
        "name": "天瑞體育館",
        "address": "天水圍天瑞路七號",
        "coord": "22.454724419215054, 113.99796612701152",
        "region": "新界",
        "phone": "2446 6609"
      },
      {
        "id": "89",
        "name": "坑口體育館",
        "address": "將軍澳培成路38號西貢將軍澳政府綜合大樓1-3樓",
        "coord": "22.31734527112199, 114.2684895964834",
        "region": "新界",
        "phone": "2623 5928"
      },
      {
        "id": "90",
        "name": "圓洲角體育館",
        "address": "新界沙田銀城街35號",
        "coord": "22.37983562811205, 114.20433209789266",
        "region": "新界",
        "phone": "2509 9108"
      },
      {
        "id": "91",
        "name": "香港單車館",
        "address": "將軍澳寶康路105-107號",
        "coord": "22.313084366877117, 114.26248641851062",
        "region": "新界",
        "phone": "2664 7222"
      }
    ];
    return stadiums;
  };

  sails.getStatiumCoord = function (name) {
    return sails.getStatium().filter(function (item) {
      return item.name == this.name;
    }.bind({ name: name }));
  }

  // Don't forget to trigger `done()` when this bootstrap function's logic is finished.
  // (otherwise your server will never lift, since it's waiting on the bootstrap)
  if (await User.count() == 0) {
    await User.createEach([
      { Username: 'user1', Password: await bcrypt.hash('user123456', 10), role: 'user', ChiName: '用戶1', EngName: 'User1', Email: 'kenny@user.com', Gender: '男', Age: 10, Date: new Date("2011-02-19"), Mobile: "61111111" },
      { Username: 'user2', Password: await bcrypt.hash('user123456', 10), role: 'user', ChiName: '用戶2', EngName: 'User2', Email: 'test@user.com', Gender: '女', Age: 20, Date: new Date("2001-03-14"), Mobile: "94112222" },
      { Username: 'user3', Password: await bcrypt.hash('user123456', 10), role: 'user', ChiName: '用戶3', EngName: 'User3', Email: 'test1@user.com', Gender: '男', Age: 24, Date: new Date("1997-02-14"), Mobile: "57546546" },
      { Username: 'user4', Password: await bcrypt.hash('user123456', 10), role: 'user', ChiName: '用戶4', EngName: 'User4', Email: 'test2@user.com', Gender: '男', Age: 3, Date: new Date("2018-02-19"), Mobile: "69946546" },
      { Username: 'parent1', Password: await bcrypt.hash('user123456', 10), role: 'user', ChiName: '家長1', EngName: 'Parent1', Email: 'parent1@user.com', Gender: '男', Age: 34, Date: new Date("1987-02-14"), Mobile: "94425863" },
      { Username: 'parent2', Password: await bcrypt.hash('user123456', 10), role: 'user', ChiName: '家長2', EngName: 'Parent2', Email: 'parent2@user.com', Gender: '女', Age: 42, Date: new Date("1979-02-14"), Mobile: "64132585" },

      { Username: 'test0', Password: await bcrypt.hash('user123456', 10), role: 'user', ChiName: '測試用戶0', EngName: 'TestUser0', Email: '20209460@life.hkbu.edu.hk', Gender: '男', Age: 30, Date: new Date("1991-02-28"), Mobile: "69941246" },
      { Username: 'test1', Password: await bcrypt.hash('user123456', 10), role: 'user', ChiName: '測試用戶1', EngName: 'TestUser1', Email: '20208170@life.hkbu.edu.hk', Gender: '男', Age: 12, Date: new Date("2009-02-19"), Mobile: "69326545" },
      { Username: 'test2', Password: await bcrypt.hash('user123456', 10), role: 'user', ChiName: '測試用戶2', EngName: 'TestUser2', Email: 'testuser@user.com', Gender: '女', Age: 13, Date: new Date("2008-02-19"), Mobile: "69326646" },
      { Username: 'test3', Password: await bcrypt.hash('user123456', 10), role: 'user', ChiName: '測試用戶3', EngName: 'TestUser3', Email: 'testuser1@user.com', Gender: '男', Age: 14, Date: new Date("2007-02-19"), Mobile: "96326546" },
      { Username: 'test4', Password: await bcrypt.hash('user123456', 10), role: 'user', ChiName: '測試用戶4', EngName: 'TestUser4', Email: 'testuser2@user.com', Gender: '女', Age: 15, Date: new Date("2006-02-19"), Mobile: "52326546" },
      { Username: 'test5', Password: await bcrypt.hash('user123456', 10), role: 'user', ChiName: '測試用戶5', EngName: 'TestUser5', Email: 'testuser3@user.com', Gender: '男', Age: 11, Date: new Date("2010-02-19"), Mobile: "68626546" },
      { Username: 'test6', Password: await bcrypt.hash('user123456', 10), role: 'user', ChiName: '測試用戶6', EngName: 'TestUser6', Email: 'testuser4@user.com', Gender: '男', Age: 10, Date: new Date("2011-02-19"), Mobile: "65386546" },
      { Username: 'test7', Password: await bcrypt.hash('user123456', 10), role: 'user', ChiName: '測試用戶7', EngName: 'TestUser7', Email: 'testuser5@user.com', Gender: '女', Age: 9, Date: new Date("2012-02-19"), Mobile: "69335546" },
      { Username: 'test8', Password: await bcrypt.hash('user123456', 10), role: 'user', ChiName: '測試用戶8', EngName: 'TestUser8', Email: 'testuser6@user.com', Gender: '男', Age: 8, Date: new Date("2013-02-19"), Mobile: "69332146" },
      { Username: 'test9', Password: await bcrypt.hash('user123456', 10), role: 'user', ChiName: '測試用戶9', EngName: 'TestUser9', Email: 'testuser7@user.com', Gender: '女', Age: 7, Date: new Date("2014-03-19"), Mobile: "69535546" },
      { Username: 'test10', Password: await bcrypt.hash('user123456', 10), role: 'user', ChiName: '測試用戶10', EngName: 'TestUser10', Email: 'testuser8@user.com', Gender: '女', Age: 11, Date: new Date("2009-04-19"), Mobile: "69496846" },
      { Username: 'test11', Password: await bcrypt.hash('user123456', 10), role: 'user', ChiName: '測試用戶11', EngName: 'TestUser11', Email: 'testuser9@user.com', Gender: '女', Age: 11, Date: new Date("2009-08-19"), Mobile: "69965546" },
      { Username: 'test12', Password: await bcrypt.hash('user123456', 10), role: 'user', ChiName: '測試用戶12', EngName: 'TestUser12', Email: 'testuser10@user.com', Gender: '男', Age: 11, Date: new Date("2009-11-19"), Mobile: "69436546" },
      { Username: 'test13', Password: await bcrypt.hash('user123456', 10), role: 'user', ChiName: '測試用戶13', EngName: 'TestUser13', Email: 'testuser11@user.com', Gender: '女', Age: 11, Date: new Date("2010-06-19"), Mobile: "65465546" },
      { Username: 'test14', Password: await bcrypt.hash('user123456', 10), role: 'user', ChiName: '測試用戶14', EngName: 'TestUser14', Email: 'testuser12@user.com', Gender: '男', Age: 12, Date: new Date("2008-09-19"), Mobile: "91756546" },
      { Username: 'test15', Password: await bcrypt.hash('user123456', 10), role: 'user', ChiName: '測試用戶15', EngName: 'TestUser15', Email: 'testuser13@user.com', Gender: '女', Age: 13, Date: new Date("2008-01-01"), Mobile: "941366546" },
      { Username: 'test16', Password: await bcrypt.hash('user123456', 10), role: 'user', ChiName: '測試用戶16', EngName: 'TestUser16', Email: 'testuser14@user.com', Gender: '男', Age: 15, Date: new Date("2006-02-19"), Mobile: "81356546" },
      { Username: 'test17', Password: await bcrypt.hash('user123456', 10), role: 'user', ChiName: '測試用戶17', EngName: 'TestUser17', Email: 'testuser15@user.com', Gender: '女', Age: 10, Date: new Date("2011-03-14"), Mobile: "66326546" },
      { Username: 'test18', Password: await bcrypt.hash('user123456', 10), role: 'user', ChiName: '測試用戶18', EngName: 'TestUser18', Email: 'testuser16@user.com', Gender: '男', Age: 13, Date: new Date("2008-01-17"), Mobile: "69356031" },
      
    ]);

  }

  const admin = await User.findOne({ Username: 'admin1' });
  if (!admin) {
    await User.create({ Username: 'admin1', Password: await bcrypt.hash('hkbu123456', 10), role: 'admin', ChiName: '管理員1', EngName: 'Administrator', Email: 'kenny@admin.com', Date: new Date() });
    await User.create({ Username: 'mainAdmin', Password: await bcrypt.hash('hkbu123456', 10), role: 'admin', ChiName: '管理員', EngName: 'Administrator', Email: '17214432@life.hkbu.edu.hk', Date: new Date() });
    //await User.create({ Username: 'admin3', Password: await bcrypt.hash('hkbu123456', 10), role: 'admin', ChiName: '管理員3', EngName: 'Administrator', Email: '172287862@life.hkbu.edu.hk', Date: new Date() });
    await User.create({ Username: 'coach1', Password: await bcrypt.hash('hkbu123456', 10), role: 'coach', ChiName: '陳大文', EngName: 'Coach', Email: 'coach@coach.com', Date: new Date() });
    await User.create({ Username: 'coach2', Password: await bcrypt.hash('hkbu123456', 10), role: 'coach', ChiName: '陳小文', EngName: 'Coach', Email: 'coach2@coach.com', Date: new Date() });
    await Coach.create({ ChiName: '陳大文', EngName: 'Coach', Email: 'coach@coach.com', disciplines: ["技巧體操", "女子競技體操", "彈網訓練", "普及體操"] });
    await Coach.create({ ChiName: '陳小文', EngName: 'Coach', Email: 'coach2@coach.com', disciplines: ["技巧體操", "健美體操", "男子競技體操", "女子競技體操", "藝術體操", "彈網訓練", "普及體操"] });
    const userCoach1 = await User.findOne({ Email: "coach@coach.com" });
    const userCoach2 = await User.findOne({ Email: "coach2@coach.com" });
    const CoachRole1 = await Coach.findOne({ Email: "coach@coach.com" });
    const CoachRole2 = await Coach.findOne({ Email: "coach2@coach.com" });
    await Coach.addToCollection(CoachRole1.id, "user").members(userCoach1.id);
    await Coach.addToCollection(CoachRole2.id, "user").members(userCoach2.id);
  }

  const course = await Course.findOne({ courseID: 'ACRO01' });
  if (!course) {
    await Course.create({ courseID: "ACRO01", startDate: "2021-01-15", endDate: "2021-03-14", category: "技巧體操", level: "L1", weekday: "三", time: "2:00pm - 4:00pm", maxAge: "15", minAge: "6", region: "九龍", stadium: "荔枝角公園體育館", address: "荔枝角荔灣道1號", coord: "22.3406657,114.1382749", space: "", quota: 20, fee: 100, detail: "", dates: "20/1, 27/1, 3/2, 10/2, 17/2, 24/2, 3/3, 10/3", appDeadline: "2021-01-26" });
    await Course.create({ courseID: "GFA01", startDate: "2021-01-15", endDate: "2021-03-14", category: "普及體操", level: "N/A", weekday: ["二", "四"], time: "5:00pm - 7:00pm", maxAge: "", minAge: "3", region: "香港島", stadium: "港島東體育館", address: "西灣河鯉景道52號", coord: "22.2846902,114.2200795", space: "", quota: 15, fee: 200, detail: "", dates: "19/1, 21/1, 26/1, 28/1, 2/2, 4/2, 9/2, 11/2, 16/2, 18/2, 23/2, 25/2, 2/3, 4/3, 9/3, 11/3", appDeadline: "2021-01-26" });
    await Course.create({ courseID: "AER01", startDate: "2021-01-15", endDate: "2021-03-14", category: "健美體操", level: "L2", weekday: ["二", "四"], time: "5:00pm - 7:00pm", maxAge: "15", minAge: "6", region: "香港島", stadium: "港島東體育館", address: "西灣河鯉景道52號", coord: "22.2846902,114.2200795", space: "", quota: 1, fee: 200, detail: "", dates: "19/1, 21/1, 26/1, 28/1, 2/2, 4/2, 9/2, 11/2, 16/2, 18/2, 23/2, 25/2, 2/3, 4/3, 9/3, 11/3", appDeadline: "2021-01-26" });

    await Course.create({ courseID: "AG03", startDate: "2021-04-10", endDate: "2021-06-26", category: "競技體操", level: "L1", weekday: ["六"], time: "3:00pm - 5:00pm", maxAge: "12", minAge: "6", region: "九龍", stadium: "官涌體育館", address: "油麻地佐敦寶靈街17號官涌市政大廈5至7樓", coord: "22.3042514189,114.168337482", space: "", quota: 15, fee: 220, detail: "", dates: "10/4, 17/4, 24/4, 1/5, 8/5, 15/5, 22/5, 29/5, 5/6, 12/6, 19/6, 26/6", appDeadline: "2021-04-24" });
    await Course.create({ courseID: "TRA09", startDate: "2021-04-06", endDate: "2021-05-20", category: "彈網訓練", level: "L3", weekday: ["二", "四"], time: "5:00pm - 7:00pm", maxAge: "25", minAge: "6", region: "香港島", stadium: "伊利沙伯體育館", address: "灣仔愛群道18號", coord: "22.2751585,114.1789085", space: "", quota: 14, fee: 380, detail: "", dates: "6/4, 8/4, 13/4, 15/4, 20/4, 22/4, 27/4, 29/4, 4/5, 6/5, 11/5, 13/5, 18/5, 20/5", appDeadline: "2021-04-13" });
    await Course.create({ courseID: "ACRO04", startDate: "2021-04-07", endDate: "2021-06-23", category: "技巧體操", level: "L1", weekday: "三", time: "7:00pm - 9:00pm", maxAge: "25", minAge: "6", region: "九龍", stadium: "荔枝角公園體育館", address: "荔枝角荔灣道1號", coord: "22.3406657,114.1382749", space: "", quota: 20, fee: 100, detail: "", dates: "7/4, 14/4, 21/4, 28/4, 5/5, 12/5, 19/5, 26/5, 2/6, 9/6, 16/6, 23/6", appDeadline: "2021-04-21" });
    await Course.create({ courseID: "ACRO05", startDate: "2021-04-08", endDate: "2021-06-24", category: "技巧體操", level: "L1", weekday: "四", time: "7:00pm - 9:00pm", maxAge: "25", minAge: "6", region: "九龍", stadium: "荔枝角公園體育館", address: "荔枝角荔灣道1號", coord: "22.3406657,114.1382749", space: "", quota: 20, fee: 180, detail: "", dates: "8/4, 15/4, 22/4, 29/4, 6/5, 13/5, 20/5, 27/5, 3/6, 10/6, 17/6, 24/6", appDeadline: "2021-04-22" });
    await Course.create({ courseID: "AERO01", startDate: "2021-04-04", endDate: "2021-06-27", category: "健美體操", level: "L2", weekday: "日", time: "1:00pm - 3:00pm", maxAge: "15", minAge: "6", region: "新界", stadium: "顯徑體育館", address: "沙田顯徑邨顯徑商場", coord: "22.3788983414,114.175680943", space: "", quota: 20, fee: 280, detail: "", dates: "4/4, 11/4, 18/4, 25/4, 2/5, 9/5, 16/5, 23/5, 30/5, 6/6, 13/6, 20/6, 27/6", appDeadline: "2021-04-18" });
    await Course.create({ courseID: "GFA02", startDate: "2021-04-04", endDate: "2021-05-30", category: "普及體操", level: "N/A", weekday: "日", time: "1:00pm - 3:00pm", maxAge: "", minAge: "3", region: "新界", stadium: "顯徑體育館", address: "沙田顯徑邨顯徑商場", coord: "22.3788983414,114.175680943", space: "", quota: 20, fee: 230, detail: "費用包括學費$150 及公眾責任保險$80", dates: "4/4, 11/4, 18/4, 25/4, 2/5, 9/5, 16/5, 23/5, 30/5", appDeadline: "2021-04-18" });


    const course1 = await Course.findOne({ courseID: "ACRO01" });
    const course2 = await Course.findOne({ courseID: "GFA01" });
    const course3 = await Course.findOne({ courseID: "AER01" });
    const course4 = await Course.findOne({ courseID: "AG03" });
    const course5 = await Course.findOne({ courseID: "TRA09" });
    const course6 = await Course.findOne({ courseID: "ACRO04" });
    const course7 = await Course.findOne({ courseID: "ACRO05" });
    const course8 = await Course.findOne({ courseID: "AERO01" });
    const course9 = await Course.findOne({ courseID: "GFA02" });
    const coach1 = await User.findOne({ Email: "coach@coach.com" });
    const coach2 = await User.findOne({ Email: "coach2@coach.com" });
    const user1 = await User.findOne({ Email: "20208170@life.hkbu.edu.hk" });

    const user2 = await User.findOne({ Email: "testuser@user.com" });
    const user3 = await User.findOne({ Email: "testuser1@user.com" });
    const user4 = await User.findOne({ Email: "testuser2@user.com" });
    const user5 = await User.findOne({ Email: "testuser3@user.com" });
    const user6 = await User.findOne({ Email: "testuser4@user.com" });
    const user7 = await User.findOne({ Email: "testuser5@user.com" });
    const user8 = await User.findOne({ Email: "testuser6@user.com" });
    const user9 = await User.findOne({ Email: "testuser7@user.com" });
    const user10 = await User.findOne({ Email: "testuser8@user.com" });
    const user11 = await User.findOne({ Email: "testuser9@user.com" });
    const user12 = await User.findOne({ Email: "testuser10@user.com" });
    const user13 = await User.findOne({ Email: "testuser11@user.com" });
    const user14 = await User.findOne({ Email: "testuser12@user.com" });
    const user15 = await User.findOne({ Email: "testuser13@user.com" });
    const user16 = await User.findOne({ Email: "testuser14@user.com" });
    const user17 = await User.findOne({ Email: "testuser15@user.com" });
    const user18 = await User.findOne({ Email: "testuser16@user.com" });




    const parent1 = await User.findOne({ Email: "parent1@user.com" });
    const parent2 = await User.findOne({ Email: "parent2@user.com" });
    // const apply1 = await Application.findOne({ PhoneEmer: "54676905" });
    // const apply2 = await Application.findOne({ PhoneEmer: "98551236" });

    await Course.addToCollection(course1.id, "coach").members(coach1.id);
    await Course.addToCollection(course2.id, "coach").members(coach2.id);
    await Course.addToCollection(course3.id, "coach").members(coach2.id);
    await Course.addToCollection(course4.id, "coach").members(coach1.id);
    await Course.addToCollection(course5.id, "coach").members(coach2.id);
    await Course.addToCollection(course6.id, "coach").members(coach1.id);
    await Course.addToCollection(course7.id, "coach").members(coach2.id);
    await Course.addToCollection(course8.id, "coach").members(coach2.id);
    await Course.addToCollection(course9.id, "coach").members(coach1.id);

    if (await Application.count() == 0) {
      const check = await Application.findOne({ course: course8.id, applicationOwner: user1.id });

      if (!check) {
        await Course.addToCollection(course9.id, 'applicant').members(user1.id);



        await Course.addToCollection(course7.id, 'applicant').members(user1.id);
        await Course.addToCollection(course7.id, 'applicant').members(user2.id);
        await Course.addToCollection(course7.id, 'applicant').members(user3.id);
        await Course.addToCollection(course7.id, 'applicant').members(user5.id);
        await Course.addToCollection(course7.id, 'applicant').members(user7.id);
        await Course.addToCollection(course7.id, 'applicant').members(user8.id);
        await Course.addToCollection(course7.id, 'applicant').members(user12.id);
        await Course.addToCollection(course7.id, 'applicant').members(user15.id);
        await Course.addToCollection(course7.id, 'applicant').members(user16.id);




        await Course.addToCollection(course8.id, 'applicant').members(user1.id);
        await Course.addToCollection(course8.id, 'applicant').members(user2.id);
        await Course.addToCollection(course8.id, 'applicant').members(user3.id);
        await Course.addToCollection(course8.id, 'applicant').members(user4.id);
        await Course.addToCollection(course8.id, 'applicant').members(user5.id);
        await Course.addToCollection(course8.id, 'applicant').members(user6.id);
        await Course.addToCollection(course8.id, 'applicant').members(user7.id);
        await Course.addToCollection(course8.id, 'applicant').members(user8.id);
        await Course.addToCollection(course8.id, 'applicant').members(user9.id);
        await Course.addToCollection(course8.id, 'applicant').members(user10.id);
        await Course.addToCollection(course8.id, 'applicant').members(user11.id);
        await Course.addToCollection(course8.id, 'applicant').members(user12.id);
        await Course.addToCollection(course8.id, 'applicant').members(user13.id);
        await Course.addToCollection(course8.id, 'applicant').members(user14.id);
        await Course.addToCollection(course8.id, 'applicant').members(user15.id);
        await Course.addToCollection(course8.id, 'applicant').members(user16.id);
        await Course.addToCollection(course8.id, 'applicant').members(user17.id);
        await Course.addToCollection(course8.id, 'applicant').members(user18.id);

      }

      const app3 = await Application.findOne({ course: course9.id, applicationOwner: user1.id });

      const tapp1 = await Application.findOne({ course: course8.id, applicationOwner: user1.id });
      const tapp2 = await Application.findOne({ course: course8.id, applicationOwner: user2.id });
      const tapp3 = await Application.findOne({ course: course8.id, applicationOwner: user3.id });
      const tapp4 = await Application.findOne({ course: course8.id, applicationOwner: user4.id });
      const tapp5 = await Application.findOne({ course: course8.id, applicationOwner: user5.id });
      const tapp6 = await Application.findOne({ course: course8.id, applicationOwner: user6.id });
      const tapp7 = await Application.findOne({ course: course8.id, applicationOwner: user7.id });
      const tapp8 = await Application.findOne({ course: course8.id, applicationOwner: user8.id });
      const tapp9 = await Application.findOne({ course: course8.id, applicationOwner: user9.id });
      const tapp10 = await Application.findOne({ course: course8.id, applicationOwner: user10.id });
      const tapp11 = await Application.findOne({ course: course8.id, applicationOwner: user11.id });
      const tapp12 = await Application.findOne({ course: course8.id, applicationOwner: user12.id });
      const tapp13 = await Application.findOne({ course: course8.id, applicationOwner: user13.id });
      const tapp14 = await Application.findOne({ course: course8.id, applicationOwner: user14.id });
      const tapp15 = await Application.findOne({ course: course8.id, applicationOwner: user15.id });
      const tapp16 = await Application.findOne({ course: course8.id, applicationOwner: user16.id });
      const tapp17 = await Application.findOne({ course: course8.id, applicationOwner: user17.id });
      const tapp18 = await Application.findOne({ course: course8.id, applicationOwner: user18.id });

      const t1app1 = await Application.findOne({ course: course7.id, applicationOwner: user1.id });
      const t1app2 = await Application.findOne({ course: course7.id, applicationOwner: user2.id });
      const t1app3 = await Application.findOne({ course: course7.id, applicationOwner: user3.id });
      const t1app4 = await Application.findOne({ course: course7.id, applicationOwner: user5.id });
      const t1app5 = await Application.findOne({ course: course7.id, applicationOwner: user7.id });
      const t1app6 = await Application.findOne({ course: course7.id, applicationOwner: user8.id });
      const t1app7 = await Application.findOne({ course: course7.id, applicationOwner: user12.id });
      const t1app8 = await Application.findOne({ course: course7.id, applicationOwner: user15.id });
      const t1app9 = await Application.findOne({ course: course7.id, applicationOwner: user16.id });

      await Application.updateOne(app3.id).set({ parent: true, ParentAc: "parent1@user.com", chiNameParent: "", engNameParent: "", GenderParent: "", AgeParent: null, DOBParent: "", EmailParent: "", PhoneParent: "", chiNameEmer: "李白", AddressEmer: "香港沙田大涌橋路52號", PhoneEmer: "65112565", payment: "cheque", declare: true, declare1: true, adult: false, status: 0, receipt: "" });
      
      await Application.updateOne(tapp1.id).set({ parent: false, ParentAc: "", chiNameParent: "", engNameParent: "", GenderParent: "", AgeParent: null, DOBParent: "", EmailParent: "", PhoneParent: "", chiNameEmer: "孔美美", AddressEmer: "香港九龍城界限街150號", PhoneEmer: "98551236", payment: "cheque", declare: true, declare1: true, adult: false, status: 0, receipt: "" });
      await Application.updateOne(tapp2.id).set({ parent: false, ParentAc: "", chiNameParent: "", engNameParent: "", GenderParent: "", AgeParent: null, DOBParent: "", EmailParent: "", PhoneParent: "", chiNameEmer: "孔美美", AddressEmer: "香港九龍城界限街150號", PhoneEmer: "98551236", payment: "cheque", declare: true, declare1: true, adult: false, status: 0, receipt: "" });
      await Application.updateOne(tapp3.id).set({ parent: false, ParentAc: "", chiNameParent: "", engNameParent: "", GenderParent: "", AgeParent: null, DOBParent: "", EmailParent: "", PhoneParent: "", chiNameEmer: "孔美美", AddressEmer: "香港九龍城界限街150號", PhoneEmer: "98551236", payment: "cheque", declare: true, declare1: true, adult: false, status: 0, receipt: "" });
      await Application.updateOne(tapp4.id).set({ parent: false, ParentAc: "", chiNameParent: "", engNameParent: "", GenderParent: "", AgeParent: null, DOBParent: "", EmailParent: "", PhoneParent: "", chiNameEmer: "孔美美", AddressEmer: "香港九龍城界限街150號", PhoneEmer: "98551236", payment: "cheque", declare: true, declare1: true, adult: false, status: 0, receipt: "" });
      await Application.updateOne(tapp5.id).set({ parent: false, ParentAc: "", chiNameParent: "", engNameParent: "", GenderParent: "", AgeParent: null, DOBParent: "", EmailParent: "", PhoneParent: "", chiNameEmer: "孔美美", AddressEmer: "香港九龍城界限街150號", PhoneEmer: "98551236", payment: "cheque", declare: true, declare1: true, adult: false, status: 0, receipt: "" });
      await Application.updateOne(tapp6.id).set({ parent: false, ParentAc: "", chiNameParent: "", engNameParent: "", GenderParent: "", AgeParent: null, DOBParent: "", EmailParent: "", PhoneParent: "", chiNameEmer: "孔美美", AddressEmer: "香港九龍城界限街150號", PhoneEmer: "98551236", payment: "cheque", declare: true, declare1: true, adult: false, status: 0, receipt: "" });
      await Application.updateOne(tapp7.id).set({ parent: false, ParentAc: "", chiNameParent: "", engNameParent: "", GenderParent: "", AgeParent: null, DOBParent: "", EmailParent: "", PhoneParent: "", chiNameEmer: "孔美美", AddressEmer: "香港九龍城界限街150號", PhoneEmer: "98551236", payment: "cheque", declare: true, declare1: true, adult: false, status: 0, receipt: "" });
      await Application.updateOne(tapp8.id).set({ parent: false, ParentAc: "", chiNameParent: "", engNameParent: "", GenderParent: "", AgeParent: null, DOBParent: "", EmailParent: "", PhoneParent: "", chiNameEmer: "孔美美", AddressEmer: "香港九龍城界限街150號", PhoneEmer: "98551236", payment: "cheque", declare: true, declare1: true, adult: false, status: 0, receipt: "" });
      await Application.updateOne(tapp9.id).set({ parent: false, ParentAc: "", chiNameParent: "", engNameParent: "", GenderParent: "", AgeParent: null, DOBParent: "", EmailParent: "", PhoneParent: "", chiNameEmer: "孔美美", AddressEmer: "香港九龍城界限街150號", PhoneEmer: "98551236", payment: "cheque", declare: true, declare1: true, adult: false, status: 0, receipt: "" });
      await Application.updateOne(tapp10.id).set({ parent: false, ParentAc: "", chiNameParent: "", engNameParent: "", GenderParent: "", AgeParent: null, DOBParent: "", EmailParent: "", PhoneParent: "", chiNameEmer: "孔美美", AddressEmer: "香港九龍城界限街150號", PhoneEmer: "98551236", payment: "cheque", declare: true, declare1: true, adult: false, status: 0, receipt: "" });
      await Application.updateOne(tapp11.id).set({ parent: false, ParentAc: "", chiNameParent: "", engNameParent: "", GenderParent: "", AgeParent: null, DOBParent: "", EmailParent: "", PhoneParent: "", chiNameEmer: "孔美美", AddressEmer: "香港九龍城界限街150號", PhoneEmer: "98551236", payment: "cheque", declare: true, declare1: true, adult: false, status: 0, receipt: "" });
      await Application.updateOne(tapp12.id).set({ parent: false, ParentAc: "", chiNameParent: "", engNameParent: "", GenderParent: "", AgeParent: null, DOBParent: "", EmailParent: "", PhoneParent: "", chiNameEmer: "孔美美", AddressEmer: "香港九龍城界限街150號", PhoneEmer: "98551236", payment: "cheque", declare: true, declare1: true, adult: false, status: 0, receipt: "" });
      await Application.updateOne(tapp13.id).set({ parent: false, ParentAc: "", chiNameParent: "", engNameParent: "", GenderParent: "", AgeParent: null, DOBParent: "", EmailParent: "", PhoneParent: "", chiNameEmer: "孔美美", AddressEmer: "香港九龍城界限街150號", PhoneEmer: "98551236", payment: "cheque", declare: true, declare1: true, adult: false, status: 0, receipt: "" });
      await Application.updateOne(tapp14.id).set({ parent: false, ParentAc: "", chiNameParent: "", engNameParent: "", GenderParent: "", AgeParent: null, DOBParent: "", EmailParent: "", PhoneParent: "", chiNameEmer: "孔美美", AddressEmer: "香港九龍城界限街150號", PhoneEmer: "98551236", payment: "cheque", declare: true, declare1: true, adult: false, status: 0, receipt: "" });
      await Application.updateOne(tapp15.id).set({ parent: false, ParentAc: "", chiNameParent: "", engNameParent: "", GenderParent: "", AgeParent: null, DOBParent: "", EmailParent: "", PhoneParent: "", chiNameEmer: "孔美美", AddressEmer: "香港九龍城界限街150號", PhoneEmer: "98551236", payment: "cheque", declare: true, declare1: true, adult: false, status: 0, receipt: "" });
      await Application.updateOne(tapp16.id).set({ parent: false, ParentAc: "", chiNameParent: "", engNameParent: "", GenderParent: "", AgeParent: null, DOBParent: "", EmailParent: "", PhoneParent: "", chiNameEmer: "孔美美", AddressEmer: "香港九龍城界限街150號", PhoneEmer: "98551236", payment: "cheque", declare: true, declare1: true, adult: false, status: 0, receipt: "" });
      await Application.updateOne(tapp17.id).set({ parent: false, ParentAc: "", chiNameParent: "", engNameParent: "", GenderParent: "", AgeParent: null, DOBParent: "", EmailParent: "", PhoneParent: "", chiNameEmer: "孔美美", AddressEmer: "香港九龍城界限街150號", PhoneEmer: "98551236", payment: "cheque", declare: true, declare1: true, adult: false, status: 0, receipt: "" });
      await Application.updateOne(tapp18.id).set({ parent: false, ParentAc: "", chiNameParent: "", engNameParent: "", GenderParent: "", AgeParent: null, DOBParent: "", EmailParent: "", PhoneParent: "", chiNameEmer: "孔美美", AddressEmer: "香港九龍城界限街150號", PhoneEmer: "98551236", payment: "cheque", declare: true, declare1: true, adult: false, status: 0, receipt: "" });

      await Application.updateOne(t1app1.id).set({ parent: false, ParentAc: "", chiNameParent: "", engNameParent: "", GenderParent: "", AgeParent: null, DOBParent: "", EmailParent: "", PhoneParent: "", chiNameEmer: "吳小小", AddressEmer: "香港九龍城太子道西341號", PhoneEmer: "54676905", payment: "cheque", declare: true, declare1: true, adult: false, status: 0, receipt: "" });
      await Application.updateOne(t1app2.id).set({ parent: false, ParentAc: "", chiNameParent: "", engNameParent: "", GenderParent: "", AgeParent: null, DOBParent: "", EmailParent: "", PhoneParent: "", chiNameEmer: "吳小小", AddressEmer: "香港九龍城太子道西341號", PhoneEmer: "54676905", payment: "cheque", declare: true, declare1: true, adult: false, status: 0, receipt: "" });
      await Application.updateOne(t1app3.id).set({ parent: false, ParentAc: "", chiNameParent: "", engNameParent: "", GenderParent: "", AgeParent: null, DOBParent: "", EmailParent: "", PhoneParent: "", chiNameEmer: "吳小小", AddressEmer: "香港九龍城太子道西341號", PhoneEmer: "54676905", payment: "cheque", declare: true, declare1: true, adult: false, status: 0, receipt: "" });
      await Application.updateOne(t1app4.id).set({ parent: false, ParentAc: "", chiNameParent: "", engNameParent: "", GenderParent: "", AgeParent: null, DOBParent: "", EmailParent: "", PhoneParent: "", chiNameEmer: "吳小小", AddressEmer: "香港九龍城太子道西341號", PhoneEmer: "54676905", payment: "cheque", declare: true, declare1: true, adult: false, status: 0, receipt: "" });
      await Application.updateOne(t1app5.id).set({ parent: false, ParentAc: "", chiNameParent: "", engNameParent: "", GenderParent: "", AgeParent: null, DOBParent: "", EmailParent: "", PhoneParent: "", chiNameEmer: "吳小小", AddressEmer: "香港九龍城太子道西341號", PhoneEmer: "54676905", payment: "cheque", declare: true, declare1: true, adult: false, status: 0, receipt: "" });
      await Application.updateOne(t1app6.id).set({ parent: false, ParentAc: "", chiNameParent: "", engNameParent: "", GenderParent: "", AgeParent: null, DOBParent: "", EmailParent: "", PhoneParent: "", chiNameEmer: "吳小小", AddressEmer: "香港九龍城太子道西341號", PhoneEmer: "54676905", payment: "cheque", declare: true, declare1: true, adult: false, status: 0, receipt: "" });
      await Application.updateOne(t1app7.id).set({ parent: false, ParentAc: "", chiNameParent: "", engNameParent: "", GenderParent: "", AgeParent: null, DOBParent: "", EmailParent: "", PhoneParent: "", chiNameEmer: "吳小小", AddressEmer: "香港九龍城太子道西341號", PhoneEmer: "54676905", payment: "cheque", declare: true, declare1: true, adult: false, status: 0, receipt: "" });
      await Application.updateOne(t1app8.id).set({ parent: false, ParentAc: "", chiNameParent: "", engNameParent: "", GenderParent: "", AgeParent: null, DOBParent: "", EmailParent: "", PhoneParent: "", chiNameEmer: "吳小小", AddressEmer: "香港九龍城太子道西341號", PhoneEmer: "54676905", payment: "cheque", declare: true, declare1: true, adult: false, status: 0, receipt: "" });
      await Application.updateOne(t1app9.id).set({ parent: false, ParentAc: "", chiNameParent: "", engNameParent: "", GenderParent: "", AgeParent: null, DOBParent: "", EmailParent: "", PhoneParent: "", chiNameEmer: "吳小小", AddressEmer: "香港九龍城太子道西341號", PhoneEmer: "54676905", payment: "cheque", declare: true, declare1: true, adult: false, status: 0, receipt: "" });





      await Application.addToCollection(app3.id, "applicant").members(parent1.id);
    }
  }


  if (await Email.count() == 0) {
    await Email.createEach([
      { "title": "已成功報名", "emailtitle": "已成功報名 %eventname%", "emailcontent": "敬啟者﹕<P></P>閣下所報讀之%eventname%已被接納，敬請攜同收據於下列時間道體育館出席訓練班有關資料如下：<p></p>上課日期：%eventclassdate%<P></P>上課時間：%eventclasstime%<P></P>上課地點：%eventvenue%<P></P>如有任何疑問，可致電2504 8233與本會職員聯絡。<P></P>中國香港體操總會", "emailtype": 1 },
      { "title": "暫列入候補名單", "emailtitle": "暫列入候補名單 %name%", "emailcontent": "敬啟者﹕<P></P>本會已收到  閣下申請%eventname%的報名表，但該課程反應熱烈，申請暫列入侯補名單。<p></p>候補名單的申請有以下選擇﹕<br>1.   閣下可選擇繼續於候補名單，如有其他申請人退出，便有機會補上。<br>2.   閣下可通知本會轉讀其他課程，但需留意所轉讀之課程未必仍有空缺。 <P></P>如有任何疑問，可致電2504 8233與本會職員聯絡。<P></P>中國香港體操總會", "emailtype": 2 },
      { "title": "已收到付款", "emailtitle": "已收到付款 %eventname%", "emailcontent": "敬啟者﹕<P></P>本會已收到  閣下的支票，本會現正處理有關申請，請閣下耐心等待本會發出之確認信，最遲將於開班前兩星期收到通知。<P></P>如閣下未能收到任何通知，可致電2504 8233與本會職員聯絡。<P></P>中國香港體操總會", "emailtype": 3 },
      { "title": "由已成功報名名單改為候補名單", "emailtitle": "由已成功報名名單改為候補名單 %eventname%", "emailcontent": "敬啟者﹕<P></P>本會已收到  閣下申請%eventname%的報名表，但該課程反應熱烈，改為暫列入候補名單。<p></p>候補名單的申請有以下選擇﹕<br>1.   閣下可選擇繼續於候補名單，如有其他申請人退出，便有機會補上。<br>2.   閣下可通知本會轉讀其他課程，但需留意所轉讀之課程未必仍有空缺。 <P></P>如有任何疑問，可致電2504 8233與本會職員聯絡。<P></P>中國香港體操總會", "emailtype": 4 },
      { "title": "由候補名單改為已成功報名名單", "emailtitle": "由候補名單改為已成功報名名單 %eventname%", "emailcontent": "<p>敬啟者﹕</p><p>閣下報讀之%eventname%付款詳情如下:&nbsp;</p><p>課程費用:%eventprice%&nbsp;</p><p>如有任何疑問，可致電2504 8233與本會職員聯絡。</p><p>請最遲於開班前兩星期提交支票寄往香港郵政總局第1111 號信箱。支票抬頭請寫上「中國香港體操總會之付款」，否則將被取消資格。</p><p>中國香港體操總會</p>", "emailtype": 5 },
      { "title": "付款詳情", "emailtitle": "%eventname%之付款詳情", "emailcontent": "<p>敬啟者﹕&nbsp;</p><p>閣下報讀之%eventname%付款詳情如下:&nbsp;&nbsp;</p><p>課程費用:%eventprice%&nbsp;&nbsp;</p><p>如有任何疑問，可致電2504 8233與本會職員聯絡。</p><p>請最遲於開班前兩星期提交支票寄往香港郵政總局第1111 號信箱。支票抬頭請寫上「中國香港體操總會之付款」，否則將被取消資格。</p><p>中國香港體操總會</p>", "emailtype": 6 },

      { "title": "課程申請已收到", "emailtitle": "%name%訓練班申請已收到 ", "emailcontent": "致︰%username%<br><P></P>閣下所報讀之%name%訓練班申請已經收到。<br><P></P>如有任何疑問，可致電2504 8233與本會職員聯絡。<P></P> <p align='right'>中國香港體操總會　啟</p>", "emailtype": 7 },
      { "title": "課程申請已錄取", "emailtitle": "你已被%name%訓練班錄取", "emailcontent": "致︰%username%<br><P></P>閣下報讀之%coursename%訓練班付款詳情如下:&nbsp;&nbsp;<br></p><p>申請人姓名: %username1% &nbsp;&nbsp;<br></p><p>課程費用: %coursefee%&nbsp;&nbsp;<br></p><p>請最遲於開班前兩星期提交支票寄往香港郵政總局第1111 號信箱。支票抬頭請寫上「中國香港體操總會之付款」，否則將被取消資格。<br></p><p>如有任何疑問，可致電2504 8233與本會職員聯絡。<P></P><p align='right'>中國香港體操總會　啟</p>", "emailtype": 8 },
      { "title": "課程付款已收到", "emailtitle": "%name%訓練班付款已收到", "emailcontent": "致︰%username%<br><P></P>本會已收到  閣下%name%訓練班的付款，本會現正處理有關申請，請閣下耐心等待本會發出之確認信，最遲將於開班前兩星期收到通知。<br><P></P>如閣下未能收到任何通知，可致電2504 8233與本會職員聯絡。<P></P><p align='right'>中國香港體操總會　啟</p>", "emailtype": 9 },
      { "title": "教練已上載資料", "emailtitle": "教練已上載%name%訓練班資料 ", "emailcontent": "致︰管理員<br><P></P>%name%訓練班之教練已上載檔案。請前往用戶專區>系統管理>課程管理>成績管理查閱。", "emailtype": 10 },
      { "title": "考試成績通知", "emailtitle": "%name%訓練班考試成績通知 ", "emailcontent": "致︰%username%<br><P></P>%name%訓練班考試成績已上載。請前往用戶專區>我的成績查閱。<br></p><p>如有任何疑問，可致電2504 8233與本會職員聯絡。<P></P><p align='right'>中國香港體操總會　啟</p>", "emailtype": 11 },
      //{ "title": "證書付款收到", "emailtitle": "證書付款收到 %name%", "emailcontent": "致︰%username%<br><P></P>本會已收到  閣下的支票，本會現正處理有關申請，請閣下耐心等待本會發出之確認信。<br><P></P>如閣下未能收到任何通知，可致電2504 8233與本會職員聯絡。<P></P><p align='right'>中國香港體操總會　啟</p>", "emailtype": 12 },
      { "title": "已收到證書申請", "emailtitle": "已收到%name%訓練班證書申請 ", "emailcontent": "致︰%username%<br><P></P>本會已收到  閣下%name%訓練班的證書申請，本會現正處理有關申請，請閣下耐心等待本會發出之確認信。<br><P></P>如閣下未能收到任何通知，可致電2504 8233與本會職員聯絡。<P></P><p align='right'>中國香港體操總會　啟</p>", "emailtype": 13 },
      { "title": "課程申請已拒絕", "emailtitle": "%name%訓練班申請已拒絕", "emailcontent": "致︰%username%<br><P></P>閣下報讀之%name%訓練班的申請已被拒絕。<br><P></P>如有任何疑問，可致電2504 8233與本會職員聯絡。<P></P> <p align='right'>中國香港體操總會　啟</p>", "emailtype": 14 },
      { "title": "課程文件資料有誤", "emailtitle": "%name%訓練班文件資料有誤", "emailcontent": "致︰%username%教練<br><P></P>閣下任教之%name%訓練班的文件內容有誤。請前往用戶專區>現時課程作出修改。<br></p><p>如有任何疑問，可致電2504 8233與本會職員聯絡。<P></P><p align='right'>中國香港體操總會　啟</p>", "emailtype": 12 },
      { "title": "課程申請暫列入候補名單", "emailtitle": "%name%訓練班申請暫列入候補名單 ", "emailcontent": "致︰%username%<br><P></P>本會已收到  閣下所報讀之%name%訓練班申請已經收到，但該課程反應熱烈，申請暫列入侯補名單。<p></p>候補名單的申請有以下選擇﹕<br><br>1.   閣下可選擇繼續於候補名單，如有其他申請人退出，便有機會補上。<br><br>2.   閣下可通知本會轉讀其他課程，但需留意所轉讀之課程未必仍有空缺。 <P></P>如有任何疑問，可致電2504 8233與本會職員聯絡。<P></P><p align='right'>中國香港體操總會　啟</p>", "emailtype": 15 },
    ]);

  }

  if (await News.count() == 0) {
    await News.createEach([
      { "category": "特別通告以及本會運動員及海外比賽消息", "startDate": new Date('2019-10-16'), "endDate": new Date("2020-10-16"), "content": "本會熱烈恭賀香港技巧體操隊員林曉勵、栗島晴楓在2019年10月7日至10月13日於烏茲別克舉辦之技巧體操亞洲錦標賽2019女子雙人決賽中以19.570分，取得第3名!", "link": "http://www.gahk.org.hk/doc/ACROasianchamp2019news.pdf" },
      { "category": "特別通告以及本會運動員及海外比賽消息", "startDate": new Date('2019-10-16'), "endDate": new Date("2020-10-16"), "content": "本會熱烈恭賀香港體操隊員石偉雄在2019年10月4日至10月13日於德國史特加舉辦之第49屆競技體操世界錦標賽男子跳馬決賽中以14.466分，取得第7名，這成績使其成功贏取東京奧運參賽資格！", "link": "http://www.gahk.org.hk/doc/Website_49thWorld%20Championships.pdf" },
      { "category": "特別通告以及本會運動員及海外比賽消息", "startDate": new Date('2019-09-24'), "endDate": new Date("2020-09-24"), "content": "恭喜香港健美體操隊在2019年9月10 日至15日於上海舉辦之2019年全國健美操聯賽第四站取得優異成績。 運動員葉慧雯、吳倩儀、吳浩嵐、胡栢賢及李泳怡於成人組精英組五人操進入決賽；葉慧雯、吳倩儀及吳浩嵐更以第七名的成績晉級決賽，成續優異。", "link": "http://www.gahk.org.hk/doc/website_AERShanghai.pdf" },
    ]);
  }

  //Testing for online application
  if (await GRGS.count() == 0) {
    await GRGS.createEach([
      { teamName: "香港浸會大學第一隊", phone: "12345678", email: "hkbuteam1@gmail.com", category: "集體 A 組(五人圈操)", havecname1: "是 Yes", chiName1: "陳一文", engName1: "Chan Yin Man", ID1: "A1111111", birth1: "2000-01-12", havecname2: "是 Yes", chiName2: "陳二文", engName2: "Chan Yi Man", ID2: "L2222222", birth2: "2000-02-12", havecname3: "是 Yes", chiName3: "陳三文", engName3: "Chan San Man", ID3: "N3333333", birth3: "2000-03-12", havecname4: "是 Yes", chiName4: "陳四文", engName4: "Chan Sai Man", ID4: "Y4444444", birth4: "2000-04-12", havecname5: "是 Yes", chiName5: "陳五文", engName5: "Chan Mon Man", ID5: "A5555555", birth5: "2000-05-12", havecname6: "是 Yes", chiName6: "陳六文", engName6: "Chan Loi Man", ID6: "B6666666", birth6: "2000-06-12", coachName: "陳大文", coachPhone: 22222222, leaderName: "浸大文", leaderPosition: "浸會大學體育教練", NoOfTeam: 1, teamFee: 150, NoOfPeople: 6, insurance: 180, total: 330, payStatus: "unpaid", formStatus: "ToBeCon", teamStatus: "suTeam", idCode: "GRGS2020-1" },
      { teamName: "香港大學第一隊", phone: "23456789", email: "hkuteam1@gmail.com", category: "集體 B 組(五人圈操)", havecname1: "是 Yes", chiName1: "陳大一", engName1: "Chan Da Yin", ID1: "Y1111112", birth1: "1998-06-14", havecname2: "是 Yes", chiName2: "陳大二", engName2: "Chan Da Yi", ID2: "W2222232", birth2: "2000-03-02", havecname3: "是 Yes", chiName3: "陳大三", engName3: "Chan Da San", ID3: "V3243331", birth3: "1999-05-15", havecname4: "是 Yes", chiName4: "陳大四", engName4: "Chan Da Sai", ID4: "Y4456444", birth4: "2000-09-10", havecname5: "是 Yes", chiName5: "陳大五", engName5: "Chan Da Mon", ID5: "Y5554355", birth5: "2000-01-30", havecname6: "是 Yes", chiName6: "陳大六", engName6: "Chan Da Loi", ID6: "W1266666", birth6: "2000-02-03", coachName: "陳大大", coachPhone: 28022219, leaderName: "李小小", leaderPosition: "香港體育中心教練", NoOfTeam: 1, teamFee: 150, NoOfPeople: 6, insurance: 180, total: 330, payStatus: "unpaid", formStatus: "ToBeCon", teamStatus: "suTeam", idCode: "GRGS2020-2" },
      { teamName: "香港大學第二隊", phone: "34567890", email: "hkuteam2@gmail.com", category: "集體 B 組(五人圈操)", havecname1: "是 Yes", chiName1: "陳一一", engName1: "Chan Yin Yin", ID1: "A1115611", birth1: "1997-01-05", havecname2: "是 Yes", chiName2: "李月月", engName2: "Lee Yu Yu", ID2: "B1322210", birth2: "2002-02-02", havecname3: "是 Yes", chiName3: "陳金金", engName3: "Chan Kam Kam", ID3: "C4333243", birth3: "2003-09-09", havecname4: "是 Yes", chiName4: "林女女", engName4: "Lam Lui Lui", ID4: "H4467444", birth4: "2004-04-04", havecname5: "是 Yes", chiName5: "吳火火", engName5: "Ng Fo Fo", ID5: "Y2345555", birth5: "2006-09-01", havecname6: "是 Yes", chiName6: "陳手手", engName6: "Chan Sau Sau", ID6: "Y2366662", birth6: "2008-06-30", coachName: "金日一", coachPhone: 22255561, leaderName: "黃老老", leaderPosition: "香港大學體育教練", NoOfTeam: 1, teamFee: 150, NoOfPeople: 6, insurance: 180, total: 330, payStatus: "unpaid", formStatus: "ToBeCon", teamStatus: "suTeam", idCode: "GRGS2020-3" },
      // etc.
    ]);
  }

  if (await GRGP.count() == 0) {
    await GRGP.createEach([
      { teamName: "第一隊", phone: "12345688", email: "team1@gmail.com", category: "集體 C 組(三球兩帶)", havecname1: "是 Yes", chiName1: "陳一文", engName1: "Chan Yin Man", ID1: "A1111111", birth1: "2000-01-12", havecname2: "是 Yes", chiName2: "蔡水", engName2: "Choi Shau", ID2: "P5672222", birth2: "2008-09-13", havecname3: "是 Yes", chiName3: "陳文", engName3: "Chan Man", ID3: "O8833333", birth3: "2005-08-12", havecname4: "是 Yes", chiName4: "陳四", engName4: "Chan Sai", ID4: "Y6666044", birth4: "2003-06-16", havecname5: "是 Yes", chiName5: "周文", engName5: "Chow Man", ID5: "D1234555", birth5: "1996-01-11", havecname6: "是 Yes", chiName6: "郭文", engName6: "Kwok Man", ID6: "E6789666", birth6: "2001-06-11", coachName: "呂炎", coachPhone: 12322222, leaderName: "蔡一一", leaderPosition: "外國體育教練", NoOfTeam: 1, teamFee: 150, NoOfPeople: 6, insurance: 180, total: 330, payStatus: "unpaid", formStatus: "ToBeCon", teamStatus: "suTeam", idCode: "GRGP2020-1" },
      { teamName: "第一隊", phone: "23456799", email: "team2@gmail.com", category: "集體 A 組(五人圈操)", havecname1: "是 Yes", chiName1: "林森", engName1: "Lam Sam", ID1: "B1111132", birth1: "1996-06-18", havecname2: "是 Yes", chiName2: "陳大心", engName2: "Chan Da Sam", ID2: "W2211232", birth2: "2002-03-02", havecname3: "是 Yes", chiName3: "周一", engName3: "Chou Yin", ID3: "G6743331", birth3: "1999-04-27", havecname4: "是 Yes", chiName4: "陳大", engName4: "Chan Da", ID4: "Y5456444", birth4: "2002-03-15", havecname5: "是 Yes", chiName5: "李五五", engName5: "Lee Mon Mon", ID5: "A2345655", birth5: "2002-01-31", havecname6: "是 Yes", chiName6: "陳六六", engName6: "Chan Loi Loi", ID6: "T1257666", birth6: "2003-02-02", coachName: "黃大", coachPhone: 28022555, leaderName: "黃井", leaderPosition: "香港體育中心教練", NoOfTeam: 1, teamFee: 150, NoOfPeople: 6, insurance: 180, total: 330, payStatus: "unpaid", formStatus: "ToBeCon", teamStatus: "suTeam", idCode: "GRGP2020-2" },
      { teamName: "第二隊", phone: "34566890", email: "team3@gmail.com", category: "集體 A 組(五人圈操)", havecname1: "是 Yes", chiName1: "李李樹", engName1: "Lee Lee Shu", ID1: "A1100001", birth1: "1999-01-25", havecname2: "是 Yes", chiName2: "李月月", engName2: "Lee Yu Yu", ID2: "B1322210", birth2: "2002-02-02", havecname3: "是 Yes", chiName3: "金中", engName3: "Kam Chao", ID3: "Y4333143", birth3: "2003-09-28", havecname4: "是 Yes", chiName4: "林女月", engName4: "Lam Lui Yuen", ID4: "H1267441", birth4: "2004-04-14", havecname5: "是 Yes", chiName5: "吳水", engName5: "Ng Shau", ID5: "Y2367455", birth5: "2006-09-1", havecname6: "是 Yes", chiName6: "呂手", engName6: "Lui Sau", ID6: "Q2356662", birth6: "1998-06-31", coachName: "田一", coachPhone: 22255312, leaderName: "郭水", leaderPosition: "香港體育中心教練", NoOfTeam: 1, teamFee: 150, NoOfPeople: 6, insurance: 180, total: 330, payStatus: "unpaid", formStatus: "ToBeCon", teamStatus: "suTeam", idCode: "GRGP2020-3" },
      // etc.
    ]);
  }

  if (await TRGP.count() == 0) {
    await TRGP.createEach([
      { compYear: "2020", teamName: "機構一", Phone: "23456789", Email: "orgOne@gmail.com", CoachName: "張一一", CoachPhone: "91234567", category: "預備A,B組", havecname1: "是 Yes", Mate1ChiName: "王小明", Mate1EngName: "Wong Shui Ming", Mate1IDNo: "A123456(7)", Mate1Date: "2001-01-21", havecname2: "是 Yes", Mate2ChiName: "易千千", Mate2EngName: "Yik Ching Ching", Mate2IDNo: "B123456(7)", Mate2Date: "2000-11-28", havecname3: "否 No", Mate3ChiName: "", Mate3EngName: "Chan Tai Ming", Mate3IDNo: "C123456(7)", Mate3Date: "2001-04-05", havecname4: "是 Yes", Mate4ChiName: "王明明", Mate4EngName: "Wong Ming Ming", Mate4IDNo: "D123456(7)", Mate4Date: "2000-06-18", TeamNumber: 1, TeamPrice: 150, TeamTotalPrice: 150, leaderName: "張進", leaderPosition: "機構一體操顧問", payStatus: "unpaid", formStatus: "ToBeCon", teamStatus: "suTeam", idCode: "TRGP2020-1" },
      { compYear: "2020", teamName: "機構二", Phone: "21855555", Email: "orgTwo@gmail.com", CoachName: "李二", CoachPhone: "61234567", category: "預備A,B組", havecname1: "是 Yes", Mate1ChiName: "陳嘉", Mate1EngName: "Cheng Ka", Mate1IDNo: "A234567(8)", Mate1Date: "2003-04-26", havecname2: "是 Yes", Mate2ChiName: "楊凡凡", Mate2EngName: "Yeung Fan Fan", Mate2IDNo: "B234567(8)", Mate2Date: "2001-10-29", havecname3: "是 Yes", Mate3ChiName: "李喜", Mate3EngName: "Lee Hei", Mate3IDNo: "C234567(8)", Mate3Date: "2000-12-05", havecname4: "是 Yes", Mate4ChiName: "方章", Mate4EngName: "Fong Cheung", Mate4IDNo: "D234567(8)", Mate4Date: "2002-07-12", TeamNumber: 1, TeamPrice: 150, TeamTotalPrice: 150, leaderName: "陳明明", leaderPosition: "機構一體操部門主任", payStatus: "paid", formStatus: "ToBeCon", teamStatus: "suTeam", idCode: "TRGP2020-2" },
      { compYear: "2021", teamName: "機構三", Phone: "24443333", Email: "orgThree@gmail.com", CoachName: "陳三", CoachPhone: "90909090", category: "高級A組", havecname1: "否 No", Mate1ChiName: "", Mate1EngName: "Lam Ho", Mate1IDNo: "A345678(9)", Mate1Date: "2000-01-07", havecname2: "否 No", Mate2ChiName: "周年", Mate2EngName: "Chou Lin", Mate2IDNo: "B345678(9)", Mate2Date: "1999-09-28", havecname3: "是 Yes", Mate3ChiName: "李白白", Mate3EngName: "Lee Ba Ba", Mate3IDNo: "C345678(9)", Mate3Date: "1998-11-11", havecname4: "是 Yes", Mate4ChiName: "楊桃", Mate4EngName: "Yeung To", Mate4IDNo: "D345678(9)", Mate4Date: "1999-06-18", TeamNumber: 1, TeamPrice: 150, TeamTotalPrice: 150, leaderName: "周月眉", leaderPosition: "行政體操顧問", payStatus: "unpaid", formStatus: "dataDef", teamStatus: "waitTeam", idCode: "TRGP2021-1" },
    ]);
  }

  if (await TRGS.count() == 0) {
    await TRGS.createEach([
      { teamName: "學校一", Phone: "27777777", Email: "schoolOne@gmail.com", CoachName: "周一", CoachPhone: "98765432", category: "初級A組", Mate1ChiName: "王小明", Mate1EngName: "Wong Shui Ming", Mate1IDNo: "A123456(7)", Mate1Date: "2001-01-21", Mate2ChiName: "易千千", Mate2EngName: "Yik Ching Ching", Mate2IDNo: "B123456(7)", Mate2Date: "2000-11-28", Mate3ChiName: "陳大明", Mate3EngName: "Chan Tai Ming", Mate3IDNo: "C123456(7)", Mate3Date: "2001-04-05", Mate4ChiName: "王明明", Mate4EngName: "Wong Ming Ming", Mate4IDNo: "D123456(7)", Mate4Date: "2000-06-18", TeamNumber: 1, TeamPrice: 150, TeamTotalPrice: 150, leaderName: "張進", leaderPosition: "註校體操顧問", payStatus: "unpaid", formStatus: "ToBeCon", teamStatus: "suTeam", idCode: "TRGS2020-1" },
      { teamName: "學校二", Phone: "29056565", Email: "schoolTwo@gmail.com", CoachName: "超二二", CoachPhone: "64321123", category: "初級A組", Mate1ChiName: "陳嘉", Mate1EngName: "Cheng Ka", Mate1IDNo: "A234567(8)", Mate1Date: "2003-04-26", Mate2ChiName: "楊凡凡", Mate2EngName: "Yeung Fan Fan", Mate2IDNo: "B234567(8)", Mate2Date: "2001-10-29", Mate3ChiName: "李喜", Mate3EngName: "Lee Hei", Mate3IDNo: "C234567(8)", Mate3Date: "2000-12-05", Mate4ChiName: "方章", Mate4EngName: "Fong Cheung", Mate4IDNo: "D234567(8)", Mate4Date: "2002-07-12", TeamNumber: 1, TeamPrice: 150, TeamTotalPrice: 150, leaderName: "陳明明", leaderPosition: "體操教練", payStatus: "unpaid", formStatus: "ToBeCon", teamStatus: "suTeam", idCode: "TRGS2020-2" },
      { teamName: "學校三", Phone: "23344344", Email: "schoolThree@gmail.com", CoachName: "李三", CoachPhone: "97717711", category: "初級A組", Mate1ChiName: "林好", Mate1EngName: "Lam Ho", Mate1IDNo: "A345678(9)", Mate1Date: "2000-01-07", Mate2ChiName: "周年", Mate2EngName: "Chou Lin", Mate2IDNo: "B345678(9)", Mate2Date: "1999-09-28", Mate3ChiName: "李白白", Mate3EngName: "Lee Ba Ba", Mate3IDNo: "C345678(9)", Mate3Date: "1998-11-11", Mate4ChiName: "楊桃", Mate4EngName: "Yeung To", Mate4IDNo: "D345678(9)", Mate4Date: "1999-06-18", TeamNumber: 1, TeamPrice: 150, TeamTotalPrice: 150, leaderName: "周月眉", leaderPosition: "學校活動主任", payStatus: "unpaid", formStatus: "ToBeCon", teamStatus: "suTeam", idCode: "TRGS2020-3" },
    ]);
  }

  if (await ClubMember.count() == 0) {
    await ClubMember.createEach([
      { OrgEngName: "Hong Kong Baptist University Gymnastics Club", OrgChiName: "香港浸會大學體操會", AppEngName: "Chou Tai Tai", AppChiName: "周大大", clubAddr: "香港九龍九龍塘香港浸會大學", clubTel: "34110000", clubFax: "34117777", clubEmail: "hkbuGymClub@hkbu.edu.hk", clubWeb: "https://www.hkbu.edu.hk/tch/about/contact.jsp", MemberNo: 150, brefDes: "We are Hong Kong Baptist University Gymnastics Club.", resEngName: "Chan Kai Ki", resChiName: "陳佳淇", position: "學校活動主任", resAddr: "Flat 6E, 6/F, Chan Chan House, Hong Kong", resTel: "97788777", resFax: "21113111", resEmail: "chankaiki@gmail.com", year: 2, clubFee: "150", payStatus: "unpaid", formStatus: "ToBeCon", teamStatus: "suTeam", idCode: "CLUBMem2020-1" },
      { OrgEngName: "Mrs.LeeChan Gymnastics Company", OrgChiName: "李陳女士體操公司", AppEngName: "Lee Ming Wai", AppChiName: "李明惠", clubAddr: "香港中環李陳女士大廈21樓", clubTel: "24988899", clubFax: "24988877", clubEmail: "leechanGym@gmail.com", clubWeb: "https://www.leechanGym.org", MemberNo: 300, brefDes: "We are Mrs.LeeChan Gymnastics Company.", resEngName: "Yeung Ming Ka", resChiName: "楊明家", position: "李陳女士體操公司秘書長", resAddr: "Flat 22B, 2/F, Lee Chan House, Wai Chai, Hong Kong", resTel: "96667789", resFax: "96667744", resEmail: "yeungmingka@gmail.com", year: 5, clubFee: "1000", payStatus: "unpaid", formStatus: "ToBeCon", teamStatus: "suTeam", idCode: "CLUBMem2020-2" },
    ]);
  }

  if (await Trampoline.count() == 0) {
    await Trampoline.createEach([
      { gender: "男 Male", category: "15 至 16 歲 15 to 16 years old", havecname1: "是 Yes", chiName1: "周小時", engName1: "Chou Shui Shi", birth1: "2005", email1: "choushuishi@gmail.com", phone1: "56777789", address1: "Flat 6E, 6/F, Happy Building, Kowloon Tang, Kowloon, Hong Kong", havecname2: "是 Yes", chiName2: "李清", engName2: "Lee Ching", birth2: "2005", email2: "leeching@gmail.com", phone2: "67788778", address2: "Flat 10G, 10/F, Crying Building, Kowloon Tang, Kowloon, Hong Kong", teamName: "雙人同步第一小隊", coachName: "曾昊", coachPhone: "97888903", coachNum: "", coachAddress: "Flat 1609, 16/F, Happy Estate, Happy House, Chai Wan, Hong Kong", parentName1: "周國恆", parentName2: "李建國", payStatus: "unpaid", formStatus: "ToBeCon", teamStatus: "suTeam", idCode: "TRA2020-1" },
      { gender: "男 Male", category: "15 至 16 歲 15 to 16 years old", havecname1: "是 Yes", chiName1: "張三", engName1: "Cheung Sam", birth1: "2006", email1: "cheunsamsamson@gmail.com", phone1: "67888987", address1: "Flat 5F, 5/F, Happy Building, Kowloon Tang, Kowloon, Hong Kong", havecname2: "是 Yes", chiName2: "楊超", engName2: "Yeung Chiu", birth2: "2005", email2: "yeungchiu@gmail.com", phone2: "95477389", address2: "Flat 21A, 21/F, HaHa Building, Kowloon Tang, Kowloon, Hong Kong", teamName: "雙人同步第二小隊", coachName: "吳鳳", coachPhone: "67775555", coachNum: "A1112", coachAddress: "Flat 34A, 34/F, Happy Estate, Happy House, Chai Wan, Hong Kong", parentName1: "陳小寶", parentName2: "楊展桐", payStatus: "unpaid", formStatus: "ToBeCon", teamStatus: "suTeam", idCode: "TRA2020-2" },
      { gender: "女 Female", category: "17 歲或以上 17 years old or above", havecname1: "是 Yes", chiName1: "向海晴", engName1: "Heung Hoi Ching", birth1: "2000", email1: "heunghoiching@gmail.com", phone1: "98666846", address1: "Flat 17B, 17/F, Happy Building, Kowloon Tang, Kowloon, Hong Kong", havecname2: "是 Yes", chiName2: "時子瑤", engName2: "Shi Zi You", birth2: "1999", email2: "shiziyou@gmail.com", phone2: "90774756", address2: "Flat 22A, 22/F, ABC Building, Kowloon Tang, Kowloon, Hong Kong", teamName: "雙人同步第三小隊", coachName: "曹芷芳", coachPhone: "67547668", coachNum: "A6776", coachAddress: "Flat 13E, 13/F, CCC Estate, Haha House, Chai Wan, Hong Kong", parentName1: "向豺生", parentName2: "時鑿", payStatus: "unpaid", formStatus: "ToBeCon", teamStatus: "suTeam", idCode: "TRA2020-3" },
    ]);
  }

  if (await Acroage.count() == 0) {
    await Acroage.createEach([
      { category: "4級(9歲或以上) Level 4(9 years old or above)", item: "男子雙人 Men's Double", cpChiName1: "景宇信", cpEngName1: "King Yu Shuen", gender1: "男 Male", birthday1: "2008-09-20", idNo1: "A456789(1)", contactNo1: "67888932", email1: "kingyushuen@gmail.com", address1: "Flat 1207, 12/F, See See Building, Wan Chai, Hong Kong", cpChiName2: "顧子恒", cpEngName2: "Koo Zi Wun", gender2: "男 Male", birthday2: "2010-11-25", idNo2: "B456789(1)", contactNo2: "98755567", email2: "kooziwun@gmail.com", address2: "Flat 23A, 23/F, See See Building, Wan Chai, Hong Kong", coachName: "白斯誠", cContactNo: "98000834", organName: "", receiptHeader: "運動員姓名 Athlete name", receiptName: "", parentName1: "趙俞", parentName2: "顧成功", payStatus: "unpaid", formStatus: "ToBeCon", teamStatus: "suTeam", idCode: "AGO2020-1" },
      { category: "4級(9歲或以上) Level 4(9 years old or above)", item: "混合雙人 Mixed double", cpChiName1: "張日", cpEngName1: "Cheung Yak", gender1: "男 Male", birthday1: "2009-05-13", idNo1: "A567890(1)", contactNo1: "98886746", email1: "shinnecheung@gmail.com", address1: "Flat 13D, 13/F, See See Building, Wan Chai, Hong Kong", cpChiName2: "李晞晴", cpEngName2: "Lee Hei Ching", gender2: "女 Female", birthday2: "2010-08-11", idNo2: "B567890(1)", contactNo2: "94563665", email2: "heihinglee@gmail.com", address2: "Flat 21A, 21/F, See See Building, Wan Chai, Hong Kong", coachName: "劉裕", cContactNo: "63347589", organName: "劉李美惠體操學校", receiptHeader: "學校/機構名稱 School/Institution Name", receiptName: "劉李美惠體操學校行政部", parentName1: "張中中", parentName2: "李樹", payStatus: "unpaid", formStatus: "ToBeCon", teamStatus: "suTeam", idCode: "AGO2020-2" },
      { category: "2級(6至14歲) Level 2(6-14 years old)", item: "女子三人 Women's trio", cpChiName1: "周一", cpEngName1: "Chou Yak", gender1: "女 Female", birthday1: "2013-05-13", idNo1: "A678901(2)", contactNo1: "67447576", email1: "chouone@gmail.com", address1: "Flat 1D, 1/F, See See Building, Wan Chai, Hong Kong", cpChiName2: "周二", cpEngName2: "Chou Yi", gender2: "女 Female", birthday2: "2012-08-11", idNo2: "B678901(2)", contactNo2: "97787790", email2: "choutwo@gmail.com", address2: "Flat 2A, 2/F, See See Building, Wan Chai, Hong Kong", cpChiName3: "周三", cpEngName3: "Chou Sam", gender3: "女 Female", birthday3: "2013-07-14", idNo3: "B678901(5)", contactNo3: "98657299", email3: "chouthree@gmail.com", address3: "Flat 3A, 3/F, See See Building, Wan Chai, Hong Kong", coachName: "曾文", cContactNo: "67755877", organName: "Mrs. Chan Cheung International School", receiptHeader: "運動員姓名 Athlete name", receiptName: "", parentName1: "周年", parentName2: "周刊", parentName3: "周邊", payStatus: "unpaid", formStatus: "ToBeCon", teamStatus: "suTeam", idCode: "AGO2020-3" },
    ]);
  }

  if (await GFA.count() == 0) {
    await GFA.createEach([
      { teamName: "普及第一隊", receiptHeader: "普及第一隊行政部", address: "Flat 601, 6/F, Sun Sun Building, Hong Kong", category: "幼稚園 Kindergarten", cpChiName: "陳楚", cpEngName: "Chan Cho", cpDayPhone: "23567456", cpMobilePhone: "90786678", email: "chancho@gmail.com", applicantNum: 18, crewNum: 3, checkNum: "C1234567", bankName: "恒生銀行", payStatus: "unpaid", formStatus: "ToBeCon", teamStatus: "suTeam", idCode: "GFA2020-1" },
      { teamName: "普及第二隊", receiptHeader: "普及第二隊行政部", address: "Flat 708, 7/F, Rainy Building, Hong Kong", category: "小學組 Primary School", cpChiName: "蔡芷芊", cpEngName: "Choy Ji Chin", cpDayPhone: "25567898", cpMobilePhone: "58339980", email: "jichinchoy@gmail.com", applicantNum: 20, crewNum: 5, checkNum: "A1234567", bankName: "中國銀行", payStatus: "unpaid", formStatus: "ToBeCon", teamStatus: "suTeam", idCode: "GFA2020-2" },
      { teamName: "普及第三隊", receiptHeader: "普及第三隊行政部", address: "Flat 2B, 2/F, SunShine Building, Hong Kong", category: "公開組 Open Group", cpChiName: "林木", cpEngName: "Lam Mo", cpDayPhone: "27654798", cpMobilePhone: "95657976", email: "momolam@gmail.com", applicantNum: 20, crewNum: 2, checkNum: "B12345677", bankName: "恒生銀行", payStatus: "unpaid", formStatus: "ToBeCon", teamStatus: "suTeam", idCode: "GFA2020-3" },
    ]);
  }


  return done();
};
