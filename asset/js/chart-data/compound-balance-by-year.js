// depertment wise performance
var ctx = document.getElementById('balance_year_compound');
var myChart = new Chart(ctx, {
   type: 'bar',
   data: {
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
      datasets: [{
         data: [
            4300,
            6000,
            8000,
            12000,
            14300,
            17000,
            19000,
            21000,
            23000,
            25000,
         ],
         backgroundColor: [
            '#5962AC',
            '#5962AC',
            '#5962AC',
            '#5962AC',
            '#5962AC',
            '#5962AC',
            '#5962AC',
            '#5962AC',
            '#5962AC',
            '#5962AC',
         ],
      }, ]
   },
   options: {
      datalabels: {
         anchor: "end",
         align: "left",
         formatter: function(context) {
           return context / 1000 + "k";
         },
         font: {
           color: "black"
         }
       },
      legend: {
         position: 'bottom',
         fullWidth: true,
         labels: false,
      },
      responsive: true,
      scales: {
         xAxes: [{
            stacked: true,
         }],
         yAxes: [{
            stacked: true,
         }]
      },
      maintainAspectRatio: false,
   }
});