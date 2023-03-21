import { useLocation } from 'react-router-dom';
import { Link } from "react-router-dom";
import { Row } from 'reactstrap';
import './Display.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-vc/CZlS1jK7VeaMOy8WpLRxjK0Hpf9Q/EYfZfbW8KjxnMkGInmn6V5v6y5UxVfU6KX9zeVvY0PKzgn7V0qCr+A==" crossorigin="anonymous" referrerpolicy="no-referrer" />


function DisplayUser() {
  const location = useLocation();
  const { selectedUser } = location.state;

  return (
    <div className="display-container">
      <div className="user-image">
        <img src={selectedUser.image} alt="User Profile" />
      </div>
      <div className="user-name">{selectedUser.username}</div>

      <div className="card-container">

        <div className="user-card">
          <div className="card-icon"><i className="fa fa-venus-mars"></i></div>
          <div className="card-title">BIO DATA</div>
          <div className="card-divider"></div>
          <div className="card-text"><b>Gender:</b> {selectedUser.gender}</div>
          <div className="card-text"><b>Age:</b> {selectedUser.age}</div>
          <div className="card-text"><b>Height:</b> {selectedUser.height}</div>
        </div>
        
        <div className="user-card">
          <div className="card-icon"><i className="fa fa-home"></i></div>
          <div className="card-title">Permanent Address</div>
          <div className="card-divider"></div>
          <div className="card-text"><b>City:</b> {selectedUser.address.city}</div>
          <div className="card-text"><b>House:</b> {selectedUser.address.address}</div>
          <div className="card-text"><b>Zip:</b> {selectedUser.address.postalCode}</div>
        </div>

        <div className="user-card">
          <div className="card-icon"><i className="fa fa-building"></i></div>
          <div className="card-title">Professional Detail</div>
          <div className="card-divider"></div>
          <div className="card-text"><b>Company:</b> {selectedUser.company.name}</div>
          <div className="card-text"><b>Department:</b> {selectedUser.company.department}</div>
          <div className="card-text"><b>Job Title:</b> {selectedUser.company.title}</div>
        </div>

        <div className="user-card">
          <div className="card-icon"><i className="fa fa-phone"></i></div>
          <div className="card-title">Contact Information</div>
          <div className="card-divider"></div>
          <div className="card-text"><b>Phone:</b> {selectedUser.phone}</div>
          <div className="card-text"><b>Email:</b> {selectedUser.email}</div>
          <div className="card-text"><b>Skype:</b> {selectedUser.domain}</div>
        </div>
      </div>
      
      <Link to="/contacts">
      <Row><button className="btn btn-primary">Back</button></Row>
      </Link>
    </div>

  );
}

export default DisplayUser;
