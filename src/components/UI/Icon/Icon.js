import React from 'react';

export default ({baseURL, iconName, width='100%', height='100%', fill='#000', cursor="pointer", style, onClick}) => {
    /**
     * @description Icon UI component to render icon from provided sprite file
     * @param baseURL   - path of svg sprite file. This field is required.
     * @param iconName  - name of the icon as per the supplied file. This field is required.
     * @param width     - width of the icon. It is recommended to have width in rem or em.
     * @param height    - height of the icon. It is recommended to have height in rem or em.
     * @param fill      - color of the icon.
     * @returns         - UI component with specified baseURL, iconName, width, height and fill
     * @example         - <Icon
     *                          baseUrl={'process.env.PUBLIC_URL + 'assets/icons/sprite.svg#''}
     *                          iconName={'icon-magnifying-glass'}
     *                          width={'2.5em'}
     *                          height={'2.5em'}
     *                          fill={'#999'} 
     *                     />
     */
    return(
        <React.Fragment>
            <svg  
                width={width} 
                height={height} 
                fill={fill} 
                cursor={cursor}
                style={style}
                onClick={onClick}
                className="yc-icon"
            >
                <use href={baseURL + iconName}/>
            </svg>
        </React.Fragment>
    );
}