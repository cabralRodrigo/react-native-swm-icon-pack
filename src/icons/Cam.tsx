import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { strokeColor: Color, strokeWidth: number, };
type CurvedProps = { strokeColor: Color, strokeWidth: number, };
type DuotoneProps = { fillColor: Color, strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type CamProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M3 11V6.5C3 5.94772 3.44772 5.5 4 5.5H15C15.5523 5.5 16 5.94772 16 6.5V17.5C16 18.0523 15.5523 18.5 15 18.5H4C3.44772 18.5 3 18.0523 3 17.5V16" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M16 15L21 17V7L18.5 8" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M16.8772 15L21 17C21 17 21.5 15 21.5 12C21.5 9 21 7 21 7L16.8772 9" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M10 5C6.88889 5 4.16667 5.38889 3.77778 5.77778C3.38889 6.16667 3 8.88889 3 12C3 15.1111 3.38889 17.8333 3.77778 18.2222C4.16667 18.6111 6.88889 19 10 19C13.1111 19 15.8333 18.6111 16.2222 18.2222C16.477 17.9674 16.7318 16.7111 16.8772 15C16.9538 14.0994 17 13.0728 17 12C17 10.9272 16.9538 9.9006 16.8772 9C16.7318 7.28891 16.477 6.03256 16.2222 5.77778C15.8333 5.38889 13.1111 5 10 5Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path opacity="0.15" d="M3 6.5C3 5.94772 3.44772 5.5 4 5.5H15C15.5523 5.5 16 5.94772 16 6.5V17.5C16 18.0523 15.5523 18.5 15 18.5H4C3.44772 18.5 3 18.0523 3 17.5V6.5Z" fill={props.fillColor} />
        <Path d="M15 5.5H4C3.44772 5.5 3 5.94772 3 6.5V17.5C3 18.0523 3.44772 18.5 4 18.5H15C15.5523 18.5 16 18.0523 16 17.5V6.5C16 5.94772 15.5523 5.5 15 5.5Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M16 9L21 7V17L16 15" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M15 5.5H4C3.44772 5.5 3 5.94772 3 6.5V17.5C3 18.0523 3.44772 18.5 4 18.5H15C15.5523 18.5 16 18.0523 16 17.5V6.5C16 5.94772 15.5523 5.5 15 5.5Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M16 9L21 7V17L16 15" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Cam: VFC<CamProps> = (props) => {
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

export default createIcon(Cam);