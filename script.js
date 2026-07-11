const openBtn = document.getElementById("open");
const letter = document.getElementById("letter");
const typing = document.getElementById("typing");

const musicBtn = document.getElementById("music");
const song = document.getElementById("song");

const message = `Reva,

I don't really know what changed, but I know one thing—I miss your presence.

Life has been a little quieter without our conversations and your random messages.

Maybe you never realized how much they meant to me, but they always made my day a little better.

I'm not asking for anything.

I just wanted you to know that you'll always have a special place in my heart.

If life ever brings us back to a simple "Hi," I'd smile just as much as I used to.

Until then...

Take care of yourself. ❤️`;

let i = 0;

function typeWriter() {
    if (i < message.length) {
        typing.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 35);
    }
}

openBtn.addEventListener("click", () => {

    openBtn.style.display = "none";

    letter.classList.remove("hidden");

    letter.scrollIntoView({
        behavior: "smooth"
    });

    typing.innerHTML = "";

    i = 0;

    typeWriter();

});

musicBtn.addEventListener("click", () => {

    if (song.paused) {

        song.play();

        musicBtn.innerHTML = "⏸";

    } else {

        song.pause();

        musicBtn.innerHTML = "🎵";

    }

});

document.querySelectorAll(".images img").forEach(img => {

    img.addEventListener("click", () => {

        const overlay = document.createElement("div");

        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.background = "rgba(0,0,0,.9)";
        overlay.style.display = "flex";
        overlay.style.alignItems = "center";
        overlay.style.justifyContent = "center";
        overlay.style.zIndex = "9999";

        const image = document.createElement("img");

        image.src = img.src;
        image.style.maxWidth = "90%";
        image.style.maxHeight = "90%";
        image.style.borderRadius = "20px";
        image.style.boxShadow = "0 0 40px rgba(255,255,255,.3)";

        overlay.appendChild(image);

        overlay.onclick = () => overlay.remove();

        document.body.appendChild(overlay);

    });

});