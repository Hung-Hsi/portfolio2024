$('.cvDownload').on('click', function (e) {
    // console.log(e.target.classList);
    if (e.target.classList.contains('card') || e.target.classList.contains('cvDownload') || e.target.classList.contains('cardContainer')) {
        $('.cardContainer').toggleClass('flipped');
    }
});