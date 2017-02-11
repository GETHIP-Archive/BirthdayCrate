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
// The about page
FlowRouter.route("/about", {
  action: function() {
    BlazeLayout.render("main", {
      content: "about"
    });
  },
  name: "About"
});
// The team page
FlowRouter.route("/login", {
  action: function() {
    BlazeLayout.render("main", {
      content: "login"
    });
  },
  name: "Login"
});
// Registration page
FlowRouter.route("/register", {
  action: function() {
    BlazeLayout.render("main", {
      content: "register"
    });
  },
  name: "Register"
});
// Team page (will be replaced at some point to be put on the homepage)
FlowRouter.route("/team", {
  action: function() {
    BlazeLayout.render("main", {
      content: "team"
    });
  },
  name: "Team"
})
