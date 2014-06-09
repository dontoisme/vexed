// Router.configure({
// 	layoutTemplate: "layout"
// });

// PressesController = RouteController.extend({
// 	template: "layout"
// });

Router.map(function(){
	this.route("layout",{
		path: "/"
	})
})

var isLogged = function(pause){
	var m =  Meteor.users.findOne({username: him});
	var f =  Meteor.users.findOne({username: her});

	// This way can be improved, probably through a helper in the template.
	// Rendering for him or her or them.
	if(Meteor.user()){
		if(Meteor.user().username == m.username) {
			this.render("hisView");
			pause();
		}
		else if(Meteor.user().username == f.username) {
			this.render("herView");
			pause();
		} else {
			this.render("layout");
			pause();
		}
	}

}
// Before hitting the layout template, check if he or she is logged in.
Router.onBeforeAction(isLogged);
