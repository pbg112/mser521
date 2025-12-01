// Store data in simple variables for easy access
const chartData = [4, 7, 3, 5];
const categories = ['Jan', 'Feb', 'Mar', 'Apr'];

// chart options:
const options = {
  chart: {
    type: 'bar',
    events: {
      dataPointSelection: getDetails,
    },
  },
  series: [{ name: 'Count', data: chartData }],
  xaxis: { categories: categories },
};

function getDetails(event, chartContext, config) {
  const slot = config.dataPointIndex; // get the index of the clicked point
  console.log(slot);
  console.log(chartData[slot]) ; // # of snow days
  console.log(chartData[slot]) ; // # of months 
  const panel = document.querySelector("#details");
  const snowdays = chartData[slot]
  const month = categories[slot]
panel.innerHTML = `
  <h1> ${month} </h1>
  <p> Snow Days : ${snowdays}

`; 
// we use back ticks when we want the results to change based on data

  // 1. How do you get the value of the clicked point?
  // 2. How do you get the category of the clicked point?
  // 3. How do you output the value and label to the details panel?
}

// code that actually creates the chart:
const chart = new ApexCharts(document.querySelector('#chart'), options);
chart.render();
