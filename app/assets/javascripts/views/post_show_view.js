Journal.Views.PostShowView = Backbone.View.extend({

  events: {
    "dblclick .title": "editTitle",
    "dblclick .body": "editBody",
    "dblclick" : "submit"
  },

  initialize: function(options){
    this.model = options.model;
    //this.formActivated = false;
  },

  render: function(){
    $h1 = $("<h1>").html(this.model.attributes.title).addClass("title");
    $div = $("<div>").html(this.model.attributes.body).addClass("body");
    $back = $("<a>").attr("href", "#/").html("Back");

    this.$el.append($h1, $div, $back);
    return this;
  },

  editTitle: function(event){
    $(event.target).remove();
    var content = JST["posts/title"]({attributes: this.model.attributes});
    this.$el.prepend(content);
    //this.formActivated = true;
  },

  submit: function(event){
    var setup = $(event.target).hasClass("title");
    if(!setup){
      $form = this.$el.find("form");
      $input = $form.find("input");
     //attribute = {$input.attr("name"): $input.val()};
     attribute = {};
     attribute[$input.attr("name")] = $input.val();
      this.model.set(attribute);
      this.model.save();
      this.$el.empty();
      this.render();
      this.formActivated = false;
    }
  },

});