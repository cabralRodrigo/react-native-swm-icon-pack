import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { color: Color, strokeWidth: number, };
type CurvedProps = { color: Color, strokeWidth: number, };
type DuotoneProps = { color: Color, strokeWidth: number, };
type OutlineProps = { color: Color, strokeWidth: number, };

type Flag1Props = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M4 21.1111V16.1111" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M4 12V4.125" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M4 4.11111C4 4.11111 7 1.61111 12 4.11111C17 6.61111 20 4.11111 20 4.11111V16.1111C20 16.1111 17 18.6111 12 16.1111C7 13.6111 4 16.1111 4 16.1111" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M4 16C4 16 5 15 8 15C11 15 13 17 16 17C19 17 20 16 20 16V4C20 4 19 5 16 5C13 5 11 3 8 3C5 3 4 4 4 4" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M4 4V21" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path opacity="0.15" d="M8 15C5 15 4 16 4 16V4C4 4 5 3 8 3C11 3 13 5 16 5C19 5 20 4 20 4V16C20 16 19 17 16 17C13 17 11 15 8 15Z" fill={props.color} />
        <Path d="M4 21.1111V16.1111V4.11111" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M4 4.11111C4 4.11111 7 1.61111 12 4.11111C17 6.61111 20 4.11111 20 4.11111V16.1111C20 16.1111 17 18.6111 12 16.1111C7 13.6111 4 16.1111 4 16.1111" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M4 21.1111V16.1111V4.11108" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M4 4.11111C4 4.11111 7 1.61111 12 4.11111C17 6.61111 20 4.11111 20 4.11111V16.1111C20 16.1111 17 18.6111 12 16.1111C7 13.6111 4 16.1111 4 16.1111" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Flag1: VFC<Flag1Props> = (props) => {
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

export default createIcon(Flag1);