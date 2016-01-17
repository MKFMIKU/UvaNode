$(document).ready(function(){
    $("#go").click(function(){
        id_send();
    });
});

function id_send(){
    $.ajax({
        type: 'POST',
        url: "/uvaid" ,
        data: {ques:$("#number_id").val()} ,
        success: function(data){
            $("body").text(data);
        }
    });
}