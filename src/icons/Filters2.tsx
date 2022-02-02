import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { strokeColor: Color, strokeWidth: number, };
type CurvedProps = { strokeColor: Color, strokeWidth: number, };
type DuotoneProps = { fillColor: Color, strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type Filters2Props = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M7 5L4 5" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M14 5L20 5" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M16 12L10 12" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M7 12L4 12" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M11 19L20 19" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M8 19C8 17.8954 7.10457 17 6 17C4.89543 17 4 17.8954 4 19C4 20.1046 4.89543 21 6 21C7.10457 21 8 20.1046 8 19Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14C19.1046 14 20 13.1046 20 12Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7C13.1046 7 14 6.10457 14 5Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M10 5L4 5" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M14 5L20 5" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M16 12L4 12" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M8 19L20 19" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M8 19C8 17.8954 7.10457 17 6 17C4.89543 17 4 17.8954 4 19C4 20.1046 4.89543 21 6 21C7.10457 21 8 20.1046 8 19Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14C19.1046 14 20 13.1046 20 12Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7C13.1046 7 14 6.10457 14 5Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <G opacity="0.15">
            <Path d="M12 3C13.1046 3 14 3.89543 14 5C14 6.10457 13.1046 7 12 7C10.8954 7 10 6.10457 10 5C10 3.89543 10.8954 3 12 3Z" fill={props.fillColor} />
            <Path d="M18 10C19.1046 10 20 10.8954 20 12C20 13.1046 19.1046 14 18 14C16.8954 14 16 13.1046 16 12C16 10.8954 16.8954 10 18 10Z" fill={props.fillColor} />
            <Path d="M6 17C7.10457 17 8 17.8954 8 19C8 20.1046 7.10457 21 6 21C4.89543 21 4 20.1046 4 19C4 17.8954 4.89543 17 6 17Z" fill={props.fillColor} />
        </G>
        <Path d="M10 5L4 5" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M14 5L20 5" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M16 12L4 12" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M8 19L20 19" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M8 19C8 17.8954 7.10457 17 6 17C4.89543 17 4 17.8954 4 19C4 20.1046 4.89543 21 6 21C7.10457 21 8 20.1046 8 19Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14C19.1046 14 20 13.1046 20 12Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7C13.1046 7 14 6.10457 14 5Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M10 5L4 5" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M14 5L20 5" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M16 12L4 12" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M8 19L20 19" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M8 19C8 17.8954 7.10457 17 6 17C4.89543 17 4 17.8954 4 19C4 20.1046 4.89543 21 6 21C7.10457 21 8 20.1046 8 19Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M20 12C20 10.8954 19.1046 10 18 10C16.8954 10 16 10.8954 16 12C16 13.1046 16.8954 14 18 14C19.1046 14 20 13.1046 20 12Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
        <Path d="M14 5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5C10 6.10457 10.8954 7 12 7C13.1046 7 14 6.10457 14 5Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" />
    </G>
);

const Filters2: VFC<Filters2Props> = (props) => {
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

export default createIcon(Filters2);