import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { color: Color, strokeWidth: number, };
type CurvedProps = { color: Color, strokeWidth: number, };
type DuotoneProps = { color: Color, strokeWidth: number, };
type OutlineProps = { color: Color, strokeWidth: number, };

type Umbrella2Props = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M12 15V21" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M6.34315 6.34315C4.84286 7.84344 4 9.87827 4 12L6 11L8 12L10 11L12 12L14 11L16 12L18 11L20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C11.3195 4 10.6479 4.08671 10 4.25401" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12 3V4" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M12 12V21" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M17.6569 6.34315C18.9656 7.65184 19.774 9.36728 19.9592 11.1923C19.9967 11.5621 19.6088 11.8044 19.2764 11.6382L18.2236 11.1118C18.0828 11.0414 17.9172 11.0414 17.7764 11.1118L16.2236 11.8882C16.0828 11.9586 15.9172 11.9586 15.7764 11.8882L14.2236 11.1118C14.0828 11.0414 13.9172 11.0414 13.7764 11.1118L12.2236 11.8882C12.0828 11.9586 11.9172 11.9586 11.7764 11.8882L10.2236 11.1118C10.0828 11.0414 9.91716 11.0414 9.7764 11.1118L8.22361 11.8882C8.08285 11.9586 7.91716 11.9586 7.7764 11.8882L6.22361 11.1118C6.08285 11.0414 5.91716 11.0414 5.7764 11.1118L4.72361 11.6382C4.39116 11.8044 4.00334 11.5621 4.04085 11.1923C4.226 9.36727 5.03445 7.65184 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12 3V4" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path opacity="0.15" d="M17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12L18 11L16 12L14 11L12 12L10 11L8 12L6 11L4 12C4 9.87827 4.84286 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315Z" fill={props.color} />
        <Path d="M12 12V21" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12L18 11L16 12L14 11L12 12L10 11L8 12L6 11L4 12C4 9.87827 4.84286 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12 3V4" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M12 12V21" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M17.6569 6.34315C19.1571 7.84344 20 9.87827 20 12L18 11L16 12L14 11L12 12L10 11L8 12L6 11L4 12C4 9.87827 4.84286 7.84344 6.34315 6.34315C7.84344 4.84285 9.87827 4 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12 3V4" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Umbrella2: VFC<Umbrella2Props> = (props) => {
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

export default createIcon(Umbrella2);