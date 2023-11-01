const img = [
    "./index-img/slide 1",
    "./index-img/slide 2"
];
var index = 0;
function next(idName, className, arrname) {
    index++;
    if (index >= arrname.length) index = 0;
    var slide_img1 = document.getElementById(idName);
    const bg = document.getElementsByClassName(className);
    for (var i = 0; i < arrname.length; i++) {
        if (i == index) {
            bg[i].style.backgroundColor = "white";
        } else {
            bg[i].style.backgroundColor = "#333333";
        }
    }
    slide_img1.src = arrname[index];

}
function back(idName, className, arrname) {
    index--;
    if (index < 0) index = arrname.length - 1;
    var slide_img1 = document.getElementById(idName);
    const bg = document.getElementsByClassName(className);
    for (var i = 0; i < arrname.length; i++) {
        if (i == index) {
            bg[i].style.backgroundColor = "white";
        } else {
            bg[i].style.backgroundColor = "#333333";
        }
    }
    slide_img1.src = arrname[index];
}

function press(idName, className, vt, arrname) {
    var slide_img1 = document.getElementById(idName);
    const bg = document.getElementsByClassName(className);
    for (let j = 0; j < bg.length; j++) {
        if (j == vt) {
            bg[vt].style.backgroundColor = "white";
            slide_img1.src = arrname[vt];
        } else {
            bg[j].style.backgroundColor = "#333333";
        }
    }
}

setInterval("next('slide1','box',img)", 5000);


const feed__item1 = document.getElementsByClassName("feed--item1");

const tour__item = document.getElementsByClassName("list--item");

const staff__item1 = document.getElementsByClassName("staff--item1");

function press1(className1, vt, arrname, a) {
    const bg = document.getElementsByClassName(className1);
    for (let m = 0; m < bg.length; m++) {
        if (m == vt) {
            bg[vt].style.backgroundColor = "#46c3fc";
        } else {
            bg[m].style.backgroundColor = "#D6D6D6";
        }
    }
    for (let j = 0; j < bg.length; j++) {
        if (j == vt) {
            for (let i = vt * a; i < (vt * a + a); i++) {
                arrname[i].style.display = "inline-block";
            }
        } else {
            for (let x = 0; x < vt * a; x++) {
                arrname[x].style.display = "none";
            }
            for (let y = (vt * a + a); y < arrname.length; y++) {
                arrname[y].style.display = "none";
            }
        }
    }
}

function next2(idName, className) {
    const list = document.getElementsByClassName(className);
    document.getElementById(idName).appendChild(list[0]);
}

setInterval("next2('list--tour1','list--item')", 3000);
let vt = 1;
function box(index,className1,b)
{
    let k = 0;
    const bg = document.getElementsByClassName(className1);   
    k++;
    if(k == index)
    {
        for(let j = 0; j < bg.length; j++)
        {
            if(j == vt)
            {
                bg[vt].style.backgroundColor = "#46c3fc";
            }else{
                bg[j].style.backgroundColor = "#D6D6D6";   
            }
        }
        vt++;
        if(vt == b) vt = 0;
    }
}



setInterval("box('1','box1',4)",9000);

setInterval("next2('feed--item1','feed--item1')", 3000);
let vt1 = 1;
function box1(index,className1,b)
{
    let k = 0;
    const bg = document.getElementsByClassName(className1);   
    k++;
    if(k == index)
    {
        for(let j = 0; j < bg.length; j++)
        {
            if(j == vt1)
            {
                bg[vt1].style.backgroundColor = "#46c3fc";
            }else{
                bg[j].style.backgroundColor = "#D6D6D6";   
            }
        }
        vt1++;
        if(vt1 == b) vt1 = 0;
    }
}
setInterval("box1('1','box3',3)",9000);


let vt2 = 1;
function box12(index,className1)
{
    let k = 0;
    const bg = document.getElementsByClassName(className1);   
    k++;
    if(k == index)
    {
        for(let j = 0; j < bg.length; j++)
        {
            if(j == vt2)
            {
                bg[vt2].style.backgroundColor = "#46c3fc";
            }else{
                bg[j].style.backgroundColor = "#D6D6D6";   
            }
        }
        vt2++;
        if(vt2 == 2) vt2 = 0;
    }
    
}
setInterval("next2('staff--item2','staff--item1')", 3000);
setInterval("box12('1','box4')",9000);

