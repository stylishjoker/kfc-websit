import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const Sliders = () => {
  const [imgs, setImgs] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    await getDocs(collection(db, "slider")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setImgs(newData);

      setLoading(!loading);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      <Slider {...settings}>
        {imgs.map((item) => {
          return <img src={item.link} alt="KFC" />;
        })}
      </Slider>
    </>
  );
};

export default Sliders;
