import styled from "@emotion/styled";

import Image from "./Image";
import Img from "./donut.png";
import DonutQuantity from "./DonutQuantity";

const Shop = styled.div`
  padding: 10px 20px 40px 20px;
`;

const ShopName = styled.h1`
  font-size: 18px;

  font-style: normal;
  font-variant: normal;
  font-weight: 400;
  line-height: 26.4px;
  margin-bottom: 20px;
`;

const Controls = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

const DonutShop = ({ onAddDonut, onRemoveDonut, numDonuts }) => {
  return (
    <Shop>
      <ShopName>Buy Me A Donut</ShopName>
      <Image src={Img} width="100px"></Image>
      <Controls>
        <DonutQuantity
          onAdd={onAddDonut}
          onRemove={onRemoveDonut}
          quantity={numDonuts}
        />
      </Controls>
    </Shop>
  );
};

export default DonutShop;
