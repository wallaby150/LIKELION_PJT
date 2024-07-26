import { Outlet } from "react-router";
import Header from "./Header";

const Layout = () => {
  return (
    <div className="container">
      <div
        style={{
          width: "100vw",
          display: "grid",
          placeItems: "center",
        }}
      >
        <div
          style={{
            // minWidth: "50vw",
            // maxWidth: "60vw",
            width: "50vw",
          }}
        >
          <Header />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
