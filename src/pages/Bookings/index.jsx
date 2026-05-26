import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getBookingsRequest,
  selectBookingsState,
} from "../../store/slices/bookingsSlice";
import { selectUser } from "../../store/slices/authSlice";
import {
  BookingsWrapper,
  BookingCard,
  NoDataMessage,
  StatusBadge,
  AdminAccordionCard,
  AccordionHeader,
  AccordionContent,
} from "./styled";

export default function BookingsPage() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { bookings, loading, error } = useSelector(selectBookingsState);

  const [expandedBookingId, setExpandedBookingId] = useState(null);

  useEffect(() => {
    dispatch(getBookingsRequest());
  }, [dispatch]);

  if (loading)
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        Loading bookings...
      </div>
    );
  if (error)
    return <div style={{ padding: "50px", color: "red" }}>Error: {error}</div>;

  const isAdmin = user?.role === "admin";

  const toggleExpand = (id) => {
    setExpandedBookingId(expandedBookingId === id ? null : id);
  };

  const formatLongDate = (dateString) => {
    if (!dateString) return "To be decided";
    return new Date(dateString).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  const formatShortDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <BookingsWrapper>
      <h2>
        {isAdmin ? "Bookings Management (Admin Dashboard)" : "My Bookings"}
      </h2>

      {bookings?.length === 0 ? (
        <NoDataMessage>There are no reservations yet.</NoDataMessage>
      ) : isAdmin ? (
        /* ---------------- ADMINISTRATOR VIEW (EXPANDABLE ACCORDION CARDS) ---------------- */
        <div className="admin-accordion-list">
          {bookings.map((booking) => {
            const training = booking.training;
            const isExpanded = expandedBookingId === booking._id;
            const trainingDate = training?.startDates?.[0] || booking.createdAt;

            return (
              <AdminAccordionCard key={booking._id} $isOpen={isExpanded}>
                <AccordionHeader onClick={() => toggleExpand(booking._id)}>
                  <div className="main-info">
                    <span className="arrow">{isExpanded ? "▼" : "▶"}</span>
                    <div>
                      <h4>{training?.name || "Training deleted"}</h4>
                      <p>
                        Client:{" "}
                        <strong>{booking.user?.name || "Unknown"}</strong> (
                        {booking.user?.email})
                      </p>
                    </div>
                  </div>
                  <div className="side-info">
                    <span className="date">
                      {formatShortDate(booking.createdAt)}
                    </span>
                    <StatusBadge $paid={booking.paid}>
                      {booking.paid ? "Paid" : "Unpaid"}
                    </StatusBadge>
                  </div>
                </AccordionHeader>

                {isExpanded && (
                  <AccordionContent>
                    <div className="details-grid">
                      <div className="details-section">
                        <h5>Training Details</h5>
                        <p>
                          📅 Schedule Date:{" "}
                          <strong>{formatLongDate(trainingDate)}</strong>
                        </p>
                        <p>
                          🕒 Time:{" "}
                          <strong>
                            {training?.startTime && training?.endTime
                              ? `${training.startTime} - ${training.endTime}`
                              : "Not set"}
                          </strong>
                        </p>
                        <p>
                          📍 Location:{" "}
                          <strong>{training?.room?.name || "Main Hall"}</strong>
                        </p>
                      </div>

                      <div className="details-section">
                        <h5>Transaction Info</h5>
                        <p>
                          🆔 Order ID:{" "}
                          <code className="booking-id">{booking._id}</code>
                        </p>
                        <p>
                          💳 Total Paid: <strong>{booking.price} PLN</strong>
                        </p>
                        <p>
                          ⏳ Status:{" "}
                          <span style={{ color: "#16a34a", fontWeight: "600" }}>
                            Confirmed by Stripe Webhook
                          </span>
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                )}
              </AdminAccordionCard>
            );
          })}
        </div>
      ) : (
        /* ---------------- CLIENT VIEW (CARDS GRID) ---------------- */
        <div className="cards-grid">
          {bookings.map((booking) => {
            const training = booking.training;
            if (!training) return null;
            const trainingDate = training.startDates?.[0] || booking.createdAt;

            return (
              <BookingCard key={booking._id}>
                <div className="card-header">
                  <h3>{training.name}</h3>
                  <StatusBadge $paid={booking.paid}>
                    {booking.paid ? "Paid" : "Pending"}
                  </StatusBadge>
                </div>
                <div className="card-info">
                  <p>
                    📅 Date: <strong>{formatLongDate(trainingDate)}</strong>
                  </p>
                  <p>
                    🕒 Time:{" "}
                    <strong>
                      {training.startTime && training.endTime
                        ? `${training.startTime} - ${training.endTime}`
                        : "To be decided"}
                    </strong>
                  </p>
                  <p>
                    📍 Location:{" "}
                    <strong>{training.room?.name || "Main Hall"}</strong>
                  </p>
                  <p>
                    💳 Price: <strong>{booking.price} PLN</strong>
                  </p>
                  <p
                    style={{
                      marginTop: "12px",
                      fontSize: "12px",
                      color: "#94a3b8",
                    }}
                  >
                    Purchased on: {formatShortDate(booking.createdAt)}
                  </p>
                </div>
              </BookingCard>
            );
          })}
        </div>
      )}
    </BookingsWrapper>
  );
}
