jQuery(function($){
    var socket = io.connect();
    var $messageForm = $("#send-message");
    var $alias = $('#alias')
    var $messageBox = $('#message')
    var $conversations = $("#conversations");

    $messageForm.submit(function(e){
        e.preventDefault();
        socket.emit('send message', {name: $alias.val(), message: $messageBox.val()});
        $messageBox.val('');
    });

    socket.on("new message", function(data){
        $conversations.append(data.name + ": " + data.message + "<br />")
    });

    window.injectCss = function() {
        $("link[type='css']").each(function() {
            newVersion = $(this).attr("href") + "?id=" + new Date().getMilliseconds()
            $(this).attr("href", newVersion);
            console.log(newVersion);
        });
    };

    $("[name='refreshCss']").on('click', injectCss);
});