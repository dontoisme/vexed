# Vexed

Vexed is a single page app for my fiancee and I to track who is frustrating the other partner. It’s a simple counter app that keeps track of how many times I frustrate her or she frustrates me.

I think I’ll use meteor in this app, so I can easily keep track of the button presses.
   * App log’s us in, and it shows a picture of the other by default. When I press on the button/photo, it changes the picture to a frustrated version and adds one to the counter
   * Scrolling down or in a separate view, I can see how frustrated she is by looking at how many times she has hit me.


# Todo

[X]Create Meteor App

[ ]Collection of users
- [ ]normal photo
- [ ]frustrated photo
- [ ]name

[X]Collection of Punches
- [X]date
- [X]instigator
- [X]victim
- [X]id

[X]Login
- [X]one for Don
- [X]one for Sara
- [ ][Future] if not Sara or Don login and get to see both photos side by side.

[X]Main View
- [X]Dependent on who is logged in
    - [X]Sara sees herself (so if she presses on herself, we are assuming it was don who instigated)
    - [X]Don sees himself (so if he presses on himself, we are assuming it was sara - who instigated)
    - [ ][Future] Let one of us decided who instigated.[X]Click on him and update db
- [X]Click on her and update db
- [ ]First Login

[ ]Landing Page

[ ]Both our pictures, pressing on them makes the counter go up for the other side.

[ ]Sign up
[ ]Take/use Photo for Normal
[ ]Take/use Photo for Frustrated
[ ]Do the first press.

[ ]Styles
- [ ]Splash
- [ ]Login & Nav
- [ ]Photos
