import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Item = ({ item }) => {
  const { _id, itemName, imageUrl } = item;

  return (
    <div className="item">
      <Link to={`items/${_id}`}>
        <div className="item__data">
          <figure>
            <img src={imageUrl} alt={imageUrl} />
            <figcaption className="items__data-title">{itemName}</figcaption>
          </figure>
          <div className="item__socialMedia">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </div>

        </div>
      </Link>
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string,
    itemName: PropTypes.string,
    imageUrl: PropTypes.string,
  }).isRequired,
};

export default Item;
