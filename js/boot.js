// ==============================
// ETERNAL Crimson Core v4.0
// boot.js
// ==============================

const bootLines = [
    "Initializing...",
    "Loading AI Core...",
    "Checking Systems...",
    "Connecting...",
    "ETERNAL ONLINE"
];

function showBoot() {

    app.innerHTML = `
        <div class="screen">

            <div class="logo">ETERNAL</div>

            <div class="subtitle">Crimson Core v4.0</div>

            <div class="box" id="bootBox"></div>

            <div class="progress">
                <div class="progressFill" id="progressFill"></div>
            </div>

        </div>
    `;

    const bootBox = document.getElementById("bootBox");
    const progressFill = document.getElementById("progressFill");

    let line = 0;

    function nextLine() {

if (line >= bootLines.length) {

    speak("Initializing systems.");

    setTimeout(() => {
        speak("Loading artificial intelligence core.");
    }, 3500);

    setTimeout(() => {
        showLogin();
    }, 5000);

    return;
}

        const p = document.createElement("p");
        p.textContent = bootLines[line];
        bootBox.appendChild(p);

        progressFill.style.width =
            ((line + 1) / bootLines.length) * 100 + "%";

        line++;

        setTimeout(nextLine, 800);
    }

    nextLine();
}

// ==============================
// ETERNAL Crimson Core
// boot.js
// ==============================

function activationFlash(){

    const flash = document.createElement("div");

    flash.className = "flash";

    document.body.appendChild(flash);

    setTimeout(() => {

        flash.remove();

    },800);

}

function activationFlash(){

    const flash = document.createElement("div");

    flash.className = "flash";

    document.body.appendChild(flash);

    setTimeout(() => {

        flash.remove();

    },800);

}

function showStartScreen() {

    app.innerHTML = `

    <div class="screen">

        <div class="logo">ETERNAL</div>

        <div class="subtitle">
            Crimson Core OS
        </div>

        <div class="crimsonCore">

            <div class="ring ring1"></div>
            <div class="ring ring2"></div>
            <div class="ring ring3"></div>
            <div class="ring ring4"></div>

            <div class="energyCore" id="eternalCore">

                <div class="coreGlow"></div>

                <div class="coreText">
                    E
                </div>

            </div>

        </div>

        <p class="coreMessage">
            TAP THE CORE TO INITIALIZE
        </p>

    </div>

    `;

    document.getElementById("eternalCore").onclick = function () {

        speak("Welcome Player.");

        this.style.transform = "scale(.9)";

        setTimeout(() => {

            showBoot();

        },1000);

    };

}