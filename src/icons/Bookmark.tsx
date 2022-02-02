import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type DuotoneProps = { fillColor: Color, strokeColor: Color, strokeWidth: number, };
type OutlineProps = { fillColor: Color, };

type BookmarkProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M18 21L17.4697 21.5303C17.6842 21.7448 18.0068 21.809 18.287 21.6929C18.5673 21.5768 18.75 21.3033 18.75 21H18ZM12 15L12.5303 14.4697C12.2374 14.1768 11.7626 14.1768 11.4697 14.4697L12 15ZM6 21H5.25C5.25 21.3033 5.43273 21.5768 5.71299 21.6929C5.99324 21.809 6.31583 21.7448 6.53033 21.5303L6 21ZM18.75 13C18.75 12.5858 18.4142 12.25 18 12.25C17.5858 12.25 17.25 12.5858 17.25 13H18.75ZM6.75 17C6.75 16.5858 6.41421 16.25 6 16.25C5.58579 16.25 5.25 16.5858 5.25 17H6.75ZM17.25 8C17.25 8.41421 17.5858 8.75 18 8.75C18.4142 8.75 18.75 8.41421 18.75 8H17.25ZM5.25 13C5.25 13.4142 5.58579 13.75 6 13.75C6.41421 13.75 6.75 13.4142 6.75 13H5.25ZM18.5303 20.4697L12.5303 14.4697L11.4697 15.5303L17.4697 21.5303L18.5303 20.4697ZM11.4697 14.4697L5.46967 20.4697L6.53033 21.5303L12.5303 15.5303L11.4697 14.4697ZM17.25 13V21H18.75V13H17.25ZM6.75 21V17H5.25V21H6.75ZM8 4.75H16V3.25H8V4.75ZM16 4.75C16.6904 4.75 17.25 5.30964 17.25 6H18.75C18.75 4.48122 17.5188 3.25 16 3.25V4.75ZM8 3.25C6.48122 3.25 5.25 4.48122 5.25 6H6.75C6.75 5.30964 7.30964 4.75 8 4.75V3.25ZM17.25 6V8H18.75V6H17.25ZM6.75 13V6H5.25V13H6.75Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <>
        <Path opacity="0.15" d="M6 6C6 4.89543 6.89543 4 8 4H16C17.1046 4 18 4.89543 18 6V21L12 15L6 21V6Z" fill={props.fillColor} />
        <Path d="M6 6C6 4.89543 6.89543 4 8 4H16C17.1046 4 18 4.89543 18 6V21L12 15L6 21V6Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </>
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M18 21L17.4697 21.5303C17.6842 21.7448 18.0068 21.809 18.287 21.6929C18.5673 21.5768 18.75 21.3033 18.75 21H18ZM6 21H5.25C5.25 21.3033 5.43273 21.5768 5.71299 21.6929C5.99324 21.809 6.31583 21.7448 6.53033 21.5303L6 21ZM12 15L12.5303 14.4697C12.2374 14.1768 11.7626 14.1768 11.4697 14.4697L12 15ZM8 4.75H16V3.25H8V4.75ZM17.25 6V21H18.75V6H17.25ZM6.75 21V6H5.25V21H6.75ZM18.5303 20.4697L12.5303 14.4697L11.4697 15.5303L17.4697 21.5303L18.5303 20.4697ZM11.4697 14.4697L5.46967 20.4697L6.53033 21.5303L12.5303 15.5303L11.4697 14.4697ZM16 4.75C16.6904 4.75 17.25 5.30964 17.25 6H18.75C18.75 4.48122 17.5188 3.25 16 3.25V4.75ZM8 3.25C6.48122 3.25 5.25 4.48122 5.25 6H6.75C6.75 5.30964 7.30964 4.75 8 4.75V3.25Z" fill={props.fillColor} />
);

const Bookmark: VFC<BookmarkProps> = (props) => {
    switch (props.variant) {
        case 'broken':
            return <Broken {...props} />;
        case 'duotone':
            return <Duotone {...props} />;
        case 'outline':
            return <Outline {...props} />;
    }
};

export default createIcon(Bookmark);