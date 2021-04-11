
// depertment wise performance
var ctx = document.getElementById('collage_cost_by_child_canvas');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Children 1','Children 2'],
        datasets: [
            {
                data: [
                    40000,
                    35000,
                ],
                backgroundColor: [
                    '#5962AC',
                    '#858CC1',
                ],
            },
            
        ]
    },
    options: {
        title: {
            display: false,
            text: ''
        },
        tooltips: {
            mode: 'index',
            intersect: true,
        },
        legend: {
            position: 'bottom',
            fullWidth: true,
            labels:false,
            
        },
        responsive: true,
        scales: {
            xAxes: [{
                stacked: true,
                maxBarThickness: 120,
            }],
            yAxes: [{
                stacked: true
            }]
        },
        maintainAspectRatio: false,
    }
});