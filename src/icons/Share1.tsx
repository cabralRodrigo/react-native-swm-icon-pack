import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { color: Color, strokeWidth: number, };
type CurvedProps = { color: Color, strokeWidth: number, };
type DuotoneProps = { color: Color, strokeWidth: number, };
type OutlineProps = { color: Color, strokeWidth: number, };

type Share1Props = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6Z" stroke={props.color} strokeWidth={props.strokeWidth} />
        <Path d="M8.68445 10.6578L13 8.50003" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" />
        <Path d="M9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12Z" stroke={props.color} strokeWidth={props.strokeWidth} />
        <Path d="M15.3157 16.6578L11 14.5" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" />
        <Path d="M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z" stroke={props.color} strokeWidth={props.strokeWidth} />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6Z" stroke={props.color} strokeWidth={props.strokeWidth} />
        <Path d="M8.68439 10.6578L15.3124 7.34378" stroke={props.color} strokeWidth={props.strokeWidth} />
        <Path d="M9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12Z" stroke={props.color} strokeWidth={props.strokeWidth} />
        <Path d="M15.3156 16.6578L8.69379 13.3469" stroke={props.color} strokeWidth={props.strokeWidth} />
        <Path d="M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z" stroke={props.color} strokeWidth={props.strokeWidth} />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <G opacity="0.2">
            <Path d="M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z" fill={props.color} />
            <Path d="M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6Z" fill={props.color} />
            <Path d="M9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12Z" fill={props.color} />
        </G>
        <Path d="M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6Z" stroke={props.color} strokeWidth={props.strokeWidth} />
        <Path d="M8.68439 10.6578L15.3124 7.34378" stroke={props.color} strokeWidth={props.strokeWidth} />
        <Path d="M9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12Z" stroke={props.color} strokeWidth={props.strokeWidth} />
        <Path d="M15.3156 16.6578L8.6938 13.3469" stroke={props.color} strokeWidth={props.strokeWidth} />
        <Path d="M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z" stroke={props.color} strokeWidth={props.strokeWidth} />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6Z" stroke={props.color} strokeWidth={props.strokeWidth} />
        <Path d="M8.68439 10.6578L15.3125 7.34375" stroke={props.color} strokeWidth={props.strokeWidth} />
        <Path d="M9 12C9 13.6569 7.65685 15 6 15C4.34315 15 3 13.6569 3 12C3 10.3431 4.34315 9 6 9C7.65685 9 9 10.3431 9 12Z" stroke={props.color} strokeWidth={props.strokeWidth} />
        <Path d="M15.3156 16.6578L8.6938 13.3469" stroke={props.color} strokeWidth={props.strokeWidth} />
        <Path d="M21 18C21 19.6569 19.6569 21 18 21C16.3431 21 15 19.6569 15 18C15 16.3431 16.3431 15 18 15C19.6569 15 21 16.3431 21 18Z" stroke={props.color} strokeWidth={props.strokeWidth} />
    </G>
);

const Share1: VFC<Share1Props> = (props) => {
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

export default createIcon(Share1);