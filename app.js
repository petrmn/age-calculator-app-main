
const dayInput = document.getElementById('inpDay')
const monthInput = document.getElementById('inpMonth')
const yearInput = document.getElementById('inpYear')


const submitBtn = document.getElementById('submitBtn')

const resYear = document.getElementById('yearRes')
const resMonth = document.getElementById('monthRes')
const resDay = document.getElementById('dayRes')


submitBtn.addEventListener('click', function() {
    calculate(dayInput, monthInput, yearInput)
})


function calculate(day, month, year) {
    const birthDay = Number(day.value)
    const birthMonth = Number(month.value)
    const birthYear = Number(year.value)



    var date = new Date()
    var nowDay = date.getDate()
    var nowMonth = 1 + date.getMonth()
    var nowYear = date.getFullYear()
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    
    if (birthDay > nowDay) {
        nowDay = nowDay + month[nowMonth - 1]
        nowMonth = nowMonth - 1
    }

    if (birthMonth > nowMonth) {
        nowMonth = nowMonth + 12
        nowYear = nowYear - 1
    }

    var d = nowDay - birthDay - 1
    var m = nowMonth - birthMonth
    var y = nowYear - birthYear

    resDay.innerHTML = d
    resMonth.innerHTML = m
    resYear.innerHTML = y


}