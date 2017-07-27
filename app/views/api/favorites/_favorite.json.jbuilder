json.extract! favorite, :user_id, :pattern_id

json.user do
  json.id favorite.user.id
end
