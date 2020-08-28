google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Day', 'Sales', 'Expenses'],
    ['1',  1200,      405],
    ['2',  1170,      460],
    ['3',  660,       1230],
    ['4',  1030,      540]
  ]);

  var options = {
    title: 'Company Performance',
    curveType: 'function',
    legend: { position: 'bottom' },
    width: 320,
    height: 200,
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart_mingguan'));

  chart.draw(data, options);
}

$(window).resize(function(){
  drawChart();
});