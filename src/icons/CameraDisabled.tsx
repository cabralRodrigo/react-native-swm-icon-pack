import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { strokeColor: Color, strokeWidth: number, };
type CurvedProps = { strokeColor: Color, strokeWidth: number, };
type DuotoneProps = { strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type CameraDisabledProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M21 9C21 7.89543 20.1046 7 19 7H16.5C15.9477 7 15.5 6.55228 15.5 6C15.5 5.44772 15.0523 5 14.5 5H10M21 16V13" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M3 3L21 21" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M11.6598 15.9809C10.2795 15.8251 9.18287 14.7327 9.02069 13.3543" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M3 9V17C3 18.1046 3.89543 19 5 19M14 19H9" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M15 18.9372C14.0645 18.9771 13.0495 19 12 19C8 19 4.5 18.6667 4 18.3333C3.5 18 3 15.6667 3 13C3 10.7849 3.34499 8.79986 3.7484 8" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M12 16C10.3431 16 9 14.6569 9 13" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M3 3L21 21" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M10 5.16181C10.4888 5.06081 11.1374 5 12 5C17 5 14.8083 7.04298 16 7.11352C18.1268 7.2394 19.6796 7.45303 20 7.66667C20.5 8 21 10.3333 21 13C21 14.0946 20.9158 15.133 20.7819 16" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path d="M10 5H14.5C15.0523 5 15.5 5.44772 15.5 6C15.5 6.55228 15.9477 7 16.5 7H19C20.1046 7 21 7.89543 21 9V16" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M3 3L21 21" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M11.6598 15.9809C10.2795 15.8251 9.18287 14.7327 9.02069 13.3543" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M3 9V17C3 18.1046 3.89543 19 5 19H14" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M10 5H14.5C15.0523 5 15.5 5.44772 15.5 6C15.5 6.55228 15.9477 7 16.5 7H19C20.1046 7 21 7.89543 21 9V16" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M3 3L21 21" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M11.6598 15.9809C10.2795 15.8251 9.18287 14.7327 9.02069 13.3543" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M3 9V17C3 18.1046 3.89543 19 5 19H14" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const CameraDisabled: VFC<CameraDisabledProps> = (props) => {
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

export default createIcon(CameraDisabled);