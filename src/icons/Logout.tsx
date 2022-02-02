import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { strokeColor: Color, strokeWidth: number, };
type CurvedProps = { strokeColor: Color, strokeWidth: number, };
type DuotoneProps = { strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type LogoutProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M20 18C20 19.1046 19.1046 20 18 20L15 20" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M15 4L18 4C19.1046 4 20 4.89543 20 6L20 14" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M3 12L7 8" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M6 15L7 16" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M3 12L15 12" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M14 4L17.5 4C20.5577 4 20.5 8 20.5 12C20.5 16 20.5577 20 17.5 20L14 20" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M3 12L15 12" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M7 8L3 12L7 16" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path d="M15 4L18 4C19.1046 4 20 4.89543 20 6L20 18C20 19.1046 19.1046 20 18 20L15 20" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M8 8L4 12L8 16" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M4 12L16 12" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M15 4L18 4C19.1046 4 20 4.89543 20 6L20 18C20 19.1046 19.1046 20 18 20L15 20" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M8 8L4 12L8 16" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M4 12L16 12" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Logout: VFC<LogoutProps> = (props) => {
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

export default createIcon(Logout);