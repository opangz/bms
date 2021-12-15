import React from 'react';
import PropTypes from 'prop-types';

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {item: ''};
  }

  componentDidMount() {
    const { url } = this.props;

    // Call REST API
    fetch(url, { credentials: 'same-origin' })
      .then((response) => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then((data) => {
        this.setState({
          item: data.item,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { item } = this.state;

    return (
      <div className="itemsList">
        <p> {item.item_id} </p>
        <p> {item.item} </p>
        <p> {item.date} </p>
        <p> {item.category} </p>
        <p> {item.sub_category} </p>
        <p> {item.pretax_price} </p>
        <p> {item.tax} </p>
        <p> {item.price} </p>
      </div>
    );
  }
}

Item.propTypes = {
  url: PropTypes.string.isRequired,
};

export default Item;