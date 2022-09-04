import SocialLinks from "./SocialLinks";
import ToTop from "./ToTop";

const Footer = () => (
  <footer className="bg-customlight dark:bg-darkgray ">
    <div className="container flex items-center justify-between p-6 mx-auto 2xl:-mt-16 2xl:pb-4">
      <SocialLinks />
      <ToTop />
    </div>
  </footer>
);

export default Footer;
