
json.extract! cart_item, :cart_id, :pattern_id

json.cart_item_id cart_item.id
json.item_name cart_item.pattern.name
json.item_description cart_item.pattern.short_description
json.item_price cart_item.pattern.price
json.item_image cart_item.item.image_url[0]
