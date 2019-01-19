// from data.js
var tableData = data;
var tbody = d3.select("tbody");


data.forEach((UFOReport) => { 
  var row = tbody.append("tr");
  Object.entries(UFOReport).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});

function handleSubmit() {
  tbody.selectAll("td").remove()
  var inputValue = d3.select("#datetime").node().value;
  var filteredData = tableData.filter(x => x.datetime === inputValue);
  filteredData.forEach((UFOReport) => {
    var row = tbody.append("tr");
    Object.entries(UFOReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};

d3.select("button").on("click", handleSubmit);