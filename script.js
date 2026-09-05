/* =========================================
   ELEMENTS
========================================= */

const passwordScreen =
    document.getElementById("passwordScreen");

const gardenScreen =
    document.getElementById("gardenScreen");

const passwordForm =
    document.getElementById("passwordForm");

const passwordInput =
    document.getElementById("passwordInput");

const unlockButton =
    document.getElementById("unlockButton");

const feedback =
    document.getElementById("feedback");

const hintButton =
    document.getElementById("hintButton");

const hintBox =
    document.getElementById("hintBox");

const passwordCard =
    document.getElementById("passwordCard");

const stars =
    document.getElementById("stars");

const fireflies =
    document.getElementById("fireflies");

const attemptsContainer =
    document.getElementById("attempts");
const plantBtn =
    document.getElementById("plantBtn");

const seedStage =
    document.getElementById("seedStage");
    
    const messageBox =
    document.getElementById("messageBox");
   

    const butterflyEgg =
    document.getElementById("butterflyEgg");

const flowerTitle =
    document.getElementById("flowerTitle");

const flowerMessage =
    document.getElementById("flowerMessage");

const nextFlowerBtn =
    document.getElementById("nextFlowerBtn");
const choiceBox =
    document.getElementById("choiceBox");

const choiceMessage =
    document.getElementById("choiceMessage");

const yesBtn =
    document.getElementById("yesBtn");

const noBtn =
    document.getElementById("noBtn");

/* =========================================
   SETTINGS
========================================= */

const correctPassword = "troublemaker";

let attempts = 0;

const maxAttempts = 3;


/* =========================================
   CREATE STARS
========================================= */

function createStars() {

    for (let i = 0; i < 100; i++) {

        const star =
            document.createElement("div");

        star.classList.add("star");

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 75 + "%";

        const size =
            Math.random() * 2.5 + 1;

        star.style.width =
            size + "px";

        star.style.height =
            size + "px";

        star.style.animationDelay =
            Math.random() * 3 + "s";

        stars.appendChild(star);
    }
}


/* =========================================
   CREATE FIREFLIES
========================================= */

function createFireflies() {

    for (let i = 0; i < 18; i++) {

        const firefly =
            document.createElement("div");

        firefly.classList.add("firefly");

        firefly.style.left =
            Math.random() * 100 + "%";

        firefly.style.top =
            45 + Math.random() * 45 + "%";

        firefly.style.animationDelay =
            Math.random() * 5 + "s";

        /* Special firefly */
        if (i === 7) {

            firefly.classList.add(
                "special-firefly"
            );

        }

        fireflies.appendChild(firefly);
    }
}

/* =========================================
   PASSWORD CHECK
========================================= */

passwordForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const enteredPassword =
            passwordInput.value
                .trim()
                .toLowerCase();


        /* =========================
           CORRECT PASSWORD
        ========================= */

        if (
            enteredPassword ===
            correctPassword
        ) {

            feedback.textContent =
                "Okay... mil gaya. 👀✨";

            unlockButton.innerHTML =
                "Welcome, Madam Ji 🌷";

            unlockButton.disabled =
                true;

            setTimeout(
                unlockGarden,
                2800
            );

            return;
        }


        /* =========================
           WRONG PASSWORD
        ========================= */

        attempts++;

        updateAttempts();


        passwordCard.classList.remove(
            "shake"
        );

        void passwordCard.offsetWidth;

        passwordCard.classList.add(
            "shake"
        );


        if (attempts === 1) {

            feedback.textContent =
                "Hmm... nice try 👀";

        }

        else if (attempts === 2) {

            feedback.textContent =
                "Madam ji, thoda aur socho 😂";

        }

        else if (attempts >= 3) {

            feedback.textContent =
                "Okay okay... one tiny clue? 😌";

            hintButton.style.display =
                "inline-block";
        }


        passwordInput.value = "";

        passwordInput.focus();
    }
);


/* =========================================
   HINT BUTTON
========================================= */

hintButton.addEventListener(
    "click",
    function() {

        hintBox.classList.toggle("show");

    }
);
    /* =========================================
   UPDATE ATTEMPTS
========================================= */

function updateAttempts() {

    const dots =
        attemptsContainer.querySelectorAll("span");

    dots.forEach(
        function(dot, index) {

            if (index < attempts) {
                dot.classList.add("used");
            }

        }
    );
}


/* =========================================
   UNLOCK GARDEN
========================================= */

function unlockGarden() {

    passwordScreen.style.opacity = "0";

    passwordScreen.style.transition =
        "opacity 0.8s ease";

    setTimeout(
        function() {

            passwordScreen.classList.remove(
                "active"
            );

            passwordScreen.style.opacity =
                "";

            gardenScreen.classList.add(
                "active"
            );

        },
        800
    );
}


/* =========================================
   PLANT BUTTON
========================================= */

plantBtn.addEventListener(
    "click",
    function() {

        plantBtn.style.display =
            "none";

        seedStage.classList.add(
            "hidden"
        );

        setTimeout(
            growFlowers,
            700
        );

    }
);


/* =========================================
   START
========================================= */

createStars();

createFireflies();

passwordInput.focus();
/* =========================================
   GROW FLOWERS
========================================= */

function growFlowers() {

    const flowersContainer =
        document.getElementById("flowersContainer");

    const flowers = [
        "🌷",
        "🌸",
        "🌹",
        "🌼",
        "🌺",
        "🪻",
        "🌻"
    ];

    flowers.forEach(
        function(flower, index) {

            setTimeout(
                function() {

                    const flowerElement =
                        document.createElement("button");

                    flowerElement.classList.add("flower");

                    flowerElement.textContent =
                        flower;

                    flowerElement.dataset.index =
                        index;

                    /* Lock future flowers */
                    if (index !== 0) {
                        flowerElement.classList.add("locked");
                        flowerElement.disabled = true;
                    }

                    flowersContainer.appendChild(
                        flowerElement
                    );

                },
                index * 500
            );

        }
    );
}

/* =========================================
   FLOWER MESSAGES
========================================= */

const flowerMessages = [
    {
        title: "Shuruaat 🌷",
        message:
            "Okay... chalo kuch harmless se start karte hain. 😇"
    },

    {
        title: "Thodi Si Masti 👀",
        message:
            "Waise aap thodi si troublemaker ho... pata hai na? 😂"
    },

    {
        title: "Ek Chhoti Si Baat 🌸",
        message:
            "Honestly, abhi toh humne properly baat bhi nahi ki... phir bhi pata nahi kyun, aap interesting lagti ho. 👀🤭"
    },

    {
        title: "Kuch Toh Suspicious Hai 😌",
        message:
            "Hmm... ye thoda suspicious ho raha hai. Pata nahi kyun, but laga aapke liye kuch special toh banta hai. 👀❤️"
    },

    {
        title: "Ek Chhota Sa Secret 🤭",
        message:
            "Ye wala aapko nahi milna chahiye tha... 👀🤭"
    },

    {
        title: "Bas Thoda Aur 👀",
        message:
            "Okay... ab aap itna aage aa hi gayi ho. I think aapko already pata chal gaya hai ki ye kahan ja raha hai... 🤭❤️"
    },

    {
        title: "Final Reveal ❤️",
        message:
            `Okay, ab flowers ke peeche hide nahi karunga.<br><br>
            Mujhe aap genuinely pasand ho. ❤️<br><br>
            Bas aapko directly bolne ke bajay thoda apne tareeke se batana tha...
            thoda playful, thoda dramatic. 😂🌷<br><br>
            No pressure. Bas chahta tha ki aapko pata ho. 🙂❤️`
    }
];
/* =========================================
   FLOWER CLICK
========================================= */

const allFlowers =
    document.getElementById("flowersContainer");

allFlowers.addEventListener(
    "click",
    function(event) {

        if (
            !event.target.classList.contains("flower")
        ) {
            return;
        }

        const index =
            Number(event.target.dataset.index);

        showFlowerMessage(index);

    }
);


/* =========================================
   SHOW MESSAGE
========================================= */

function showFlowerMessage(index) {

    const data =
        flowerMessages[index];

    flowerTitle.textContent =
        data.title;

    flowerMessage.innerHTML =
        data.message;

    messageBox.classList.add("show");

    messageBox.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}

/* =========================================
   SEQUENTIAL FLOWER UNLOCK
========================================= */

let currentFlower = 0;

nextFlowerBtn.addEventListener(
    "click",
    function() {

        currentFlower++;

        messageBox.classList.remove("show");


        /* ==============================
           NEXT FLOWER
        ============================== */

        const nextFlower =
            document.querySelector(
                `.flower[data-index="${currentFlower}"]`
            );

        if (nextFlower) {

            nextFlower.disabled = false;

            nextFlower.classList.remove("locked");

            setTimeout(
                function() {

                    nextFlower.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                },
                300
            );

        }


        /* ==============================
           AFTER FINAL FLOWER
        ============================== */

        if (currentFlower === 7) {

            nextFlowerBtn.style.display =
                "none";

            setTimeout(
                function() {

                    choiceBox.classList.add("show");

                    choiceBox.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                },
                700
            );

        }

    }
);
/* =========================================
   BUTTERFLY EASTER EGG
========================================= */

if (butterflyEgg) {

    butterflyEgg.addEventListener(
        "click",
        function() {

            flowerTitle.textContent =
                "You found me? 👀🦋";

            flowerMessage.textContent =
                "Okay... you're more curious than I thought. 😂";

            messageBox.classList.add("show");

            messageBox.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }
    );

}
/* =========================================
   FINAL YES / NO CHOICE
========================================= */

let noClicks = 0;

const noMessages = [
    "Pakka? 👀",
    "Accha... ek baar aur soch lo 😂",
    "Madam ji, itni jaldi NAHI? 😭",
    "Okie... ab main personally le raha hoon. 😂",
    "Lagta hai button bhi nervous ho gaya... 👀",
    "Theek hai theek hai... last chance? 🤭",
    "Okieeee, aap jeet gayi. 😭😂",
    "Okieeeee... samajh gaya, aaj meri haar hui. 😭😂❤️"
];


/* =========================================
   NO BUTTON
========================================= */

noBtn.addEventListener(
    "click",
    function() {

        noClicks++;

        const messageIndex =
            Math.min(
                noClicks - 1,
                noMessages.length - 1
            );

        choiceMessage.textContent =
            noMessages[messageIndex];


        /* YES button gets bigger every NO */

        const scale =
            Math.min(
                1 + noClicks * 0.08,
                1.6
            );

        yesBtn.style.transform =
            `scale(${scale})`;


        /* After 7 NO clicks */

        if (noClicks >= 7) {

           choiceMessage.textContent =
                    "HAHA okiee........ message samajh gaya. 😂❤️";
            noBtn.textContent =
                "Okay 😭";

        }

    }
);

/* =========================================
   YES BUTTON
========================================= */

const yesReveal =
    document.getElementById("yesReveal");

yesBtn.addEventListener(
    "click",
    function() {

        /* First reaction stays here */

        choiceMessage.innerHTML =
            "Hehe... I had a feeling. 🤭❤️";

        yesBtn.textContent =
            "YAYYY! ❤️✨";

        noBtn.style.display =
            "none";


        /* BIG YES BUTTON ❤️ */

        yesBtn.style.transform =
            "scale(1.15)";

        yesBtn.style.padding =
            "16px 30px";

        yesBtn.style.fontSize =
            "18px";


        choiceBox.style.boxShadow =
            "0 0 50px rgba(255, 192, 223, 0.4)";


        /* SHOW DRAMATIC FINAL PORTION */

        setTimeout(function() {

    yesReveal.classList.add("show");

    yesReveal.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    setTimeout(function() {

        const finalEnding =
            document.getElementById("finalEnding");

        finalEnding.classList.add("show");

        setTimeout(function() {

            finalEnding.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 300);

        setTimeout(function() {

            const secretSurprise =
                document.getElementById("secretSurprise");

            const secretTwist =
                document.getElementById("secretTwist");

            const secretEnd =
                document.getElementById("secretEnd");

            secretSurprise.classList.add("show");

            setTimeout(function() {
                secretSurprise.classList.add("starActive");
            }, 1200);

            setTimeout(function() {
                secretTwist.classList.add("show");
            }, 2700);

            setTimeout(function() {
                secretEnd.classList.add("show");
            }, 4700);

        }, 8500);

    }, 7500);

}, 1000);

    }
);
