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
FlowRouter.route("/dash", {
  action: function() {
    BlazeLayout.render("main", {
      content: "dashboard"
    });
  },
  name: "Dashboard"
});
FlowRouter.route("/time", {
  action: function() {
    BlazeLayout.render("main", {
      content: "time"
    });
  } // Too lazy
});
FlowRouter.route("/gender", {
  action: function() {
    BlazeLayout.render("main", {
      content: "gender"
    });
  }
});
FlowRouter.route("/spending", {
  action: function() {
    BlazeLayout.render("main", {
      content: "spending"
    });
  }
});
