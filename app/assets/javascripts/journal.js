window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function() {
    var posts = new Journal.Collections.Posts;
    posts.fetch();
    // var indexView = new Journal.Views.PostsIndexView({collection: posts});
    // $("body").html(indexView.render().$el);
    // posts.fetch();
    new Journal.Routers.Posts({ $rootEl: $("body"), collection: posts });
    Backbone.history.start();
  }
};

$(function(){

  Journal.initialize();

});
