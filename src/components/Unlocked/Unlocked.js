import React from 'react';
import Tag from '../Tag/Tag';

const Unlocked = () => {
  return (
    <li className="border py-6 mx-1 px-2 flex">
      <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1543013309-0d1f4edeb868?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGphdmFzY3JpcHR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
          className="w-full h-full object-center object-cover"
        />
      </div>

      <div className="ml-4 flex-1 flex flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href="./">Throwback Hip Bag</a>
            </h3>
            <p className="ml-4">$90.00</p>
          </div>
        </div>
        <div className="flex-1 flex items-center pt-3 justify-between text-sm">
          <Tag />
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
