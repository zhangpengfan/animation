//轮播图右侧
let lubotu_right = (src, arr) => {
  let fun = document.querySelector(src)
  for (let a = 0; a < arr[1]['title'].length; a++) {
    uls = document.createElement('li')
    uls.innerHTML = `<li><span><img src="./images/li_bg.png" alt=""></span>
        ${arr[1]['title'][a]}</li>`
    fun.appendChild(uls)
  }

}
lubotu_right('.Carousel>.rigth>ul', NationalInnovation['rotation'])
//轮播图
let lunbotu = (src, arr, len) => {
  let sun = document.querySelector(src)
  for (let i = 0; i < arr[0]['images'].length; i++) {
    lis = document.createElement(len)
    lis.classList.add('swiper-slide');
    lis.innerHTML = `<img src="./images/${arr[0]['images'][i]}" alt=""><span>${arr[0]['text'][i]}</span>`
    sun.appendChild(lis)
  }
}
lunbotu('.Carousel>.left>.swiper>.swiper-wrapper', NationalInnovation['rotation'], 'div')

//最近更新
let Recently_updated = (src, arr) => {
  let fun = document.querySelector(src)
  for (let a = 0; a < arr['images'].length; a++) {
    uls = document.createElement('li')
    uls.innerHTML = `<div><img src="./images/${arr['images'][a]}" alt=""></div>
     <div><span>${arr['text'][a][0]}</span><span>${arr['text'][a][1]}</span></div>`
    fun.appendChild(uls)
  }
}
Recently_updated('.Recently_updated>ul', NationalInnovation['article'])
// 伸缩
let divs = document.querySelector('.quanbu')
let ulss = document.querySelector('.Recently_updated>ul')
let num = 0;
divs.addEventListener('click', () => {
  num++;
  if (num % 2 == 0) {
    ulss.style.height = '39vw'
  } else {
    ulss.style.height = '17vw'
  }
  ulss.style.transition = 'height 0.5s ease-in-out';

})

//国产动画
let End_animation = (src1, arr) => {
  let sidebar = document.querySelector(src1)
  for (let i = 0; i < arr.length - 1; i++) {
    let uls = document.createElement('li')
    uls.innerHTML = ` <li>
		<div>${i + 1}</div>
		<div>${NationalInnovation['original']['ranking']['name'][i]}</div>
		<div><img src="./images/${arr[i]}" alt="">
		</div>
	  </li>`
    sidebar.appendChild(uls)
  }
}

End_animation('.Domestic_animation>.main>.right>ul', NationalInnovation['original']['images'])
End_animation('.Domestic_original>.main>.right>ul', NationalInnovation['original']['images'])

let End_animation_right = (src1, arr) => {
  let sidebar = document.querySelector(src1)
  for (let i = 0; i < arr.length; i++) {
    let uls = document.createElement('li')
    uls.innerHTML = ` 
		<img src = "./images/${arr[i]}" alt="">
		<p>${NationalInnovation['animation']["txt"]['one'][i]}</p>
        <span><img src="./images/li_0.PNG" alt="">${NationalInnovation['original']["txt"]['two'][i]}</span>
        <span><img src="./images/li_1.PNG" alt="">${NationalInnovation['original']["txt"]['three'][i]}</span>
	  `
    sidebar.appendChild(uls)
  }
}

End_animation_right('.Domestic_animation>.main>.left>ul', NationalInnovation['original']['images'])
End_animation_right('.Domestic_original>.main>.left>ul', NationalInnovation['original']['images'])

//   手办
End_animation_right('.Figures>.main>.left>ul', NationalInnovation['handOperated']['images'])

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

