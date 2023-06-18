let fn = (src, arr) => {
    let sun = document.querySelector(src)
    for (let i = 0; i < arr.length; i++) {
        lis = document.createElement('li')
        lis.innerHTML = `<a href="${data['title']['domainName'][i]}">${arr[i]}</a>`
        sun.appendChild(lis)
    }

}
fn('header>.top>ul', data['title']['text'])

// 轮播图
let lunbotu = (src, arr, len) => {
    let sun = document.querySelector(src)
    for (let i = 0; i < arr.length; i++) {
        lis = document.createElement(len)
        lis.classList.add('swiper-slide');
        lis.innerHTML = `<img src="./images/${arr[i]}" alt="">`
        sun.appendChild(lis)
    }
}
lunbotu('.Carousel>.swiper>.swiper-wrapper', screeningRoom['rotation']['images'], 'div')

// 热播推荐
let Hit_recommended = (src, arr, len) => {
    let sun = document.querySelector(src)
    for (let i = 0; i < arr['images'].length; i++) {
        lis = document.createElement(len)
        lis.innerHTML = `<img src="./images/${arr['images'][i]}" alt=""><p>${arr['txt']['one'][i]}</p>
        <p>${arr['txt']['two'][i]}</p>`
        sun.appendChild(lis)
    }

}
Hit_recommended('.Hit_recommended>.mian>.left>ul', screeningRoom['hotBroadcast'], 'li')
// 纪录片
let documentary = (src, arr, len) => {
    let sun = document.querySelector(src)
    for (let i = 0; i < arr['images'].length; i++) {
        lis = document.createElement(len)
        lis.innerHTML = `<img src="./images/${arr['images'][i]}" alt=""><p>${arr['txt']['one'][i]}</p>
        <p>${arr['txt']['two'][i]}</p>`
        sun.appendChild(lis)
    }

}
documentary('.documentary>.mian>.center>ul', screeningRoom['documentary'], 'li')
let End_animation = (src1, arr) => {
    let sidebar = document.querySelector(src1)
    for (let i = 0; i < arr['name'].length; i++) {
        let uls = document.createElement('li')
        uls.innerHTML = `
          <div>${i + 1}</div>
          <div>${arr['name'][i]}</div>
          <div><img src="./images/${arr['images'][i]}" alt=""><span>${arr['subtitle']['one']}</span>
          <span>${arr['subtitle']['two']}</span></div>
        `
        sidebar.appendChild(uls)
    }
}


End_animation('.documentary>.mian>.right>ul', screeningRoom['documentary']['ranking'], "li")
//   电视剧
documentary('.tv>.mian>.center>ul', screeningRoom['TV'], 'li')
End_animation('.tv>.mian>.right>ul', screeningRoom['TV']['ranking'], "li")

let filmLeftData = [
    { src: 'four01.jpg', txt: '你的名字。', txta: '追寻你的踪迹即使次元相隔' },
    { src: 'four02.jpg', txt: '羞羞的铁拳。', txta: '想笑吗，来看我呀' },
    { src: 'four03.jpg', txt: '缝纫机乐队。', txta: '来摇滚公园，重拾音乐梦' },
    { src: 'four04.jpg', txt: '从你的全世界路过。', txta: '都市情感不一样的故事' },
    { src: 'four05.jpg', txt: '空天猎。', txta: '天空是我们的战场' },
    { src: 'four06.jpg', txt: '一代宗师。', txta: '一代武学宗师叶问' },
    { src: 'four07.jpg', txt: '战狼II。', txta: '军人的战场，军人的职责' },
    { src: 'four08.jpg', txt: '大鱼海棠。', txta: '北冥有鱼，其名为鲲' }
]
let film_left = document.querySelector('.move>.main>.left>ul');
for (let key in filmLeftData) {
    film_left.innerHTML +=
        `
        <li>
            <img src="images/${filmLeftData[key].src}" alt="">
            <p>${filmLeftData[key].txt}</p>
            <p class="gray">${filmLeftData[key].txta}</p>
        </li>
    `
}

let data_mo = [
    { num: '1', title: '【奇幻/动作】 悟空传 【2017】' },
    { num: '2', title: '【爱情/动画】 你的名字。【2016】' },
    { num: '3', title: '【剧情/伦理】 秀女1995 【谢兰 国语】' },
    { num: '4', title: '【战争/历史】秦颂【1996】央版高清' },
    { num: '5', title: '【剧情故事】《双雄会：李自成与张献忠》' },
    { num: '6', title: '（国产/耽美剧）何故惹凡尘' },
    { num: '7', title: '巧奔妙逃.1996（东奔西走）' },
    { num: '8', title: '姜文电影——鬼子来了 2000年 BD国语中字' },
    { num: '9', title: '【剧情】 小森林 精编版（2015）' },
    { num: '10', title: '【童年搞笑经典】【三毛从军记】【1992】' }
]
let mo_show = [
    { url: 'p2.1.jpg', score: '综合评分:9.8万' },
    { url: 'p2.2.jpg', score: '综合评分:6.9万' },
    { url: 'p2.3.jpg', score: '综合评分:1.7万' },
    { url: 'p2.4.jpg', score: '综合评分:26.1万' },
    { url: 'p2.5.jpg', score: '综合评分:7137' },
    { url: 'p2.6.jpg', score: '综合评分:89.8万' },
    { url: 'p2.7.jpg', score: '综合评分:17.1万' },
    { url: 'p2.8.jpg', score: '综合评分:22.1万' },
    { url: 'p2.9.jpg', score: '综合评分:4.7万' },
    { url: 'p2.9.jpg', score: '综合评分:15.8万' },
]

let End_animation11 = (src1, arr, arr1) => {
    let sidebar = document.querySelector(src1)
    for (let i = 0; i < arr.length; i++) {
        let uls = document.createElement('li')
        uls.innerHTML = `
        <li>
        <div>${arr[i].num}</div>
      <div>${arr[i].title}</div>
      <div><img src="./images/${arr1[i].url}" alt=""><span>${arr1[i].url}</span>
      <span>>${arr1[i].score}</span></div>
</li>`

        sidebar.appendChild(uls)
    }
}

End_animation11('.move>.main>.right>ul',data_mo,mo_show)