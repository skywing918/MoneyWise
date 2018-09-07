import React, { Component } from 'react';
import { Badge, DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler } from '@coreui/react';
import DefaultHeaderDropdown from './DefaultHeaderDropdown'
import logo from '../../assets/img/brand/logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'
import { connect } from 'react-redux';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {

  render() {
    const { user } = this.props;
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Logo' }}
          minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo' }}
        />
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        {user.isAdmin===true &&
          <Nav className="d-md-down-none" navbar>
            <NavItem className="px-3">
              <NavLink href="/system/dashboard">Dashboard</NavLink>
            </NavItem>
            <NavItem className="px-3">
              <NavLink href="/system/users">Users</NavLink>
            </NavItem>
            <NavItem className="px-3">
              <NavLink href="#">Settings</NavLink>
            </NavItem>
          </Nav>
        }
        <Nav className="ml-auto" navbar >
          <DefaultHeaderDropdown notif />
          <DefaultHeaderDropdown tasks />
          <DefaultHeaderDropdown mssgs />
          <AppHeaderDropdown direction="down">
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
              <DropdownItem><i className="fa fa-file"></i> Projects<Badge color="primary">42</Badge></DropdownItem>
              <DropdownItem divider />
              <DropdownItem><i className="fa fa-shield"></i> Lock Account</DropdownItem>
              <DropdownItem><Link to="/login"><i className="fa fa-lock"></i> Logout</Link></DropdownItem>
            </DropdownMenu>
          </AppHeaderDropdown>
        </Nav>
        {/*<AppAsideToggler className="d-lg-none" mobile />*/}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

function mapStateToProps(state) {
  const { authentication } = state;
  const { user } = authentication;
  return {
    user
  };
}

export default connect(mapStateToProps)(DefaultHeader);
