import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getTrainingsRequest,
  selectTrainingsState,
} from "../../store/slices/trainingsSlice";
import {
  HomeWrapper,
  FiltersSection,
  SearchInput,
  SelectInput,
  GridContainer,
  TrainingCard,
  CardImage,
  CardBody,
  Badge,
  InfoRow,
  PaginationWrapper,
  PageButton,
  LoadingSpinner,
  DetailButton,
  ArrowIcon,
  ResetButton,
  LimitSelectWrapper,
} from "./styled";

export default function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { trainings, loading, error, currentPage, totalResults, limit } =
    useSelector(selectTrainingsState);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");

  useEffect(() => {
    dispatch(getTrainingsRequest({ page: currentPage, limit }));
  }, [dispatch, currentPage, limit]);

  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedType("");
    setSelectedLevel("");
  };

  const filteredtrainings = trainings?.filter((training) => {
    const matchesSearch = training.name
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesType =
      selectedType === "" || training.trainingType === selectedType;
    const matchesLevel =
      selectedLevel === "" || training.level === selectedLevel;
    return matchesSearch && matchesType && matchesLevel;
  });

  const totalPages = Math.ceil(totalResults / limit);

  const handlePageChange = (pageNumber) => {
    if (pageNumber === currentPage) return;
    dispatch(getTrainingsRequest({ page: pageNumber, limit }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLimitChange = (e) => {
    const newLimit = Number(e.target.value);
    dispatch(getTrainingsRequest({ page: 1, limit: newLimit }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (error)
    return <div style={{ padding: "40px", color: "red" }}>Błąd: {error}</div>;

  return (
    <HomeWrapper>
      <FiltersSection>
        <SearchInput
          type="text"
          placeholder="Search trainings by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <SelectInput
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">All disciplines</option>
          <option value="Football">Football</option>
          <option value="Volleyball">Volleyball</option>
          <option value="Hockey">Hockey</option>
          <option value="Tennis">Tennis</option>
          <option value="Handball">Handball</option>
        </SelectInput>
        <SelectInput
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value)}
        >
          <option value="">All levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </SelectInput>
        <ResetButton type="button" onClick={handleResetFilters}>
          Reset filters
        </ResetButton>
      </FiltersSection>

      <h2>Available trainings ({filteredtrainings?.length || 0})</h2>

      {loading ? (
        <LoadingSpinner>Loading schedule...</LoadingSpinner>
      ) : (
        <>
          <GridContainer>
            {filteredtrainings?.map((training) => {
              const trainersNames =
                training.trainers?.map((t) => t.name).join(", ") ||
                "Brak trenera";
              const trainingDate = training.startDates?.[0]
                ? new Date(training.startDates[0]).toLocaleDateString("pl-PL")
                : "Brak daty";

              return (
                <TrainingCard key={training._id}>
                  <CardImage
                    src={`http://localhost:3000/img/trainings/${training.imageCover || "default.jpg"}`}
                    alt={training.name}
                  />
                  <CardBody>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Badge>{training.trainingType || "Trening"}</Badge>
                      <span style={{ fontSize: "12px", color: "#777" }}>
                        {training.level}
                      </span>
                    </div>

                    <h3>{training.name}</h3>
                    <p className="trainer">
                      Trainers: <strong>{trainersNames}</strong>
                    </p>

                    <InfoRow>
                      <span>📅 {trainingDate}</span>
                      <span>
                        🕒 {training.startTime} - {training.endTime}
                      </span>
                    </InfoRow>

                    <InfoRow
                      style={{
                        marginTop: "10px",
                        borderTop: "1px solid #f0f0f0",
                        paddingTop: "10px",
                        marginBottom: "15px",
                      }}
                    >
                      <span className="price">{training.price} PLN</span>
                      <span className="slots">
                        Max people: <strong>{training.maxGroupSize}</strong>
                      </span>
                    </InfoRow>

                    <DetailButton
                      onClick={() => navigate(`/trainings/${training._id}`)}
                    >
                      Details
                      <ArrowIcon />
                    </DetailButton>
                  </CardBody>
                </TrainingCard>
              );
            })}
          </GridContainer>

          <PaginationWrapper>
            <PageButton
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </PageButton>

            {Array.from({ length: totalPages }, (_, index) => {
              const pageNum = index + 1;
              return (
                <PageButton
                  key={pageNum}
                  $active={pageNum === currentPage}
                  onClick={() => handlePageChange(pageNum)}
                >
                  {pageNum}
                </PageButton>
              );
            })}

            <PageButton
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </PageButton>
          </PaginationWrapper>
          <LimitSelectWrapper>
            <label htmlFor="page-limit">Show:</label>
            <select id="page-limit" value={limit} onChange={handleLimitChange}>
              <option value={4}>4</option>
              <option value={8}>8</option>
              <option value={12}>12</option>
              <option value={16}>16</option>
            </select>
          </LimitSelectWrapper>
        </>
      )}
    </HomeWrapper>
  );
}
