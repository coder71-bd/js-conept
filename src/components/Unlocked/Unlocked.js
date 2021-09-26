import React from 'react';
import Tag from '../Tag/Tag';

const Unlocked = (props) => {
  const { name, img, price, tag } = props.unlock;
  return (
    <li className="border py-6 mx-1 px-2 flex">
      {/* unlocked concept image */}
      <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
        <img
          src={img}
          alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
          className="w-full h-full object-center object-cover"
        />
      </div>

      {/* unlocked concept info */}
      <div className="ml-4 flex-1 flex flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>{name}</h3>
            <p className="ml-4">${price}</p>
          </div>
        </div>
        <div className="flex-1 flex items-center pt-3 justify-between text-sm">
          <Tag tagName={tag} />
          <button
            type="button"
            className="ml-3 font-medium bg-red-500 hover:bg-red-700 text-white p-2 rounded-lg "
          >
            Remove
          </button>
        </div>
      </div>
    </li>
  );
};

export default Unlocked;
