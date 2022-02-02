import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { color: Color, strokeWidth: number, };
type CurvedProps = { color: Color, strokeWidth: number, };
type DuotoneProps = { color: Color, strokeWidth: number, };
type OutlineProps = { color: Color, strokeWidth: number, };

type LockOffProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M8 11V7C8 5.66667 8.8 3 12 3C13.9103 3 14.9653 3.95032 15.5054 5" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12 21H5V11H8H16H19V21H17" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7V10.4298" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12 10C10.3247 10 9.01243 10.1268 8 10.4298C5.77744 11.0952 5 12.6104 5 15.5C5 19.7059 6.64706 21 12 21C17.3529 21 19 19.7059 19 15.5C19 12.6104 18.2226 11.0952 16 10.4298C14.9876 10.1268 13.6753 10 12 10Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path opacity="0.15" d="M5 11H19V21H5V11Z" fill={props.color} />
        <Path d="M8 11V7C8 5.66667 8.8 3 12 3C13.9103 3 14.9653 3.95032 15.5054 5" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M19 21H5V11H8H16H19V21Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M8 11V7C8 5.66667 8.8 3 12 3C13.9103 3 14.9653 3.95032 15.5054 5" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M19 21H5V11H8H16H19V21Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const LockOff: VFC<LockOffProps> = (props) => {
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

export default createIcon(LockOff);