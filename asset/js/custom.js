$(document).ready(function() {
    var school = $(window);
    var page = $('html, body');


    $('select').niceSelect();


    $("#range_slider1").asRange({
        tip:false,
        format:function format(value) {
            return value;
        } 
    });
    $("#range_slider1").on('asRange::change', function(e) {
        var val = $("#range_slider1").asRange('get');
        if (val > 1) {
          $('#range_value_add1').val(val)
        } else if (val <= 1) {
            $('#range_value_add1').val(val)
        }
      });

    
        




    
});