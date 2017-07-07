exports.config = {
    files: {
        javascripts: {
            joinTo: 'app.js'
        },
        stylesheets: {
            joinTo: 'app.css'
        },
        templates: {
            joinTo: 'app.js'
        }
    },
    npm: {
        globals: {
            THREE: 'three',
            dat: 'dat-gui'
        }
    }
};
