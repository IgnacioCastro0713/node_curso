const hbs = require('hbs');

//Helpers
hbs.registerHelper('getYear', () => new Date().getFullYear());
hbs.registerHelper('capitalize', (value) => {
    if (!value) return '';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
});