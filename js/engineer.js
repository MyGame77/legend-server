// ==============================
// ETERNAL Crimson Core v5.0
// engineer.js
// ==============================

function showEngineerMode() {

    app.innerHTML = `
        <div class="screen">

            <div class="logo">ETERNAL</div>

            <div class="subtitle">ENGINEER MODE</div>

            <div class="box" id="engineerTerminal">

                <p>══════════════════════════════════════</p>
                <p>ENGINEER MODE ACTIVATED</p>
                <p>══════════════════════════════════════</p>

                <br>

                <p>Authentication Successful.</p>
                <p>Welcome, Engineer.</p>

                <br>

                <p>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>
                <p>CPU        : ████████░░ 38%</p>
                <p>MEMORY     : ██████░░░░ 68%</p>
                <p>STORAGE    : █████████░ 91%</p>
                <p>NETWORK    : ● CONNECTED</p>
                <p>AI CORE    : ● ACTIVE</p>
                <p>SECURITY   : ● ENABLED</p>
                <p>BATTERY    : ● STABLE</p>
                <p>VOLTAGE    : 4.98V</p>
                <p>TEMPERATURE: 36°C</p>

                <br>

                <p>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>
                <p>SECRET COMMANDS</p>
                <p>━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━</p>

                <p>/logs</p>
                <p>/scan</p>
                <p>/hardware</p>
                <p>/debug</p>
                <p>/reboot</p>

            </div>

            <button id="returnBtn">RETURN</button>

        </div>
    `;

    document.getElementById("returnBtn").onclick = function () {
        showDashboard();
    };

}