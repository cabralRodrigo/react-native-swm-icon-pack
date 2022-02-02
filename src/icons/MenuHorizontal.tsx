import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type CurvedProps = { fillColor: Color, };
type DuotoneProps = { fillColor: Color, };
type OutlineProps = { fillColor: Color, };

type MenuHorizontalProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M19 12V14C20.1046 14 21 13.1046 21 12H19ZM19 12H17C17 13.1046 17.8954 14 19 14V12ZM19 12V10C17.8954 10 17 10.8954 17 12H19ZM19 12H21C21 10.8954 20.1046 10 19 10V12ZM12 12V14C13.1046 14 14 13.1046 14 12H12ZM12 12H10C10 13.1046 10.8954 14 12 14V12ZM12 12V10C10.8954 10 10 10.8954 10 12H12ZM12 12H14C14 10.8954 13.1046 10 12 10V12ZM5 12V14C6.10457 14 7 13.1046 7 12H5ZM5 12H3C3 13.1046 3.89543 14 5 14V12ZM5 12V10C3.89543 10 3 10.8954 3 12H5ZM5 12H7C7 10.8954 6.10457 10 5 10V12Z" fill={props.fillColor} />
);

const Curved: VFC<CurvedProps> = (props) => (
    <Path d="M19 12V14C20.1046 14 21 13.1046 21 12H19ZM19 12H17C17 13.1046 17.8954 14 19 14V12ZM19 12V10C17.8954 10 17 10.8954 17 12H19ZM19 12H21C21 10.8954 20.1046 10 19 10V12ZM12 12V14C13.1046 14 14 13.1046 14 12H12ZM12 12H10C10 13.1046 10.8954 14 12 14V12ZM12 12V10C10.8954 10 10 10.8954 10 12H12ZM12 12H14C14 10.8954 13.1046 10 12 10V12ZM5 12V14C6.10457 14 7 13.1046 7 12H5ZM5 12H3C3 13.1046 3.89543 14 5 14V12ZM5 12V10C3.89543 10 3 10.8954 3 12H5ZM5 12H7C7 10.8954 6.10457 10 5 10V12Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <Path d="M19 12V14C20.1046 14 21 13.1046 21 12H19ZM19 12H17C17 13.1046 17.8954 14 19 14V12ZM19 12V10C17.8954 10 17 10.8954 17 12H19ZM19 12H21C21 10.8954 20.1046 10 19 10V12ZM12 12V14C13.1046 14 14 13.1046 14 12H12ZM12 12H10C10 13.1046 10.8954 14 12 14V12ZM12 12V10C10.8954 10 10 10.8954 10 12H12ZM12 12H14C14 10.8954 13.1046 10 12 10V12ZM5 12V14C6.10457 14 7 13.1046 7 12H5ZM5 12H3C3 13.1046 3.89543 14 5 14V12ZM5 12V10C3.89543 10 3 10.8954 3 12H5ZM5 12H7C7 10.8954 6.10457 10 5 10V12Z" fill={props.fillColor} />
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M19.25 12C19.25 12.1381 19.1381 12.25 19 12.25V13.75C19.9665 13.75 20.75 12.9665 20.75 12H19.25ZM19 12.25C18.8619 12.25 18.75 12.1381 18.75 12H17.25C17.25 12.9665 18.0335 13.75 19 13.75V12.25ZM18.75 12C18.75 11.8619 18.8619 11.75 19 11.75V10.25C18.0335 10.25 17.25 11.0335 17.25 12H18.75ZM19 11.75C19.1381 11.75 19.25 11.8619 19.25 12H20.75C20.75 11.0335 19.9665 10.25 19 10.25V11.75ZM12.25 12C12.25 12.1381 12.1381 12.25 12 12.25V13.75C12.9665 13.75 13.75 12.9665 13.75 12H12.25ZM12 12.25C11.8619 12.25 11.75 12.1381 11.75 12H10.25C10.25 12.9665 11.0335 13.75 12 13.75V12.25ZM11.75 12C11.75 11.8619 11.8619 11.75 12 11.75V10.25C11.0335 10.25 10.25 11.0335 10.25 12H11.75ZM12 11.75C12.1381 11.75 12.25 11.8619 12.25 12H13.75C13.75 11.0335 12.9665 10.25 12 10.25V11.75ZM5.25 12C5.25 12.1381 5.13807 12.25 5 12.25V13.75C5.9665 13.75 6.75 12.9665 6.75 12H5.25ZM5 12.25C4.86193 12.25 4.75 12.1381 4.75 12H3.25C3.25 12.9665 4.0335 13.75 5 13.75V12.25ZM4.75 12C4.75 11.8619 4.86193 11.75 5 11.75V10.25C4.0335 10.25 3.25 11.0335 3.25 12H4.75ZM5 11.75C5.13807 11.75 5.25 11.8619 5.25 12H6.75C6.75 11.0335 5.9665 10.25 5 10.25V11.75Z" fill={props.fillColor} />
);

const MenuHorizontal: VFC<MenuHorizontalProps> = (props) => {
    switch (props.variant) {
        case 'broken':
            return <Broken {...props} />;
        case 'curved':
            return <Curved {...props} />;
        case 'duotone':
            return <Duotone {...props} />;
        case 'outline':
            return <Outline {...props} />;
    }
};

export default createIcon(MenuHorizontal);