// Index route
FlowRouter.route("/", {
  action: function() {
    // This statement means:
    // 'Display the main template and in for the dynamic template called "content", render the template "home".'
    BlazeLayout.render("main", {
      content: "home"
    });
  },
  // Optional, but it makes me feel warmer inside.
  name: "Index"
});
FlowRouter.route("/about", {
  action: function() {
    BlazeLayout.render("main", {
      // If an about template existed...
      content: "about"
    });
  },
  name: "About"
});
FlowRouter.route("/login", {
  action: function() {
    BlazeLayout.render("main", {
      content: "login"
    });
  },
  name: "Login"
});
FlowRouter.route("/register", {
  action: function() {
    BlazeLayout.render("main", {
      content: "register"
    });
  },
  name: "Register"
});
FlowRouter.route("/team", {
  action: function() {
    BlazeLayout.render("main", {
      content: "team"
    });
  },
  name: "Team"
})
