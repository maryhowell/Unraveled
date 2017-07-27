class Review < ApplicationRecord
  validates :item_id, :user_id, :description, presence: true

  belongs_to :pattern, foreign_key: :item_id, class_name: :Pattern
  belongs_to :user
end
