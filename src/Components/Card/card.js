import { useNavigate } from 'react-router-dom';
import './card.css';
import { Card, CardBody, CardHeader, CardText, Button, Row, Col, FormGroup, CardGroup } from 'reactstrap';
import emailImg from './mail.png';
import phoneImg from './telephone.png'
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

//className="d-none"
function UserCard({ setUserToEdit }) {

  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();

  const { userData } = useSelector((state) => ({
    userData: state.reducer1.allUsers,
  }));

  const updatedUserData = userData?.map((user) => ({
    ...user,
  }));

  // deleting 
  const dispatch = useDispatch();
  const handleButtonClick = (id) => {
    console.log(`http://localhost:8085/users/`+id);
    fetch(`http://localhost:8085/users/`+id, {
      method: 'DELETE',
    })
    .then((res) => res.json()) 
    .then((data) => {
      dispatch({ type: 'setAllUsers', payload: data })
      // dispatch({type:'deleteUser', payload: data})
    })
    .catch((error) => console.error(error));
  };

  return (
    <div>
      <FormGroup row className='form' style={{ textAlign: 'left', padding: '15px' }}>
        <label for="filter"></label>
        <input id="filter" name="filter" placeholder='Filter Contacts...' type="text" style={{ marginBottom: '15px', marginTop: '30px', height: '50px' }} />
      </FormGroup>
      <CardGroup>
        {updatedUserData?.map((user, index) => (
          <Col md={{ size: 6 }} sm="12">
            <Card className="my-2" key={index} style={{ width: '23rem', height: '15rem', textAlign: 'left' }}>
              <CardHeader>
                <Row>
                  <Col md={{ size: 9 }} sm="9">
                    <strong>{user.username}</strong>
                  </Col>

                  <Col md={{ size: 3 }} sm="3">
                    <Button color="success">{user.gender}</Button>
                  </Col>
                </Row>
              </CardHeader>

              <CardBody>
                <Row>
                  <Col md={{ size: 8 }} sm="8">
                    <CardText><img src={emailImg} alt="mail.png" width="20px" height="20px" /> {user.email}</CardText>
                    <img src={phoneImg} alt="mail.png" width="20px" height="20px" /> {user.phone}
                    <div className='mt-5'>
                      <Button color="dark" onClick={() => setUserToEdit(user)}> Edit </Button>{' '}
                      <Button color="danger" onClick={() => {handleButtonClick(user.id)}}> Delete </Button>{' '}
                      <Button
                        color="success"
                        onClick={() => {
                          console.log('view user details')
                          setSelectedUser(user);
                          navigate('/displayUserData', { state: { selectedUser: user } });
                        }}> View </Button>
                    </div>
                  </Col>

                  <Col md={{ size: 4 }} sm="4">
                    <img src={user.image} alt="pic.png" display="block" width="150px" height="150px" />
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>

        ))}
      </CardGroup>
    </div>
  )
}
export default UserCard;
