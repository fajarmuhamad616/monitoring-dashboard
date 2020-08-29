google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Tahun', 'Berhasil', 'Gagal'],
    ['2017',  12000,      1323],
    ['2018',  12170,      213],
    ['2019',  6260,       1120],
    ['2020',  13030,      540]
  ]);

  var options = {
    title: 'Grafik Hasil Panen (Tahun)',
    curveType: 'function',
    legend: { position: 'bottom' },
    width: 320,
    height: 200,
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart_tahunan'));

  chart.draw(data, options);
}

$(window).resize(function(){
  drawChart();
});
