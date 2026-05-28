// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   getTrainingsRequest,
//   createTrainingRequest,
//   selectTrainingsState,
// } from "../../store/slices/trainingsSlice";
// import {
//   selectUsersState,
//   getUsersRequest,
// } from "../../store/slices/usersSlice";
// import crossIcon from "../../assets/cross.svg";
// import {
//   TrainingsWrapper,
//   TrainingRowCard,
//   AddButton,
//   ModalOverlay,
//   ModalContainer,
//   FormGrid,
//   FormGroup,
//   ButtonGroup,
//   PaginationSection,
// } from "./styled";

// export default function AdminTrainingsPage() {
//   const dispatch = useDispatch();
//   const { trainings, totalResults, loading } =
//     useSelector(selectTrainingsState);
//   const { users } = useSelector(selectUsersState);

//   const [page, setPage] = useState(1);
//   const [limit, setLimit] = useState(10);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const [name, setName] = useState("");
//   const [duration, setDuration] = useState("");
//   const [trainingType, setTrainingType] = useState("Football");
//   const [maxGroupSize, setMaxGroupSize] = useState("");
//   const [level, setLevel] = useState("Beginner");
//   const [price, setPrice] = useState("");
//   const [summary, setSummary] = useState("");
//   const [description, setDescription] = useState("");
//   const [startTime, setStartTime] = useState("08:00");
//   const [endTime, setEndTime] = useState("09:30");
//   const [startDate, setStartDate] = useState("");
//   const [room, setRoom] = useState("");
//   const [selectedTrainers, setSelectedTrainers] = useState([]);
//   const [imageCover, setImageCover] = useState(null);

//   const trainersList = users.filter((u) => u.role === "trainer");

//   const roomsList = [
//     { _id: "5c88fa8cf4afda39709c2974", name: "Gym 1" },
//     { _id: "5c88fa8cf4afda39709c2970", name: "Kort Tenisowy" },
//   ];

//   useEffect(() => {
//     dispatch(getTrainingsRequest({ page, limit }));
//     dispatch(getUsersRequest({ limit: 100 }));
//   }, [dispatch, page, limit]);

//   const handleCloseModal = () => {
//     setIsModalOpen(false);
//     setName("");
//     setDuration("");
//     setTrainingType("Football");
//     setMaxGroupSize("");
//     setLevel("Beginner");
//     setPrice("");
//     setSummary("");
//     setDescription("");
//     setStartTime("08:00");
//     setEndTime("09:30");
//     setStartDate("");
//     setRoom("");
//     setSelectedTrainers([]);
//     setImageCover(null);
//   };

//   const handleTrainerCheckbox = (trainerId) => {
//     setSelectedTrainers((prev) =>
//       prev.includes(trainerId)
//         ? prev.filter((id) => id !== trainerId)
//         : [...prev, trainerId],
//     );
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // const formData = new FormData();
//     // formData.append("name", name);
//     // formData.append("duration", Number(duration));
//     // formData.append("trainingType", trainingType);
//     // formData.append("maxGroupSize", maxGroupSize);
//     // formData.append("level", level);
//     // formData.append("price", Number(price));
//     // formData.append("summary", summary);
//     // formData.append("description", description);
//     // formData.append("startTime", startTime);
//     // formData.append("endTime", endTime);
//     // formData.append("room", room || null);
//     // formData.append(
//     //   "startDates",
//     //   startDate ? JSON.stringify([startDate]) : JSON.stringify([]),
//     // );

//     // selectedTrainers.forEach((trainerId) => {
//     //   formData.append("trainers", trainerId);
//     // });

//     // if (imageCover) {
//     //   formData.append("imageCover", imageCover);
//     // }
//     const fileName =
//       imageCover && imageCover.name ? imageCover.name : "default-cover.jpeg";

//     const trainingData = {
//       name,
//       duration: Number(duration),
//       trainingType,
//       maxGroupSize: Number(maxGroupSize),
//       level,
//       price: Number(price),
//       summary,
//       description,
//       startTime,
//       endTime,
//       imageCover: fileName,
//       startDates: startDate ? [new Date(startDate)] : [],
//       room: room || null,
//       trainers: selectedTrainers,
//     };

//     console.log("formData", trainingData);
//     dispatch(createTrainingRequest(trainingData));
//     handleCloseModal();
//   };

//   if (loading && trainings.length === 0) {
//     return (
//       <div style={{ padding: "50px", textAlign: "center" }}>
//         Loading trainings database...
//       </div>
//     );
//   }

//   const totalPages = Math.ceil(totalResults / limit);

//   return (
//     <TrainingsWrapper>
//       <div className="header-actions">
//         <h2>Trainings Management ({totalResults || 0})</h2>
//         <AddButton onClick={() => setIsModalOpen(true)}>
//           + Add New Training
//         </AddButton>
//       </div>

//       <div className="trainings-list">
//         {trainings.map((item) => (
//           <TrainingRowCard key={item._id}>
//             <div className="main-info">
//               <div className="badge">{item.level}</div>
//               <div>
//                 <h3>{item.name}</h3>
//                 <p className="sub-props">
//                   Type: <strong>{item.trainingType}</strong> | Room:{" "}
//                   <strong>{item.room?.name || "Not assigned"}</strong> | Time:{" "}
//                   <strong>
//                     {item.startTime} - {item.endTime}
//                   </strong>
//                 </p>
//               </div>
//             </div>
//             <div className="price-section">
//               <span>Price</span>
//               <strong>{item.price} PLN</strong>
//             </div>
//           </TrainingRowCard>
//         ))}
//       </div>

//       <PaginationSection>
//         <div className="limit-selector">
//           <label htmlFor="limit-select">Results per page: </label>
//           <select
//             id="limit-select"
//             value={limit}
//             onChange={(e) => {
//               setLimit(Number(e.target.value));
//               setPage(1);
//             }}
//           >
//             <option value={5}>5</option>
//             <option value={10}>10</option>
//             <option value={15}>15</option>
//             <option value={20}>20</option>
//           </select>
//         </div>
//         <div className="page-controls">
//           <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
//             Previous
//           </button>
//           <span>
//             Page <strong>{page}</strong> of {totalPages || 1}
//           </span>
//           <button
//             disabled={page === totalPages || totalPages === 0}
//             onClick={() => setPage((p) => p + 1)}
//           >
//             Next
//           </button>
//         </div>
//       </PaginationSection>

//       {isModalOpen && (
//         <ModalOverlay onClick={handleCloseModal}>
//           <ModalContainer onClick={(e) => e.stopPropagation()}>
//             <div className="modal-header">
//               <h3>Create New Training</h3>
//               <button className="close-x" onClick={handleCloseModal}>
//                 <img src={crossIcon} alt="Close" />
//               </button>
//             </div>

//             <form onSubmit={handleSubmit}>
//               <FormGroup>
//                 <label>Training Title (10-40 chars)</label>
//                 <input
//                   type="text"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   minLength={10}
//                   maxLength={40}
//                   placeholder="e.g., Pro Football Tactical Camp"
//                   required
//                 />
//               </FormGroup>

//               <FormGrid>
//                 <FormGroup>
//                   <label>Training Type</label>
//                   <select
//                     value={trainingType}
//                     onChange={(e) => setTrainingType(e.target.value)}
//                   >
//                     <option value="Football">Football</option>
//                     <option value="Volleyball">Volleyball</option>
//                     <option value="Handball">Handball</option>
//                     <option value="Basketball">Basketball</option>
//                     <option value="Tennis">Tennis</option>
//                     <option value="Hockey">Hockey</option>
//                   </select>
//                 </FormGroup>

//                 <FormGroup>
//                   <label>Level</label>
//                   <select
//                     value={level}
//                     onChange={(e) => setLevel(e.target.value)}
//                   >
//                     <option value="Beginner">Beginner</option>
//                     <option value="Intermediate">Intermediate</option>
//                     <option value="Advanced">Advanced</option>
//                   </select>
//                 </FormGroup>
//               </FormGrid>

//               <FormGrid>
//                 <FormGroup>
//                   <label>Duration (min)</label>
//                   <input
//                     type="number"
//                     value={duration}
//                     onChange={(e) => setDuration(e.target.value)}
//                     required
//                   />
//                 </FormGroup>

//                 <FormGroup>
//                   <label>Max Group Size</label>
//                   <input
//                     type="number"
//                     value={maxGroupSize}
//                     onChange={(e) => setMaxGroupSize(e.target.value)}
//                     required
//                   />
//                 </FormGroup>
//               </FormGrid>

//               <FormGrid>
//                 <FormGroup>
//                   <label>Start Time</label>
//                   <input
//                     type="time"
//                     value={startTime}
//                     onChange={(e) => setStartTime(e.target.value)}
//                     required
//                   />
//                 </FormGroup>

//                 <FormGroup>
//                   <label>End Time</label>
//                   <input
//                     type="time"
//                     value={endTime}
//                     onChange={(e) => setEndTime(e.target.value)}
//                     required
//                   />
//                 </FormGroup>
//               </FormGrid>

//               <FormGrid>
//                 <FormGroup>
//                   <label>Price (PLN)</label>
//                   <input
//                     type="number"
//                     value={price}
//                     onChange={(e) => setPrice(e.target.value)}
//                     required
//                   />
//                 </FormGroup>

//                 <FormGroup>
//                   <label>First Start Date</label>
//                   <input
//                     type="date"
//                     value={startDate}
//                     onChange={(e) => setStartDate(e.target.value)}
//                     required
//                   />
//                 </FormGroup>
//               </FormGrid>

//               <FormGrid>
//                 <FormGroup>
//                   <label>Assigned Room</label>
//                   <select
//                     value={room}
//                     onChange={(e) => setRoom(e.target.value)}
//                     required
//                   >
//                     <option value="">-- Select Room --</option>
//                     {roomsList.map((r) => (
//                       <option key={r._id} value={r._id}>
//                         {r.name}
//                       </option>
//                     ))}
//                   </select>
//                 </FormGroup>

//                 <FormGroup>
//                   <label>Upload Image Cover</label>
//                   <input
//                     type="file"
//                     accept="image/*"
//                     onChange={(e) => setImageCover(e.target.files[0])}
//                     required
//                   />
//                 </FormGroup>
//               </FormGrid>

//               <FormGroup>
//                 <label style={{ marginBottom: "8px" }}>Assign Trainers</label>
//                 <div
//                   style={{
//                     display: "grid",
//                     gridTemplateColumns: "1fr 1fr",
//                     gap: "10px",
//                     background: "#f8fafc",
//                     padding: "12px",
//                     borderRadius: "10px",
//                     border: "1px solid #cbd5e1",
//                     maxHeight: "120px",
//                     overflowY: "auto",
//                   }}
//                 >
//                   {trainersList.map((trainer) => (
//                     <label
//                       key={trainer._id}
//                       style={{
//                         display: "flex",
//                         alignItems: "center",
//                         gap: "8px",
//                         fontSize: "14px",
//                         fontWeight: "normal",
//                         cursor: "pointer",
//                       }}
//                     >
//                       <input
//                         type="checkbox"
//                         checked={selectedTrainers.includes(trainer._id)}
//                         onChange={() => handleTrainerCheckbox(trainer._id)}
//                       />
//                       {trainer.name}
//                     </label>
//                   ))}
//                 </div>
//               </FormGroup>

//               <FormGroup>
//                 <label>Summary</label>
//                 <input
//                   type="text"
//                   value={summary}
//                   onChange={(e) => setSummary(e.target.value)}
//                   placeholder="Short catchphrase summary"
//                   required
//                 />
//               </FormGroup>

//               <FormGroup>
//                 <label>Full Description</label>
//                 <textarea
//                   rows={3}
//                   value={description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   placeholder="Detailed training description plan..."
//                   required
//                 />
//               </FormGroup>

//               <ButtonGroup>
//                 <button type="submit" className="btn-save">
//                   Save Training
//                 </button>
//                 <button
//                   type="button"
//                   className="btn-cancel"
//                   onClick={handleCloseModal}
//                 >
//                   Cancel
//                 </button>
//               </ButtonGroup>
//             </form>
//           </ModalContainer>
//         </ModalOverlay>
//       )}
//     </TrainingsWrapper>
//   );
// }

// src/pages/AdminTrainingsPage/index.jsx
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTrainingsRequest,
  createTrainingRequest,
  updateTrainingRequest,
  deleteTrainingRequest,
  selectTrainingsState,
} from "../../store/slices/trainingsSlice";
import {
  selectUsersState,
  getUsersRequest,
} from "../../store/slices/usersSlice";
import crossIcon from "../../assets/cross.svg";
import editPenIcon from "../../assets/edit_pen.svg"; // Upewnij się, że masz ścieżkę do piórka
import {
  TrainingsWrapper,
  TrainingAccordionCard,
  AccordionHeader,
  AccordionContent,
  AddButton,
  ModalOverlay,
  ModalContainer,
  FormGrid,
  FormGroup,
  ButtonGroup,
  PaginationSection,
  LevelBadge,
} from "./styled";

export default function AdminTrainingsPage() {
  const dispatch = useDispatch();
  const { trainings, totalResults, loading } =
    useSelector(selectTrainingsState);
  const { users } = useSelector(selectUsersState);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedTrainingId, setSelectedTrainingId] = useState(null);
  const [expandedTrainingId, setExpandedTrainingId] = useState(null);

  // Stany formularza
  const [name, setName] = useState("");
  const [duration, setDuration] = useState("");
  const [trainingType, setTrainingType] = useState("Football");
  const [maxGroupSize, setMaxGroupSize] = useState("");
  const [level, setLevel] = useState("Beginner");
  const [price, setPrice] = useState("");
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState("08:00");
  const [endTime, setEndTime] = useState("09:30");
  const [startDate, setStartDate] = useState("");
  const [room, setRoom] = useState("");
  const [selectedTrainers, setSelectedTrainers] = useState([]);
  const [imageCover, setImageCover] = useState(null);

  const trainersList = users.filter((u) => u.role === "trainer");
  const roomsList = [
    { _id: "5c88fa8cf4afda39709c2974", name: "Gym 1" },
    { _id: "5c88fa8cf4afda39709c2970", name: "Kort Tenisowy" },
  ];

  useEffect(() => {
    dispatch(getTrainingsRequest({ page, limit }));
    dispatch(getUsersRequest({ limit: 100 }));
  }, [dispatch, page, limit]);

  const toggleExpand = (id) => {
    setExpandedTrainingId(expandedTrainingId === id ? null : id);
  };

  const openCreateModal = () => {
    setIsEditMode(false);
    setIsModalOpen(true);
  };

  const openEditModal = (e, item) => {
    e.stopPropagation();
    setIsEditMode(true);
    setSelectedTrainingId(item._id);

    setName(item.name);
    setDuration(item.duration);
    setTrainingType(item.trainingType);
    setMaxGroupSize(item.maxGroupSize);
    setLevel(item.level);
    setPrice(item.price);
    setSummary(item.summary);
    setDescription(item.description);
    setStartTime(item.startTime);
    setEndTime(item.endTime);
    setRoom(item.room?._id || item.room || "");
    setSelectedTrainers(item.trainers?.map((t) => t._id || t) || []);
    if (item.startDates?.[0]) {
      setStartDate(new Date(item.startDates[0]).toISOString().split("T")[0]);
    }
    setIsModalOpen(true);
  };

  const handleDelete = (e, id, trainingName) => {
    e.stopPropagation();
    if (
      window.confirm(
        `Are you absolutely sure you want to delete "${trainingName}"?`,
      )
    ) {
      dispatch(deleteTrainingRequest(id));
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTrainingId(null);
    setName("");
    setDuration("");
    setTrainingType("Football");
    setMaxGroupSize("");
    setLevel("Beginner");
    setPrice("");
    setSummary("");
    setDescription("");
    setStartTime("08:00");
    setEndTime("09:30");
    setStartDate("");
    setRoom("");
    setSelectedTrainers([]);
    setImageCover(null);
  };

  const handleTrainerCheckbox = (trainerId) => {
    setSelectedTrainers((prev) =>
      prev.includes(trainerId)
        ? prev.filter((id) => id !== trainerId)
        : [...prev, trainerId],
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fileName =
      imageCover && imageCover.name ? imageCover.name : "default-cover.jpeg";

    const trainingData = {
      name,
      duration: Number(duration),
      trainingType,
      maxGroupSize: Number(maxGroupSize),
      level,
      price: Number(price),
      summary,
      description,
      startTime,
      endTime,
      startDates: startDate ? [new Date(startDate)] : [],
      room: room || null,
      trainers: selectedTrainers,
    };

    if (isEditMode) {
      dispatch(
        updateTrainingRequest({ id: selectedTrainingId, ...trainingData }),
      );
    } else {
      dispatch(
        createTrainingRequest({ ...trainingData, imageCover: fileName }),
      );
    }
    handleCloseModal();
  };

  if (loading && trainings.length === 0) {
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        Loading trainings database...
      </div>
    );
  }

  const totalPages = Math.ceil(totalResults / limit);

  return (
    <TrainingsWrapper>
      <div className="header-actions">
        <h2>Trainings Management ({totalResults || 0})</h2>
        <AddButton onClick={openCreateModal}>+ Add New Training</AddButton>
      </div>

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
                      ⏱️ {item.startTime} - {item.endTime} | 📍{" "}
                      {item.room?.name || "Main Hall"}
                    </p>
                  </div>
                </div>
                <div className="right-meta">
                  <span className="type-tag">{item.trainingType}</span>
                  <span className="price-tag">{item.price} PLN</span>

                  <div className="action-buttons-group">
                    <button
                      className="icon-action-btn edit-btn"
                      onClick={(e) => openEditModal(e, item)}
                    >
                      <img
                        src={editPenIcon}
                        alt="Edit"
                        style={{ width: "15px" }}
                      />
                    </button>
                    <button
                      className="icon-action-btn delete-btn"
                      onClick={(e) => handleDelete(e, item._id, item.name)}
                    >
                      <img
                        src={crossIcon}
                        alt="Delete"
                        style={{ width: "11px" }}
                      />
                    </button>
                  </div>
                </div>
              </AccordionHeader>

              {isExpanded && (
                <AccordionContent>
                  <p className="summary-quote">"{item.summary}"</p>
                  <div className="details-grid">
                    <div className="details-col">
                      <h5>📋 Training Specifications</h5>
                      <p>
                        ⏱️ Duration: <strong>{item.duration} minutes</strong>
                      </p>
                      <p>
                        👥 Max Group Size:{" "}
                        <strong>{item.maxGroupSize} slots</strong>
                      </p>
                      <p style={{ marginTop: "14px" }}>
                        <strong>Full Description:</strong>
                      </p>
                      <p className="desc-text">{item.description}</p>
                    </div>
                    <div className="details-col">
                      <h5>
                        🛡️ Assigned Trainers ({item.trainers?.length || 0})
                      </h5>
                      <div className="trainers-grid">
                        {item.trainers?.map((trainer) => (
                          <div key={trainer._id} className="trainer-pill">
                            <img
                              src={`http://localhost:3000/img/users/${trainer.photo || "default.jpg"}`}
                              alt=""
                            />
                            <div>
                              <h6>{trainer.name}</h6>
                              <span>{trainer.email}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </AccordionContent>
              )}
            </TrainingAccordionCard>
          );
        })}
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
          <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>
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

      {isModalOpen && (
        <ModalOverlay onClick={handleCloseModal}>
          <ModalContainer onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>
                {isEditMode ? "Edit Existing Training" : "Create New Training"}
              </h3>
              <button className="close-x" onClick={handleCloseModal}>
                <img src={crossIcon} alt="Close" />
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <FormGroup>
                <label>Training Title (10-40 chars)</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  minLength={10}
                  maxLength={40}
                  required
                />
              </FormGroup>

              <FormGrid>
                <FormGroup>
                  <label>Training Type</label>
                  <select
                    value={trainingType}
                    onChange={(e) => setTrainingType(e.target.value)}
                  >
                    <option value="Football">Football</option>
                    <option value="Volleyball">Volleyball</option>
                    <option value="Handball">Handball</option>
                    <option value="Basketball">Basketball</option>
                    <option value="Tennis">Tennis</option>
                    <option value="Hockey">Hockey</option>
                  </select>
                </FormGroup>
                <FormGroup>
                  <label>Level</label>
                  <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                  </select>
                </FormGroup>
              </FormGrid>

              <FormGrid>
                <FormGroup>
                  <label>Duration (min)</label>
                  <input
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <label>Max Group Size</label>
                  <input
                    type="number"
                    value={maxGroupSize}
                    onChange={(e) => setMaxGroupSize(e.target.value)}
                    required
                  />
                </FormGroup>
              </FormGrid>

              <FormGrid>
                <FormGroup>
                  <label>Start Time</label>
                  <input
                    type="time"
                    value={startTime}
                    onChange={(e) => setStartTime(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <label>End Time</label>
                  <input
                    type="time"
                    value={endTime}
                    onChange={(e) => setEndTime(e.target.value)}
                    required
                  />
                </FormGroup>
              </FormGrid>

              <FormGrid>
                <FormGroup>
                  <label>Price (PLN)</label>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                  />
                </FormGroup>
                <FormGroup>
                  <label>First Start Date</label>
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    required
                  />
                </FormGroup>
              </FormGrid>

              <FormGrid>
                <FormGroup>
                  <label>Assigned Room</label>
                  <select
                    value={room}
                    onChange={(e) => setRoom(e.target.value)}
                    required
                  >
                    <option value="">-- Select Room --</option>
                    {roomsList.map((r) => (
                      <option key={r._id} value={r._id}>
                        {r.name}
                      </option>
                    ))}
                  </select>
                </FormGroup>
                <FormGroup>
                  <label>
                    {isEditMode
                      ? "Image Cover Name (Locked)"
                      : "Upload Image Cover"}
                  </label>
                  {isEditMode ? (
                    <input
                      type="text"
                      value="Cover text saved in database"
                      disabled
                      style={{ background: "#f1f5f9" }}
                    />
                  ) : (
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => setImageCover(e.target.files[0])}
                      required
                    />
                  )}
                </FormGroup>
              </FormGrid>

              <FormGroup>
                <label style={{ marginBottom: "8px" }}>Assign Trainers</label>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "10px",
                    background: "#f8fafc",
                    padding: "12px",
                    borderRadius: "10px",
                    border: "1px solid #cbd5e1",
                    maxHeight: "120px",
                    overflowY: "auto",
                  }}
                >
                  {trainersList.map((trainer) => (
                    <label
                      key={trainer._id}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        fontSize: "14px",
                        fontWeight: "normal",
                        cursor: "pointer",
                      }}
                    >
                      <input
                        type="checkbox"
                        checked={selectedTrainers.includes(trainer._id)}
                        onChange={() => handleTrainerCheckbox(trainer._id)}
                      />
                      {trainer.name}
                    </label>
                  ))}
                </div>
              </FormGroup>

              <FormGroup>
                <label>Summary</label>
                <input
                  type="text"
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <label>Full Description</label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                />
              </FormGroup>

              <ButtonGroup>
                <button type="submit" className="btn-save">
                  {isEditMode ? "Save Changes" : "Save Training"}
                </button>
                <button
                  type="button"
                  className="btn-cancel"
                  onClick={handleCloseModal}
                >
                  Cancel
                </button>
              </ButtonGroup>
            </form>
          </ModalContainer>
        </ModalOverlay>
      )}
    </TrainingsWrapper>
  );
}
