$(function () {
    // container form
    $('#submit').on('click', function (e) {
        // 會影響form的html格式驗證
        e.preventDefault();

        // 姓名
        let name = $('#ur_name').val();
        if (!name) {
            $('.name_alert').html("未填寫");
            return;
        }

        // 信箱
        let email = $('#ur_email').val();
        if (!email) {
            $('.email_alert').html("未填寫");
            return;
        }
        if (!isValidEmail(email)) {
            // 如果自定義驗證失敗，阻止表單提交

            $('.email_alert').html("請輸入有效的電子郵件地址");
            return;
        }

        // 聯繫方式
        let contact = $('#ur_contact_info').val() || '未填寫';

        // 內容
        let msg = $('#ur_textarea').val();
        if (!msg) {
            $('.textarea_alert').html("未填寫");
            return;
        }

        // post
        let data = {
            'entry.1652653335': name,
            'entry.2069127806': email,
            'entry.404991953': contact,
            'entry.598644660': msg
        };
        $.ajax({
            type: 'POST',
            url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdTx_3dqYIioh4jLY2cMv4a44cTkXxqL-KLdW-1ppG1HXbx2w/formResponse',
            data: data,
            contentType: 'application/json',
            dataType: 'jsonp',
            complete: function () {
                $('.posted').html("訊息已發送");

            }
        });
    });

    $('input').attr('autocomplete', "off");

    $('form').on('click', function () {
        $('.posted').html("");
    })
    $('#ur_name').on('click', function () {
        $('.name_alert').html("");
    })
    $('#ur_email').on('click', function () {
        $('.email_alert').html("");
    })
    $('#ur_textarea').on('click', function () {
        $('.textarea_alert').html("");
    })
    $('#clear').on('click', function () {
        $('#ur_name').val("");
        $('#ur_email').val("");
        $('#ur_contact_info').val("");
        $('#ur_textarea').val("");
    })


    // slier form
    $('#m_submit').on('click', function (e) {
        // 會影響form的html格式驗證
        e.preventDefault(); 
        
        // 姓名
        let name = $('#m_ur_name').val();
        if (!name) {
            $('.name_alert').html("未填寫");
            return;
        }
        
        // 信箱
        let email = $('#m_ur_email').val();
        if (!email) {
            $('.email_alert').html("未填寫");
            return;
        }
        if (!isValidEmail(email)) {
            // 如果自定義驗證失敗，阻止表單提交
        
            $('.email_alert').html("請輸入有效的電子郵件地址");
            return;
        }
        
        // 聯繫方式
        let contact = $('#m_ur_contact_info').val() || '未填寫';

        // 內容
        let msg = $('#m_ur_textarea').val();
        if (!msg) {
            $('.textarea_alert').html("未填寫");
            return;
        }

        // post
        let data = {
            'entry.1652653335': name,
            'entry.2069127806': email,
            'entry.404991953': contact,
            'entry.598644660': msg
        };
        $.ajax({
            type: 'POST',
            url: 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSdTx_3dqYIioh4jLY2cMv4a44cTkXxqL-KLdW-1ppG1HXbx2w/formResponse',
            data: data,
            contentType: 'application/json',
            dataType: 'jsonp',
            complete: function () {
                $('.posted').html("訊息已發送");
                
            }
        });
    });

    $('input').attr('autocomplete', "off");

    $('form').on('click', function () {
        $('.posted').html("");
    })
    $('#m_ur_name').on('click', function () {
        $('.name_alert').html("");
    })
    $('#m_ur_email').on('click', function () {
        $('.email_alert').html("");
    })
    $('#m_ur_textarea').on('click', function () {
        $('.textarea_alert').html("");
    })
    $('#m_clear').on('click', function () {
        $('#m_ur_name').val("");
        $('#m_ur_email').val("");
        $('#m_ur_contact_info').val("");
        $('#m_ur_textarea').val("");
    })
});

// 自定義 email 驗證函數(正則表達式)
function isValidEmail(email) {
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}