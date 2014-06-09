UI.registerHelper('counter', function(vic) {
		return Punches.find({victim:vic}).count();
});
