$('#Chat').on('DOMNodeInserted', '.line:not(.html-fixed)', function(e) {
    var $line = $(this).addClass('html-fixed');
    var sender = $line.find('.sender .name').text();
    if (!(/^(GitHub|Jenkins|Heroku|Pivotal)$/).test(sender)) {
        return;
    }
    var $text = $line.find('.text');
    $text.html($text.text());
});
