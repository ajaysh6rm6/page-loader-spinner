$(document).on('click', '#spinner', function(e) {
    output = "<div class = 'spinner-border'></div>"

    $("#spin").html(output);
});

$(window).on("load", function() {
    $('.spinner-border').fadeOut("slow");

});