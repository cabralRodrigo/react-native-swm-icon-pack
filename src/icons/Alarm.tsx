import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type CurvedProps = { fillColor: Color, };
type DuotoneProps = { fillColor: Color, };
type OutlineProps = { fillColor: Color, };

type AlarmProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9H12.75ZM12 13H11.25C11.25 13.1989 11.329 13.3897 11.4697 13.5303L12 13ZM13.4697 15.5303C13.7626 15.8232 14.2374 15.8232 14.5303 15.5303C14.8232 15.2374 14.8232 14.7626 14.5303 14.4697L13.4697 15.5303ZM19.25 13C19.25 13.4142 19.5858 13.75 20 13.75C20.4142 13.75 20.75 13.4142 20.75 13H19.25ZM18.5623 18.7879C18.8364 18.4774 18.8069 18.0034 18.4963 17.7293C18.1857 17.4552 17.7118 17.4848 17.4377 17.7953L18.5623 18.7879ZM18.5303 2.46967C18.2374 2.17678 17.7626 2.17678 17.4697 2.46967C17.1768 2.76256 17.1768 3.23744 17.4697 3.53033L18.5303 2.46967ZM20.4697 6.53033C20.7626 6.82322 21.2374 6.82322 21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L20.4697 6.53033ZM2.46967 5.46967C2.17678 5.76256 2.17678 6.23744 2.46967 6.53033C2.76256 6.82322 3.23744 6.82322 3.53033 6.53033L2.46967 5.46967ZM6.53033 3.53033C6.82322 3.23744 6.82322 2.76256 6.53033 2.46967C6.23744 2.17678 5.76256 2.17678 5.46967 2.46967L6.53033 3.53033ZM11.25 9V13H12.75V9H11.25ZM11.4697 13.5303L13.4697 15.5303L14.5303 14.4697L12.5303 12.4697L11.4697 13.5303ZM12 20.25C7.99594 20.25 4.75 17.0041 4.75 13H3.25C3.25 17.8325 7.16751 21.75 12 21.75V20.25ZM4.75 13C4.75 8.99594 7.99594 5.75 12 5.75V4.25C7.16751 4.25 3.25 8.16751 3.25 13H4.75ZM12 5.75C16.0041 5.75 19.25 8.99594 19.25 13H20.75C20.75 8.16751 16.8325 4.25 12 4.25V5.75ZM17.4377 17.7953C16.1081 19.3017 14.1653 20.25 12 20.25V21.75C14.6135 21.75 16.9601 20.6033 18.5623 18.7879L17.4377 17.7953ZM17.4697 3.53033L20.4697 6.53033L21.5303 5.46967L18.5303 2.46967L17.4697 3.53033ZM3.53033 6.53033L6.53033 3.53033L5.46967 2.46967L2.46967 5.46967L3.53033 6.53033Z" fill={props.fillColor} />
);

const Curved: VFC<CurvedProps> = (props) => (
    <Path d="M12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9H12.75ZM12 13H11.25C11.25 13.1989 11.329 13.3897 11.4697 13.5303L12 13ZM13.4697 15.5303C13.7626 15.8232 14.2374 15.8232 14.5303 15.5303C14.8232 15.2374 14.8232 14.7626 14.5303 14.4697L13.4697 15.5303ZM18.5303 2.46967C18.2374 2.17678 17.7626 2.17678 17.4697 2.46967C17.1768 2.76256 17.1768 3.23744 17.4697 3.53033L18.5303 2.46967ZM20.4697 6.53033C20.7626 6.82322 21.2374 6.82322 21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L20.4697 6.53033ZM2.46967 5.46967C2.17678 5.76256 2.17678 6.23744 2.46967 6.53033C2.76256 6.82322 3.23744 6.82322 3.53033 6.53033L2.46967 5.46967ZM6.53033 3.53033C6.82322 3.23744 6.82322 2.76256 6.53033 2.46967C6.23744 2.17678 5.76256 2.17678 5.46967 2.46967L6.53033 3.53033ZM11.25 9V13H12.75V9H11.25ZM11.4697 13.5303L13.4697 15.5303L14.5303 14.4697L12.5303 12.4697L11.4697 13.5303ZM19.25 13C19.25 17.0041 16.0041 20.25 12 20.25V21.75C16.8325 21.75 20.75 17.8325 20.75 13H19.25ZM12 20.25C7.99594 20.25 4.75 17.0041 4.75 13H3.25C3.25 17.8325 7.16751 21.75 12 21.75V20.25ZM4.75 13C4.75 8.99594 7.99594 5.75 12 5.75V4.25C7.16751 4.25 3.25 8.16751 3.25 13H4.75ZM12 5.75C16.0041 5.75 19.25 8.99594 19.25 13H20.75C20.75 8.16751 16.8325 4.25 12 4.25V5.75ZM17.4697 3.53033L20.4697 6.53033L21.5303 5.46967L18.5303 2.46967L17.4697 3.53033ZM3.53033 6.53033L6.53033 3.53033L5.46967 2.46967L2.46967 5.46967L3.53033 6.53033Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <>
        <Path opacity="0.15" d="M20 13C20 17.4183 16.4183 21 12 21C7.58172 21 4 17.4183 4 13C4 8.58172 7.58172 5 12 5C16.4183 5 20 8.58172 20 13Z" fill={props.fillColor} />
        <Path d="M12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9H12.75ZM12 13H11.25C11.25 13.1989 11.329 13.3897 11.4697 13.5303L12 13ZM13.4697 15.5303C13.7626 15.8232 14.2374 15.8232 14.5303 15.5303C14.8232 15.2374 14.8232 14.7626 14.5303 14.4697L13.4697 15.5303ZM18.5303 2.46967C18.2374 2.17678 17.7626 2.17678 17.4697 2.46967C17.1768 2.76256 17.1768 3.23744 17.4697 3.53033L18.5303 2.46967ZM20.4697 6.53033C20.7626 6.82322 21.2374 6.82322 21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L20.4697 6.53033ZM2.46967 5.46967C2.17678 5.76256 2.17678 6.23744 2.46967 6.53033C2.76256 6.82322 3.23744 6.82322 3.53033 6.53033L2.46967 5.46967ZM6.53033 3.53033C6.82322 3.23744 6.82322 2.76256 6.53033 2.46967C6.23744 2.17678 5.76256 2.17678 5.46967 2.46967L6.53033 3.53033ZM11.25 9V13H12.75V9H11.25ZM11.4697 13.5303L13.4697 15.5303L14.5303 14.4697L12.5303 12.4697L11.4697 13.5303ZM19.25 13C19.25 17.0041 16.0041 20.25 12 20.25V21.75C16.8325 21.75 20.75 17.8325 20.75 13H19.25ZM12 20.25C7.99594 20.25 4.75 17.0041 4.75 13H3.25C3.25 17.8325 7.16751 21.75 12 21.75V20.25ZM4.75 13C4.75 8.99594 7.99594 5.75 12 5.75V4.25C7.16751 4.25 3.25 8.16751 3.25 13H4.75ZM12 5.75C16.0041 5.75 19.25 8.99594 19.25 13H20.75C20.75 8.16751 16.8325 4.25 12 4.25V5.75ZM17.4697 3.53033L20.4697 6.53033L21.5303 5.46967L18.5303 2.46967L17.4697 3.53033ZM3.53033 6.53033L6.53033 3.53033L5.46967 2.46967L2.46967 5.46967L3.53033 6.53033Z" fill={props.fillColor} />
    </>
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9H12.75ZM12 13H11.25C11.25 13.1989 11.329 13.3897 11.4697 13.5303L12 13ZM13.4697 15.5303C13.7626 15.8232 14.2374 15.8232 14.5303 15.5303C14.8232 15.2374 14.8232 14.7626 14.5303 14.4697L13.4697 15.5303ZM18.5303 2.46967C18.2374 2.17678 17.7626 2.17678 17.4697 2.46967C17.1768 2.76256 17.1768 3.23744 17.4697 3.53033L18.5303 2.46967ZM20.4697 6.53033C20.7626 6.82322 21.2374 6.82322 21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L20.4697 6.53033ZM2.46967 5.46967C2.17678 5.76256 2.17678 6.23744 2.46967 6.53033C2.76256 6.82322 3.23744 6.82322 3.53033 6.53033L2.46967 5.46967ZM6.53033 3.53033C6.82322 3.23744 6.82322 2.76256 6.53033 2.46967C6.23744 2.17678 5.76256 2.17678 5.46967 2.46967L6.53033 3.53033ZM11.25 9V13H12.75V9H11.25ZM11.4697 13.5303L13.4697 15.5303L14.5303 14.4697L12.5303 12.4697L11.4697 13.5303ZM19.25 13C19.25 17.0041 16.0041 20.25 12 20.25V21.75C16.8325 21.75 20.75 17.8325 20.75 13H19.25ZM12 20.25C7.99594 20.25 4.75 17.0041 4.75 13H3.25C3.25 17.8325 7.16751 21.75 12 21.75V20.25ZM4.75 13C4.75 8.99594 7.99594 5.75 12 5.75V4.25C7.16751 4.25 3.25 8.16751 3.25 13H4.75ZM12 5.75C16.0041 5.75 19.25 8.99594 19.25 13H20.75C20.75 8.16751 16.8325 4.25 12 4.25V5.75ZM17.4697 3.53033L20.4697 6.53033L21.5303 5.46967L18.5303 2.46967L17.4697 3.53033ZM3.53033 6.53033L6.53033 3.53033L5.46967 2.46967L2.46967 5.46967L3.53033 6.53033Z" fill={props.fillColor} />
);

const Alarm: VFC<AlarmProps> = (props) => {
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

export default createIcon(Alarm);