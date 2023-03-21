import "./form.css";
import React from 'react'
import { Form, FormGroup, Label, Col, Input, Button, Row } from 'reactstrap';

function DataForm(props) {
  const {user, userToEdit, handleSubmit, onDataSubmit, updateUserData} = props;

  const {username, phone, gender, email, picture } = user;
  
  return (
   // <div className='row' >
    <div>
    <p style={{textAlign:'center',color: 'blue', fontWeight: 'bold',fontSize: 'larger',marginTop:'30px'}}>{userToEdit ? 'Edit Contact' : 'Add Contact'}</p>
      <Form className="formData"
        style={{ textAlign: 'left' }}>
        <FormGroup row>
          <Label for="name" sm={2}> Name </Label> 
          <Col sm={10}>
            <Input id="name" name="name" value={username ?? ''} placeholder="Enter Your Name" onChange={(e) => updateUserData('username', e.target.value)} type="text" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="email" sm={2}> Email </Label>
          <Col sm={10}>
            <Input id="email" name="email" value={email ?? ''} placeholder="Enter Your Email" onChange={(e) => updateUserData('email', e.target.value)} type="email" />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="phone" sm={2}> Phone </Label>
          <Col sm={10}>
            <Input id="phone" name="phone" value={phone ?? ''} placeholder="Enter Your Phone Number" onChange={(e) => updateUserData('phone', e.target.value)} type="tel" />
          </Col>
        </FormGroup>
        <FormGroup row tag="fieldset">
          <legend className="col-form-label col-sm-2"> Gender </legend>
          <Col sm={10}>

            <FormGroup inline>
              <Input name="gender" id="male" value="male" type="radio" checked={gender === 'male'} onChange={(e) => updateUserData('gender', 'male')}/>
              <Label> Male </Label>{' '}
              <Input name="gender" id="female" value="female" type="radio" checked={gender === 'female'} onChange={(e) => updateUserData('gender', 'female')}/>
              <Label> Female </Label>
            </FormGroup>

          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="image" sm={2}> Image </Label>
          <Col sm={10}>
            <Input id="image" name="image" type="file" value={picture ?? ''} onChange={(e) => updateUserData('image', e.target.value)}/>
          </Col>
        </FormGroup>

        <FormGroup>
          <Row>
            { <Button className="btn btn-primary" onClick={handleSubmit}>{userToEdit ? 'Update' : 'Submit'}</Button> }
          </Row>
        </FormGroup>
      </Form>
    </div>
  )
}
export default DataForm;


