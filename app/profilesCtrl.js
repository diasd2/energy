app.controller('profilesCtrl', function ($scope, $rootScope) {

    $scope.createProfileChart = function () {
        // Load the Visualization API and the corechart package.
        google.charts.load('visualization', {'packages':['corechart']});
        google.charts.setOnLoadCallback(drawProfileVisualization);


        function drawProfileVisualization() {
            // Some raw data (not necessarily accurate)
            var data = google.visualization.arrayToDataTable([
                ['Mês', 'Iluminação', 'Ambiente', 'Eletrodomésticos', 'Lazer', 'Média'],
                ['Janeiro',     145,    3120,   2263,   1522,    1737.5],
                ['Fevereiro',   135,    3120,   2026,   1599,    1695.2],
                ['Março',       157,    3167,   1968,   1587,    1625.8],
                ['Abril',       139,    1952,   1968,   1615,    1576.7],
                ['Maio',        139,    1622,   1523,   1615,    1449.3],
                ['Junho',       139,    1325,   1425,   1615,    1384.2],
                ['Julho',       139,    1215,   1230,   1615,    1256.4],
                ['Agosto',      139,    1180,   1260,   1615,    1215.3],
                ['Setembro',    139,    1185,   1280,   1615,    1216.3],
                ['Outubro',     139,    1263,   1450,   1615,    1289.7],
                ['Novembro',    139,    1762,   1658,   1615,    1543.6],
                ['Dezembro',    139,    3110,   1968,   1615,    1862.1]
            ]);

            var options = {
                title : 'Consumo mensal por Tipo',
                vAxis: {title: 'Tipo'},
                hAxis: {title: 'Mês'},
                seriesType: 'bars',
                series: {4: {type: 'line'}},
                'width': 800,
                'height': 500
            };

            var chart = new google.visualization.ComboChart(document.getElementById('chart_profile_div'));
            chart.draw(data, options);
        }
    };
});