/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container py-5">
        <h3 className="text-center mb-5">Contact US</h3>
        <div className="row">
          <div className="col-12">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15135.443941635896!2d73.80997563587425!3d18.48995502173189!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfe79bf771d7%3A0xac81e25be4cc4bf!2sKarve%20Nagar%2C%20Pune%2C%20Maharashtra%20411052!5e0!3m2!1sen!2sin!4v1698863530677!5m2!1sen!2sin"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="row">
          <div className="col-12 py-5">
            <form action="https://formspree.io/f/xnqkrnoa" method="POST">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id=""
                  name="name"
                  aria-describedby=""
                  placeholder="Enter Name"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id=""
                  name="email"
                  aria-describedby=""
                  placeholder="Enter Email"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="mb-3">
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  className="form-control"
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
