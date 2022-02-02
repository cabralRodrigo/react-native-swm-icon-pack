import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { strokeColor: Color, strokeWidth: number, };
type CurvedProps = { strokeColor: Color, strokeWidth: number, };
type DuotoneProps = { strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type InfoProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M12 5.01001L12 5.00002" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M12 19L12 8" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M12 5.01001L12 5.00002" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M12 19L12 8" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path d="M12 5.01001L12 5.00002" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M12 19L12 8" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M12 5.00999L12 5" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M12 19L12 8" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
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