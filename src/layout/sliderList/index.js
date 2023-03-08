import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import CardNewFood from "../../components/cardNewFood";

const SliderList = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  if (props.data === []) {
    return (
      <div>
        <h2>Loading</h2>
      </div>
    );
  }
  return (
    <>
      <Slider {...settings}>
        {props.data.map((item) => {
          return <CardNewFood key={item.id} data={item} />;
        })}
      </Slider>
    </>
  );
};

export default SliderList;
