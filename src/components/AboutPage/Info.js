import React from "react";
import Title from "../Title";
import aboutBcg from "../../images/aboutBcg.jpeg";
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-6 my-3">
            <img
              src={aboutBcg}
              className="img-fluid img-thumbnail"
              alt="about company"
              style={{ background: "var(--darkGrey)" }}
            />
          </div>
          <div className="col-10 mx-auto col-md-6 my-3">
            <Title title="about us" center />
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              obcaecati rem facere vel consequatur tempore similique eum
              incidunt cupiditate dicta?
            </p>
            <p className="text-lead text-muted my-3">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              obcaecati rem facere vel consequatur tempore similique eum
              incidunt cupiditate dicta?
            </p>
            <button
              className="main-link"
              type="button"
              style={{ marginTop: "2rem" }}
            >
              more details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
