// alert("Js is working")

// Timeline 1 (13.8B)
const svg = d3.select("#d3-tl1").append("svg")
    .attr("width", "100%") //dimensions will be restricted to what was defined with CSS grid
    .attr("height", "100%")

d3.dsv(";", "data/tl1.csv").then(data => { //because the data is not separated with "," but with ";" it will be used the "dsv" format
    data.forEach(d => {
        // Converting the values from the "Time" column
        const timeValue = Number(d.Time.replace(',', '.')); //converting the decimal separator from ',' to '.'

        // Checking if the conversion was done right
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

    const xScalePercent = d3.scaleLinear()
        .domain([0, 1]) // Assuming percentages range from 0 to 1
        .range([0, "100%"]); // Adjust width according to the maximum length of the timeline

    // Creating lines
    const lines = svg.selectAll("line")
        .data(data)

    lines.enter().append("line")
        .attr("x1", d => xScalePercent(d.Percent)) // Adjust distance as a function of "Percent"
        .attr("y1", 0)
        .attr("x2", d => xScalePercent(d.Percent))
        .attr("y2", "100%")
        .attr("stroke", "#797878")
        .attr("stroke-width", 2)
        .attr("stroke-dasharray", (6,5));
})



// Timeline 2 (1.2B)
const svg2 = d3.select("#d3-tl2").append("svg")
    .attr("width", "100%") //dimensions will be restricted to what was defined with CSS grid
    .attr("height", "100%")

d3.dsv(";", "data/tl2.csv").then(data2 => { //because the data is not separated with "," but with ";" it will be used the "dsv" format
    data2.forEach(da2 => {
        // Converting the values from the "Time" column
        const timeValue = Number(da2.Time.replace(',', '.')); //converting the decimal separator from ',' to '.'

        // Checking if the conversion was done right
        if (!isNaN(timeValue)) {
            da2.Time = timeValue;
        } else {
            console.warn("Unable to convert ${d.Time} to a number")
        }

        // Converting the values from the "Percentage" column
        const timePercent = Number(da2.Percentage.replace(',', '.'));
        if (!isNaN(timePercent)) {
            da2.Percent = timePercent;
        } else {
            console.warn("Unable to convert ${d.Percent} to a number")
        }
    })

    console.log(data2)

    const xScalePercent = d3.scaleLinear()
        .domain([0, 1]) // Assuming percentages range from 0 to 1
        .range([0, "100%"]); // Adjust width according to the maximum length of the timeline

    // Creating lines
    const lines2 = svg2.selectAll("line")
        .data(data2)

    lines2.enter().append("line")
        .attr("x1", da2 => xScalePercent(da2.Percent)) // Adjust distance as a function of "Percent"
        .attr("y1", 0)
        .attr("x2", da2 => xScalePercent(da2.Percent))
        .attr("y2", "100%")
        .attr("stroke", "#797878")
        .attr("stroke-width", 2)
        .attr("stroke-dasharray", (6,5))
})



// Timeline 3 (250K)
const svg3 = d3.select("#d3-tl3").append("svg")
    .attr("width", "100%") //dimensions will be restricted to what was defined with CSS grid
    .attr("height", "100%")

d3.dsv(";", "data/tl3.csv").then(data3 => { //because the data is not separated with "," but with ";" it will be used the "dsv" format
    data3.forEach(da3 => {
        // Converting the values from the "Time" column
        const timeValue = Number(da3.Time.replace(',', '.')); //converting the decimal separator from ',' to '.'

        // Checking if the conversion was done right
        if (!isNaN(timeValue)) {
            da3.Time = timeValue;
        } else {
            console.warn("Unable to convert ${d.Time} to a number")
        }

        // Converting the values from the "Percentage" column
        const timePercent = Number(da3.Percentage.replace(',', '.'));
        if (!isNaN(timePercent)) {
            da3.Percent = timePercent;
        } else {
            console.warn("Unable to convert ${d.Percent} to a number")
        }
    })

    console.log(data3)

    const xScalePercent = d3.scaleLinear()
        .domain([0, 1]) // Assuming percentages range from 0 to 1
        .range([0, "100%"]); // Adjust width according to the maximum length of the timeline

    // Creating lines
    const lines3 = svg3.selectAll("line")
        .data(data3)

    lines3.enter().append("line")
        .attr("x1", da3 => xScalePercent(da3.Percent)) // Adjust distance as a function of "Percent"
        .attr("y1", 0)
        .attr("x2", da3 => xScalePercent(da3.Percent))
        .attr("y2", "100%")
        .attr("stroke", "#797878")
        .attr("stroke-width", 2)
        .attr("stroke-dasharray", (6,5))
})



// Timeline 4 (12K)
const svg4 = d3.select("#d3-tl4").append("svg")
    .attr("width", "100%") //dimensions will be restricted to what was defined with CSS grid
    .attr("height", "100%")

d3.dsv(";", "data/tl4.csv").then(data4 => { //because the data is not separated with "," but with ";" it will be used the "dsv" format
    data4.forEach(da4 => {
        // Converting the values from the "Time" column
        const timeValue = Number(da4.Time.replace(',', '.')); //converting the decimal separator from ',' to '.'

        // Checking if the conversion was done right
        if (!isNaN(timeValue)) {
            da4.Time = timeValue;
        } else {
            console.warn("Unable to convert ${d.Time} to a number")
        }

        // Converting the values from the "Percentage" column
        const timePercent = Number(da4.Percentage.replace(',', '.'));
        if (!isNaN(timePercent)) {
            da4.Percent = timePercent;
        } else {
            console.warn("Unable to convert ${d.Percent} to a number")
        }
    })

    console.log(data4)

    const xScalePercent = d3.scaleLinear()
        .domain([0, 1]) // Assuming percentages range from 0 to 1
        .range([0, "100%"]); // Adjust width according to the maximum length of the timeline

    // Creating lines
    const lines4 = svg4.selectAll("line")
        .data(data4)

    lines4.enter().append("line")
        .attr("x1", da4 => xScalePercent(da4.Percent)) // Adjust distance as a function of "Percent"
        .attr("y1", 0)
        .attr("x2", da4 => xScalePercent(da4.Percent))
        .attr("y2", "100%")
        .attr("stroke", "#797878")
        .attr("stroke-width", 2)
        .attr("stroke-dasharray", (6,5))
})


// Pendiente
// 1. Eliminar primera marca de cada array para q no aparezca esa línea
// 2. Añadir texto en función de cada línea
// 3. Generar path que conecta timelines