import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type DuotoneProps = { fillColor: Color, };
type OutlineProps = { fillColor: Color, };

type PackageProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M10 12.25C9.58579 12.25 9.25 12.5858 9.25 13C9.25 13.4142 9.58579 13.75 10 13.75V12.25ZM14 13.75C14.4142 13.75 14.75 13.4142 14.75 13C14.75 12.5858 14.4142 12.25 14 12.25V13.75ZM19.75 13C19.75 12.5858 19.4142 12.25 19 12.25C18.5858 12.25 18.25 12.5858 18.25 13H19.75ZM19 20V20.75C19.4142 20.75 19.75 20.4142 19.75 20H19ZM5 20H4.25C4.25 20.4142 4.58579 20.75 5 20.75V20ZM7 4.75C7.41421 4.75 7.75 4.41421 7.75 4C7.75 3.58579 7.41421 3.25 7 3.25V4.75ZM12 3.25C11.5858 3.25 11.25 3.58579 11.25 4C11.25 4.41421 11.5858 4.75 12 4.75V3.25ZM10 13.75H14V12.25H10V13.75ZM18.25 13V20H19.75V13H18.25ZM19 19.25H5V20.75H19V19.25ZM5.75 20V9H4.25V20H5.75ZM19.25 5V8H20.75V5H19.25ZM19 8.25H5V9.75H19V8.25ZM4.75 8V5H3.25V8H4.75ZM5 8.25C4.86193 8.25 4.75 8.13807 4.75 8H3.25C3.25 8.9665 4.0335 9.75 5 9.75V8.25ZM19.25 8C19.25 8.13807 19.1381 8.25 19 8.25V9.75C19.9665 9.75 20.75 8.9665 20.75 8H19.25ZM19 4.75C19.1381 4.75 19.25 4.86193 19.25 5H20.75C20.75 4.0335 19.9665 3.25 19 3.25V4.75ZM5 3.25C4.0335 3.25 3.25 4.0335 3.25 5H4.75C4.75 4.86193 4.86193 4.75 5 4.75V3.25ZM5 4.75H7V3.25H5V4.75ZM12 4.75H19V3.25H12V4.75Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <>
        <Path opacity="0.15" d="M19 20V9H5V20H19Z" fill={props.fillColor} />
        <Path d="M10 12.25C9.58579 12.25 9.25 12.5858 9.25 13C9.25 13.4142 9.58579 13.75 10 13.75V12.25ZM14 13.75C14.4142 13.75 14.75 13.4142 14.75 13C14.75 12.5858 14.4142 12.25 14 12.25V13.75ZM19 20V20.75C19.4142 20.75 19.75 20.4142 19.75 20H19ZM5 20H4.25C4.25 20.4142 4.58579 20.75 5 20.75V20ZM10 13.75H14V12.25H10V13.75ZM18.25 9V20H19.75V9H18.25ZM19 19.25H5V20.75H19V19.25ZM5.75 20V9H4.25V20H5.75ZM5 4.75H19V3.25H5V4.75ZM19.25 5V8H20.75V5H19.25ZM19 8.25H5V9.75H19V8.25ZM4.75 8V5H3.25V8H4.75ZM5 8.25C4.86193 8.25 4.75 8.13807 4.75 8H3.25C3.25 8.9665 4.0335 9.75 5 9.75V8.25ZM19.25 8C19.25 8.13807 19.1381 8.25 19 8.25V9.75C19.9665 9.75 20.75 8.9665 20.75 8H19.25ZM19 4.75C19.1381 4.75 19.25 4.86193 19.25 5H20.75C20.75 4.0335 19.9665 3.25 19 3.25V4.75ZM5 3.25C4.0335 3.25 3.25 4.0335 3.25 5H4.75C4.75 4.86193 4.86193 4.75 5 4.75V3.25Z" fill={props.fillColor} />
    </>
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M10 12.25C9.58579 12.25 9.25 12.5858 9.25 13C9.25 13.4142 9.58579 13.75 10 13.75V12.25ZM14 13.75C14.4142 13.75 14.75 13.4142 14.75 13C14.75 12.5858 14.4142 12.25 14 12.25V13.75ZM19 20V20.75C19.4142 20.75 19.75 20.4142 19.75 20H19ZM5 20H4.25C4.25 20.4142 4.58579 20.75 5 20.75V20ZM10 13.75H14V12.25H10V13.75ZM18.25 9V20H19.75V9H18.25ZM19 19.25H5V20.75H19V19.25ZM5.75 20V9H4.25V20H5.75ZM5 4.75H19V3.25H5V4.75ZM19.25 5V8H20.75V5H19.25ZM19 8.25H5V9.75H19V8.25ZM4.75 8V5H3.25V8H4.75ZM5 8.25C4.86193 8.25 4.75 8.13807 4.75 8H3.25C3.25 8.9665 4.0335 9.75 5 9.75V8.25ZM19.25 8C19.25 8.13807 19.1381 8.25 19 8.25V9.75C19.9665 9.75 20.75 8.9665 20.75 8H19.25ZM19 4.75C19.1381 4.75 19.25 4.86193 19.25 5H20.75C20.75 4.0335 19.9665 3.25 19 3.25V4.75ZM5 3.25C4.0335 3.25 3.25 4.0335 3.25 5H4.75C4.75 4.86193 4.86193 4.75 5 4.75V3.25Z" fill={props.fillColor} />
);

const Package: VFC<PackageProps> = (props) => {
    switch (props.variant) {
        case 'broken':
            return <Broken {...props} />;
        case 'duotone':
            return <Duotone {...props} />;
        case 'outline':
            return <Outline {...props} />;
    }
};

export default createIcon(Package);