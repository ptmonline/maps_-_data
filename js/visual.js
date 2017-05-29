var svg = d3.select("svg")
  .attr("width", window.innerWidth || document.body.clientWidth)
  .attr("height", window.innerHeight || document.body.clientHeight)

var format = d3.format(",d");
var caixa = document.getElementById("#titulation");
var box = d3.select("#titulation")
var title =[];

d3.csv("0_HORTS_URBANS.csv", function(data) {
    data.forEach(function(d) {
      title.push(d.EQUIPAMENT);
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
        .style("opacity", function(d){ return Math.random();})

    }

    function move(){
      d3.selectAll(".node")
        .transition()
        .duration(Math.floor((Math.random() * 5000) + 1))
        .attr("transform", function(d) { return "translate(" +Math.floor((Math.random() * 1000) + 1) + "," + Math.floor((Math.random() * 700) + 1) + ")"; });
    }

    setInterval(function(){
      redraw();
    }, Math.floor((Math.random() * 2000) + 1))

    setInterval(function(){
      move();
    }, Math.floor((Math.random() * 2000) + 1))
});
