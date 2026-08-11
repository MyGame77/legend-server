// ==============================
// ETERNAL Crimson Core v7.0
// dashboard.js
// ==============================

function showDashboard() {
  app.innerHTML = `

    <div class="screen">

        <div class="logo">
            ETERNAL
        </div>

        <div class="subtitle">
            STATUS :
            <span style="color:#00ff66;">
                ONLINE
            </span>
        </div>

        <div class="subtitle">
            TIME :
            <span id="clock">
                00:00:00
            </span>
        </div>

        <!-- AI Reactor -->

        <div class="aiContainer">

            <div class="outerRing"></div>

            <div class="middleRing"></div>

            <div class="innerCore">
                ETERNAL
            </div>

        </div>

        <!-- Terminal -->

        <div id="terminal">

            <p>Welcome back, Player.</p>

            <p>Type <b>help</b> or say <b>Hey Jarvis</b>.</p>

        </div>

        <!-- Command -->

        <div class="commandRow">

            <input
                id="command"
                type="text"
                placeholder="Enter command...">

            <button id="sendBtn">
                SEND
            </button>

        </div>

    </div>

    `;

  // Start Clock
  startClock();

  // Start Voice Recognition
  if (typeof startVoice === "function") {
    startVoice();
  }

  // Send Button
  document.getElementById("sendBtn").onclick = processCommand;

  // Enter Key
  document.getElementById("command").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      processCommand();
    }
  });
}
