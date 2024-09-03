import Header from "../Header";
// import Footer from "../components/Footer";
import { Outlet } from "react-router";
import Footer from "../Footer";

const Layouts = () => {
  return (
    <>
      <div style={{ background: "var(--black)", overflow: "hidden" }}>
        <Header />
        <Outlet />
        <Footer />
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Layouts;
