define(['jquery', 'knockout', 'socket.io'], function($, ko, io){
    ko.components.register('my-component', { require: 'components/myComp'});
    console.log($("body"));
    console.log(window.socket = io.connect());

    ko.applyBindings();
});