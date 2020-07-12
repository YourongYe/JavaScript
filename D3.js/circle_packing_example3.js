

// var root = d3.hierarchy(data)
//   .sum(d=>d.value)
//   .sort((a,b)=>b.value-a.value);

// var pack = d3.pack()
//   .size([600,600])
//   .padding(10);
var color = d3.scaleLinear()
  .domain([0, 5])
  .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
  .interpolate(d3.interpolateHcl)

var pack = data => d3.pack()
                  .size([600, 600])
                  .padding(3)
                  (d3.hierarchy(data)
                  .sum(d => d.value)
                  .sort((a, b) => b.value - a.value))

d3.json("data.json").then(function(data) {
  var root = pack(data);
  var node = d3.select('svg')
    .selectAll('g')
    .data(root.descendants())
    .enter().append("g");
  

    node.append('circle')
      .classed('node', true)
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .attr('r', d => d.r)
      .style("fill", function(d) { return color(d.depth); });


})





  
