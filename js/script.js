// core elements
// Bonnie and Sam spit coding through coding separate paths/routes for the storyboard
// Overlay and other aesthetic codings were also done by Sam.

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

const transitionTimer = 3000;

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

function showResults(count) {
<<<<<<< HEAD
=======


>>>>>>> c858cff3674c1e9865e418eaeaf2d35b5f822114
    setTimeout(function() {
        if (count > 0) {
            title.innerHTML = "Based on your decisions, you scored " + count + " points. Seems like you were productive!";
        } else if (count < 0) {
            title.innerHTML = "Based on your decisions, you scored " + count + " points. Better luck next time!";
        } else if (count === 0) {
            title.innerHTML = "Based on your decisions, you scored " + count + " points. Looks like you made some good and some bad decisions.";
        }
<<<<<<< HEAD
        background.style.display = "none";
=======
        // background.style.display = "none";
        background.src = "img/bg_nyushanghai.jpg";

>>>>>>> c858cff3674c1e9865e418eaeaf2d35b5f822114
    }, transitionTimer);
}

function listenForCharacterCTAClicks(img_one, img_two) {

    img_one.addEventListener("click", clicked);
    img_two.addEventListener("click", clicked);

    var count = 0;

    function clicked() {

        if (this.classList.contains("snooze")) {
            count -= 1;
            console.log(count);

            this.classList.remove("snooze");
            background.src = "img/bg_subway.png";
            title.innerHTML = "Oh no! You missed the shuttle and have to take the subway."

            decision_overlay.style.display = "none";

            setTimeout(function() {
                background.src = "img/bg_entrance.png";
                title.innerHTML = "...but you finally arrive at school. You are late. Eat or go to class?";
                decision_overlay.style.display = "flex";

                img_one.src = "img/study.gif";
                img_one.classList.add("study");
                description_one.innerHTML = "Class";

                img_two.src = "img/coffee.gif";
                img_two.classList.add("starbucks");
                img_two.classList.remove("wakeup");
                description_two.innerHTML = "Starbucks";

            }, transitionTimer);

        // Worked on the path/fork in the story where user clicks wake up and onwards (Bonnie)
        } else if (this.classList.contains("wakeup")) {

            count += 1;
            console.log(count);

            this.classList.remove("wakeup");
            background.src = "img/bg_shuttle.jpg";
            title.innerHTML = "Congrats! You made it on to the shuttle."

            decision_overlay.style.display = "none";

            setTimeout(function() {
                background.src = "img/bg_entrance.png";
                title.innerHTML = "You arrived to school with time to spare. Should you...?";
                decision_overlay.style.display = "flex";

                img_one.src = "img/study.gif";
                img_one.classList.remove("snooze");
                img_one.classList.add("earlyclass");
                description_one.innerHTML = "Go to class early";

                img_two.src = "img/cafe.gif";
                img_two.classList.add("cafe");
                img_two.classList.remove("wakeup");
                description_two.innerHTML = "Grab food at the Cafe";

            }, transitionTimer);


        } else if (this.classList.contains("earlyclass")) {

            count += 1;
            console.log(count);

            this.classList.remove("earlyclass");
            background.src = "img/bg_class.png";
            title.innerHTML = "You went to class early and grabbed a good seat!"
            decision_overlay.style.display = "none";

            setTimeout(function() {
                title.innerHTML = "You just finished class. Do you want to..?";
                decision_overlay.style.display = "flex";

                img_one.src = "img/cafe.gif";
                img_one.classList.remove("earlyclass");
                img_one.classList.add("eatfood");
                description_one.innerHTML = "Grab food at the Cafe";

                img_two.src = "img/nap.gif";
                img_two.classList.remove("cafe");
                img_two.classList.add("nap");
                description_two.innerHTML = "Nap in the Lounge";

            }, transitionTimer);


        } else if (this.classList.contains("cafe")) {
            count -= 1;
            console.log(count);

            this.classList.remove("cafe");
            background.src = "img/bg_cafe.jpg";
            title.innerHTML = "Grab that Grilled Cheese before you're late for class!"
            decision_overlay.style.display = "none";

            setTimeout(function() {
                title.innerHTML = "You just got your Grilled Cheese";
                decision_overlay.style.display = "flex";

                img_one.src = "img/study.gif";
                img_one.classList.remove("earlyclass");
                img_one.classList.add("lateclass");
                description_one.innerHTML = "Head to class late";

                img_two.src = "img/cafe.gif";
                img_two.classList.remove("cafe");
                img_two.classList.add("stay");
                description_two.innerHTML = "Stay in the Cafe and eat";

            }, transitionTimer);

        } else if (this.classList.contains("stay")) {
            count -= 1;
            console.log(count);

            this.classList.remove("stay");
            background.src = "img/bg_cafe.jpg";
            title.innerHTML = "Stay and relax for a bit!"
            decision_overlay.style.display = "none";

            setTimeout(function() {
                title.innerHTML = "You skipped you class but its okay. What should you do now?";
                decision_overlay.style.display = "flex";

                img_one.src = "img/homework.gif";
                img_one.classList.remove("lateclass");
                img_one.classList.add("dohomework");
                description_one.innerHTML = "Do some work";

                img_two.src = "img/gym.gif";
                img_two.classList.remove("stay");
                img_two.classList.add("workout");
                description_two.innerHTML = "Go Workout!";

            }, transitionTimer);

<<<<<<< HEAD
=======
            // Help with troubleshooting different loopholes and wrong story paths (BC)
>>>>>>> c858cff3674c1e9865e418eaeaf2d35b5f822114
        } else if (this.classList.contains("lateclass")) {
            count += 1;
            console.log(count);

            this.classList.remove("lateclass");
            background.src = "img/bg_class.png";
            title.innerHTML = "You're a little late but its okay!"
            decision_overlay.style.display = "none";

            setTimeout(function() {
                title.innerHTML = "You just finished class. What should you do?";
                decision_overlay.style.display = "flex";

                img_one.src = "img/homework.gif";
                img_one.classList.remove("eatfood");
                img_one.classList.add("dohomework");
                description_one.innerHTML = "Go do Homework";

                img_two.src = "img/gym.gif";
                img_two.classList.remove("nap");
                img_two.classList.remove("stay");
                img_two.classList.add("workout");
                description_two.innerHTML = "Go workout";

            }, transitionTimer);

        } else if (this.classList.contains("dohomework")) {
            count += 1;
            console.log(count);

            this.classList.remove("dohomework");
            background.src = "img/bg_lounge.png";
            title.innerHTML = "Get on that study grind!"
            decision_overlay.style.display = "none";

            setTimeout(function() {
                title.innerHTML = "All that studying has got you hungry..Where should you eat...";
                decision_overlay.style.display = "flex";

                img_one.src = "img/cafeteria.gif";
                img_one.classList.remove("dohomework");
                img_one.classList.add("cafeteria");
                description_one.innerHTML = "Eat in the Cafeteria";

                img_two.src = "img/eleme.gif";
                img_two.classList.remove("workout");
                img_two.classList.remove("stay");
                img_two.classList.add("ordereleme");
                description_two.innerHTML = "Order Eleme!";

            }, transitionTimer);

        } else if (this.classList.contains("workout")) {
            count += 1;
            console.log(count);

            this.classList.remove("workout");
            background.src = "img/bg_treadmill.png";
            title.innerHTML = "Work those muscles!"
            decision_overlay.style.display = "none";

            setTimeout(function() {
                title.innerHTML = "Really working those muscles today! Your stomachs growling..";
                decision_overlay.style.display = "flex";

                img_one.src = "img/cafeteria.gif";
                img_one.classList.remove("dohomework");
                img_one.classList.remove("lateclass");
                img_one.classList.remove("study");
                img_one.classList.add("cafeteria");
                description_one.innerHTML = "Eat Cafeteria Food";

                img_two.src = "img/eleme.gif";
                img_two.classList.remove("workout");
                img_two.classList.add("ordereleme");
                description_two.innerHTML = "Order Eleme!";

            }, transitionTimer);

        } else if (this.classList.contains("ordereleme")) {
            count -= 1;
            console.log(count);

            this.classList.remove("ordereleme");
            background.src = "img/bg_walkingToSchool.png";
            title.innerHTML = "Splurging today I see.."
            decision_overlay.style.display = "none";

            setTimeout(function() {
<<<<<<< HEAD
                title.innerHTML = "Now that your tummy is full, Do you want to...";
=======
                title.innerHTML = "Now that your tummy is full. Do you want to...";
>>>>>>> c858cff3674c1e9865e418eaeaf2d35b5f822114
                decision_overlay.style.display = "flex";

                img_one.src = "img/study.gif";
                img_one.classList.remove("cafeteria");

                img_one.classList.add("lounge");
                description_one.innerHTML = "Stay at the AB and study";

<<<<<<< HEAD
                img_two.src = "img/snooze.png";
=======
                img_two.src = "img/snooze.gif";
>>>>>>> c858cff3674c1e9865e418eaeaf2d35b5f822114
                img_two.classList.remove("ordereleme");
                img_two.classList.add("home");
                description_two.innerHTML = "Go home!";

            }, transitionTimer);
<<<<<<< HEAD

        } else if (this.classList.contains("eatfood")) {
            count += 1;
            console.log(count);

            this.classList.remove("eatfood");
            background.src = "img/bg_cafe.jpg";
            title.innerHTML = "Fill up that tummy!"
            decision_overlay.style.display = "none";

=======

        } else if (this.classList.contains("hwlounge")) {
                    count += 1;
                    console.log(count);

                    this.classList.remove("hwlounge");
                    background.src = "img/bg_lounge.png";
                    title.innerHTML = "Get that homework grind on!"
                    decision_overlay.style.display = "none";

                    setTimeout(function() {
                        title.innerHTML = "Hm..finally done with homework. Now what?";
                        decision_overlay.style.display = "flex";

                        img_one.src = "img/gym.gif";
                        img_one.classList.remove("lounge");
                        img_one.classList.add("workout");
                        description_one.innerHTML = "Go workout!";

                        img_two.src = "img/eleme.gif";
                        img_two.classList.remove("home");
                        img_two.classList.add("ordereleme");
                        description_two.innerHTML = "Order Eleme!";

                    }, transitionTimer);


        } else if (this.classList.contains("eatfood")) {
            count += 1;
            console.log(count);

            this.classList.remove("eatfood");
            background.src = "img/bg_cafe.jpg";
            title.innerHTML = "Fill up that tummy!"
            decision_overlay.style.display = "none";

>>>>>>> c858cff3674c1e9865e418eaeaf2d35b5f822114
            setTimeout(function() {
                title.innerHTML = "You just finished eating you food. What should you do?";
                decision_overlay.style.display = "flex";

                img_one.src = "img/study.gif";
                img_one.classList.remove("eatfood");
                img_one.classList.add("dohomework");
                description_one.innerHTML = "Go do Homework";

                img_two.src = "img/gym.gif";
                img_two.classList.remove("nap");
                img_two.classList.remove("stay");
                img_two.classList.add("workout");
                description_two.innerHTML = "Go workout";

            }, transitionTimer);

        } else if (this.classList.contains("nap")) {
            count -= 1;
            console.log(count);

            this.classList.remove("nap");
<<<<<<< HEAD
            background.src = "img/bg_lounge.png";
=======
            background.src = "img/bg_nap.jpg";
>>>>>>> c858cff3674c1e9865e418eaeaf2d35b5f822114
            title.innerHTML = "Its time to catch up on some sleep!"
            decision_overlay.style.display = "none";

            setTimeout(function() {
                title.innerHTML = "You just woke up from your nap. Should you...?";
                decision_overlay.style.display = "flex";

                img_one.src = "img/homework.gif";
                img_one.classList.remove("eatfood");
                img_one.classList.add("dohomework");
                description_one.innerHTML = "Go do Homework";

                img_two.src = "img/gym.gif";
                img_two.classList.remove("nap");
                img_two.classList.add("workout");
                description_two.innerHTML = "Go workout";

            }, transitionTimer);

        } else if (this.classList.contains("starbucks")) {
            count -= 1;
            console.log(count);

            decision_overlay.style.display = "none";
            this.classList.remove("starbucks");
            background.src = "img/bg_SB.png";
            title.innerHTML = "You wait for your coffee and head back to the AB.";


            setTimeout(function() {
                title.innerHTML = "...what do you do?";

                decision_overlay.style.display = "flex";
                background.src = "img/bg_entrance.png";

                img_one.src = "img/study.gif";
                img_one.classList.add("study");
                description_one.innerHTML = "Go to class late.";

                img_two.src = "img/homework.gif";
                img_two.classList.remove("starbucks");
                img_two.classList.add("hwlounge");
                description_two.innerHTML = "Do homework at the lounge";

            }, transitionTimer);

        } else if (this.classList.contains("study")) {
            count += 1;
            console.log(count);
            decision_overlay.style.display = "none";
            background.src = "img/bg_class.png";
            title.innerHTML = "Good on you for going to class.";

            setTimeout(function() {
                title.innerHTML = "Class is over. Where do you go?";
                decision_overlay.style.display = "flex";

                img_one.src = "img/gym.gif";
                img_one.classList.remove("study");
                img_one.classList.remove("class");
                img_one.classList.add("gym");
                description_one.innerHTML = "Go to the gym";

<<<<<<< HEAD
                img_two.src = "img/snooze.png";
=======
                img_two.src = "img/nap.gif";
>>>>>>> c858cff3674c1e9865e418eaeaf2d35b5f822114
                img_two.classList.remove("lounge");
                img_two.classList.remove("starbucks");
                img_two.classList.add("sleep");
                description_two.innerHTML = "Take a nap";

            }, transitionTimer);
<<<<<<< HEAD
=======


>>>>>>> c858cff3674c1e9865e418eaeaf2d35b5f822114
        } else if (this.classList.contains("gym")) {
            count += 2;
            console.log(count);

            decision_overlay.style.display = "none";
            background.src = "img/bg_treadmill.png";
            title.innerHTML = "Break that sweat.";

            setTimeout(function() {
                title.innerHTML = "Good workout! Hungry?";
                decision_overlay.style.display = "flex";

                img_one.src = "img/cafeteria.gif";
                img_one.classList.remove("gym");
                img_one.classList.add("cafeteria");
                description_one.innerHTML = "Eat at the cafeteria.";

                // need eleme button here
                img_two.src = "img/eleme.gif";
                img_two.classList.remove("sleep");
                img_two.classList.add("ordereleme");
                description_two.innerHTML = "Order Eleme!";

            }, transitionTimer);
        } else if (this.classList.contains("cafeteria")) {
            count += 1;
            console.log(count);

            decision_overlay.style.display = "none";
            background.src = "img/bg_cafeteria.png";
            title.innerHTML = "Nice! Saving money with an affordable meal.";

            setTimeout(function() {
                title.innerHTML = "Ah, food coma. Homework in the lounge or home to sleep?";
                decision_overlay.style.display = "flex";

                img_one.src = "img/homework.gif";
                img_one.classList.remove("cafeteria");
                img_one.classList.add("lounge");
                description_one.innerHTML = "Do homework in the lounge.";

<<<<<<< HEAD
                img_two.src = "img/snooze.png";
=======
                img_two.src = "img/snooze.gif";
>>>>>>> c858cff3674c1e9865e418eaeaf2d35b5f822114
                img_two.classList.remove("ordereleme");
                img_two.classList.add("home");
                description_two.innerHTML = "Go home and sleep.";

            }, transitionTimer);

        } else if (this.classList.contains("lounge")) {
            count -= 2;
            console.log(count);

            decision_overlay.style.display = "none";
            background.src = "img/bg_lounge.png";
            title.innerHTML = "Always on that study grind!";

            setTimeout(function() {
                title.innerHTML = "Finally done with homework! Time to go home.";
                background.style.display = "block";
                background.src = "img/bg_bed.png";
            }, transitionTimer);

            showResults(count);

        } else if (this.classList.contains("sleep")) {
            count -= 2;
            console.log(count);
            this.classList.remove("nap");
<<<<<<< HEAD
            background.src = "img/bg_lounge.png";
=======
            background.src = "img/bg_nap.jpg";
>>>>>>> c858cff3674c1e9865e418eaeaf2d35b5f822114
            title.innerHTML = "Its time to catch up on some sleep!"
            decision_overlay.style.display = "none";

            setTimeout(function() {
                title.innerHTML = "You just woke up from your nap. Should you...?";
                decision_overlay.style.display = "flex";

<<<<<<< HEAD
                img_one.src = "img/homework.png";
=======
                img_one.src = "img/homework.gif";
>>>>>>> c858cff3674c1e9865e418eaeaf2d35b5f822114
                img_one.classList.remove("gym");
                img_one.classList.add("dohomework");
                description_one.innerHTML = "Go do Homework";

<<<<<<< HEAD
                img_two.src = "img/gym.png";
=======
                img_two.src = "img/gym.gif";
>>>>>>> c858cff3674c1e9865e418eaeaf2d35b5f822114
                img_two.classList.remove("sleep");
                img_two.classList.add("workout");
                description_two.innerHTML = "Go workout";

            }, transitionTimer);

        } else if (this.classList.contains("home")) {
            count -= 2;
            console.log(count);

            decision_overlay.style.display = "none";
            background.src = "img/bg_bed.png";
            title.innerHTML = "Ah, sweet comfort of home.";

            showResults(count);

        } 
    }
}

function init() {

    // first scene lead into decision
    setTimeout(function() {
        decision_overlay.style.display = "flex";
        iphone_character.style.display = "none";
    }, transitionTimer);

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