
// depertment wise performance
var ctx = document.getElementById('time_to_pay_debt_canvas');
Chart.Legend.prototype.afterFit = function() {
    this.height = this.height + 20;
 };
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Current', 'Consolidated', 'Accelerated'],
        datasets: [{
          label: 'Current - 98 Months',
          backgroundColor: "#5962AC",
          data: [130,0,0]
        }, {
          label: 'Consolidated - 144 Months',
          backgroundColor: "#858CC1",
          data: [0,95,0]
        }, {
          label: 'Accelerated - 144 Months',
          backgroundColor: "#C9CCE4",
          data: [0,0,70]
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