import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { strokeColor: Color, strokeWidth: number, };
type CurvedProps = { strokeColor: Color, strokeWidth: number, };
type DuotoneProps = { fillColor: Color, strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type Grid2VerticalProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M3.5 13V3.5H10.5V20.5H3.5V18" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M20.5 6V3.5H13.5V20.5H20.5V11" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M6.5 3C4.94444 3 3.58333 3.5 3.38889 4C3.19444 4.5 3 8 3 12C3 16 3.19444 19.5 3.38889 20C3.58333 20.5 4.94444 21 6.5 21C8.05556 21 9.41667 20.5 9.61111 20C9.80556 19.5 10 16 10 12C10 8 9.80556 4.5 9.61111 4C9.41667 3.5 8.05556 3 6.5 3Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M17.5 3C15.9444 3 14.5833 3.5 14.3889 4C14.1944 4.5 14 8 14 12C14 16 14.1944 19.5 14.3889 20C14.5833 20.5 15.9444 21 17.5 21C19.0556 21 20.4167 20.5 20.6111 20C20.8056 19.5 21 16 21 12C21 8 20.8056 4.5 20.6111 4C20.4167 3.5 19.0556 3 17.5 3Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path opacity="0.15" d="M13.5 3.5H20.5V20.5H13.5V3.5Z" fill={props.fillColor} />
        <Path d="M3.5 3.5H10.5V20.5H3.5V3.5Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M13.5 3.5H20.5V20.5H13.5V3.5Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M3.5 3.5H10.5V20.5H3.5V3.5Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M13.5 3.5H20.5V20.5H13.5V3.5Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Grid2Vertical: VFC<Grid2VerticalProps> = (props) => {
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

export default createIcon(Grid2Vertical);