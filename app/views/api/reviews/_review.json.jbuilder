json.extract! review, :id, :description
json.review_date review.updated_at

json.user do
  json.email review.user.email
end
