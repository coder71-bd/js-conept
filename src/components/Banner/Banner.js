import React from 'react';
import coding from '../../images/coding.png';

const Banner = () => {
  return (
    <>
      {/* website info section */}
      <section className="text-gray-600 body-font mt-3">
        <div className="container mx-auto flex px-5  md:flex-row flex-col items-center">
          {/* info */}
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl font-bold text-gray-900">
              JS Concept
            </h1>
            <small className="pl-12 text-blue-900 mb-6">
              -Next-generation learning platform
            </small>
            <p className="mb-8 leading-relaxed">
              We provide the best facilities to learn everything about a topic
              from A to Z. We also apply those concepts in a real-world project.
              We won't let you go until you become an expert on unlocked
              subjects. Use the gem you've earned to unlock concepts.
            </p>
          </div>

          {/* brand image */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="a person coding"
              src={coding}
            />
          </div>
        </div>
      </section>

      {/* search */}
      <section className="flex items-center border-2 p-1 border-gray-200 sm:w-3/4 mx-2 mt-3 sm:mx-auto rounded-xl md:shadow-2xl shadow-lg">
        <input
          className="w-full pl-4 pr-2 text-2xl outline-none"
          type="search"
          placeholder="try 'hoisting', 'currying' etc."
        />
        <div className="rounded-md shadow ml-auto">
          <a
            href="./"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base
   font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg md:px-10"
          >
            Search
          </a>
        </div>
      </section>
    </>
  );
};

export default Banner;
