const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")
const generateHtml=  (item) => {
    return `<div>${item}</div>`
}
planets.forEach(planet => {
    let html = generateHtml(planet);
    planetEl.innerHTML += html;
})

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

console.log(planets.map(planet => planet.charAt(0).toUpperCase() + planet.slice(1)))


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const EPlanets = planets.filter(planet => planet.includes('e'));
console.log(EPlanets)