export const allItineraryData = [
        // Day 0 - Updated with flight info
        {
            dayGroup: "Day 0",
            dayTitle: "Day 0: 出發前往歐洲 (10/4 週六)",
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
        { dayGroup: "Day 1", dayTitle: "Day 1: 10/5(日)雷克雅維克 ", mapCenter: { lat: 64.05, lng: -22.0 }, mapZoom: 9, items: [
            {地點: "凱夫拉維克國際機場 (KEF)", 描述:"航班 13:50 抵達", 類別: "🚗 移動", lat: 63.9850, lng: -22.6056, mapLabel: "KEF 機場", mapPriority: 1}, // Updated description slightly
            {地點: "租車", 描述:"市中心的停車格是要收費的，收費時間星期一至五09:00~18:00；星期六10:00~16:00，其餘時間則是免費" }, // Consider "🚗 活動" or similar
            {地點: "移動: 機場 → 市區 (40m)", 類別: "🚗 移動"},
            {地點: "Svarta Kaffid 麵包湯", 照片: "https://mimihan.tw/wp-content/uploads/20180706200030_83.jpg", 類別: "🧁 吃喝", lat: 64.14446, lng: -21.92346, mapLabel: "Svarta Kaffið", mapPriority: 2, 營業時間: "11:30–22:00"},
            {地點: "Braud & Co麵包店", 描述:"有很多分店",  照片: "https://mimihan.tw/wp-content/uploads/20180503165237_63.jpg", 類別: "🧁 吃喝", lat: 64.1440, lng: -21.9280, mapLabel: "Brauð & Co.", mapPriority: 3, 營業時間: "06:30–17:00"},
            {地點: "市區採買", 類別: "⛱ 景點", lat: 64.1470, lng: -21.9400, mapLabel: "Reykjavik City Center"},
            {地點: "Grettir Guesthouse Downtown Charm", 類別: "🏡 住宿", 描述: "<span style='color:green;'>&#10003;</span>廚房，<span style='color:red;'>&#10007;</span>洗衣，<span style='color:red;'>&#10007;</span>早餐，<span style='color:red;'>&#10007;</span>停車", 照片:"https://cf.bstatic.com/xdata/images/hotel/max1280x900/606428941.jpg?k=b320806e5ae8120e9e96f85a42fd59ede02a2254b487d767a4381df5e47ada66&o=&hp=1" ,網址: "https://www.booking.com/Share-NeX74T", lat: 64.14523324228844, lng: -21.92748344376633, mapLabel: "Grettir Guesthouse", mapPriority: 6},
        ]},
        // Day 2
        { dayGroup: "Day 2", dayTitle: "Day 2: 10/6(一)黃金圈", mapCenter: { lat: 64.20, lng: -20.7 }, mapZoom: 9, items: [
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
        { dayGroup: "Day 3", dayTitle: "Day 3: 10/7(二)南部", mapCenter: { lat: 63.70, lng: -20.0 }, mapZoom: 8, items: [
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
            {地點: "The Barn", 類別: "🏡 住宿", 描述: "<span style='color:green;'>&#10003;</span>廚房，<span style='color:red;'>&#10007;</span>洗衣，<span style='color:red;'>&#10007;</span>早餐，<span style='color:green;'>&#10003;</span>停車", 網址: "https://www.booking.com/Share-fIi5i4", lat: 63.43602218824341, lng: -19.06163856764566, 照片: "https://scontent.ftpe12-2.fna.fbcdn.net/v/t39.30808-6/302746892_521814529869860_8978336686612815303_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=3Moc6-PBjIYQ7kNvwG8n1oK&_nc_oc=AdmureK5FVvJRjF-C78YICFstC3bdhZ4CUdTrK0ra_9EPNCW7isxG3QOdfVf3_XB4Xin3j9dao4CSn_717yPP1v5&_nc_zt=23&_nc_ht=scontent.ftpe12-2.fna&_nc_gid=_kvl0LpvMn1-p_V6MTFjYA&oh=00_AfO3fLQZuuLVgSgMIIKstBLvlqI13lmO5cfwA_gINilA-Q&oe=686513A0", mapLabel: "The Barn", mapPriority: 6}
        ]},
        // Day 4
        { dayGroup: "Day 4", dayTitle: "Day 4: 10/8(三)維克周邊與冰洞", mapCenter: { lat: 63.6, lng: -18.5 }, mapZoom: 9, items: [
            {地點: "Vik 集合 10:00 卡特拉火山冰洞 3h", 台幣: "7,000", 網址:"https://adventures.is/iceland/day-tours/ice-caves/katla-ice-cave-tour-under-the-volcano/", 照片: "https://image.kkday.com/image/get/s1.kkday.com/product_181018/20240527121341_7vFCr/jpg", 類別: "🎭 活動", lat: 63.4177, lng: -18.9976, mapLabel: "維克(冰洞集合)", mapPriority: 1}, // Changed ⛱ 景點 to 🎭 活動
            {地點: "移動: Vik → 羽毛峽谷 (約 50m)", 類別: "🚗 移動"},
            {地點: "羽毛峽谷 (Fjadrargljufur Canyon)", 照片: "https://bobbyworld.tw/wp-content/uploads/pixnet/c62297747249d35459e0fde974ee8204.jpg", 類別: "⛱ 景點", lat: 63.7713, lng: -18.1719, mapLabel: "Fjaðrárgljúfur", mapPriority: 2},
            {地點: "移動: 羽毛峽谷 → Skaftafell 區域 (約 1h)", 類別: "🚗 移動"},
            {地點: "玄武岩黑瀑布（Svartifoss", 描述: "到時候決定要不要去", 照片: "https://mimihan.tw/wp-content/uploads/20230326222137_3.jpg", 類別: "⛱ 景點", lat: 64.01637, lng: -16.9691857, mapLabel: "Svartifoss", mapPriority: 3},
            {地點: "Hvoll Hostel", 照片:"https://content.skyscnr.com/available/1885334561/1885334561_WxH.jpg", 類別: "🏡 住宿", 描述: "<span style='color:green;'>&#10003;</span>廚房，<span style='color:green;'>&#10003;</span>洗衣，<span style='color:red;'>&#10007;</span>早餐，<span style='color:green;'>&#10003;</span>停車", 網址: "https://www.booking.com/Share-80MqhM", lat: 63.9095725904926, lng: -17.682835288876085, mapLabel: "Hvoll Hostel", mapPriority: 5}
        ]},
        // Day 5
        { dayGroup: "Day 5", dayTitle: "Day 5: 10/9(四)冰川健行與冰河湖", mapCenter: { lat: 64.03, lng: -16.5 }, mapZoom: 9, items: [
            {地點: "Skaftafell 冰川健行 5h 11:00", 網址: "https://cn.guidetoiceland.is/connect-with-locals/6640/iceland-local-tour-skaftafell-svinafellsjokull-glacier-hiking-experience", 照片: "https://adventures.is/media/237243/iceland-skaftafell-glacier-hiking-on-spikes.jpg?anchor=center&mode=crop&width=330&height=188&format=webp&quality=80&rnd=133728672360000000", 類別: "🎭 活動", lat: 64.0162, lng: -16.9661, mapLabel: "Skaftafell Visitor Centre (健行集合)", mapPriority: 1}, // Changed ⛱ 景點 to 🎭 活動
            {地點: "移動: Skaftafell → 冰河湖 (約 50m)", 類別: "🚗 移動"},
            {地點: "Skyrhusid HI Hostel", 類別: "🏡 住宿", 描述: "<span style='color:green;'>&#10003;</span>廚房，<span style='color:red;'>&#10007;</span>洗衣，<span style='color:red;'>&#10007;</span>早餐，<span style='color:green;'>&#10003;</span>停車", 網址: "https://www.booking.com/Share-YoGsX0", lat: 64.1295014055353, lng: -16.01554051772359, 照片: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/278680612.jpg?k=ee223e58c9a9b45210b21577298dfb8562c8357725eda10ad488c555df2d6b5b&o=", mapLabel: "Skyrhusid HI Hostel", mapPriority: 2}
        ]},
        // Day 6
        { dayGroup: "Day 6", dayTitle: "Day 6: 10/10(五) 東邊 - 冰河湖到埃伊爾斯塔濟", mapCenter: { lat: 64.7, lng: -15.3 }, mapZoom: 7, items: [
            {地點: "Jokulsarlon冰河湖獨木舟", 台幣: "2382", 照片: "https://mlz24bjzzgqm.i.optimole.com/w:768/h:512/q:mauto/dpr:2.0/ig:avif/https://dragonflytravelblog.com/wp-content/uploads/2024/08/IMG_0303.jpg", 類別: "🎭 活動", lat: 64.0484, lng: -16.1794, mapLabel: "Jökulsárlón", mapPriority: 1}, // Changed ⛱ 景點 to 🎭 活動
            {地點: "鑽石冰沙灘", 照片: "https://mimihan.tw/wp-content/uploads/20230326222910_99.jpg", 類別: "⛱ 景點", lat: 64.0450, lng: -16.1780, mapLabel: "Diamond Beach", mapPriority: 2},
            {地點: "移動: 冰河湖 → Vestrahorn (約 1h 21m)", 類別: "🚗 移動"},
            {地點: "Vestrahorn 蝙蝠山 x 維京人聚落 Viking Village", 照片: "https://kavana.tw/wp-content/uploads/pixnet/f2174d2460d318a9f09be7bb3a57b0db.jpg, https://kavana.tw/wp-content/uploads/pixnet/4cc7f163b96e90a32d2ab027110392b7.jpg", 類別: "⛱ 景點", lat: 64.2470, lng: -14.9960, mapLabel: "Stokksnes (Vestrahorn Viewpoint)", mapPriority: 3},
            {地點: "Pakkhús Restaurant 小龍蝦", 照片: "https://mimihan.tw/wp-content/uploads/20180628173749_56.jpg", 類別: "🧁 吃喝", lat: 64.2500, lng: -15.2080, mapLabel: "Pakkhús Restaurant (Höfn)"},
            {地點: "移動: Vestrahorn/Höfn → 埃伊爾斯塔濟 (約 3h 18m)", 類別: "🚗 移動"},
            {地點: "Bankinn - Hotel by Aldan", 類別: "🏡 住宿", 描述: "<span style='color:green;'>&#10003;</span>廚房，<span style='color:red;'>&#10007;</span>洗衣，早餐 588/人，<span style='color:green;'>&#10003;</span>停車", 網址: "https://www.booking.com/Share-B9kJa6", lat: 65.26192036188023, lng: -14.009229280026773, 照片: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/261380280.jpg?k=06df76d27983290095de2867ca2aa4397e525fc962dfd9c7930935c60b1637c9&o=", mapLabel: "Bankinn - Hotel by Aldan", mapPriority: 4}
        ]},
        // Day 7
        { dayGroup: "Day 7", dayTitle: "Day 7: 10/11(六) 北部 - 米湖周邊", mapCenter: { lat: 65.6, lng: -16.0 }, mapZoom: 8, items: [
            {地點: "移動: 埃伊爾斯塔濟 → Seyðisfjörður (來回約 1h)", 類別: "🚗 移動"},
            {地點: "Seyðisfjörður 白日夢冒險王小鎮", 照片: "https://mimihan.tw/wp-content/uploads/20230408152422_67.jpg", 類別: "⛱ 景點", lat: 65.2600, lng: -14.0100, mapLabel: "Seyðisfjarðarkirkja", mapPriority: 1},
            {地點: "移動: 埃伊爾斯塔濟 → Viti (約 2h)", 類別: "🚗 移動"},
            {地點: "Viti 維提火山湖 👍", 照片: "https://mimihan.tw/wp-content/uploads/20230409130510_89.jpg", 類別: "⛱ 景點", lat: 65.7165, lng: -16.7522, mapLabel: "Víti crater (Krafla)", mapPriority: 2},
            {地點: "移動: Viti → Námafjall Hverir (約 11m)", 類別: "🚗 移動"},
            {地點: "Námafjall Hverir 火山地熱谷", 照片: "https://mimihan.tw/wp-content/uploads/20180529165813_72.jpg", 類別: "⛱ 景點", lat: 65.6415, lng: -16.8093, mapLabel: "Hverir (Námafjall)", mapPriority: 3},
            {地點: "洞穴溫泉Grjótagjá", 照片: "https://mimihan.tw/wp-content/uploads/20180603221410_36.jpg", 類別: "⛱ 景點", lat: 65.6262, lng: -16.8820, mapLabel: "Grjótagjá cave", mapPriority: 4},
            {地點: "米湖溫泉", 照片: "https://mimihan.tw/wp-content/uploads/20180530184317_85.jpg", 類別: "🎭 活動", lat: 65.6305, lng: -16.8480, mapLabel: "Mývatn Nature Baths", mapPriority: 5}, // Changed ⛱ 景點 to 🎭 活動 (bathing is an activity)
            {地點: "Vogafjos Cafe", 類別: "🧁 吃喝", lat: 65.5913, lng: -16.9204, mapLabel: "Vogafjós Farm Resort", mapPriority: 6},
            {地點: "Eldá Guesthouse", 類別: "🏡 住宿", 描述: "<span style='color:green;'>&#10003;</span>廚房，<span style='color:green;'>&#10003;</span>洗衣，早餐 722/人，<span style='color:green;'>&#10003;</span>停車，NT$8,399，雙人房", 網址: "https://www.booking.com/Share-y95ofhe", lat: 65.6411510806318, lng: -16.90701006974602, 照片: "https://gti.images.tshiftcdn.com/2947681/x/0/62802992.jpg?ixlib=php-3.3.0&ar=1.91%3A1&w=1200&fit=crop", mapLabel: "Eldá Guesthouse", mapPriority: 7}
        ]},
        // Day 8
        { dayGroup: "Day 8", dayTitle: "Day 8: 10/12(日)米湖到阿克雷里", mapCenter: { lat: 65.65, lng: -17.5 }, mapZoom: 9, items: [
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
        { dayGroup: "Day 9", dayTitle: "Day 9: 10/13(一) 北岸風光 (10/13)", mapCenter: { lat: 65.5, lng: -19.8 }, mapZoom: 8, items: [
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
        { dayGroup: "Day 10", dayTitle: "Day 10: 10/14(二) 斯奈山半島", mapCenter: { lat: 64.85, lng: -23.3 }, mapZoom: 9, items: [
            {地點: "移動: 華姆斯唐吉 → 教堂山 (約 2h 36m)", 類別: "🚗 移動"},
            {地點: "Kirkjufellsfoss 教堂山", 照片: "https://mimihan.tw/wp-content/uploads/20180620190950_46.jpg", 類別: "⛱ 景點", lat: 64.9260, lng: -23.2719, mapLabel: "Kirkjufellsfoss", mapPriority: 1},
            {地點: "移動: 教堂山 → Ólafsvík (約 20m)", 類別: "🚗 移動"},
            {地點: "Ólafsvík小鎮", 描述: "進入斯奈山國家公園的最後一個比較大的城鎮", 類別: "⛱ 景點", lat: 64.8940, lng: -23.7100, mapLabel: "Ólafsvík", mapPriority: 2},
            {地點: "移動: Ólafsvík → SAXHÓLAR CRATER (約 20m)", 類別: "🚗 移動"},
            {地點: "SAXHÓLAR CRATER 火山", 描述: "是一座沈睡400年的火山", 照片: "https://mimihan.tw/wp-content/uploads/20180826212128_25.jpg", 類別: "⛱ 景點", lat: 64.8510, lng: -23.9150, mapLabel: "Saxhóll Crater", mapPriority: 3},
            {地點: "VATNSHELLIR CAVE 地心探險", 描述: "每個小時有一團，約莫45分鐘", 照片: "https://kavana.tw/wp-content/uploads/pixnet/f85425c596023b29c7f0d9089858b438.jpg", 類別: "🎭 活動", lat: 64.7520, lng: -23.8200, mapLabel: "Vatnshellir Cave", mapPriority: 4}, // Caving is an activity
            {地點: "Londrangar 怪物海岸", 照片: "https://mimihan.tw/wp-content/uploads/20180826212202_97.jpg", 類別: "⛱ 景點", lat: 64.7360, lng: -23.7800, mapLabel: "Lóndrangar", mapPriority: 5},
            {地點: "BÁRÐAR SAGA 石巨人", 照片: "https://mimihan.tw/wp-content/uploads/20180826212210_84.jpg", 類別: "⛱ 景點", lat: 64.7744, lng: -23.7791, mapLabel: "Bárður Snæfellsás (Arnarstapi)", mapPriority: 6},
            {地點: "移動: Arnarstapi → Ytri Tunga (約 30m)", 類別: "🚗 移動"},
            {地點: "Ytri Tunga 海豹沙灘", 描述: "太晚的話可以隔天來", 照片: "https://icelandthebeautiful.com/wp-content/uploads/2020/01/Ytri-tunga-beach-snaefellsnes-west-iceland_DSC7489.jpg", 類別: "⛱ 景點", lat: 64.8001, lng: -23.0346, mapLabel: "Ytri Tunga Beach", mapPriority: 7},
            {地點: "Grundarfjordur Hostel", 類別: "🏡 住宿", 描述: "<span style='color:green;'>&#10003;</span>廚房，<span style='color:red;'>&#10007;</span>洗衣，<span style='color:red;'>&#10007;</span>早餐，<span style='color:green;'>&#10003;</span>停車，NT$5,894，全上下舖", 網址: "https://www.booking.com/Share-rdYIiX", lat: 64.92306302849966, lng: -23.257502113944486, 照片: "https://mimihan.tw/wp-content/uploads/20180620203603_42.jpg", mapLabel: "Grundarfjordur Hostel", mapPriority: 8}
        ]},
        // Day 11
        { dayGroup: "Day 11", dayTitle: "Day 11: 10/15(三)返回雷克雅維克 (10/15)", mapCenter: { lat: 64.5, lng: -22.5 }, mapZoom: 8, items: [
            {地點: "移動: 斯奈山半島 → Sky Lagoon (約 2h)", 類別: "🚗 移動"},
            {地點: "Sky Lagoon", 照片: "https://shiningchan-com.sfo3.digitaloceanspaces.com/wp-content/uploads/2024/10/scimgKj5yjW.webp", 類別: "🎭 活動", lat: 64.1278, lng: -21.9519, mapLabel: "Sky Lagoon", mapPriority: 1}, // Bathing is an activity
            {地點: "Harpa音樂廳", 描述: "曾被《紐約時報》評選「全球最值得旅遊的41個地方」之一", 照片: "https://bobbyworld.tw/wp-content/uploads/pixnet/e69707fafbb86d7381c6565d441727f7.jpg", 類別: "⛱ 景點", lat: 64.1502, lng: -21.9348, mapLabel: "Harpa Concert Hall and Conference Centre", mapPriority: 5, 營業時間: "10:00–18:00 (周日至周二)；10:00–20:00 (周三至周六)"},
            {地點: "哈爾格林姆教堂( Hallgrímskirkja)", 克朗: "1,400", 描述: "全冰島最大教堂，風格前衛，外觀如被風化的柱狀玄武岩", 照片: "https://mimihan.tw/wp-content/uploads/20180429160946_55.jpg", 類別: "⛱ 景點", lat: 64.1417, lng: -21.9266, mapLabel: "Hallgrímskirkja", mapPriority: 6, 營業時間: "10:00~17:00\n 景觀塔：10:00~16:30"},
            {地點: "移動: 市區 → 藍湖 (42m)", 類別: "🚗 移動"},
            {地點: "藍湖", 照片: "https://bobbyworld.tw/wpcontent/uploads/pixnet/9f13156749eb0d1db3bd5dbd7190ff51.jpg", 類別: "⛱ 景點", lat: 63.8806, lng: -22.4496, mapLabel: "Blue Lagoon", mapPriority: 2, 營業時間: "08:00–22:00"},
           
            {地點: "Grettir Guesthouse Downtown Charm", 類別: "🏡 住宿", 描述: "<span style='color:green;'>&#10003;</span>廚房，<span style='color:red;'>&#10007;</span>洗衣，<span style='color:red;'>&#10007;</span>早餐，<span style='color:green;'>&#10003;</span>停車，NT$7,996，雙人房", 網址: "https://www.booking.com/Share-NeX74T", lat: 64.14523324228844, lng: -21.92748344376633, 照片: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/606428941.jpg?k=b320806e5ae8120e9e96f85a42fd59ede02a2254b487d767a4381df5e47ada66&o=&hp=1", mapLabel: "Grettir Guesthouse", mapPriority: 7}
        ]},
        // Day 12
        { dayGroup: "Day 12", dayTitle: "Day 12: 10/16(四) ", mapCenter: { lat: 64.05, lng: -22.2 }, mapZoom: 9, items: [
            {地點: "KEF 機場還車、搭機", 描述: "要確認下可以還車的時間", 類別: "🚗 移動", lat: 63.9850, lng: -22.6056, mapLabel: "KEF Airport", mapPriority: 1},
            {地點: "10:30班機", 類別: "✈️ 飛行"},
            {地點: "移動: 雷克雅維克 → AMS", 類別: "🚗 移動"},
            {地點: "抵達 AMS 15:45  ",  類別: "✈️ 飛行"},
        ]},
        // 荷蘭行程開始
        // Day 13 (對應原 Day 1)
        { dayGroup: "Day 13", dayTitle: "Day 13: 10/17(四) 阿姆斯特丹經典與在地體驗", mapCenter: { lat: 52.3676, lng: 4.9041 }, mapZoom: 13, items: [
            {地點: "中央車站 Amsterdam Centraal", 描述: "阿姆斯特丹地標建築，新哥德式風格，開始城市探索", 類別: "🚗 移動", lat: 52.3791, lng: 4.9003, mapLabel: "Amsterdam Centraal Station", mapPriority: 1, 照片: "https://travelwithmiya.com/wp-content/uploads/2023/03/amsterdam-32.jpg"},
            {地點: "水壩廣場 Dam Square", 描述: "阿姆斯特丹心臟地帶，皇宮、新教堂圍繞的歷史廣場", 類別: "⛱ 景點", lat: 52.3732, lng: 4.8936, mapLabel: "Dam Square", mapPriority: 2, 照片: "https://turtlegirltravel.com/wp-content/uploads/2019/07/Dam-Square.png"},
            {地點: "運河區 + 租自行車", 描述: "租借單車沿著運河騎行，體驗荷蘭經典運河風光 + 當地人交通方式", 類別: "🚴‍♂️ 騎車", lat: 52.3738, lng: 4.8910, mapLabel: "Canal Ring Cycling", mapPriority: 3, 照片: "https://turtlegirltravel.com/wp-content/uploads/2019/07/cruise-1-1.png"},
            {地點: "Albert Cuyp Market", 描述: "荷蘭最大戶外市集，體驗當地人購物生活，嚐試各種街頭美食", 類別: "🛒 市集", lat: 52.3576, lng: 4.8913, mapLabel: "Albert Cuyp Market", mapPriority: 4, 照片: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop", 營業時間: "09:00-17:00（週一至週六）"},
            {地點: "荷蘭起司品嚐", 描述: "在市集內品嚐各種荷蘭經典起司：高達起司、艾丹起司等", 類別: "🧀 品嚐", lat: 52.3576, lng: 4.8913, mapLabel: "Dutch Cheese Tasting", mapPriority: 5, 照片: "https://images.unsplash.com/photo-1552767059-ce182ead6c1b?w=1200&h=800&fit=crop"},
            {地點: "Jordaan 區探索", 描述: "在最有特色的住宅區漫步，尋找隱藏小店、二手市場和街頭藝術", 類別: "🚶‍♂️ 漫步", lat: 52.3740, lng: 4.8830, mapLabel: "Jordaan Exploration", mapPriority: 6, 照片: "/iceland/assets/jordaan_district.jpg"},
            {地點: "運河船遊", 描述: "日落時段從水上欣賞阿姆斯特丹美景，完美結束一天", 類別: "🎭 活動", lat: 52.3676, lng: 4.9041, mapLabel: "Canal Cruise", mapPriority: 7, 照片: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1200&h=800&fit=crop"},
            {地點: "Brown Café 晚餐", 描述: "在傳統荷蘭咖啡館享用道地荷蘭菜：炸肉丸 Bitterballen、荷蘭燉菜", 類別: "🧁 吃喝", lat: 52.3740, lng: 4.8830, mapLabel: "Traditional Brown Café", mapPriority: 8, 照片: "/iceland/assets/brown_cafe.jpg"},
            {地點: "阿姆斯特丹住宿", 類別: "🏡 住宿", 描述: "市區住宿，方便隔天活動", lat: 52.3676, lng: 4.9041, mapLabel: "Amsterdam Accommodation", mapPriority: 9, 照片: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop"}
        ]},
        // Day 14 (對應原 Day 2)
        { dayGroup: "Day 14", dayTitle: "Day 14: 10/18(五) 羊角村 Giethoorn 一日遊", mapCenter: { lat: 52.7386, lng: 6.0787 }, mapZoom: 12, items: [
            {地點: "阿姆斯特丹 Centraal", 描述:"搭火車前往 Steenwijk 車站，約 2 小時", 類別: "🚆 火車", lat: 52.3791, lng: 4.9003, mapLabel: "Amsterdam Centraal Station", mapPriority: 1, 照片: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Amsterdam_Centraal_railway_station.jpg/1200px-Amsterdam_Centraal_railway_station.jpg"},
            {地點: "Steenwijk 車站", 描述:"轉搭公車 70 路前往羊角村，約 20 分鐘", 類別: "🚌 公車", lat: 52.7865, lng: 6.1188, mapLabel: "Steenwijk Station", mapPriority: 2, 照片: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&h=800&fit=crop"},
            {地點: "羊角村 Giethoorn", 描述:"有「荷蘭威尼斯」之稱的美麗村落，村內禁止汽車通行", 類別: "⛱ 景點", lat: 52.7386, lng: 6.0787, mapLabel: "Giethoorn Village", mapPriority: 3, 照片: "https://images.unsplash.com/photo-1564594985645-4427056e2c5a?w=1200&h=800&fit=crop"},
            {地點: "租船遊運河", 描述:"體驗羊角村最經典的小船遊運河活動，村內移動主要靠步行和船隻", 類別: "🚣 租船", lat: 52.7386, lng: 6.0787, mapLabel: "Giethoorn Boat Rental", mapPriority: 4, 照片: "https://images.unsplash.com/photo-1572623246738-9e23b6f3f872?w=1200&h=800&fit=crop"},
            {地點: "河邊咖啡廳午餐", 描述:"在河邊咖啡廳享用午餐，悠閒漫步村落", 類別: "🧁 吃喝", lat: 52.7390, lng: 6.0780, mapLabel: "Giethoorn Cafe", mapPriority: 5, 照片: "https://images.unsplash.com/photo-1555992336-03a23c7a8d63?w=1200&h=800&fit=crop"},
            {地點: "傍晚返回阿姆斯特丹", 描述:"建議早去早回，晚上公車班次較少。原路返回：公車 → 火車", 類別: "🚆 火車", lat: 52.3676, lng: 4.9041, mapLabel: "Return to Amsterdam", mapPriority: 6, 照片: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=800&fit=crop"},
            {地點: "阿姆斯特丹住宿", 類別: "🏡 住宿", 描述: "繼續住宿阿姆斯特丹", lat: 52.3676, lng: 4.9041, mapLabel: "Amsterdam Accommodation", mapPriority: 7, 照片: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop"}
        ]},
        // Day 15 (對應原 Day 3)
        { dayGroup: "Day 15", dayTitle: "Day 15: 10/19(六) 小孩堤防 + 烏特勒支", mapCenter: { lat: 51.8839, lng: 4.6375 }, mapZoom: 10, items: [
            {地點: "阿姆斯特丹 → 鹿特丹", 描述: "搭火車約 1 小時前往鹿特丹", 類別: "🚆 火車", lat: 51.9244, lng: 4.4777, mapLabel: "Rotterdam Central Station", mapPriority: 1, 照片: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Rotterdam_Centraal_2014.jpg/1200px-Rotterdam_Centraal_2014.jpg"},
            {地點: "鹿特丹 → 小孩堤防", 描述: "搭公車或水上巴士 Waterbus（推薦）約 30-40 分鐘", 類別: "⛴️ 渡輪", lat: 51.8839, lng: 4.6375, mapLabel: "Kinderdijk Windmills", mapPriority: 2, 照片: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Kinderdijk%2C_Molenkade_uitzicht_op_molens_foto8_2017-04-30_09.55.jpg/1200px-Kinderdijk%2C_Molenkade_uitzicht_op_molens_foto8_2017-04-30_09.55.jpg"},
            {地點: "小孩堤防 Kinderdijk", 描述: "世界遺產風車群，拍攝風車群、河邊漫步，停留 2-3 小時", 類別: "⛱ 景點", lat: 51.8839, lng: 4.6375, mapLabel: "Kinderdijk World Heritage", mapPriority: 3, 照片: "https://images.unsplash.com/photo-1583262395213-c14ab36d17e4?w=1200&h=800&fit=crop"},
            {地點: "鹿特丹 → 烏特勒支", 描述: "從鹿特丹搭火車前往烏特勒支，約 1 小時", 類別: "🚆 火車", lat: 52.0907, lng: 5.1214, mapLabel: "Utrecht Centraal", mapPriority: 4, 照片: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Utrecht_Centraal_2016.jpg/1200px-Utrecht_Centraal_2016.jpg"},
            {地點: "烏特勒支市區", 描述: "城市不大，步行即可完成市區觀光", 類別: "⛱ 景點", lat: 52.0907, lng: 5.1214, mapLabel: "Utrecht City Center", mapPriority: 5, 照片: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop"},
            {地點: "烏特勒支住宿", 類別: "🏡 住宿", 描述: "住宿烏特勒支，方便隔天活動", lat: 52.0907, lng: 5.1214, mapLabel: "Utrecht Accommodation", mapPriority: 6, 照片: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop"}
        ]},
        // Day 16 (對應原 Day 4)
        { dayGroup: "Day 16", dayTitle: "Day 16: 10/20(日) 烏特勒支 + Amersfoort", mapCenter: { lat: 52.155, lng: 5.378 }, mapZoom: 11, items: [
            {地點: "烏特勒支市區深度遊", 描述: "漫步運河區、參觀教堂、市區購物", 類別: "⛱ 景點", lat: 52.0907, lng: 5.1214, mapLabel: "Utrecht Dom Tower", mapPriority: 1, 照片: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop"},
            {地點: "烏特勒支 → Amersfoort", 描述: "搭火車約 20 分鐘，可輕鬆來回半日遊", 類別: "🚆 火車", lat: 52.1561, lng: 5.3878, mapLabel: "Amersfoort Station", mapPriority: 2, 照片: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=1200&h=800&fit=crop"},
            {地點: "Amersfoort 中世紀古鎮", 描述: "特色街道、老城牆、中世紀建築", 類別: "⛱ 景點", lat: 52.1561, lng: 5.3878, mapLabel: "Amersfoort Old Town", mapPriority: 3, 照片: "https://images.unsplash.com/photo-1509029491500-49ee4aefec46?w=1200&h=800&fit=crop"},
            {地點: "Amersfoort 市區漫步", 描述: "探索中世紀街道、古老的城門和教堂", 類別: "🚶‍♂️ 步行", lat: 52.1561, lng: 5.3878, mapLabel: "Amersfoort City Walk", mapPriority: 4, 照片: "https://images.unsplash.com/photo-1519197924294-4ba991a11128?w=1200&h=800&fit=crop"},
            {地點: "返回烏特勒支", 描述: "傍晚回烏特勒支住宿，不需換住宿", 類別: "🚆 火車", lat: 52.0907, lng: 5.1214, mapLabel: "Return to Utrecht", mapPriority: 5, 照片: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=1200&h=800&fit=crop"},
            {地點: "烏特勒支住宿", 類別: "🏡 住宿", 描述: "繼續住宿烏特勒支", lat: 52.0907, lng: 5.1214, mapLabel: "Utrecht Accommodation", mapPriority: 6, 照片: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop"}
        ]},
        // Day 17 (對應原 Day 5)
        { dayGroup: "Day 17", dayTitle: "Day 17: 10/21(一) 布魯日 Bruges（比利時）", mapCenter: { lat: 51.2085, lng: 3.2250 }, mapZoom: 13, items: [
            {地點: "烏特勒支 → 布魯塞爾", 描述: "搭火車前往布魯塞爾，約 2 小時", 類別: "🚆 火車", lat: 50.8503, lng: 4.3517, mapLabel: "Brussels Central", mapPriority: 1, 照片: "https://images.unsplash.com/photo-1517860063-e6ca3e3c7b79?w=1200&h=800&fit=crop"},
            {地點: "布魯塞爾 → 布魯日", 描述: "轉車前往布魯日，約 1 小時", 類別: "🚆 火車", lat: 51.1975, lng: 3.2179, mapLabel: "Bruges Station", mapPriority: 2, 照片: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop"},
            {地點: "布魯日市集廣場", 描述: "中世紀廣場，周圍環繞著哥德式建築", 類別: "⛱ 景點", lat: 51.2085, lng: 3.2250, mapLabel: "Bruges Market Square", mapPriority: 3, 照片: "https://images.unsplash.com/photo-1572804547778-21eb96a8c67d?w=1200&h=800&fit=crop"},
            {地點: "布魯日鐘樓", 描述: "登上鐘樓俯瞰古城全景", 類別: "⛱ 景點", lat: 51.2085, lng: 3.2250, mapLabel: "Bruges Belfry", mapPriority: 4, 照片: "https://images.unsplash.com/photo-1515552726023-7125c8d07fb3?w=1200&h=800&fit=crop"},
            {地點: "運河遊船", 描述: "從水上欣賞布魯日美麗的中世紀建築", 類別: "🚣 遊船", lat: 51.2085, lng: 3.2250, mapLabel: "Bruges Canal Cruise", mapPriority: 5, 照片: "https://images.unsplash.com/photo-1541950461406-8c73ed2d8155?w=1200&h=800&fit=crop"},
            {地點: "布魯日巧克力店", 描述: "品嚐比利時著名的手工巧克力", 類別: "🧁 吃喝", lat: 51.2085, lng: 3.2250, mapLabel: "Bruges Chocolate Shop", mapPriority: 6, 照片: "https://images.unsplash.com/photo-1548907040-4baa42d10919?w=1200&h=800&fit=crop"},
            {地點: "布魯日住宿", 類別: "🏡 住宿", 描述: "住宿布魯日古城，節省隔天移動時間", lat: 51.2085, lng: 3.2250, mapLabel: "Bruges Accommodation", mapPriority: 7, 照片: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop"}
        ]},
        // Day 18 (對應原 Day 6)
        { dayGroup: "Day 18", dayTitle: "Day 18: 10/22(二) 根特 + 鹿特丹", mapCenter: { lat: 51.0543, lng: 3.7174 }, mapZoom: 11, items: [
            {地點: "布魯日 → 根特", 描述: "搭火車約 30 分鐘前往根特", 類別: "🚆 火車", lat: 51.0356, lng: 3.7100, mapLabel: "Ghent Station", mapPriority: 1, 照片: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200&h=800&fit=crop"},
            {地點: "根特城堡 Gravensteen", 描述: "中世紀城堡，可登高俯瞰根特市景", 類別: "⛱ 景點", lat: 51.0570, lng: 3.7200, mapLabel: "Gravensteen Castle", mapPriority: 2, 照片: "https://images.unsplash.com/photo-1590736969955-71cc94901144?w=1200&h=800&fit=crop"},
            {地點: "根特大教堂", 描述: "欣賞著名的《神秘羔羊》祭壇畫", 類別: "⛱ 景點", lat: 51.0543, lng: 3.7174, mapLabel: "St. Bavo's Cathedral", mapPriority: 3, 照片: "https://images.unsplash.com/photo-1520637836862-4d197d17c50a?w=1200&h=800&fit=crop"},
            {地點: "根特市區漫步", 描述: "步行或搭電車遊覽根特市中心", 類別: "🚋 電車", lat: 51.0543, lng: 3.7174, mapLabel: "Ghent City Center", mapPriority: 4, 照片: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop"},
            {地點: "根特 → 鹿特丹", 描述: "搭火車約 2 小時前往鹿特丹", 類別: "🚆 火車", lat: 51.9244, lng: 4.4777, mapLabel: "Rotterdam Central", mapPriority: 5, 照片: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Rotterdam_Centraal_2014.jpg/1200px-Rotterdam_Centraal_2014.jpg"},
            {地點: "鹿特丹住宿", 類別: "🏡 住宿", 描述: "住宿鹿特丹，隔天好接回阿姆斯特丹或機場", lat: 51.9244, lng: 4.4777, mapLabel: "Rotterdam Accommodation", mapPriority: 6, 照片: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop"}
        ]},
        // Day 19 (對應原 Day 7)
        { dayGroup: "Day 19", dayTitle: "Day 19: 10/23(三) 鹿特丹慢遊 + 回阿姆斯特丹", mapCenter: { lat: 51.9244, lng: 4.4777 }, mapZoom: 13, items: [
            {地點: "Markthal 美食市集", 描述: "鹿特丹必訪的拱形美食市集，最後採買和早餐", 類別: "🧁 吃喝", lat: 51.9200, lng: 4.4856, mapLabel: "Markthal Rotterdam", mapPriority: 1, 照片: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Markthal_Rotterdam_2014.jpg/1200px-Markthal_Rotterdam_2014.jpg"},
            {地點: "Cube House 方塊屋", 描述: "鹿特丹特色建築，最後拍照打卡", 類別: "⛱ 景點", lat: 51.9200, lng: 4.4900, mapLabel: "Cube Houses", mapPriority: 2, 照片: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Kubuswoningen.jpg/1200px-Kubuswoningen.jpg"},
            {地點: "Erasmus Bridge 伊拉斯謨斯橋", 描述: "鹿特丹地標橋梁，告別荷蘭的最佳取景點", 類別: "⛱ 景點", lat: 51.9079, lng: 4.4826, mapLabel: "Erasmus Bridge", mapPriority: 3, 照片: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Erasmusbrug_Rotterdam.jpg/1200px-Erasmusbrug_Rotterdam.jpg"},
            {地點: "鹿特丹市區最後漫步", 描述: "在現代化城市中做最後的悠閒漫步", 類別: "🚶‍♂️ 步行", lat: 51.9244, lng: 4.4777, mapLabel: "Rotterdam City Walk", mapPriority: 4, 照片: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200&h=800&fit=crop"},
            {地點: "鹿特丹 → 阿姆斯特丹", 描述: "搭火車回阿姆斯特丹約 40 分鐘", 類別: "🚆 火車", lat: 52.3791, lng: 4.9003, mapLabel: "Back to Amsterdam", mapPriority: 5, 照片: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&h=800&fit=crop"},
            {地點: "阿姆斯特丹最後採買", 描述: "在阿姆斯特丹市區做最後採買和晚餐", 類別: "🧁 吃喝", lat: 52.3676, lng: 4.9041, mapLabel: "Amsterdam Shopping", mapPriority: 6, 照片: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop"},
            {地點: "阿姆斯特丹住宿", 類別: "🏡 住宿", 描述: "住宿阿姆斯特丹，隔天前往機場回程", lat: 52.3676, lng: 4.9041, mapLabel: "Amsterdam Accommodation", mapPriority: 7, 照片: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop"}
        ]},
        // Day 20 - 回程日
        { dayGroup: "Day 20", dayTitle: "Day 20: 10/24(四) 回程", mapCenter: { lat: 52.3105, lng: 4.7683 }, mapZoom: 11, items: [
            {地點: "阿姆斯特丹市區", 描述: "最後在阿姆斯特丹市區悠閒度過上午時光", 類別: "⛱ 景點", lat: 52.3676, lng: 4.9041, mapLabel: "Amsterdam City", mapPriority: 1, 照片: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&h=800&fit=crop"},
            {地點: "前往機場", 描述: "搭火車或機場巴士前往 Schiphol 機場", 類別: "🚗 移動", lat: 52.3105, lng: 4.7683, mapLabel: "To Schiphol Airport", mapPriority: 2, 照片: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=800&fit=crop"},
            {地點: "阿姆斯特丹機場 Schiphol", 描述: "辦理登機手續，準備回台灣", 類別: "✈️ 飛行", lat: 52.3105, lng: 4.7683, mapLabel: "Schiphol Airport", mapPriority: 3, 照片: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&h=800&fit=crop"}
        ]}
    ];

// 將數據暴露到全局作用域
window.allItineraryData = allItineraryData;