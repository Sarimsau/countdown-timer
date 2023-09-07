// Initializing the variables 
const endDate = "6 September 2023 11:31 AM"
let inputs = document.querySelectorAll('input')
document.getElementById("endDate").innerText = endDate;
// console.log(endDate)


// making functions 
function clock(){
    let end = new Date(endDate)
    let now = new Date()
    let diff = (end - now) /1000;
    if(diff<0) return;
    // Convert into Days
    inputs[1].value = Math.floor(diff / 3600 / 24);
    // Convert into Minutes
    inputs[2].value = Math.floor(diff / 3600) % 24;
    // Convert into Minutes
    inputs[3].value = Math.floor(diff / 60) % 60;
    // Convert into Seconds
    inputs[4].value = Math.floor(diff) % 60;

}
clock()

setInterval(() => {
    clock()
}, 1000);
/*
 1 day = 24 Hr
 1 hour = 60 Min
 1 Min = 3600 Sec
 */