$(document).ready(function() {
    $("#ocultar-imagen").click(function() {
        $("#imagen").hide();
        $("h1").text("¡No tenemos ninguna imagen!");
    });

    $("#mostrar-imagen").click(function() {
        $("#imagen").show();
        $("h1").text("¡Mirá la siguiente imagen!");
    });
});