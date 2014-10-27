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
});