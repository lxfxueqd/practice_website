//入学年份选择弹出框函数实现

// 赋值
let years=[2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022];
let select = document.getElementById("year_of_enter_school");
let select_p = document.getElementById("year_select_panel");

//点击入学年份
let fn1 = function(){
    select_p.innerHTML="";
    select_p.style.visibility="visible";
    select.style.backgroundColor="white";
    select.style.border="1px solid gainsboro";
    
    //创建弹出框内容
    for(i=0;i<years.length;i++){
        let span = document.createElement("span");
        span.textContent=years[i];
        select_p.appendChild(span);
        span.className="year_of_span"; 
        if(select.textContent===span.textContent){
            span.style.fontWeight="bold";
        }     
    }
    
    //选定年份后,年份加强显示
    let spans = document.querySelectorAll("#year_select_panel span");
    for(i=0;i<years.length;i++){
        spans[i].onclick=function(){
            for(i=0;i<years.length;i++){
                spans[i].style.fontWeight="normal";
            }
            this.style.fontWeight="bold";
            select.innerHTML=this.textContent;
            select.style.fontSize="15px";
            select.style.textAlign="center";
            select.style.lineHeight="50px";
        }
        
    } 
};

//点击除选择框区域外,弹出框消失
function clickHidden(eve){
    if(eve.target.id!=="year_of_enter_school" && eve.target.className!=="year_of_span"){
        select_p.style.visibility="hidden";
        select.style.border="none";
        select.style.backgroundColor="rgb(240, 239, 239)";
    }
}

select.addEventListener('click',fn1,false);
document.addEventListener("click",clickHidden);