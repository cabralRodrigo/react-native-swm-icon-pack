import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { strokeColor: Color, strokeWidth: number, };
type CurvedProps = { strokeColor: Color, strokeWidth: number, };
type DuotoneProps = { fillColor: Color, strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type CutProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M9 18.5L17 3" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M15 18.5L7 3" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M15 18.5C15 19.8807 16.1193 21 17.5 21C18.8807 21 20 19.8807 20 18.5C20 17.1193 18.8807 16 17.5 16" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M9 18.5C9 19.8807 7.88071 21 6.5 21C5.11929 21 4 19.8807 4 18.5C4 17.1193 5.11929 16 6.5 16" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M9 18.5L17 3" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M15 18.5L7 3" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M20 18.5C20 19.8807 18.8807 21 17.5 21C16.1193 21 15 19.8807 15 18.5C15 17.1193 16.1193 16 17.5 16C18.8807 16 20 17.1193 20 18.5Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M9 18.5C9 19.8807 7.88071 21 6.5 21C5.11929 21 4 19.8807 4 18.5C4 17.1193 5.11929 16 6.5 16C7.88071 16 9 17.1193 9 18.5Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <G opacity="0.15">
            <Path d="M20 18.5C20 19.8807 18.8807 21 17.5 21C16.1193 21 15 19.8807 15 18.5C15 17.1193 16.1193 16 17.5 16C18.8807 16 20 17.1193 20 18.5Z" fill={props.fillColor} />
            <Path d="M9 18.5C9 19.8807 7.88071 21 6.5 21C5.11929 21 4 19.8807 4 18.5C4 17.1193 5.11929 16 6.5 16C7.88071 16 9 17.1193 9 18.5Z" fill={props.fillColor} />
        </G>
        <Path d="M9 18.5L17 3" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M15 18.5L7 3" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M20 18.5C20 19.8807 18.8807 21 17.5 21C16.1193 21 15 19.8807 15 18.5C15 17.1193 16.1193 16 17.5 16C18.8807 16 20 17.1193 20 18.5Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M9 18.5C9 19.8807 7.88071 21 6.5 21C5.11929 21 4 19.8807 4 18.5C4 17.1193 5.11929 16 6.5 16C7.88071 16 9 17.1193 9 18.5Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M9 18.5L17 3" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M15 18.5L7 3" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M20 18.5C20 19.8807 18.8807 21 17.5 21C16.1193 21 15 19.8807 15 18.5C15 17.1193 16.1193 16 17.5 16C18.8807 16 20 17.1193 20 18.5Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M9 18.5C9 19.8807 7.88071 21 6.5 21C5.11929 21 4 19.8807 4 18.5C4 17.1193 5.11929 16 6.5 16C7.88071 16 9 17.1193 9 18.5Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Cut: VFC<CutProps> = (props) => {
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

export default createIcon(Cut);