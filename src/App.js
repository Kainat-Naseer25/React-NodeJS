import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Row, Col } from 'reactstrap';
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MyNavbar from "./Components/Navbar/navbar.js"
import DataForm from "./Components/Form/form.js"
import UserCard from "./Components/Card/card.js"
import UserLogin from "./Components/Login/login.js"
import DisplayUser from "./Components/DisplayUser/display.js"
import { useDispatch } from 'react-redux';

function App() {
  const [userData, setUserData] = useState([]);
  const [userToEdit, setUserToEdit] = useState(null);
  const [user, setUser] = useState({});

  const dispatch = useDispatch()
  useEffect(() => {
    console.log("run") 
    fetchData();
  }, []);

  // fetching users
  function fetchData() {
    console.log("run")
    fetch('http://localhost:8085/users/read',{
      method: 'GET'
    })
      .then(res => res.json())
      .then(jsonData => {
        dispatch({ type: 'setAllUsers', payload: jsonData })
      })
  }

  // creating users
  const handleCreateUser = (users) => {
    fetch(`http://localhost:8085/users/create`, {
      method: 'POST',
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: 'createUsers', payload: data })
      })
      .catch((error) => console.error(error));
  };

  //editing users
  useEffect(() => {
    if (userToEdit) {
      // directly spread all values from userToEdit to user state
      setUser({
        ...userToEdit,
      });
    }
  }, [userToEdit]);

  const updateUserData = (key, value) => {
    // dynamically  set user data based on key ie. username, gender
    setUser({
      ...user,
      [key]: value,
    });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("run");
    const newData = { ...user };
  
    if (userToEdit) {
      fetch(`http://localhost:8085/users/`+ userToEdit.id, {
        method: "PUT",
        body: JSON.stringify(newData),
      })
      // console.log(userToEdit.id)
        .then((res) => res.json())
        .then((data) => {
          dispatch({ type: "editUser", payload: newData });
          setUserToEdit(null);
        });
    } else {
      handleCreateUser(newData);
      setUser({});
    }
    console.log("userToEdit:", userToEdit);
    console.log("userData:", userData);
    console.log("user:", user);
    console.log("newData:", newData);
  };
       
  return (
    <BrowserRouter>
      <MyNavbar />

        <Routes>
          <Route exact   path="/" element={<UserLogin />}/>
          <Route
            path="/contacts"
            element={
              <div className="row"  style={{padding:'15px'}}>
                <Row>
                <Col md={{size: 5}}>
                <DataForm user={user} updateUserData={updateUserData} handleSubmit={handleSubmit} userToEdit={userToEdit}/>
                </Col>

                <Col md={{size: 7}}>
                <UserCard key={user.id} user={user} setUserToEdit={setUserToEdit}/>
                </Col>
                </Row>
              </div>
            }
          />
          <Route path="/displayUserData" element={<div className="container">
            <div className="row">
          
            <DisplayUser/>
            </div>
          </div>} />
        </Routes>
      
    </BrowserRouter>
  );
}
export default App;
           
