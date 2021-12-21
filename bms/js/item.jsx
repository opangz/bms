import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {
  render() {
    const { item, category, date } = this.props;

    return (
        <div className="item">
          <p> I am an item {item} category {category} and date {date} </p>
        </div>
    );
  }
}

Item.propTypes = {
  item: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default Item;