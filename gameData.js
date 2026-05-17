// ==========================================
// PetGame v6.0 - 静态配置与文本数据池 (gameData.js)
// ==========================================

const IMG_PATH = "assets/";

const BALL_COLORS = ['#93A957', '#F7EDB5', '#BABE5F', '#E6EFA3', '#F8F1E1', '#B2CA48', '#A4C674'];

const SELFIE_POOL = [
    "s_1.jpg", "s_2.jpg", "s_3.jpg", "s_4.jpg", "s_5.jpg", "s_6.jpg", "s_7.jpg", "s_8.jpg",
    "s_9.jpg", "s_10.jpg", "s_11.jpg", "s_12.jpg", "s_13.jpg", "s_14.jpg", "s_15.jpg", "s_16.jpg",
    "s_17.jpg", "s_18.jpg", "s_19.jpg", "s_20.jpg", "s_21.jpg", "s_22.jpg", "s_23.jpg", "s_24.jpg",
    "s_25.jpg", "s_26.jpg", "s_27.jpg", "s_28.jpg", "s1.jpg", "s2.jpg", "s3.jpg", "s4.jpg",
    "s5.jpg", "s6.jpg", "s7.jpg", "s8.jpg", "s9.jpg", "s10.jpg", "s11.jpg", "s12.jpg",
    "s13.jpg", "s14.jpg", "s15.jpg", "s16.jpg", "s17.jpg", "s18.jpg", "s19.jpg", "s20.jpg",
    "s21.jpg", "s22.jpg", "s23.jpg", "s24.jpg", "s25.jpg", "s26.jpg", "s27.jpg", "s28.jpg",
    "s29.jpg", "s30.jpg", "s31.jpg"
];

// 动画帧配置
const ANIM_FRAMES = {
    blink: ["stand_l.png", "blink_1.png", "blink_2.png", "stand_l.png"],
    feed: { loop: ["eat_1.png", "eat_3.png", "eat_2.png"] },
    sleep: { pre: ["stand_l.png"], loop: ["sleep_1.png", "sleep_2.png", "sleep_3.png"], post: ["stand_l.png"] },
    scared: ["scared_2.png","scared_1.png", "dazed.png", "dazed_2.png","dazed_2.png"],
    funny: ["stand_l.png", "blink_1.png", "stand_l.png"],
    walk_left: ["walk_l1.png", "stand_l.png","walk_l2.png","stand_l.png"],
    walk_right: ["walk_r1.png", "stand_r.png","walk_r2.png", "stand_r.png"]
};

// 状态标签映射
const STATE_LABELS = {
    idle: '發呆中',
    feed: '乾飯',
    sleep: '補覺',
    selfie: '營業中',
    funny: '搞怪中',
    scavenge: '撿破爛',
    work: '拍戲中',
    play: '玩耍中'
};

// 世纪终章结局文本
const ENDING_TEXTS = {
    oscar: {
        title: "🎉 世紀終章：榮登奧豬卡影后！",
        body: "全球影迷見證歷史！恭喜頂流巨星 {name} 憑藉在多部現象級大作中的殿堂級演技，成功斬獲本屆奧豬卡金像獎【最佳女主角】桂冠！她從一個在街頭被狗仔偷拍炫蛋糕的小豬女孩，一路披荊斬棘，終於登頂世界影壇之巔！全網唯粉、事業粉抱頭痛哭：「寶寶值得！你是全宇宙最好的 {name}！」",
        statsHeader: "👑 最終巨星資產結算 👑"
    }
};

// 随机日常行为事件池
const FUNNY_EVENTS_POOL = [
    { msg: "{name} 試圖跳舞，但差點摔倒。", say: "哎呀！！", anim: ANIM_FRAMES.scared },
    { msg: "{name} 正在和影子深度交流。", say: "嗶嗶...信號穩定。", anim: ["stand_l.png", "stand_r.png", "stand_l.png"] },
    { msg: "{name} 突然原地旋轉了360度。", say: "蕪湖！", anim: ["stand_l.png", "stand_r.png", "stand_l.png", "stand_r.png"] },
    { msg: "{name} 假裝自己是一顆安静的玉子。", say: "看不見我...", anim: ["magic_1.png","magic_2.png","magic_3.png","magic_4.png","magic_3.png","magic_4.png","magic_3.png","magic_4.png","magic_3.png","magic_4.png","magic_3.png"] },
    { msg: "{name} 偷偷出門撿破爛賺了 $2", say: "哇帶回家還能用！", anim: ["blink_1.png","blink_2.png",  "stand_l.png"], earn: 2 },
    { msg: "{name} 偷偷出門打工賺了 $5 。", say: "嘿嘿，發財了！", anim: ["eat_1.png", "stand_l.png"], earn: 5 },
    { msg: "{name} 幫鄰居遛小狗，獲得了 $3 報酬。 ", say: "勞動最光榮~", anim: ["walk_l1.png", "walk_r1.png", "stand_l.png"], earn: 3 },
    { msg: "{name} 偷听八卦听呆了。", say: "到底在干嘛？", anim: ["sl_2.png", "sl_1.png", "sl_1.png"] }
];

// 狗仔队偷拍 15 条核心爆料文案池
const PAPARAZZI_POOL = {
    feedConsecutive: {
        title: "💥 震驚！頂流女星 {name} 在街頭狂炫斑斕蛋糕，狂吃上癮？！",
        body: "據娛樂周刊追蹤：日前拍到 {name} 現身街頭糕點店，不顧形象連續瘋狂吞食多個mini斑斕蛋糕！毫無女明星的身材管理意識。網友直呼：「太接地氣了，簡真是我的互聯網替身！」",
        happyChange: -25,
        fansChange: 60
    },
    feed: [
        {
            title: "📸 抓拍！實力派大花 {name} 公開場合吃雪糕，甜妹人設實錘？",
            body: "本報記者拍到 {name} 在片場角落偷偷品嘗雪糕，滿臉洋溢著幸福的表情。吃完還砸吧嘴，萌翻路人！粉絲調侃：原來女明星也是靠雪糕續命的。",
            happyChange: -10,
            fansChange: 25
        },
        {
            title: "❓ 破防！{name} 深夜放毒曬美食，自己一口不吃全餵了助理？",
            body: "昨日深夜，有狗仔拍到 {name} 購買了精緻甜點，但在保姆車上只是拍了照，隨後全塞給了身邊的助理。引發全網關於「女明星假吃人設」的激烈撕逼！",
            happyChange: -15,
            fansChange: 15
        },
        {
            title: "🥤 頂流吃播？{name} 邊走路邊嗦粉，毫無偶像包袱！",
            body: "不看不知道，一看嚇一跳！{name} 竟被拍到在路邊攤大口嗦粉，燙得茲牙咧嘴卻停不下來。這種毫無防備的真實感反而瘋狂圈粉，粉絲數暴漲！",
            happyChange: -8,
            fansChange: 45
        }
    ],
    game: [
        {
            title: "🎮 獨家！原來頂流搞錢的秘诀竟是玩弱智數碼網遊？！",
            body: "震驚爆料！有路人在網吧偶遇玩得正嗨的 {name}，一邊瘋狂點擊屏幕裡的抽卡和連連看，一邊發出魔性笑聲。贏了區區 ${reward} 獎勵就激動得手舞足蹈，簡直毫無巨星包袱！",
            happyChange: -15,
            fansChange: 35
        },
        {
            title: "⏱️ 網癮少女！{name} 片場休息狂刷手機，疑似戀情曝光？",
            body: "有八卦媒體拍到 {name} 在等戲間隙雙手瘋狂戳屏幕，面部表情豐富。據放大畫面高清比對，她其實只是在玩脆，並非網傳的熱戀聊天。唯粉紛紛鬆了一口氣。",
            happyChange: -12,
            fansChange: 20
        },
        {
            title: "🏆 遊戲天賦驚人！爆料稱 {name} 曾險些網遊電競出道？",
            body: "業內知情人爆料，{name} 私底下是個不折不扣的電競狂熱粉。據說她在某休閒小遊戲裡的勝率高達99%，這次玩耍又斬獲了 ${reward}。粉絲驚呼：姐姐不演戲也能去打職業吧！",
            happyChange: -5,
            fansChange: 50
        }
    ],
    work: {
        bigWin: {
            title: "🔥 大爆料！{name} 剛拍完{movie}就被拍到密會神秘人，資源到手軟？",
            body: "知情人透露，新片剛剛大爆的 {name} 憑藉著極其出彩的「{persona}」表現身身價瘋狂飆升。殺青當夜便被狗仔拍到在高級餐廳慶祝。網友議論：這絕對是穩坐一線頂流的節奏！",
            happyChange: -5,
            fansChange: 80
        },
        fail: {
            title: "❌ 慘遭退貨！{name} 試鏡落選，在路邊失魂落魄哭泣？",
            body: "突發！知名演員 {name} 今日去{movie}劇組試鏡，不知是否因為發揮失常，竟被導演當場拒絕。有人拍到她離場時眼眶通紅。粉絲瘋狂撕劇組：「我們姐姐演技這麼好憑什麼不用？！」大鬧熱搜。",
            happyChange: -30,
            fansChange: 55
        },
        poor: {
            title: "📉 心酸！新電影撲街，知名演員 {name} 街頭表情落寞身形消瘦！",
            body: "由於新劇{movie}反響平平，主演 {name} 似乎承受了巨大的市場壓力。被拍到獨自走在冷風中。大批影迷心疼直呼：「寶貝不哭，你演的{persona}已經是最好的了！」",
            happyChange: -20,
            fansChange: 40
        },
        normalPool: [
            {
                title: "🎬 {movie}片場流出！{name} 與對手戲演員疑似眼神拉絲？",
                body: "八卦記者今日潛入劇組，拍到了 {name} 飾演「{persona}」時的精彩路透。其眼神戲極具張力，與搭檔互動充滿火花，引發無數劇迷集體嗑生嗑死！未播先火！",
                happyChange: -10,
                fansChange: 45
            },
            {
                title: "⚠️ 敬業還是炒作？{name} 拍戲帶傷上陣，引發粉絲罵戰",
                body: "據前線探班消息，{name} 在拍攝電影{movie}時堅持不用替身，差點受傷。有人質疑是劇組故意買熱搜炒作，唯粉則心疼地把劇組官博罵到了關閉評論區。",
                happyChange: -15,
                fansChange: 30
            }
        ]
    },
    funny: [
        {
            title: "👀 迷惑行為！{name} 街頭跟影子猜拳，疑似精神壓力過大？",
            body: "有路人在公園拍到令人啼笑皆非的一幕：人氣女星 {name} 竟然蹲在地上對著自己的影子瘋狂猜拳，一會兒笑一會兒嘆氣。狗仔懷疑她近期工作強度太高，精神防線已經崩潰。",
            happyChange: -20,
            fansChange: 50
        },
        {
            title: "💰 震驚！女明星破產了？{name} 被拍到在垃圾桶旁撿廢品！",
            body: "天大新聞！昔日風光的明星 {name} 今日竟一身素衣，趴在街角翻找廢舊紙箱和瓶子，甚至高興地把垃圾帶回家！難道演藝圈寒冬已經讓頂流淪落至此？經紀人尚未回應。",
            happyChange: -25,
            fansChange: 70
        },
        {
            title: "🐜 奇觀！{name} 躲在路邊偷听八卦，一听就是兩小時",
            body: "今日熱搜第一：#{name} 精神狀態#。有記者拍到她毫無防備地躲在墙边，雙眼發直地盯著闹事群体，完全無視了周圍圍觀的群眾。網友笑瘋：「這姐太有梗了，簡真是我的精神狀態寫照！」",
            happyChange: -5,
            fansChange: 65
        }
    ],
    gashapon: {
        title: "🎰 豪賭成性？爆料 {name} 現身街頭遊戲機廳，瘋狂投幣大殺四方！",
        body: "有狗仔目擊，{name} 戴著墨鏡口罩低調現身某大型扭蛋機前，瘋狂連抽數十發，雙眼通紅大喊「出貨！」毫無平日高冷形象。網友調侃：原來女明星也是非酋。",
        happyChange: -10,
        fansChange: 30
    },
    selfie: {
        title: "📸 自拍太隨意！{name} 街頭找角度自拍，竟然一秒結束？",
        body: "記者在商場偶遇正在自拍營業的 {name}，竟然只舉起手機一秒就放下，速度之快連記者都自歎不如。",
        happyChange: -15,
        fansChange: 40
    }
};