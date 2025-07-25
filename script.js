async function init() {
  try {
    const res = await fetch("https://ipapi.co/json/");
    const data = await res.json();

    document.getElementById("ip").textContent = data.ip || "-";
    document.getElementById("country").textContent = data.country_name || "-";
    document.getElementById("city").textContent = data.city || "-";
    document.getElementById("postal").textContent = data.postal || "-";
    document.getElementById("org").textContent = data.org || "-";

    const lat = data.latitude || 0;
    const lon = data.longitude || 0;

    const map = L.map("map").setView([lat, lon], 10);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 18,
      attribution:
        '© OpenStreetMap contributors',
    }).addTo(map);

    L.marker([lat, lon]).addTo(map).bindPopup(`Vous êtes ici: ${data.city}, ${data.country_name}`).openPopup();
  } catch (err) {
    console.error("Erreur chargement IP:", err);
    document.getElementById("ip").textContent = "Erreur de récupération";
  }
}

window.onload = init;
