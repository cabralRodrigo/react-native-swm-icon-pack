import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { strokeColor: Color, strokeWidth: number, };
type CurvedProps = { strokeColor: Color, strokeWidth: number, };
type DuotoneProps = { fillColor: Color, strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type Grid4Props = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M3.5 3.5H10.5V10.5H3.5V3.5Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M5 13.5H3.5V20.5H10.5V13.5H9" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M13.5 5V3.5H20.5V10.5H13.5V9" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M13.5 13.5H20.5V20.5H13.5V13.5Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M6.75 3C3.88235 3 3 3.88235 3 6.75C3 9.61765 3.88235 10.5 6.75 10.5C9.61765 10.5 10.5 9.61765 10.5 6.75C10.5 3.88235 9.61765 3 6.75 3Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M6.75 13.5C3.88235 13.5 3 14.3824 3 17.25C3 20.1176 3.88235 21 6.75 21C9.61765 21 10.5 20.1176 10.5 17.25C10.5 14.3824 9.61765 13.5 6.75 13.5Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M17.25 13.5C14.3824 13.5 13.5 14.3824 13.5 17.25C13.5 20.1176 14.3824 21 17.25 21C20.1176 21 21 20.1176 21 17.25C21 14.3824 20.1176 13.5 17.25 13.5Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M17.25 3C14.3824 3 13.5 3.88235 13.5 6.75C13.5 9.61765 14.3824 10.5 17.25 10.5C20.1176 10.5 21 9.61765 21 6.75C21 3.88235 20.1176 3 17.25 3Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <G opacity="0.15">
            <Path d="M3.5 13.5H10.5V20.5H3.5V13.5Z" fill={props.fillColor} />
            <Path d="M13.5 3.5H20.5V10.5H13.5V3.5Z" fill={props.fillColor} />
            <Path d="M13.5 13.5H20.5V20.5H13.5V13.5Z" fill={props.fillColor} />
        </G>
        <Path d="M3.5 3.5H10.5V10.5H3.5V3.5Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M3.5 13.5H10.5V20.5H3.5V13.5Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M13.5 3.5H20.5V10.5H13.5V3.5Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M13.5 13.5H20.5V20.5H13.5V13.5Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M3.5 3.5H10.5V10.5H3.5V3.5Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M3.5 13.5H10.5V20.5H3.5V13.5Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M13.5 3.5H20.5V10.5H13.5V3.5Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M13.5 13.5H20.5V20.5H13.5V13.5Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Grid4: VFC<Grid4Props> = (props) => {
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

export default createIcon(Grid4);