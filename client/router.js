// Index route
FlowRouter.route("/", {
  action: function() {
    // Display the main template and in for the dynamic template called "content", render the template "home".
    BlazeLayout.render("main", {
      content: "home"
    });
  },
  // Optional, but it makes me feel warmer inside.
  name: "Index"
});
// Survey route
FlowRouter.route("/survey", {
  action: function() {
    // Display the main template and in for the dynamic template called "content", render the template "home".
    BlazeLayout.render("main", {
      content: "survey"
    });
  },
  // Again, optional, but it makes me feel warmer inside.
  name: "Survey"
});
// You know the drill
FlowRouter.route("/dashboard", {
  action: function() {
    BlazeLayout.render("main", {
      content: "dashboard"
    });
  },
  name: "Dashboard"
});
