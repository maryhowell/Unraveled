class Favorite < ApplicationRecord
  validates :user_id, :pattern_id, presence: true

  belongs_to :user
  belongs_to :pattern
end
