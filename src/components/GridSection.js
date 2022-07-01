import {
  GridColumn,
  GridRow,
  GridContainer,
  Image,
  TextBox,
} from "./styles/StyledGridSection.styled";

import TestImage from "../images/tripsImage.JPG";

import GridPhoto1 from "../images/gridPhoto1.JPG";
import GridPhoto2 from "../images/gridPhoto2.JPG";
import GridPhoto3 from "../images/gridPhoto3.jpg";
import GridPhoto4 from "../images/gridPhoto4.jpg";
import GridPhoto5 from "../images/gridPhoto5.JPG";
import GridPhoto6 from "../images/gridPhoto6.jpg";
import GridPhoto7 from "../images/gridPhoto7.jpg";
import GridPhoto8 from "../images/gridPhoto8.jpg";
import GridPhoto9 from "../images/gridPhoto9.jpg";
import GridPhoto10 from "../images/gridPhoto10.JPG";
import GridPhoto11 from "../images/gridPhoto11.jpg";

const GridSection = (props) => {
  return (
    <GridContainer id="photos">
      <GridRow>
        <GridColumn size="6">
          <Image src={GridPhoto3}></Image>
        </GridColumn>
        <GridColumn size="6">
          <Image src={GridPhoto11}></Image>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn size="6">
          <TextBox>
            <p>
              THIS COLLECTION OF PICTURES WAS TAKEN WITH A{" "}
              <a href="#">CANON AUTOBOY LUNA XL</a> AND{" "}
              <a href="#">KYOCERA ZOOMTEC 80</a>, USING{" "}
              <a href="#">FUJI SUPERIA 400</a> AND{" "}
              <a href="#">KODAK GOLD 200</a> FILM.
            </p>
          </TextBox>
          <Image src={GridPhoto10}></Image>
        </GridColumn>
        <GridColumn size="6">
          <Image src={GridPhoto2}></Image>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn size="6">
          <Image src={GridPhoto1}></Image>
        </GridColumn>
        <GridColumn size="6">
          <Image src={GridPhoto5}></Image>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn size="12">
          <Image src={GridPhoto9}></Image>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn size="6">
          <Image src={GridPhoto6}></Image>
        </GridColumn>
        <GridColumn size="6">
          <Image src={GridPhoto7}></Image>
        </GridColumn>
      </GridRow>
      <GridRow>
        <GridColumn size="12">
          <Image src={GridPhoto10}></Image>
        </GridColumn>
      </GridRow>
    </GridContainer>
  );
};

export default GridSection;
