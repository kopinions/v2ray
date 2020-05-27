var json = function () {};

json.register = function (Handlebars) {
    Handlebars.registerHelper('json', function(obj) {
	return JSON.stringify(obj, null, 2);
    });
};

module.exports = json;
