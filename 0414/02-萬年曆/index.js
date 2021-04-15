// h1
const yearAndMonth = document.getElementById('yearAndMonth')
// thead
const title = document.getElementById('title')
// tbody
const data = document.getElementById('data')


// 呈現Year&Month
// Date 物件是基於世界標準時間（UTC） 1970 年 1 月 1 日開始的毫秒數值來儲存時間。
const now = new Date()

const nowY = now.getFullYear()
const nowM = now.getMonth() + 1 //注意回傳為 0~11

yearAndMonth.innerHTML = nowY + '/' + nowM

// 呈現日曆星期標題
const weekDayList = ['日','一','二','三','四','五','六']

// for迴圈的寫法
let weekDayDisplay = ''

for (let i = 0; i < weekDayList.length; i++){
    weekDayDisplay += `<th>${weekDayList[i]}</th>`
}

title.innerHTML = `<tr>${weekDayDisplay}</tr>`

// map的寫法
const weekDisplayMap = weekDayList