/**
 * When called, expands loadingDiv downward in random jumps to simulate a slow
 * page loading.
 * @param {string} url - The url of the link to follow after the animation finishes
 */
function loadScreen(url) {
  console.log("loading!");

  const loadingDiv = document.getElementById("loadingDiv");   

  let pos = 0;
  let id = null;
  clearInterval(id);

  // Calls scrollBg() every 20ms
  id = setInterval(scrollBg, 20);

  // Ex
  function scrollBg() {
    if (pos >= window.innerHeight) {
      clearInterval(id);
      if (url) {
        window.open(url, "_self");
      }
    } else {
      pos += Math.floor(Math.pow(Math.random(), 5) * 50);
      loadingDiv.style.height = pos + "px"; 
    }
  }
}

// Reloads the page when using history navigation. Added to reset loadingDiv.
window.addEventListener( "pageshow", function ( event ) {
  var perfEntries = performance.getEntriesByType("navigation");
  if (perfEntries[0].type === "back_forward") {
    location.reload();
  }
});
