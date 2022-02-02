import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { strokeColor: Color, strokeWidth: number, };
type CurvedProps = { strokeColor: Color, strokeWidth: number, };
type DuotoneProps = { strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type RotateRightProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M21 8C18.6725 5.91142 16.5171 3.54676 13.2546 3.08779C11.3223 2.81593 9.35389 3.17941 7.64608 4.12343C5.93827 5.06746 4.58354 6.54091 3.78602 8.32177C2.98849 10.1026 2.79138 12.0944 3.22438 13.997C3.65738 15.8996 4.69703 17.61 6.18668 18.8704C7.67634 20.1308 9.5353 20.873 11.4835 20.9851C13.4316 21.0972 15.3635 20.5732 16.9879 19.492C18.6124 18.4108 19.8414 16.831 20.4898 14.9907" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M21 2V8H15" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M21 8C18.6725 5.91142 16.5171 3.54676 13.2546 3.08779C11.3223 2.81593 9.35389 3.17941 7.64608 4.12343C5.93827 5.06746 4.58354 6.54091 3.78602 8.32177C2.98849 10.1026 2.79138 12.0944 3.22438 13.997C3.65738 15.8996 4.69703 17.61 6.18668 18.8704C7.67634 20.1308 9.5353 20.873 11.4835 20.9851C13.4316 21.0972 15.3635 20.5732 16.9879 19.492C18.6124 18.4108 19.8414 16.831 20.4898 14.9907" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M21 2V8H15" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path d="M21 8C18.6725 5.91142 16.5171 3.54676 13.2546 3.08779C11.3223 2.81593 9.35389 3.17941 7.64608 4.12343C5.93827 5.06746 4.58354 6.54091 3.78602 8.32177C2.98849 10.1026 2.79138 12.0944 3.22438 13.997C3.65738 15.8996 4.69703 17.61 6.18668 18.8704C7.67634 20.1308 9.5353 20.873 11.4835 20.9851C13.4316 21.0972 15.3635 20.5732 16.9879 19.492C18.6124 18.4108 19.8414 16.831 20.4898 14.9907" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M21 2V8H15" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M21 8C18.6725 5.91142 16.5171 3.54676 13.2546 3.08779C11.3223 2.81593 9.35389 3.17941 7.64608 4.12343C5.93827 5.06746 4.58354 6.54091 3.78602 8.32177C2.98849 10.1026 2.79138 12.0944 3.22438 13.997C3.65738 15.8996 4.69703 17.61 6.18668 18.8704C7.67634 20.1308 9.5353 20.873 11.4835 20.9851C13.4316 21.0972 15.3635 20.5732 16.9879 19.492C18.6124 18.4108 19.8414 16.831 20.4898 14.9907" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M21 2V8H15" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const RotateRight: VFC<RotateRightProps> = (props) => {
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

export default createIcon(RotateRight);