$("ul").on("click","li",function(){ //on sonradan oluşan elemanları da dinler.
    $(this).toggleClass("finish");
});

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation(); //Tüm parentların olaydan etkilenmesini engeller.
});

$("input[type = 'text']").keypress(function(event){
    if(event.which === 13) //13 Enter'ın keyPressi
    {
        var newItem = $(this).val();
        console.log(newItem);
        $(this).val("");
        $("ul").append("<li>"+ newItem +"<span class = 'del'><i class='far fa-window-close'></i></span></li>"); //append html kodu ile eklenmesini sağlar.
    }
});

$(".fa-pencil-alt").click(function(){
    $("input[type='text']").fadeToggle();
});