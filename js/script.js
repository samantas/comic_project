// core elements
let decision_overlay = document.getElementById("container_overlay");
let decision_one_overlay = document.getElementById('decision_one_overlay');
let decision_two_overlay = document.getElementById('decision_two_overlay');
let description_one = document.getElementById("description_one");
let description_two = document.getElementById("description_two");
let background = document.getElementById("background");
let title = document.getElementById("title");

// characters
let iphone_character = document.getElementById("iphone");
let cafe = document.getElementById("cafe");
let coffee = document.getElementById("coffee");

// character CTAs
let snooze = document.getElementById("snooze");
let wakeup = document.getElementById("wakeup");

function toggleDecisionsOnMouseEnter(decision_one, decision_two) {

    decision_one.addEventListener("mouseenter", mouseEnter);
    decision_two.addEventListener("mouseenter", mouseEnter);
    decision_one.addEventListener("mouseleave", mouseLeave);
    decision_two.addEventListener("mouseleave", mouseLeave);

    function mouseEnter() {
        if (this === decision_one) {
            decision_two_overlay.style.display = "block";
        } else if (this === decision_two) {
            decision_one_overlay.style.display = "block";
        }
    }

    function mouseLeave() {
        if (this === decision_one) {
            decision_two_overlay.style.display = "none";
        } else if (this === decision_two) {
            decision_one_overlay.style.display = "none";
        }
    }
}


function listenForCharacterCTAClicks(img_one, img_two) {

    img_one.addEventListener("click", clicked);
    img_two.addEventListener("click", clicked);

    var count = 0;

    function clicked() {

        if (this.classList.contains("snooze")) {
        	count -= 1;
        	
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
            count -= 1;
            
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
            count += 1;

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

                img_two.src = "img/sleep.png";
                img_two.classList.remove("lounge");
                img_two.classList.add("sleep");
                description_two.innerHTML = "Take a nap";

            }, 3000);
        } else if (this.classList.contains("gym")) {
            count += 2;

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
        } else if (this.classList.contains("cafeteria")) {
        	count += 1;

			decision_overlay.style.display = "none";
			background.src = "img/bg_cafeteria.png";
			title.innerHTML = "Nice! Saving money with an affordable meal.";

			setTimeout(function() {
                title.innerHTML = "Ah, food coma. Homework in the lounge or home to sleep?";
                decision_overlay.style.display = "flex";

                img_one.src = "img/homework.png";
                img_one.classList.remove("cafeteria");
                img_one.classList.add("lounge");
                description_one.innerHTML = "Do homework in the lounge.";

                img_two.src = "img/sleep.png";
                img_two.classList.remove("eleme");
                img_two.classList.add("home");
                description_two.innerHTML = "Go home and sleep.";

            }, 3000);

        } else if (this.classList.contains("home")) {
        	count -= 2;

        	decision_overlay.style.display = "none";
        	background.src = "img/bg_bed.png";
			title.innerHTML = "Ah, sweet comfort of home.";

			setTimeout(function() {
                title.innerHTML = "Based on your decisions, you scored " + count + " points. Better luck next time.";
                background.style.display = "none";
            }, 3000);

        }
    }
}

function init() {

    // first scene lead into decision
    setTimeout(function() {
        decision_overlay.style.display = "flex";
        iphone_character.style.display = "none";
    }, 3000);

    // begin event listener code for character CTAs
    // cta clicks drive narrative by toggling images and changing text
    let img_one = document.getElementById("img_one");
    let img_two = document.getElementById("img_two");
    listenForCharacterCTAClicks(img_one, img_two);

    let decision_one = document.getElementById("decision_one");
    let decision_two = document.getElementById("decision_two");
    toggleDecisionsOnMouseEnter(decision_one, decision_two);
}


document.addEventListener("DOMContentLoaded", init);