import React from 'react';

const Tag = () => {
  const tagName = 'beginner';
  const beginnerTag = (
    <div className="border border-green-600 px-3 font-bold text-green-600 hover:bg-green-600 hover:text-white py-1 cursor-pointer rounded-full">
      Beginner
    </div>
  );
  const intermediateTag = (
    <div className="border border-yellow-600 px-3 font-bold text-yellow-600 hover:bg-yellow-600 hover:text-white py-1 cursor-pointer rounded-full">
      Intermediate
    </div>
  );
  const advancedTag = (
    <div className="border border-pink-600 px-3 font-bold text-pink-600 hover:bg-pink-600 hover:text-white py-1 cursor-pointer rounded-full">
      Advanced
    </div>
  );
  return (
    <div>
      {tagName === 'beginner'
        ? beginnerTag
        : tagName === 'intermediate'
        ? intermediateTag
        : tagName === 'advanced'
        ? advancedTag
        : null}
    </div>
  );
};

export default Tag;
