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
