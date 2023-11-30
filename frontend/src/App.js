import React, { useState, useEffect } from "react";

import CartoonItems from "./components/CartoonItems";
import Header from "./components/front/Header/Header";
import Cartooncard from "./components/Cartooncard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import data from "./Data";
import Contact from "./components/Contact";
import CartoonDetail from "./components/CartoonDetail";
import videoData from "./Video";
import CartoonVideo from "./components/CartoonVideo";
import VideoDetail from "./components/VideoDetail";

console.log(videoData);

const App = () => {
  const [cartoonData, setCartoonData] = useState([]);
  const [cartoonVideoData, setCartoonVideoData] = useState([]);
  const [selectedCartoonData, setSelectedCartoonData] = useState(null);

  const [selectedCartoonVideo, setSelectedCartoonVideo] = useState(null);

  console.log(cartoonVideoData);

  useEffect(() => {
    setCartoonVideoData(videoData);
    setCartoonData(data);
  }, []);

  console.log(cartoonVideoData);

  const handleCartoonClick = (cartoonId) => {
    const singleCartoon = cartoonData.find((item) => item.id === cartoonId);
    setSelectedCartoonData(singleCartoon);
  };

  const handleCartoonVideoClick = (videoId) => {
    const singleVideo = cartoonVideoData.find((v) => v.id === videoId);
    setSelectedCartoonVideo(singleVideo);
  };

  return (
    <Router>
      <Header Cartooncard={Cartooncard} />
      <Routes>
        <Route
          path="/"
          element={
            <CartoonItems
              cartoonData={cartoonData}
              onCartoonClick={handleCartoonClick}
            />
          }
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/myitems"
          element={<CartoonDetail selectedCartoonData={selectedCartoonData} />}
        />

        <Route
          path="/video"
          element={
            <CartoonVideo
              cartoonVideoData={cartoonVideoData}
              onVideoClick={handleCartoonVideoClick}
            />
          }
        />
        <Route
          path="/videodetail"
          element={<VideoDetail selectedCartoonVideo={selectedCartoonVideo} />}
        />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
