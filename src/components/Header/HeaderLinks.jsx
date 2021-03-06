import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { Manager, Reference, Popper } from "react-popper";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Hidden from "@material-ui/core/Hidden";

// @material-ui/icons
import Person from "@material-ui/icons/Person";
import Notifications from "@material-ui/icons/Notifications";
import Dashboard from "@material-ui/icons/Dashboard";
import Search from "@material-ui/icons/Search";

// core components
import CustomInput from "../../components/CustomInput/CustomInput.jsx";

import Button from "../../components/CustomButtons/Button.jsx";

import headerLinksStyle from "../../assets/jss/material-dashboard-pro-react/components/headerLinksStyle";
import {logout} from "../../actions/auth.jsx";


class HeaderLinks extends React.Component {
  state = {
    open: false,
    userOpen : false
  };
  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  handleUserClick = ()=>{
    this.setState({ userOpen : !this.state.userOpen});
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleUserClose = () =>{
    this.setState({userOpen : false});
  };

  handleLogOut = () =>{
    logout();
  }
  render() {
    const { classes, rtlActive } = this.props;
    const { open } = this.state;
    const {userOpen} = this.state
    const searchButton =
      classes.top +
      " " +
      classes.searchButton +
      " " +
      classNames({
        [classes.searchRTL]: rtlActive
      });
    const dropdownItem =
      classes.dropdownItem +
      " " +
      classNames({
        [classes.dropdownItemRTL]: rtlActive
      });
    const wrapper = classNames({
      [classes.wrapperRTL]: rtlActive
    });
    const managerClasses = classNames({
      [classes.managerClasses]: true
    });
    return (
      <div className={wrapper}>
        <CustomInput
          rtlActive={rtlActive}
          formControlProps={{
            className: classes.top + " " + classes.search
          }}
          inputProps={{
            placeholder: rtlActive ? "بحث" : "Search",
            inputProps: {
              "aria-label": rtlActive ? "بحث" : "Search",
              className: classes.searchInput
            }
          }}
        />
        <Button
          color="white"
          aria-label="edit"
          justIcon
          round
          className={searchButton}
        >
          <Search
            className={classes.headerLinksSvg + " " + classes.searchIcon}
          />
        </Button>
        <Button
          color="transparent"
          simple
          aria-label="Dashboard"
          justIcon
          className={rtlActive ? classes.buttonLinkRTL : classes.buttonLink}
          muiClasses={{
            label: rtlActive ? classes.labelRTL : ""
          }}
        >
          <Dashboard
            className={
              classes.headerLinksSvg +
              " " +
              (rtlActive
                ? classes.links + " " + classes.linksRTL
                : classes.links)
            }
          />
          <Hidden mdUp>
            <span className={classes.linkText}>
              {rtlActive ? "لوحة القيادة" : "Dashboard"}
            </span>
          </Hidden>
        </Button>

        <Manager>
          <Reference>
            {({ ref }) => (
              <Button
                ref={ref}
                color={window.innerWidth > 959 ? "transparent" : "white"}
                justIcon={window.innerWidth > 959}
                simple={!(window.innerWidth > 959)}
                aria-label="Notifications"
                aria-owns={open ? "menu-list" : null}
                aria-haspopup="true"
                onClick={this.handleClick}
                className={classes.buttonLink}
              >
                <Notifications className={classes.icons} />
                <span className={classes.notifications}>5</span>
                <Hidden mdUp>
                  <p onClick={this.handleClick} className={classes.linkText}>
                    Notification
                  </p>
                </Hidden>
              </Button>
            )}
          </Reference>
          <Popper
            placement="bottom-end"
            eventsEnabled={open}
          >
            {({ ref, style, placement, outOfBoundaries, scheduleUpdate, arrowProps }) => (
              <div
                ref={ref}
                className={
                  classNames({ [classes.popperClose]: !open }, { [classes.popperResponsive]: true })
                }
                style={{
                  position: "absolute",
                  willChange: "transform",
                }}
                data-placement={placement}
              >
                <ClickAwayListener onClickAway={this.handleClose}>
                  <Grow
                    in={open}
                    id="menu-list"
                    style={{ transformOrigin: "0 0 0" }}
                  >
                    <Paper className={classes.dropdown}>
                      <MenuList role="menu">
                        <MenuItem
                          onClick={this.handleClose}
                          className={classes.dropdownItem}
                        >
                          Mike John responded to your email
                      </MenuItem>
                        <MenuItem
                          onClick={this.handleClose}
                          className={classes.dropdownItem}
                        >
                          You have 5 new tasks
                      </MenuItem>
                        <MenuItem
                          onClick={this.handleClose}
                          className={classes.dropdownItem}
                        >
                          You're now friend with Andrew
                      </MenuItem>
                        <MenuItem
                          onClick={this.handleClose}
                          className={classes.dropdownItem}
                        >
                          Another Notification
                      </MenuItem>
                        <MenuItem
                          onClick={this.handleClose}
                          className={classes.dropdownItem}
                        >
                          Another One
                      </MenuItem>
                      </MenuList>

                     
                    </Paper>
                  </Grow>
                </ClickAwayListener>
              </div>
            )}
          </Popper>
        </Manager>

        <Manager>
          <Reference>
            {({ ref }) => (
              <Button
                ref={ref}
                color={window.innerWidth > 959 ? "transparent" : "white"}
                justIcon={window.innerWidth > 959}
                simple={!(window.innerWidth > 959)}
                aria-label="Person"
                aria-owns={open ? "user-list" : null}
                aria-haspopup="true"
                onClick={this.handleUserClick}
                className={classes.buttonLink}
              >

                <Person
                  className={
                    classes.headerLinksSvg +
                    " " +
                    (rtlActive
                      ? classes.links + " " + classes.linksRTL
                      : classes.links)
                  }
                />
                
                <Hidden mdUp>
                  <span className={classes.linkText}>
                    {"Profile"}
                  </span>
                </Hidden>

              </Button>
            )}
          </Reference>
          <Popper
            placement="bottom-end"
            eventsEnabled={userOpen}
          >
            {({ ref, style, placement, outOfBoundaries, scheduleUpdate, arrowProps }) => (
              <div
                ref={ref}
                className={
                  classNames({ [classes.popperClose]: !userOpen }) + " "+
                  classes.popperResponsive
                }
                style={{
                  position: "absolute",
                  willChange: "transform",
                }}
              >
                <ClickAwayListener onClickAway={this.handleUserClose}>
                  <Grow
                    in={userOpen}
                    id="user-list"
                    style={{ transformOrigin: "0 0 0" }}
                  >
                    <Paper className={classes.dropdown}>
                      <MenuList role="menu">
                        <MenuItem
                          onClick={this.handleUserClose}
                          className={classes.dropdownItem}
                        >
                         {"Profile"}
                      </MenuItem>

                          <MenuItem
                            onClick={this.handleLogOut}
                            className={classes.dropdownItem}
                          >
                            {"Logout"}
                          </MenuItem>
                      </MenuList>


                    </Paper>
                  </Grow>
                </ClickAwayListener>
              </div>
            )}
          </Popper>
        </Manager>





      </div>
    );
  }
}

HeaderLinks.propTypes = {
  classes: PropTypes.object.isRequired,
  rtlActive: PropTypes.bool
};
        {/* <Manager className={managerClasses}>
          <Reference>

            { ({ref}) =>
              (
                <Button
                  ref={ref}
                  color="transparent"
                  justIcon
                  aria-label="Notifications"
                  aria-owns={open ? "menu-list" : null}
                  aria-haspopup="true"
                  onClick={this.handleClick}
                  className={rtlActive ? classes.buttonLinkRTL : classes.buttonLink}
                  muiClasses={{
                    label: rtlActive ? classes.labelRTL : ""
                  }}
                >
                  <Notifications
                    className={
                      classes.headerLinksSvg +
                      " " +
                      (rtlActive
                        ? classes.links + " " + classes.linksRTL
                        : classes.links)
                    }
                  />
                  <span className={classes.notifications}>5</span>
                  <Hidden mdUp>
                    <span onClick={this.handleClick} className={classes.linkText}>
                      {rtlActive ? "إعلام" : "Notification"}
                    </span>
                  </Hidden>
                </Button>
              )
            }
            
          </Reference>
          <Popper
            placement="bottom-start"
            eventsEnabled={open}
            className={
              classNames({ [classes.popperClose]: !open }) +
              " " +
              classes.pooperResponsive
            }
          >
          {({ref}) =>( 
            <div ref={ref}>
              <ClickAwayListener onClickAway={this.handleClose}>
                <Grow
                  in={open}
                  id="menu-list"
                  style={{ transformOrigin: "0 0 0" }}
                >
                  <Paper className={classes.dropdown}>
                    <MenuList role="menu">
                      <MenuItem
                        onClick={this.handleClose}
                        className={dropdownItem}
                      >
                        {rtlActive
                          ? "إجلاء أوزار الأسيوي حين بل, كما"
                          : "Mike John responded to your email"}
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleClose}
                        className={dropdownItem}
                      >
                        {rtlActive
                          ? "شعار إعلان الأرضية قد ذلك"
                          : "You have 5 new tasks"}
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleClose}
                        className={dropdownItem}
                      >
                        {rtlActive
                          ? "ثمّة الخاصّة و على. مع جيما"
                          : "You're now friend with Andrew"}
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleClose}
                        className={dropdownItem}
                      >
                        {rtlActive ? "قد علاقة" : "Another Notification"}
                      </MenuItem>
                      <MenuItem
                        onClick={this.handleClose}
                        className={dropdownItem}
                      >
                        {rtlActive ? "قد فاتّبع" : "Another One"}
                      </MenuItem>
                    </MenuList>
                  </Paper>
                </Grow>
              </ClickAwayListener>
              </div>
          )}
            
          </Popper>
        </Manager> */}
        
     

export default withStyles(headerLinksStyle)(HeaderLinks);
