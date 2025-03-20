let hoursEl = document.getElementById("hoursInput");
let minEl = document.getElementById("minutesInput");
let errEl = document.getElementById("errorMsg");
let convertEl = document.getElementById("convertBtn");
let ansEl = document.getElementById("timeInSeconds");
convertEl.addEventListener("click", function() {
    if (hoursEl.value === "" || minEl.value === "") {
        errEl.textContent = "enter valid details";
    } else {
        let hourval = hoursEl.value;
        let minVal = minEl.value;
        let total = parseInt(hourval) * 3600 + parseInt(minVal) * 60;
        ansEl.textContent = total;
    }


});
