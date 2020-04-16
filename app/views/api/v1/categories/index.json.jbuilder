# frozen_string_literal: true

json.categories @categories.each do |category|
  json.id category.id
  json.name  category.name
  json.cover url_for(category.image)
end
