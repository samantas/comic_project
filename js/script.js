// core elements
let decision_overlay = document.getElementById("container_overlay");
let description_one = document.getElementById("description_one");
let description_two = document.getElementById("description_two");
let decision_one = document.getElementById("decision_one");
let decision_two = document.getElementById("decision_two");
let background = document.getElementById("background");
let title = document.getElementById("title");

// characters
let iphone_character = document.getElementById("iphone");
let cafe = document.getElementById("cafe");
let coffee = document.getElementById("coffee");

// character CTAs
let snooze = document.getElementById("snooze");
let wakeup = document.getElementById("wakeup");

// first scene lead into decision
setTimeout(function() {
    decision_overlay.style.display = "flex";
    iphone_character.style.display = "none";
}, 3000);


// -------------------------------------
// begin event listener code for decisions
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
// end event listener code for decisions
// -------------------------------------


// -------------------------------------
// begin event listener code for character CTAs
let img_one = document.getElementById("img_one");
let img_two = document.getElementById("img_two");
img_one.addEventListener("click", clicked);
img_two.addEventListener("click", clicked);

function clicked(e) {

    if (this.classList.contains("snooze")) {

        this.classList.remove("snooze");
        background.src = "img/bg_subway.png";
        title.innerHTML = "Oh no! You missed the shuttle and have to take the subway."

        decision_overlay.style.display = "none";

        setTimeout(function() {
            background.src = "img/bg_entrance.png";
            title.innerHTML = "...but you finally arrive at school. You are late. Eat or go to class?";
            decision_overlay.style.display = "flex";

            img_one.src = "img/study.png";
            img_one.classList.add("study");
            description_one.innerHTML = "Class";

            img_two.src = "img/coffee.png";
            img_two.classList.add("starbucks");
            img_two.classList.remove("wakeup");
            description_two.innerHTML = "Starbucks";

        }, 3000);

    } else if (this.classList.contains("wakeup")) {

        // change to the path that happens after waking up
        // don't have shuttle pic yet?
        // background.src = "img/bg_shuttle.png"

    } else if (this.classList.contains("cafe")) {

    } else if (this.classList.contains("starbucks")) {
        decision_overlay.style.display = "none";
        this.classList.remove("starbucks");
        background.src = "img/bg_SB.png";
        title.innerHTML = "You wait for your coffee and head back to the AB.";


        setTimeout(function() {
            title.innerHTML = "...what do you do?";

            decision_overlay.style.display = "flex";
            background.src = "img/bg_entrance.png";

            img_one.src = "img/study.png";
            img_one.classList.add("class");
            description_one.innerHTML = "Go to class late.";

            img_two.src = "img/homework.png";
            img_two.classList.remove("starbucks");
            img_two.classList.add("lounge");
            description_two.innerHTML = "Do homework at the lounge";

        }, 3000);

    } else if (this.classList.contains("class")) {
        decision_overlay.style.display = "none";
        background.src = "img/bg_class.png";
        title.innerHTML = "Good on you for going to class.";

        setTimeout(function() {
            title.innerHTML = "Class is over. Where do you go?";
            decision_overlay.style.display = "flex";

            img_one.src = "img/gym.png";
            img_one.classList.remove("study");
            img_one.classList.remove("class");
            img_one.classList.add("gym");
            description_one.innerHTML = "Go to the gym";

            img_two.src = "img/snooze.png";
            img_two.classList.remove("lounge");
            img_two.classList.add("sleep");
            description_two.innerHTML = "Take a nap";

        }, 3000);
    } else if (this.classList.contains("gym")) {
        decision_overlay.style.display = "none";
        background.src = "img/bg_treadmill.png";
        title.innerHTML = "Break that sweat.";

        setTimeout(function() {
            title.innerHTML = "Good workout! Hungry?";
            decision_overlay.style.display = "flex";

            img_one.src = "img/cafeteria.png";
            img_one.classList.remove("gym");
            img_one.classList.add("cafeteria");
            description_one.innerHTML = "Eat at the cafeteria.";

            // need eleme button here
            img_two.src = "img/toast.png";
            img_two.classList.remove("sleep");
            img_two.classList.add("eleme");
            description_two.innerHTML = "Order Eleme!";

        }, 3000);
    }
}