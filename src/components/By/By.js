const By = ({ name, date }) => {
  return (
    <p className="text-gray-500">
      <em>Article by {name}, on {date}</em>
    </p>
  );
};

export default By;
