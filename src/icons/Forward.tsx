import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { strokeColor: Color, strokeWidth: number, };
type CurvedProps = { strokeColor: Color, strokeWidth: number, };
type DuotoneProps = { fillColor: Color, strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type ForwardProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M15 16L12 18L12 6L21 12L18 14" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M12 13.8L5 18L5 6L8.5 8.1" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M10.5 6C10.5 6 10.2836 6.86552 10.1356 8.59655C10.0585 9.49689 10 10.6314 10 12C10 13.3773 10.0593 14.5175 10.137 15.4206C10.2851 17.1402 10.5 18 10.5 18C10.5 18 12.5 17.5 16 15.5C19.5 13.5 20.5 12 20.5 12C20.5 12 19.5 10.5 16 8.5C12.5 6.5 10.5 6 10.5 6Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M10.137 15.4206C8.39233 16.4315 6.47692 17.5058 4.5 18C4.5 18 4 16 4 12C4 8 4.5 6 4.5 6C6.40316 6.47579 8.55404 7.47003 10.1356 8.59655" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path opacity="0.15" d="M11 18L11 6L20 12L11 18Z" fill={props.fillColor} />
        <Path d="M12 6L12 18L21 12L12 6Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linejoin="round" />
        <Path d="M12 10.2L5 6L5 18L12 13.8" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M12 6L12 18L21 12L12 6Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linejoin="round" />
        <Path d="M12 10.2L5 6L5 18L12 13.8" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Forward: VFC<ForwardProps> = (props) => {
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

export default createIcon(Forward);