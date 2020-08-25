    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Day', 'Sales', 'Expenses'],
        ['2017',  1000,      400],
        ['2018',  1170,      460],
        ['2019',  660,       1120],
        ['2020',  1030,      540]
      ]);

      var options = {
        title: 'Company Performance',
        curveType: 'function',
        legend: { position: 'bottom' }
      };

      var chart = new google.visualization.LineChart(document.getElementById('curve_chart_tahunan'));

      chart.draw(data, options);
    }
