import {
  HeaderStyled,
  SubHeader,
  Button,
  BoxHeader,
  StyledEditIcon,
} from "./styled";

const ProfileHeader = ({ title, subTitle }) => (
  <div>
    <BoxHeader>
      <HeaderStyled>{title}</HeaderStyled>
      <Button>
        <StyledEditIcon />
        Edytuj
      </Button>
    </BoxHeader>
    <SubHeader>{subTitle}</SubHeader>
  </div>
);

export default ProfileHeader;
