import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { strokeColor: Color, strokeWidth: number, };
type CurvedProps = { strokeColor: Color, strokeWidth: number, };
type DuotoneProps = { fillColor: Color, strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type Filters1Props = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M19 7V4" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M19 14V20" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M12 16V10" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M12 7V4" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M5 11V20" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M5 8C6.10457 8 7 7.10457 7 6C7 4.89543 6.10457 4 5 4C3.89543 4 3 4.89543 3 6C3 7.10457 3.89543 8 5 8Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18C10 19.1046 10.8954 20 12 20Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M19 10V4" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M19 14V20" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M12 16V4" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M5 8V20" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M5 8C6.10457 8 7 7.10457 7 6C7 4.89543 6.10457 4 5 4C3.89543 4 3 4.89543 3 6C3 7.10457 3.89543 8 5 8Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18C10 19.1046 10.8954 20 12 20Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <G opacity="0.15">
            <Path d="M21 12C21 13.1046 20.1046 14 19 14C17.8954 14 17 13.1046 17 12C17 10.8954 17.8954 10 19 10C20.1046 10 21 10.8954 21 12Z" fill={props.fillColor} />
            <Path d="M14 18C14 19.1046 13.1046 20 12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18Z" fill={props.fillColor} />
            <Path d="M7 6C7 7.10457 6.10457 8 5 8C3.89543 8 3 7.10457 3 6C3 4.89543 3.89543 4 5 4C6.10457 4 7 4.89543 7 6Z" fill={props.fillColor} />
        </G>
        <Path d="M19 10V4" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M19 14V20" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M12 16V4" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M5 8V20" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M5 8C6.10457 8 7 7.10457 7 6C7 4.89543 6.10457 4 5 4C3.89543 4 3 4.89543 3 6C3 7.10457 3.89543 8 5 8Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18C10 19.1046 10.8954 20 12 20Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M19 10V4" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M19 14V20" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M12 16V4" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M5 8V20" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M5 8C6.10457 8 7 7.10457 7 6C7 4.89543 6.10457 4 5 4C3.89543 4 3 4.89543 3 6C3 7.10457 3.89543 8 5 8Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M12 20C13.1046 20 14 19.1046 14 18C14 16.8954 13.1046 16 12 16C10.8954 16 10 16.8954 10 18C10 19.1046 10.8954 20 12 20Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M19 14C20.1046 14 21 13.1046 21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
    </G>
);

const Filters1: VFC<Filters1Props> = (props) => {
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

export default createIcon(Filters1);