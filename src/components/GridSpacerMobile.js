import {
  GridContainer,
  GridRow,
  GridColumn,
  Image,
} from "./styles/StyledGridSection.styled";

import GridPhoto3 from "../images/gridPhoto3.jpg";

const GridSpacerMobile = (props) => {
  return (
    <GridContainer>
      <GridRow>
        <GridColumn size="12">
          <Image src={GridPhoto3}></Image>
        </GridColumn>
      </GridRow>
    </GridContainer>
  );
};

export default GridSpacerMobile;
