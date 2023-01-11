import axios from 'axios';
import Header from './Header';
import { config } from '../App';
import { useEffect, useState } from 'react';
import './RegisteredUsers.css';
import UserData from './UserData';

const RegisteredUsers = () => {
  const [userData, setUserData] = useState([]);
  const [editUser, setEditUser] = useState({});

  const fetchAPI = async () => {
    try {
      let response = await axios.get(`${config.endpoint}/users`);
      setUserData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const updateUser = async (userId) => {
    try {
      let response = axios.patch(
        `${config.endpoint}/users/${userId}`,
        editUser
      );
      console.log(response.data);
      fetchAPI();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (userId) => {
    try {
      let response = await axios.delete(`${config.endpoint}/users/${userId}`);
      console.log(response.data);
      fetchAPI();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div>
      <Header />
      <div className="user-container">
        <table className="user-list">
          <thead className="table-head">
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Profession</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="table-body">
            <UserData
              userData={userData}
              updateUser={updateUser}
              deleteUser={deleteUser}
              editUser={editUser}
              setEditUser={setEditUser}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RegisteredUsers;
