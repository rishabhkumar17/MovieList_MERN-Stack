import './UserData.css';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import DeleteOutlineSharpIcon from '@mui/icons-material/DeleteOutlineSharp';
import { useState } from 'react';

const UserData = ({
  userData,
  updateUser,
  editUser,
  setEditUser,
  deleteUser,
}) => {
  const [isEdited, setIsEdited] = useState(false);
  const [isSelected, setIsSelected] = useState('');

  const edit = (userId) => {
    setIsEdited(true);
    setIsSelected(userId);
  };

  const handleEditSave = (userId) => {
    updateUser(userId);
    setIsEdited(false);
  };

  return userData.map((user) => {
    return (
      <tr key={user._id} style={{ height: '45px' }}>
        {isEdited && user._id === isSelected ? (
          <>
            <td>
              <input
                type="text"
                placeholder="Enter your username"
                className="edit-name"
                value={editUser.username}
                onChange={(e) =>
                  setEditUser({ ...editUser, username: e.target.value })
                }
              />
            </td>
            <td>
              <input
                type="email"
                placeholder="Enter your email"
                className="edit-email"
                value={editUser.email}
                onChange={(e) =>
                  setEditUser({ ...editUser, email: e.target.value })
                }
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="edit-phone"
                value={editUser.phone}
                onChange={(e) =>
                  setEditUser({ ...editUser, phone: e.target.value })
                }
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Enter your profession"
                className="edit-profession"
                value={editUser.profession}
                onChange={(e) =>
                  setEditUser({ ...editUser, profession: e.target.value })
                }
              />
            </td>
            <td>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <button
                  type="button"
                  className="save-button"
                  onClick={() => handleEditSave(user._id)}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="cancel-button"
                  onClick={() => setIsEdited(false)}
                >
                  Cancel
                </button>
              </div>
            </td>
          </>
        ) : (
          <>
            <td style={{ textTransform: 'capitalize' }}>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td style={{ textTransform: 'capitalize' }}>{user.profession}</td>
            <td className="mobile-action">
              <EditSharpIcon
                sx={{ cursor: 'pointer' }}
                onClick={() => edit(user._id)}
              />
              <DeleteOutlineSharpIcon
                sx={{ cursor: 'pointer', color: 'red' }}
                onClick={() => deleteUser(user._id)}
              />
            </td>
          </>
        )}
      </tr>
    );
  });
};

export default UserData;
