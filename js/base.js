'use strict';
// 1,2年生用単位計算ソフト

import { SD } from "./data.js";

function drawSchedule(term, termType, textCSS, day, period, index, selected){
    let box1, box2;
    if(term === termType){
            switch(period){
                case 1: // 1時限
                    switch(day){
                        case 1: // 月
                            box1 = document.querySelector(".b1");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 2:
                            box1 = document.querySelector(".c1");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 3:
                            box1 = document.querySelector(".d1");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 4:
                            box1 = document.querySelector(".e1");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 5:
                            box1 = document.querySelector(".f1");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 6:
                            box1 = document.querySelector(".g1");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            break;
                    }
                    break;
                case 2:
                    switch(day){
                        case 1: // 月
                            box1 = document.querySelector(".b2");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 2:
                            box1 = document.querySelector(".c2");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 3:
                            box1 = document.querySelector(".d2");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 4:
                            box1 = document.querySelector(".e2");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 5:
                            box1 = document.querySelector(".f2");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 6:
                            box1 = document.querySelector(".g2");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            break;
                    }
                    break;
                case 12:
                    switch(day){
                        case 1: // 月
                            box1 = document.querySelector(".b1");
                            box2 = document.querySelector(".b2");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            box2.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 2:
                            box1 = document.querySelector(".c1");
                            box2 = document.querySelector(".c2");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            box2.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 3:
                            box1 = document.querySelector(".d1");
                            box2 = document.querySelector(".d2");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            box2.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 4:
                            box1 = document.querySelector(".e1");
                            box2 = document.querySelector(".e2");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            box2.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 5:
                            box1 = document.querySelector(".f1");
                            box2 = document.querySelector(".f2");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            box2.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 6:
                            box1 = document.querySelector(".g1");
                            box2 = document.querySelector(".g2");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            box2.insertAdjacentHTML('beforeend', textCSS);
                            break;
                    }
                    break;
                case 3:
                    switch(day){
                        case 1: // 月
                            box1 = document.querySelector(".b3");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 2:
                            box1 = document.querySelector(".c3");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 3:
                            box1 = document.querySelector(".d3");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 4:
                            box1 = document.querySelector(".e3");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 5:
                            box1 = document.querySelector(".f3");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 6:
                            box1 = document.querySelector(".g3");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            break;
                    }
                    break;
                case 4:
                    switch(day){
                        case 1: // 月
                            box1 = document.querySelector(".b4");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 2:
                            box1 = document.querySelector(".c4");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 3:
                            box1 = document.querySelector(".d4");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 4:
                            box1 = document.querySelector(".e4");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 5:
                            box1 = document.querySelector(".f4");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 6:
                            box1 = document.querySelector(".g4");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            break;
                    }
                    break;
                case 34:
                    switch(day){
                        case 1: // 月
                            box1 = document.querySelector(".b3");
                            box2 = document.querySelector(".b4");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            box2.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 2:
                            box1 = document.querySelector(".c3");
                            box2 = document.querySelector(".c4");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            box2.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 3:
                            box1 = document.querySelector(".d3");
                            box2 = document.querySelector(".d4");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            box2.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 4:
                            box1 = document.querySelector(".e3");
                            box2 = document.querySelector(".e4");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            box2.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 5:
                            box1 = document.querySelector(".f3");
                            box2 = document.querySelector(".f4");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            box2.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 6:
                            box1 = document.querySelector(".g3");
                            box2 = document.querySelector(".g4");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            box2.insertAdjacentHTML('beforeend', textCSS);
                            break;
                    }
                    break;
                case 5:
                    switch(day){
                        case 1: // 月
                            box1 = document.querySelector(".b5");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 2:
                            box1 = document.querySelector(".c5");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 3:
                            box1 = document.querySelector(".d5");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 4:
                            box1 = document.querySelector(".e5");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 5:
                            box1 = document.querySelector(".f5");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 6:
                            box1 = document.querySelector(".g5");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            break;
                    }
                    break;
                case 45:
                    switch(day){
                        case 1: // 月
                            box1 = document.querySelector(".b4");
                            box2 = document.querySelector(".b5");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            box2.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 2:
                            box1 = document.querySelector(".c4");
                            box2 = document.querySelector(".c5");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            box2.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 3:
                            box1 = document.querySelector(".d4");
                            box2 = document.querySelector(".d5");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            box2.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 4:
                            box1 = document.querySelector(".e4");
                            box2 = document.querySelector(".e5");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            box2.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 5:
                            box1 = document.querySelector(".f4");
                            box2 = document.querySelector(".f5");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            box2.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 6:
                            box1 = document.querySelector(".g4");
                            box2 = document.querySelector(".g5");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            box2.insertAdjacentHTML('beforeend', textCSS);
                            break;
                    }
                    break;
                case 56:
                    switch(day){
                        case 1: // 月
                            box1 = document.querySelector(".b5");
                            box2 = document.querySelector(".b6");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            box2.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 2:
                            box1 = document.querySelector(".c5");
                            box2 = document.querySelector(".c6");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            box2.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 3:
                            box1 = document.querySelector(".d5");
                            box2 = document.querySelector(".d6");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            box2.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 4:
                            box1 = document.querySelector(".e5");
                            box2 = document.querySelector(".e6");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            box2.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 5:
                            box1 = document.querySelector(".f5");
                            box2 = document.querySelector(".f6");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            box2.insertAdjacentHTML('beforeend', textCSS);
                            break;
                        case 6:
                            box1 = document.querySelector(".g5");
                            box2 = document.querySelector(".g6");
                            box1.insertAdjacentHTML('beforeend', textCSS);
                            box2.insertAdjacentHTML('beforeend', textCSS);
                            break;
                    }
                    break;
            }
        }
}

function drawCheckBox(box1, box2, index, selected){
    if(selected){
        box1.insertAdjacentHTML('beforeend', `<input type="checkbox" checked="checked" class="checkBox2${index}">`);
        if(box2 === !(undefined)) box2.insertAdjacentHTML('beforeend', `<input type="checkbox" checked="checked" class="checkBox2${index}">`);
    }else{
        box1.insertAdjacentHTML('beforeend', `<input type="checkbox" checked="" class="checkBox2${index}">`);
        if(box2 === !(undefined)) box2.insertAdjacentHTML('beforeend', `<input type="checkbox" checked="" class="checkBox2${index}">`);
    }
}

function disDrawSchedule(){
    const td = document.querySelectorAll("td");
    for(let i = 0; i < td.length; i++){
        td[i].innerHTML = "";
    }
}


// 初期描画
SD.forEach(function(value, index, array){
    // 1年
    const black = `<div>${array[index].name}</div>`;
    const red = `<div class="red">${array[index].name}</div>`;
    const blue = `<div class="blue">${array[index].name}</div>`;
    const day = array[index].day; // 1~6 月~土
    const period = array[index].period; // 1~6
    const firastSelected = false;
    if(array[index].minGrade === 1){
        drawSchedule(array[index].term, "AB", black, day, period, index, firastSelected);
        drawSchedule(array[index].term, "A", red, day, period, index, firastSelected);
        drawSchedule(array[index].term, "B", blue, day, period, index, firastSelected);
    }
});

const gradeSelect = document.querySelector("#gradeSelect");

gradeSelect.addEventListener("change", function(){
    disDrawSchedule();
    SD.forEach(function(value, index, array){
        const black = `<div>${array[index].name}</div>`;
        const red = `<div class="red">${array[index].name}</div>`;
        const blue = `<div class="blue">${array[index].name}</div>`;
        const day = array[index].day; // 1~6 月~土
        const period = array[index].period; // 1~6

        const check1 = document.querySelector(`.checkBox1${index}`);
        const check2 = document.querySelector(`.checkBox2${index}`);

        // 1年
        if(array[index].minGrade === 1){

            if(gradeSelect.value === "1"){
                console.log("a");
                drawSchedule(array[index].term, "AB", black, day, period, index, array[index].selected);
                drawSchedule(array[index].term, "A", red, day, period, index, array[index].selected);
                drawSchedule(array[index].term, "B", blue, day, period, index, array[index].selected);
            }else if(gradeSelect.value === "2"){
                drawSchedule(array[index].term, "AB", black, day, period, index, array[index].selected);
                drawSchedule(array[index].term, "A", red, day, period, index, array[index].selected);
            }else if(gradeSelect.value === "3"){
                drawSchedule(array[index].term, "AB", black, day, period, index, array[index].selected);
                drawSchedule(array[index].term, "B", blue, day, period, index, array[index].selected);
            }else if(gradeSelect.value === "4"){
                drawSchedule(array[index].term, "CD", black, day, period, index, array[index].selected);
                drawSchedule(array[index].term, "C", red, day, period, index, array[index].selected);
                drawSchedule(array[index].term, "D", blue, day, period, index, array[index].selected);
            }else if(gradeSelect.value === "5"){
                drawSchedule(array[index].term, "CD", black, day, period, index, array[index].selected);
                drawSchedule(array[index].term, "C", red, day, period, index, array[index].selected);
            }else if(gradeSelect.value === "6"){
                drawSchedule(array[index].term, "CD", black, day, period, index, array[index].selected);
                drawSchedule(array[index].term, "D", blue, day, period, index, array[index].selected);
            }

            console.log(check1, check2);
        };
    });
});