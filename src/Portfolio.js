import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./Portfolio.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Portfolio() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Axios.get("./portfolio.json")
      .then((res) => {
        console.log("getting from ::::", res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return data.map((data, index) => {
    return (
      <LazyLoadImage
        key={data.id}
        className="portfolio_card__wrapper"
        src={data.imgurl}
        effect="blur"
      />
    );
  });
}

export default Portfolio;
