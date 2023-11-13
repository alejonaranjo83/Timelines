// alert("Checking that JS is working");

const cover = document.querySelector(".cover");
const mainTL = document.querySelector(".main-grid");
const mainTLaside = document.querySelector(".aside-grid")
const personalTL = document.querySelector(".personal");
const future = document.querySelector("future-think");


// mainTL.style.display = "none"

// mainTLaside.style.display = "none"



// Creating class instance with ROR:
class Milestone {
    constructor({
        name,
        year,
        percentage,
        descrip,
        image,
    }) {
        this.name = name;
        this.year = year;
        this.percentage = percentage;
        this.descrip = descrip;
        this.image = image;
    }
}