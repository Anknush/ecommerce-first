import React from "react";
import MenuItems from "../menu-component";
import "./directory-menu-styles.scss";
class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sources: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "shop/hats",
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "shop/jackets",
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "shop/sneakers",
        },
        {
          title: "womens",
          imageUrl:
            "https://4.bp.blogspot.com/-GQS7ih_Nt78/WwfMJQwMJAI/AAAAAAAAJ3A/kaYQ6i959lUoSQ-0hboH5D79YqIzUCbMwCLcBGAs/s1600/Godha-Actress-Wamiqa-Gabbi-Hottest-Photos-2.jpg",
          size: "large",
          id: 4,
          linkUrl: "shop/womens",
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          linkUrl: "shop/mens",
        },
      ],
    };
  }
  render() {
    return (
      <div className="directory-menu">
        {this.state.sources.map(({ title, imageUrl, size, id }) => (
          <MenuItems title={title} imageUrl={imageUrl} size={size} key={id} />
        ))}
      </div>
    );
  }
}

export default Directory;
