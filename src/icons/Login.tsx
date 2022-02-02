import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type DuotoneProps = { strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type LoginProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M18 20V20.75V20ZM15 19.25C14.5858 19.25 14.25 19.5858 14.25 20C14.25 20.4142 14.5858 20.75 15 20.75V19.25ZM20.75 18C20.75 17.5858 20.4142 17.25 20 17.25C19.5858 17.25 19.25 17.5858 19.25 18H20.75ZM15 3.25C14.5858 3.25 14.25 3.58579 14.25 4C14.25 4.41421 14.5858 4.75 15 4.75V3.25ZM18 4V4.75V4ZM20 6H20.75H20ZM19.25 14C19.25 14.4142 19.5858 14.75 20 14.75C20.4142 14.75 20.75 14.4142 20.75 14H19.25ZM10.4697 15.4697C10.1768 15.7626 10.1768 16.2374 10.4697 16.5303C10.7626 16.8232 11.2374 16.8232 11.5303 16.5303L10.4697 15.4697ZM15 12L15.5303 12.5303C15.7448 12.3158 15.809 11.9932 15.6929 11.713C15.5768 11.4327 15.3033 11.25 15 11.25V12ZM11.5303 7.46967C11.2374 7.17678 10.7626 7.17678 10.4697 7.46967C10.1768 7.76256 10.1768 8.23744 10.4697 8.53033L11.5303 7.46967ZM11.4697 9.53033C11.7626 9.82322 12.2374 9.82322 12.5303 9.53033C12.8232 9.23744 12.8232 8.76256 12.5303 8.46967L11.4697 9.53033ZM3 11.25C2.58579 11.25 2.25 11.5858 2.25 12C2.25 12.4142 2.58579 12.75 3 12.75V11.25ZM18 19.25H15V20.75H18V19.25ZM19.25 18C19.25 18.6904 18.6904 19.25 18 19.25V20.75C19.5188 20.75 20.75 19.5188 20.75 18H19.25ZM15 4.75H18V3.25H15V4.75ZM18 4.75C18.6904 4.75 19.25 5.30964 19.25 6H20.75C20.75 4.48122 19.5188 3.25 18 3.25V4.75ZM19.25 6V14H20.75V6H19.25ZM11.5303 16.5303L15.5303 12.5303L14.4697 11.4697L10.4697 15.4697L11.5303 16.5303ZM10.4697 8.53033L11.4697 9.53033L12.5303 8.46967L11.5303 7.46967L10.4697 8.53033ZM15 11.25H3V12.75H15V11.25Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <Path d="M15 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H15M11 16L15 12M15 12L11 8M15 12H3" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M15 4H18C19.1046 4 20 4.89543 20 6L20 18C20 19.1046 19.1046 20 18 20H15M11 16L15 12M15 12L11 8M15 12H3" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Login: VFC<LoginProps> = (props) => {
    switch (props.variant) {
        case 'broken':
            return <Broken {...props} />;
        case 'duotone':
            return <Duotone {...props} />;
        case 'outline':
            return <Outline {...props} />;
    }
};

export default createIcon(Login);