import React from "react";
import GlossaryList from "../components/glossary/glossaryList";

const GlossaryFaqs = () => {
  return (
    <div className="inner-content py-10">
      <div className="container">
        <div className="content-inner">
          <h2 className="HeadingH2 capitalize text-secondary">GLOSSARY</h2>
          <p className="text">This page is showing a list of glossary terms</p>
          <div className="mt-8">
            <GlossaryList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlossaryFaqs;
