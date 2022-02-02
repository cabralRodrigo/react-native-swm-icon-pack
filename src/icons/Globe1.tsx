import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { strokeColor: Color, strokeWidth: number, };
type CurvedProps = { strokeColor: Color, strokeWidth: number, };
type DuotoneProps = { fillColor: Color, strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type Globe1Props = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C9.3345 3 6.93964 4.15875 5.29168 6" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M16 12C16 18 12 21 12 21C12 21 8 18 8 12C8 6 12 3 12 3C12 3 14.2222 4.66667 15.354 8" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M21 12H3" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} />
        <Path d="M16 12C16 6 12 3 12 3C12 3 8 6 8 12C8 18 12 21 12 21C12 21 16 18 16 12Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linejoin="round" />
        <Path d="M21 12H3" stroke={props.strokeColor} stroke-width={props.strokeWidth} />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path opacity="0.15" d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" fill={props.fillColor} />
        <Path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} />
        <Path d="M16 12C16 6 12 3 12 3C12 3 8 6 8 12C8 18 12 21 12 21C12 21 16 18 16 12Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linejoin="round" />
        <Path d="M21 12H3" stroke={props.strokeColor} stroke-width={props.strokeWidth} />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} />
        <Path d="M16 12C16 6 12 3 12 3C12 3 8 6 8 12C8 18 12 21 12 21C12 21 16 18 16 12Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linejoin="round" />
        <Path d="M21 12H3" stroke={props.strokeColor} stroke-width={props.strokeWidth} />
    </G>
);

const Globe1: VFC<Globe1Props> = (props) => {
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

export default createIcon(Globe1);