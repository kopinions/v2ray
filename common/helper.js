var json = function () {};

json.register = function (Handlebars) {
    Handlebars.registerHelper('json', function(obj) {
	return JSON.stringify(obj, null, 2);
    });

    Handlebars.registerHelper('select', function(list, name, opts) {
	var i, result = '';
	if (!list) {
	    return result;
	}
	
	for(i = 0; i < list.length; ++i)
            if(list[i]["name"] == name)
		result = result + opts.fn(list[i]);
	return result;
    });
};

module.exports = json;
