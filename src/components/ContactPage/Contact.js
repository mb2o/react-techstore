import React from 'react';
import Title from '../Title';

export default function Contact() {
  return (
    <section className="py-5">
      <div className="row">
        <div className="col-10 mx-auto col-md-6 my-3">
          <Title title="contact us" center />
          <form
            className="mt-5"
            action="https://formspree.io/mboomaars@gmail.com"
            method="POST">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="john smith"
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="jsmith@example.com"
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                className="form-control"
                name="subject"
                placeholder="important!!!"
              />
            </div>

            <div className="form-group">
              <textarea name="message" className="form-control" rows="10" />
            </div>

            <div className="form-group mt-3">
              <input
                type="submit"
                value="Send"
                className="form-control bg-primary text-white"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
