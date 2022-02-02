import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { strokeColor: Color, strokeWidth: number, };
type CurvedProps = { strokeColor: Color, strokeWidth: number, };
type DuotoneProps = { fillColor: Color, strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type TagProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M5 15L2 12L8 6H13" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M8 18H21V6H18" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M12 12C12 13.1046 11.1046 14 10 14C8.89543 14 8 13.1046 8 12C8 10.8954 8.89543 10 10 10C11.1046 10 12 10.8954 12 12Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M11 12C11 12.8284 10.3284 13.5 9.5 13.5C8.67157 13.5 8 12.8284 8 12C8 11.1716 8.67157 10.5 9.5 10.5C10.3284 10.5 11 11.1716 11 12Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M21 16V8C21 6.89543 20.1046 6 19 6H8.82843C8.298 6 7.78929 6.21071 7.41422 6.58579L3.41422 10.5858C2.63317 11.3668 2.63317 12.6332 3.41422 13.4142L7.41422 17.4142C7.78929 17.7893 8.298 18 8.82843 18H19C20.1046 18 21 17.1046 21 16Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path opacity="0.15" fill-rule="evenodd" clip-rule="evenodd" d="M22 6H9L3 12L9 18H22V6ZM11 13.5C11.8284 13.5 12.5 12.8284 12.5 12C12.5 11.1716 11.8284 10.5 11 10.5C10.1716 10.5 9.5 11.1716 9.5 12C9.5 12.8284 10.1716 13.5 11 13.5Z" fill={props.fillColor} />
        <Path d="M21 18V6H8L2 12L8 18H21Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M12 12C12 13.1046 11.1046 14 10 14C8.89543 14 8 13.1046 8 12C8 10.8954 8.89543 10 10 10C11.1046 10 12 10.8954 12 12Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M21 18V6H8L2 12L8 18H21Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M12 12C12 13.1046 11.1046 14 10 14C8.89543 14 8 13.1046 8 12C8 10.8954 8.89543 10 10 10C11.1046 10 12 10.8954 12 12Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Tag: VFC<TagProps> = (props) => {
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

export default createIcon(Tag);