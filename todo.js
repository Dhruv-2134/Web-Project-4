//Check off specific Todo y clicking
$("ul").on("click", "li", function(){
    //if li is gray we turn it black else turn it gray
    $(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropogration();
});

$("input[type='text'").keypress(function(event){
    if(event.which === 13){
        //grabbing new todo text from input
        var Todotext = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + Todotext + "</li>")
    }
});

$(".fa-plus").click(function(){
    $("input[type='text'").fadeToggle();
});

