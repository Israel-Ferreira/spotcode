# frozen_string_literal: true

class Api::V1::SearchController < ApplicationController
  def index
    query = params[:query]

    @songs = Song.where('title LIKE ?', "%#{query}%")
    @albums = Album.where('title LIKE ?', "%#{query}")
    @artists = Artist.where('name LIKE ?', "%#{query}")
  end
end
