# UnRaveld

[Explore UnRaveld](http://unraveld.herokuapp.com/#/)
or go to UNRAVELD.CO

UnRaveld is a single-page e-commerce website that is inspired by Etsy, Ravelry, and Brooklyn Tweed.

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

UnRaveld has a custom build user authentication system. Although registering or signing in isn't required to explore the site, it's required to add patterns to your favorites and to leave a review.

![Modal](https://github.com/maryhowell/Unraveled/blob/master/app/assets/images/login.png)

### Item Listings

Update

![Item](https://github.com/maryhowell/Unraveled/blob/master/app/assets/images/image.png)

### Reviews

UPdate

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

- project influenced by https://etsaclone.christinetwang.me/

## Future Features

- [ ] Search Bar
- [ ] Cart
- [ ] Ravelrys API
