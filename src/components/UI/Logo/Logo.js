import React from 'react';

export default ({ baseURL ,logoName, alt }) => {
    /**
     * @description Logo is a UI component that renders Logo based on baseURL and logo Name
     * @param baseURL   - path of icon file. This usually resides in public folder. This field is required.
     * @param logoName  - name of the logo as per the supplied file. This field is required.
     * @param alt       - Text to be shown in absence of Logo.
     * @returns         - UI component with specified baseURL, iconName, width, height and fill
     * @example         - <Icon
     *                          baseUrl={process.env.PUBLIC_URL}
     *                          logoName={'logo.png'}
     *                          alt="YouClone Logo"
     *                     />
     */
    return(
        <React.Fragment>
            <img 
                src={baseURL + '/' + logoName} 
                alt={alt} 
                className="logo" 
                data-tooltip="this is a tool tip"
            />
        </React.Fragment>
    );
}
