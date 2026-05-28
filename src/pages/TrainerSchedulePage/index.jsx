import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTrainerTrainingsRequest,
  selectTrainingsState,
} from "../../store/slices/trainingsSlice";
import {
  TrainingsWrapper,
  TrainingAccordionCard,
  AccordionHeader,
  AccordionContent,
  LevelBadge,
  NoDataMessage,
} from "../AdminTrainingsPage/styled";

export default function TrainerSchedulePage() {
  const dispatch = useDispatch();
  const { trainings, totalResults, loading } =
    useSelector(selectTrainingsState);

  const user = useSelector(
    (state) => state.auth?.user || JSON.parse(localStorage.getItem("user")),
  );

  const [expandedTrainingId, setExpandedTrainingId] = useState(null);

  useEffect(() => {
    if (user?._id) {
      dispatch(getTrainerTrainingsRequest({ trainerId: user._id }));
    }
  }, [dispatch, user?._id]);

  const toggleExpand = (id) => {
    setExpandedTrainingId(expandedTrainingId === id ? null : id);
  };

  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  if (loading && trainings.length === 0) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        Loading your schedule...
      </div>
    );
  }

  return (
    <TrainingsWrapper>
      <div className="header-actions">
        <h2>My Training Schedule ({totalResults || 0})</h2>
      </div>

      {trainings?.length === 0 ? (
        <NoDataMessage>
          You don't have any assigned training sessions in the database.
        </NoDataMessage>
      ) : (
        <div className="trainings-accordion-list">
          {trainings.map((item) => {
            if (!item) return null;
            const isExpanded = expandedTrainingId === item._id;

            return (
              <TrainingAccordionCard key={item._id} $isOpen={isExpanded}>
                <AccordionHeader onClick={() => toggleExpand(item._id)}>
                  <div className="left-meta">
                    <span className="arrow">{isExpanded ? "▼" : "▶"}</span>
                    <LevelBadge $level={item.level}>{item.level}</LevelBadge>
                    <div>
                      <h3>{item.name}</h3>
                      <p className="subtitle">
                        ⏱️ {item.startTime} - {item.endTime} | 📍 Room:{" "}
                        {item.room?.name || "Main Hall"}
                      </p>
                    </div>
                  </div>
                  <div className="right-meta">
                    <span className="type-tag">{item.trainingType}</span>
                    <span
                      className="price-tag"
                      style={{
                        color: "#475569",
                        fontSize: "14px",
                        fontWeight: "500",
                      }}
                    >
                      Capacity: <strong>{item.maxGroupSize} slots</strong>
                    </span>
                  </div>
                </AccordionHeader>

                {isExpanded && (
                  <AccordionContent>
                    <p className="summary-quote">"{item.summary}"</p>
                    <div
                      className="details-grid"
                      style={{ gridTemplateColumns: "1fr" }}
                    >
                      <div className="details-col">
                        <h5>📋 Training Management Specs</h5>
                        <p>
                          ⏱️ Total Duration:{" "}
                          <strong>{item.duration} minutes</strong>
                        </p>
                        <p>
                          👥 Group Booking Status:{" "}
                          <strong>Available ({item.maxGroupSize} max)</strong>
                        </p>
                        <p>
                          📅 Next Session Date:{" "}
                          <strong>
                            {item.startDates?.[0]
                              ? formatDate(item.startDates[0])
                              : "Not scheduled"}
                          </strong>
                        </p>

                        <h5 style={{ marginTop: "20px" }}>
                          🛡️ Full Description Plan
                        </h5>
                        <p className="desc-text" style={{ maxWidth: "100%" }}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                )}
              </TrainingAccordionCard>
            );
          })}
        </div>
      )}
    </TrainingsWrapper>
  );
}
