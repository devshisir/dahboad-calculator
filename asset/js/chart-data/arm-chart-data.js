var ctx = document.getElementById("arm_fixe_chart_canvas").getContext("2d");
Chart.Legend.prototype.afterFit = function() {
    this.height = this.height + 20;
 };
var data = {
  labels: ["Year One", "Year Four"],
  datasets: [{
    label: "Fixed Rate",
    backgroundColor: "#5962AC",
    data: [47000,49000,]
  }, {
    label: "ARM Fully Amortizing",
    backgroundColor: "#858CC1",
    data: [37000,35000]
  },
{
    label: "ARM Interest Only",
    backgroundColor: "#C9CCE4",
    data: [27000,12000]
  }]
};

var myBarChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: {
    maintainAspectRatio: false,
    barRoundness: 0,
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
         maxBarThickness: 75,
      }],
      yAxes: [{
         ticks: {
            min: 0,
         }
      }]
   }
  }
});
