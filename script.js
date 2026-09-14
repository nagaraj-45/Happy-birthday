/* =====================================================
   PAGE 0 → PAGE 1
===================================================== */

const pageZero =
    document.getElementById("pageZero");

const pageZeroHeart =
    document.getElementById("pageZeroHeart");

const introScreen =
    document.getElementById("introScreen");


/* =====================================================
   BACKGROUND MUSIC
===================================================== */

const bgMusic =
    document.getElementById("bgMusic");


pageZeroHeart.addEventListener(
    "click",
    function () {

        /* Start background music */
        if (bgMusic) {

            bgMusic.volume = 0.7;

            bgMusic.play().catch(() => {
                console.log("Music playback was blocked by browser.");
            });

        }


        pageZero.style.opacity = "0";

        pageZero.style.transform =
            "scale(1.15)";

        setTimeout(() => {

            pageZero.style.display =
                "none";

            introScreen.style.display =
                "flex";

            introScreen.style.opacity =
                "0";

            introScreen.style.transform =
                "scale(.95)";

            setTimeout(() => {

                introScreen.style.transition =
                    "opacity .8s ease, transform .8s ease";

                introScreen.style.opacity =
                    "1";

                introScreen.style.transform =
                    "scale(1)";

            }, 50);

        }, 1000);

    }
);



/* =====================================================
   FLOATING HEARTS
===================================================== */

function createPinkHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add("pink-heart");

    heart.style.left =
        Math.random() * 100 + "vw";

    const size =
        Math.random() * 22 + 16;

    heart.style.width =
        size + "px";

    heart.style.height =
        size + "px";

    const duration =
        Math.random() * 5 + 5;

    heart.style.animationDuration =
        duration + "s";

    heart.style.opacity =
        Math.random() * .4 + .6;

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, (duration + 2) * 1000);

}


setInterval(
    createPinkHeart,
    280
);


for (
    let i = 0;
    i < 30;
    i++
) {

    setTimeout(
        createPinkHeart,
        i * 120
    );

}



/* =====================================================
   ELEMENTS
===================================================== */

const beginBtn =
    document.getElementById("beginBtn");

const birthdayScreen =
    document.getElementById("birthdayScreen");

const nextBtn =
    document.getElementById("nextBtn");

const letterScreen =
    document.getElementById("letterScreen");

const envelopeContainer =
    document.getElementById("envelopeContainer");

const openLetterBtn =
    document.getElementById("openLetterBtn");

const continueNextBtn =
    document.getElementById("continueNextBtn");

const pageFour =
    document.getElementById("pageFour");

const pageFive =
    document.getElementById("pageFive");

const pageFiveContinueBtn =
    document.getElementById("pageFiveContinueBtn");



/* =====================================================
   PAGE 1 → PAGE 2
===================================================== */

beginBtn.addEventListener(
    "click",
    function () {

        beginBtn.disabled = true;

        introScreen.style.opacity =
            "0";

        introScreen.style.transform =
            "scale(1.1)";

        setTimeout(() => {

            introScreen.style.display =
                "none";

            birthdayScreen.style.display =
                "flex";

            birthdayScreen.style.opacity =
                "1";

            birthdayScreen.style.transform =
                "scale(1)";

        }, 1000);

    }
);



/* =====================================================
   PAGE 2 → PAGE 3
===================================================== */

nextBtn.addEventListener(
    "click",
    function () {

        birthdayScreen.style.opacity =
            "0";

        birthdayScreen.style.transform =
            "scale(.95)";

        birthdayScreen.style.transition =
            "opacity .8s ease, transform .8s ease";

        setTimeout(() => {

            birthdayScreen.style.display =
                "none";

            letterScreen.style.display =
                "flex";

            letterScreen.style.opacity =
                "0";

            letterScreen.style.transform =
                "scale(1.05)";

            setTimeout(() => {

                letterScreen.style.transition =
                    "opacity .8s ease, transform .8s ease";

                letterScreen.style.opacity =
                    "1";

                letterScreen.style.transform =
                    "scale(1)";

            }, 50);

        }, 800);

    }
);



/* =====================================================
   OPEN LETTER
===================================================== */

openLetterBtn.addEventListener(
    "click",
    function () {

        envelopeContainer.classList.add(
            "open"
        );

        openLetterBtn.innerHTML =
            "❤️ Letter Opened";

        openLetterBtn.disabled =
            true;

        setTimeout(() => {

            openLetterBtn.style.opacity =
                "0";

            openLetterBtn.style.pointerEvents =
                "none";

        }, 700);

    }
);



/* =====================================================
   PAGE 3 → PAGE 4
===================================================== */

continueNextBtn.addEventListener(
    "click",
    function () {

        letterScreen.style.opacity =
            "0";

        letterScreen.style.transform =
            "scale(.95)";

        letterScreen.style.transition =
            "opacity .7s ease, transform .7s ease";


        setTimeout(() => {

            letterScreen.style.display =
                "none";

            pageFour.style.display =
                "block";

            pageFour.style.opacity =
                "0";

            pageFour.style.transform =
                "scale(1.05)";

            pageFour.style.transition =
                "opacity .8s ease, transform .8s ease";


            setTimeout(() => {

                pageFour.style.opacity =
                    "1";

                pageFour.style.transform =
                    "scale(1)";

            }, 50);

        }, 700);

    }
);



/* =====================================================
   PAGE 4 — GIFT BOX
===================================================== */

const giftBox =
    document.getElementById("giftBox");

const giftIntro =
    document.getElementById("giftIntro");

const giftClickText =
    document.getElementById("giftClickText");

const sunflowerField =
    document.getElementById("sunflowerField");

const bigSunflowerArea =
    document.getElementById("bigSunflowerArea");


let giftOpened = false;


giftBox.addEventListener(
    "click",
    function () {

        if (giftOpened) {
            return;
        }

        giftOpened = true;


        /* ---------------------------------------------
           Open gift box
        --------------------------------------------- */

        pageFour.classList.add(
            "gift-open"
        );


        /* ---------------------------------------------
           Wait for small sunflowers
        --------------------------------------------- */

        setTimeout(() => {

            pageFour.classList.add(
                "show-big-flower"
            );

        }, 3300);


        /* ---------------------------------------------
           Show final quote
        --------------------------------------------- */

        setTimeout(() => {

            pageFour.classList.add(
                "show-quote"
            );

        }, 5600);

    }
);



/* =====================================================
   PAGE 4 → PAGE 5
===================================================== */

pageFiveContinueBtn.addEventListener(
    "click",
    function () {

        pageFour.style.opacity =
            "0";

        pageFour.style.transform =
            "scale(.95)";

        pageFour.style.transition =
            "opacity .8s ease, transform .8s ease";


        setTimeout(() => {

            pageFour.style.display =
                "none";

            pageFive.style.display =
                "flex";

            pageFive.style.opacity =
                "0";

            pageFive.style.transform =
                "scale(1.05)";

            pageFive.style.transition =
                "opacity .8s ease, transform .8s ease";


            setTimeout(() => {

                pageFive.style.opacity =
                    "1";

                pageFive.style.transform =
                    "scale(1)";

            }, 50);

        }, 800);

    }
);