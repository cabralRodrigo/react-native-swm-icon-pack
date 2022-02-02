import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { color: Color, strokeWidth: number, };
type CurvedProps = { color: Color, strokeWidth: number, };
type DuotoneProps = { color: Color, strokeWidth: number, };
type OutlineProps = { color: Color, strokeWidth: number, };

type HeadphonesProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M3 21H6C7.10457 21 8 20.1046 8 19V16C8 14.8954 7.10457 14 6 14" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M21 14H18C16.8954 14 16 14.8954 16 16V19C16 20.1046 16.8954 21 18 21" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M3 14V21V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21V14" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M3 21C5 21 8 20.862 8 18.5V15.5C8 13.0511 5 13 3 13" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M21 21C19 21 16 20.862 16 18.5V15.5C16 13.138 19 13 21 13" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M3 13V21V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21V13" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <G opacity="0.15">
            <Path d="M3 14H6C7.10457 14 8 14.8954 8 16V19C8 20.1046 7.10457 21 6 21H3V14Z" fill={props.color} />
            <Path d="M21 21H18C16.8954 21 16 20.1046 16 19V16C16 14.8954 16.8954 14 18 14H21V21Z" fill={props.color} />
        </G>
        <Path d="M3 21H6C7.10457 21 8 20.1046 8 19V16C8 14.8954 7.10457 14 6 14H3" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M21 21H18C16.8954 21 16 20.1046 16 19V16C16 14.8954 16.8954 14 18 14H21" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M3 14V21V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21V14" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M3 21H6C7.10457 21 8 20.1046 8 19V16C8 14.8954 7.10457 14 6 14H3" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M21 21H18C16.8954 21 16 20.1046 16 19V16C16 14.8954 16.8954 14 18 14H21" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M3 14V21V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V21V14" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Headphones: VFC<HeadphonesProps> = (props) => {
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

export default createIcon(Headphones);