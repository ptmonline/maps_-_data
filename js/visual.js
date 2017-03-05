var svg = d3.select("svg"),
    width = +svg.attr("width");

var format = d3.format(",d");



var pack = d3.pack()
    .size([width, width])
    .padding(1.5);
var letters = [];

// d3.csv("0_HORTS_URBANS.csv", function(d) {
//   var thex = parseFloat(d.ED50_COORD_X) / 10000;
//   var they = parseFloat(d.ED50_COORD_Y) / 100000;
//   console.log(d.EQUIPAMENT);
//   console.log(parseFloat(d.ED50_COORD_Y) / 100000);
//   if (d) return d;
// }, function(error, classes) {
//   if (error) throw error;
//
//   var root = d3.hierarchy({children: classes})
//       .sum(function(d) { return d; })
//       .each(function(d) {
//         var x = parseFloat(d.ED50_COORD_X) / 10000;
//         var y = parseFloat(d.ED50_COORD_Y) / 100000;
//       });
      d3.csv("0_HORTS_URBANS.csv", function(data) {
          data.forEach(function(d) {
            title = d.EQUIPAMENTS;
      });
  var node = svg.selectAll(".node")
    .data(data)
    .enter().append("g")
      .attr("class", "node")
      .attr("transform", function(d) { return "translate(" +Math.floor((Math.random() * 1000) + 1) + "," + Math.floor((Math.random() * 700) + 1) + ")"; });

  node.append("circle")
      .attr("class", function(d) { return d.CODI_CAPA; })
      .attr("r", function(d) {  return Math.floor((Math.random() * 50) + 1);})
      .attr("stroke","black")
      .style("fill", "000000")
      .style("opacity", function(d){ return Math.random();})


  node.append("text")
    .attr("dx", function(d){return 20})
    .attr("font-family", "sans-serif")
    .attr("font-size", "20px")
    .attr("fill", "black")
    .text(function(d) { return d.EQUIPAMENT})

    function redraw() {
      // update the circle
      d3.selectAll("circle")
      .transition()
        .duration(Math.floor((Math.random() * 1000) + 1))
        .attr("r", function(d) {  return Math.floor((Math.random() * 50) + 1);})
    }

    setInterval(function(){
      redraw();
    }, 500)
});
