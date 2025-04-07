import React from "react";
import Image from "next/image";
import forms from "./content";

const Card = ({ form, dark }) => {
  const {
    title,
    image,
    ctaText,
    ctaHref,
    requirementsTextHtml,
    requirementsListHtml,
  } = form;
  return (
    <div className={`form-card ${dark ? "dark" : ""}`}>
      <div className="form-card-header">
        <Image
          src={image}
          width={49}
          height={64}
          alt={`${title}`}
          className="form-card-header-icon"
        />
        <h2 className="form-card-header-title">{title}</h2>
        <div className="form-card-header-cta">
          <a href={ctaHref} target="_self" rel="noopener noreferrer">
            {ctaText}
          </a>
        </div>
      </div>
      <div className="form-card-content">
        <div className="form-card-title">
          <strong>Requirements:</strong>
        </div>
        {requirementsTextHtml}
        {requirementsListHtml}
      </div>
    </div>
  );
};

const FormCards = () => {
  return (
    <div className="form-cards-wrapper">
      {forms.map((form, index) => (
        <Card key={`${form.title}`} form={form} dark={index === 1} />
      ))}
    </div>
  );
};

export default FormCards;
