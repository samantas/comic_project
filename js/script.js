setTimeout(function(){
	let decision_overlay = document.getElementById("container_overlay");
	let iphone_character = document.getElementById("iphone");
	decision_overlay.style.display = "flex";
	iphone_character.style.display = "none";
}, 3000);

let decision_one = document.getElementById("decision_one");
let decision_two = document.getElementById("decision_two");

decision_one.addEventListener("mouseenter", mouseEnter);
decision_two.addEventListener("mouseenter", mouseEnter);
decision_one.addEventListener("mouseleave", mouseLeave);
decision_two.addEventListener("mouseleave", mouseLeave);

function mouseEnter(e) {

    if (this == decision_one) {
        decision_two_overlay.style.display = "block";
    } else if (this == decision_two) {
        decision_one_overlay.style.display = "block";
    }

}

function mouseLeave(e) {

    if (this == decision_one) {
        decision_two_overlay.style.display = "none";
    } else if (this == decision_two) {
        decision_one_overlay.style.display = "none";
    }

}