import React from "react";
import { content } from "./content";

const Service = ({ service }) => {
  const { img_src, text } = service;
  return (
    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
      <div className="grid-category-2">
        <div className="grid-category-image">
          <img src={img_src} />
        </div>
        <p className="text-center text-heading-5 color-gray-900">{text}</p>
      </div>
    </div>
  );
};

const Services = () => {
  const { title, text, services } = content;
  return (
    <div className="section-box mt-140 passport-services">
      <div className="container text-center">
        <h2 className="text-heading-1 color-gray-900">{title}</h2>
        <p className="text-body-lead-large color-gray-600 mt-20">{text}</p>
      </div>
      <div className="container list-category-homepage7 mt-70">
        <div className="row">
          {services.map((service, index) => (
            <Service key={`service-${index}`} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
