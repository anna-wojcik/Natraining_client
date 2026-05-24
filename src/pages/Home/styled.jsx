import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
  h2 {
    font-size: 26px;
    font-weight: 700;
    margin-bottom: 25px;
    color: ${(props) => props.theme.colors.textDark};
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 940px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const TrainingCard = styled.div`
  background: ${(props) => props.theme.colors.white};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  border: 1px solid #f0f0f0;
  display: flex;
  flex-direction: column;
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`;

export const CardBody = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex: 1;

  h3 {
    font-size: 18px;
    font-weight: 600;
    margin: 10px 0 5px 0;
    color: ${(props) => props.theme.colors.textDark};
  }

  .trainer {
    font-size: 14px;
    color: ${(props) => props.theme.colors.textLight};
    margin-bottom: 15px;
  }
`;

export const Badge = styled.span`
  background: #f4f9ff;
  color: ${(props) => props.theme.colors.primary};
  font-size: 12px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
  width: fit-content;
`;

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: ${(props) => props.theme.colors.textDark};

  .price {
    font-weight: 700;
    color: ${(props) => props.theme.colors.primary};
    font-size: 16px;
  }

  .slots {
    font-size: 13px;
    color: ${(props) => props.theme.colors.textLight};
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: 40px;
  flex-wrap: wrap;
`;

export const PageButton = styled.button`
  padding: 8px 16px;
  border: 1px solid
    ${(props) => (props.$active ? props.theme.colors.primary : "#e2e8f0")};
  background: ${(props) =>
    props.$active ? props.theme.colors.primary : props.theme.colors.white};
  color: ${(props) => (props.$active ? "white" : props.theme.colors.textDark)};
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    border-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => (props.$active ? "white" : props.theme.colors.primary)};
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const LoadingSpinner = styled.div`
  text-align: center;
  padding: 50px;
  font-size: 16px;
  color: ${(props) => props.theme.colors.textLight};
`;

export const FiltersSection = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 30px;
  background: ${(props) => props.theme.colors.white};
  padding: 15px 20px;
  border-radius: 10px;
  border: 1px solid #ececec;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const SearchInput = styled.input`
  flex: 2;
  height: 42px;
  padding: 0 15px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background-color: #f8fafc;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    background-color: white;
  }
`;

export const SelectInput = styled.select`
  flex: 1;
  height: 42px;
  padding: 0 10px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  background-color: #f8fafc;
  font-size: 14px;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    background-color: white;
  }
`;

export const DetailButton = styled.button`
  background: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  padding: 10px;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  width: 100%;
  margin-top: auto;
  transition: background 0.2s;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryHover};
    border-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export const ArrowIcon = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: currentColor;
  /* Prosta strzałka w prawo w formie maski SVG (zakodowana inline) */
  mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'><path d='M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42 5.43 5.43H5v2z'/></svg>")
    no-repeat center / contain;
  -webkit-mask: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='black'><path d='M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42 5.43 5.43H5v2z'/></svg>")
    no-repeat center / contain;
`;

export const ResetButton = styled.button`
  background: transparent;
  border: 1px solid #cbd5e1;
  color: ${(props) => props.theme.colors.textDark};
  border-radius: 8px;
  padding: 0 20px;
  font-size: 14px;
  font-weight: 500;
  height: 42px;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: #fef2f2;
    border-color: ${(props) => props.theme.colors.danger};
    color: ${(props) => props.theme.colors.danger};
  }

  @media (max-width: 768px) {
    width: 100%;
    height: 40px;
  }
`;

export const LimitSelectWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 15px;
  font-size: 14px;
  color: ${(props) => props.theme.colors.textDark || "#333"};

  label {
    font-weight: 500;
  }

  select {
    height: 38px;
    padding: 0 10px;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    background-color: #fff;
    cursor: pointer;
    font-size: 14px;
    outline: none;
    transition: border-color 0.2s;

    &:focus {
      border-color: ${(props) => props.theme.colors.primary};
    }
  }

  @media (max-width: 576px) {
    margin-left: 0;
    margin-top: 10px;
    width: 100%;
    justify-content: center;
  }
`;
