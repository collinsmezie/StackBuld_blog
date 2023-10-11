import React from 'react';

const TopicSelector = ({ value, setTopic }) => {
  const handleSelectChange = (event) => {
    setTopic(event.target.value); // Update the state with the selected option
  };

  return (
    <div className="w-full md:w-64 px-4 py-2">
      <select
        id="categorySelector"
        className="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-teal-500"
        value={value}
        onChange={handleSelectChange}
      >
        <option value="general">Select Topic</option>
        <option value="cinema">cinema</option>
        <option value="design">design</option>
        <option value="food">food</option>
        <option value="technology">technology</option>
        <option value="science">science</option>
        <option value="art">art</option>
      </select>
    </div>
  );
};

export default TopicSelector;

