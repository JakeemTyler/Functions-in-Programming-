var eleWrapper = document.body.querySelector(".wrapper");
var eleWrapper2 = document.body.querySelector(".wrapper2");
var dragonDamage = 0;
var type ="";

eleWrapper.innerHTML = "Dragon damage: " + dragonDamage

function sumDamage (damageFromAttack, typeofAttack) {
    if (type === "Fire" || type === "Ice" || type === "Poison") {
        dragonDamage = damageFromAttack + typeofAttack + dragonDamage;
        eleWrapper.innerHTML = "Dragon damage: " + dragonDamage;
    }
        if (dragonDamage>= 10) {
        eleWrapper.innerHTML = "Dragon damage: " + dragonDamage;
        eleWrapper2.innerHTML = "If Daenerys was here right now you wouldn't have won. Count your luck. ";
        }
}
document.body.querySelector(".firebutton").addEventListener("click", function () {
    type = "Fire"
    sumDamage(3, -1)
})
document.body.querySelector(".icebutton").addEventListener("click", function () {
    type = "Ice"
    sumDamage(1, 1)
})
document.body.querySelector(".poisonbutton").addEventListener("click", function () {
    type = "Poison"
    sumDamage(4, 0)
})
