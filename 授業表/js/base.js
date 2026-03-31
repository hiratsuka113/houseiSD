'use strict';
// 1,2年生用単位計算ソフト

import { SD } from "./data.js";

function drawSchedule(term, termType, textCSS, day, period){
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

function disDrawSchedule(){
    const td = document.querySelectorAll("td");
    for(let i = 0; i < td.length; i++){
        td[i].textContent = "";
    }
}


// 初期描画
SD.forEach(function(value, index, array){
    // 1年
    const black = `${array[index].name}<br>`;
    const red = `<div class="red">${array[index].name}</div><br>`;
    const blue = `<div class="blue">${array[index].name}</div><br>`;
    const day = array[index].day; // 1~6 月~土
    const period = array[index].period; // 1~6
    if(array[index].minGrade === 1){
        drawSchedule(array[index].term, "AB", black, day, period);
        drawSchedule(array[index].term, "A", red, day, period);
        drawSchedule(array[index].term, "B", blue, day, period);
    }
});

const gradeSelect = document.querySelector("#gradeSelect");

gradeSelect.addEventListener("change", function(){
    disDrawSchedule();
    SD.forEach(function(value, index, array){
        // 1年
        const black = `<div>${array[index].name}</div>`;
        const red = `<div class="red">${array[index].name}</div>`;
        const blue = `<div class="blue">${array[index].name}</div>`;
        const day = array[index].day; // 1~6 月~土
        const period = array[index].period; // 1~6
        if(array[index].minGrade === 1){
            if(gradeSelect.value === "1"){
                console.log("a");
                drawSchedule(array[index].term, "AB", black, day, period);
                drawSchedule(array[index].term, "A", red, day, period);
                drawSchedule(array[index].term, "B", blue, day, period);
            }else if(gradeSelect.value === "2"){
                drawSchedule(array[index].term, "AB", black, day, period);
                drawSchedule(array[index].term, "A", red, day, period);
            }else if(gradeSelect.value === "3"){
                drawSchedule(array[index].term, "AB", black, day, period);
                drawSchedule(array[index].term, "B", blue, day, period);
            };
        };
    });
});