json.title @album.title
json.artist_name @album.artist.name
json.cover_url url_for(@album.cover)

json.songs @album.songs do |song|
  json.id song.id
  json.title song.title 
  json.artist_name  song.album.artist.name
  json.file_url url_for(song.file)
end