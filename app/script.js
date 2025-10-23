const input = document.querySelector(".rounded-input");
const arrow = document.querySelector(".arrow");
const infoEls = document.querySelectorAll(".info");

// setting up the map
const map = L.map("map").setView([28.6448, 77.2167], 13);
L.tileLayer(
  "https://api.maptiler.com/maps/topo-v2-dark/{z}/{x}/{y}.png?key=ZgRtdXQAOqmqIIucoNwZ",
  {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }
).addTo(map);

let marker = null;

// Map-Recenter button 
const recenterBtn = document.querySelector(".recenter-btn");

recenterBtn.addEventListener("click", () => {
  if (marker) {
    const pos = marker.getLatLng();
    map.flyTo(pos, 15);
  } else {
    alert("No location marker available yet!");
  }
});

// getting data from geo.ipfy api
async function fetchIPData(query = "") {
  const apiKey = "at_ZA3HovzvtVsZVNIphIhfQ2baREF49"; // Replace with your IPify API key

  // Decides which parameter to use (IP or domain)
  let param = "";
  const ipRegex = /^(\d{1,3}\.){3}\d{1,3}$/;
  if (ipRegex.test(query)) {
    param = `ipAddress=${encodeURIComponent(query)}`;
  } else if (query) {
    param = `domain=${encodeURIComponent(query)}`;
  }

  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&${param}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (res.status !== 200 || data.code === 422 || data.messages) {
      alert("Invalid IP or domain entered.");
      return;
    }

    updateInfo(data);
  } catch {
    alert("Failed to fetch IP data. Check your connection or API key.");
  }
}

// updating page and map
function updateInfo(data) {
  infoEls[0].innerText = data.ip;
  infoEls[1].innerText = `${data.location.city}, ${data.location.region}, ${data.location.country}`;
  infoEls[2].innerText = `UTC ${data.location.timezone}`;
  infoEls[3].innerText = data.isp;

  const { lat, lng } = data.location;
  map.flyTo([lat, lng], 13);

  if (marker) map.removeLayer(marker);

  marker = L.marker([lat, lng])
    .addTo(map)
    .bindPopup(
      `${data.location.city}, ${data.location.region}, ${data.location.country}`
    )
    .openPopup();
}

// handling search actions
function handleSearch() {
  const ip = input.value.trim();
  fetchIPData(ip);
}

arrow.addEventListener("click", handleSearch);
document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") handleSearch();
});

//loading user's IP on startup
fetchIPData();
