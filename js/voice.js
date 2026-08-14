// ==============================
// ETERNAL Voice System v2.0
// ==============================

let recognition = null;

const BrowserSpeechRecognition =
    window.SpeechRecognition ||
    window.webkitSpeechRecognition;

let eternalAwake = false;
let waitingPassword = false;

if (BrowserSpeechRecognition) {

    recognition = new BrowserSpeechRecognition();

    recognition.continuous = true;
    recognition.interimResults = false;
    recognition.lang = "en-US";
    recognition.maxAlternatives = 1;

    recognition.onstart = function () {

        console.log("🎤 Listening...");

    };

    recognition.onresult = function (event) {

        let text =
            event.results[event.results.length - 1][0].transcript
            .toLowerCase()
            .trim();

        console.log("Heard:", text);

        processVoice(text);

    };

    recognition.onerror = function (event) {

        console.log("Voice Error:", event.error);

    };

    recognition.onend = function () {

        console.log("Restarting Voice...");

        try {

            recognition.start();

        } catch (e) {}

    };

} else {

    alert("Speech Recognition is not supported by this browser.");

}

// ==============================
// Start Voice
// ==============================

function startVoice() {

    if (!recognition) return;

    try {

        recognition.start();

        console.log("Voice Started");

    } catch (e) {

        console.log(e);

    }

}

// ==============================
// Voice Brain
// ==============================

function processVoice(text) {

    text = text.toLowerCase().trim();

    // Wake Word
    if (!eternalAwake) {

        if (text.includes("hey eternal")) {

            eternalAwake = true;

            speak("Yes Player.");

        }

        return;

    }

    // Engineer Password
    if (waitingPassword) {

        waitingPassword = false;
        eternalAwake = false;

        if (
            text.includes("crimson two zero two six") ||
            text.includes("crimson 2026")
        ) {

            speak("Authentication successful.");

            showEngineerMode();

        } else {

            speak("Access denied.");

        }

        return;

    }

    // Voice Commands

    if (text.includes("open engineer mode")) {

        waitingPassword = true;

        speak("State the engineer password.");

    }

    else if (text.includes("help")) runCommand("help");

    else if (text.includes("hello")) runCommand("hello");

    else if (text.includes("status")) runCommand("status");

    else if (text.includes("time")) runCommand("time");

    else if (text.includes("date")) runCommand("date");

    else if (text.includes("scan")) runCommand("/scan");

    else if (text.includes("diagnostics")) runCommand("/diagnostics");

    else if (text.includes("reactor")) runCommand("/reactor");

    else if (text.includes("core")) runCommand("/core");

    else if (text.includes("network")) runCommand("/network");

    else if (text.includes("security")) runCommand("/security");

    else if (text.includes("memory")) runCommand("/memory");

    else if (text.includes("cpu")) runCommand("/cpu");

    else if (text.includes("system")) runCommand("/system");

    else if (text.includes("version")) runCommand("/version");

    else if (text.includes("about")) runCommand("/about");

    else if (text.includes("protocol")) runCommand("/protocol");

    else if (text.includes("override")) runCommand("/override");

    else if (text.includes("omega")) runCommand("/omega");

    else if (text.includes("reactivate")) runCommand("/reactivate");

    else if (text.includes("god mode")) runCommand("/godmode");

    else if (text.includes("debug")) runCommand("/debug");

    else if (text.includes("kernel")) runCommand("/kernel");

    else if (text.includes("neural")) runCommand("/neural");

    else if (text.includes("matrix")) runCommand("/matrix");

    else if (text.includes("crimson")) runCommand("/crimson");

    else if (text.includes("emergency")) runCommand("/emergency");

    else if (text.includes("self destruct")) runCommand("/selfdestruct");

    else if (text.includes("lock")) runCommand("/lock");

    else if (text.includes("reboot")) runCommand("/reboot");

    else if (text.includes("shutdown")) runCommand("/shutdown");

    else if (text.includes("clear")) runCommand("clear");

    else {

        speak("Command not recognized.");

    }

    // Go back to sleep after one command
    eternalAwake = false;

}

// ==============================
// Run Terminal Command
// ==============================

function runCommand(command) {

    const input = document.getElementById("command");

    if (!input) return;

    input.value = command;

    processCommand();

}