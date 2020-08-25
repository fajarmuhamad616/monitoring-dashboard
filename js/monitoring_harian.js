    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Day', 'Sales', 'Expenses'],
        ['1',  1000,      400],
        ['2',  1170,      460],
        ['3',  660,       1120],
        ['4',  1030,      540]
      ]);

      var options = {
        title: 'Company Performance',
        curveType: 'function',
        legend: { position: 'bottom' }
      };

      var chart = new google.visualization.LineChart(document.getElementById('curve_chart_harian'));

      chart.draw(data, options);
    }
