import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { strokeColor: Color, strokeWidth: number, };
type CurvedProps = { strokeColor: Color, strokeWidth: number, };
type DuotoneProps = { fillColor: Color, strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type WaterdropProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M19 14C19 18.4183 15.4183 21 12 21C8.58172 21 5 18.4183 5 14C5 10.5817 7.58172 6 12 3C14.4569 4.66824 16.3459 6.82559 17.5389 9" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M11.5 16.5C10.1193 16.5 9 15.3807 9 14" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M10.9055 3.80403C7.15837 6.7764 5 10.8745 5 14C5 18.4183 8.58172 21 12 21C15.4183 21 19 18.4183 19 14C19 10.8745 16.8416 6.7764 13.0945 3.80403C12.4523 3.29457 11.5477 3.29457 10.9055 3.80403Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M11.5 16.5C10.1193 16.5 9 15.3807 9 14" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path opacity="0.15" d="M5 14C5 10.5817 7.58172 6 12 3C16.4183 6 19 10.5817 19 14C19 18.4183 15.4183 21 12 21C8.58172 21 5 18.4183 5 14Z" fill={props.fillColor} />
        <Path d="M12 3C7.58172 6 5 10.5817 5 14C5 18.4183 8.58172 21 12 21C15.4183 21 19 18.4183 19 14C19 10.5817 16.4183 6 12 3Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M11.5 16.5C10.1193 16.5 9 15.3807 9 14" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M12 3C7.58172 6 5 10.5817 5 14C5 18.4183 8.58172 21 12 21C15.4183 21 19 18.4183 19 14C19 10.5817 16.4183 6 12 3Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M11.5 16.5C10.1193 16.5 9 15.3807 9 14" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Waterdrop: VFC<WaterdropProps> = (props) => {
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

export default createIcon(Waterdrop);