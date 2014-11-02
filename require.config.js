require.config({
    baseUrl: "./scripts",
    paths: {
        "bootstrap":            "../bower-modules/components-bootstrap/js/bootstrap.min",
        "crossroads":           "../bower-modules/crossroads/dist/crossroads.min",
        "hasher":               "../bower-modules/hasher/dist/js/hasher.min",
        "jquery":               "../bower-modules/jquery/dist/jquery",
        "knockout":             "../bower-modules/knockout/dist/knockout",
        "knockout-projections": "../bower-modules/knockout-projections/dist/knockout-projections",
        "signals":              "../bower-modules/js-signals/dist/signals.min",
        "text":                 "../bower-modules/requirejs-text/text",
        "socket.io":            "../bower-modules/socket-io/socket.io"
    },
    shim: {
        "bootstrap": { deps: ["jquery"] },
        "socket.io": { exports: "io" }
    }
});