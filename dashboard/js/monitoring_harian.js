google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Hari', 'Berhasil', 'Gagal'],
    ['1',  10,      4],
    ['2',  11,      4],
    ['3',  6,       1],
    ['4',  10,      5],
    ['5',  10,      3],
    ['6',  8,       4],
    ['7',  9,       5],
  ]);

  var options = {
    title: 'Grafik Hasil Panen (Hari)',
    curveType: 'function',
    legend: { position: 'bottom' },
    width: 320,
    height: 200,
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart_harian'));

  chart.draw(data, options);
}


$(window).resize(function(){
  drawChart();
});