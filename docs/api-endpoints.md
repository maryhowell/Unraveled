# API Endpoints

## HTML API

### Root

* `GET /`
  * loads React web app

## JSON API

### Users

* `POST /api/users`
* `PATCH /api/users`
* `GET /api/users/:userId`
  * displays current user
* `GET /api/users/:userId/favorites`
  * displays users saved favorites
* `GET /api/users/:userId/carts/:cartId/patterns`
  * displays a list of all the patterns in a user's cart
* `GET /api/users/:userId/reviews`
  * displays a list of all the reviews submitted by a user
* `GET /api/users/:userId/favorites`
  * displays a list of all the users favorites

### Session

* `POST /api/session`
* `DELETE /api/session`

### Sellers

* `GET /api/sellers`
  * displays a list of all the sellers
* `GET /api/sellers/:sellerId`
  * displays a seller
* `GET /api/sellers/:sellerId/patterns`
  * displays a list of all the patterns that a seller has listed for sale

### Patterns

* `GET /api/patterns`
  * displays all patterns
* `GET /api/pattern/:patternId`
  * displays individual pattern
* `GET /api/patterns/:patternId/reviews`
  * displays a list of all the reviews for an pattern


### Reviews

* `POST /api/reviews`
* `PATCH /api/reviews/:reviewId`
* `DELETE /api/reviews/:reviewId`
