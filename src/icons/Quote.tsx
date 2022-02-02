import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { color: Color, strokeWidth: number, };
type CurvedProps = { color: Color, strokeWidth: number, };
type DuotoneProps = { color: Color, strokeWidth: number, };
type OutlineProps = { color: Color, strokeWidth: number, };

type QuoteProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M13 10.5C13 12.433 14.567 14 16.5 14L20 17.5V10.5C20 8.567 18.433 7 16.5 7C14.567 7 13 8.567 13 10.5Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinejoin="round" />
        <Path d="M3 10.5C3 12.433 4.567 14 6.5 14L10 17.5V10.5C10 8.567 8.433 7 6.5 7C4.567 7 3 8.567 3 10.5Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M3 10.5C3 12.433 4.567 14 6.5 14L10 17.5V10.5C10 8.567 8.433 7 6.5 7C4.567 7 3 8.567 3 10.5Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M13 10.5C13 12.433 14.567 14 16.5 14L20 17.5V10.5C20 8.567 18.433 7 16.5 7C14.567 7 13 8.567 13 10.5Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path opacity="0.15" d="M13 10.5C13 12.433 14.567 14 16.5 14L20 17.5V10.5C20 8.567 18.433 7 16.5 7C14.567 7 13 8.567 13 10.5Z" fill={props.color} />
        <Path d="M13 10.5C13 12.433 14.567 14 16.5 14L20 17.5V10.5C20 8.567 18.433 7 16.5 7C14.567 7 13 8.567 13 10.5Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinejoin="round" />
        <Path d="M3 10.5C3 12.433 4.567 14 6.5 14L10 17.5V10.5C10 8.567 8.433 7 6.5 7C4.567 7 3 8.567 3 10.5Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M13 10.5C13 12.433 14.567 14 16.5 14L20 17.5V10.5C20 8.567 18.433 7 16.5 7C14.567 7 13 8.567 13 10.5Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinejoin="round" />
        <Path d="M3 10.5C3 12.433 4.567 14 6.5 14L10 17.5V10.5C10 8.567 8.433 7 6.5 7C4.567 7 3 8.567 3 10.5Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinejoin="round" />
    </G>
);

const Quote: VFC<QuoteProps> = (props) => {
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

export default createIcon(Quote);