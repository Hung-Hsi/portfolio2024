$('.cvDownload').on('click', function (e) {
    // console.log(e.target.classList);
    if (e.target.classList.contains('card') || e.target.classList.contains('cvDownload')) {
        $('.cardContainer').toggleClass('flipped');
    }
});