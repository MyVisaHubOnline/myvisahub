const Opinion = ({ text, name, country }) => {
  return (
    <div className="col-lg-6 col-md-12 col-sm-12">
      <div className="card-grid-style-2 card-square hover-up mb-20">
        <p className="text-body-text color-gray-600 text-comment">{text}</p>
        <div className="box-img-user">
          <h4 className="text-body-lead color-gray-900 mb-5">{name}</h4>
          <p className="text-body-text-md">{country}</p>
        </div>
      </div>
    </div>
  );
};

export default Opinion;
