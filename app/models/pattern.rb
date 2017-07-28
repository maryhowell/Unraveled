class Pattern < ApplicationRecord
  validates :name, :image_url, :short_description, :price, presence: true
  belongs_to :user, foreign_key: :seller_id, class_name: :User
  has_many :favorites


end
