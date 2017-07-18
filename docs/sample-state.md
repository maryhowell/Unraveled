```js
{
  session: {  
    currentUser: {
      id: 1,
      first_name: "Dallas",
      last_name: "Hall",
      email: "sample_user_email_address",
    },
    errors: []
  },
  sellers: {
    1: {
      name: "sample_seller_name",
      items: {
        1: {
          item_id: 1
        }
      }
    }
  },
  patterns: {
    1: {
      seller_id: 1,
      name: "sample_item_name",
      short_description: "sample_item_description",
      long_description: "sample_item_description",
      category: "sample_item_category",
      price: 15,
      materials: "yarn-type",
      pattern_spec: "sample_pattern_spec",
      tags: {
        id: 1,
        tag_name: "name"
      }
    }

  }
  cart: {
    cart_id: 1,
    user_id: 1
  },
  completed_transactions: {
    1: {
      cart_id: 1,
    }
  },
  reviews: {
    1: {
      item_id: 1,
      user_id: 1,
      rating: 5,
      description: "sample_item_review_description"
    }
  }
}

```js
