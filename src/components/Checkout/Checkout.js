import React from 'react';
import Unlocked from '../Unlocked/Unlocked';

const Checkout = (props) => {
  return (
    <div>
      <div className="pl-10 sticky top-0 w-96 max-h-screen flex">
        <div className="flex flex-col bg-white shadow-xl">
          <div className="flex-1 py-6  px-4 sm:px-6">
            <div className="flex items-center justify-between">
              <h2
                className="text-lg font-medium text-gray-900"
                id="slide-over-title"
              >
                Total Unlocked Concepts:
              </h2>
              <p>20</p>
            </div>
          </div>

          <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Total Price</p>
              <p>$262.00</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Shipping and taxes calculated at checkout.
            </p>
          </div>
          {/* unlocked concepts */}
          <div className="mt-3 overflow-y-scroll">
            <div className="flow-root">
              <ul className="-my-6 divide-y divide-gray-200">
                {props.unlocked.map((unlock) => (
                  <Unlocked key={unlock.id} unlock={unlock} />
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <a
              href="./"
              className="flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Checkout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
