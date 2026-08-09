// ==============================
// JARVIS Crimson Core v6.0
// ui.js
// ==============================

// ---------- SPEAK ----------

function speak(text){

    if(!("speechSynthesis" in window)) return;

    speechSynthesis.cancel();

    const msg = new SpeechSynthesisUtterance(text);

    msg.rate = 0.9;
    msg.pitch = 0.9;
    msg.volume = 1;

    speechSynthesis.speak(msg);

}

// ---------- CLOCK ----------

function startClock(){

    function updateClock(){

        const clock = document.getElementById("clock");

        if(clock){

            clock.innerText = new Date().toLocaleTimeString();

        }

    }

    updateClock();

    setInterval(updateClock,1000);

}

// ---------- VOICE RECOGNITION ----------

const SpeechRecognition =
window.SpeechRecognition || window.webkitSpeechRecognition;

if(SpeechRecognition){

    const recognition = new SpeechRecognition();

    recognition.continuous = true;

    recognition.interimResults = false;

    recognition.lang = "en-US";

    recognition.onresult = function(event){

        const text =
        event.results[event.results.length-1][0].transcript
        .toLowerCase()
        .trim();

        console.log("Voice:",text);

        if(text.includes("hey jarvis")){

            speak("Yes Commander.");

        }

        else if(text.includes("open engineer mode")){

            speak("Engineer authentication required.");

            requestEngineerAccess();

        }

        else if(text.includes("status")){

            speak("All systems online.");

        }

        else if(text.includes("what time is it")){

            speak("The time is " + new Date().toLocaleTimeString());

        }

    };

    recognition.onend = function(){

        recognition.start();

    };

    recognition.onerror = function(e){

        console.log(e);

    };

    function startListening(){

        recognition.start();

    }

    window.startListening = startListening;

}

// ---------- ENGINEER LOGIN ----------

function requestEngineerAccess(){

    app.innerHTML = `

    <div class="screen">

        <div class="logo">
            ENGINEER
        </div>

        <div class="box">

            <h2>ENGINEER AUTHENTICATION</h2>

            <p>Security Level : OMEGA</p>

            <br>

            <input
            id="engineerPass"
            type="password"
            placeholder="Engineer Password">

            <br><br>

            <button id="unlockBtn">

                UNLOCK

            </button>

            <br><br>

            <button id="cancelBtn">

                CANCEL

            </button>

        </div>

    </div>

    `;

    document
    .getElementById("unlockBtn")
    .onclick = checkEngineerPassword;

    document
    .getElementById("cancelBtn")
    .onclick = function(){

        speak("Authentication cancelled.");

        showDashboard();

    };

}

function checkEngineerPassword(){

    const pass =
    document.getElementById("engineerPass").value;

    if(pass==="Crimson2026"){

        speak("Authentication successful.");

        setTimeout(function(){

            showEngineerMode();

        },700);

    }

    else{

        speak("Access denied.");

        alert("Incorrect Password");

    }

}

// ---------- ACTIVATION FLASH ----------

function activationFlash(){

    const flash=document.createElement("div");

    flash.className="flash";

    document.body.appendChild(flash);

    setTimeout(function(){

        flash.remove();

    },500);

}