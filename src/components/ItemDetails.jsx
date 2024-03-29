import React from 'react';
import PropTypes from 'prop-types';

const ItemDetails = ({ item }) => {
  const { itemName, description, imageUrl } = item;
  return (
    <div className="itemDetails">
      <img src={imageUrl} alt="img" />
      <div className="item__details">
        <p className="item__title">{itemName}</p>
        <p className="item__desc">{description}</p>
        <div className="item__price">
          <p>Price: $20 </p>
          <p>VAT 18%</p>
          <p>Total: 23.6</p>
        </div>
      </div>
    </div>
  );
};

ItemDetails.propTypes = {
  item: PropTypes.shape({
    itemName: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.string,
  }).isRequired,
};

export default ItemDetails;
