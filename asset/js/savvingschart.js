
// depertment wise performance
var ctx = document.getElementById('saving_chat_canvas');
var myChart = new Chart(ctx, {
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
                maxBarThickness: 70,
            }],
            yAxes: [{
                stacked: true
            }]
        },
        maintainAspectRatio: false,
    }
});