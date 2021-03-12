$(function(){

    $(".prev").click(
        function (){
            prevPhoto();
        } 
    );

    $(".next").click(
        function(){
            nextPhoto();
        }
    );
}
);

function prevPhoto(){
    var $photo = $(".images img.active");
    if($photo.hasClass("first")){
        $photo.removeClass("active")
        $(".images img.last").addClass("active")
    }
    else{
        $photo.removeClass("active")
        $photo.prev().addClass("active")
    }
}

function nextPhoto(){
    var $photo = $(".images img.active");
    if($photo.hasClass("last")){
        $photo.removeClass("active")
        $(".images img.first").addClass("active")
    }
    else{
        $photo.removeClass("active")
        $photo.next().addClass("active")
    }
}