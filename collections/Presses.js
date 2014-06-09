// Punches collection for how many times a person was pressed and by who.
//
//Punch ->
//					_id: Default Mongo Id
//					date: date of press
//					instigator: person who pressed the button
//					victim: person who got their button pressed
//
Punches = new Meteor.Collection('Punches');
