import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FavoriteIndexItem from './favorite_index_item';
import PatternListContainer from '../patterns/pattern_list_container';

class FavoriteIndex extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchFavorites(this.props.currentUser.id);
  }

  render(){
    const { favorites, currentUser, deleteFavorite } = this.props;
    console.log(this.props.favorites);
    if (this.props.favorites.length === 0) {
      return(
        <div className='outer-favorite-empty'>
          <div className='inner-favorite-empty'>
          <h1>You don't have any favorites yet!</h1>
          <Link className='return-shop' to='/patterns'>return to shop</Link>
          </div>
        </div>
    );}else {
      return(
        < PatternListContainer />
    );
    };
  }
}
export default FavoriteIndex;

// this.state = {
//   favorites: props.currentUser.favorites,
//   patterns: props.patterns
// }



//
//   componentWillReceiveProps(nextProps){
//   if (this.props.currentUser) {
//     if (nextProps.currentUser.favorites !== this.props.currentUser.favorites){
//       this.props.fetchFavorites(userId);
//     }
//   }
// }
