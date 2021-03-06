import React from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../Button";

export default function CartTotal({ value }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-10 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-right">
            <Link to="/">
              <button
                className="btn btn-outline-danger mb-3 px-5"
                type="button"
                onClick={() => clearCart()}
              >
                Clear Cart
              </button>
            </Link>
            <h5>
              <span className="text-title">Subtotal: </span>{" "}
              <strong>${cartSubTotal}</strong>
            </h5>
            <h5>
              <span className="text-title">Tax: </span>{" "}
              <strong>${cartTax}</strong>
            </h5>
            <h5>
              <span className="text-title">total: </span>{" "}
              <strong>${cartTotal}</strong>
            </h5>
            <button
              className="btn btn-outline-success mt-3 mb-3 px-5"
              type="button"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
