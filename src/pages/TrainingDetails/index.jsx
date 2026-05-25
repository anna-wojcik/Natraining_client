import { useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getSingleTrainingRequest,
  selectTrainingsState,
} from "../../store/slices/trainingsSlice";
import { getCheckoutSessionRequest } from "../../store/slices/bookingsSlice";
import { selectUser } from "../../store/slices/authSlice";
import {
  DetailsWrapper,
  BackButton,
  HeroSection,
  HeroOverlay,
  HeroContent,
  MainContent,
  Sidebar,
  ContentCard,
  InfoGrid,
  InfoTile,
  TrainerList,
  TrainerCard,
  ReviewSection,
  ReviewCard,
  StarsWrapper,
} from "./styled";

export default function TrainingDetails() {
  const { slug } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const user = useSelector(selectUser);
  const {
    currentTraining,
    loading: trainingLoading,
    error,
  } = useSelector(selectTrainingsState);

  const { loading: bookingLoading } = useSelector((state) => state.bookings);

  useEffect(() => {
    dispatch(getSingleTrainingRequest(slug));
  }, [dispatch, slug]);

  const handleBooking = () => {
    if (!user) {
      navigate("/login", {
        state: { from: location.pathname },
      });
      return;
    }
    dispatch(getCheckoutSessionRequest(currentTraining._id));
  };

  if (trainingLoading)
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        Loading training details...
      </div>
    );
  if (error)
    return <div style={{ padding: "50px", color: "red" }}>Error: {error}</div>;
  if (!currentTraining) return null;

  const startDate = currentTraining.startDates?.[0]
    ? new Date(currentTraining.startDates[0]).toLocaleDateString("pl-PL", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Brak ustalonej daty";

  return (
    <DetailsWrapper>
      <BackButton onClick={() => navigate(-1)}>← Back to schedule</BackButton>

      <HeroSection
        $bgImage={`http://localhost:3000/img/trainings/${currentTraining.imageCover || "default.jpg"}`}
      >
        <HeroOverlay />
        <HeroContent>
          <span className="badge">
            {currentTraining.trainingType} • {currentTraining.level}
          </span>
          <h1>{currentTraining.name}</h1>
          <p className="summary">{currentTraining.summary}</p>
        </HeroContent>
      </HeroSection>

      <div className="layout-grid">
        <MainContent>
          <ContentCard>
            <h3>About this training</h3>
            <p className="description">{currentTraining.description}</p>
          </ContentCard>

          <ContentCard>
            <h3>Reviews ({currentTraining.reviews?.length || 0})</h3>
            <ReviewSection>
              {currentTraining.reviews?.length > 0 ? (
                currentTraining.reviews.map((rev) => (
                  <ReviewCard key={rev._id}>
                    <div className="review-header">
                      <img
                        src={`http://localhost:3000/img/users/${rev.user?.photo || "default.jpg"}`}
                        alt={rev.user?.name}
                      />
                      <div>
                        <h4>{rev.user?.name}</h4>
                        <span className="date">
                          {new Date(rev.createdAt).toLocaleDateString("pl-PL")}
                        </span>
                      </div>
                      <StarsWrapper>
                        {"★".repeat(rev.rating)}
                        {"☆".repeat(5 - rev.rating)}
                      </StarsWrapper>
                    </div>
                    <p className="review-text">"{rev.review}"</p>
                  </ReviewCard>
                ))
              ) : (
                <p style={{ color: "#777", fontStyle: "italic" }}>
                  This training has no reviews yet.
                </p>
              )}
            </ReviewSection>
          </ContentCard>
        </MainContent>

        <Sidebar>
          <ContentCard style={{ borderTop: "4px solid #00bcd4" }}>
            <div className="price-tag">
              <span>Price:</span>
              <h2>{currentTraining.price} PLN</h2>
            </div>

            <InfoGrid>
              <InfoTile>
                <span className="icon">📅</span>
                <div>
                  <small>Date</small>
                  <p>{startDate}</p>
                </div>
              </InfoTile>
              <InfoTile>
                <span className="icon">🕒</span>
                <div>
                  <small>Time</small>
                  <p>
                    {currentTraining.startTime} - {currentTraining.endTime}
                  </p>
                </div>
              </InfoTile>
              <InfoTile>
                <span className="icon">⏱️</span>
                <div>
                  <small>Duration</small>
                  <p>{currentTraining.duration} min</p>
                </div>
              </InfoTile>
              <InfoTile>
                <span className="icon">📍</span>
                <div>
                  <small>Location</small>
                  <p>{currentTraining.room?.name || "Sala główna"}</p>
                </div>
              </InfoTile>
            </InfoGrid>

            <button
              className="book-btn"
              disabled={currentTraining.isCanceled || bookingLoading}
              onClick={handleBooking}
            >
              {bookingLoading
                ? "Redirecting to payment..."
                : currentTraining.isCanceled
                  ? "Canceled training"
                  : !user
                    ? "Log in to book"
                    : "Book now"}
            </button>
          </ContentCard>

          <ContentCard>
            <h3>Trainers</h3>
            <TrainerList>
              {currentTraining.trainers?.map((trainer) => (
                <TrainerCard key={trainer._id}>
                  <img
                    src={`http://localhost:3000/img/users/${trainer.photo || "default.jpg"}`}
                    alt={trainer.name}
                  />
                  <div>
                    <h4>{trainer.name}</h4>
                    <p>{trainer.email}</p>
                  </div>
                </TrainerCard>
              ))}
            </TrainerList>
          </ContentCard>
        </Sidebar>
      </div>
    </DetailsWrapper>
  );
}
