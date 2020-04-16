# frozen_string_literal: true

class Api::V1::FavoritesController < ApplicationController
  def index
    @favorite_albums = get_favorites('Album')
    @favorite_songs = get_favorites('Song')
    @favorite_artists = get_favorites('Artist')
  end

  def create
    @favoritable = user_favorites.new(favoritable_type: params[:favoritable_type], favoritable_id: params[:id])
    @favoritable.save
    head :ok
  end

  def destroy
    @favoritable = user_favorites.find_by(favoritable_type: params[:favoritable_type], favoritable_id: params[:id])
    @favoritable.destroy
    head :ok
  end

  private

  def get_favorites(type)
    user_favorites.where(favoritable_type: type).map(&:favoritable)
  end


  def user_favorites
    current_user.favorites
  end
end
