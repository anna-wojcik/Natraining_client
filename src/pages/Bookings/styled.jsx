import styled from "styled-components";

export const BookingsWrapper = styled.div`
  width: 100%;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  h2 {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 25px;
    color: #1e293b;
  }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 20px;
  }

  .admin-accordion-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

export const BookingCard = styled.div`
  background: white;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.03);

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f1f5f9;
    padding-bottom: 12px;
    margin-bottom: 15px;

    h3 {
      font-size: 16px;
      margin: 0;
      font-weight: 600;
      color: #0f172a;
    }
  }

  .card-info {
    display: flex;
    flex-direction: column;
    gap: 10px;

    p {
      margin: 0;
      font-size: 14px;
      color: #475569;
    }
  }
`;

export const AdminAccordionCard = styled.div`
  background: white;
  border: 1px solid ${(props) => (props.$isOpen ? "#00bcd4" : "#e2e8f0")};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
  transition: all 0.2s ease-in-out;
`;

export const AccordionHeader = styled.div`
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  user-select: none;
  background-not: #fff;

  &:hover {
    background: #f8fafc;
  }

  .main-info {
    display: flex;
    align-items: center;
    gap: 15px;

    .arrow {
      color: #64748b;
      font-size: 12px;
      width: 15px;
    }

    h4 {
      margin: 0 0 4px 0;
      font-size: 16px;
      color: #0f172a;
      font-weight: 600;
    }

    p {
      margin: 0;
      font-size: 13px;
      color: #64748b;
    }
  }

  .side-info {
    display: flex;
    align-items: center;
    gap: 20px;

    .date {
      font-size: 13px;
      color: #64748b;
    }
  }
`;

export const AccordionContent = styled.div`
  padding: 20px;
  background: #f8fafc;
  border-top: 1px solid #e2e8f0;
  animation: slideDown 0.2s ease-out;

  .details-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }

  .details-section {
    h5 {
      margin: 0 0 12px 0;
      font-size: 14px;
      color: #0f172a;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    p {
      margin: 0 0 8px 0;
      font-size: 14px;
      color: #475569;
    }

    .booking-id {
      background: #e2e8f0;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 12px;
    }
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const StatusBadge = styled.span`
  font-size: 12px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 20px;
  background: ${(props) => (props.$paid ? "#f0fdf4" : "#fef2f2")};
  color: ${(props) => (props.$paid ? "#16a34a" : "#dc2626")};
  border: 1px solid ${(props) => (props.$paid ? "#bbf7d0" : "#fca5a5")};
`;

export const NoDataMessage = styled.p`
  color: #64748b;
  font-style: italic;
  font-size: 14px;
`;
