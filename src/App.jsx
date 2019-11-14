import React, { useState } from "react";
import MapGL from "react-map-gl";
import config from "./assets/config";
import "mapbox-gl/dist/mapbox-gl.css";
import Layout from "./components/Layout";

const Map = () => {
  const deviceHeight = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );
  const headerHeight = 234;

  // Viewport config
  const [viewport, setViewPort] = useState({
    width: "100%",
    height: deviceHeight - headerHeight,
    latitude: 0,
    longitude: 0,
    zoom: 2
  });

  // Updates the viewport when the user drags the map
  const _onViewportChange = viewport => setViewPort({ ...viewport });

  // Component View
  return (
    <Layout>
      <MapGL
        {...viewport}
        mapboxApiAccessToken={config.REACT_APP_TOKEN}
        onViewportChange={_onViewportChange}
      ></MapGL>
    </Layout>
  );
};

export default Map;
