import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSingleProductContext } from "../context/singleProductContext";
import PageNavigation from "../common/PageNavigation";
import MyImages from "./MyImages";
import FormatPrice from "../helpers/FormatPrice";
import { BsTruck, BsShieldShaded, BsFillReplyAllFill } from "react-icons/bs";
import RatingStar from "./RatingStar";
import Colors from "./Colors";
import AddToCart from "./AddToCart";

const API = "https://fakestoreapi.com/products";

const SingleProduct = () => {
  const { id } = useParams();

  const { getSingleProducts, singleProduct, isSingleLoading } =
    useSingleProductContext();

  const {
    id: alis,
    company,
    name,
    title,
    description,
    reviews,
    image,
    price,
    stars,
    stock,
  } = singleProduct;

  useEffect(() => {
    getSingleProducts(`${API}/${id}`);
  }, []);

  return (
    <>
      {isSingleLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <PageNavigation title={title} />
          <div className="container">
            <div
              className="row d-flex justify-content-center align-items-center"
              style={{ height: "100vh" }}
            >
              <div className="col-lg-6">
                <MyImages img={image} />
              </div>
              <div className="col-lg-6">
                <h3>{title}</h3>
                <div>
                  <RatingStar stars={stars} reviews={reviews} />
                </div>
                <div>
                  MRP:
                  <del>
                    <FormatPrice price={price + 250000} />
                  </del>
                </div>
                <p className="text-primary fw-bold">
                  Deals of the day <FormatPrice price={price} />
                </p>
                <p>{description}</p>
                <div className="row text-center py-3">
                  <div className="col-lg-4">
                    <figure>
                      <BsTruck className="icon" />
                    </figure>
                    <p>30 days delivery</p>
                  </div>
                  <div className="col-lg-4">
                    <figure>
                      <BsShieldShaded className="icon" />
                    </figure>
                    <p>Free Replacement</p>
                  </div>
                  <div className="col-lg-4">
                    <figure>
                      <BsFillReplyAllFill className="icon" />
                    </figure>
                    <p>2 year warranty</p>
                  </div>
                </div>
                <hr />
                <p>Availability: {stock > 0 ? "In Stock" : "Out Of Stock"}</p>
                <p>Id : {id}</p>
                <p>Brand : {company}</p>
                <hr />
                <div>{stock > 0 ? <Colors product={singleProduct} /> : ""}</div>
                <hr />
                <AddToCart cartData={singleProduct} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SingleProduct;
