// # DOMosaur Extiction

// ## Introduction

// We will be developing code to transform a JavaScript-less webpage found at [this link](https://domosaur.surge.sh) into a highly interactive version accessible [here](https://domosaur-solution.surge.sh).

// ## Project Specifications

// * This project will exclusively involve JavaScript. While you are free to reference the CSS and HTML files, all modifications and work should occur in the `main.js` file.

// ## Warmup Challenges

// No need to set up event listeners for these tasks; they are designed to strengthen your querySelector skills:
const mess = document.querySelector(".mess-with-me")
// 1. Adjust the font size of the span with the class `mess-with-me` to 40 pixels.
mess.style.fontSize = "40px"
// 2. Modify the paragraph with the class `mess-with-me` to have a green background.
document.querySelector(".mess-with-me").style.backgroundColor = "green"
// 3. Conceal the second dinosaur's image, rendering it invisible while causing the space below it to adjust accordingly. If you're uncertain about the method to achieve this, you can look up the CSS rule to hide an element.
const images = document.querySelectorAll("img")
images[1].style.display = "none"
// 4. Resize the first dinosaur image to be 324 pixels in width.
images[0].style.width = "324px"
// ## Event Listener Challenges

// 1. Apply an event listener to the span with the class `mess-with-me` such that when clicked, the font color transitions to orange.
mess.addEventListener("click",()=>{
    mess.style.color = "orange"
})
// 2. Attach an event listener to the first dinosaur, so that clicking it results in a red border.
images[0].addEventListener("click",()=>{
    images[0].style.border = "red solid 1px"
})
// 3. Assign an event listener to the feathered dinosaur, causing it to become 50% transparent upon clicking.
images[3].addEventListener("click", ()=>{
    images[3].style.opacity = ".5"
}
)
// 4. Implement an event listener for the "Switch Background Color" button that, upon clicking, alters the background color of the row of dinosaurs to a color of your preference.
let count = 0
document.querySelector("#toggle").addEventListener("click",()=>{
    if(count === 0){
    document.querySelector("#row").style.backgroundColor = "blue"
    count ++
    } else {
        document.querySelector("#row").style.backgroundColor = "white"
        count = 0
    }
})
// 5. Establish an event listener for the dinosaur with the ID `biggify`, ensuring that when HOVERED, the image expands to a width of 200 pixels. Note that this requires a different event type, so some research may be necessary to determine the correct event.
document.querySelector('#biggify').addEventListener("mouseover",()=>{
    document.querySelector("#biggify").style.width = "200px"
})
// ## Stretch Goals

// 1. Enable the "Switch Background Color" button to toggle between white and your chosen color upon clicking. This modification can be achieved by reworking the function used in your existing event listener. **Hint:** If you haven't explicitly set the background color **via JavaScript**, its value will always be an empty string, regardless of any prior settings from other sources.

// 2. Introduce a new event listener that reverts the `biggify` dinosaur back to its original size when it is no longer being hovered. **Hint:** This action is similar to the previous one, but focuses on the width. **Hint 2:** You'll need to use a different type of event, though the name is somewhat related.
document.querySelector('#biggify').addEventListener("mouseout",()=>{
    document.querySelector("#biggify").style.width = "162px"
})