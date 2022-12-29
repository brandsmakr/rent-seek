import React from "react";
import {
  BannerComponents,
  BreadcrumbsComponents,
  ContactComponents,
  MapComponents,
} from "../components";

const ContactPage = () => {
  return (
    <>
      <div class="wrappage">
        <BreadcrumbsComponents pageTitle="contact us" />
        <div class="container container-240">
          <ContactComponents />
          <BannerComponents />
          {/* <MapComponents /> */}
        </div>
      </div>
    </>
  );
};

export default ContactPage;
