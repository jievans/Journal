window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function() {
    posts = new Journal.Collections.Posts;
    posts.fetch({
      success: function () {
        new Journal.Routers.Posts({ $rootEl: $("body"), collection: posts });
        Backbone.history.start();
      }
    });
    // var indexView = new Journal.Views.PostsIndexView({collection: posts});
    // $("body").html(indexView.render().$el);
    // posts.fetch();

    // new Journal.Routers.Posts({ $rootEl: $("body"), collection: posts });
    // Backbone.history.start();
  }
};

$(function(){

  Journal.initialize();

});
