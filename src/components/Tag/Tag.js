import React from 'react';

const Tag = (props) => {
  const { tagName } = props;
  const beginnerTag = (
    <div className="border border-green-600 px-3 italic text-green-600 hover:bg-green-600 hover:text-white py-1 cursor-pointer rounded-full">
      Beginner
    </div>
  );
  const intermediateTag = (
    <div className="border border-blue-600 px-3 italic text-blue-600 hover:bg-blue-600 hover:text-white py-1 cursor-pointer rounded-full">
      Intermediate
    </div>
  );
  const advancedTag = (
    <div className="border border-red-600 px-3 italic text-red-600 hover:bg-red-600 hover:text-white py-1 cursor-pointer rounded-full">
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
