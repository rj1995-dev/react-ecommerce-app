import React from "react";

export default function CartColumns() {
  return (
    <div className="container-fluid text-center d-none d-lg-block my-5">
      <div className="row">
        {/* single columns for products */}
        <div className="col-lg-2">
          <p className="text-uppercase">products</p>
        </div>
        {/* end of single for columns products */}

        {/* single columns for name of products products */}
        <div className="col-lg-2">
          <p className="text-uppercase">name of products</p>
        </div>
        {/* end of single columns for name of products */}

        {/* single columns for  price */}
        <div className="col-lg-2">
          <p className="text-uppercase">price</p>
        </div>
        {/* end of single columns for price */}

        {/* single columns for quantity */}
        <div className="col-lg-2">
          <p className="text-uppercase">quantity</p>
        </div>
        {/* end of single columns for quantity */}

        {/* single columns for remove */}
        <div className="col-lg-2">
          <p className="text-uppercase">remove</p>
        </div>
        {/* end of single columns for remove */}

        {/* single columns for total */}
        <div className="col-lg-2">
          <p className="text-uppercase">total</p>
        </div>
        {/* end of single columns for total */}
      </div>
    </div>
  );
}
