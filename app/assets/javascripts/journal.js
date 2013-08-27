window.Journal = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},

  initialize: function() {
    var posts = new Journal.Collections.Posts;
    var indexView = new Journal.Views.PostsIndexView({collection: posts});
    $("body").html(indexView.render().$el);
    posts.fetch();
    // posts.fetch({
//       success: function(collection){
//         var indexView = new Journal.Views.PostsIndexView({collection: posts});
//         $("body").html(indexView.render().$el);
//       }
//     });
  }
};

$(function(){

  Journal.initialize();

});


// $(document).ready(function(){
//
//   Journal.initialize();
// });
