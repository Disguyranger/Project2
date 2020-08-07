// data route
var url = "/data";

function buildPlot() {
  d3.json(url).then(function(patrick) {

    var x = patrick.map(z => z.ZIP_OR_POSTAL_CODE);
    var y = patrick.map(a => a.PROPERTY_TYPE);

    console.log(x);
    console.log(y);

    console.log(patrick);
    var trace = {
      type: "scatter",
      mode: "lines",
      name: "Bigfoot Sightings",
      x: x,
      y: y,
      line: {
        color: "#17BECF"
      }
    };

    var data = [trace];

    var layout = {
      title: "Bigfoot Sightings Per Year",
      xaxis: {
        type: "date"
      },
      yaxis: {
        autorange: true,
        type: "linear"
      }
    };

    Plotly.newPlot("plot", data, layout);
  });
}

buildPlot();


})