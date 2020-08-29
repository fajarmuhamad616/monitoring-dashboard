google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Minggu', 'Berhasil', 'Gagal'],
    ['1',  56,      12],
    ['2',  65,      12],
    ['3',  66,       11],
    ['4',  65,      12],
  ]);

  var options = {
    title: 'Grafik Hasil Panen (Minggu)',
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