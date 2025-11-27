<div align="center">
  <h1>IPNOMAD</h1>
  <br/> <!-- Badges Row --> <img src="https://img.shields.io/badge/-HTML5-black?style=for-the-badge&logo=html5&logoColor=white&color=E34F26" /> <img src="https://img.shields.io/badge/-CSS3-black?style=for-the-badge&logo=css3&logoColor=white&color=1572B6" /> <img src="https://img.shields.io/badge/-JavaScript-black?style=for-the-badge&logo=javascript&logoColor=white&color=F7DF1E" /> <img src="https://img.shields.io/badge/-Leaflet_JS-black?style=for-the-badge&logo=leaflet&logoColor=white&color=199900" /> <img src="https://img.shields.io/badge/-Geo.IPify_API-black?style=for-the-badge&logo=api&logoColor=white&color=6A5ACD" /> <img src="https://img.shields.io/badge/-MapTiler-black?style=for-the-badge&logo=mapbox&logoColor=white&color=00C8FF" /> <img src="https://img.shields.io/badge/-Vercel_Deployment-black?style=for-the-badge&logo=vercel&logoColor=white&color=000000" />
  <br/><br/>
  <p>A lightweight, fast, and interactive tool to track IP addresses and visualize their exact geolocation on a dynamic map.</p>
</div>

---

## 📍 Overview

IPNOMAD is a browser-based IP Address Tracker that retrieves real-time geolocation details such as:
- City
- Region
- Country
- Latitude / Longitude
- Timezone
- ISP

It uses the Geo.IPify API to fetch IP data and Leaflet.js + MapTiler to visualize the location on a fully interactive map — complete with custom markers, smooth animations, and multiple map styles.

---




---

## 🌐 Live Demo
[IPNOMAD](https://ip-nomad.vercel.app/)

---

## 📌 Features

- 🔍 Search any IP Address or Domain Name
- 📡 Auto-detects the user's own IP on page load
- 🗺️ Dynamic map visualization using Leaflet.js
- 🎯 Custom marker showing exact geolocation
- 🎨 Multiple map styles (Dark, Streets, Satellite, Vector)
- ➕ Recenter button for quick navigation
- ⚡ Fast, responsive, and fully client-side
- 🧩 No backend or database required

--- 

## 🛠️ Tech Stack

- Frontend - HTML, CSS, JavaScript
- API	- Geo.IPify Geolocation API
- Maps - Leaflet.js, MapTiler Tiles
- Deployment - Vercel

---

## 📡 How It Works

I) User enters an IP or domain

II) JavaScript sends a request to the Geo.IPify API

III) The API returns JSON containing:
- City, Region, Country
- Latitude & Longitude
- Timezone
- ISP

IV) Leaflet.js takes the coordinates

V) Map flies to that location and places a marker

VI) UI updates instantly with the fetched details

---

## 📂 Folder Structure

```
IPNOMAD/
  ├── app/
      ├── index.html
      ├── style.css
      ├── script.js
      └── assets/
```

---

## ⚙️ Setup Instructions (Local Development)

1. Clone the repo
``` git clone https://github.com/your-username/ipnomad.git ```

```cd ipnomad```

3. Add Your API Key

Open script.js and replace:
  
```const apiKey = "YOUR_API_KEY";```

Get your key from:
🔗 https://geo.ipify.org

3. Run the project

Just open ```index.html``` in your browser OR use Live Server.

---

#### 👨‍💻 Author: [Abhinab Nath](https://github.com/abhinab-nath/)

<img src="https://img.shields.io/badge/-MIT_License-black?style=for-the-badge&logo=bookstack&logoColor=white&color=019B8F" alt="MIT License" />

---
