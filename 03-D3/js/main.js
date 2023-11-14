alert("Js is working")

const svg = d3.select("#d3-tl1").append("svg")
    .attr("width", "100%") //dimensions will be restricted to what was defined with CSS grid
    .attr("height", "100%")

d3.dsv(";", "data/tl1.csv").then(data => { //because the data is not separated with "," but with ";" it will be used the "dsv" format
    data.forEach(d => {
        const timeValue = Number(d.Time.replace(',', '.')); //converting the decimal separator from ',' to '.'

        // Converting the values from the "Time" column
        if (!isNaN(timeValue)) {
            d.Time = timeValue;
        } else {
            console.warn("Unable to convert ${d.Time} to a number")
        }

        // Converting the values from the "Percentage" column
        const timePercent = Number(d.Percentage.replace(',', '.'));
        if (!isNaN(timePercent)) {
            d.Percent = timePercent;
        } else {
            console.warn("Unable to convert ${d.Percent} to a number")
        }
    })
    console.log(data)
})