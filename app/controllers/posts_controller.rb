class PostsController < ApplicationController
  def index
    all_posts = Post.all
    render :json => all_posts
  end

  def general
  end

  def create
    post = Post.create!(params[:post])
    render :json => post
  end

  def update
    post = Post.find(params[:id])
    post.update_attributes!(params[:post])
    render :json => post
  end
end
