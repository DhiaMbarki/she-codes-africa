import React, { Component } from "react";
import "./Slider.scss";
//   const App = () => <Slider items={sliderItems} />;

class Slider extends React.Component {
  constructor() {
    super();
    this.state = {
      currentIndex: 0,
      items: [],
    };
  }

  handleSelect = (e) => {
    this.setState({ currentIndex: Number(e.target.dataset.id) });
  };

  componentDidMount() {
    const { items } = this.props;
    if (items) {
      this.setState({ items });
    }
  }



  
  render() {
    const { currentIndex, items } = this.state;
    const sliderContent = items.map((item, index) => {
      const left = `${index * 100}%`;
      const backgroundImage = `url(${item})`;
      const sty = { left, backgroundImage };
      const cls = `slide ${index == currentIndex ? "active" : ""}`;
      return <div key={index} className={cls} style={sty}></div>;
    });
    const selectItems = items.map((item, index) => {
      const cls = `select__item ${index == currentIndex ? "active" : ""}`;
      return (
        <span
          key={index}
          data-id={index}
          className={cls}
          onClick={this.handleSelect}
        >
          {index + 1}
        </span>
      );
    });
    return (
      <div className="sliderr">
        <div className="slider__panel slider__panel__controls">
          <div className="title">OUR TEAMS</div>
          <div className="select">{selectItems}</div>
          <div className="description">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. 
          </div>
        </div>
        <div className="slider__panel slider__panel__frame">
          {sliderContent}
        </div>
      </div>
    );
  }
}
export default Slider;
