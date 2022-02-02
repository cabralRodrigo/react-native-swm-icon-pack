import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type DuotoneProps = { strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type LogoutProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M18 20V20.75V20ZM15 19.25C14.5858 19.25 14.25 19.5858 14.25 20C14.25 20.4142 14.5858 20.75 15 20.75V19.25ZM20.75 18C20.75 17.5858 20.4142 17.25 20 17.25C19.5858 17.25 19.25 17.5858 19.25 18H20.75ZM15 3.25C14.5858 3.25 14.25 3.58579 14.25 4C14.25 4.41421 14.5858 4.75 15 4.75V3.25ZM18 4V4.75V4ZM20 6H20.75H20ZM19.25 14C19.25 14.4142 19.5858 14.75 20 14.75C20.4142 14.75 20.75 14.4142 20.75 14H19.25ZM7.53033 8.53033C7.82322 8.23744 7.82322 7.76256 7.53033 7.46967C7.23744 7.17678 6.76256 7.17678 6.46967 7.46967L7.53033 8.53033ZM3 12L2.46967 11.4697C2.25517 11.6842 2.191 12.0068 2.30709 12.287C2.42318 12.5673 2.69665 12.75 3 12.75L3 12ZM6.46967 16.5303C6.76257 16.8232 7.23744 16.8232 7.53033 16.5303C7.82323 16.2374 7.82322 15.7626 7.53033 15.4697L6.46967 16.5303ZM6.53033 14.4697C6.23744 14.1768 5.76256 14.1768 5.46967 14.4697C5.17678 14.7626 5.17678 15.2374 5.46967 15.5303L6.53033 14.4697ZM15 12.75C15.4142 12.75 15.75 12.4142 15.75 12C15.75 11.5858 15.4142 11.25 15 11.25V12.75ZM18 19.25H15V20.75H18V19.25ZM19.25 18C19.25 18.6904 18.6904 19.25 18 19.25V20.75C19.5188 20.75 20.75 19.5188 20.75 18H19.25ZM15 4.75H18V3.25H15V4.75ZM18 4.75C18.6904 4.75 19.25 5.30964 19.25 6H20.75C20.75 4.48122 19.5188 3.25 18 3.25V4.75ZM19.25 6V14H20.75V6H19.25ZM6.46967 7.46967L2.46967 11.4697L3.53033 12.5303L7.53033 8.53033L6.46967 7.46967ZM7.53033 15.4697L6.53033 14.4697L5.46967 15.5303L6.46967 16.5303L7.53033 15.4697ZM3 12.75H15V11.25L3 11.25L3 12.75Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <Path d="M15 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H15M8 8L4 12M4 12L8 16M4 12L16 12" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M15 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H15M8 8L4 12M4 12L8 16M4 12L16 12" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Logout: VFC<LogoutProps> = (props) => {
    switch (props.variant) {
        case 'broken':
            return <Broken {...props} />;
        case 'duotone':
            return <Duotone {...props} />;
        case 'outline':
            return <Outline {...props} />;
    }
};

export default createIcon(Logout);