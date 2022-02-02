import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type DuotoneProps = { fillColor: Color, };
type OutlineProps = { fillColor: Color, };

type ListLeftProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M7 7.25C6.58579 7.25 6.25 7.58579 6.25 8C6.25 8.41421 6.58579 8.75 7 8.75V7.25ZM17 8.75C17.4142 8.75 17.75 8.41421 17.75 8C17.75 7.58579 17.4142 7.25 17 7.25V8.75ZM7 11.25C6.58579 11.25 6.25 11.5858 6.25 12C6.25 12.4142 6.58579 12.75 7 12.75V11.25ZM17 12.75C17.4142 12.75 17.75 12.4142 17.75 12C17.75 11.5858 17.4142 11.25 17 11.25V12.75ZM11 15.25C10.5858 15.25 10.25 15.5858 10.25 16C10.25 16.4142 10.5858 16.75 11 16.75V15.25ZM17 16.75C17.4142 16.75 17.75 16.4142 17.75 16C17.75 15.5858 17.4142 15.25 17 15.25V16.75ZM4 4V3.25C3.58579 3.25 3.25 3.58579 3.25 4H4ZM20 4H20.75C20.75 3.58579 20.4142 3.25 20 3.25V4ZM20 20V20.75C20.4142 20.75 20.75 20.4142 20.75 20H20ZM4 20H3.25C3.25 20.4142 3.58579 20.75 4 20.75V20ZM4.75 12C4.75 11.5858 4.41421 11.25 4 11.25C3.58579 11.25 3.25 11.5858 3.25 12H4.75ZM3.25 7C3.25 7.41421 3.58579 7.75 4 7.75C4.41421 7.75 4.75 7.41421 4.75 7H3.25ZM7 8.75H17V7.25H7V8.75ZM7 12.75H17V11.25H7V12.75ZM11 16.75H17V15.25H11V16.75ZM4 4.75H20V3.25H4V4.75ZM19.25 4V20H20.75V4H19.25ZM20 19.25H4V20.75H20V19.25ZM4.75 20V12H3.25V20H4.75ZM4.75 7V4H3.25V7H4.75Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <>
        <Path opacity="0.15" d="M20 4H4V20H20V4Z" fill={props.fillColor} />
        <Path d="M4 4V3.25C3.58579 3.25 3.25 3.58579 3.25 4H4ZM20 4H20.75C20.75 3.58579 20.4142 3.25 20 3.25V4ZM20 20V20.75C20.4142 20.75 20.75 20.4142 20.75 20H20ZM4 20H3.25C3.25 20.4142 3.58579 20.75 4 20.75V20ZM7 7.25C6.58579 7.25 6.25 7.58579 6.25 8C6.25 8.41421 6.58579 8.75 7 8.75V7.25ZM17 8.75C17.4142 8.75 17.75 8.41421 17.75 8C17.75 7.58579 17.4142 7.25 17 7.25V8.75ZM7 11.25C6.58579 11.25 6.25 11.5858 6.25 12C6.25 12.4142 6.58579 12.75 7 12.75V11.25ZM17 12.75C17.4142 12.75 17.75 12.4142 17.75 12C17.75 11.5858 17.4142 11.25 17 11.25V12.75ZM11 15.25C10.5858 15.25 10.25 15.5858 10.25 16C10.25 16.4142 10.5858 16.75 11 16.75V15.25ZM17 16.75C17.4142 16.75 17.75 16.4142 17.75 16C17.75 15.5858 17.4142 15.25 17 15.25V16.75ZM4 4.75H20V3.25H4V4.75ZM19.25 4V20H20.75V4H19.25ZM20 19.25H4V20.75H20V19.25ZM4.75 20V4H3.25V20H4.75ZM7 8.75H17V7.25H7V8.75ZM7 12.75H17V11.25H7V12.75ZM11 16.75H17V15.25H11V16.75Z" fill={props.fillColor} />
    </>
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M4 4V3.25C3.58579 3.25 3.25 3.58579 3.25 4H4ZM20 4H20.75C20.75 3.58579 20.4142 3.25 20 3.25V4ZM20 20V20.75C20.4142 20.75 20.75 20.4142 20.75 20H20ZM4 20H3.25C3.25 20.4142 3.58579 20.75 4 20.75V20ZM7 7.25C6.58579 7.25 6.25 7.58579 6.25 8C6.25 8.41421 6.58579 8.75 7 8.75V7.25ZM17 8.75C17.4142 8.75 17.75 8.41421 17.75 8C17.75 7.58579 17.4142 7.25 17 7.25V8.75ZM7 11.25C6.58579 11.25 6.25 11.5858 6.25 12C6.25 12.4142 6.58579 12.75 7 12.75V11.25ZM17 12.75C17.4142 12.75 17.75 12.4142 17.75 12C17.75 11.5858 17.4142 11.25 17 11.25V12.75ZM11 15.25C10.5858 15.25 10.25 15.5858 10.25 16C10.25 16.4142 10.5858 16.75 11 16.75V15.25ZM17 16.75C17.4142 16.75 17.75 16.4142 17.75 16C17.75 15.5858 17.4142 15.25 17 15.25V16.75ZM4 4.75H20V3.25H4V4.75ZM19.25 4V20H20.75V4H19.25ZM20 19.25H4V20.75H20V19.25ZM4.75 20V4H3.25V20H4.75ZM7 8.75H17V7.25H7V8.75ZM7 12.75H17V11.25H7V12.75ZM11 16.75H17V15.25H11V16.75Z" fill={props.fillColor} />
);

const ListLeft: VFC<ListLeftProps> = (props) => {
    switch (props.variant) {
        case 'broken':
            return <Broken {...props} />;
        case 'duotone':
            return <Duotone {...props} />;
        case 'outline':
            return <Outline {...props} />;
    }
};

export default createIcon(ListLeft);