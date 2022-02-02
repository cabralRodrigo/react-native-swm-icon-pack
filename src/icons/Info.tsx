import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type CurvedProps = { fillColor: Color, };
type DuotoneProps = { fillColor: Color, };
type OutlineProps = { fillColor: Color, };

type InfoProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M11.25 5.00999C11.25 5.42421 11.5858 5.75999 12 5.75999C12.4142 5.75999 12.75 5.42421 12.75 5.00999L11.25 5.00999ZM12.75 5C12.75 4.58579 12.4142 4.25 12 4.25C11.5858 4.25 11.25 4.58579 11.25 5L12.75 5ZM11.25 19C11.25 19.4142 11.5858 19.75 12 19.75C12.4142 19.75 12.75 19.4142 12.75 19H11.25ZM12.75 7.99998C12.75 7.58577 12.4142 7.24998 12 7.24998C11.5858 7.24998 11.25 7.58577 11.25 7.99998H12.75ZM12.75 5.00999V5L11.25 5V5.00999L12.75 5.00999ZM12.75 19L12.75 7.99998H11.25L11.25 19H12.75Z" fill={props.fillColor} />
);

const Curved: VFC<CurvedProps> = (props) => (
    <Path d="M11.25 5.00999C11.25 5.42421 11.5858 5.75999 12 5.75999C12.4142 5.75999 12.75 5.42421 12.75 5.00999L11.25 5.00999ZM12.75 5C12.75 4.58579 12.4142 4.25 12 4.25C11.5858 4.25 11.25 4.58579 11.25 5L12.75 5ZM11.25 19C11.25 19.4142 11.5858 19.75 12 19.75C12.4142 19.75 12.75 19.4142 12.75 19H11.25ZM12.75 7.99998C12.75 7.58577 12.4142 7.24998 12 7.24998C11.5858 7.24998 11.25 7.58577 11.25 7.99998H12.75ZM12.75 5.00999V5L11.25 5V5.00999L12.75 5.00999ZM12.75 19L12.75 7.99998H11.25L11.25 19H12.75Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <Path d="M11.25 5.00999C11.25 5.42421 11.5858 5.75999 12 5.75999C12.4142 5.75999 12.75 5.42421 12.75 5.00999L11.25 5.00999ZM12.75 5C12.75 4.58579 12.4142 4.25 12 4.25C11.5858 4.25 11.25 4.58579 11.25 5L12.75 5ZM11.25 19C11.25 19.4142 11.5858 19.75 12 19.75C12.4142 19.75 12.75 19.4142 12.75 19H11.25ZM12.75 7.99998C12.75 7.58577 12.4142 7.24998 12 7.24998C11.5858 7.24998 11.25 7.58577 11.25 7.99998H12.75ZM12.75 5.00999V5L11.25 5V5.00999L12.75 5.00999ZM12.75 19L12.75 7.99998H11.25L11.25 19H12.75Z" fill={props.fillColor} />
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M11.25 5.00999C11.25 5.42421 11.5858 5.75999 12 5.75999C12.4142 5.75999 12.75 5.42421 12.75 5.00999L11.25 5.00999ZM12.75 5C12.75 4.58579 12.4142 4.25 12 4.25C11.5858 4.25 11.25 4.58579 11.25 5L12.75 5ZM11.25 19C11.25 19.4142 11.5858 19.75 12 19.75C12.4142 19.75 12.75 19.4142 12.75 19H11.25ZM12.75 8C12.75 7.58579 12.4142 7.25 12 7.25C11.5858 7.25 11.25 7.58579 11.25 8H12.75ZM12.75 5.00999V5L11.25 5V5.00999L12.75 5.00999ZM12.75 19L12.75 8H11.25L11.25 19H12.75Z" fill={props.fillColor} />
);

const Info: VFC<InfoProps> = (props) => {
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

export default createIcon(Info);