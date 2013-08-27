Journal.Views.PostShowView = Backbone.View.extend({

  initialize: function(options){
    this.model = options.model;
  },

  render: function(){
    $h1 = $("<h1>").html(this.model.attributes.title);
    $div = $("<div>").html(this.model.attributes.body);
    $back = $("<a>").attr("href", "#/").html("Back");

    this.$el.append($h1, $div, $back);
    return this;
  }

});