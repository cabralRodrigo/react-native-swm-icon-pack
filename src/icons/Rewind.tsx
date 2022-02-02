import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { color: Color, strokeWidth: number, };
type CurvedProps = { color: Color, strokeWidth: number, };
type DuotoneProps = { color: Color, strokeWidth: number, };
type OutlineProps = { color: Color, strokeWidth: number, };

type RewindProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M9 16L12 18L12 6L3 12L6 14" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12 13.8L19 18L19 6L15.5 8.1" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M13.863 8.57939C15.6077 7.56849 17.5231 6.49423 19.5 6C19.5 6 20 8 20 12C20 16 19.5 18 19.5 18C17.5968 17.5242 15.446 16.53 13.8644 15.4034" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M13.5 18C13.5 18 13.7164 17.1345 13.8645 15.4034C13.9415 14.5031 14 13.3686 14 12C14 10.6227 13.9407 9.48246 13.863 8.57939C13.7149 6.8598 13.5 6 13.5 6C13.5 6 11.5 6.5 8 8.5C4.5 10.5 3.5 12 3.5 12C3.5 12 4.5 13.5 8 15.5C11.5 17.5 13.5 18 13.5 18Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path opacity="0.15" d="M12 18L12 6L3 12L12 18Z" fill={props.color} />
        <Path d="M12 18L12 6L3 12L12 18Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinejoin="round" />
        <Path d="M12 13.8L19 18L19 6L12 10.2" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M12 18L12 6L3 12L12 18Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinejoin="round" />
        <Path d="M12 13.8L19 18L19 6L12 10.2" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Rewind: VFC<RewindProps> = (props) => {
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

export default createIcon(Rewind);