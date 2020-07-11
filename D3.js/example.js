// console.log(d3);
// var inputValue = document.getElementById("my-input");
// var searchButton = document.getElementById("my-button");
// var inputDemo = document.getElementById("demo");

// console.log(inputDemo.innerHTML);
// inputValue.addEventListener("input", printInput);

// function printInput() {
//     var a = inputValue.value;
//     console.log(a);
//     inputDemo.innerHTML = a;
// }

svg = d3.select("div")
        .style("width", "100%")
        .style("height", "100%")
        .style("text-align", "center")
            .append("svg")
            .attr("width", 2000)
            .attr("height", 2000);

circle1 = svg.append("circle")
          .attr("fill", "blue")
          .attr("stroke", "black")
          .attr("cx", 200)
          .attr("cy", 100)
          .attr("r", 100);

circle2 = d3.select("svg")
            .append("circle")
            .attr("fill", "green")
            .attr("stroke", "black")
            .attr("cx", 500)
            .attr("cy", 160)
            .attr("r", 80)

circle1.on("click", function(){
    d3.select(this)
      .transition()
      .duration(800)
      .attr("cx", 1000)
      .attr("cy", 180)
      .attr("r", 150)
})
  
