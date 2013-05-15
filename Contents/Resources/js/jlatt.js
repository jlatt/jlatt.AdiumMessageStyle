$('#Chat').on('DOMNodeInserted', '.line', function(e) {
    var $line = $(this);
    if ($line.is('.hipchat-fixed')) {
        return;
    }

    $line.addClass('hipchat-fixed');
    var sender = $line.find('.sender .name').text();
    if (!(/^(github|jenkins|heroku)$/i).test(sender)) {
        return;
    }

    var $text = $line.find('.text');
    $text.html($text.text());
});
