$(function () {

    // ScrollSmooth
    $("a").click(function () {
        var numeral = this.hash;

        $("html, body").animate({
            scrollTop: $(numeral).offset().top - 50,
        }, 800)
    })


    // Background en negro en el navbar cuando se hace scroll por primera vez
    $(document).on("scroll", function () {
        $(".navbar").css('background-color', '#000');
    });
})


// Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})