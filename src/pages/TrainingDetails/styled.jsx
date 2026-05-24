import styled from "styled-components";

export const DetailsWrapper = styled.div`
  width: 100%;

  .layout-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 30px;
    margin-top: 30px;

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
      gap: 20px;
    }
  }
`;

export const BackButton = styled.button`
  background: transparent;
  border: none;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }
`;

export const HeroSection = styled.div`
  position: relative;
  height: 320px;
  border-radius: 12px;
  background-image: url(${(props) => props.$bgImage});
  background-size: cover;
  background-position: center;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  padding: 40px;

  @media (max-width: 640px) {
    height: 240px;
    padding: 20px;
  }
`;

export const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.2) 100%
  );
  z-index: 1;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  color: white;

  .badge {
    background: ${(props) => props.theme.colors.primary};
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    text-transform: uppercase;
  }

  h1 {
    font-size: 32px;
    font-weight: 700;
    margin: 15px 0 10px 0;

    @media (max-width: 640px) {
      font-size: 24px;
    }
  }

  .summary {
    font-size: 16px;
    opacity: 0.9;
    max-width: 700px;
    font-weight: 400;

    @media (max-width: 640px) {
      font-size: 13px;
    }
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media (max-width: 992px) {
    order: 2;
  }
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  .price-tag {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    span {
      color: #666;
      font-size: 14px;
    }
    h2 {
      color: ${(props) => props.theme.colors.primary};
      font-weight: 700;
      margin: 0;
    }

    @media (max-width: 992px) {
      order: 1; 
    }
  }

  .book-btn {
    width: 100%;
    height: 46px;
    background: ${(props) => props.theme.colors.primary};
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 15px;
    font-weight: 700;
    cursor: pointer;
    margin-top: 20px;
    transition: background 0.2s;

    &:hover:not(:disabled) {
      background: ${(props) => props.theme.colors.primaryHover};
    }
    &:disabled {
      background: #ccc;
      cursor: not-allowed;
    }
  }
`;

export const ContentCard = styled.div`
  background: white;
  border: 1px solid #ececec;
  border-radius: 10px;
  padding: 25px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.02);

  h3 {
    font-size: 18px;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 20px;
    color: ${(props) => props.theme.colors.textDark};
  }

  .description {
    font-size: 15px;
    line-height: 1.6;
    color: #4a5568;
  }
`;

export const InfoGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InfoTile = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  .icon {
    font-size: 20px;
    background: #f4f9ff;
    padding: 8px;
    border-radius: 8px;
  }

  small {
    color: #718096;
    font-size: 11px;
    display: block;
  }
  p {
    margin: 0;
    font-size: 14px;
    font-weight: 600;
    color: #2d3748;
  }
`;

export const TrainerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const TrainerCard = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    object-fit: cover;
  }
  h4 {
    margin: 0;
    font-size: 14px;
    font-weight: 600;
  }
  p {
    margin: 0;
    font-size: 12px;
    color: #718096;
  }
`;

export const ReviewSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ReviewCard = styled.div`
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 15px;

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  .review-header {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;

    img {
      width: 35px;
      height: 35px;
      border-radius: 50%;
      object-fit: cover;
    }
    h4 {
      margin: 0;
      font-size: 14px;
      font-weight: 600;
    }
    .date {
      font-size: 11px;
      color: #a0aec0;
    }
  }

  .review-text {
    margin: 0;
    font-size: 14px;
    color: #4a5568;
    font-style: italic;
  }
`;

export const StarsWrapper = styled.div`
  margin-left: auto;
  color: #ffb100;
  font-size: 14px;
  letter-spacing: 2px;
`;
