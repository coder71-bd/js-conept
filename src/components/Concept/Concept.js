// font awesome icons
import {
  faBookmark,
  faHeart,
  faStar as regularStar,
} from '@fortawesome/free-regular-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//utilites
import formatTime from '../../utilities/utilities';
//components
import Tag from '../Tag/Tag.js';

const Concept = (props) => {
  const { name, description, img, rating, tag, price, read_time, unLocked } =
    props.concept;

  const showStars = (rating, iconType) => {
    const starArr = [];
    let element;
    let i = 0;

    // hack for generating unique key
    if (iconType === regularStar) {
      i += 10;
      rating += 10;
    }

    for (i = 0; i < rating; i++) {
      element = (
        <FontAwesomeIcon
          key={i}
          style={{ color: 'yellow', fontSize: '20' }}
          icon={iconType}
        />
      );
      starArr.push(element);
    }
    return starArr;
  };

  return (
    <div className="w-80 flex flex-wrap rounded-2xl lg:rounded-lg shadow-2xl border-2">
      <img
        alt="ecommerce"
        className="w-full h-64 lg:h-44 object-cover object-center rounded-t-2xl lg:rounded-t-lg"
        src={img}
      />

      <div className="w-full p-3 lg:pl-10 mt-6 lg:mt-0 space-y-2">
        {/* save and love icon */}
        <div className="flex justify-between items-center mb-2 px-5">
          <FontAwesomeIcon
            style={{ color: 'pink', fontSize: '20' }}
            icon={faHeart}
          />
          <FontAwesomeIcon
            style={{ color: 'black', fontSize: '20' }}
            icon={faBookmark}
          />
        </div>

        {/* concept name */}
        <h1 className="text-gray-900 text-3xl title-font font-bold mb-1">
          {name}
        </h1>

        {/* concept description */}
        <p>
          <small>{description}</small>
        </p>

        {/* rating */}
        <div className="flex py-2">
          <span className="flex items-center">
            {showStars(rating, faStar)}
            {showStars(5 - rating, regularStar)}
            <span className="text-gray-600 ml-3">{rating}.00</span>
          </span>
        </div>

        {/* price and read time */}
        <div className="flex justify-between items-center">
          <Tag tagName={tag} />
          <p>{formatTime(read_time)}</p>
        </div>

        {/* price */}
        <div className="flex justify-between items-center">
          <span className="title-font font-medium text-2xl text-gray-900">
            ${price.toFixed(2)}
          </span>
          <button
            onClick={() => props.handleUnlocked(props.concept)}
            className="flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
            disabled={unLocked}
          >
            unlock
          </button>
        </div>
      </div>
    </div>
  );
};

export default Concept;
