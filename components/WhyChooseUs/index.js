import React from "react";
import { content } from "./content";

const Reason = ({ reason }) => {
  const { number, title, text } = reason;
  return (
    <div className="col-lg-6 col-sm-6 col-12 mt-50">
      <p className="text-heading-1 color-blue-300 mb-10">{number}</p>
      <h4 className="text-heading-6 icon-leaf">{title}</h4>
      <p className="text-body-excerpt color-gray-600 mt-15">{text}</p>
    </div>
  );
};

const WhyChooseUs = () => {
  const { img_src, img_alt, title, reasons } = content;
  return (
    <div className="section-box">
      <div className="container mt-120">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 block-img-we-do text-center">
            <img
              className="img-small img-responsive"
              src={img_src}
              alt={img_alt}
            />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 block-we-do">
            <h3 className="text-heading-1 mt-30">{title}</h3>
            <div className="row">
              {reasons.map((reason, index) => (
                <Reason key={`reason-${index}`} reason={reason} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
