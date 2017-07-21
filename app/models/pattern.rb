class Pattern < ApplicationRecord
  validates :name, :image_url, :short_description, :price, presence: true
  belongs_to :user

end
