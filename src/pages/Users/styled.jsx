import styled from "styled-components";

export const UsersWrapper = styled.div`
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

  .users-cards-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

export const UserFlatCard = styled.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 14px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.01);

  .user-profile-section {
    display: flex;
    align-items: center;
    gap: 15px;

    .user-avatar {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      object-fit: cover;
    }

    .user-text {
      h4 {
        margin: 0 0 2px 0;
        font-size: 15px;
        color: #0f172a;
        font-weight: 600;
      }
      p {
        margin: 0;
        font-size: 13px;
        color: #64748b;
      }
    }
  }

  .user-meta-section {
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

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(15, 23, 42, 0.4);
  backdrop-filter: blur(0.5px);
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
  max-width: 400px;
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
    color: #334155;
    cursor: pointer;
    outline: none;
    transition: border-color 0.2s;

    &:focus {
      border-color: #6366f1;
    }
  }
`;

export const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  .switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 26px;

    input {
      opacity: 0;
      width: 0;
      height: 0;
    }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #cbd5e1;
    transition: 0.3s;
    border-radius: 34px;

    &:before {
      position: absolute;
      content: "";
      height: 20px;
      width: 20px;
      left: 3px;
      bottom: 3px;
      background-color: white;
      transition: 0.3s;
      border-radius: 50%;
    }
  }

  input:checked + .slider {
    background-color: #5046e5;
  }

  input:checked + .slider:before {
    transform: translateX(24px);
  }

  .switch-label-text {
    font-size: 14px;
    color: #475569;
    font-weight: 500;
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
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.9;
    }
  }

  .btn-save {
    background: #5046e5;
    color: white;
  }

  .btn-cancel {
    background: #f1f5f9;
    color: #475569;

    .cancel-x {
      font-size: 11px;
      color: #64748b;
    }
  }
`;

export const RoleBadge = styled.span`
  font-size: 12px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 8px;
  background: ${(p) =>
    p.$role === "admin"
      ? "#fef3c7"
      : p.$role === "trainer"
        ? "#e0f2fe"
        : "#f1f5f9"};
  color: ${(p) =>
    p.$role === "admin"
      ? "#b45309"
      : p.$role === "trainer"
        ? "#0369a1"
        : "#475569"};
`;

export const StatusBadge = styled.span`
  font-size: 12px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 8px;
  background: ${(p) => (p.$isActive ? "#ecfdf5" : "#fef2f2")};
  color: ${(p) => (p.$isActive ? "#059669" : "#dc2626")};
`;

export const PaginationSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;

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
