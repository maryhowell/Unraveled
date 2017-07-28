# UnRaveld

[Explore UnRaveld](http://unraveld.herokuapp.com/#/)

UnRaveld is a single-page e-commerce web application that is inspired by Etsy, Ravelry, and Brooklyn Tweed.

![UnRaveld](https://github.com/maryhowell/Unraveled/blob/master/app/assets/images/front-unraveld.png)

## Technologies Used

* Ruby on Rails
* JavaScript
* React
* Redux
* PostgreSQL
* HTML5
* CSS3

## Features and Implementation

### User Authentication

UnRaveld has a full end-to-end authentication system where users can register or sign in, and continue to explore the site without a redirect. When a user registers, his/her password is encrypted into a password hash with BCrypt before it's stored in the database. When a user signs in, his/her password is, again, encrypted with BCrypt and compared with the stored password hash for that user. Although registering or signing in isn't required to explore the site, it's required to add patterns to your favorites and to leave a review.

![Modal](https://github.com/maryhowell/Unraveled/blob/master/app/assets/images/login.png)

### Item Listings

Users can browse the latest items from the home page or all the patterns from the All Patterns page. When a user clicks on an item, he/she will be directed to the item page, where the user can read all the reviews for that item. An example of an item page is shown below:

![Item](https://github.com/maryhowell/Unraveled/blob/master/app/assets/images/item.png)

### Reviews

When a user makes an account he/she has access to review forms for a knitting pattern. When the user submits a review for an pattern, he/she is directed to the page for that item and his/her review can be seen on that page. Below are examples of an item page and an item page with a newly submitted review by a user named 'Jessica':

![Review](https://github.com/maryhowell/Unraveled/blob/master/app/assets/images/review.png)


Below is the way a user can favorite a pattern.  This code changes the value of hearted to check if a user already has 'hearted' this pattern previously.  It also gives you the ability to change your mind if you want to remove it from your favorites. This will store the information in the database in a joins table. 


```
componentWillReceiveProps(nextProps) {
  if (Object.keys(nextProps.favorites).length > 0) {
    this.hearted = true;
  } else {
    this.hearted = false;
  }
}

toggleFavorite(){
  if (this.hearted) {
    this.dislikePattern(Object.keys(this.props.favorites)[0]);
  } else {
    this.likePattern(this.props.pattern.pattern_id);
  }
}

dislikePattern(favoriteId){
  this.props.deleteFavorite(favoriteId).then(() => this.props.fetchFavorite(this.props.match.params.patternId));
}

likePattern(){
  this.props.createFavorite({
    user_id: this.props.currentUser.id,
    pattern_id: this.props.match.params.patternId
  });

}

 heart(){
  if (this.hearted) {
    return (
      <div className="heart-container">
        <div onClick={this.toggleFavorite} className="fa fa-heart-o fa-2x heart-red" name="fa-heart-o" aria-hidden='true'></div>
      </div>
    );
  } else {
    return (
      <div className="heart-container">
        <div onClick={this.toggleFavorite} className="fa fa-heart-o fa-2x heart" name="fa-heart-o" aria-hidden='true'></div>
      </div>
    );
  }
}
```

## Future Features

- [ ] Search Bar
- [ ] Cart
- [ ] Ravelrys API
