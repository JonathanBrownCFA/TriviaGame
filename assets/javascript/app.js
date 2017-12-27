$(document).ready(function () {
    $('#reset').click(function () {
        location.reload();
    });
    $("#timer").click(function () {
        var count = 31;


        var counter = setInterval(timer, 1000); //1000 will  run it every 1 second

        function timer() {
            count = count - 1;
            if (count <= -1) {

                clearInterval(counter);
                document.getElementById("timer").innerHTML = "\u00A0" + "Game Over";
                alert("Time is up!");

            } else {
                document.getElementById("timer").innerHTML = count + "";
            }

            $(document).ready(function () {
                $("#results").click(function () {

                    {
                        var cat1name = "1";
                        var cat2name = "2";
                        var cat3name = "3";
                        var cat4name = "4";
                        var cat11name = "None";


                        var cat1 = ($("input[@name=q1]:checked").val() != "a");
                        var cat2 = ($("input[@name=q2]:checked").val() != "b");
                        var cat3 = ($("input[@name=q3]:checked").val() != "b");
                        var cat4 = ($("input[@name=q4]:checked").val() != "b");



                        var cat11 = (!cat1 && !cat2 && !cat3 && !cat4);
                        var categories = [];

                        if (cat1) {
                            categories.push(cat1name)
                        };
                        if (cat2) {
                            categories.push(cat2name)
                        };
                        if (cat3) {
                            categories.push(cat3name)
                        };
                        if (cat4) {
                            categories.push(cat4name)
                        };
                        if (cat11) {
                            categories.push(cat11name)
                        };



                        var catStr = 'You answered the following questions incorrectly: ' + categories.join(', ') + '';
                        $("#categorylist").html(catStr);
                        $("#categorylist").show("slow");

                        if (cat1) {
                         
                            $("#category1").show("slow");
                        };
                        if (cat2) {
                            $("#category2").text();
                            $("#category2").show("slow");
                        };
                        if (cat3) {
                            $("#category3").html();
                            $("#category3").show("slow");
                        };
                        if (cat4) {
                            $("#category4").text();
                            $("#category4").show("slow");
                        };
                        if (cat11) {
                            $("#category11").text();
                            $("#category11").show("slow");
                        }; {

                        };
                    }

                });
            });
        }
    });
});