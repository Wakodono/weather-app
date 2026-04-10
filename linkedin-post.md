# LinkedIn post — “Simple” scoping in my weather app

---

**Today’s comedy:** I thought I had the hard parts done (fetch, async/await, parsing JSON). Then JavaScript reminded me that **where** you write code matters just as much as **what** you write.

**The IIFE vs the form handler**

I wrapped `getWeather` in an async IIFE. Later I added a submit listener **outside** that IIFE and tried to call `getWeather` from there.

```js
// getWeather lives *inside* the IIFE
(async function weatherApp() {
  async function getWeather(location) {
    /* ... */
  }
})();

// listener runs in the outer scope — getWeather isn’t visible here
form.addEventListener("submit", () => {
  getWeather(location); // ReferenceError (until I moved the listener or the functions)
});
```

**The mystery `jsonData`**

I also had a stray line like `buildForecast(jsonData)` at the wrong level. `jsonData` only exists **inside** `getWeather` after `await response.json()`. No variable with that name in the outer scope — so: `ReferenceError: jsonData is not defined`. Deleting that line was the fix; the real flow is “get data, _then_ pass it to `buildForecast`.”

**The Promise I logged as a “forecast”**

And yes — I logged `getWeather(location)` without `await`, stared at a fulfilled **Promise** in the console, and wondered why my forecast object looked like the whole API response nested in `[[PromiseResult]]`. Async functions return Promises until you await them.

If you’re wiring forms to `fetch`, check **scope** (who can see which function), **where variables exist**, and **`await`** before you process the result. Saves a very silly afternoon.

#JavaScript #WebDev #LearningInPublic #AsyncAwait
