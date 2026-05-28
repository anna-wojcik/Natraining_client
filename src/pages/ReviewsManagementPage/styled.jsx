import styled from "styled-components";

export const ReviewsWrapper = styled.div`
  width: 100%;
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;

  h2 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 25px;
    color: #1e293b;
  }

  .reviews-cards-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

export const ReviewFlatCard = styled.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.01);

  .review-profile-section {
    display: flex;
    align-items: flex-start;
    gap: 15px;

    .user-avatar {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      object-fit: cover;
      margin-top: 2px;
    }

    .review-text {
      h4 {
        margin: 0 0 1px 0;
        font-size: 15px;
        color: #0f172a;
        font-weight: 600;
      }
      .user-email {
        margin: 0 0 6px 0;
        font-size: 12px;
        color: #64748b;
      }
      .comment-content {
        margin: 0;
        font-size: 14px;
        color: #334155;
        font-style: italic;
        line-height: 1.4;
      }
    }
  }

  .review-meta-section {
    display: flex;
    align-items: center;
    gap: 25px;

    .edit-action-btn {
      background: none;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 6px;
      border-radius: 6px;
      transition: background 0.2s;

      &:hover {
        background: #f1f5f9;
      }
      img {
        width: 18px;
        height: 18px;
      }
    }
  }
`;

export const RatingStars = styled.div`
  color: #fbbf24;
  font-size: 16px;
  letter-spacing: 2px;

  .empty-stars {
    color: #cbd5e1;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(15, 23, 42, 0.4);
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  animation: fadeIn 0.2s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ModalContainer = styled.div`
  background: white;
  width: 100%;
  max-width: 450px;
  border-radius: 24px;
  padding: 28px;
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 10px 10px -5px rgba(0, 0, 0, 0.04);
  animation: scaleUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);

  h3 {
    margin: 0 0 4px 0;
    font-size: 22px;
    font-weight: 700;
    color: #0f172a;
  }
  .user-display-name {
    font-size: 14px;
    color: #64748b;
    display: block;
    margin-bottom: 20px;
  }

  @keyframes scaleUp {
    from {
      transform: scale(0.95);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;

  label {
    font-size: 14px;
    font-weight: 700;
    color: #334155;
  }
  select {
    width: 100%;
    padding: 12px 16px;
    border-radius: 12px;
    border: 1px solid #cbd5e1;
    background: white;
    font-size: 15px;
    outline: none;
    &:focus {
      border-color: #5046e5;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 28px;

  button {
    flex: 1;
    padding: 12px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }
  .btn-save {
    background: #5046e5;
    color: white;
  }
  .btn-cancel {
    background: #f1f5f9;
    color: #475569;
  }
`;

export const PaginationSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
  padding-top: 20px;
  border-top: 1px solid #e2e8f0;

  .limit-selector {
    font-size: 13px;
    color: #64748b;
    select {
      padding: 4px 8px;
      border-radius: 6px;
      border: 1px solid #cbd5e1;
    }
  }
  .page-controls {
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 13px;
    button {
      padding: 6px 12px;
      background: white;
      border: 1px solid #cbd5e1;
      border-radius: 6px;
      cursor: pointer;
      &:disabled {
        opacity: 0.4;
      }
    }
  }
`;

export const NoDataMessage = styled.p`
  color: #64748b;
  font-style: italic;
`;
