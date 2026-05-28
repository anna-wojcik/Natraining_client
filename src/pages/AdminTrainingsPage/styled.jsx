// import styled from "styled-components";

// export const TrainingsWrapper = styled.div`
//   width: 100%;
//   padding: 20px;
//   max-width: 1000px;
//   margin: 0 auto;

//   .header-actions {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     margin-bottom: 25px;

//     h2 {
//       font-size: 24px;
//       font-weight: 600;
//       color: #1e293b;
//       margin: 0;
//     }
//   }

//   .trainings-list {
//     display: flex;
//     flex-direction: column;
//     gap: 12px;
//   }
// `;

// export const TrainingRowCard = styled.div`
//   background: white;
//   border: 1px solid #e2e8f0;
//   border-radius: 12px;
//   padding: 16px 20px;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.01);

//   .main-info {
//     display: flex;
//     align-items: center;
//     gap: 16px;

//     .badge {
//       background: #e0f2fe;
//       color: #0369a1;
//       padding: 6px 12px;
//       border-radius: 8px;
//       font-size: 11px;
//       font-weight: 700;
//       text-transform: uppercase;
//       min-width: 90px;
//       text-align: center;
//     }

//     h3 {
//       margin: 0 0 4px 0;
//       font-size: 16px;
//       color: #0f172a;
//       font-weight: 600;
//     }
//     .sub-props {
//       margin: 0;
//       font-size: 13px;
//       color: #64748b;
//     }
//   }

//   .price-section {
//     text-align: right;
//     span {
//       display: block;
//       font-size: 11px;
//       color: #94a3b8;
//       text-transform: uppercase;
//     }
//     strong {
//       font-size: 18px;
//       color: #10b981;
//     }
//   }
// `;

// export const AddButton = styled.button`
//   background: #5046e5;
//   color: white;
//   border: none;
//   padding: 10px 20px;
//   border-radius: 12px;
//   font-weight: 600;
//   cursor: pointer;
//   transition: opacity 0.2s;
//   &:hover {
//     opacity: 0.9;
//   }
// `;

// export const ModalOverlay = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   background: rgba(15, 23, 42, 0.4);
//   backdrop-filter: blur(4px);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   z-index: 9999;
// `;

// export const ModalContainer = styled.div`
//   background: white;
//   width: 100%;
//   max-width: 580px;
//   max-height: 85vh;
//   overflow-y: auto;
//   border-radius: 24px;
//   padding: 30px;
//   box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);

//   &::-webkit-scrollbar {
//     width: 6px;
//   }
//   &::-webkit-scrollbar-thumb {
//     background: #cbd5e1;
//     border-radius: 10px;
//   }

//   .modal-header {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     margin-bottom: 20px;
//     h3 {
//       margin: 0;
//       font-size: 22px;
//       color: #0f172a;
//       font-weight: 700;
//     }
//     .close-x {
//       background: none;
//       border: none;
//       cursor: pointer;
//       display: flex;
//       align-items: center;
//       img {
//         width: 14px;
//         height: 14px;
//       }
//     }
//   }
// `;

// export const FormGrid = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   gap: 16px;
// `;

// export const FormGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 6px;
//   margin-bottom: 16px;

//   label {
//     font-size: 13px;
//     font-weight: 700;
//     color: #334155;
//   }
//   input,
//   select,
//   textarea {
//     padding: 10px 14px;
//     border-radius: 10px;
//     border: 1px solid #cbd5e1;
//     font-size: 14px;
//     outline: none;
//     background: white;
//     color: #334155;
//     &:focus {
//       border-color: #5046e5;
//     }
//   }
//   textarea {
//     font-family: inherit;
//     resize: vertical;
//   }
// `;

// export const ButtonGroup = styled.div`
//   display: flex;
//   gap: 12px;
//   margin-top: 24px;
//   button {
//     flex: 1;
//     padding: 12px;
//     border-radius: 12px;
//     font-size: 14px;
//     font-weight: 600;
//     cursor: pointer;
//     border: none;
//   }
//   .btn-save {
//     background: #5046e5;
//     color: white;
//   }
//   .btn-cancel {
//     background: #f1f5f9;
//     color: #475569;
//   }
// `;

// export const PaginationSection = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-top: 25px;
//   padding-top: 20px;
//   border-top: 1px solid #e2e8f0;

//   .limit-selector {
//     font-size: 13px;
//     color: #64748b;
//     select {
//       padding: 4px 8px;
//       border-radius: 6px;
//       border: 1px solid #cbd5e1;
//     }
//   }
//   .page-controls {
//     display: flex;
//     gap: 10px;
//     align-items: center;
//     font-size: 13px;
//     button {
//       padding: 6px 12px;
//       background: white;
//       border: 1px solid #cbd5e1;
//       border-radius: 6px;
//       cursor: pointer;
//       &:disabled {
//         opacity: 0.4;
//       }
//     }
//   }
// `;

// src/pages/AdminTrainingsPage/styled.js
import styled from "styled-components";

export const TrainingsWrapper = styled.div`
  width: 100%;
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;

  .header-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;

    h2 {
      font-size: 24px;
      font-weight: 600;
      color: #1e293b;
      margin: 0;
    }
  }

  .trainings-accordion-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

export const TrainingAccordionCard = styled.div`
  background: white;
  border: 1px solid ${(props) => (props.$isOpen ? "#5046e5" : "#e2e8f0")};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
  transition: all 0.2s ease-in-out;

  .right-meta {
    display: flex;
    align-items: center;
    gap: 20px;

    .action-buttons-group {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-left: 10px;

      .icon-action-btn {
        background: #f1f5f9;
        border: none;
        width: 32px;
        height: 32px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          transform: scale(1.05);
        }
      }

      .edit-btn:hover {
        background: #e0f2fe;
      }

      .delete-btn:hover {
        background: #fef2f2;
      }
    }
  }
`;

export const AccordionHeader = styled.div`
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;

  &:hover {
    background: #f8fafc;
  }

  .left-meta {
    display: flex;
    align-items: center;
    gap: 16px;

    .arrow {
      color: #64748b;
      font-size: 11px;
      width: 12px;
    }

    h3 {
      margin: 0 0 2px 0;
      font-size: 16px;
      color: #0f172a;
      font-weight: 600;
    }
    .subtitle {
      margin: 0;
      font-size: 13px;
      color: #64748b;
    }
  }

  .right-meta {
    display: flex;
    align-items: center;
    gap: 20px;

    .type-tag {
      font-size: 12px;
      background: #f1f5f9;
      color: #475569;
      padding: 4px 10px;
      border-radius: 6px;
      font-weight: 500;
    }

    .price-tag {
      font-size: 16px;
      font-weight: 700;
      color: #10b981;
    }
  }
`;

export const AccordionContent = styled.div`
  padding: 20px 24px;
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
  animation: slideDown 0.2s ease-out;

  .summary-quote {
    margin: 0 0 20px 0;
    font-size: 14px;
    color: #475569;
    font-style: italic;
    border-left: 3px solid #cbd5e1;
    padding-left: 12px;
  }

  .details-grid {
    display: grid;
    grid-template-columns: 1.21fr 1fr;
    gap: 35px;
  }

  .details-col {
    h5 {
      margin: 0 0 12px 0;
      font-size: 13px;
      color: #0f172a;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    p {
      margin: 0 0 6px 0;
      font-size: 14px;
      color: #334155;
    }

    .desc-text {
      font-size: 13px;
      color: #475569;
      line-height: 1.5;
    }
  }

  /* Siatka i pigułki przypisanych trenerów */
  .trainers-grid {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .trainer-pill {
    display: flex;
    align-items: center;
    gap: 12px;
    background: white;
    padding: 8px 12px;
    border-radius: 10px;
    border: 1px solid #e2e8f0;

    img {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      object-fit: cover;
    }

    h6 {
      margin: 0 0 1px 0;
      font-size: 13px;
      color: #1e293b;
      font-weight: 600;
    }

    span {
      font-size: 11px;
      color: #64748b;
    }
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-4px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const LevelBadge = styled.span`
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 6px;
  text-transform: uppercase;
  min-width: 95px;
  text-align: center;

  background: ${(p) =>
    p.$level === "Advanced"
      ? "#fef2f2"
      : p.$level === "Intermediate"
        ? "#eff6ff"
        : "#f0fdf4"};
  color: ${(p) =>
    p.$level === "Advanced"
      ? "#dc2626"
      : p.$level === "Intermediate"
        ? "#2563eb"
        : "#16a34a"};
  border: 1px solid
    ${(p) =>
      p.$level === "Advanced"
        ? "#fca5a5"
        : p.$level === "Intermediate"
          ? "#bfdbfe"
          : "#bbf7d0"};
`;

export const AddButton = styled.button`
  background: #5046e5;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
  &:hover {
    opacity: 0.9;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(15, 23, 42, 0.4);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const ModalContainer = styled.div`
  background: white;
  width: 100%;
  max-width: 580px;
  max-height: 85vh;
  overflow-y: auto;
  border-radius: 24px;
  padding: 30px;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 10px;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    h3 {
      margin: 0;
      font-size: 22px;
      color: #0f172a;
      font-weight: 700;
    }
    .close-x {
      background: none;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      img {
        width: 14px;
      }
    }
  }
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 16px;

  label {
    font-size: 13px;
    font-weight: 700;
    color: #334155;
  }
  input,
  select,
  textarea {
    padding: 10px 14px;
    border-radius: 10px;
    border: 1px solid #cbd5e1;
    font-size: 14px;
    outline: none;
    background: white;
    color: #334155;
    &:focus {
      border-color: #5046e5;
    }
  }
  textarea {
    font-family: inherit;
    resize: vertical;
  }

  input[type="file"] {
    padding: 6px 10px;
    cursor: pointer;
    &::file-selector-button {
      font-weight: 600;
      background: #f1f5f9;
      border: 1px solid #cbd5e1;
      padding: 4px 12px;
      border-radius: 6px;
      color: #475569;
      cursor: pointer;
      margin-right: 10px;
      transition: background 0.2s;
      &:hover {
        background: #e2e8f0;
      }
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 24px;
  button {
    flex: 1;
    padding: 12px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    border: none;
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
  justify-content: flex-end;
  margin-top: 25px;
  padding-top: 20px;
  border-top: 1px solid #e2e8f0;

  .page-controls {
    display: flex;
    gap: 10px;
    align-items: center;
    font-size: 13px;
    color: #64748b;
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
