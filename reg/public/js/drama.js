
let { log } = console
let uls = document.querySelector('.Carousel>.rigth>ul')

//轮播图渲染
let rotationright = (src1, arr) => {
	let sidebar = document.querySelector(src1)
	for (let i = 0; i < arr[1]['images'].length; i++) {
		let lis = document.createElement('li')
		lis.innerHTML = `
            <img src="./images/${arr[1]['images'][i]}">
            <p>${arr[1]['title'][i]}</P>
        `
		sidebar.appendChild(lis)
	}
}
rotationright('.Carousel>.rigth>ul', fanjuData["rotation"])
//连载动画渲染
let Serialized = (src1, arr) => {
	let sidebar = document.querySelector(src1)
	for (let i = 0; i < arr.length; i++) {
		let divs = document.createElement('div')
		divs.innerHTML = `
        <div><img src="./images/${arr[i]}"></div>
        <div><div><p>${fanjuData['serialization']['text'][i][0]}</P>
        <p>${fanjuData['serialization']['text'][i][1]}</P></div><div class='ss'><span>更新</span> 
        <span>${fanjuData['serialization']['collection'][i]}</span></div>
 `
		sidebar.appendChild(divs)
	}
}
Serialized(".Serialized>.main", fanjuData['serialization']['images'])

let end = document.querySelector('.ending')
let img = document.createElement("img")
img.src = `./images/${fanjuData['advertisement']['images'][0]}`
end.appendChild(img)

//完结动画
let End_animation = (src1, arr) => {
	let sidebar = document.querySelector(src1)
	for (let i = 0; i < arr.length; i++) {
	  let uls = document.createElement('li')
	  uls.innerHTML = ` <li>
		<div>${i+1}</div>
		<div>${fanjuData['completingAnime'].text[i]}</div>
		<div><img src="./images/${arr[i]}" alt="">
		  <span>${fanjuData['completingAnime'].text[i]}</span><span>综合评分：19.3</span>
		</div>
	  </li>`
	  sidebar.appendChild(uls)
	}
  }
  
End_animation('.End_animation>.max>.left>ul',fanjuData['completingAnime']['images'])

let End_animation_right = (src1, arr) => {
	let sidebar = document.querySelector(src1)
	for (let i = 0; i < arr.length; i++) {
	  let uls = document.createElement('li')
	  uls.innerHTML = ` 
		<img src = "./images/${arr[i]}" alt="">
		<p>${fanjuData['popularAnime'].text[i]}</p>
	  `
	  sidebar.appendChild(uls)
	}
  }
  
  End_animation_right('.End_animation>.max>.right>ul',fanjuData['completingAnime']['images'])
//   热门大大
End_animation_right('.Hot_big>ul',fanjuData['popularAnime']['images'])

// 导航栏
let fn = (src, arr) => {
	let sun = document.querySelector(src)
	for (let i = 0; i < arr.length; i++) {
		lis = document.createElement('li')
		lis.innerHTML = `<a href="${data['title']['domainName'][i]}">${arr[i]}</a>`
		sun.appendChild(lis)
	}
   
  }
  fn('section>.nav>ul',data['title']['text'])