import React from 'react';
import {Link} from 'react-router-dom';
import Backdrop from '../Backdrop/Backdrop';
import Logo from '../Logo/Logo';
import Icon from '../Icon/Icon';

const baseURL = window.location.origin;
const baseURL_Icon = baseURL + '/assets/icons/sprite.svg#';

const SideDrawer = ({currentState, toggleOpen, children}) => {
    /**
     * @description SideDrawer
     */
    return (
        
        <React.Fragment>
            <Backdrop toggleOpen={toggleOpen} currentState={currentState} />
            <div className={`side-drawer ${ currentState ? 'open': '' }`}>
                <div className="side-drawer__header">
                    <Icon 
                        baseURL={baseURL_Icon} 
                        iconName={'icon-clear'} 
                        width={'3rem'} 
                        height={'3rem'} 
                        fill={'#000'}
                        cursor={'pointer'}
                        onClick={toggleOpen}
                        style={{ padding: '.2rem' }}
                    />
                    <Link to="/">
                        <Logo 
                            baseURL={baseURL} 
                            logoName="logo.png" 
                            alt="YouClone Logo"
                        />
                    </Link>
                </div>
                <div className="side-drawer__main">
                    {children}
                </div>
                <div className="side-drawer__footer">
                    <h3>Disclaimer</h3>
                    <p>This disclaimer informs readers that the views, 
                    thoughts, and opinions expressed in this project is to  
                    demonstrate personal IT web development skills and is 
                    not intended to replace the current existing YouTube system.
                    </p>
                    <h4>If you like my work, then feel free to connect with me on</h4>
                    <div className="social__links">
                        <a
                            href='https://au.linkedin.com/in/prince-d-7aa113171?trk=profile-badge'
                            target="_blank"
                        >
                            <Icon 
                                baseURL={baseURL_Icon} 
                                iconName={'icon-linkedin-with-circle'} 
                                width={'3rem'} 
                                height={'3rem'} 
                                fill={'#000'}
                                cursor={'pointer'}
                                onClick={toggleOpen}
                                style={{ padding: '.2rem' }}
                            />
                        </a>
                        <a
                            href="https://github.com/princedograAU"
                            target="_blank"
                        >
                            <Icon 
                                baseURL={baseURL_Icon} 
                                iconName={'icon-github'} 
                                width={'3rem'} 
                                height={'3rem'} 
                                fill={'#000'}
                                cursor={'pointer'}
                                onClick={toggleOpen}
                                style={{ padding: '.2rem' }}
                            />
                        </a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SideDrawer;
