function ShowTime() {
    let NowDate = new Date();
    let h = NowDate.getHours();
    let m = NowDate.getMinutes();

    // 12 小時制
    h = h % 12 || 12;
    m = m < 10 ? '0' + m : m;

    document.querySelector('.nowTime').innerHTML = '<span>' + h + ':' + m + '</span>';
    setTimeout('ShowTime()', 1000);
}
ShowTime();
