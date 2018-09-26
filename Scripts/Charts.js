var ctx = document.getElementById("myChart").getContext('2d');
//l'asse X
var label = Array.from(new Array(61), (x,i) => i);

//Chart Global Settings

Chart.defaults.global.defaultFontFamily= 'Lato';
Chart.defaults.global.defaultFontSize= 18;
Chart.defaults.global.defaultFontColor= '#777';

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: label,
        //I dati del Grafico
        datasets: [
            //Primo Grafico
            {
            label: 'Primo Grafico',
            data: [{
                x: 5,
                y: 10
            },{
                x: 10,
                y: 8
            },{
                x: 9,
                y: 15
            },{
                x:18,
                y: 5
            }],
            backgroundColor: [
                'transparent'
            ],
            borderColor: [
                'rgba(255,99,132,1)'
            ],
            borderWidth: 2
        },
            //Secondo Grafico
        {
            label: 'Secondo Grafico',
            data: [5, 1, 13, 15, 12, 3],
            backgroundColor: [
                'transparent'
            ],
            borderColor: [
                //colore della linea
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 2
        }]
    },
    //Opzioni:
    options: {
        //Titolo del Grafico
        title:{
            display: true,
            text: "Rappresentazione dei Valori",
            fontSize: 25
        },
        //Leggende del grafico
        legend:{
            position: 'right',
            labels:{
                fontColor: '#000'
            }
        },
        //Gli Elementi del Grafico
        elements: {
            line: {
                //disabilita la curvatura che crea tra i punti
                tension: 0.3
            }
        },
        //Animazioni
        animation: {
            duration: 10, // general animation time
        },

        //Assi
        scales: {
            yAxes: [{
                type: 'linear',
                scaleLabel:{
                    display: true,
                    labelString: 'Numero di Utenti'
                },
                ticks: {
                    //fa partire l'asse Y da 0
                    beginAtZero:true
                }
            }],
            xAxes: [{
                scaleLabel:{
                    display: true,
                    padding: 1,
                    labelString: 'Tempo'
                },
                ticks: {
                    //fa partire l'asse Y da 0
                    beginAtZero:true
                }
            }]
        }
    }
});
