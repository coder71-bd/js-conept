import formatTime from '../../utilities/utilities';
import Tag from '../Tag/Tag.js';

const Concept = (props) => {
  // img
  const { name, description, rating, tag, price, read_time, unLocked } =
    props.concept;
  return (
    <div className="w-80 flex flex-wrap rounded-2xl lg:rounded-lg shadow-2xl border-2">
      <img
        alt="ecommerce"
        className="w-full h-64 lg:h-44 object-cover object-center rounded-t-2xl lg:rounded-t-lg"
        src="https://images.unsplash.com/photo-1543013309-0d1f4edeb868?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fGphdmFzY3JpcHR8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      />

      <div className="w-full p-3 lg:pl-10 mt-6 lg:mt-0 space-y-2">
        {/* save and love */}
        <div className="flex justify-between items-center mb-2 px-5">
          {/* use icon here */}
          <p>Save</p>
          <p>Love</p>
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
            <svg
              fill="yellow"
              stroke="yellow"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg
              fill="yellow"
              stroke="yellow"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg
              fill="yellow"
              stroke="yellow"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg
              fill="yellow"
              stroke="yellow"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg
              fill="none"
              stroke="yellow"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-4 h-4 text-indigo-500"
              viewBox="0 0 24 24"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
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
