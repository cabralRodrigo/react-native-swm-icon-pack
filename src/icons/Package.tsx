import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { strokeColor: Color, strokeWidth: number, };
type CurvedProps = { strokeColor: Color, strokeWidth: number, };
type DuotoneProps = { fillColor: Color, strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type PackageProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M10 13H14" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M19 13V20H5V9" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M7 4H5C4.44772 4 4 4.44772 4 5V8C4 8.55228 4.44772 9 5 9H19C19.5523 9 20 8.55228 20 8V5C20 4.44772 19.5523 4 19 4H12" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M5.5 8.80835C5.5 8.80835 5 10.6111 5 13.5C5 16.3889 5.38889 18.9167 5.77778 19.2778C6.16667 19.6389 8.88889 20 12 20C15.1111 20 17.8333 19.6389 18.2222 19.2778C18.6111 18.9167 19 16.3889 19 13.5C19 10.6111 18.5 8.80835 18.5 8.80835" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M12 4C8.44444 4 5.33333 4.13889 4.88889 4.27778C4.44444 4.41667 4 5.38889 4 6.5C4 7.61111 4.44444 8.58333 4.88889 8.72222C4.98211 8.75135 5.19265 8.78049 5.5 8.80834C6.65798 8.91326 9.19021 9 12 9C14.8098 9 17.342 8.91326 18.5 8.80834C18.8074 8.78049 19.0179 8.75135 19.1111 8.72222C19.5556 8.58333 20 7.61111 20 6.5C20 5.38889 19.5556 4.41667 19.1111 4.27778C18.6667 4.13889 15.5556 4 12 4Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M10 13C10 13 10.5 12.5 12 12.5C13.5 12.5 14 13 14 13" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path opacity="0.15" d="M19 20V9H5V20H19Z" fill={props.fillColor} />
        <Path d="M10 13H14" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M19 9V20H5V9" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M19 4H5C4.44772 4 4 4.44772 4 5V8C4 8.55228 4.44772 9 5 9H19C19.5523 9 20 8.55228 20 8V5C20 4.44772 19.5523 4 19 4Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M10 13H14" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M19 9V20H5V9" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M19 4H5C4.44772 4 4 4.44772 4 5V8C4 8.55228 4.44772 9 5 9H19C19.5523 9 20 8.55228 20 8V5C20 4.44772 19.5523 4 19 4Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Package: VFC<PackageProps> = (props) => {
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

export default createIcon(Package);