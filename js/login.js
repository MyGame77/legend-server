// ==============================
// JARVIS Crimson Core v3.0
// login.js
// ==============================

const SYSTEM_PASSWORD = "port1011";

function showLogin() {
  app.innerHTML = `
        <div class="screen">

            <div class="logo">JARVIS</div>

            <div class="subtitle">Authentication Required</div>

            <input
                id="password"
                type="password"
                placeholder="Enter Password"
                autocomplete="off">

            <button id="loginBtn">LOGIN</button>

        </div>
    `;

  document.getElementById("loginBtn").onclick = login;

  document.getElementById("password").addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      login();
    }
  });
}

function login() {
  const password = document.getElementById("password").value;

  if (password !== SYSTEM_PASSWORD) {
    alert("ACCESS DENIED");

    document.getElementById("password").value = "";

    return;
  }

  showAccessGranted();
}

function showAccessGranted() {
  app.innerHTML = `
        <div class="screen">

            <div class="logo">ACCESS GRANTED</div>

            <div class="box" id="accessBox"></div>

        </div>
    `;

  const box = document.getElementById("accessBox");

  const lines = [
    "Verifying Credentials...",
    "Identity Confirmed",
    "Decrypting Security Keys...",
    "Loading Dashboard...",
    "Welcome back, Commander.",
  ];

  speak("Authentication successful.");

  let index = 0;

  const timer = setInterval(() => {
    box.innerHTML += lines[index] + "<br>";

    index++;

    if (index >= lines.length) {
      clearInterval(timer);

      setTimeout(() => {
        showDashboard();
      }, 1000);
    }
  }, 700);
}
