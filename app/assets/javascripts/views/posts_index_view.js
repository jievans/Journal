Journal.Views.PostsIndexView = Backbone.View.extend({

  events: {
    "click button.delete" : "showButton"
  },

  initialize: function(options){
     this.collection = options.collection;
     var renderCallback = this.render.bind(this);
     this.listenTo(this.collection, "add", renderCallback);
     this.listenTo(this.collection, "change:title", renderCallback);
     this.listenTo(this.collection, "remove", renderCallback);
     this.listenTo(this.collection, "reset", renderCallback);
     // this.listenTo(this.collection, "fetch", renderCallback);
  },

  render: function(){
    var ul = $("<ul>");

    // collection = this.collection;
 //
 //    collection.fetch({
 //      success: function(){
 //
 //      }
 //    });
    this.collection.each(function (post){
      ul.append($("<li>").text(post.attributes.title));
      $show = $("<a>").attr("href", "#/posts/" + post.attributes.id).html("Show");
      ul.append($("<button>").html("Delete")
                             .attr("data-id", post.attributes.id)
                             .addClass("delete"));
      ul.append($show);
    });

    this.$el.html(ul);
    return this;
  },

  showButton: function(event){
    alert($(event.target).attr("data-id"));
  }

});