// get slider items | array.from [ES6 feature]

let sliderItems = Array.from(document.querySelectorAll(".slider-container img"));

// get number of slides 
let slidesCount = sliderItems.length;

// set current slide
let currentSlide = 1;

// slide number element
let sliderNumberElement = document.querySelector("#slide-number");

// previous and next buttons
let nextButton = document.querySelector("#next");
let prevButton = document.querySelector("#prev");


// handke cklick on next and prev buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;


// create the main ul elements
let paginationElement = document.createElement("ul");
paginationElement.setAttribute("id", "pagination-ul"); // => set id for ul

// create list elements based on slides count
for (let i = 1; i <= slidesCount; i++ ) {
    
    // create li element
    let paginationItem = document.createElement("li");

    // set custom attribute data-index
    paginationItem.setAttribute("data-index", i);

    // set item content
    paginationItem.appendChild(document.createTextNode(i));

    // append items to the main ul element
    paginationElement.appendChild(paginationItem);
}


// add the created ul element to the page
document.getElementById("indicators").appendChild(paginationElement);

// get the new created Ul
let paginationUl = document.getElementById("pagination-ul");

// pagination items
let paginationBullets = Array.from(document.querySelectorAll("#pagination-ul li"));

// loop through all pagination items
for (let i = 0; i < paginationBullets.length; i++) {
    paginationBullets[i].onclick = function() {
        currentSlide = parseInt(this.getAttribute("data-index"));
        theChecker()
    }
}


// trigger the checker function
theChecker();

// next slide function
function nextSlide() {
    if(nextButton.classList.contains("disapled")) {
        // do nothing
        return false;

    }else {
        currentSlide++;
        theChecker();
    }
}

// prev slide function
function prevSlide() {
    if(prevButton.classList.contains("disapled")) {
        // do nothing
        return false;

    }else {
        currentSlide--;
        theChecker();
    }
}

// create the checker function
function theChecker() {
    // set the slide number
    sliderNumberElement.textContent = "slide #" + (currentSlide) + ' of ' + slidesCount;

    // remove all active classes 
    removeActive()

    // set active class in current slide
    sliderItems[currentSlide - 1].classList.add("active");

    // add active class to the current pagination item
    paginationUl.children[currentSlide - 1].classList.add("active");

    // check if current slide is the first one
    if (currentSlide === 1) {
        // add disable class prev button
        prevButton.classList.add("disapled");
    } else {
        // remove disable class prev button
        prevButton.classList.remove("disapled");
    }
    // check if current slide is the last one
    if (currentSlide === slidesCount) {
    // add disable class prev button
    nextButton.classList.add("disapled");
    } else {
        // remove disable class prev button
        nextButton.classList.remove("disapled");
    }
}

// remove active class from images and pagination items
function removeActive() {
    // loop through all slides
    sliderItems.forEach((s) => {
        s.classList.remove("active");
    })
    // loop through all pagination items
    paginationBullets.forEach((li) => {
        li.classList.remove("active");
    })
}