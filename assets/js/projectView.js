$(document).ready(function () {
    // 獲取圖片元素
    const $urls = $('.projectWeb');
    const $content = $('.webContent');

    // 添加點擊事件處理程序
    $urls.on('click', function (e) {
        e.preventDefault();
        // 獲取被點擊的圖片的URL
        const photoId = e.currentTarget.id;
        // 獲取被點擊的連結的URL
        const webUrl = e.currentTarget.href;
        // console.log(photoId);
        // console.log(webUrl);

        // setTimeout模擬網絡請求的時間
        setTimeout(function () {
            // 回到web內容頂端
            $content.scrollTop(0);
            // 清空之前的內容
            $content.html('');

            // 創建內容元素
            const $contentElement = $('<a target="_blank" href="' + webUrl + '" rel="noopener noreferrer"</a>').html(`<picture>
            <source media="(max-width:1280px)" srcset="/assets/styles/images/${photoId}1280.png">
            <img src="/assets/styles/images/${photoId}.png" alt="${photoId}">
            </picture>`);

            // 將內容添加到右側容器
            $content.append($contentElement);

            // 使用 fetch 获取页面内容
            // fetch()
            //     .then(response => response.text())
            //     .then(data => {
            //         // 将获取的 HTML 内容插入到目标元素中
            //         $content.html(data).hide().fadeIn('slow');
            //     })
            //     .catch(error => console.error(error));

            // 使用AJAX加载HTML内容
            // $.ajax({
            //     type: 'GET',
            //     url: webUrl,                dataType: 'html',
            //     timeout: 2000,
            //     //ajax發送前
            //     beforeSend: function () {
            //         $content.html('<div id="loading">Loading</div>');
            //     },
            //     //請求完成
            //     complete: function () {
            //         $('#loading').remove();
            //     },
            //     //成功_顯示回傳資料
            //     success: function (data) {
            //         console.log(data);
            //         // $content.html($(data).find($content)).hide().fadeIn(400);
            //         $content.html(data).hide().fadeIn('slow');
            //     },
            //     //失敗_顯示錯誤訊息
            //     fail: function () {
            //         $content.html('<div id="loading">Please try again soon.</div>');
            //     },
            // });
        }, 1000); // 模擬 1秒的請求時間
    });
});
