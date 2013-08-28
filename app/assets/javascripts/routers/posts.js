Journal.Routers.Posts = Backbone.Router.extend({

  initialize: function(options){
    this.$rootEl = options.$rootEl;
    this.collection = options.collection;
  },

  routes: {
    "": "index",
    "posts/:id/edit": "edit",
    "posts/:id": "show"
  },

  index: function(){
    // var posts = new Journal.Collections.Posts;
    var posts = this.collection;
    var indexView = new Journal.Views.PostsIndexView({collection: posts});
    this.$rootEl.html(indexView.render().$el);
    posts.fetch();
  },

  show: function(id){
    var model = this.collection.get(id);
    var showView = new Journal.Views.PostShowView({model: model});
    this.$rootEl.html(showView.render().$el);
  },

  edit: function(id){
    var model = this.collection.get(id);
    var editView = new Journal.Views.PostEditView({model: model,
                                                  collection: this.collection});
    this.$rootEl.html(editView.render().$el);
  }

});