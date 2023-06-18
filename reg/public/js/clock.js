window.onload=function(){
    let {log} = console;


    let xhr = new XMLHttpRequest();
    let res ;//存放从服务器获取到的结果
    xhr.open('GET','http://localhost:3000/clock',true);
    xhr.send();
    
    xhr.onload=()=>{
        if(xhr.readyState==4&&xhr.status==200){
            // log(xhr.responseText)
            res = JSON.parse(xhr.responseText)
        }
    }   


    let divs = document.querySelectorAll('.content>div');
    let uls = document.querySelectorAll('ul')
    let as = document.querySelectorAll('p>a');
    let spans = document.querySelectorAll('.content>div>div>p>span')
    // log(spans);
    spans[0].style='background:pink';
    let today = new Date(2023,10,10)

    let timeArr = ['10-10星期一',
                   '10-11星期二',
                   '10-12星期三',
                   '10-13星期四',
                   '10-14星期五',
                   '10-15星期六',
                   '10-16星期日',
                    ]
    let left = document.querySelector('.bar-left');
    let right = document.querySelector('.bar-right');
    let num = 0;
    let week = ['日','一','二','三','四','五','六']
    left.addEventListener('click',function(){
        --num;
        num =num<0?0:num;
        // log(num);
        move();
        fn(-1)
    })

    right.addEventListener('click',function(){
        ++num;
        num=num>timeArr.length-3?timeArr.length-3:num;
        // log(num)
        move();
        fn()
    })





        setTimeout(fn,200,-1);

    function fn(req){
        for(let i=0;i<as.length;i++){
            uls[i].innerHTML=''
            if(req<0){
                i==0?today.setDate(today.getDate()-1):today.setDate(today.getDate()+1)
            }else{
                today.setDate(today.getDate()+1)
            }
            log(today.getDate())
            // as[i].innerHTML=timeArr[num+i];
            let str = `${today.getMonth()+1}-${today.getDate()}星期${week[today.getDay()]}`;
            as[i].innerHTML=str;
            let arr = [];
            
            let day = str.slice(str.length-3)
            for(let key in res){
                if(res[key].day==day){
                    arr.push(res[key])
                }
            }

            // 创建li
            for(let n=0;n<arr.length;n++){
                let li = document.createElement('li');
                li.innerHTML=`
                <span>1${n}:00</span>
                <img src=${arr[n].src} alt="">
                <div>
                    <span>${arr[n].text}</span>
                    <span>${arr[n].hua}</span>
                </div>
                                `;
                uls[i].appendChild(li)
            }
        }

            today.setDate(today.getDate()-2)

    }
   






    // 内容向右位移
    function move(){
        for(let i=0;i<divs.length;i++){
            divs[i].style=''
        }

        setTimeout(function(){
            for(let n=0;n<divs.length;n++){
                divs[n].style=`transform: translateX(${n*20}vw);;transition:all ${n*0.3}s linear`
            }
        },50)
    }
    move()

}
