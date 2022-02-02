import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { color: Color, strokeWidth: number, };
type CurvedProps = { color: Color, strokeWidth: number, };
type DuotoneProps = { color: Color, strokeWidth: number, };
type OutlineProps = { color: Color, strokeWidth: number, };

type CreditcardProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M17 6H19C20.1046 6 21 6.89543 21 8V10V16C21 17.1046 20.1046 18 19 18H12" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12 6H5C3.89543 6 3 6.89543 3 8V10V16C3 17.1046 3.89543 18 5 18H7" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M21 10H3" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M6 15H10" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M7 14C7 14 8 14 9.5 14C11 14 12 14 12 14" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M20.9058 10H3.09424" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12 6C8 6 4.5 6.33333 4 6.66667C3.63118 6.91254 3.26237 8.24663 3.09422 10C3.03442 10.6237 3 11.3004 3 12C3 14.6667 3.5 17 4 17.3333C4.5 17.6667 8 18 12 18C16 18 19.5 17.6667 20 17.3333C20.5 17 21 14.6667 21 12C21 11.3004 20.9656 10.6237 20.9058 10C20.7376 8.24663 20.3688 6.91254 20 6.66667C19.5 6.33333 16 6 12 6Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path opacity="0.15" d="M5 18H19C20.1046 18 21 17.1046 21 16V10H3V16C3 17.1046 3.89543 18 5 18Z" fill={props.color} />
        <Path d="M19 6H5C3.89543 6 3 6.89543 3 8V10V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16V10V8C21 6.89543 20.1046 6 19 6Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M21 10H3" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M6 15H10" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M19 6H5C3.89543 6 3 6.89543 3 8V10V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16V10V8C21 6.89543 20.1046 6 19 6Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M21 10H3" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M6 15H10" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Creditcard: VFC<CreditcardProps> = (props) => {
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

export default createIcon(Creditcard);