$(document).ready(function(){
    $("input").keydown(function(e){
        if (e.keyCode === 13) {
            $("tr").remove();
            // reset of table content
            var userCount = $("input").val();
            // get customers number
            $("input").val("");
            // reset of inputs value
            if ($.isNumeric(userCount) == true && userCount > 0) {
                // validating data entry
                var line = "<tr></tr>";
                var cell = "<th>Ячейка</th>";
                for (var i = 0; i < userCount; i++) {
                    $("table").append(line);
                };
                // add lines according to the entered number
                for (var i = 0; i < userCount; i++) {
                    $("tr").append(cell);
                }
                // add cells
            } else {
                alert("Вы ввели некорректные данные")
            }
        }
    });
});
