import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getReviewsRequest,
  updateReviewRequest,
  selectReviewsState,
} from "../../store/slices/reviewsSlice";
import editPenIcon from "../../assets/edit_pen.svg";
import crossIcon from "../../assets/cross.svg";
import {
  ReviewsWrapper,
  ReviewFlatCard,
  RatingStars,
  NoDataMessage,
  PaginationSection,
  ModalOverlay,
  ModalContainer,
  FormGroup,
  ButtonGroup,
} from "./styled";

export default function ReviewsManagementPage() {
  const dispatch = useDispatch();
  const { reviews, totalResults, loading } = useSelector(selectReviewsState);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const [editingReview, setEditingReview] = useState(null);
  const [editComment, setEditComment] = useState("");
  const [editRating, setEditRating] = useState(5);

  useEffect(() => {
    dispatch(getReviewsRequest({ page, limit }));
  }, [dispatch, page, limit]);

  const openEditModal = (reviewItem) => {
    setEditingReview(reviewItem);
    setEditComment(reviewItem.review);
    setEditRating(reviewItem.rating);
  };

  const closeEditModal = () => {
    setEditingReview(null);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    dispatch(
      updateReviewRequest({
        id: editingReview._id,
        review: editComment,
        rating: editRating,
      }),
    );
    closeEditModal();
  };

  if (loading && reviews.length === 0) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        Loading reviews database...
      </div>
    );
  }

  const totalPages = Math.ceil(totalResults / limit);

  return (
    <ReviewsWrapper>
      <h2>Reviews Management ({totalResults || 0})</h2>

      {reviews?.length === 0 ? (
        <NoDataMessage>No reviews found in the database.</NoDataMessage>
      ) : (
        <>
          <div className="reviews-cards-list">
            {reviews.map((item) => (
              <ReviewFlatCard key={item._id}>
                <div className="review-profile-section">
                  <img
                    src={`http://localhost:3000/img/users/${item.user?.photo || "default.jpg"}`}
                    alt={item.user?.name || "User"}
                    className="user-avatar"
                  />
                  <div className="review-text">
                    <h4>{item.user?.name || "Anonymous"}</h4>
                    <p className="user-email">{item.user?.email}</p>
                    {/* <p className="user-email">{item.user?.email}</p> */}
                    <p className="comment-content">"{item.review}"</p>
                  </div>
                </div>

                <div className="review-meta-section">
                  <RatingStars>
                    {"★".repeat(item.rating)}
                    <span className="empty-stars">
                      {"☆".repeat(5 - item.rating)}
                    </span>
                  </RatingStars>

                  <button
                    className="edit-action-btn"
                    onClick={() => openEditModal(item)}
                  >
                    <img src={editPenIcon} alt="Edit" />
                  </button>
                </div>
              </ReviewFlatCard>
            ))}
          </div>

          <PaginationSection>
            <div className="limit-selector">
              <label htmlFor="limit-select">Results per page: </label>
              <select
                id="limit-select"
                value={limit}
                onChange={(e) => {
                  setLimit(Number(e.target.value));
                  setPage(1);
                }}
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={15}>15</option>
                <option value={20}>20</option>
              </select>
            </div>
            <div className="page-controls">
              <button
                disabled={page === 1}
                onClick={() => setPage((p) => p - 1)}
              >
                Previous
              </button>
              <span>
                Page <strong>{page}</strong> of {totalPages || 1}
              </span>
              <button
                disabled={page === totalPages || totalPages === 0}
                onClick={() => setPage((p) => p + 1)}
              >
                Next
              </button>
            </div>
          </PaginationSection>

          {editingReview && (
            <ModalOverlay onClick={closeEditModal}>
              <ModalContainer onClick={(e) => e.stopPropagation()}>
                <h3>Edit Review</h3>
                <span className="user-display-name">
                  Review by {editingReview.user?.name || "Anonymous"}
                </span>

                <form onSubmit={handleSaveChanges}>
                  <FormGroup>
                    <label>Rating</label>
                    <select
                      value={editRating}
                      onChange={(e) => setEditRating(Number(e.target.value))}
                    >
                      <option value={5}>5 Stars (Excellent)</option>
                      <option value={4}>4 Stars (Very Good)</option>
                      <option value={3}>3 Stars (Good)</option>
                      <option value={2}>2 Stars (Poor)</option>
                      <option value={1}>1 Star (Terrible)</option>
                    </select>
                  </FormGroup>

                  <FormGroup>
                    <label>Review Comment</label>
                    <textarea
                      rows={4}
                      value={editComment}
                      onChange={(e) => setEditComment(e.target.value)}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        borderRadius: "12px",
                        border: "1px solid #cbd5e1",
                        fontSize: "15px",
                        fontFamily: "inherit",
                        resize: "vertical",
                        outline: "none",
                      }}
                      required
                    />
                  </FormGroup>

                  <ButtonGroup>
                    <button type="submit" className="btn-save">
                      Save
                    </button>
                    <button
                      type="button"
                      className="btn-cancel"
                      onClick={closeEditModal}
                    >
                      <img src={crossIcon} alt="Cancel" />
                      Cancel
                    </button>
                  </ButtonGroup>
                </form>
              </ModalContainer>
            </ModalOverlay>
          )}
        </>
      )}
    </ReviewsWrapper>
  );
}
