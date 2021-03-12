$(function(){

    var $listaCircle = $(".nav i");
    $listaCircle.click(
        function(){
            
            var $listaImg = $(".images img");
            
            $listaCircle.removeClass("active");
            $(this).addClass("active");
            var posizione= $(this).index();
            $listaImg.removeClass("active");
            $listaImg.eq(posizione).addClass("active");
        }
    );

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
    var $circle = $(".nav i.active");
    if($photo.hasClass("first")){
        $photo.removeClass("active")
        $(".images img.last").addClass("active")
        $circle.removeClass("active")
        $(".nav i.last").addClass("active")
    }
    else{
        $photo.removeClass("active")
        $photo.prev().addClass("active")
        $circle.removeClass("active")
        $circle.prev().addClass("active")
    }
}

function nextPhoto(){
    var $photo = $(".images img.active");
    var $circle = $(".nav i.active");
    if($photo.hasClass("last")){
        $photo.removeClass("active")
        $(".images img.first").addClass("active")
        $circle.removeClass("active")
        $(".nav i.first").addClass("active")
    }
    else{
        $photo.removeClass("active")
        $photo.next().addClass("active")
        $circle.removeClass("active")
        $circle.next().addClass("active")
    }
}