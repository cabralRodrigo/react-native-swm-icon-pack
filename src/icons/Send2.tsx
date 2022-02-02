import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { strokeColor: Color, strokeWidth: number, };
type CurvedProps = { strokeColor: Color, strokeWidth: number, };
type DuotoneProps = { fillColor: Color, strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type Send2Props = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M12 7.29412L20 4L13 21L10 14L3 11L7 9.35294" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M20 4L10 14" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M10 14L12.2728 19.3032C12.5856 20.0331 13.5586 20.1103 13.9486 19.4185C14.7183 18.0535 15.8591 15.8522 17 13C19 8 20 4 20 4C20 4 16 5 11 7C8.14784 8.14086 5.94647 9.28173 4.58149 10.0514C3.88975 10.4414 3.96687 11.4144 4.69678 11.7272L10 14Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M10 14L20 4" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path opacity="0.15" d="M20 4L3 11L10 14L13 21L20 4Z" fill={props.fillColor} />
        <Path d="M20 4L3 11L10 14L13 21L20 4Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M20 4L10 14" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M20 4L3 11L10 14L13 21L20 4Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M20 4L10 14" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Send2: VFC<Send2Props> = (props) => {
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

export default createIcon(Send2);