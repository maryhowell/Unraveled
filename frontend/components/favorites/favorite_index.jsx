import React, { Component } from 'react';
import { Link } from 'react-router';

import FavoriteIndexItem from './favorite_index_item';

class FavoriteIndex extends Component {
  constructor(props) {
    super(props);


  }


  render(){
    const { favorites, currentUser, deleteFavorite } = this.props;

    if (this.props.favorites.length === 0) {
      return(
        <div className='outer-favorite-empty'>
          <div className='inner-favorite-empty'>
          <h1>You don't have any favorites yet!</h1>
          <Link className='return-shop' to='/patterns'>return to shop</Link>
          </div>
        </div>
    );}else {
      <section className="favorites-section">
        <ul className="favorites">
          { favorites.reverse().map(favorite => <FavoriteIndexItem key={favorite.id}
            favorite={favorite}
            deleteFavorite={deleteFavorite}
            currentUser={currentUser} />
          )}
        </ul>
      </section>

    };
  }
}
export default FavoriteIndex;

// this.state = {
//   favorites: props.currentUser.favorites,
//   patterns: props.patterns
// }


//   componentDidMount() {
//     this.props.fetchFavorites(userId);
//   }
//
//   componentWillReceiveProps(nextProps){
//   if (this.props.currentUser) {
//     if (nextProps.currentUser.favorites !== this.props.currentUser.favorites){
//       this.props.fetchFavorites(userId);
//     }
//   }
// }
