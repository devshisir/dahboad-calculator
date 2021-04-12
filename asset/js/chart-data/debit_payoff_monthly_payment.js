
// depertment wise performance
var ctx = document.getElementById('mounthly_payment_comparioson_canvas');
Chart.Legend.prototype.afterFit = function() {
    this.height = this.height + 20;
 };
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Current', 'Consolidated', 'Accelerated'],
        datasets: [{
          label: 'Current - $320',
          backgroundColor: "#5962AC",
          data: [280,0,0]
        }, {
          label: 'Consolidated - $88',
          backgroundColor: "#858CC1",
          data: [0,490,0]
        }, {
          label: 'Accelerated - $320',
          backgroundColor: "#C9CCE4",
          data: [0,0,360]
        }]
      },
    options: {
        legend:{
            align: 'end',
        },
        title: {
            display: false,
            text: ''
        },
        tooltips: {
            mode: 'index',
            intersect: true,
        },
        responsive: true,
        scales: {
            xAxes: [{
                stacked: true,
                maxBarThickness: 100,
                gridLines: {
                    offsetGridLines: true
                },
            }],
            yAxes: [{
                stacked: true
            }]
        },
        maintainAspectRatio: false,
    }
});