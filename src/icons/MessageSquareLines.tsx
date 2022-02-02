import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type DuotoneProps = { fillColor: Color, strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type MessageSquareLinesProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M8 7.25C7.58579 7.25 7.25 7.58579 7.25 8C7.25 8.41421 7.58579 8.75 8 8.75V7.25ZM16 8.75C16.4142 8.75 16.75 8.41421 16.75 8C16.75 7.58579 16.4142 7.25 16 7.25V8.75ZM8 11.25C7.58579 11.25 7.25 11.5858 7.25 12C7.25 12.4142 7.58579 12.75 8 12.75V11.25ZM13 12.75C13.4142 12.75 13.75 12.4142 13.75 12C13.75 11.5858 13.4142 11.25 13 11.25V12.75ZM7.75 18.5C7.75 18.0858 7.41421 17.75 7 17.75C6.58579 17.75 6.25 18.0858 6.25 18.5H7.75ZM7 21H6.25C6.25 21.3033 6.43273 21.5768 6.71299 21.6929C6.99324 21.809 7.31583 21.7448 7.53033 21.5303L7 21ZM12 16V15.25C11.8011 15.25 11.6103 15.329 11.4697 15.4697L12 16ZM4 4V3.25C3.58579 3.25 3.25 3.58579 3.25 4H4ZM20 4H20.75C20.75 3.58579 20.4142 3.25 20 3.25V4ZM4 16H3.25C3.25 16.4142 3.58579 16.75 4 16.75V16ZM7 16.75C7.41421 16.75 7.75 16.4142 7.75 16C7.75 15.5858 7.41421 15.25 7 15.25V16.75ZM20 16V16.75C20.4142 16.75 20.75 16.4142 20.75 16H20ZM20.75 10C20.75 9.58579 20.4142 9.25 20 9.25C19.5858 9.25 19.25 9.58579 19.25 10H20.75ZM19.25 6C19.25 6.41421 19.5858 6.75 20 6.75C20.4142 6.75 20.75 6.41421 20.75 6H19.25ZM8 8.75H16V7.25H8V8.75ZM8 12.75H13V11.25H8V12.75ZM6.25 18.5V21H7.75V18.5H6.25ZM7.53033 21.5303L12.5303 16.5303L11.4697 15.4697L6.46967 20.4697L7.53033 21.5303ZM4 4.75H20V3.25H4V4.75ZM4.75 16V4H3.25V16H4.75ZM7 15.25H4V16.75H7V15.25ZM20 15.25H12V16.75H20V15.25ZM19.25 10V16H20.75V10H19.25ZM19.25 4V6H20.75V4H19.25Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <>
        <Path opacity="0.15" d="M20 4H4V16H7V21L12 16H20V4Z" fill={props.fillColor} />
        <Path d="M8 8H16M8 12H13M7 16V21L12 16H20V4H4V16H7Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </>
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M8 8H16M8 12H13M7 16V21L12 16H20V4H4V16H7Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const MessageSquareLines: VFC<MessageSquareLinesProps> = (props) => {
    switch (props.variant) {
        case 'broken':
            return <Broken {...props} />;
        case 'duotone':
            return <Duotone {...props} />;
        case 'outline':
            return <Outline {...props} />;
    }
};

export default createIcon(MessageSquareLines);