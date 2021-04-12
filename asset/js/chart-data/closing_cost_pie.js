
// this is orienattions Progress Pie chart
var ctx3 = document.getElementById('closing_cost_pie_chart');
var myChart2 = new Chart(ctx3, {
    type: 'pie',
    data: {
        labels: [
            'Starting ammount',
            'Total contribution',
            'Total Interest Earn',
        ],
        datasets: [
            {
                label: 'Poor',
                borderWidth: 1,
                data: [
                    60,
                    40,
                ],
                backgroundColor: [
                    '#5862AD', // done value color
                    '#848CC3', // over de color
                ],
            },
        ]
    },
    options: {
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        legend: false,
        responsive: true,
        maintainAspectRatio: true,
    }
});




