import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { color: Color, strokeWidth: number, };
type CurvedProps = { color: Color, strokeWidth: number, };
type DuotoneProps = { color: Color, strokeWidth: number, };
type OutlineProps = { color: Color, strokeWidth: number, };

type CloudProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M12 5C14.7614 5 17 7.23858 17 10V11M7 11V10C7 8.87432 7.37223 7.83569 8 7M17 19C19.2091 19 21 17.2091 21 15C21 13.8053 20.4762 12.7329 19.6458 12" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M7 19C4.79086 19 3 17.2091 3 15C3 12.7909 4.79086 11 7 11C8.01445 11 8.94069 11.3776 9.64582 12" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M7 11V10C7 7.23858 9.23858 5 12 5C14.7614 5 17 7.23858 17 10V11C19.2091 11 21 12.7909 21 15C21 17.2091 19.2091 19 17 19" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M7 19C4.79086 19 3 17.2091 3 15C3 12.7909 4.79086 11 7 11C8.01445 11 8.94069 11.3776 9.64582 12" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path d="M7 11V10C7 7.23858 9.23858 5 12 5C14.7614 5 17 7.23858 17 10V11C19.2091 11 21 12.7909 21 15C21 17.2091 19.2091 19 17 19" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M7 19C4.79086 19 3 17.2091 3 15C3 12.7909 4.79086 11 7 11C8.01445 11 8.94069 11.3776 9.64582 12" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M7 11V10C7 7.23858 9.23858 5 12 5C14.7614 5 17 7.23858 17 10V11C19.2091 11 21 12.7909 21 15C21 17.2091 19.2091 19 17 19" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M7 19C4.79086 19 3 17.2091 3 15C3 12.7909 4.79086 11 7 11C8.01445 11 8.94069 11.3776 9.64582 12" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Cloud: VFC<CloudProps> = (props) => {
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

export default createIcon(Cloud);