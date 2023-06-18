let NodeIpts = document.querySelectorAll('input')
let NodePs = document.querySelectorAll('.father p')
let NodeI = document.querySelectorAll('.father i')
let popup = document.getElementById('popup')
let NodeSpan = document.querySelector('section .box form .father .safetyFactor span:nth-child(2)')


// 账号
NodeIpts[0].addEventListener('blur', e => {
    const account = NodeIpts[0].value;
    const reg = /^[0-9a-zA-Z]{3,10}$/;
    if (reg.test(account)) {
        NodePs[0].innerHTML = '';
        NodeI[0].classList.remove('showHidden')
    } else {
        NodePs[0].innerHTML = '由3~10位数字或字母组成'
        NodeI[0].classList.add('showHidden')
    }
});

// 密码
NodeIpts[1].addEventListener('keyup', e => {
    const account = NodeIpts[1].value;
    checkPasswordSecurity(account,NodeSpan);
});
NodeIpts[1].addEventListener('blur', e => {
    const account = NodeIpts[1].value;
    checkPasswordSecurity(account,NodeSpan);
});

// 手机号
NodeIpts[2].addEventListener('blur', e => {
    const account = NodeIpts[2].value;

    // 使用正则表达式验证账号是否符合要求
    const reg = /^1(3\d|4[579]|5[^4\D]|6[67]|7[^9\D]|8\d|9[89])\d{8}$/;
    if (reg.test(account)) {
        NodePs[2].innerHTML = '';
        NodeI[2].classList.remove('showHidden')
    } else {
        NodePs[2].innerHTML = '不符合中国大陆手机号全号段（移动，联通，电信）'
        NodeI[2].classList.add('showHidden')
    }
});

// 注册 
NodeIpts[4].addEventListener('click', e => {
    registrationButton()
});

// 隐藏弹窗
popup.addEventListener('click', e => {
    popup.classList.toggle('active')
});

// 用户体验优化
function onFocusHandler(index,e) {
    if (NodeI[index].classList.contains('showHidden')) {
        NodeIpts[index].value = '';
    }
}

NodeIpts[0].onfocus = function name() {
    onFocusHandler(0)
};
NodeIpts[1].onfocus = function name() {
    onFocusHandler(1)
};
NodeIpts[2].onfocus = function name() {
    onFocusHandler(2)
};

/*
函数功能：验证密码
参数
    password input输入的值 
    node 提示文本节点
*/ 
function checkPasswordSecurity(password,Node) {
    let securityLevel = '由6-10位数字+字母+特殊符号$#;-组成';
    let color = 'red';
    let bol = false;

    if (/^\d{6,10}$/.test(password) || /^[a-zA-Z]{6,10}$/.test(password) || /^[$#;-]{6,10}$/.test(password)) {
        securityLevel = '弱';
        color = 'red';
        bol = true;
    } else if (/^[0-9a-zA-Z]{6,10}$/.test(password) || /^[0-9$#;-]{6,10}$/.test(password) || /^[a-zA-Z$#;-]{6,10}$/.test(password)) {
        securityLevel = '中';
        color = 'yellow';
        bol = true;
    } else if (/^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[$#;-])[0-9a-zA-Z$#;-]{6,10}$/.test(password)) {
        securityLevel = '强';
        color = 'green';
        bol = true;
    }

    bol ? NodeI[1].classList.remove('showHidden') : NodeI[1].classList.add('showHidden');
    Node.innerHTML = securityLevel;
    Node.style.color = color;
}

/*
函数功能：判断输入是否正确
*/ 
function registrationButton() {
    var kai = 0;
    
    for (var i = 0; i < NodeI.length; i++) {
        if (!(NodeI[i].classList.contains('showHidden'))) {
            kai++;
        }
    }

    if (kai == 3 && NodeIpts[3].checked) {
        localStorage.setItem('userName',NodeIpts[0].value)  // 账号
        localStorage.setItem('pwd',NodeIpts[1].value)  // 密码
        localStorage.setItem('telephone',NodeIpts[2].value)  // 电话

        location.href = './signIn.html'
    } else {
       alert('请检查输入输入的账号,密码,手机号是否合法')
    }
}


// 给registrationForm表达添加一个表单提交事件
$('#registrationForm').submit(function (event) {
    event.preventDefault(); // 阻止表单默认的提交行为

    // 获取每个表单中的值
    const accountNumber = $('#accountNumber').val();
    const password = $('#password').val();
    const cellPhoneNumber = $('#cellPhoneNumber').val();
    const userAgreement = $('#userAgreement').val();

    // 判断是否输入完整
    if (registrationButton()) {
        // 使用jQuery的AJAX方法发送POST请求
        $.ajax({
            // 请求的URL
            url: 'http://127.0.0.1:3000/register',
            // 请求类型为POST
            type: 'POST',
            // 发送的数据，包括账号、密码、手机号和用户协议
            data: {
                "accountNumber": accountNumber,
                "password": password,
                "cellPhoneNumber": cellPhoneNumber,
                "userAgreement": userAgreement,
            },
            // 请求成功时的回调函数
            success: function (response) {
                // 如果返回结果为真，则跳转到登录页面
                if (response) {
                    console.log(111);
                    location.href = './signIn.html'
                }
            },
            // 请求失败时的回调函数
            error: function (error) {
                // 弹出提示框，并显示错误信息
                popup.classList.add('active')

                // 修改提示信息
                popupDiv.innerHTML = `<p>账号已存在，请重新输入</p>`
            }
        });
    }
});
