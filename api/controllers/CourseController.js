/**
 * CourseController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

function weekdaySwitch(weekday) {
    switch (weekday) {
        case "0":
            return "日";
        case "1":
            return "一";
        case "2":
            return "二";
        case "3":
            return "三";
        case "4":
            return "四";
        case "5":
            return "五";
        case "6":
            return "六";
        default:
            break;
    }
}

function getStatium() {
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
}

module.exports = {
    // action - create
    create: async function (req, res) {
        if (req.method == "GET") {
            var coaches = await User.find({ role: 'coach' }).populate('coach');
            // console.log(coaches[1].coach[0].disciplines);
            var stadiumList = sails.getStatium();
            return res.view('course/create', { Coaches: coaches, stadiums: stadiumList, error: '' });
        }

        // console.log(req.body);
        var wds = req.body.weekday;
        if (wds) {
            if (typeof (wds) != "string") {
                var weekdays = [];
                wds.forEach(function (wd) {
                    weekdays.push(weekdaySwitch(wd));
                });
                req.body.weekday = weekdays;
            } else {
                req.body.weekday = weekdaySwitch(req.body.weekday);
            }
        }
        if (req.body.stadium) {
            var stadiums = sails.getStatium();
            // var separator = req.body.stadium.split(". ");
            // var stadiumId = separator[0];
            // req.body.stadium = separator[1];
            // record = stadiums.find(stadium => stadium.id == stadiumId);
            record = stadiums.find(stadium => stadium.name == req.body.stadium);
            if (record) {
                req.body.address = record.address;
                req.body.coord = record.coord;
                req.body.region = record.region;
            }
        }

        if (req.body.quota < 0) {
            req.body.status = 1;
        }

        if (req.body.endDate){
            if (req.body.endDate <= new Date() ){
                req.body.status = 2;
            }
        }

        //console.log(req.body);
        // console.log(req.body.coach);
        if (req.body.coach) {
            var s = req.body.coach;
            var coach = await User.findOne({ id: s });
        } else {
            delete req.body.coach;
        }

        // req.body.coach = coach.id;
        // console.log(coach);

        try {
            var course = await Course.create(req.body).fetch();
            
        } catch {
            var coaches = await User.find({ role: 'coach' }).populate('coach');
            var stadiumList = sails.getStatium();
            return res.view('course/create', { Coaches: coaches, stadiums: stadiumList, error: '具有相同課程編號的課程已存在' });
        }
        // console.log(course);
        if (req.body.coach) {
            await Course.addToCollection(course.id, "coach").members(coach.id);
        }
        // var updatedcoach = await User.findOne({ id: coach.id }).populate('taughtCourse');
        // console.log(updatedcoach);
        // console.log(status);
        // coach.populate('taughtCourse');
        return res.status(201).redirect('/admin/course/list');

    },
    // json function
    json: async function (req, res) {

        var everyones = await Course.find().populate("coach");

        return res.json(everyones);
    },

    read: async function (req, res) {

        var thatCourse = await Course.findOne(req.params.id).populate('coach');

        if (!thatCourse || thatCourse.status == 3) return res.notFound();

        if (req.wantsJSON) {
            return res.json(thatCourse);	    // for ajax request
        } else {
            return res.view('course/read', { course: thatCourse });			// for normal request
        }

    },
    // action - delete 
    delete: async function (req, res) {

        // var r = await Course.updateOne(req.params.id).set({ status: 1 });
        var thatCourse = await Course.findOne(req.params.id);
        var deletedCourse = await Course.updateOne(req.params.id).set({ courseID: '(DELETE - ' + thatCourse.updatedAt + ') ' + thatCourse.courseID, status: 3 });
        // console.log(deletedCourse);
        if (!deletedCourse) return res.notFound();

        if (req.wantsJSON) {
            return res.status(204).json();	    // for ajax request
        } else {
            return res.redirect('/');			// for normal request
        }
        //return res.ok();
    },
    // action - update
    update: async function (req, res) {
        if (req.method == "GET") {
            var thatCourse = await Course.findOne(req.params.id).populate('coach');
            var coaches = await User.find({ role: 'coach' }).populate('coach');
            var stadiumList = sails.getStatium();
            if (!thatCourse) return res.notFound();
            // console.log(thatCourse);
            return res.view('course/update', { course: thatCourse, Coaches: coaches, stadiums: stadiumList });
        } else {
            if (req.body.coach) {
                var s = req.body.coach;
                var coach = await User.findOne({ id: s });
            } else {
                delete req.body.coach;
            }
            if (req.body.quota < 0) {
                req.body.status = 1;
            }
            if (req.body.endDate){
                if (req.body.endDate <= new Date() ){
                    req.body.status = 2;
                } else if (req.body.quota < 0) {
                    req.body.status = 1;
                } else {
                    req.body.status = 0;
                }
            }
            var updatedCourse = await Course.updateOne(req.params.id).set(req.body);
            if (!updatedCourse) return res.notFound();
            if (req.body.coach && !updatedCourse.coach) {
                await Course.addToCollection(updatedCourse.id, "coach").members(coach.id);
            }

            return res.redirect('/admin/course/list');
        }
    },

    // search function
    search: async function (req, res) {


        res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate"); // HTTP 1.1.
        res.setHeader("Pragma", "no-cache"); // HTTP 1.0.
        res.setHeader("Expires", "0"); // Proxies.
        var whereClause = {};

        await Course.update({ status:{'!=':3}, appDeadline: { '<': new Date() } }).set({ status: 2 });
        // console.log(req.query);
        // console.log(req.query.category);
        if (req.query.category) {
            if (typeof (req.query.category) != "string") {
                whereClause.category = { in: req.query.category };
            } else {
                whereClause.category = { contains: req.query.category };
            }
        }

        // console.log(req.query.level);
        if (req.query.level) {
            var levels = req.query.level;
            if (typeof (req.query.level) != "string") {
                whereClause.level = { in: levels };
            } else {
                whereClause.level = { contains: req.query.level };
            }
        }

        if (req.query.weekday) {
            var weekdays = req.query.weekday;
            if (typeof (req.query.weekday) != "string") {
                whereClause.weekday = { in: weekdays };
            } else {
                whereClause.weekday = { contains: req.query.weekday };
            }
        }

        if (req.query.region) {
            var regions = req.query.region;
            if (typeof (req.query.region) != "string") {
                whereClause.region = { in: regions };
            } else {
                whereClause.region = { contains: req.query.region };
            }
        }

        whereClause.endDate = { '>=': new Date() };
        whereClause.status = { '!=': [3] };

        // console.log(whereClause);
        // var parsedMaxCoins = parseInt(req.query.maxCoins);
        // var parsedMinCoins = parseInt(req.query.minCoins);
        // if ((!isNaN(parsedMaxCoins)) && (!isNaN(parsedMinCoins))) {
        //     whereClause.coins = { '<=': parsedMaxCoins, '>=': parsedMinCoins };
        // } else if ((!isNaN(parsedMaxCoins)) && (isNaN(parsedMinCoins))) {
        //     whereClause.coins = { '<=': parsedMaxCoins };
        // } else if ((isNaN(parsedMaxCoins)) && (!isNaN(parsedMinCoins))) {
        //     whereClause.coins = { '>=': parsedMinCoins };
        // }

        // var parsedValidDate = req.query.validOn;
        // if (parsedValidDate) whereClause.expiryDate = { '<=': parsedValidDate };

        if (req.wantsJSON) {
            // var limit = Math.max(req.query.limit, 2) || 2;
            // var offset = Math.max(req.query.offset, 0) || 0;
            var courseList = await Course.find({
                // limit: limit,
                // skip: offset,
                where: whereClause,
                sort: 'category'
            });

            return res.json(courseList);
        } else {
            var courseList = await Course.find({
                // limit: limit,
                // skip: offset,
                where: whereClause,
                sort: 'category'
            });
            var count = await Course.count({
                where: whereClause,
            });
            count = courseList.length;
            return res.view('course/list', { courses: courseList, numOfRecords: count });
        }
    },
};

