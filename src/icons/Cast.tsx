import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { color: Color, strokeWidth: number, };
type CurvedProps = { color: Color, strokeWidth: number, };
type DuotoneProps = { color: Color, strokeWidth: number, };
type OutlineProps = { color: Color, strokeWidth: number, };

type CastProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M3 8V5H21V8" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M14 19H21V12" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M7 19C7 16.7909 5.20914 15 3 15" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" />
        <Path d="M11 19C11 14.5817 7.41828 11 3 11" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" />
        <Path d="M3 18.99V19" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M3 8V5H21V19H14" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M7 19C7 16.7909 5.20914 15 3 15" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" />
        <Path d="M11 19C11 14.5817 7.41828 11 3 11" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" />
        <Path d="M3 18.99V19" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path d="M3 8V5H21V19H14" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M7 19C7 16.7909 5.20914 15 3 15" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" />
        <Path d="M11 19C11 14.5817 7.41828 11 3 11" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" />
        <Path d="M3 18.99V19" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M3 8V5H21V19H14" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M7 19C7 16.7909 5.20914 15 3 15" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" />
        <Path d="M11 19C11 14.5817 7.41828 11 3 11" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" />
        <Path d="M3 18.99V19" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Cast: VFC<CastProps> = (props) => {
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

export default createIcon(Cast);