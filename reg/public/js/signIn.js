let NodeIpts = document.querySelectorAll("input");
let NodePs = document.querySelectorAll(".father p");
let NodeI = document.querySelectorAll(".father i");
let popup = document.getElementById("popup");
let popupDiv = document.querySelector("#popup div");
let verificationCode = document.querySelector(".verificationCode");
let spans = verificationCode.getElementsByTagName("span");
let backbutton = document.querySelector(".back-button");

// 验证码生成
let randomSrc =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

verificationCode.onclick = function () {
    shu();
};

// 账号
NodeIpts[0].addEventListener("blur", (e) => {
    const account = NodeIpts[0].value;
    const reg = /^[0-9a-zA-Z]{3,10}$/;

    if (reg.test(account)) {
        NodePs[0].innerHTML = "";
        NodeI[0].classList.remove("showHidden");
    } else {
        NodePs[0].innerHTML = "由3~10位数字或字母组成";
        NodeI[0].classList.add("showHidden");
    }
});

// 密码
NodeIpts[1].addEventListener("keyup", (e) => {
    const account = NodeIpts[1].value;
    checkPasswordSecurity(account, NodePs[1]);
});
NodeIpts[1].addEventListener("blur", (e) => {
    const account = NodeIpts[1].value;
    checkPasswordSecurity(account, NodePs[1]);
});

// 验证码
NodeIpts[2].addEventListener("blur", (e) => {
    const account = NodeIpts[2].value;
    var YZM = verificationCode.innerText.split("\n").join("");

    if (account === YZM) {
        NodePs[2].innerHTML = "";
        NodeI[2].classList.remove("showHidden");
    } else {
        NodePs[2].innerHTML = "验证码输入不一致(区分大小写)";
        NodeI[2].classList.add("showHidden");
    }
});

// 登录
NodeIpts[4].addEventListener("click", (e) => {
    registrationButton();
});

// 隐藏弹窗
backbutton.addEventListener("click", (e) => {
    popup.classList.toggle("active");
});

// 用户体验优化
function onFocusHandler(index, e) {
    if (NodeI[index].classList.contains("showHidden")) {
        NodeIpts[index].value = "";
    }
}

NodeIpts[0].onfocus = function name() {
    onFocusHandler(0);
};
NodeIpts[1].onfocus = function name() {
    onFocusHandler(1);
};
NodeIpts[2].onfocus = function name() {
    onFocusHandler(2);
};

/*
函数功能：验证密码
参数
    password input输入的值 
*/
function checkPasswordSecurity(password) {
    const passwordRegexList = [
        /^\d{6,10}$/,
        /^[a-zA-Z]{6,10}$/,
        /^[$#;-]{6,10}$/,
        /^[0-9a-zA-Z]{6,10}$/,
        /^[0-9$#;-]{6,10}$/,
        /^[a-zA-Z$#;-]{6,10}$/,
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[$#;-])[0-9a-zA-Z$#;-]{6,10}$/,
    ];

    let bol = false;

    for (let i = 0; i < passwordRegexList.length; i++) {
        if (passwordRegexList[i].test(password)) {
            bol = true;
            break;
        }
    }

    if (bol) {
        NodePs[1].innerHTML = "";
        NodeI[1].classList.remove("showHidden");
        return;
    } else {
        NodePs[1].innerHTML = "由6-10位数字+字母+特殊符号$#;-组成";
    }

    NodeI[1].classList.add("showHidden");
    return;
}

/*
函数功能：判断输入是否正确
*/
function registrationButton() {
    var kai = 0;

    for (var i = 0; i < NodeI.length; i++) {
        if (!NodeI[i].classList.contains("showHidden")) {
            kai++;
        }
    }

    if (kai !== 3) {
        popup.classList.add("active");
        popupDiv.innerHTML = `
            <p>1、请确认账号、密码、手机号是否符合要求</p>
            <p>2、请确认是否勾选我已同意</p>
        `;
        return false;
    }

    return true;
}

/*
函数功能：随机生成验证码
*/
function shu() {
    for (let i = 0; i < spans.length; i++) {
        var shi = randomSrc[parseInt(Math.random() * randomSrc.length)];
        spans[i].innerHTML = `${shi}`;

        if (parseInt(Math.random() * 2)) {
            spans[i].style.transform = `rotate(${parseInt(Math.random() * 41)}deg)`;
        } else {
            spans[i].style.transform = `rotate(${-parseInt(Math.random() * 41)}deg)`;
        }
    }
}
shu();

// 给loginForm表达添加一个表单提交事件
$("#loginForm").submit(function (event) {
    event.preventDefault(); // 阻止表单默认的提交行为

    // 获取每个表单中的值
    const accountNumber = $("#accountNumber").val();
    const password = $("#password").val();


    // 判断是否输入完整
    // 如果registrationButton()返回true，则表示输入完整，执行下面的代码块
    if (registrationButton()) {
        // 使用jQuery的AJAX方法发送POST请求
        $.ajax({
            // 请求的URL
            url: "http://127.0.0.1:3000/signIn",
            // 请求类型为POST
            type: "POST",
            // 发送的数据，包括账号和密码
            data: {
                accountNumber: accountNumber,
                password: password,
            },
            // 请求成功时的回调函数
            success: function (response) {
                // 如果返回结果为真，则跳转到主页
                if (response) {
                    location.href = "./index.html";
                }
            },
            // 请求失败时的回调函数
            error: function (error) {
                // 弹出提示框，并显示错误信息
                popup.classList.add("active");

                // 修改提示信息
                popupDiv.innerHTML = `
                    ${error.responseJSON.message}，请重新输入</p>
                `;

                console.log(error);
            },
        });
    }
});
