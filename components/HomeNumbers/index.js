import React from "react";
import { content } from "./content";

const Number = ({ number, title }) => {
  return (
    <div className="col-lg-3 col-md-3 col-sm-6 col-6 mb-30 text-center">
      <span className="text-display-3 color-blue-300">
        <span className="count">{number}</span>
      </span>
      <div className="text-body-quote">{title}</div>
    </div>
  );
};

const HomeNumbers = () => {
  return (
    <div className="section-box mt-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
            <div className="pb-20 text-mb-center">
              <div className="row">
                {content.map((elem, index) => (
                  <Number
                    key={`number-${index}`}
                    number={elem.number}
                    title={elem.title}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
    </div>
  );
};

export default HomeNumbers;
