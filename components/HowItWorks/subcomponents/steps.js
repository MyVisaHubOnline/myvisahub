const Steps = ({ steps }) => {
  return (
    <ol className="ol-number">
      {steps.map((step, index) => {
        const { bold, text } = step;
        return (
          <li
            key={`steps-${index}`}
            className="text-body-lead-large color-gray-300 mt-30"
          >
            <strong>{bold}</strong> {text}
          </li>
        );
      })}
    </ol>
  );
};

export default Steps;
