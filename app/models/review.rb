class Review < ApplicationRecord
  validates :item_id, :user_id, :description, presence: true

  belongs_to :item
  belongs_to :user
end
