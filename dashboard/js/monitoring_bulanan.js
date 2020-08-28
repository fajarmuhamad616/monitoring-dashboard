    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Bulan', 'Sales', 'Expenses'],
        ['Jan',  1000,      400],
        ['Feb',  1170,      460],
        ['Mar',  660,       1120],
        ['Apr',  1030,      540]
      ]);

      var options = {
        title: 'Company Performance',
        curveType: 'function',
        legend: { position: 'bottom' }
      };

      var chart = new google.visualization.LineChart(document.getElementById('curve_chart_bulanan'));

      chart.draw(data, options);
    }

