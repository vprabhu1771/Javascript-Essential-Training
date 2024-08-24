$(document).ready(function(){
    $('#create_btn').click(function(){
       
        var name = $('#name').val();

        if(name == '')
        {
            $('#output').html("name field empty");
        }
        else
        {
            var result = $('#login_form').serialize();
            
            $('#output').html(result);
        }
    });
});