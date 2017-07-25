class CartItem < ApplicationRecord
  validates :cart_id, :pattern_id, presence: true
  validates :pattern_id, uniqueness: { scope: :cart_id, message: "Already in cart" }

  belongs_to :cart
  belongs_to :item

  has_one :user,
    through: :cart,
    source: :user

end
