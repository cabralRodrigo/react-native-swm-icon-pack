import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { color: Color, strokeWidth: number, };
type CurvedProps = { color: Color, strokeWidth: number, };
type DuotoneProps = { color: Color, strokeWidth: number, };
type OutlineProps = { color: Color, strokeWidth: number, };

type MessageCircleProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M19.1 15.3L21 21L18 20" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M15.3 19.1C15.3 19.1 14.0847 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3M19.1 15.3C19.1 15.3 20 14 20 11.5C20 8.90308 18.8354 6.57817 17 5.01903" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M19.2318 15.6953L20.3676 19.1027C20.6282 19.8844 19.8845 20.6282 19.1027 20.3676L15.6953 19.2318" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M15.3 19.1C15.3 19.1 14.0847 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5C20 14 19.1 15.3 19.1 15.3" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path opacity="0.15" d="M3.00003 11.5C2.99659 12.8199 3.30496 14.1219 3.90003 15.3C4.6056 16.7118 5.69028 17.8992 7.03258 18.7293C8.37488 19.5594 9.92179 19.9994 11.5 20C12.8199 20.0035 14.1219 19.6951 15.3 19.1L21 21L19.1 15.3C19.6951 14.1219 20.0035 12.8199 20 11.5C19.9994 9.92179 19.5594 8.37488 18.7293 7.03258C17.8992 5.69028 16.7118 4.6056 15.3 3.90003C14.1219 3.30496 12.8199 2.99659 11.5 3.00003H11C8.91568 3.11502 6.94699 3.99479 5.47089 5.47089C3.99479 6.94699 3.11502 8.91568 3.00003 11V11.5Z" fill={props.color} />
        <Path d="M15.3 19.1L21 21L19.1 15.3" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M15.3 19.1C15.3 19.1 14.0847 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5C20 14 19.1 15.3 19.1 15.3" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M15.3 19.1L21 21L19.1 15.3" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M15.3 19.1C15.3 19.1 14.0847 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5C20 14 19.1 15.3 19.1 15.3" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const MessageCircle: VFC<MessageCircleProps> = (props) => {
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

export default createIcon(MessageCircle);