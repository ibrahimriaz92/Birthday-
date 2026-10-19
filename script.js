
/* PERSONAL DETAILS */

const birthdayPerson = "My Favorite Person";

const birthdayMessage = `Happy Birthday, Meri Jaan! ❤️
Aaj ka din sirf tumhare naam hai,
 aur meri dua hai ke tumhara din khushiyon,
 muskurahaton aur mohabbat se bhara ho.

Tum waqai bohat khaas ho, 
aur tum zindagi ki har khoobsurat cheez ki haqdaar ho.

Allah kare tumhare saare khwab poore hon, 
tumhein hamesha muskurane ki wajah milti rahe, 
aur tumhari zindagi ka har naya din sukoon, 
kamyabi aur yaadgaar lamhon se bhara ho.

Hamesha chamakti raho aur hamesha khush raho. ❤️

Ek baar phir, Happy Birthday, Meri Jaan! 🎂💖`;

document.getElementById("personName").textContent =
  birthdayPerson;

document.getElementById("message").textContent =
  birthdayMessage;


/* ELEMENTS */

const introScreen = document.getElementById("introScreen");
const gift = document.getElementById("gift");

const letter = document.getElementById("letter");
const cardsSection = document.getElementById("cardsSection");
const photosSection = document.getElementById("photosSection");
const surpriseSection = document.getElementById("surpriseSection");

const photosBtn = document.getElementById("photosBtn");
const backBtn = document.getElementById("backBtn");
const surpriseBtn = document.getElementById("surpriseBtn");
const photoSurpriseBtn = document.getElementById("photoSurpriseBtn");
const celebrateBtn = document.getElementById("celebrateBtn");
const restartBtn = document.getElementById("restartBtn");

const effects = document.getElementById("celebration");

let opened = false;


/* THREE GIFT CARDS ELEMENTS */

const cards = document.querySelectorAll(".gift-card");

const messageBox = document.getElementById("messageBox");
const messageTitle = document.getElementById("messageTitle");
const messageText = document.getElementById("messageText");
const closeButton = document.getElementById("closeButton");


/* SHOW ONLY ONE SECTION */

function showSection(section) {
  introScreen.hidden = true;
  letter.hidden = true;

  if (cardsSection) {
    cardsSection.hidden = true;
  }

  photosSection.hidden = true;
  surpriseSection.hidden = true;

  section.hidden = false;

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* OPEN GIFT */

function openGift() {
  if (opened) return;

  opened = true;

  gift.classList.add("opened");

  // Hide intro and show birthday message.
  showSection(letter);

  // Start celebration.
  celebrate();
}

gift.addEventListener("click", openGift);

gift.addEventListener("keydown", function(event) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openGift();
  }
});


/* OPEN THREE GIFT CARDS SECTION */

if (photosBtn) {
  photosBtn.addEventListener("click", function() {
    if (cardsSection) {
      showSection(cardsSection);
    } else {
      showSection(photosSection);
    }
  });
}


/* THREE GIFT CARDS MESSAGE FUNCTION */

function openCard(card) {
  const cardMessage = card.dataset.message;

  const headingElement = card.querySelector("h2");

  const heading = card.dataset.title ||
    headingElement.innerText.replace(/\n/g, " ");

  messageTitle.textContent = heading;
  messageText.textContent = cardMessage;

  messageBox.hidden = false;

  messageBox.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
}


/* CARD CLICK AND KEYBOARD SUPPORT */

cards.forEach(function(card) {
  card.addEventListener("click", function() {
    openCard(card);
  });

  card.addEventListener("keydown", function(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openCard(card);
    }
  });
});


/* CLOSE CARD MESSAGE */

if (closeButton) {
  closeButton.addEventListener("click", function() {
    messageBox.hidden = true;
  });
}


/* RETURN TO BIRTHDAY MESSAGE FROM PHOTOS */

backBtn.addEventListener("click", function() {
  showSection(letter);
});


/* OPEN SURPRISE FROM MESSAGE */

surpriseBtn.addEventListener("click", function() {
  showSection(surpriseSection);
});


/* OPEN SURPRISE FROM PHOTOS */

photoSurpriseBtn.addEventListener("click", function() {
  showSection(surpriseSection);
});


/* BUTTONS IN CARDS SECTION */

const cardsPhotosBtn = document.getElementById("cardsPhotosBtn");
const cardsBackBtn = document.getElementById("cardsBackBtn");

if (cardsPhotosBtn) {
  cardsPhotosBtn.addEventListener("click", function() {
    showSection(photosSection);
  });
}

if (cardsBackBtn) {
  cardsBackBtn.addEventListener("click", function() {
    showSection(letter);
  });
}


/* CELEBRATION EFFECT */

function celebrate() {
  const symbols = ["❤️", "💖", "💕", "✨", "🌸", "💗", "🎉"];

  for (let i = 0; i < 45; i++) {
    const particle = document.createElement("span");

    particle.className = "particle";

    particle.textContent =
      symbols[Math.floor(Math.random() * symbols.length)];

    particle.style.setProperty(
      "--x",
      Math.random() * 100 + "vw"
    );

    particle.style.setProperty(
      "--size",
      (12 + Math.random() * 20) + "px"
    );

    particle.style.setProperty(
      "--duration",
      (3 + Math.random() * 4) + "s"
    );

    particle.style.setProperty(
      "--drift",
      (Math.random() * 180 - 90) + "px"
    );

    effects.appendChild(particle);

    particle.addEventListener("animationend", function() {
      particle.remove();
    }, { once: true });
  }
}


/* FINAL CELEBRATION BUTTON */

celebrateBtn.addEventListener("click", function() {
  celebrate();
});


/* START AGAIN */

restartBtn.addEventListener("click", function() {
  opened = false;

  letter.hidden = true;

  if (cardsSection) {
    cardsSection.hidden = true;
  }

  photosSection.hidden = true;
  surpriseSection.hidden = true;

  introScreen.hidden = false;

  gift.classList.remove("opened");

  effects.replaceChildren();

  // Reset the card message.
  if (messageBox) {
    messageBox.hidden = true;
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


const bgMusic = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", async () => {
    if (bgMusic.paused) {
        try {
            await bgMusic.play();
            musicBtn.textContent = "⏸ Pause Music";
        } catch (error) {
            musicBtn.textContent = "🎵 Try Again";
        }
    } else {
        bgMusic.pause();
        musicBtn.textContent = "🎵 Play Music";
    }
});

bgMusic.addEventListener("ended", () => {
    musicBtn.textContent = "🎵 Play Music";
});
