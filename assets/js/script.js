$(function () {

    // ScrollSmooth
    $("a").click(function () {
        var numeral = this.hash;

        $("html, body").animate({
            scrollTop: $(numeral).offset().top - 50,
        }, 800)
    })


    // Cambia el Background en negro en el navbar cuando se hace scroll por primera vez
    $(document).on("scroll", function () {
        $(".navbar").css('background-color', '#000');
    });


    // Modal
    $(".destacados-cards").click(function () {
        
        // Variables del HTML de cada parte (título, imagen y parrafo) del card
        var titulo = $(this).find(".card-title").html()
        var img = $(this).find(".card-img").html();
        var parrafo = $(this).find(".card-text").html()

        // Titulo del modal lo cambia por el titulo de la tarjeta en la que se hizo click
        $(".modal-title").html(titulo)

        // La imagen y parrafo del modal cambia según la tarjeta en la que se hizo click
        $(".modal-body").html(`
        ${img}
        <br/><br/>
        <p>
            ${parrafo}
        </p>
        `);

    })


    // Al clickar el icono del navbar al encogerse el navbar, el fondo se vuelve negro
    $(".navbar-toggler").click(function(){
        $(".navbar").css("background", "#000");
    })
})


// Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})