import React from "react";
import moment from "moment";
import "moment/locale/es";

const Info = () => {
  return (
    <section className="container py-3 border-bottom">
      <div className="row">
        <div className="col-12 text-center">
          <h1 className="h6 small font-weight-normal text-uppercase">
            Gerencias de control
          </h1>
          <h2 className="h6 small font-weight-normal text-muted mb-0">
            {moment()
              .locale("es")
              .format("dddd D [de] MMM [de] YYYY")}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Info;
