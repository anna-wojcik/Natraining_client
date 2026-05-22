import { useSelector } from "react-redux";
import { StyledAlert } from "./styled";

import {
  selectAlertMessage,
  selectAlertType,
} from "../../store/slices/alertSlice";

const Alert = () => {
  const message = useSelector(selectAlertMessage);
  const type = useSelector(selectAlertType);

  if (!message) return null;

  return <StyledAlert $type={type}>{message}</StyledAlert>;
};
export default Alert;
