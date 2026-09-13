# Wako Weather

A simple web app where you type a place name and see the current temperature (in °C), location label, and sunset time. Built as a learning project while working through [The Odin Project](https://www.theodinproject.com/) (JavaScript path).

---

## Try it live

**[Open the live site](https://Wakodono.github.io/weather-app/)** — works in the browser; no install needed.

If that link 404s, enable **GitHub Pages** on this repo (`Settings → Pages → Branch: main, folder: / (root)`) and refresh after the first deploy.

---

## What this is (in plain English)

Weather data comes from an online service ([Visual Crossing Timeline Weather API](https://www.visualcrossing.com/weather-api)). The page asks that service for a forecast, then shows a few details on screen. You do not need to know programming to use the demo—just enter a city or place and search.

---

## What you can do

- Search for a location and see **resolved place name**, **temperature (°C)**, and **sunset time**
- After a successful search, the form hides so the result stays in focus (you can tweak this later if you want “search again”)

---

## Preview

![Screenshot of the weather app showing location, temperature in Celsius, and sunset time](./Screenshot%202026-04-12%20at%2018.04.48.png)

---

## Built with

- HTML, CSS, and **vanilla JavaScript** (no framework)
- **`fetch`** and **`async` / `await`** to call the weather API
- **DOM** updates to show data on the page

---

## Run it on your machine

1. Clone this repository (or download the ZIP).
2. Open the project folder. Because the app uses `fetch`, use a **local dev server** (for example VS Code “Live Server”) instead of double‑clicking `index.html`, so the browser allows the API request.
3. Optional: add your own Visual Crossing API key in `index.js` if you fork the project—keep keys out of public repos when you can; this pattern is fine for learning, but treat keys as sensitive in real apps.

---

## Project status

Personal portfolio / coursework piece. Feedback and suggestions are welcome.

---

## Acknowledgements

- Weather data: [Visual Crossing](https://www.visualcrossing.com/)
- Curriculum: [The Odin Project — Weather App](https://www.theodinproject.com/lessons/node-path-javascript-weather-app)
