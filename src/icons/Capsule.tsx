import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { color: Color, strokeWidth: number, };
type CurvedProps = { color: Color, strokeWidth: number, };
type DuotoneProps = { color: Color, strokeWidth: number, };
type OutlineProps = { color: Color, strokeWidth: number, };

type CapsuleProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M8.42892 8.57104L12.8579 13" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M11.9645 5.03551C13.9171 3.08289 17.0829 3.08289 19.0356 5.03551C20.9882 6.98813 20.9882 10.154 19.0356 12.1066L15.5 15.6421L11.9645 19.1776C10.0119 21.1303 6.84604 21.1303 4.89342 19.1776C2.9408 17.225 2.9408 14.0592 4.89342 12.1066L8.42896 8.57104L9.5 7.5" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M8.42896 8.57104L15.5 15.6421" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M8.42896 8.57104L4.89342 12.1066C2.9408 14.0592 2.9408 17.225 4.89342 19.1776C6.84604 21.1303 10.0119 21.1303 11.9645 19.1776L15.5 15.6421L19.0356 12.1066C20.9882 10.154 20.9882 6.98813 19.0356 5.03551C17.0829 3.08289 13.9171 3.08289 11.9645 5.03551L8.42896 8.57104Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path opacity="0.15" d="M8.42896 8.57104L4.89342 12.1066C2.9408 14.0592 2.9408 17.225 4.89342 19.1776C6.84604 21.1303 10.0119 21.1303 11.9645 19.1776L15.5 15.6421L8.42896 8.57104Z" fill={props.color} />
        <Path d="M8.42896 8.57104L15.5 15.6421" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M8.42896 8.57104L4.89342 12.1066C2.9408 14.0592 2.9408 17.225 4.89342 19.1776C6.84604 21.1303 10.0119 21.1303 11.9645 19.1776L15.5 15.6421L19.0356 12.1066C20.9882 10.154 20.9882 6.98813 19.0356 5.03551C17.0829 3.08289 13.9171 3.08289 11.9645 5.03551L8.42896 8.57104Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M8.42896 8.57104L15.5 15.6421" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M8.42896 8.57104L4.89342 12.1066C2.9408 14.0592 2.9408 17.225 4.89342 19.1776C6.84604 21.1303 10.0119 21.1303 11.9645 19.1776L15.5 15.6421L19.0356 12.1066C20.9882 10.154 20.9882 6.98813 19.0356 5.03551C17.0829 3.08289 13.9171 3.08289 11.9645 5.03551L8.42896 8.57104Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Capsule: VFC<CapsuleProps> = (props) => {
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

export default createIcon(Capsule);