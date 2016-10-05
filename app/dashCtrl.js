app.controller('dashCtrl', function ($scope, $rootScope) {
    //initially set those objects to null to avoid undefined error
    $scope.generateChart = function () {
        // Load the Visualization API and the corechart package.
        google.charts.load('current', {'packages':['corechart']});

        // Set a callback to run when the Google Visualization API is loaded.
        google.charts.setOnLoadCallback(drawChart);

        // Callback that creates and populates a data table,
        // instantiates the pie chart, passes in the data and
        // draws it.
        function drawChart() {

            // Create the data table.
            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Equipamentos');
            data.addColumn('number', 'Potência');
            data.addRows([
                ['Iluminação', 3],
                ['Ambiente', 1],
                ['Eletrodomésticos', 1],
                ['Lazer', 1]
            ]);

            // Set chart options
            var options = {'title':'Consumo de energia por tipo de Equipamento',
                'width':400,
                'height':300};

            // Instantiate and draw our chart, passing in some options.
            var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
            chart.draw(data, options);
        }
    }
});