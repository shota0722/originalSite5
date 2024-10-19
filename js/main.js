$(function () {
    $('#toggle-btn').on('click', function () {
        $('#toggle-cover').addClass('active');
    })
    $('#close-btn').on('click', function () {
        $('#toggle-cover').removeClass('active');
    })

    $(window).on('scroll', function () {
        $('.leftin,.rightin').each(function () {
            let scroll = $(window).scrollTop();
            let target = $(this).offset().top;
            let windowHeight = $(window).height();
            if (scroll > target + 500) {
                $(this).removeClass('active');
            }
            else if (scroll > target - windowHeight + 50) {
                $(this).addClass('active');
            }
        });
    });
});