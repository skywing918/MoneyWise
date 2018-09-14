import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Nav, NavItem, NavLink, TabPane, TabContent, Badge, Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Col, Label, Input, FormGroup, Modal, ModalHeader, ModalBody, ModalFooter, Form } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';

import { bookActions } from '../../_actions';

const propTypes = {
  booksdiv: PropTypes.bool,
  accntdiv: PropTypes.bool,
  tasksdiv: PropTypes.bool,
  newrecorddiv: PropTypes.bool,
};
const defaultProps = {
  booksdiv: false,
  accntdiv: false,
  tasksdiv: false,
  newrecorddiv: false,
};

function BookDropdownItem(props) {
  const book = props.book
  return (
    <DropdownItem>
      <i className="icon-wallet text-success"></i> {book.name}
    </DropdownItem>)
}

class DefaultHeaderDropdown extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleNewRecord = this.toggleNewRecord.bind(this);
    this.toggleTabType = this.toggleTabType.bind(this);
    this.handleChangeRecord = this.handleChangeRecord.bind(this);
    this.handleSubmitRecord = this.handleSubmitRecord.bind(this);
    this.toggleNewBook = this.toggleNewBook.bind(this);
    this.handleChangeBook = this.handleChangeBook.bind(this);
    this.handleSubmitBook = this.handleSubmitBook.bind(this);
    this.state = {
      dropdownOpen: false,
      createRecord: false,
      activeTab: '1',
      record: {
        name: '',
        role: 'RMB',
        curr: '',
        comment: ''
      },
      createBook: false,
      book: {
        name: '',
        comment: ''
      }
    };
  }

  componentDidMount() {
    const { user, booksdiv } = this.props;
    if (booksdiv) {
      this.props.dispatch(bookActions.getByOwner(user.id));
    }
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  toggleNewRecord() {
    this.setState({
      createRecord: !this.state.createRecord,
    });
  }

  toggleTabType(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  handleChangeRecord(event) {
    const { name, value } = event.target;
    const { record } = this.state;
    this.setState({
      record: {
        ...record,
        [name]: value
      }
    });
  }

  handleSubmitRecord(event) {
    event.preventDefault();

    //this.setState({ submitted: true });
    const { account } = this.state;
    const { dispatch } = this.props;
    if (account.name) {
      this.setState({
        create: !this.state.create,
      });
      //dispatch(bookActions.create(user));
    }
  }

  toggleNewBook() {
    this.setState({
      createBook: !this.state.createBook,
    });
  }

  handleChangeBook(event) {
    const { name, value } = event.target;
    const { book } = this.state;
    this.setState({
      book: {
        ...book,
        [name]: value
      }
    });
  }

  handleSubmitBook(event) {
    event.preventDefault();

    this.setState({ createBook: !this.state.createBook });
    const { book } = this.state;
    const { dispatch, user } = this.props;
    book.UpdatedBy = user.unique_name;
    if (book.name) {
      dispatch(bookActions.create(book));
    }
  }

  pupUpNewRecord() {
    return (
      <div>
        <Button color="ghost-success p-0" size="sm" onClick={this.toggleNewRecord}>
          <i className="fa fa-plus-square-o"></i>&nbsp;记一笔
        </Button>
        <Modal isOpen={this.state.createRecord} toggle={this.toggleNewRecord} className={this.props.className}>
          <ModalBody>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '1' })}
                  onClick={() => { this.toggleTabType('1'); }}
                >
                  <i className="icon-calculator"></i> <span className={this.state.activeTab === '1' ? '' : 'd-none'}> 支出</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '2' })}
                  onClick={() => { this.toggleTabType('2'); }}
                >
                  <i className="icon-plus"></i> <span
                    className={this.state.activeTab === '2' ? '' : 'd-none'}> 收入</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({ active: this.state.activeTab === '3' })}
                  onClick={() => { this.toggleTabType('3'); }}
                >
                  <i className="icon-directions"></i> <span className={this.state.activeTab === '3' ? '' : 'd-none'}> 转账</span>
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent activeTab={this.state.activeTab}>
              <TabPane tabId="1">
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal" onSubmit={this.handleSubmit}>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="comment">金额</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="comment" name="comment" value={this.state.record.comment} onChange={this.handleChangeRecord} />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="role">支出项目</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" id="role" name="role" value={this.state.record.role} onChange={this.handleChangeRecord}>
                        <option value="RMB">人民币</option>
                        <option value="MB">美元</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="role">账户</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" id="role" name="role" value={this.state.record.role} onChange={this.handleChangeRecord}>
                        <option value="RMB">人民币</option>
                        <option value="MB">美元</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="curr">日期</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="curr" name="curr" value={this.state.record.curr} onChange={this.handleChangeRecord} />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="comment">备注</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="comment" name="comment" value={this.state.record.comment} onChange={this.handleChangeRecord} />
                    </Col>
                  </FormGroup>
                </Form>
              </TabPane>
              <TabPane tabId="2">
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal" onSubmit={this.handleSubmit}>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="comment">金额</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="comment" name="comment" value={this.state.record.comment} onChange={this.handleChangeRecord} />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="role">收入项目</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" id="role" name="role" value={this.state.record.role} onChange={this.handleChangeRecord}>
                        <option value="RMB">人民币</option>
                        <option value="MB">美元</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="role">账户</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" id="role" name="role" value={this.state.record.role} onChange={this.handleChangeRecord}>
                        <option value="RMB">人民币</option>
                        <option value="MB">美元</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="curr">日期</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="curr" name="curr" value={this.state.record.curr} onChange={this.handleChangeRecord} />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="comment">备注</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="comment" name="comment" value={this.state.record.comment} onChange={this.handleChangeRecord} />
                    </Col>
                  </FormGroup>
                </Form>
              </TabPane>
              <TabPane tabId="3">
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal" onSubmit={this.handleSubmit}>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="comment">金额</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="comment" name="comment" value={this.state.record.comment} onChange={this.handleChangeRecord} />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="role">转出账户</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" id="role" name="role" value={this.state.record.role} onChange={this.handleChangeRecord}>
                        <option value="RMB">人民币</option>
                        <option value="MB">美元</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="role">转入账户</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="select" id="role" name="role" value={this.state.record.role} onChange={this.handleChangeRecord}>
                        <option value="RMB">人民币</option>
                        <option value="MB">美元</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="curr">日期</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="curr" name="curr" value={this.state.record.curr} onChange={this.handleChangeRecord} />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="comment">备注</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="comment" name="comment" value={this.state.record.comment} onChange={this.handleChangeRecord} />
                    </Col>
                  </FormGroup>
                </Form>
              </TabPane>
            </TabContent>

          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleSubmitRecord}>保存</Button>{' '}
            <Button color="secondary" onClick={this.toggleNewRecord}>取消</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
  dropTasks() {
    const itemsCount = 5;
    return (
      <Dropdown nav className="d-md-down-none" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nav>
          <i className="icon-bell"></i><Badge pill color="danger">{itemsCount}</Badge>
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem header tag="div" className="text-center"><strong>You have {itemsCount} pending tasks</strong></DropdownItem>
          <DropdownItem><i className="icon-user-follow text-success"></i> New user registered</DropdownItem>
          <DropdownItem><i className="icon-user-unfollow text-danger"></i> User deleted</DropdownItem>
          <DropdownItem><i className="icon-chart text-info"></i> Sales report is ready</DropdownItem>
          <DropdownItem><i className="icon-basket-loaded text-primary"></i> New client</DropdownItem>
          <DropdownItem><i className="icon-speedometer text-warning"></i> Server overloaded</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }

  dropAccnt() {
    const { user } = this.props;
    return (
      <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle nav>
          <img src={user.picture} className="img-avatar" alt={user.email} />
        </DropdownToggle>
        <DropdownMenu right style={{ right: 'auto' }}>
          <DropdownItem header tag="div" className="text-center"><strong>Account</strong></DropdownItem>
          <DropdownItem><i className="fa fa-envelope-o"></i> Messages<Badge color="success">42</Badge></DropdownItem>
          <DropdownItem><i className="fa fa-tasks"></i> Tasks<Badge color="danger">42</Badge></DropdownItem>
          <DropdownItem header tag="div" className="text-center"><strong>Settings</strong></DropdownItem>
          <DropdownItem><i className="fa fa-user"></i> Profile</DropdownItem>
          <DropdownItem><i className="fa fa-wrench"></i> Settings</DropdownItem>
          <DropdownItem divider />
          <DropdownItem><i className="fa fa-shield"></i> Lock Account</DropdownItem>
          <DropdownItem><Link to="/login"><i className="fa fa-lock"></i> Logout</Link></DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }

  dropBooks() {
    const { books } = this.props;
    const itemsCount = books.items == null ? 0 : books.items.length;
    return (
      <div>
        <Dropdown nav className="d-md-down-none" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle nav>
            <i className="icon-list"></i><Badge pill color="warning">{itemsCount}</Badge>
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem header tag="div" className="text-center"><strong>You have {itemsCount} accounts</strong></DropdownItem>
            {books.items && books.items.map((book, index) =>
              <BookDropdownItem key={index} book={book} />
            )}
            <DropdownItem className="text-center" onClick={this.toggleNewBook}><strong><i className="fa fa-plus fa-lg"></i>增加账本</strong></DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Modal isOpen={this.state.createBook} toggle={this.toggleNewBook} className={this.props.className}>
          <ModalHeader toggle={this.toggleNewBook}>新增账本</ModalHeader>
          <ModalBody>
            <Form action="" method="post" encType="multipart/form-data" className="form-horizontal" onSubmit={this.handleSubmitBook}>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="name">账本名称</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="text" id="name" name="name" value={this.state.book.name} onChange={this.handleChangeBook} required />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="comment">备注</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="text" id="comment" name="comment" value={this.state.book.comment} onChange={this.handleChangeBook} />
                </Col>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.handleSubmitBook}>保存</Button>{' '}
            <Button color="secondary" onClick={this.toggleNewBook}>取消</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }

  render() {
    const { tasksdiv, accntdiv, booksdiv, newrecorddiv } = this.props;
    return (
      tasksdiv ? this.dropTasks() :
        accntdiv ? this.dropAccnt() :
          booksdiv ? this.dropBooks() :
            newrecorddiv ? this.pupUpNewRecord() : null
    );
  }
}

DefaultHeaderDropdown.propTypes = propTypes;
DefaultHeaderDropdown.defaultProps = defaultProps;

function mapStateToProps(state) {
  const { books, authentication } = state;
  const { user } = authentication;
  return {
    user,
    books
  };
}

export default connect(mapStateToProps)(DefaultHeaderDropdown);