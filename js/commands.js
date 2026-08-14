// ==============================
// ETERNAL Crimson Core v7.0
// commands.js
// Part 1
// ==============================

function processCommand() {

    const input = document.getElementById("command");
    const terminal = document.getElementById("terminal");

    let cmd = input.value.trim().toLowerCase();

    if (cmd === "") return;

    terminal.innerHTML += `
        <p><span style="color:#00ff66;">></span> ${cmd}</p>
    `;

    switch(cmd){

// ==============================
// BASIC COMMANDS
// ==============================

case "hello":

case "hi":

    speak("Hello Player.");

    terminal.innerHTML += `
        <p>Hello Player.</p>
    `;
    break;


case "help":

    terminal.innerHTML += `
    <p>

    BASIC COMMANDS

    <br><br>

    hello<br>
    hi<br>
    help<br>
    status<br>
    time<br>
    date<br>
    clear<br>
    /system<br>
    /network<br>
    /security<br>
    /memory<br>
    /cpu<br>
    SYSTEM
    <br>
    /lock<br>
    /reboot<br>
    /shutdown<br>
    /version<br>
    /about<br>

    </p>
    `;
    break;


case "status":

    speak("All systems are operating normally.");

    terminal.innerHTML += `
    <p>

    AI Core :
    <span style="color:#00ff66;">ACTIVE</span>

    <br>

    Security :
    ENABLED

    <br>

    Network :
    CONNECTED

    </p>
    `;
    break;


case "time":

    terminal.innerHTML += `
    <p>

    ${new Date().toLocaleTimeString()}

    </p>
    `;

    speak("The current time is " +
    new Date().toLocaleTimeString());

    break;


case "date":

    terminal.innerHTML += `
    <p>

    ${new Date().toDateString()}

    </p>
    `;
    break;


case "clear":

    terminal.innerHTML = `
    <p>

    Welcome back Player.

    </p>

    <p>

    Type help for commands.

    </p>
    `;

    input.value="";

    return;
        // ==============================
// ENGINEER COMMANDS
// ==============================

case "/engineer":

    requestEngineerAccess();

    return;

case "/scan":

    speak("Scanning systems.");

    terminal.innerHTML += `
    <p>

    SYSTEM SCAN

    <br><br>

    ███████████████ 100%

    <br><br>

    Threats : NONE

    <br>

    Firewall : ACTIVE

    <br>

    Encryption : ENABLED

    </p>
    `;
    break;


case "/diagnostics":

    speak("Running diagnostics.");

    terminal.innerHTML += `
    <p>

    DIAGNOSTIC REPORT

    <br><br>

    CPU ............ OK

    <br>

    MEMORY ......... OK

    <br>

    STORAGE ........ OK

    <br>

    NETWORK ........ OK

    <br>

    AI CORE ........ ACTIVE

    <br><br>

    RESULT :

    NO ERRORS FOUND

    </p>
    `;
    break;


case "/core":

    speak("Crimson Core online.");

    terminal.innerHTML += `
    <p>

    CRIMSON CORE

    <br><br>

    STATUS :

    ONLINE

    <br>

    OUTPUT :

    100%

    <br>

    TEMPERATURE :

    NORMAL

    </p>
    `;
    break;


case "/reactor":

    speak("Reactor stable.");

    terminal.innerHTML += `
    <p>

    REACTOR STATUS

    <br><br>

    ENERGY OUTPUT :

    100%

    <br>

    STABILITY :

    PERFECT

    <br>

    POWER CELL :

    CHARGED

    </p>
    `;
    break;


case "/network":

    terminal.innerHTML += `
    <p>

    NETWORK

    <br><br>

    CONNECTED

    <br>

    SIGNAL :

    EXCELLENT

    <br>

    LATENCY :

    73 ms

    </p>
    `;
    break;


case "/security":

    terminal.innerHTML += `
    <p>

    SECURITY

    <br><br>

    FIREWALL :

    ACTIVE

    <br>

    ENCRYPTION :

    ENABLED

    <br>

    THREAT LEVEL :

    LOW

    </p>
    `;
    break;


case "/memory":

    terminal.innerHTML += `
    <p>

    MEMORY

    <br><br>

    USED :

    68%

    <br>

    AVAILABLE :

    32%

    </p>
    `;
    break;


case "/cpu":

    terminal.innerHTML += `
    <p>

    CPU

    <br><br>

    LOAD :

    23%

    <br>

    TEMPERATURE :

    41°C

    </p>
    `;
    break;


case "/system":

    terminal.innerHTML += `
    <p>

    ETERNAL

    <br>

    Crimson Core OS

    <br>

    Version 4.0

    <br>

    STATUS :

    ONLINE

    </p>
    `;
    break;
        // ==============================
// SYSTEM COMMANDS
// ==============================

case "/lock":

    speak("System locked.");

    showLogin();

    return;


case "/reboot":

    speak("Reboot sequence initiated.");

    showBoot();

    return;


case "/shutdown":

    speak("Goodbye Player.");

    app.innerHTML = `

    <div class="screen">

        <div class="logo">
            SYSTEM OFFLINE
        </div>

        <div class="subtitle">
            POWERING DOWN...
        </div>

    </div>

    `;

    return;


case "/version":

    terminal.innerHTML += `
    <p>

    ETERNAL Crimson Core

    <br>

    Version : 4.0

    <br>

    Build : Stable

    </p>
    `;
    break;


case "/about":

    terminal.innerHTML += `
    <p>

    ETERNAL Crimson Core

    <br><br>

    Created By

    Player

    <br><br>

    AI Operating System

    </p>
    `;
    break;


case "/override":

    speak("Security override accepted.");

    terminal.innerHTML += `
    <p style="color:red;">

    SECURITY OVERRIDE

    ACCEPTED

    </p>
    `;
    break;


case "/protocol":

    terminal.innerHTML += `
    <p>

    AVAILABLE PROTOCOLS

    <br><br>

    MK-I

    <br>

    MK-II

    <br>

    MK-III

    <br>

    CRIMSON

    <br>

    OMEGA

    </p>
    `;
    break;


case "/omega":

    speak("Warning. Omega protocol locked.");

    terminal.innerHTML += `
    <p style="color:red;">

    WARNING

    <br><br>

    OMEGA PROTOCOL

    LOCKED

    </p>
    `;
    break;


case "/reactivate":

    speak("Systems reactivated.");

    terminal.innerHTML += `
    <p style="color:#00ff66;">

    ALL SYSTEMS

    ONLINE

    </p>
    `;
    break;


// ==============================
// SECRET COMMANDS
// ==============================

case "/godmode":

    speak("God mode activated.");

    terminal.innerHTML += `
    <p style="color:#ff0000;">

    GOD MODE

    ACTIVATED

    </p>
    `;
    break;


case "/debug":

    terminal.innerHTML += `
    <p>

    DEBUG MODE

    ENABLED

    </p>
    `;
    break;


case "/kernel":

    terminal.innerHTML += `
    <p>

    Crimson Kernel

    <br>

    Version 7.0.1

    </p>
    `;
    break;


case "/neural":

    terminal.innerHTML += `
    <p>

    Neural Engine

    ONLINE

    <br>

    Learning Enabled

    </p>
    `;
    break;

        // ==============================
// SECRET COMMANDS
// ==============================

case "/matrix":

    speak("Matrix mode activated.");

    terminal.innerHTML += `
    <p style="color:#00ff00;">

    MATRIX MODE

    ENABLED

    </p>
    `;
    break;


case "/crimson":

    speak("Crimson theme activated.");

    document.body.style.background = "#120000";

    terminal.innerHTML += `
    <p style="color:red;">

    CRIMSON THEME

    ACTIVATED

    </p>
    `;
    break;


case "/emergency":

    speak("Emergency mode activated.");

    terminal.innerHTML += `
    <p style="color:red;">

    ███████████████

    EMERGENCY MODE

    ███████████████

    </p>
    `;

    document.body.style.animation = "flashRed .5s infinite";

    break;


case "/selfdestruct":

    speak("Warning. Self destruct sequence initiated.");

    let count = 10;

    terminal.innerHTML += `
    <p style="color:red;" id="countdown">

    SELF DESTRUCT IN

    10

    </p>
    `;

    let timer = setInterval(function(){

        count--;

        const cd = document.getElementById("countdown");

        if(cd){

            cd.innerHTML = `
            SELF DESTRUCT IN

            <br><br>

            ${count}
            `;

        }

        if(count<=0){

            clearInterval(timer);

            speak("Self destruct cancelled.");

            terminal.innerHTML += `
            <p style="color:#00ff66;">

            SEQUENCE CANCELLED

            </p>
            `;

        }

    },1000);

    break;


// ==============================
// DEFAULT
// ==============================

default:

    speak("Unknown command.");

    terminal.innerHTML += `
    <p style="color:red;">

    UNKNOWN COMMAND

    </p>
    `;

}

// Always scroll terminal
terminal.scrollTop = terminal.scrollHeight;

// Clear input
input.value = "";

}