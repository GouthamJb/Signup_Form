
function myFunction(){
    alert("Thank you for entering your details!");
}
$(document).ready(function(){
    $(document).find(".vehicleselector").hide();
    $("input[type='radio']").click(function(){
        var radioValue = $("input[name='yes_no']:checked").val();
        
        if(radioValue == 'yes')
        {
            $(document).find(".vehicleselector").show();
            $(document).find("#vehicle").attr("required",true)
        }
        else if(radioValue == 'no')
        {
            $(document).find(".vehicleselector").hide();
            $(document).find("#vehicle").attr("required",false)
        }


    });
});
