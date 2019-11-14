import React from "react";
import Header from "./Header";
import NavTabs from "./NavTabs";
import Search from "./Search";
import Info from "./Info";

const Layout = ({ children }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 col-md-8 col-lg-6 px-0 mx-auto">
            <div>
              <Header />
              <NavTabs />
              <Info />
              <Search />
            </div>
            <main>{children}</main>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
