import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </div>
  );
};

export default Layout;
