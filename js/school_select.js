//学校选择

//学校选择区域赋值
let provinces_all=["省市1","省市2","省市3","省市4","省市5","省市6","省市7","省市8","省市9","省市10"];
let schools_all=[["AAAAA1大学","AAAAA2大学","AAAAA3大学","AAAAA4大学","AAAAA5大学","AAAAA6大学",
"AAAAA7大学","AAAAA8大学","AAAAA9大学","AAAA10大学","AAAA11大学","AAAA12大学","AAAA13大学",
"AAAA14大学","AAAA15大学","AAAA16大学","AAAA17大学","AAAA18大学","AAAA19大学","AAAA20大学"],
["BBBBB1大学","BBBBB2大学","BBBBB3大学","BBBBB4大学","BBBBB5大学","BBBBB6大学",
"BBBBB7大学","BBBBB8大学","BBBBB9大学","BBBB10大学","BBBB11大学","BBBB12大学","BBBB13大学"],
["CCCCC1大学","CCCCC2大学","CCCCC3大学","CCCCC4大学","CCCCC5大学","CCCCC6大学","CCCCC7大学","CCCCC8大学","CCCCC9大学","CCCC10大学","CCCC11大学","CCCC12大学"],
["DDDDD1大学","DDDDD2大学","DDDDD3大学","DDDDD4大学","DDDDD5大学","DDDDD6大学","DDDDD7大学","DDDDD8大学","DDDDD9大学","DDDD10大学","DDDD11大学","DDDD12大学",],
["EEEEE1大学","EEEEE2大学","EEEEE3大学","EEEEE4大学","EEEEE5大学","EEEEE6大学","EEEEE7大学","EEEEE8大学","EEEEE9大学","EEEE10大学","EEEE11大学","EEEE12大学",],
["FFFFF1大学","FFFFF2大学","FFFFF3大学","FFFFF4大学","FFFFF5大学","FFFFF6大学","FFFFF7大学","FFFFF8大学","FFFFF9大学","FFFF10大学","FFFF11大学","FFFF12大学",],
["GGGGG1大学","GGGGG2大学","GGGGG3大学","GGGGG4大学","GGGGG5大学","GGGGG6大学","GGGGG7大学","GGGGG8大学","GGGGG9大学","GGGG10大学","GGGG11大学","GGGG12大学",],
["HHHHH1大学","HHHHH2大学","HHHHH3大学","HHHHH4大学","HHHHH5大学","HHHHH6大学","HHHHH7大学","HHHHH8大学","HHHHH9大学","HHHH10大学","HHHH11大学","HHHH12大学",],
["IIIII1大学","IIIII2大学","IIIII3大学","IIIII4大学","IIIII5大学","IIIII6大学","IIIII7大学","IIIII8大学","IIIII9大学","IIII10大学","IIII11大学","IIII12大学",],
["JJJJJ1大学","JJJJJ2大学","JJJJJ3大学","JJJJJ4大学","JJJJJ5大学","JJJJJ6大学","JJJJJ7大学","JJJJJ8大学","JJJJJ9大学","JJJJ10大学","JJJJ11大学","JJJJ12大学",]];
let select_s = document.getElementById("school_select_panel");
let select_school = document.getElementById("school");
let provinces;
let schools = document.querySelectorAll('.menu_school div');
let menu_school_div;

//点击选择学校弹出选择框
let fn2 = function(){
    select_s.innerHTML="";
    select_s.style.visibility="visible";
    select_school.style.backgroundColor="white";
    select_school.style.border="1px solid gainsboro";

    //创建省份菜单栏
    menu_items = document.createElement("div");
    menu_items.className="menu_items";
    select_s.appendChild(menu_items);
    ul=document.createElement("ul");
    menu_items.appendChild(ul);

    let schoolName = select_school.textContent;
    let tarProvinceId = getDefaultSchool(schoolName);

    for(i=0;i<provinces_all.length;i++){
        li=document.createElement("li");
        li.textContent=provinces_all[i];
        if(tarProvinceId === i){
            li.className = "active";
        }
        ul.appendChild(li);
    }
    
    //创建学校list
    menu_school=document.createElement("div");
    menu_school.className="menu_school";
    select_s.appendChild(menu_school);
    menu_school_div=document.createElement("div");
    menu_school.appendChild(menu_school_div);

    showSchoolList(tarProvinceId);
    setliSchoolList(tarProvinceId);

    provinces=document.querySelectorAll('.menu_items li');
    for(i = 0; i < provinces.length; i++){
        let province = provinces[i];
        setTabHandler(province,i);
    }
    li.className="active";
};

//切换省份
function setTabHandler(province,proPos){
    province.onclick = function(){
        for(i = 0; i < provinces.length; i++){
            provinces[i].className = '';
        }
    province.className = 'active';
    
    showSchoolList(proPos);
    setliSchoolList(proPos);       
    }
}

//获取选中学校所在省份
function getDefaultSchool(schoolName) {
    for(i=0; i<schools_all.length; i++){
        for(j=0; j<schools_all[i].length; j++){
            if(schoolName === schools_all[i][j]){
                return i;
            }
        }
    }return 0;
}

//学校选定后,选择学校加强显示
function setliSchoolList(proPos) {
    let lis = document.querySelectorAll("#school_select_panel .active li");
    for(i=0;i<schools_all[proPos].length;i++){
    lis[i].onclick=function(){
        for(i=0;i<schools_all[proPos].length;i++){
            lis[i].style.fontWeight="normal";
        }
        this.style.fontWeight="bold";
        select_school.innerHTML=this.textContent;
        select_school.style.fontSize="15px";
        select_school.style.textAlign="center";
        select_school.style.lineHeight="50px";
        }    
    }   
}

//展示学校列表
function showSchoolList(proPos){
    menu_school_div.innerHTML = "";
    menu_school_div.className="active";
    ul2=document.createElement("ul");
    menu_school_div.appendChild(ul2);

        for(l =0;l<schools_all[proPos].length;l++){
            li2=document.createElement("li");
            li2.textContent=schools_all[proPos][l];
            li2.className="li_school";
            if(li2.textContent ===select_school.textContent){
                // li2.className="active";
                li2.style.fontWeight="bold";
            }
            ul2.appendChild(li2);
        }
}

//点击除选项框外区域选项框消失
function clickHidden2(eve){
    if(eve.target.id!=="school" && eve.target.className!=="active" && eve.target.id!=="school_select_panel" && eve.target.className!=="menu_school"){
        select_s.style.visibility="hidden";
        menu_school_div.innerHTML = "";
        select_school.style.border="none";
        select_school.style.backgroundColor="rgb(240, 239, 239)";
    }
}

select_school.addEventListener('click',fn2,false);
document.addEventListener("click",clickHidden2);