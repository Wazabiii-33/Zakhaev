document.addEventListener("DOMContentLoaded", () => {
  const logArea = document.createElement("section");
  logArea.className = "card";
  logArea.id = "scp-log-area";
  logArea.innerHTML = `
    <h2>📄 Journaux d’intervention SCP</h2>
    <div id="log-entries"></div>
    <button onclick="addLog()" style="margin-top:1rem;padding:0.4rem 0.8rem;background:#21f3ff;color:#000;border:none;border-radius:5px;font-family:'Share Tech Mono';cursor:pointer;">+ Ajouter un log</button>
  `;
  document.querySelector("main")?.appendChild(logArea);
});

function addLog() {
  const container = document.getElementById("log-entries");
  const entry = document.createElement("div");
  entry.style.marginTop = "1rem";
  entry.style.padding = "0.8rem";
  entry.style.border = "1px dashed var(--accent)";
  entry.style.borderRadius = "6px";
  entry.innerHTML = `
    <strong>Agent Zakhaev</strong> a engagé <em>SCP-${randomID()}</em> dans la Zone-${randomZone()}<br>
    <small>${new Date().toLocaleString()}</small>
  `;
  container?.appendChild(entry);
}

function randomID() {
  const ids = ["354", "682", "058", "173", "049", "106"];
  return ids[Math.floor(Math.random() * ids.length)];
}

function randomZone() {
  const zones = [12, 17, 23, 43, 52, "Pytheas"];
  return zones[Math.floor(Math.random() * zones.length)];
}