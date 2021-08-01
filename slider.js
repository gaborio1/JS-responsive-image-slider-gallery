// THIS IS BASED ON:
// "AWESOME VANILLA JAVASCRIPT IMAGE SLIDER" BY DEV ED
// https://www.youtube.com/watch?v=ee8y1IV6pOI&t=1396s

// THIS NOW CAN HANDLE MULTIPLE SLIDER DIVS:

const sliders = document.querySelectorAll(".slider");
const befores = document.querySelectorAll(".before");
const containers = document.getElementsByClassName("img-slider-container");

const changeWidth = (element, newWidth) => {
    element.style.width = newWidth + "px";
}

const changeLeftPosition = (element, imgWidth = 0, pixels = 0) => {
    element.style.left = imgWidth + pixels + "px";
}

for (let i = 0; i < containers.length; i++) {

    containers[i].addEventListener("mousemove", (event) => {
        let xPos = event.layerX;
        let divWidth = containers[i].offsetWidth;
        let currentDiv = befores[i];
        let currentSlider = sliders[i];
        
        changeWidth(currentDiv, xPos);

        sliders[i].style.left = xPos + "px";
        if (xPos < 10) {
            changeWidth(currentDiv, 0);
            changeLeftPosition(currentSlider, divWidth, (-1-divWidth));
        }
        if(xPos + 10 > divWidth) {
            changeWidth(currentDiv, divWidth);
            changeLeftPosition(currentSlider, divWidth, 1);
        }
    }, false);
}

// ==================== COMMENTS ====================

// // GRAB ALL CONTAINERS/BEFORES/SLIDERS
// const sliders = document.querySelectorAll(".slider");
// const befores = document.querySelectorAll(".before");
// const containers = document.getElementsByClassName("container");
// // CHANGE WIDTH AS CURSOR MOVES HORIZONTALLY newWidth => xPos
// const changeWidth = (element, newWidth) => {
//     element.style.width = newWidth + "px";
// }
// // CHANGE X POSITION OF SLIDER AS CUSROR MOVES HORIZONTALLY
// const changeLeftPosition = (element, imgWidth = 0, pixels = 0) => {
//     element.style.left = imgWidth + pixels + "px";
// }
// // LOOP THROUGH IMAGE CONTAINERS
// for (let i = 0; i < containers.length; i++) {

//     // ASSIGN CORRESPONDING DIVS/SLIDERS TO CURRENT CONTAINER
//     containers[i].addEventListener("mousemove", (event) => {
//         let xPos = event.layerX;
//         let divWidth = containers[i].offsetWidth;
//         let currentDiv = befores[i];
//         let currentSlider = sliders[i];
//         changeWidth(currentDiv, xPos);
//         // IF SLIDER IS CLOSE TO LEFT/RIGHT EDGE, HIDE IT BY RE-POSITIONING +/- 1px RELATIVE TO CONTAINER
//         sliders[i].style.left = xPos + "px";
//         if (xPos < 10) {
//             changeWidth(currentDiv, 0);
//             changeLeftPosition(currentSlider, divWidth, (-1-divWidth));
//         }
//         if(xPos + 10 > divWidth) {
//             changeWidth(currentDiv, divWidth);
//             changeLeftPosition(currentSlider, divWidth, 1);
//         }
//     }, false);
// }


// *** layerX: ***
// The UIEvent.layerX read-only property returns the horizontal coordinate of the event relative to the current layer.

// This property takes scrolling of the page into account and returns a value relative to the whole of the document unless the event occurs inside a positioned element, where the returned value is relative to the top left of the positioned element.


// *** offsetWidth: ***
// The offsetWidth property returns the viewable width of an element in pixels, including padding, border and scrollbar, but not the margin.

