import React from "react";

const Accordion = () => {
  return (
    <section className="p-6">
      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900 pb-12 text-center">
        FAQ
      </h1>
      <div className=" md:w-2/3 mx-auto">
        <div className="join join-vertical w-full">
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              What is KORMOKANDO?
            </div>
            <div className="collapse-content">
              <p>
                <strong>Answer: </strong>KORMOKANDO is a productivity web
                application designed to help users manage their tasks, track
                their progress, and stay organized. It features user
                authentication, profile management, and comprehensive CRUD
                operations for tasks and projects.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Is my data secure on KORMOKANDO?
            </div>
            <div className="collapse-content">
              <p>
                <strong>Answer: </strong>Yes, your data is secure with
                KORMOKANDO. We use JWT (JSON Web Tokens) for authentication and
                secure all API requests. Additionally, your data is stored in a
                secure MongoDB database, ensuring privacy and security.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow join-item border border-base-300">
            <input type="radio" name="my-accordion-4" />
            <div className="collapse-title text-xl font-medium">
              Who can I contact for support?
            </div>
            <div className="collapse-content">
              <p>
                <strong>Answer: </strong>If you need assistance, you can contact
                our support team through the "Contact Us" page. Fill out the
                form with your query, and we will get back to you as soon as
                possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accordion;
