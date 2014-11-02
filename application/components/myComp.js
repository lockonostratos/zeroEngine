define(["knockout", "text!./template.html"], function(ko, template) {

    function MyViewModel(route) {
        this.message = ko.observable('Welcome to Zero Engine!');
    }

    MyViewModel.prototype.doSomething = function() {
        this.message('You invoked doSomething() on the viewmodel.');
    };

    return { viewModel: MyViewModel, template: template };
});
