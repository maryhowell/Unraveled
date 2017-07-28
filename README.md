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

-add image here for modal

### Item Listings

Users can browse the latest items from the home page or all the patterns from the All Patterns page. When a user clicks on an item, he/she will be directed to the item page, where the user can read all the reviews for that item. An example of an item page is shown below:

-add image here for item page

### Reviews

When a user makes an account he/she has access to review forms for a knitting pattern. When the user submits a review for an pattern, he/she is directed to the page for that item and his/her review can be seen on that page. Below are examples of an item page and an item page with a newly submitted review by a user named 'Pick Name for Review':

-add image for review


Below is the render for my items.  This code incompasses renders to three different pages.  This includes the root, All patterns and favorites.  


```  render() {
    if (this.props.loading === true || Object.keys(this.props.patterns).length === 0) {
      return <div>Loading</div>;
    }
    const { patterns, fewPatterns, favorites } = this.props;

    if (this.props.location.pathname === '/') {
      return (
        <section className='section-description-preview'>
          <div className='patterns-index'>
            <ul className='something'>
              { fewPatterns.map(pattern => <PatternIndexPattern key={pattern.id} pattern={pattern} />)}
            </ul>
          </div>
        </section>
      );
    } else if (this.props.location.pathname.includes('/favorites')) {
      return (
        <section className='section-favorites-preview'>
          <div className='patterns-index'>
            <ul className='favorites-show'>
              { favorites.map(favorite => <PatternIndexPattern
                                          key={favorite.pattern_id}
                                          pattern={patterns[favorite.pattern_id]}
                                           />)}
            </ul>
          </div>
        </section>
      );
    }else {
      return (
        <section className='section-description-all'>
          <div >
            <ul className='patterns-index'>
              { patterns.map(pattern => <PatternIndexPattern key={pattern.id} pattern={pattern} />)}
            </ul>
          </div>
        </section>
      );
    }
  }
}
```

## Future Features

- [ ] Search Bar
- [ ] Cart
- [ ] Ravelrys API
