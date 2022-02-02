import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { strokeColor: Color, strokeWidth: number, };
type CurvedProps = { strokeColor: Color, strokeWidth: number, };
type DuotoneProps = { fillColor: Color, strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type Cart4Props = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M17 17H6.5L4.5 3H2" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M9 5H21.0001L19.0001 11" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M18 14H6.07141" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M9 21C10.1046 21 11 20.1046 11 19C11 17.8954 10.1046 17 9 17C7.89543 17 7 17.8954 7 19C7 20.1046 7.89543 21 9 21Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M4.78571 5H18.2251C19.5903 5 20.5542 6.33739 20.1225 7.63246L18.4558 12.6325C18.1836 13.4491 17.4193 14 16.5585 14H6.07142" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M17 17H8.23459C7.23929 17 6.39545 16.2681 6.25469 15.2828L6.07143 14L4.78571 5L4.74531 4.71716C4.60455 3.73186 3.76071 3 2.76541 3H2" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M9 21C10.1046 21 11 20.1046 11 19C11 17.8954 10.1046 17 9 17C7.89543 17 7 17.8954 7 19C7 20.1046 7.89543 21 9 21Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path opacity="0.15" d="M18.0001 14L21.0001 5H4.78577L6.07148 14H18.0001Z" fill={props.fillColor} />
        <Path d="M17 17H6.5L4.5 3H2" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M4.78571 5H21L18 14H6.07142" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M9 21C10.1046 21 11 20.1046 11 19C11 17.8954 10.1046 17 9 17C7.89543 17 7 17.8954 7 19C7 20.1046 7.89543 21 9 21Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M17 17H6.5L4.5 3H2" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M4.78571 5H21L18 14H6.07142" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M9 21C10.1046 21 11 20.1046 11 19C11 17.8954 10.1046 17 9 17C7.89543 17 7 17.8954 7 19C7 20.1046 7.89543 21 9 21Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Cart4: VFC<Cart4Props> = (props) => {
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

export default createIcon(Cart4);