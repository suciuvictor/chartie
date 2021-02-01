function BuildChart(labels, values, chartTitle) {
    var data = {
        labels: labels,
        datasets: [{
            label: chartTitle, // Name the series
            data: values,
            backgroundColor: ['rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
                'rgb(54, 162, 235)',
            ],
        }],
    };

    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            responsive: true, // Instruct chart js to respond nicely.
            maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height
            scales: {
                xAxes: [{
                        scaleLabel: {
                        display: true,
                        labelString: 'Date'
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Produced Count'
                    }
                }]
            },
        }
    });

    return myChart;
}


var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var json = JSON.parse(this.response);
      console.log(json);

// Map json labels  back to values array
var labels = json.feed.entry.map(function (e) {
  return e.gsx$email.$t;
});

// Map json values back to values array
var values = json.feed.entry.map(function (e) {
    return e.gsx$age.$t;
});

BuildChart(labels, values, "Production Data");
    }
  };
  xhttp.open("GET", "https://spreadsheets.google.com/feeds/list/1XC81cZx2dqGwKKVbr9j5vKTIjempvJNRDPWqEItmDrs/od6/public/full?alt=json", false);
  xhttp.send();
