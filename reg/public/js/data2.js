// 公共数据
let data = {
    title: {
        text:['首页', '动漫', '番剧', '国创', '舞蹈', '游戏', '鬼畜', '放映厅'],
        domainName:['./index.html', '#', './drama.html', './Guochuang.html', '#', '#', '#', './Screening hall.html']
    }
}

// homepageData 首页
let homepageData = {
    rotation: [
        {
            name: '轮播图',
            images: ['03.jpg', '04.jpg', '05.jpg', '06.jpg', '02.jpg'],
            text: ['动漫1', '动漫2', '动漫3', '动漫4', '动漫5',],
        },
        {
            name: '侧栏',
            title: ['血界战线第二季', '战刻夜想曲', '你的名字', '少女终末旅行'],
            images: ['54.jpg', '55.jpg', '56.jpg', '57.jpg',]
        }
    ],
    VIP: {
        name: 'VIP推广',
        title: ['舞动青春', '夏目友人账', '魔法的新娘', '火影忍者新时代'],
        images: ['23.jpg', '24.jpg', '25.jpg', '26.jpg',]
    },
    advertisement: {
        title: '广告',
        images: ['71_1.jpg', '71_2.jpg', '71_3.jpg']
    },
    comic: {
        title: '动漫',
        images: ['08.jpg', '09.jpg', '010.jpg', '011.jpg'],
        text: ['丝绸女孩对谈', '橙心资讯', '我叫僵小鱼', '人马小姐不迷路'],
        ranking: {
            title: '热门动漫',
            name: ['名侦探柯南', '妖精的尾巴第二季', '少年锦衣卫第二季', '博人传 火影忍者新时代', '少女终末旅行', '如果有妹妹就好了', '结城友奈是勇者', '光之美少女食尚甜心']
        }
    },
    original: {
        title: '原创作品推荐',
        name: ['恋爱禁止的世界', '战斗女子高校', '银之守墓人', '重启咲良田', '樱花任务'],
        images: ['41.jpg', '42.jpg', '43.jpg', '44.jpg', '45.jpg'],
    },
    japaneseAnime: {
        title: "日本动漫",
        text: ['妖精的尾巴', '十二大战', '甘城光辉游乐园', '哆啦A梦', '宠物小精灵BW', '精灵使的剑舞', '食戟之灵第三季', '美妙旋律第八季', '奇诺之旅2017', '蜡笔小新'],
        images: ['12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '32.jpg', '33.jpg'],
    },
    domestic: {
        title: '国产',
        images: ['38.jpg', '39.jpg', '40.jpg', '41.jpg'],
        text: ['我的天劫女友', '橙心资讯', '我是江小白', '狐妖小红娘'],
        ranking: {
            title: '热门国产',
            name: ['画江湖之换世门生（上篇）', '纳米核心第三季（下篇）', '十万个冷笑话第三季', '我差点就信了 第二季', '我是江小白', '凹凸世界 第一季', '女生宿舍日常第二季', '魔法使的新娘']
        }
    },
    chinaMadeCartoon: {
        title: "国产动漫",
        text: ['少年锦衣卫第二季', '萌娘说', '少年锦衣卫第二季', '灵剑山', '咕力咕力丫米果', '画江湖之换世门生', '阿狸梦之岛', '爱精灵乐吉儿', '怪物公寓', '樱桃小丸子'],
        images: ['42.jpg', '43.jpg', '44.jpg', '45.jpg', '46.jpg', '47.jpg', '48.jpg', '49.jpg', '50.jpg', '51.jpg'],
    },
    music: {
        title: '音乐',
        text: ['麟犀AI韵律', 'I-DREAM音乐祭', '战刻夜想曲', 'BanG Dream!'],
        images: ['79.jpg', '80.jpg', '81.jpg', '82.jpg'],
        ranking: {
            title: '排行',
            name: ['李宇春《Privacy》MV', '《梦想的声音2》林俊杰极限高音演唱', '【催泪向/治愈】名为心做し的痛', '极乐净土慢动作']
        }
    },
    wallpaper: {
        title: '壁纸',
        test: ["狐妖小红娘", "食载之灵", "博人传", "咕噜咕噜魔法阵", "画江湖之换世门生", "歌之王子殿下", "纳米核心第3季", "名侦探柯南"],
        images: ["000.jpg", "001.jpg", "001.jpg", "003.jpg", "004.jpg", "005.jpg", "006.jpg", "007.jpg"]
    }
}

// fanjuData 番剧
let fanjuData = {
    top: [
        {
            name: '头部',
            text: ['全部', '连载动画', '完结动画', '热播动漫', '官方延伸',],
        }
    ],
    rotation: [
        {
            name: '轮播图',
            images: ['guidaodong.jpg', 'printdong.jpg', 'daojiandong.jpg', 'freedong.jpg', 'sumiaodong.jpg'],
            text: ['动漫1', '动漫2', '动漫3', '动漫4', '动漫5',],
        },
        {
            name: '侧栏',
            title: ['你的名字&爱情的穿越', '小林家的龙女仆&萌化咯', '结城友奈是勇者&勇者的臂膀', '此花绮谭&花儿'],
            images: ['u=2717148160,2795193567&fm=27&gp=0.jpg', 'xiaolinjia.jpg', 'jiechen.jpg', 'cihua.jpg',]
        }
    ],
    serialization:{
            name:'连载动画',
            images: [
                'qingyinshaon.jpg','molizhicao.jpg','yaohuchuans.jpg','lingyishijie.jpg',
                'yirenzhixia.jpg','fate6.jpg','mengzhishaon.jpg','qingyu.jpg',
                'benghuaishijie.jpg','yirenzhixia.jpg','11.jpg','ce1-li1.jpg',
            ],
            text:[
                ['轻音少女','平泽唯&秋雾山'],['魔力之潮','DARKER ミルクJK搾り'],['妖狐传说','狐仙 & 狐妖'],['从零开始的异世界生活','長月達平'],
                ['一人之下','张楚岚 & 魔幻'],['命运长夜','fate'],['梦之少女','情牵少女'],['清淤恋爱记','茶花 & 插画'],
                ['崩坏的世界','超凡创世'],['一人之下','鸭志田'],['地狱少女','剧情 & 恐怖'],['一代剑圣','盖聂 & 渊虹'],
            ],
            collection:[
                '6话','12话','3话','3话',
                '21话','9话','5话','8话',
                '3话','30话','33话','66话',
            ]
    },
    advertisement: {
        title: '广告',
        images: ['71_4.jpg']
    },
    completingAnime: {
        title: '完结动漫',
        images: [
            'aotu.jpg', 'lingyu.jpg', 'baisexiangpu.jpg', 'bingguo.jpg',
            'qsmy.jpg', 'gemingji.jpg', 'shengyu.jpg', 'gc.jpg'
        ],
        text: [
            '【11月】凹凸世界英文译名AOTU,一部3D动画', '少年秦烈作为搏天族后裔,会有什么样的成长呢?', '纯白相薄 / 白色相册 / White Album', '改编自日本推理小说家米泽穗信原作的《古典部系列》小说',
            '秦时明月汉时关 & 纵横流派墨家', '犬冢久间(犬冢キューマ)', '刀剑神域 - 序列之争', '一段跨时间跨空间的恋爱，他们的结局如何？',
        ],
        ranking: {
            name: [
                "少年锦衣卫", "侠岚（魔幻武侠类）", "斗破苍穹（莫欺少年穷）", 
                "秦时明月(他们的结局如何？)", "灵主（热血悬疑武侠）", "杯莫停", 
                "换世门生（一段两个世界爱恨情仇）", "从前有座仙灵剑山", "天行九歌"
            ],
            subtitle:[
                '测试~测试~测试~'
            ]
        }
    },
    popularAnime: {
        title: '热门动漫',
        images: [
            'mingren.jpg', 'lufei.jpg', 'kenan.jpg', 'sishen.jpg','juren.jpg',
            'yaojingdeweiba.jpg','yinhun.jpg', 'clksd.jpg', 'printed.jpg', 'yirenzhixia.png'
        ],
        text: [
            '火影忍者【漩涡鸣人】', '海贼王【路飞】', '名侦探柯南【柯南】', '死神【黑崎一护】','进击的巨人【利威尔】',
             '妖精的尾巴【纳兹】', '银魂【坂田银时】', '从零开始的异世界生活','刀剑神域','一人之下【冯宝宝】'
        ],
    }
}

//放映厅
let screeningRoom = {
    rotation:{
        images:[
            'timg.jpg','07.jpg','bbbb.jpg','cccc.jpg','guidaodong5.jpg'
        ],
        text: ['动漫1', '动漫2', '动漫3', '动漫4', '动漫5',],
    },
    hotBroadcast:{
        images:['i101.jpg','i102.jpg','i103.jpg','i104.jpg'],
        txt:{
            one:['天行九歌','蜡笔小新','少年锦衣卫','画江湖之不良人II'],
            two:['国产炫美画风','正男小新模仿秀','火热播放','不良人又来了，还在等什么'],
        }
    },
    documentary:{
        images:[
            'three01.jpg','three02.jpg','three03.jpg','three04.jpg',
        ],
        txt:{
            one:['史诗工程III','乌贼：爱与死亡','川味 第一季','鲨鱼与章鱼'],
            two:['见证科技的力量','它到底经历了什么？','过一个火辣辣的冬天','谁是最后的赢家'], 
        },  
        ranking: {
            name: [
                "45秒飚上60楼！日本这样的电梯你敢坐吗？】", "【这个道长有点帅】一个道长的纪录片", 
                "这饼太好吃，歪国人吃了再也不想吃披萨","原子弹落到日本广岛的那一刻",
                "【纪录片/BBC】蓝色星球 THE BLUE PLANET","【纪录片】亿万富翁的有钱人生【全6P】",
                "文艺复兴.第一季第一集.[夏末秋字幕组]","男子声称自己是「时空旅人」",
                "【科普纪录】科学证明上帝的存在"
            ],
            images:[
                'p1.1.jpg','p1.2.jpg','p1.3.jpg','p1.4.jpg','p1.5.jpg','p1.6.jpg','p1.7.jpg','p1.8.jpg','p1.9.jpg',
            ],
            subtitle:{
                one:['45秒飚上60楼！日本这样的电梯你敢坐吗？',],
                two:['综合评分：4.7万'],
            }
        }
    },
    TV:{
        images:['five01.jpg','five02.jpg','five03.jpg','five04.jpg',],
        txt:{
            one:['隋唐英雄传 | 40集','无法拥抱的你 | 更新至2集','铁齿铜牙纪晓岚 | 40集','最后的战士 | 更新至4集'],
            two:['经典老剧百看不厌','放开我你这个禽兽','吹口烟都是爱你的形状','委屈到变形'],
        },
        ranking: {
            name: [
                "无法拥抱的你 第1集", "【职场/爱情】 猎场 23-24【2017】", 
                "【职场/爱情】 猎场 21-22【2017】","【职场/爱情】 猎场 25-26【2017】",
                "无法拥抱的你 第2集","【国产】亮剑 全30集 【2015】",
                "【剧情】 雪花女神龙 全45集【2004】","【古装剧33集全】 刁蛮公主",
                "【剧情】铠甲勇士 全52集【2009】"
            ],
            images:[
                'p3.1.jpg','p3.2.jpg','p3.3.jpg','p3.4.jpg','p3.5.jpg','p3.2.jpg','p3.3.jpg','p3.4.jpg','p3.9.jpg',
            ],
            subtitle:{
                one:['无法拥抱的你 第1集',],
                two:['综合评分：6.8万'],
            }
        }
    }
}