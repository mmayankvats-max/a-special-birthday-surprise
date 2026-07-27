const birthdayDate = new Date("2026-10-03T00:00:00").getTime();

const personalMessage = `My love, on your special day I just want you to know how grateful I am that you are part of my life. You make ordinary moments feel extraordinary, and your smile can make even the hardest days feel lighter. I hope this new year of your life brings you endless happiness, beautiful adventures, and every dream your heart is wishing for. Happy Birthday, my love. ❤️`;


/* =========================
   OPEN SURPRISE
========================= */

const openSurprise = document.getElementById("openSurprise");

if (openSurprise) {
  openSurprise.addEventListener("click", () => {
    document.getElementById("welcome").classList.add("hidden");
    document.getElementById("mainContent").classList.remove("hidden");

    window.scrollTo(0, 0);

    typeMessage();
  });
}


/* =========================
   COUNTDOWN
========================= */

function updateCountdown() {
  const now = Date.now();
  const distance = birthdayDate - now;

  if (distance <= 0) {
    ["days", "hours", "minutes", "seconds"].forEach(id => {
      document.getElementById(id).textContent = "00";
    });

    document.getElementById("birthdayMessage").classList.remove("hidden");

    launchConfetti(160);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((distance / (1000 * 60)) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  document.getElementById("days").textContent =
    String(days).padStart(3, "0");

  document.getElementById("hours").textContent =
    String(hours).padStart(2, "0");

  document.getElementById("minutes").textContent =
    String(minutes).padStart(2, "0");

  document.getElementById("seconds").textContent =
    String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);


/* =========================
   TYPING MESSAGE
========================= */

function typeMessage() {
  const el = document.getElementById("typingText");

  if (!el || el.dataset.done) return;

  el.dataset.done = "1";

  let i = 0;

  function type() {
    if (i < personalMessage.length) {
      el.textContent += personalMessage[i++];
      setTimeout(type, 22);
    }
  }

  type();
}


/* =========================
   MEMORIES
========================= */
const memories = [
  {
    image: "girlfriend.jpg",
    date: "The Day Everything Became Special ❤️",
    title: "A Beautiful Beginning",
    caption: "Tumhari ek smile mera pura din beautiful bana deti hai ❤️."
  },
  {
    image: "memories/memory1.jpg",
    date: "Our Little Adventure ✨",
    title: "Our Beautiful Memory 🥰",
    caption: "Tumhare saath bitaya har moment mere liye special hai."
  },
  {
    image: "memories/memory2.JPG",
    date: "Forever & Always ❤️",
    title: "Forever & Always",
    caption: "Bas aise hi hamesha mere saath rehna. ❤️"
  }
];

const gallery = document.getElementById("memoryGallery");

if (gallery) {

  memories.forEach((memory, index) => {

    const card = document.createElement("article");

    card.className = "memory-card";

    card.innerHTML = `
      <div class="memory-image-wrapper">

        <img
          src="/static/images/${memory.image}"
          alt="${memory.title}"
          onerror="this.style.display='none'"
        >

        <div class="memory-number">
          0${index + 1}
        </div>

      </div>

      <div class="memory-caption">

        <span class="memory-date">
          ${memory.date}
        </span>

        <h3>
          ${memory.title}
        </h3>

        <p>
          ${memory.caption}
        </p>

      </div>
    `;

    gallery.appendChild(card);
  });
}
/* =========================
   NO BUTTON
========================= */
/* =========================
   YES BUTTON
========================= */

document.querySelectorAll(".yes-btn").forEach(btn => {

  btn.addEventListener("click", () => {

    const q = btn.dataset.question;

    const msg = document.getElementById(q + "Message");

    if (q === "trip") {
      msg.textContent =
        "Yayyy! 🥺❤️ Our special trip is officially planned! ✈️🌍";
    }

    if (q === "cafe") {
      msg.textContent =
        "Yesss! ☕❤️ A cute cafe date with you sounds perfect! 🥰";
    }

    launchConfetti(40);

  });

});
document.querySelectorAll(".no-btn").forEach(btn => {

  btn.addEventListener("click", () => {

    const q = btn.dataset.question;

    const msg = document.getElementById(q + "Message");

    msg.textContent =
      "Are you sure? 🥺❤️ Try again!";

    btn.style.position = "relative";

    btn.style.left =
      `${Math.round((Math.random() * 160) - 80)}px`;

    btn.style.top =
      `${Math.round((Math.random() * 70) - 35)}px`;

    setTimeout(() => {
      btn.style.left = "0";
      btn.style.top = "0";
    }, 500);

  });

});


/* =========================
   BIRTHDAY WISH
========================= */

const wishBtn = document.getElementById("wishBtn");

if (wishBtn) {

  wishBtn.addEventListener("click", () => {

    document.querySelectorAll(".flame").forEach(
      f => f.style.display = "none"
    );

    document.getElementById("wishMessage").textContent =
      "Wish made! ✨ May every beautiful thing find its way to you. ❤️";

    launchConfetti(50);

  });

}


/* =========================
   MUSIC
========================= */

const music = document.getElementById("musicPlayer");
const playPause = document.getElementById("playPause");
const volume = document.getElementById("volume");

if (playPause && music) {

  playPause.addEventListener("click", async () => {

    if (music.paused) {

      try {

        await music.play();

        playPause.textContent = "⏸ Pause";

      } catch (e) {

        alert(
          "Add your music file at static/audio/romantic.mp3 first."
        );

      }

    } else {

      music.pause();

      playPause.textContent = "▶ Play";

    }

  });

}

if (volume && music) {

  volume.addEventListener("input", e => {
    music.volume = e.target.value;
  });

}


/* =========================
   LAST SURPRISE
========================= */

const lastSurprise =
  document.getElementById("lastSurprise");

if (lastSurprise) {

  lastSurprise.addEventListener("click", () => {

    document
      .getElementById("surpriseOverlay")
      .classList.remove("hidden");

    launchConfetti(220);

  });

}


/* =========================
   CLOSE SURPRISE
========================= */

const closeSurprise =
  document.getElementById("closeSurprise");

if (closeSurprise) {

  closeSurprise.addEventListener("click", () => {

    document
      .getElementById("surpriseOverlay")
      .classList.add("hidden");

  });

}


/* =========================
   CONFETTI
========================= */

function launchConfetti(count) {

  const box = document.getElementById("confetti");

  if (!box) return;

  for (let i = 0; i < count; i++) {

    const p = document.createElement("span");

    p.className = "confetti-piece";

    p.style.left =
      Math.random() * 100 + "vw";

    p.style.animationDuration =
      (2 + Math.random() * 4) + "s";

    p.style.animationDelay =
      Math.random() * 1.5 + "s";

    p.style.transform =
      `rotate(${Math.random() * 360}deg)`;

    p.style.background =
      `hsl(${Math.random() * 360},80%,70%)`;

    box.appendChild(p);

    setTimeout(() => p.remove(), 7000);

  }

}


/* =========================
   FLOATING PARTICLES
========================= */

const particleBox =
  document.getElementById("particles");

if (particleBox) {

  for (let i = 0; i < 35; i++) {

    const p = document.createElement("span");

    p.className = "particle";

    p.textContent =
      Math.random() > 0.35 ? "♥" : "✦";

    p.style.left =
      Math.random() * 100 + "vw";

    p.style.animationDuration =
      (6 + Math.random() * 12) + "s";

    p.style.animationDelay =
      Math.random() * 10 + "s";

    particleBox.appendChild(p);

  }

}


/* =========================
   CURSOR GLOW
========================= */

document.addEventListener("mousemove", e => {

  const glow =
    document.querySelector(".cursor-glow");

  if (glow) {

    glow.style.left =
      e.clientX + "px";

    glow.style.top =
      e.clientY + "px";

  }

});
/* =========================
   PASSWORD LOCK
========================= */

const correctPassword = "shanu@mayank";

const passwordLock = document.getElementById("passwordLock");
const passwordInput = document.getElementById("passwordInput");
const passwordBtn = document.getElementById("passwordBtn");
const passwordError = document.getElementById("passwordError");

function unlockWebsite() {

  const enteredPassword = passwordInput.value.trim();

  if (enteredPassword === correctPassword) {

    // Password screen hide
    passwordLock.classList.add("unlocked");

    // Website unlock
    document.body.classList.add("password-unlocked");

    // Top par le jao
    window.scrollTo(0, 0);

    // Input clear
    passwordInput.value = "";

    // Error clear
    passwordError.textContent = "";

    // Music play
    if (music) {

      music.play().then(() => {

        if (playPause) {
          playPause.textContent = "⏸ Pause";
        }

      }).catch(() => {

        console.log("Music autoplay blocked by browser.");

      });

    }

  } else {

    passwordError.textContent =
      "Wrong password 🥺❤️ Try again!";

    passwordInput.value = "";

    passwordInput.focus();

  }

}


/* =========================
   UNLOCK BUTTON
========================= */

if (passwordBtn) {

  passwordBtn.addEventListener("click", unlockWebsite);

}


/* =========================
   ENTER KEY
========================= */

if (passwordInput) {

  passwordInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

      event.preventDefault();

      unlockWebsite();

    }

  });

}


/* =========================
   LOVE LETTER
========================= */

const envelope =
  document.getElementById("envelope");

const loveLetterCard =
  document.getElementById("loveLetterCard");

if (envelope && loveLetterCard) {

  envelope.addEventListener("click", () => {

    envelope.classList.add("open");

    setTimeout(() => {

      loveLetterCard.classList.remove("hidden");

    }, 700);

    launchConfetti(40);

  });

}


/* =========================
   SECRET HIDDEN MESSAGES
========================= */

const secretHearts =
  document.querySelectorAll(".secret-heart");

const secretMessageOverlay =
  document.getElementById("secretMessageOverlay");

const secretMessageText =
  document.getElementById("secretMessageText");

const closeSecretMessage =
  document.getElementById("closeSecretMessage");

const secretCloseBtn =
  document.getElementById("secretCloseBtn");


secretHearts.forEach(heart => {

  heart.addEventListener("click", () => {

    const message =
      heart.dataset.message;

    if (secretMessageText) {
      secretMessageText.textContent = message;
    }

    if (secretMessageOverlay) {

      secretMessageOverlay.classList.remove("hidden");

    }

    // Confetti
    launchConfetti(30);

  });

});


/* =========================
   CLOSE SECRET MESSAGE
========================= */

if (closeSecretMessage) {

  closeSecretMessage.addEventListener("click", () => {

    secretMessageOverlay.classList.add("hidden");

  });

}


if (secretCloseBtn) {

  secretCloseBtn.addEventListener("click", () => {

    secretMessageOverlay.classList.add("hidden");

  });

}
