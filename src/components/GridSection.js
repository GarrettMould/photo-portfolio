import {
  GridColumn,
  GridRow,
  GridContainer,
  Image,
  TextBox,
} from "./styles/StyledGridSection.styled";

import { FlexRowCenter } from "./styles/Flex.styles";

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
import GridPhoto12 from "../images/gridPhoto12.jpg";
import GridPhoto13 from "../images/gridPhoto13.jpg";
import GridPhoto14 from "../images/gridPhoto14.jpg";
import GridPhoto15 from "../images/gridPhoto15.jpg";

import Media from "react-media";

const GridSection = (props) => {
  return (
    <Media queries={{ small: { maxWidth: 599 } }}>
      {(matches) =>
        matches.small ? (
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
            <GridRow>
              <GridColumn size="6">
                <Image src={GridPhoto14}></Image>
              </GridColumn>
              <GridColumn size="6">
                <Image src={GridPhoto15}></Image>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn size="6">
                <Image src={GridPhoto12}></Image>
              </GridColumn>
              <GridColumn size="6">
                <Image src={GridPhoto13}></Image>
              </GridColumn>
            </GridRow>
          </GridContainer>
        ) : (
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
                    <span>CANON AUTOBOY LUNA XL</span> AND{" "}
                    <span>KYOCERA ZOOMTEC 80</span>, USING{" "}
                    <span>FUJI SUPERIA 400</span> AND{" "}
                    <span>KODAK GOLD 200</span> FILM.
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
            <GridRow>
              <GridColumn size="6">
                <Image src={GridPhoto14}></Image>
              </GridColumn>
              <GridColumn size="6">
                <Image src={GridPhoto15}></Image>
              </GridColumn>
            </GridRow>
            <GridRow>
              <GridColumn size="6">
                <Image src={GridPhoto12}></Image>
              </GridColumn>
              <GridColumn size="6">
                <Image src={GridPhoto13}></Image>
              </GridColumn>
            </GridRow>
          </GridContainer>
        )
      }
    </Media>
  );
};

export default GridSection;
