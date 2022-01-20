$(function(){

    $("a").click(function(){
        var numeral = this.hash;

        $("html, body").animate({
            scrollTop: $(numeral).offset().top - 50,
        }, 800)
    })

    $(document).on("scroll", function(){
        $(".navbar").css('background-color', '#000');
    });
})