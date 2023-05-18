let userName = prompt("Adizi Giriniz")
let myName = document.querySelector("#myName")
myName.innerHTML = `${myName.innerHTML} <small>${userName}</small>`

let nd = new Date();
let h = nd.getHours();
let m = nd.getMinutes();
let s = nd.getSeconds();

let info = document.querySelector("myClock")
myClock.innerHTML = `${myClock.innerHTML}${nd}`

