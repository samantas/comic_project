let decision_overlay = document.getElementById("container_overlay");
let iphone_character = document.getElementById("iphone");

let description_one = document.getElementById("description_one");
let description_two = document.getElementById("description_two");

let cafe = document.getElementById("cafe");
let coffee = document.getElementById("coffee");
cafe.style.display = "none";
coffee.style.display = "none";

setTimeout(function() {
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

let snooze = document.getElementById("snooze");
let wakeup = document.getElementById("wakeup");
let background = document.getElementById("background");
let title = document.getElementById("title");

snooze.addEventListener("click", clicked);
wakeup.addEventListener("click", clicked);

function clicked(e) {
    if (this == snooze) {
        
        // change to the path that happens after snooze
        background.src = "img/bg_subway.png";
        title.innerHTML = "Oh no! You missed the shuttle and have to take the subway."

        decision_overlay.style.display = "none";
        snooze.style.display = "none";

        setTimeout(function() {
            background.src = "img/bg_entrance.png"
            title.innerHTML = "...but you finally arrive at school. You are hungry. Where should you go for breakfast?";
            decision_overlay.style.display = "flex";
            cafe.style.display = "block";
            description_one.innerHTML = "Cafe";
            coffee.style.display = "block";
            description_two.innerHTML = "Starbucks";
        }, 3000);

    } else if (this == wakeup) {
        
        // change to the path that happens after waking up
        // don't have shuttle pic yet
        // background.src = "img/bg_shuttle.png"
    }
}