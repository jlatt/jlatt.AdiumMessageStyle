(function() {
    var NOTICE_REGEX = /^\(notice\)\s*/;
    var HTML_SENDER_REGEX = /^(GitHub|Jenkins|Heroku|Pivotal)$/;

    $('#Chat').on('DOMNodeInserted', '.line:not(.html-fixed)', function(e) {
        var $line = $(this).addClass('html-fixed');
        var $text = $line.find('.text');

        var message = $text.html();
        if (NOTICE_REGEX.test(message)) {
            $text.html(message.replace(NOTICE_REGEX, ''));
            $line.addClass('notice');
        }

        var sender = $line.find('.sender .name').text();
        if (HTML_SENDER_REGEX.test(sender)) {
            $text.html($text.text());
        }
    });
}).call(this);
