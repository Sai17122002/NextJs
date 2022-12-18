import Footer from "./Footer";
import Navbar from "./Navbar";

const layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
