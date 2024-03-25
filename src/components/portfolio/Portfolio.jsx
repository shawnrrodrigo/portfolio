// import { useEffect, useState } from "react";
// import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { data } from "../../data.js";

export default function Portfolio() {
  // const list = [
  //   {
  //     title: "Featured",
  //     id: "featured",
  //   },
  //   {
  //     title: "Web Apps",
  //     id: "web",
  //   },
  //   {
  //     title: "Mobile Apps",
  //     id: "mobile",
  //   },
  //   {
  //     title: "Design",
  //     id: "design",
  //   },
  // ];

  // const [selected, setSelected] = useState("featured");
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   switch (selected) {
  //     case "featured":
  //       setData(featured);
  //       break;
  //     case "web":
  //       setData(web);
  //       break;
  //     case "mobile":
  //       setData(mobile);
  //       break;
  //     case "design":
  //       setData(design);
  //       break;
  //     default:
  //       setData(featured);
  //   }
  // }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      {/* <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul> */}
      <div className="container">
        {data.map((item) => (
          <div className="item">
            <div className="description">
              <h3>{item.title}</h3>
              <p>{item.content}</p>
            </div>
            <img src={item.img} alt=""></img>
          </div>
        ))}
      </div>
    </div>
  );
}
