// Example Javascript File with ES6 support
import {whoAmI} from "./imports"

const me = whoAmI()

console.log("Hello world! I'm " + me)
console.log("Find me in src/js/scripts.js")

document.addEventListener('DOMContentLoaded', function() {
  const categoryNav = document.querySelector('select');

  categoryNav.addEventListener('change', function(e) {
    window.location.pathname = e.target.value
  });
})
