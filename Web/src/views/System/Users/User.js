import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Card, CardFooter, CardBody, CardHeader, Col, Row } from 'reactstrap';

import { connect } from 'react-redux';
import { userActions } from '../../../_actions';

class User extends Component {

  constructor(props) {
    super(props);

    this.state = {
      detail: {
        fullName: '',
        userName: '',
        mobilePhone: '',
        userRole: '',
        userStatus: '',
        password: ''
      },
      updated: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.users !== this.state.detail) {
      this.setState({ ...this.state, detail: nextProps.users.userDetails });
    }
  }

  componentDidMount() {
    this.props.dispatch(userActions.getById(this.props.match.params.id));
  }

  handleChange(event) {
    const { name, value } = event.target;
    const { detail } = this.state;
    this.setState({ updated: true });
    this.setState({
      detail: {
        ...detail,
        [name]: value
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { detail } = this.state;
    const { dispatch } = this.props;
    if (detail.userName) {
      dispatch(userActions.update(detail.id, detail));
    }
  }

  render() {
    const { users } = this.props;
    const userDetails = users.userDetails;

    return (
      <div className="animated fadeIn">
        {userDetails &&
          <Row>
            <Col md="5">
              <Card>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal" onSubmit={this.handleSubmit}>

                  <CardHeader>
                    <strong>修改账号</strong>
                  </CardHeader>
                  <CardBody>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">姓名</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="text" id="text-input" name="fullName" defaultValue={userDetails.fullName} onChange={this.handleChange} required />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">手机号码</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="text" id="text-input" name="mobilePhone" defaultValue={userDetails.mobilePhone} onChange={this.handleChange} required />
                      </Col>
                    </FormGroup>
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="selectRole">角色</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="select" id="selectRole" name="userRole" defaultValue={userDetails.userRole} onChange={this.handleChange}>
                          <option value="Admin">Admin</option>
                          <option value="Manager">Manager</option>
                          <option value="Member">Member</option>
                        </Input>
                      </Col>
                    </FormGroup>
                  </CardBody>
                  <CardFooter>
                    <Button type="submit" size="sm" color="primary"><i className="fa fa-dot-circle-o"></i> Submit</Button>

                    <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
                  </CardFooter>
                </Form>
              </Card>
            </Col>
          </Row>
        }

      </div>
    )
  }
}

function mapStateToProps(state) {
  const { users, authentication } = state;
  const { user } = authentication;
  return {
    users,
    user
  };
}

export default connect(mapStateToProps)(User);
