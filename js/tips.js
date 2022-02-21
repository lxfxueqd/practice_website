//提示框

let form = document.querySelector(".sign_up");//获取弹框父元素
let btn1 = document.querySelector(".btn_sign_up");//获取报名按钮
let form_s = document.querySelector(".sign_up_form");//获取弹框父元素
let myreg =  /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/; //有效邮箱地址

//点击报名按钮,展示相应信息
let show = function () {
    let school_name = document.getElementById("school").textContent;//获取学校数值
    let school_year = document.getElementById("year_of_enter_school").textContent;//获取入学年份数值
    let email = document.getElementById("mail").value;//获取邮箱
    
    if(school_name === ""){//判断学校是否为空
        createFalseDiv("学校名称不能为空,请重新输入");    
    }
    else if(school_year === ""){//判断入学年份是否为空
        createFalseDiv("入学年份不能为空,请重新输入");
    }   
    else if(email === "" || !myreg.test(email)){//判断邮箱地址是否有效
        createFalseDiv("邮箱地址不符合要求(yourname@host.com),请重新输入");
    }
    else{  //信息正确时,创建提示信息及报名成功框  
        createSuccessDiv();
        createTrueDiv("恭喜您,来自"+school_name+school_year+"级"+email+"同学,您的报名信息已记录,请关注您的邮件");     
    }
};   

//创建错误弹出框
function createFalseDiv(message){
    if(document.querySelector(".red_tips")){
        form.removeChild(document.querySelector(".red_tips"));
    }
    div1 = document.createElement("div");//创建一个div框
    form.appendChild(div1);
    div1.className="red_tips";//设置div框样式
    div1.style.width="890px";
    div1.style.height="50px";
    div1.style.backgroundColor="rgb(255, 151, 168)";
    div1.style.borderRadius="30px";
    div1.style.position="relative";
    div1.style.bottom="500px";
    div1.textContent = message;
    div1.style.fontSize="18px";
    div1.style.fontWeight="bold";
    div1.style.textAlign="center";
    div1.style.lineHeight="50px";
    setTimeout("form.removeChild(div1)",3000);//弹出框3s消失
}

//创建信息正确弹出框
function createTrueDiv(message){
        if(document.querySelector(".true_tips")){
        form.removeChild(document.querySelector(".success_tips"));
        }
        div2 = document.createElement("div");//创建一个div框
        form.appendChild(div2);
        div2.className="true_tips";//设置div框样式
        div2.style.width="890px";
        div2.style.height="50px";
        div2.style.backgroundColor="rgb(160, 241, 160)";
        div2.style.borderRadius="30px";
        div2.style.position="relative";
        div2.style.bottom="650px";
        div2.textContent = message;
        div2.style.fontSize="18px";
        div2.style.fontWeight="bold";
        div2.style.textAlign="center";
        div2.style.lineHeight="50px";
        setTimeout("form.removeChild(div2)",5000);//弹出框5s消失
}

//创建完成报名框
function createSuccessDiv(){
    if(document.querySelector(".success_div")){
        form.removeChild(document.querySelector(".success_div").parentNode);
    }
    let divS = document.createElement("div");
    form.appendChild(divS);
    let div3 = document.createElement("div");
    divS.appendChild(div3);
    div3.className="success_div";//设置div框样式
    div3.style.width="850px";
    div3.style.height="100px";
    div3.style.backgroundColor="white";
    div3.style.borderRadius="30px";
    div3.style.position="relative";
    div3.style.bottom="650px";
    div3.textContent = "您已完成报名,开始您的学习之旅吧!";
    div3.style.fontSize="30px";
    div3.style.fontWeight="bold";
    div3.style.textAlign="center";
    div3.style.lineHeight="100px";
    div3.style.boxShadow="gainsboro 3px 3px 3px 3px";

    a=document.createElement("a");//创建重新报名链接
    divS.appendChild(a);
    a.textContent="重新报名";
    a.style.color="gray";
    a.style.position="relative";
    a.style.bottom="680px";
    a.style.left="770px";

    a.onclick=function(){//点击链接返回报名框
        div3.style.visibility="hidden";
        a.style.visibility="hidden";
        form_s.style.visibility="visible";
    }
    form_s.style.visibility="hidden";
}

btn1.addEventListener('click',show,false);
