import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { strokeColor: Color, strokeWidth: number, };
type CurvedProps = { strokeColor: Color, strokeWidth: number, };
type DuotoneProps = { fillColor: Color, strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type Speaker1Props = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M16 8.99998C16.5 9.49998 17 10.5 17 12C17 13.5 16.5 14.5 16 15" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M7 16H5C3.89543 16 3 15.1046 3 14V10C3 8.89543 3.89543 8 5 8H7L13 3V21L10 18.5" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M16 8.99998C16.5 9.49998 17 10.5 17 12C17 13.5 16.5 14.5 16 15" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M3 13.5V10.5C3 9.39543 3.5 8.5 5.5 8C7.5 7.5 9 3 12 3C14 3 14 21 12 21C9 21 7.5 16.5 5.5 16C3.5 15.5 3 14.6046 3 13.5Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path opacity="0.15" d="M13 3L7 8H5C3.89543 8 3 8.89543 3 10V14C3 15.1046 3.89543 16 5 16H7L13 21V3Z" fill={props.fillColor} />
        <Path d="M7 8L13 3V21L7 16H5C3.89543 16 3 15.1046 3 14V10C3 8.89543 3.89543 8 5 8H7Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M16 8.99998C16.5 9.49998 17 10.5 17 12C17 13.5 16.5 14.5 16 15" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M7 8L13 3V21L7 16H5C3.89543 16 3 15.1046 3 14V10C3 8.89543 3.89543 8 5 8H7Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M16 9C16.5 9.5 17 10.5 17 12C17 13.5 16.5 14.5 16 15" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Speaker1: VFC<Speaker1Props> = (props) => {
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

export default createIcon(Speaker1);