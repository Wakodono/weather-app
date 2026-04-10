# Weather app — planning & progress

**Course:** [The Odin Project — Project: Weather App](https://www.theodinproject.com/lessons/node-path-javascript-weather-app#assignment)

---

## Where you are now

**Step 4 done. Next: Step 5 (display on page).**

| Step  | TOP assignment                                                        | Status                                                               |
| ----- | --------------------------------------------------------------------- | -------------------------------------------------------------------- |
| **1** | Blank HTML + links to JS and CSS                                      | Done                                                                 |
| **2** | Functions that hit the API (`location` → data); `console.log` for now | Done                                                                 |
| **3** | Process JSON → return an object with only the fields you need         | Done — `buildForecast` returns `forecast` for the UI                 |
| **4** | Form: user enters location → fetch (still `console.log` OK)           | Done — submit → `await getWeather` → `buildForecast` → `console.log` |
| **5** | Display weather on the page                                           | **Next**                                                             |
| **6** | Styling                                                               | Partial (`style.css` + form in HTML)                                 |
| **7** | Optional: loading state while fetching                                | Not started                                                          |
| **8** | Push to GitHub + share                                                | Not started                                                          |

**Stretch (TOP mentions):** Fahrenheit/Celsius toggle, background or images by weather, optional Giphy API.

---

## Next actions (pick one block at a time)

### Step 3 (done)

- [x] `buildForecast` **returns** the `forecast` object.
- [ ] Optional later: add a few forecast days from `data.days` for the UI.

### Step 4 (done)

- [x] `<form>` with text input (location) + submit.
- [x] On submit: `preventDefault`, read input, `await getWeather` then `buildForecast`.
- [x] Logging forecast / data in console.

### Step 5

- [ ] Add DOM elements (or create them in JS) for location, temp, conditions, etc.
- [ ] After `buildForecast`, write those values into the DOM.

### Later

- [ ] Step 6: layout + polish CSS.
- [ ] Step 7: show/hide “Loading…” during fetch.
- [ ] Step 8: commit, push, post solution.

---

## Quick reference — lesson order

1. HTML scaffold
2. Fetch API
3. Process JSON
4. Form + fetch
5. **Render to page** ← you are here
6. Style
7. (Optional) Loading
8. GitHub

Update the checkboxes above as you go so you always know the next step.
