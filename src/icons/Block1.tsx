import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { color: Color, strokeWidth: number, };
type CurvedProps = { color: Color, strokeWidth: number, };
type DuotoneProps = { color: Color, strokeWidth: number, };
type OutlineProps = { color: Color, strokeWidth: number, };

type Block1Props = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M20.5 9.03451C19.2743 5.52092 15.9315 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C15.5337 21 18.5918 18.9634 20.0645 16" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" />
        <Path d="M12.0001 12L18.364 18.364" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" />
        <Path d="M5.63599 5.63605L10 10" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" />
        <Path d="M5.63605 18.364L18.364 5.63603" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M5.63605 18.364L18.364 5.63603" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M5.63605 5.63603L18.364 18.364" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path opacity="0.15" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" fill={props.color} />
        <Path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke={props.color} strokeWidth={props.strokeWidth} />
        <Path d="M5.63605 5.63603L18.364 18.364" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" />
        <Path d="M5.63605 18.364L18.364 5.63603" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke={props.color} strokeWidth={props.strokeWidth} />
        <Path d="M5.63605 5.63605L18.364 18.364" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" />
        <Path d="M5.63605 18.364L18.364 5.63605" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" />
    </G>
);

const Block1: VFC<Block1Props> = (props) => {
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

export default createIcon(Block1);