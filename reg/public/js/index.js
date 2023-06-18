
let {log} = console;

// 壁纸瀑布流
const bt = document.querySelectorAll('.tp')//获取节点
let addtp = (a) => {
    let index = parseInt(Math.random()*indexData['wallpaper']['images'].length)//获取图片索引
    const box = document.createElement('div')//创建div节点
    box.className = 'box';
    box.innerHTML = `<div class="pic"><img src="./images/${indexData['wallpaper']['images'][index]}"></div>
    <div class="title">${indexData['wallpaper']['test'][index]}</div>`//给创建的div添加内容
    bt[a].appendChild(box)//将新创建的div添加到获取到的节点
} 

//通过循环添加节点
let indextp = () => {
    for(let i = 0; i< bt.length; i++){
        addtp(i)
    }
}

indextp()


let minimum = () => {
    const tp = document.querySelectorAll('.tp');
    let minIndex = 0; // 初始化最小高度的元素索引
    let minHeight = Number.POSITIVE_INFINITY; // 初始化最小高度为正无穷大
    
    for (let index = 0; index < tp.length; index++) {
        let node = tp[index].children;

        let sum = 0
        for (let i = 0; i < node.length; i++) {
            sum = sum + node[i].clientHeight
        }
        if (sum < minHeight) { 
            // 如果当前元素比最小高度还小，则更新最小高度和其对应的索引 
            minHeight = sum;
            minIndex = index; 
        }
    }

    return minIndex
}

// 监听滚动事件
let indexone=0;
window.onscroll = function () {
    // 获取当前窗口的可见高度
    
    const clientHeight = document.documentElement.clientHeight;
    // 获取当前页面的总高度
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    // 判断当前滚动条是否到达了页面底部
    if (scrollTop + clientHeight >= scrollHeight&&indexone<=2) {
        indexone++;
        for (let i = 0; i < 4; i++) {
            let min = minimum();
            addtp(min);
        }
    }
};

//导航栏
let fn = (src, arr) => {
    let sun = document.querySelector(src)
    for (let i = 0; i < arr.length; i++) {
      lis = document.createElement('li')
      lis.innerHTML = `<a href="${data['title']['domainName'][i]}">${arr[i]}</a>`
      sun.appendChild(lis)
    }
  
  }
  fn('section>.nav>ul', data['title']['text'])

  
// 轮播图
let lunbotu = (src, arr, len) => {
    let sun = document.querySelector(src)
    for (let i = 0; i < arr[0]['images'].length; i++) {
        lis = document.createElement(len)
        lis.classList.add('swiper-slide');
        lis.innerHTML = `<img src="./images/${arr[0]['images'][i]}" alt="">`
        sun.appendChild(lis)
    }
}
lunbotu('.left>.swiper>.swiper-wrapper', homepageData['rotation'], 'div')
