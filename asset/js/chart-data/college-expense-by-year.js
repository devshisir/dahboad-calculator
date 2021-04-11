var ctx = document.getElementById('college_expense_canvas');
Chart.Legend.prototype.afterFit = function() {
   this.height = this.height + 20;
};
var myChart = new Chart(ctx, {
   type: 'line',
   data: {
      labels: [
         '1',
         '2',
         '3',
         '4',
         '5',
         '6',
         '7',
         '8',
         '9',
         '10',
         '11',
         '12',
         '13',
         '14'
      ],
      datasets: [{
            label: "Balance",
            fill: false,
            borderColor: '#5962AC',
            borderWidth: '4',
            lineTension: '0.4',
            data: [
               30000,
               26000,
               10000,
               18000,
               14000,
               10000,
               25000,
               30000,
               40000,
               40000,
               40000,
               40000,
               40000,
               20000,
            ],
         },
         {
            label: "Expense",
            fill: false,
            borderColor: '#ddd',
            borderWidth: '4',
            lineTension: '0.4',
            data: [
               30000,
               26000,
               12000,
               18000,
               14000,
               10000,
               25000,
               30000,
               40000,
               40000,
               40000,
               40000,
               40000,
               20000,
            ],
         }
      ],
   },

   options: {
      labels: true,
      responsive: true,
      barRoundness: 0,
      layout: {

     },
      title: {
         display: false,
         text: ''
      },
      tooltips: {
         mode: 'index',
         intersect: true,
      },
      legend: {
         position: 'top',
         fullWidth: false,
         align: 'end',
         labels:{
            boxWidth: 15,
         },

      },
      scales: {
         xAxes: [{
            stacked: false,

         }],
         yAxes: [{
            stacked: true
         }]
      },
      maintainAspectRatio: false,
   }
});