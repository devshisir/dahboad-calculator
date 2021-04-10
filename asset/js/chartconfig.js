









// depertment wise performance
var ctx2 = document.getElementById('groth_chat_canvas');
var myChart = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['2021','2022','2023','2024','2025'],
        datasets: [
            {
                data: [
                    4.5,
                    4,
                    4,
                    3.7,
                    4.2,
                ],
                backgroundColor: [
                    '#5962AC',
                    '#5962AC',
                    '#5962AC',
                    '#5962AC',
                    '#5962AC',
                ],
            },
            {
               data: [
                   5.8,
                   5.5,
                   6,
                   3.8,
                   4.2,
               ],
               backgroundColor: [
                   '#858CC1',
                   '#858CC1',
                   '#858CC1',
                   '#858CC1',
                   '#858CC1',
               ],
           },
           {
            data: [
                6.4,
                6.6,
                7.5,
                6,
                6,
            ],
            backgroundColor: [
                '#C9CCE4',
                '#C9CCE4',
                '#C9CCE4',
                '#C9CCE4',
                '#C9CCE4',
            ],
        },
            
        ]
    },
    options: {
        title: {
            display: false,
            text: 'Chart.js Bar Chart - Stacked'
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
                maxBarThickness: 54,
            }],
            yAxes: [{
                stacked: true
            }]
        },
        maintainAspectRatio: false,
    }
});









// this is orienattions Progress Pie chart
var ctx3 = document.getElementById('balance_at_year_canvas');
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
                    30,
                    20,
                    55,
                ],
                backgroundColor: [
                    '#848CC3', // over de color
                    '#C9CDE5', // pending value color
                    '#5862AD', // done value color
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
        maintainAspectRatio: false,
    }
});




