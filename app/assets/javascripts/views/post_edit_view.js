Journal.Views.PostEditView = Backbone.View.extend({

  events: {
    "submit":"edit"
  },

  initialize: function(options){
    this.model = options.model;
    this.collection = options.collection;
    this.attributes = this.model.attributes;
  },

  render: function(){
    var content = JST["posts/edit"]({ post: this.attributes });
    this.$el.html(content);
    return this;
  },

  edit: function(event){
    console.log("In the create");
    event.preventDefault();
    var attributes = $(event.currentTarget).find("form").serializeJSON();
    attributes = attributes.post;
    attributes.id = this.model.id;
    //var updated_model = new Journal.Models.Post(attributes);

    var that = this;
    this.model.set(attributes);
    this.model.save(null, {
      success: function(){
        console.log("Inside success!");
        Backbone.history.navigate("#/");
      },
      error: function(model, response){
        console.log("Inside error!");
        console.log(response);
        that.attributes = attributes;
        that.render();
      }
    });

  }
});