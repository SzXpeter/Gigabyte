var range = document.getElementById("rangeSelect")
var first = document.getElementById("firstHZ")
var second = document.getElementById("secondHZ")
var third = document.getElementById("thirdHZ")
var fourth = document.getElementById("fourthHZ")

first.style.display = "block"

range.addEventListener("input", function show(){
    if (range.value == 0) {
        first.style.display = "block"
        second.style.display = "none"
        third.style.display = "none"
        fourth.style.display = "none"
    }
    else if (range.value == 1) {
        first.style.display = "none"
        second.style.display = "block"
        third.style.display = "none"
        fourth.style.display = "none"
    }
    else if (range.value == 2) {
        first.style.display = "none"
        second.style.display = "none"
        third.style.display = "block"
        fourth.style.display = "none"
    }
    else if (range.value == 3) {
        first.style.display = "none"
        second.style.display = "none"
        third.style.display = "none"
        fourth.style.display = "block"
    }
})