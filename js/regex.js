let getParam = function (name) {
    let search = document.location.search;
    let pattern = new RegExp("[?&]" + name + "\=([^&]+)", "g");
    let matcher = pattern.exec(search);
    let items = null;
    if (null != matcher) {
        try {
            items = decodeURIComponent(decodeURIComponent(matcher[1]));
        } catch (e) {
            try {
                items = decodeURIComponent(matcher[1]);
            } catch (e) {
                items = matcher[1];
            }
        }
    }
    return items;
};
function regex_api(CSRF, URL) {
    let r = $.trim($('#form-regex').val());
    let texts = $.trim($('#form-text').val());
    if (r.length == 0 | texts.length == 0) {
        alert('待提取信息和正则表达式都不能为空！');
        return false
    }
    ;
    $.ajaxSetup({
        data: {
            csrfmiddlewaretoken: CSRF
        }
    });
    $('.push-result').html('<i class="fa fa-spinner fa-pulse fa-3x my-3"></i>');
    $.ajax({
        type: 'post',
        url: URL,
        data: {
            'r': r,
            'texts': texts,
            'key': getParam('key')
        },
        dataType: 'json',
        success: function (ret) {
            let newhtml = '<div class="text-left re-result">' + ret.result + "</div>"
            $('.push-result').html(newhtml);
        },
    })
}