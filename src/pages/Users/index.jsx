import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsersRequest,
  updateUserRequest,
  selectUsersState,
} from "../../store/slices/usersSlice";
import editPenIcon from "../../assets/edit_pen.svg";
import crossIcon from "../../assets/cross.svg";
import {
  UsersWrapper,
  UserFlatCard,
  RoleBadge,
  StatusBadge,
  NoDataMessage,
  PaginationSection,
  ModalOverlay,
  ModalContainer,
  FormGroup,
  SwitchContainer,
  ButtonGroup,
} from "./styled";

export default function UsersManagementPage() {
  const dispatch = useDispatch();
  const { users, totalResults, loading, error } = useSelector(selectUsersState);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const [editingUser, setEditingUser] = useState(null);
  const [editRole, setEditRole] = useState("user");
  const [editActive, setEditActive] = useState(true);

  useEffect(() => {
    dispatch(getUsersRequest({ page, limit }));
  }, [dispatch, page, limit]);

  const openEditModal = (user) => {
    setEditingUser(user);
    setEditRole(user.role);
    setEditActive(user.active !== false);
  };

  const closeEditModal = () => {
    setEditingUser(null);
  };

  const handleSaveChanges = (e) => {
    e.preventDefault();
    dispatch(
      updateUserRequest({
        id: editingUser._id,
        role: editRole,
        active: editActive,
      }),
    );
    closeEditModal();
  };

  if (loading)
    return (
      <div style={{ padding: "50px", textAlign: "center" }}>
        Loading users database...
      </div>
    );
  if (error)
    return <div style={{ padding: "50px", color: "red" }}>Error: {error}</div>;

  const totalPages = Math.ceil(totalResults / limit);

  return (
    <UsersWrapper>
      <h2>Users Management ({users.length})</h2>

      {users?.length === 0 ? (
        <NoDataMessage>No users found in the database.</NoDataMessage>
      ) : (
        <>
          <div className="users-cards-list">
            {users.map((account) => (
              <UserFlatCard key={account._id}>
                <div className="user-profile-section">
                  <img
                    src={`http://localhost:3000/img/users/${account.photo || "default.jpg"}`}
                    alt={account.name}
                    className="user-avatar"
                  />
                  <div className="user-text">
                    <h4>{account.name}</h4>
                    <p>{account.email}</p>
                  </div>
                </div>

                <div className="user-meta-section">
                  <RoleBadge $role={account.role}>{account.role}</RoleBadge>

                  <StatusBadge $isActive={account.active !== false}>
                    {account.active !== false ? "Active" : "Inactive"}
                  </StatusBadge>

                  <button
                    className="edit-action-btn"
                    onClick={() => openEditModal(account)}
                  >
                    <img src={editPenIcon} alt="Edit" />
                  </button>
                </div>
              </UserFlatCard>
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

          {editingUser && (
            <ModalOverlay onClick={closeEditModal}>
              <ModalContainer onClick={(e) => e.stopPropagation()}>
                <h3>Edit User</h3>
                <span className="user-display-name">{editingUser.name}</span>

                <form onSubmit={handleSaveChanges}>
                  <FormGroup>
                    <label>Role</label>
                    <select
                      value={editRole}
                      onChange={(e) => setEditRole(e.target.value)}
                    >
                      <option value="user">Client</option>
                      <option value="trainer">Trainer</option>
                      <option value="admin">Admin</option>
                    </select>
                  </FormGroup>

                  <FormGroup>
                    <label>Status</label>
                    <SwitchContainer>
                      <label className="switch">
                        <input
                          type="checkbox"
                          checked={editActive}
                          onChange={(e) => setEditActive(e.target.checked)}
                        />
                        <span className="slider round"></span>
                      </label>
                      <span className="switch-label-text">
                        {editActive ? "Active" : "Inactive"}
                      </span>
                    </SwitchContainer>
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
                      <img src={crossIcon} alt="Edit" />
                      Cancel
                    </button>
                  </ButtonGroup>
                </form>
              </ModalContainer>
            </ModalOverlay>
          )}
        </>
      )}
    </UsersWrapper>
  );
}
