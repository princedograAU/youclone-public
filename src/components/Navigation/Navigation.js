import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import { Link } from 'react-router-dom';

import Logo from '../UI/Logo/Logo';
import SideDrawer from '../UI/SideDrawer/SideDrawer';
import Icon from '../UI/Icon/Icon';
import SearchBar from '../UI/SearchBar/SearchBar';


class Navigation extends Component {

  state = {isOpen: false};

  baseURL = window.location.origin;
  baseURL_Icon = this.baseURL + '/assets/icons/sprite.svg#';

  sideDrawerToggleHandler = () => {
    this.setState(prevState => ({isOpen: !prevState.isOpen}));
  }

  render() {
    return (
      <Navbar>

        {/* ---- S I D E  D R A W E R ---- */}

        <SideDrawer toggleOpen={this.sideDrawerToggleHandler} currentState={this.state.isOpen}>
          <Link to="/" className="nav-links">
            <Icon baseURL={this.baseURL_Icon} iconName={'icon-home'} width={'2.5rem'} height={'2.5rem'} fill={'#606060'}/>
            Home
          </Link>
          <Link to="/" className="nav-links">
            <Icon baseURL={this.baseURL_Icon} iconName={'icon-local_fire_department'} width={'2.5rem'} height={'2.5rem'} fill={'#606060'}/>
            Trending
          </Link>
          <Link to="/" className="nav-links">
            <Icon baseURL={this.baseURL_Icon} iconName={'icon-video_library'} width={'2.5rem'} height={'2.5rem'} fill={'#606060'}/>
            Subscription
          </Link>
          <hr />
          <Link to="/" className="nav-links">
            <Icon baseURL={this.baseURL_Icon} iconName={'icon-library_books'} width={'2.5rem'} height={'2.5rem'} fill={'#606060'}/>
            Library
          </Link>
          <Link to="/" className="nav-links">
            <Icon baseURL={this.baseURL_Icon} iconName={'icon-slow_motion_video'} width={'2.5rem'} height={'2.5rem'} fill={'#606060'}/>
            History
          </Link>
          <Link to="/" className="nav-links">
            <Icon baseURL={this.baseURL_Icon} iconName={'icon-ondemand_video'} width={'2.5rem'} height={'2.5rem'} fill={'#606060'}/>
            Your videos
          </Link>
          <Link to="/" className="nav-links">
            <Icon baseURL={this.baseURL_Icon} iconName={'icon-watch_later'} width={'2.5rem'} height={'2.5rem'} fill={'#606060'}/>
            Watch later
          </Link>
          <Link to="/" className="nav-links">
            <Icon baseURL={this.baseURL_Icon} iconName={'icon-thumb_up'} width={'2.5rem'} height={'2.5rem'} fill={'#606060'}/>
            Liked videos
          </Link>
        </SideDrawer>
        
        {/* ---- L O G O  &  D R A W E R - I C O N ---- */}

        <div className="brand">
          <Icon 
            baseURL={this.baseURL_Icon} 
            iconName={'icon-menu'} 
            width={'3rem'} 
            height={'3rem'} 
            fill={'#000'}
            onClick={this.sideDrawerToggleHandler}
            style={{ padding: '.2rem' }}
        />
          <Link to="/">
            <Logo 
              baseURL={this.baseURL} 
              logoName="logo.png" 
              alt="YouClone Logo"
            />
          </Link>
        </div>

        {/* ---- S E A R C H B A R ---- */}

        <SearchBar />

        {/* ---- U S E R  C O N T R O L S ---- */}

        <div className="user-controls">
          <Icon baseURL={this.baseURL_Icon} iconName={'icon-video_call'} width={'2.5rem'} height={'2.5rem'} fill={'#606060'}/>
          <Icon baseURL={this.baseURL_Icon} iconName={'icon-apps'} width={'2.5rem'} height={'2.5rem'} fill={'#606060'}/>
          <Icon baseURL={this.baseURL_Icon} iconName={'icon-notifications'} width={'2.5rem'} height={'2.5rem'} fill={'#606060'}/>
          <Icon baseURL={this.baseURL_Icon} iconName={'icon-account_circle'} width={'2.5rem'} height={'2.5rem'} fill={'#606060'}/>
        </div>
      </Navbar>
    )
  }  
}

export default Navigation;
