export const allItineraryData = [
        // Day 0 - Updated with flight info
        {
            dayGroup: "Day 0",
            dayTitle: "Day 0: 10/5(日) 出發前往歐洲",
            isSpecialDay: "departure", // Flag for special styling
            items: [
                { 地點: "✈️ 台北(TPE) → 阿姆斯特丹(AMS)", 類別: "🌟 行程總覽", 描述: "經香港(HKG)轉機。總飛行與轉機時間約 17小時 5分鐘。" },
                { 地點: "🚗 ", 描述: "從家裡前往桃園國際機場 (TPE)", 類別: "🚗 移動" },
                { 地點: "✈️ 國泰航空 CX531", 描述: "台北(TPE) 19:50 → 香港(HKG) 22:00. 飛行 2h 10m.", 類別: "✈️ 飛行" },
                { 地點: "⏳香港(HKG) 轉機", 描述: "停留 1h 15m.", 類別: "⏳ 轉機" },
                { 地點: "✈️ 國泰航空 CX271", 描述: "香港(HKG) 23:15 → 阿姆斯特丹(AMS) 06:55 (+1日). 飛行 13h 40m. 抵達日期: 10/5 (週日).", 類別: "✈️ 飛行" },
                { 地點: "⏳10/5(日) 06:55", 描述: " 抵達阿姆斯特丹 (AMS)", 類別: "🏁 抵達待轉"},	
                { 地點: "✈️ 10/5(日) 12:30 ", 描述: "Play 航空 AMS -> KEF 13:50", 類別: "✈️ 飛行"}
            ]
        },
        // Day 1
        { dayGroup: "Day 1", dayTitle: "Day 1: 10/6(一) 雷克雅維克", mapCenter: { lat: 64.05, lng: -22.0 }, mapZoom: 9, items: [
            {地點: "凱夫拉維克國際機場 (KEF)", 描述:"航班 13:50 抵達", 類別: "🚗 移動", lat: 63.9850, lng: -22.6056, mapLabel: "KEF 機場", mapPriority: 1}, // Updated description slightly
            {地點: "租車", 描述:"市中心的停車格是要收費的，收費時間星期一至五09:00~18:00；星期六10:00~16:00，其餘時間則是免費" }, // Consider "🚗 活動" or similar
            {地點: "移動: 機場 → 市區 (40m)", 類別: "🚗 移動"},
            {地點: "Svarta Kaffid 麵包湯", 照片: "https://mimihan.tw/wp-content/uploads/20180706200030_83.jpg", 類別: "🧁 吃喝", lat: 64.14446, lng: -21.92346, mapLabel: "Svarta Kaffið", mapPriority: 2, 營業時間: "11:30–22:00"},
            {地點: "Braud & Co麵包店", 描述:"有很多分店",  照片: "https://mimihan.tw/wp-content/uploads/20180503165237_63.jpg", 類別: "🧁 吃喝", lat: 64.1440, lng: -21.9280, mapLabel: "Brauð & Co.", mapPriority: 3, 營業時間: "06:30–17:00"},
            {地點: "市區採買", 類別: "⛱ 景點", lat: 64.1470, lng: -21.9400, mapLabel: "Reykjavik City Center"},
            {地點: "Grettir Guesthouse Downtown Charm", 類別: "🏡 住宿", 描述: "<span style='color:green;'>&#10003;</span>廚房，<span style='color:red;'>&#10007;</span>洗衣，<span style='color:red;'>&#10007;</span>早餐，<span style='color:red;'>&#10007;</span>停車", 照片:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/606428941.jpg?k=b320806e5ae8120e9e96f85a42fd59ede02a2254b487d767a4381df5e47ada66&o=&hp=1" ,網址: "https://www.booking.com/Share-NeX74T", lat: 64.14523324228844, lng: -21.92748344376633, mapLabel: "Grettir Guesthouse", mapPriority: 6},
        ]},
        // Day 2
        { dayGroup: "Day 2", dayTitle: "Day 2: 10/7(二) 黃金圈", mapCenter: { lat: 64.20, lng: -20.7 }, mapZoom: 9, items: [
            {地點: "移動: 雷克雅維克 → 辛格韋德利國家公園 (約 1h 45m)", 類別: "🚗 移動"},
            {地點: "辛格韋德利國家公園Þingvellir National Park- P1停車場", 描述: "(停留約 1~1.5 小時)，世界上唯一在海平面以上的北美板塊與歐亞板塊...", 照片: "https://bobbyworld.tw/wp-content/uploads/pixnet/b60bf02b2f8e7debf6d89af4ee21b3d6.jpg", 類別: "⛱ 景點", lat: 64.25579, lng: -21.13547,   mapLabel: "Þingvellir Parking P1", mapPriority: 1},
            {地點: "阿爾曼納陡崖 (Almannagjá)", 描述: "在辛格韋德利國家公園內，北美版塊、歐亞版塊分界處...", 照片: "https://bobbyworld.tw/wp-content/uploads/pixnet/9297d22ba307260f2a0b01ea7db764f8.jpg", 類別: "⛱ 景點", lat: 64.2659, lng: -21.1205, mapLabel: "Almannagjá", mapPriority: 2},
            {地點: "移動: 辛格韋德利 → Bruarfoss (約 40m)", 類別: "🚗 移動"},
            {地點: "藍色瀑布 Bruarfoss", 照片: "https://mlz24bjzzgqm.i.optimole.com/w:463/h:694/q:mauto/dpr:2.0/ig:avif/https://dragonflytravelblog.com/wp-content/uploads/2024/07/DSC08814.jpg", 類別: "⛱ 景點", lat: 64.26284, lng: -20.51917, mapLabel: "Brúarfoss Waterfall Parking", mapPriority: 3},
            {地點: "移動: Bruarfoss → 間歇泉 (約 25m)", 類別: "🚗 移動"},
            {地點: "史托克間歇泉Strokkur Geyser", 描述: "水柱高度約落在15-20公尺...", 照片: "https://bobbyworld.tw/wp-content/uploads/pixnet/97c71f9eebe535acfed9aaa4f815907c.jpg", 類別: "⛱ 景點", lat: 64.3127, lng: -20.3000, mapLabel: "Strokkur", mapPriority: 4},
            {地點: "移動: 間歇泉 → 古佛斯瀑布 (約 10m)", 類別: "🚗 移動"},
            {地點: "古佛斯瀑布 Gullfoss 黃金", 描述: "世界十大瀑布之一...", 照片: "https://bobbyworld.tw/wp-content/uploads/pixnet/6772ba08ae239a0952383c81195d6dd2.jpg", 類別: "⛱ 景點", lat: 64.3271, lng: -20.1199, mapLabel: "Gullfoss Falls", mapPriority: 5},
            {地點: "GullfossKaffi Ehf羊肉湯", 描述: "Gullfoss Waterfall 旁邊", 照片: "https://bobbyworld.tw/wp-content/uploads/pixnet/9c600eab4147cda40e9a7a0f9e68a57b.jpg", 類別: "🧁 吃喝", lat: 64.3250, lng: -20.1240, mapLabel: "Gullfoss Kaffi"},
            {地點: "移動: 黃金瀑布 → 塞爾福斯 (約 1h)", 類別: "🚗 移動"},
            {地點: "Hotel Hjardarbol", 類別: "🏡 住宿", 
                描述: "<span style='color:red;'>&#10007;</span>廚房，<span style='color:red;'>&#10007;</span>洗衣，早餐 845/人，<span style='color:green;'>&#10003;</span>停車", 
                網址: "https://www.booking.com/Share-oquGKhz", 
                照片:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/572843141.jpg?k=bd25d80ecc24f8438a0fa0e11b86375006dba85f7a0091d7b0f82c9be588dc5e&o=",
                lat: 63.96181409291465, lng: -21.10362489259309, mapLabel: "Hotel Hjardarbol", mapPriority: 6}
        ]},
        // Day 3
        { dayGroup: "Day 3", dayTitle: "Day 3: 10/8(三) 南部", mapCenter: { lat: 63.70, lng: -20.0 }, mapZoom: 8, items: [
            {地點: "8:00 賽爾弗斯 → 野溪溫泉 (約 20m)",類別: "🚗 移動"},
            {地點: "Reykjadalur 野溪溫泉", 描述: "單程約 3 km（1.8 mi），來回 1.5 小時，需爬升約 320 m，預留3小時", 照片: "https://mlz24bjzzgqm.i.optimole.com/w:768/h:512/q:mauto/dpr:2.0/ig:avif/https://dragonflytravelblog.com/wp-content/uploads/2024/07/reykjadalur.jpg", 類別: "⛱ 景點", lat: 64.0238, lng: -21.2116, mapLabel: "Reykjadalur Hot Spring Thermal River Parking", mapPriority: 1},
            {地點: "移動: 賽爾弗斯 → 火口湖 (約 20m - 若從Selfoss出發)", 類別: "🚗 移動"},
            {地點: "凱瑞斯火口湖 Kerid Crater", 描述:"約停留 30 分", 照片: "https://mimihan.tw/wp-content/uploads/20180427004523_29.jpg", 類別: "⛱ 景點", lat: 64.0413, lng: -20.8850, mapLabel: "Kerið", mapPriority: 2},
            {地點: "移動: 火口湖 → 塞里雅蘭瀑布 (約 1h 10m)", 類別: "🚗 移動"},
            {地點: "塞里雅瀑布 Seljalandsfoss", 描述: "水簾洞瀑布，有廁所，約停留 40 分", 照片: "https://mimihan.tw/wp-content/uploads/20180507121849_84.jpg", 類別: "⛱ 景點", lat: 63.6156, lng: -19.9886, mapLabel: "Seljalandsfoss", mapPriority: 3},
            {地點: "移動: 塞里雅瀑布 → 斯科加爾瀑布 (約 31m)", 類別: "🚗 移動"},
            {地點: "斯科加爾瀑布 Skogafoss", 描述: "高人氣《白日夢冒險王》拍攝場景..., 約停留 40 分", 照片: "https://bobbyworld.tw/wp-content/uploads/pixnet/b5354d87a4320ee73ff7fafc4ba00d30.jpg", 類別: "⛱ 景點", lat: 63.5321, lng: -19.5114, mapLabel: "Skógafoss", mapPriority: 4},
            {地點: "移動: 斯科加爾瀑布 → 黑沙灘 (約 32m)", 類別: "🚗 移動"},
            {地點: "Reynisfjara黑沙灘", 描述: "海蝕洞是千年前火山噴發下的遺跡...，約停留 40 分", 照片: "https://bobbyworld.tw/wp-content/uploads/pixnet/9ed7a628e2f547092920693ada18878e.jpg, https://bobbyworld.tw/wp-content/uploads/pixnet/4da10f837463f77bb344b3c267fa4950.jpg", 類別: "⛱ 景點", lat: 63.4027, lng: -19.0452, mapLabel: "Reynisfjara Beach", mapPriority: 5},
            {地點: "The Barn", 類別: "🏡 住宿", 描述: "<span style='color:green;'>&#10003;</span>廚房，<span style='color:red;'>&#10007;</span>洗衣，<span style='color:red;'>&#10007;</span>早餐，<span style='color:green;'>&#10003;</span>停車", 網址: "https://www.booking.com/Share-fIi5i4", lat: 63.43602218824341, lng: -19.06163856764566, mapLabel: "The Barn", mapPriority: 6}
        ]},
        // Day 4
        { dayGroup: "Day 4", dayTitle: "Day 4: 10/9(四) 維克周邊與冰洞", mapCenter: { lat: 63.6, lng: -18.5 }, mapZoom: 9, items: [
            {地點: "Vik 集合 10:00 卡特拉火山冰洞 3h", 台幣: "7,000", 網址:"https://adventures.is/iceland/day-tours/ice-caves/katla-ice-cave-tour-under-the-volcano/", 類別: "🎭 活動", lat: 63.4177, lng: -18.9976, mapLabel: "維克(冰洞集合)", mapPriority: 1}, // Changed ⛱ 景點 to 🎭 活動
            {地點: "移動: Vik → 羽毛峽谷 (約 50m)", 類別: "🚗 移動"},
            {地點: "羽毛峽谷 (Fjadrargljufur Canyon)", 照片: "https://bobbyworld.tw/wp-content/uploads/pixnet/c62297747249d35459e0fde974ee8204.jpg", 類別: "⛱ 景點", lat: 63.7713, lng: -18.1719, mapLabel: "Fjaðrárgljúfur", mapPriority: 2},
            {地點: "移動: 羽毛峽谷 → Skaftafell 區域 (約 1h)", 類別: "🚗 移動"},
            {地點: "玄武岩黑瀑布（Svartifoss", 描述: "到時候決定要不要去", 照片: "https://mimihan.tw/wp-content/uploads/20230326222137_3.jpg", 類別: "⛱ 景點", lat: 64.01637, lng: -16.9691857, mapLabel: "Svartifoss", mapPriority: 3},
            {地點: "Hvoll Hostel", 照片:"https://content.skyscnr.com/available/1885334561/1885334561_WxH.jpg", 類別: "🏡 住宿", 描述: "<span style='color:green;'>&#10003;</span>廚房，<span style='color:red;'>&#10007;</span>洗衣，<span style='color:red;'>&#10007;</span>早餐，<span style='color:green;'>&#10003;</span>停車", 網址: "https://www.booking.com/Share-80MqhM", lat: 63.9095725904926, lng: -17.682835288876085, mapLabel: "Hvoll Hostel", mapPriority: 5}
        ]},
        // Day 5
        { dayGroup: "Day 5", dayTitle: "Day 5: 10/10(五) 冰川健行與冰河湖", mapCenter: { lat: 64.03, lng: -16.5 }, mapZoom: 9, items: [
            {地點: "Skaftafell 冰川健行 5h 11:00", 網址: "https://cn.guidetoiceland.is/connect-with-locals/6640/iceland-local-tour-skaftafell-svinafellsjokull-glacier-hiking-experience", 照片: "https://adventures.is/media/237243/iceland-skaftafell-glacier-hiking-on-spikes.jpg?anchor=center&mode=crop&width=330&height=188&format=webp&quality=80&rnd=133728672360000000", 類別: "🎭 活動", lat: 64.0162, lng: -16.9661, mapLabel: "Skaftafell Visitor Centre (健行集合)", mapPriority: 1}, // Changed ⛱ 景點 to 🎭 活動
            {地點: "移動: Skaftafell → 冰河湖 (約 50m)", 類別: "🚗 移動"},
            {地點: "Skyrhusid HI Hostel", 類別: "🏡 住宿", 描述: "<span style='color:green;'>&#10003;</span>廚房，<span style='color:red;'>&#10007;</span>洗衣，<span style='color:red;'>&#10007;</span>早餐，<span style='color:green;'>&#10003;</span>停車", 網址: "https://www.booking.com/Share-YoGsX0", lat: 64.1295014055353, lng: -16.01554051772359, 照片: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/278680612.jpg?k=ee223e58c9a9b45210b21577298dfb8562c8357725eda10ad488c555df2d6b5b&o=", mapLabel: "Skyrhusid HI Hostel", mapPriority: 2}
        ]},
        // Day 6
        { dayGroup: "Day 6", dayTitle: "Day 6: 10/11(六) 東邊 - 冰河湖到埃伊爾斯塔濟", mapCenter: { lat: 64.7, lng: -15.3 }, mapZoom: 7, items: [
            {地點: "Jokulsarlon冰河湖獨木舟", 台幣: "2382", 照片: "https://mlz24bjzzgqm.i.optimole.com/w:768/h:512/q:mauto/dpr:2.0/ig:avif/https://dragonflytravelblog.com/wp-content/uploads/2024/08/IMG_0303.jpg", 類別: "🎭 活動", lat: 64.0484, lng: -16.1794, mapLabel: "Jökulsárlón", mapPriority: 1}, // Changed ⛱ 景點 to 🎭 活動
            {地點: "鑽石冰沙灘", 照片: "https://mimihan.tw/wp-content/uploads/20230326222910_99.jpg", 類別: "⛱ 景點", lat: 64.0450, lng: -16.1780, mapLabel: "Diamond Beach", mapPriority: 2},
            {地點: "移動: 冰河湖 → Vestrahorn (約 1h 21m)", 類別: "🚗 移動"},
            {地點: "Vestrahorn 蝙蝠山 x 維京人聚落 Viking Village", 照片: "https://kavana.tw/wp-content/uploads/pixnet/f2174d2460d318a9f09be7bb3a57b0db.jpg, https://kavana.tw/wp-content/uploads/pixnet/4cc7f163b96e90a32d2ab027110392b7.jpg", 類別: "⛱ 景點", lat: 64.2470, lng: -14.9960, mapLabel: "Stokksnes (Vestrahorn Viewpoint)", mapPriority: 3},
            {地點: "Pakkhús Restaurant 小龍蝦", 照片: "https://mimihan.tw/wp-content/uploads/20180628173749_56.jpg", 類別: "🧁 吃喝", lat: 64.2500, lng: -15.2080, mapLabel: "Pakkhús Restaurant (Höfn)"},
            {地點: "移動: Vestrahorn/Höfn → 埃伊爾斯塔濟 (約 3h 18m)", 類別: "🚗 移動"},
            {地點: "Bankinn - Hotel by Aldan", 類別: "🏡 住宿", 描述: "<span style='color:green;'>&#10003;</span>廚房，<span style='color:red;'>&#10007;</span>洗衣，早餐 588/人，<span style='color:green;'>&#10003;</span>停車", 網址: "https://www.booking.com/Share-B9kJa6", lat: 65.26192036188023, lng: -14.009229280026773, mapLabel: "Bankinn - Hotel by Aldan", mapPriority: 4}
        ]},
        // Day 7
        { dayGroup: "Day 7", dayTitle: "Day 7: 10/12(日) 北部 - 米湖周邊", mapCenter: { lat: 65.6, lng: -16.0 }, mapZoom: 8, items: [
            {地點: "移動: 埃伊爾斯塔濟 → Seyðisfjörður (來回約 1h)", 類別: "🚗 移動"},
            {地點: "Seyðisfjörður 白日夢冒險王小鎮", 照片: "https://mimihan.tw/wp-content/uploads/20230408152422_67.jpg", 類別: "⛱ 景點", lat: 65.2600, lng: -14.0100, mapLabel: "Seyðisfjarðarkirkja", mapPriority: 1},
            {地點: "移動: 埃伊爾斯塔濟 → Viti (約 2h)", 類別: "🚗 移動"},
            {地點: "Viti 維提火山湖 👍", 照片: "https://mimihan.tw/wp-content/uploads/20180529165813_72.jpg", 類別: "⛱ 景點", lat: 65.7165, lng: -16.7522, mapLabel: "Víti crater (Krafla)", mapPriority: 2},
            {地點: "移動: Viti → Námafjall Hverir (約 11m)", 類別: "🚗 移動"},
            {地點: "Námafjall Hverir 火山地熱谷", 照片: "https://mimihan.tw/wp-content/uploads/20180529165813_72.jpg", 類別: "⛱ 景點", lat: 65.6415, lng: -16.8093, mapLabel: "Hverir (Námafjall)", mapPriority: 3},
            {地點: "洞穴溫泉Grjótagjá", 照片: "https://mimihan.tw/wp-content/uploads/20180603221410_36.jpg", 類別: "⛱ 景點", lat: 65.6262, lng: -16.8820, mapLabel: "Grjótagjá cave", mapPriority: 4},
            {地點: "米湖溫泉", 照片: "https://mimihan.tw/wp-content/uploads/20180530184317_85.jpg", 類別: "🎭 活動", lat: 65.6305, lng: -16.8480, mapLabel: "Mývatn Nature Baths", mapPriority: 5}, // Changed ⛱ 景點 to 🎭 活動 (bathing is an activity)
            {地點: "Vogafjos Cafe", 類別: "🧁 吃喝", lat: 65.5913, lng: -16.9204, mapLabel: "Vogafjós Farm Resort", mapPriority: 6},
            {地點: "Eldá Guesthouse", 類別: "🏡 住宿", 描述: "<span style='color:green;'>&#10003;</span>廚房，<span style='color:red;'>&#10007;</span>洗衣，<span style='color:red;'>&#10007;</span>早餐，<span style='color:green;'>&#10003;</span>停車，NT$8,399，雙人房", 網址: "https://www.booking.com/Share-y95ofhe", lat: 65.6411510806318, lng: -16.90701006974602, 照片: "https://gti.images.tshiftcdn.com/2947681/x/0/62802992.jpg?ixlib=php-3.3.0&ar=1.91%3A1&w=1200&fit=crop", mapLabel: "Eldá Guesthouse", mapPriority: 7}
        ]},
        // Day 8
        { dayGroup: "Day 8", dayTitle: "Day 8: 10/13(一) 米湖到阿克雷里", mapCenter: { lat: 65.65, lng: -17.5 }, mapZoom: 9, items: [
            {地點: "Hverfjall 惠爾火山 2-3h", 照片: "https://mimihan.tw/wp-content/uploads/20180529132824_95.jpg", 類別: "🎭 活動", lat: 65.6033, lng: -16.8734, mapLabel: "Hverfjall", mapPriority: 1}, // Hiking is an activity
            {地點: "黑色城堡 Dimmuborgir", 照片: "https://mimihan.tw/wp-content/uploads/20180529221509_26.jpg", 類別: "⛱ 景點", lat: 65.5911, lng: -16.9119, mapLabel: "Dimmuborgir", mapPriority: 2},
            {地點: "移動: 米湖 → Godafoss (約 50m)", 類別: "🚗 移動"},
            {地點: "Godafoss眾神瀑布", 照片: "https://mimihan.tw/wp-content/uploads/20180609144626_42.jpg", 類別: "⛱ 景點", lat: 65.6828, lng: -17.5503, mapLabel: "Goðafoss", mapPriority: 3},
            {地點: "移動: Godafoss -> Akureyri(Kaffi Ilmur ehf) (約 40m)", 類別: "🚗 移動"},
            {地點: "Kaffi Ilmur ehf", 類別: "🧁 吃喝", 描述: "自助式Buffer吃到飽", 克朗:"2,290", lat: 65.6805, lng: -18.0903, mapLabel: "Kaffi Ilmur", mapPriority: 4},
            {地點: "Brynja 冰淇淋", 描述:"Hafnarstræti 購物街市區晃晃", 類別: "🧁 吃喝", lat: 65.6790, lng: -18.0970, mapLabel: "Brynja", mapPriority: 5},
            {地點: "K16Apartments", 類別: "🏡 住宿", 描述: "<span style='color:green;'>&#10003;</span>廚房，<span style='color:green;'>&#10003;</span>洗衣，<span style='color:red;'>&#10007;</span>早餐，<span style='color:green;'>&#10003;</span>停車，NT$5,006，1張加大雙人床1張沙發床", 網址: "https://www.booking.com/Share-iepTNB", lat: 65.26190464800021, lng: -14.009830094386174, 照片: "https://suhowtravel.com/wp-content/uploads/2024/09/K16Apartments-scaled-e1726112596746.jpg", mapLabel: "K16Apartments", mapPriority: 6}
        ]},
        // Day 9
        { dayGroup: "Day 9", dayTitle: "Day 9: 10/14(二) 北岸風光", mapCenter: { lat: 65.5, lng: -19.8 }, mapZoom: 8, items: [
            {地點: "移動: Akureyri → Bjórböðin SPA (約 31m)", 描述:"看要不要去？", 類別: "🚗 移動"},
            {地點: "Bjórböðin SPA", 台幣:"4600", 描述: "泡 25分鐘 兩人 ＋ 休息區躺25分鐘...", 照片: "https://mimihan.tw/wp-content/uploads/20180613111632_26.jpg", 類別: "🎭 活動", lat: 66.0698, lng: -18.5323, mapLabel: "Bjórböðin - The Beer Spa"}, // SPA is an activity
            {地點: "移動: Akureyri → Glaumbær (約 1h 22m)", 類別: "🚗 移動"},
            {地點: "Glaumbaer Museum 草屋博物館", 照片: "https://mimihan.tw/wp-content/uploads/20180618141607_36.jpg", 類別: "⛱ 景點", lat: 65.6085, lng: -19.5000, mapLabel: "Glaumbær Farm & Museum", mapPriority: 1},
            {地點: "移動: Glaumbær → Blönduóskirkja (約 43m)", 類別: "🚗 移動"},
            {地點: "Blonduoskirkja 火山教堂、鯨魚教堂", 描述: "可順便加油", 照片: "https://mimihan.tw/wp-content/uploads/20180618141633_68.jpg", 類別: "⛱ 景點", lat: 65.6580, lng: -20.2785, mapLabel: "Blönduóskirkja", mapPriority: 2},
            {地點: "移動: Blönduóskirkja → 巨人峽谷 (約 37m)", 類別: "🚗 移動"},
            {地點: "巨人峽谷 (Kolugljúfur Canyon)", 類別: "⛱ 景點", lat: 65.3303, lng: -20.7008, mapLabel: "Kolugljúfur Canyon", mapPriority: 3},
            {地點: "Fagrabrekka Guesthouse", 類別: "🏡 住宿", 描述: "<span style='color:green;'>&#10003;</span>廚房，<span style='color:red;'>&#10007;</span>洗衣，<span style='color:red;'>&#10007;</span>早餐，<span style='color:green;'>&#10003;</span>停車，NT$6,243，小型雙人房－附共用衛浴", 網址: "https://www.booking.com/Share-bHZrFT6", lat: 65.16652428821554, lng: -20.792702936640737, 照片: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/388785829.jpg?k=ce43059e0eba37b9b9a009299298845542d60277c611fd5ac938f98c1963cc86&o=", mapLabel: "Fagrabrekka Guesthouse", mapPriority: 4}
        ]},
        // Day 10
        { dayGroup: "Day 10", dayTitle: "Day 10: 10/15(三) 斯奈山半島", mapCenter: { lat: 64.85, lng: -23.3 }, mapZoom: 9, items: [
            {地點: "移動: 華姆斯唐吉 → 教堂山 (約 2h 36m)", 類別: "🚗 移動"},
            {地點: "Kirkjufellsfoss 教堂山", 照片: "https://mimihan.tw/wp-content/uploads/20180620190950_46.jpg", 類別: "⛱ 景點", lat: 64.9260, lng: -23.2719, mapLabel: "Kirkjufellsfoss", mapPriority: 1},
            {地點: "移動: 教堂山 → Ólafsvík (約 20m)", 類別: "🚗 移動"},
            {地點: "Ólafsvík小鎮", 描述: "進入斯奈山國家公園的最後一個比較大的城鎮", 類別: "⛱ 景點", lat: 64.8940, lng: -23.7100, mapLabel: "Ólafsvík", mapPriority: 2},
            {地點: "移動: Ólafsvík → SAXHÓLAR CRATER (約 20m)", 類別: "🚗 移動"},
            {地點: "SAXHÓLAR CRATER 火山", 描述: "是一座沈睡400年的火山", 類別: "⛱ 景點", lat: 64.8510, lng: -23.9150, mapLabel: "Saxhóll Crater", mapPriority: 3},
            {地點: "VATNSHELLIR CAVE 地心探險", 描述: "每個小時有一團，約莫45分鐘", 類別: "🎭 活動", lat: 64.7520, lng: -23.8200, mapLabel: "Vatnshellir Cave", mapPriority: 4}, // Caving is an activity
            {地點: "Londrangar 怪物海岸", 類別: "⛱ 景點", lat: 64.7360, lng: -23.7800, mapLabel: "Lóndrangar", mapPriority: 5},
            {地點: "BÁRÐAR SAGA 石巨人", 類別: "⛱ 景點", lat: 64.7744, lng: -23.7791, mapLabel: "Bárður Snæfellsás (Arnarstapi)", mapPriority: 6},
            {地點: "移動: Arnarstapi → Ytri Tunga (約 30m)", 類別: "🚗 移動"},
            {地點: "Ytri Tunga 海豹沙灘", 描述: "太晚的話可以隔天來", 類別: "⛱ 景點", lat: 64.8001, lng: -23.0346, mapLabel: "Ytri Tunga Beach", mapPriority: 7},
            {地點: "Grundarfjordur Hostel", 類別: "🏡 住宿", 描述: "<span style='color:green;'>&#10003;</span>廚房，<span style='color:red;'>&#10007;</span>洗衣，<span style='color:red;'>&#10007;</span>早餐，<span style='color:green;'>&#10003;</span>停車，NT$5,894，全上下舖", 網址: "https://www.booking.com/Share-rdYIiX", lat: 64.92306302849966, lng: -23.257502113944486, 照片: "https://mimihan.tw/wp-content/uploads/20180620203603_42.jpg", mapLabel: "Grundarfjordur Hostel", mapPriority: 8}
        ]},
        // Day 11
        { dayGroup: "Day 11", dayTitle: "Day 11: 10/16(四) 返回雷克雅維克", mapCenter: { lat: 64.5, lng: -22.5 }, mapZoom: 8, items: [
            {地點: "移動: 斯奈山半島 → Sky Lagoon (約 2h)", 類別: "🚗 移動"},
            {地點: "Sky Lagoon", 類別: "🎭 活動", lat: 64.1278, lng: -21.9519, mapLabel: "Sky Lagoon", mapPriority: 1}, // Bathing is an activity
            {地點: "Harpa音樂廳", 描述: "曾被《紐約時報》評選「全球最值得旅遊的41個地方」之一", 類別: "⛱ 景點", lat: 64.1502, lng: -21.9348, mapLabel: "Harpa Concert Hall and Conference Centre", mapPriority: 5, 營業時間: "10:00–18:00 (周日至周二)；10:00–20:00 (周三至周六)"},
            {地點: "哈爾格林姆教堂( Hallgrímskirkja)", 克朗: "1,400", 描述: "全冰島最大教堂，風格前衛，外觀如被風化的柱狀玄武岩", 類別: "⛱ 景點", lat: 64.1417, lng: -21.9266, mapLabel: "Hallgrímskirkja", mapPriority: 6, 營業時間: "10:00~17:00\n 景觀塔：10:00~16:30"},
            {地點: "移動: 市區 → 藍湖 (42m)", 類別: "🚗 移動"},
            {地點: "藍湖", 類別: "⛱ 景點", lat: 63.8806, lng: -22.4496, mapLabel: "Blue Lagoon", mapPriority: 2, 營業時間: "08:00–22:00"},
           
            {地點: "Grettir Guesthouse Downtown Charm", 類別: "🏡 住宿", 描述: "<span style='color:green;'>&#10003;</span>廚房，<span style='color:red;'>&#10007;</span>洗衣，<span style='color:red;'>&#10007;</span>早餐，<span style='color:green;'>&#10003;</span>停車，NT$7,996，雙人房", 網址: "https://www.booking.com/Share-NeX74T", lat: 64.14523324228844, lng: -21.92748344376633, 照片: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/606428941.jpg?k=b320806e5ae8120e9e96f85a42fd59ede02a2254b487d767a4381df5e47ada66&o=&hp=1", mapLabel: "Grettir Guesthouse", mapPriority: 7}
        ]},
        // Day 12
        { dayGroup: "Day 12", dayTitle: "Day 12: 10/17(五) 返回阿姆斯特丹", mapCenter: { lat: 64.05, lng: -22.2 }, mapZoom: 9, items: [
            {地點: "KEF 機場還車、搭機", 描述: "要確認下可以還車的時間", 類別: "🚗 移動", lat: 63.9850, lng: -22.6056, mapLabel: "KEF Airport", mapPriority: 1},
            {地點: "10:30班機", 類別: "✈️ 飛行"},
            {地點: "移動: 雷克雅維克 → AMS", 類別: "🚗 移動"},
            {地點: "抵達 AMS 15:45  ",  類別: "✈️ 飛行"},
        ]},
        // 荷蘭行程開始
        // Day 13 (from ams.md Day 1)
        {
            dayGroup: "Day 13",
            dayTitle: "Day 13: 10/18(六) 阿姆斯特丹往返羊角村",
            mapCenter: { lat: 52.6749, lng: 6.0889 }, // Approximate center for Giethoorn
            mapZoom: 12,
            items: [
                { 地點: "阿姆斯特丹中央站 → Steenwijk → 公車70/270 → 羊角村", 描述: "07:30 出發", 類別: "🚄 移動", 網址: "https://maps.google.com/?cid=5909847684150077508", mapLabel: "羊角村", mapPriority: 1, lat: 52.3791, lng: 4.9003 }, // Amsterdam Centraal
                { 地點: "羊角村", 描述: "運河風光：村內無汽車道路，以水道取代馬路，漫步於茅草屋與木橋間宛如童話。\n小船泛舟：租手划或電動小船，近距離欣賞水畔農舍與橋樑倒影。\n田園景致：Bovenwijde 湖畔遠眺開闊水面與綠野，拍攝最經典運河＋茅屋全景。", 類別: "🌷 景點", mapLabel: "羊角村", mapPriority: 2, lat: 52.6749, lng: 6.0889 },
                { 地點: "返回阿姆斯特丹", 描述: "15:30 出發", 類別: "🚄 移動", mapLabel: "阿姆斯特丹", mapPriority: 3, lat: 52.3791, lng: 4.9003 },
                { 地點: "夜遊阿姆斯特丹運河", 類別: "🌃 活動", 網址: "https://maps.google.com/?cid=2379724085717603866", mapLabel: "阿姆斯特丹運河", mapPriority: 4, lat: 52.3676, lng: 4.9041 },
                { 地點: "ibis Amsterdam Centre 或 Hotel Library Amsterdam", 類別: "🏨 住宿", mapLabel: "阿姆斯特丹住宿", mapPriority: 5, 網址: "https://www.booking.com/hotel/nl/ibiscentre.zh-tw.html" } // Using Amsterdam Centraal for ibis
            ]
        },
        // Day 14 (from ams.md Day 2)
        {
            dayGroup: "Day 14",
            dayTitle: "Day 14: 10/19(日) 阿姆斯特丹 → 小孩堤防 → 鹿特丹",
            mapCenter: { lat: 51.9244, lng: 4.4777 }, // Rotterdam Central Station
            mapZoom: 13,
            items: [
                { 地點: "阿姆斯特丹 → 鹿特丹中央站", 描述: "08:00 搭火車從阿姆斯特丹出發到鹿特丹，\n先把行李寄放在鹿特丹中央車站的置物櫃或飯店，\n輕裝前往小孩堤防遊玩", 類別: "🚄 移動", mapLabel: "鹿特丹中央站", mapPriority: 1, lat: 51.9244, lng: 4.4777 },
                { 地點: "小孩堤防", 描述: "水上巴士202號至小孩堤防。\n排水風車群：19座18世紀風車展示荷蘭治水技術。\n風車博物館：部分風車可入內，了解抽水機構運作。\n運河漫步／遊船：沿堤防步道或水上遊船欣賞壯觀風車全景。", 類別: "🌷 景點", 網址: "http://googleusercontent.com/maps/google.com/45", mapLabel: "小孩堤防", mapPriority: 2, lat: 51.8837436, lng: 4.6330916 }, // Placeholder CID for Kinderdijk
                { 地點: "返回鹿特丹", 描述: "14:30 出發", 類別: "🚤 移動", mapLabel: "鹿特丹", mapPriority: 3, lat: 51.9244, lng: 4.4777 },
                { 地點: "伊拉斯莫斯橋、馬克拱廊市場", 類別: "🛍️ 景點", 網址: "https://goo.gl/maps/9bEX1evLoA62", mapLabel: "伊拉斯莫斯橋", mapPriority: 4, lat: 51.9079, lng: 4.4826 }, // Using Markthal coordinates for both
                { 地點: "Holiday Inn Express Rotterdam Central Station", 類別: "🏨 住宿", mapLabel: "鹿特丹住宿", mapPriority: 5, 網址: "https://www.booking.com/hotel/nl/holiday-inn-express-rotterdam-central-station.zh-tw.html" } // Using Rotterdam Centraal for Holiday Inn
            ]
        },
        // Day 15 (from ams.md Day 3)
        {
            dayGroup: "Day 15",
            dayTitle: "Day 15: 10/20(一) 鹿特丹 → 布魯日 Bruges",
            mapCenter: { lat: 51.2085, lng: 3.2250 }, // Bruges Market Square
            mapZoom: 13,
            items: [
                { 地點: "鹿特丹 → 布魯日", 描述: "08:00 出發，約2–2.5小時", 類別: "🚄 移動", mapLabel: "布魯日", mapPriority: 1, lat: 51.2085, lng: 3.2250 },
                { 地點: "布魯日漫遊", 描述: "市集廣場（Markt）與鐘樓：壯麗哥德鐘樓與行會會館雕飾。\n運河遊船：30分鐘小船航行，近距離欣賞中世紀建築倒映。\n愛情湖與貝居安會院：天鵝湖畔與白牆庭院，最適拍照靜心。", 類別: "🌷 景點", 網址: "http://googleusercontent.com/maps/google.com/47", mapLabel: "布魯日老城", mapPriority: 2, lat: 51.2085, lng: 3.2250 }, // Bad URL
                { 地點: "布魯日運河遊船", 描述: "14:00 出發", 類別: "🛶 活動", 網址: "http://googleusercontent.com/maps/google.com/48", mapLabel: "布魯日運河", mapPriority: 3, lat: 51.2085, lng: 3.2250 }, // Bad URL
                { 地點: "愛情湖公園", 類別: "🌳 景點", 網址: "https://goo.gl/maps/WTRukQNRnDu", mapLabel: "愛情湖公園", mapPriority: 4, lat: 51.2018, lng: 3.2167 },
                { 地點: "貝居安會院", 類別: "⛪ 景點", 網址: "https://goo.gl/maps/edkDpguhwDC2", mapLabel: "貝居安會院", mapPriority: 5, lat: 51.2038, lng: 3.2190 },
                { 地點: "Hotel Bourgoensch Hof", 類別: "🏨 住宿", mapLabel: "布魯日住宿", mapPriority: 6, 網址: "https://www.booking.com/hotel/be/bourgoensch-hof.zh-tw.html" } // Using Bruges Market Square for Hotel
            ]
        },
        // Day 16 (from ams.md Day 4)
        {
            dayGroup: "Day 16",
            dayTitle: "Day 16: 10/21(二) 布魯日 → 根特日遊 → 布魯日",
            mapCenter: { lat: 51.0543, lng: 3.7174 }, // Ghent
            mapZoom: 13,
            items: [
                { 地點: "布魯日 → 根特", 描述: "08:30 出發，25 分鐘", 類別: "🚄 移動", 網址: "https://goo.gl/maps/ygC7f8NjNa32", mapLabel: "根特", mapPriority: 1, lat: 51.0543, lng: 3.7174 },
                { 地點: "伯爵城堡", 類別: "🏰 景點", 網址: "https://goo.gl/maps/y8ZT7TJRG6K2", mapLabel: "伯爵城堡", mapPriority: 2, lat: 51.0570, lng: 3.7200 },
                { 地點: "格拉斯利河岸 & 科恩利河岸", 類別: "🌉 景點", 網址: "https://goo.gl/maps/WWesdvReKh32", mapLabel: "格拉斯利河岸", mapPriority: 3, lat: 51.0543, lng: 3.7174 },
                { 地點: "聖巴夫大教堂", 類別: "⛪ 景點", 網址: "https://goo.gl/maps/N8Qj6S64Yks", mapLabel: "聖巴夫大教堂", mapPriority: 4, lat: 51.0543, lng: 3.7174 },
                { 地點: "返回布魯日", 描述: "16:30 出發", 類別: "🚄 移動", mapLabel: "布魯日", mapPriority: 5, lat: 51.2085, lng: 3.2250 },
                { 地點: "Hotel Bourgoensch Hof", 類別: "🏨 住宿", mapLabel: "布魯日住宿", mapPriority: 6, 網址: "https://www.booking.com/hotel/be/bourgoensch-hof.zh-tw.html" }
            ]
        },
        // Day 17 (from ams.md Day 5)
        {
            dayGroup: "Day 17",
            dayTitle: "Day 17: 10/22(三) 布魯日 → 布魯塞爾 Brussels",
            mapCenter: { lat: 50.8467, lng: 4.3525 }, // Grand Place
            mapZoom: 13,
            items: [
                { 地點: "布魯日 → 布魯塞爾", 描述: "09:00 出發，約1小時", 類別: "🚄 移動", mapLabel: "布魯塞爾", mapPriority: 1, lat: 50.8467, lng: 4.3525 },
                { 地點: "大廣場", 類別: "🏛️ 景點", 網址: "https://goo.gl/maps/TCm7Gnh8XfH2", mapLabel: "大廣場", mapPriority: 2, lat: 50.8467, lng: 4.3525 },
                { 地點: "午餐 Rue des Bouchers 美食街", 類別: "🍟 吃喝", 網址: "https://goo.gl/maps/HY7rxET3W9x", mapLabel: "Rue des Bouchers 美食街", mapPriority: 3, lat: 50.8485, lng: 4.3500 },
                { 地點: "聖於貝爾長廊", 類別: "🛍️ 景點", 網址: "https://goo.gl/maps/PuRP9NdhjNz", mapLabel: "聖於貝爾長廊", mapPriority: 4, lat: 50.8485, lng: 4.3500 },
                { 地點: "小尿童", 類別: "🚶 景點", 網址: "https://goo.gl/maps/L41eBytXemH2", mapLabel: "小尿童", mapPriority: 5, lat: 50.8449, lng: 4.3500 },
                { 地點: "蒙德藝術山", 類別: "🖼️ 景點", 網址: "https://goo.gl/maps/p94diVKNxkt", mapLabel: "蒙德藝術山", mapPriority: 6, lat: 50.8450, lng: 4.3580 },
                { 地點: "easyHotel Brussels City Centre", 類別: "🏨 住宿", mapLabel: "布魯塞爾住宿", mapPriority: 7, 網址: "https://www.booking.com/hotel/be/easyhotel-brussels-city-centre.zh-tw.html" }
            ]
        },
        // Day 18 (from ams.md Day 6)
        {
            dayGroup: "Day 18",
            dayTitle: "Day 18: 10/23(四) 布魯塞爾 → 代爾夫特 Delft → 阿姆斯特丹",
            mapCenter: { lat: 52.0116, lng: 4.3571 }, // Delft
            mapZoom: 13,
            items: [
                { 地點: "布魯塞爾 → 鹿特丹 → 代爾夫特", 描述: "08:00 出發", 類別: "🚄 移動", 網址: "https://goo.gl/maps/fZbJK7vA4Wz", mapLabel: "代爾夫特", mapPriority: 1, lat: 52.0116, lng: 4.3571 },
                { 地點: "代爾夫特老城區", 描述: "市集廣場（Markt）與新教堂（Nieuwe Kerk）斜塔。\n舊教堂（Oude Kerk）斜塔拍照。\n皇家代爾夫特藍陶工廠（若有時間）。", 類別: "🏘️ 景點", 網址: "https://goo.gl/maps/LNjV8nNv51P2", mapLabel: "代爾夫特老城", mapPriority: 2, lat: 52.0116, lng: 4.3571 },
                { 地點: "市集廣場", 類別: "🛍️ 景點", 網址: "https://goo.gl/maps/EiwDXPjogkM2", mapLabel: "市集廣場", mapPriority: 3, lat: 52.0116, lng: 4.3571 },
                { 地點: "代爾夫特 → 阿姆斯特丹", 描述: "14:30 出發", 類別: "🚄 移動", mapLabel: "阿姆斯特丹", mapPriority: 4, lat: 52.3791, lng: 4.9003 },
                { 地點: "九條街", 類別: "🚴 活動", 網址: "https://goo.gl/maps/zKwiHJ88k7F2", mapLabel: "九條街", mapPriority: 5, lat: 52.3676, lng: 4.8910 },
                { 地點: "喬丹區", 類別: "🚶 景點", 網址: "https://goo.gl/maps/RnvK8ZRZAxw", mapLabel: "喬丹區", mapPriority: 6, lat: 52.3740, lng: 4.8830 },
                { 地點: "ibis Amsterdam Centre 或 Hotel Library Amsterdam", 類別: "🏨 住宿", mapLabel: "阿姆斯特丹住宿", mapPriority: 7, 網址: "https://www.booking.com/hotel/nl/ibiscentre.zh-tw.html" }
            ]
        },
        // Day 19 (from ams.md Day 7)
        {
            dayGroup: "Day 19",
            dayTitle: "Day 19: 10/24(五) 阿姆斯特丹近郊 → 薩恩塞斯安斯風車村 → 市區漫遊",
            mapCenter: { lat: 52.4709, lng: 4.7989 }, // Zaanse Schans
            mapZoom: 13,
            items: [
                { 地點: "阿姆斯特丹中央站 → 薩恩塞斯安斯", 描述: "09:00 出發", 類別: "🚄 移動", 網址: "https://goo.gl/maps/rt58PmoxUB62", mapLabel: "風車村", mapPriority: 1, lat: 52.3791, lng: 4.9003 }, // Amsterdam Centraal
                { 地點: "薩恩塞斯安斯風車村", 描述: "保留運轉中的18世紀製油、鋸木等風車。\n奶酪農舍與木鞋作坊示範並試吃／購買紀念品。\n沿桑河畔步道拍攝標誌性風車草地鄉村景觀。", 類別: "🌷 景點", mapLabel: "薩恩塞斯安斯風車村", mapPriority: 2, lat: 52.4709, lng: 4.7989 },
                { 地點: "返回阿姆斯特丹", 描述: "13:30 出發", 類別: "🚄 移動", mapLabel: "阿姆斯特丹", mapPriority: 3, lat: 52.3791, lng: 4.9003 },
                { 地點: "馮德爾公園", 類別: "🌳 景點", 網址: "https://goo.gl/maps/4Y8tEymHc7G2", mapLabel: "馮德爾公園", mapPriority: 4, lat: 52.3584, lng: 4.8680 },
                { 地點: "運河夜遊船", 類別: "🌃 活動", 網址: "https://goo.gl/maps/CQtQjx95PQK2", mapLabel: "運河夜遊船", mapPriority: 5, lat: 52.3676, lng: 4.9041 },
                { 地點: "ibis Amsterdam Centre 或 Hotel Library Amsterdam", 類別: "🏨 住宿", mapLabel: "阿姆斯特丹住宿", mapPriority: 6, 網址: "https://www.booking.com/hotel/nl/ibiscentre.zh-tw.html" }
            ]
        },
        // Day 20 - 回程日
        {
            dayGroup: "Day 20",
            dayTitle: "Day 20: 10/25(六) 回程",
            mapCenter: { lat: 52.3105, lng: 4.7683 }, // Schiphol Airport
            mapZoom: 11,
            items: [
                { 地點: "阿姆斯特丹市區", 描述: "最後在阿姆斯特丹市區悠閒度過上午時光", 類別: "⛱ 景點", mapLabel: "阿姆斯特丹市區", mapPriority: 1, lat: 52.3676, lng: 4.9041 },
                { 地點: "前往機場", 描述: "搭火車或機場巴士前往 Schiphol 機場", 類別: "🚗 移動", mapLabel: "To Schiphol Airport", mapPriority: 2, lat: 52.3105, lng: 4.7683 },
                { 地點: "阿姆斯特丹機場 Schiphol", 描述: "辦理登機手續，準備回台灣", 類別: "✈️ 飛行", mapLabel: "Schiphol Airport", mapPriority: 3, lat: 52.3105, lng: 4.7683 }
            ]
        }
    ];

// 將數據暴露到全局作用域
window.allItineraryData = allItineraryData;