app.controller('dashCtrl', function ($scope, $rootScope, $location, Data) {

    $scope.simulateResults = function () {
        var popupData = prompt("Por favor introduza o número de pessoas na habitação?", "1");

        if (popupData != null) {
            generateChart();

            //set visibility to display="block"
            document.getElementById('simResults').style.display = "block";
        }
    };

    function generateChart () {
        // Set a callback to run when the Google Visualization API is loaded.
        // Load the Visualization API and the corechart package.
        google.charts.load('visualization', {'packages':['corechart']});
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
    
    $scope.printResults = function () {
        var divContents = $("#simResults").html();
        var printWindow = window.open('', '', 'height=400,width=800');
        printWindow.document.write('<html><head><title>Resultados da simulação</title>');
        printWindow.document.write('</head><body >');
        printWindow.document.write(divContents);
        printWindow.document.write('</body></html>');
        printWindow.document.close();
        printWindow.print();  
    };

    $scope.logout = function () {
        Data.get('logout').then(function (results) {
            Data.toast(results);
            $location.path('');
        });
    }
});