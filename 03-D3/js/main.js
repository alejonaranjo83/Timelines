// alert("Js is working")

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

//     const xScaleTime = d3.scaleLinear()
//         .domain([0, d3.max(data, d => d.Time)])
//         .range([0, width])

//     const xScalePercent = d3.scaleLinear()
//         .domain([0, 1])
//         .range([0, 500])


//     const rects = svg.selectAll("rect")
//         .data(data)

//     rects.enter().append("rect")
//         .attr("y", 0)
//         .attr("x", d => xScalePercent(d.Percent))
//         // .attr("x", 0)
//         // .attr("width", d => x(d.timeValue))
//         .attr("width", 200)
//         .attr("height", 150)
//         .attr("fill", "green")




    // Alternative for Chat GPT3

        // Define scales for the x-axis based on "Time" and "Percent" columns
        const xScaleTime = d3.scaleLinear()
        .domain([0, d3.max(data, d => d.Time)])
        .range([0, width]); // Adjust width according to your needs

        const xScalePercent = d3.scaleLinear()
        .domain([0, 1]) // Assuming percentages range from 0 to 1
        .range([0, width]); // Adjust width according to your needs

        // Create rectangles and set their x attribute
        svg.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        // .attr("x", d => xScaleTime(d.Time)) // Adjust for "Time"
        .attr("x", d => xScalePercent(d.Percent)) // Uncomment for "Percent"
        .attr("y", 0)
        .attr("width", 50)
        .attr("height", 120)
        .attr("fill", "green");

})