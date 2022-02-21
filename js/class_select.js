//课程选择
let tabs = document.querySelectorAll('.course_select li a');
let panels = document.querySelectorAll('.course_intro div');

for(i = 0; i < tabs.length; i++){
    let tab = tabs[i];
    setTabHandler(tab);
}

function setTabHandler(tab){
    tab.onclick = function(){
        for(i = 0; i < tabs.length; i++){
            tabs[i].className = '';
        }
    tab.className = 'active';
        for(i=0;i<panels.length;i++){
            panels[i].style.display="block";
            if(-1===panels[i].className.indexOf(tab.getAttribute("id").substring(10))){
                panels[i].style.display="none";
            }
        }
    }
}