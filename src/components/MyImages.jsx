import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const MyImages = ({ img }) => {
  return (
    <>
      {/* <Carousel>
        {img.map((curVal, index) => {
          return (
            <figure key={index}>
              <img src={curVal.image} alt="" className="img-fluid" />
            </figure>
          );
        })}
      </Carousel> */}
      <figure>
        <img src={img} alt="" className="img-fluid" />
      </figure>
    </>
  );
};

export default MyImages;
