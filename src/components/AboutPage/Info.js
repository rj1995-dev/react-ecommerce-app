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
            <a
              href="https://github-finder-apps.netlify.com/user/rj1995-dev"
              className="main-link"
              style={{ marginTop: "2rem" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              more details
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
