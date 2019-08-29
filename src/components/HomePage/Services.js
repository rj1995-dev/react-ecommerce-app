import React, { Component } from "react";
import styled from "styled-components";
import { FaDolly, FaRedo, FaRupeeSign, FaShippingFast } from "react-icons/fa";
export default class Services extends Component {
  state = {
    services: [
      {
        id: 1,
        icon: <FaDolly />,
        title: "free shipping",
        text:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Consequuntur, cum."
      },
      {
        id: 2,
        icon: <FaRedo />,
        title: "15 days return policy",
        text:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Consequuntur, cum."
      },
      {
        id: 3,
        icon: <FaRupeeSign />,
        title: "secure payment",
        text:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Consequuntur, cum."
      },
      {
        id: 4,
        icon: <FaShippingFast />,
        title: "fast delivery",
        text:
          "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Consequuntur, cum."
      }
    ]
  };
  render() {
    return (
      <ServiceWrapper className="py-5">
        <div className="container">
          <div className="row">
            {this.state.services.map(item => {
              return (
                <div
                  className="col-10 max-auto col-sm-6 col-md-3 text-center my-3"
                  key={item.id}
                >
                  <div className="service-icon">{item.icon}</div>
                  <div className="mt-3 text-capitalize">{item.title}</div>
                  <div className="mt-3">{item.text}</div>
                </div>
              );
            })}
          </div>
        </div>
      </ServiceWrapper>
    );
  }
}

const ServiceWrapper = styled.section`
  background: rgba(95, 183, 234, 0.5);

  .service-icon {
    font-size: 2.5rem;
    color: var(--primaryColor);
  }
`;
