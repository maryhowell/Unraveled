json.extract! cart, :id, :user_id, :purchased

json.cart_items do
  json.array! cart.cart_items do |cart_item|
    json.cart_item_id cart_item.id
    json.item_id cart_item.item.id
    json.item_name cart_item.pattern.name
    json.item_price cart_item.pattern.price
    json.item_image cart_item.pattern.image_url[0]
    json.item_updated_date_time cart_item.updated_at
  end
end
