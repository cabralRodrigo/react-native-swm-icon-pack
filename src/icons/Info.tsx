import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { color: Color, strokeWidth: number, };
type CurvedProps = { color: Color, strokeWidth: number, };
type DuotoneProps = { color: Color, strokeWidth: number, };
type OutlineProps = { color: Color, strokeWidth: number, };

type InfoProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M12 5.01001L12 5.00002" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12 19L12 8" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M12 5.01001L12 5.00002" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12 19L12 8" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path d="M12 5.01001L12 5.00002" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12 19L12 8" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M12 5.00999L12 5" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12 19L12 8" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Info: VFC<InfoProps> = (props) => {
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

export default createIcon(Info);