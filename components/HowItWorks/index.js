import React from "react";
import Button from "./subcomponents/button";
import Opinion from "./subcomponents/opinion";
import Steps from "./subcomponents/steps";
import { opinions, content } from "./content";

const HowItWorks = () => {
  const { tag, title, description, steps, cta_text, cta_href } = content;
  return (
    <div className="section-box pt-100 pb-100 mt-100 bg-blue-900">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 mb-30">
            <span className="tag-1 bg-3 color-gray-900">{tag}</span>
            <h3 className="text-heading-1 mt-30 color-white">{title}</h3>
            <p className="text-body-lead-large color-gray-300 mt-30">
              {description}
            </p>
            <Steps steps={steps} />
            <Button text={cta_text} href={cta_href} />
          </div>
          <div className="col-lg-7">
            <div className="row">
              {opinions.map((elem, index) => {
                const { text, name, country } = elem;
                return (
                  <Opinion
                    key={`opinion-${index}`}
                    text={text}
                    name={name}
                    country={country}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
