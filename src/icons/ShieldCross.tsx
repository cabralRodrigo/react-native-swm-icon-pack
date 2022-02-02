import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { strokeColor: Color, strokeWidth: number, };
type CurvedProps = { strokeColor: Color, strokeWidth: number, };
type DuotoneProps = { fillColor: Color, strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type ShieldCrossProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M15.5 9.5L11 14L9.5 12.5" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M12 3L20 7C20 12.1932 17.2157 19.5098 12 21C6.78428 19.5098 4 12.1932 4 7L8 5" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M15.0001 10L11.0001 14L9 12" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M4.18803 9.4623C3.96786 7.9633 4.85599 6.572 6.21113 5.89443L10.2111 3.89443C11.3372 3.33137 12.6627 3.33137 13.7888 3.89443L17.7888 5.89443C19.144 6.572 20.0321 7.96329 19.8119 9.4623C19.1654 13.8643 16.8623 18.8285 13.0693 20.5995C12.3925 20.9156 11.6075 20.9156 10.9306 20.5995C7.13769 18.8285 4.83459 13.8643 4.18803 9.4623Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path opacity="0.15" d="M4 7L12 3L20 7C20 12.1932 17.2157 19.5098 12 21C6.78428 19.5098 4 12.1932 4 7Z" fill={props.fillColor} />
        <Path d="M15.5 9.5L11 14L9.5 12.5" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M4 7L12 3L20 7C20 12.1932 17.2157 19.5098 12 21C6.78428 19.5098 4 12.1932 4 7Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M15.5 9.5L11 14L9.5 12.5" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M4 7L12 3L20 7C20 12.1932 17.2157 19.5098 12 21C6.78428 19.5098 4 12.1932 4 7Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const ShieldCross: VFC<ShieldCrossProps> = (props) => {
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

export default createIcon(ShieldCross);