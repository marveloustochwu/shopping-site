import "./Cartooncard.css";
import { Link } from "react-router-dom";

const CartoonVideo = ({ onVideoClick, cartoonVideoData }) => {
  return (
    <div className="card-container">
      {cartoonVideoData.map((singleVideo) => (
        <div className="card" key={singleVideo.id}>
          <figure
            className="card-wrapper"
            onClick={() => onVideoClick(singleVideo.id)}
          >
            <video controls width="400" height="300">
              <source
                src={singleVideo.url}
                type="video/mp4 "
                autoplay
                controls
                loop
              />
              {/* Add more <source> elements for other video formats */}
              Your browser does not support the video tag.
            </video>
          </figure>
          <figurecaption className="figurecaption">
            <h3>{singleVideo.name}</h3>
            <h4>${singleVideo.price}</h4>
            <p>{singleVideo.description.substring(0, 20)}</p>
            <Link to="/myitems">
              <button>Learn more</button>
            </Link>
          </figurecaption>
        </div>
      ))}
    </div>
  );
};

export default CartoonVideo;
