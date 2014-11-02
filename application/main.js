define(['jquery', 'knockout', 'socket.io'], function($, ko, io){
    console.log($("body"));
    console.log(window.socket = io.connect());
});