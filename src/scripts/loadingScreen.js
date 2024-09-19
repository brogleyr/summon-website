
function loadScreen(url) {
  console.log("loading!");
  let id = null;
  const elem = document.getElementById("loadingDiv");   
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 20);
  function frame() {
    if (pos >= window.innerHeight) {
      clearInterval(id);
      window.open(url, "_self");
    } else {
      pos += Math.floor(Math.pow(Math.random(), 5) * 50);
      elem.style.height = pos + "px"; 
    }
  }
}