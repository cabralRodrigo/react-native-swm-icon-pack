import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { strokeColor: Color, strokeWidth: number, };
type CurvedProps = { strokeColor: Color, strokeWidth: number, };
type DuotoneProps = { strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type RefreshProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M3 3V9H9" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M3 9C5.32744 6.91141 7.48287 4.54676 10.7453 4.08779C12.6777 3.81593 14.6461 4.17941 16.3539 5.12343C18.0617 6.06746 19.4164 7.54091 20.2139 9.32177" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M21 21V15L15 15" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M21 15C18.6725 17.0886 16.5171 19.4532 13.2546 19.9122C11.3223 20.1841 9.35388 19.8206 7.64607 18.8766C5.93826 17.9325 4.58353 16.4591 3.78601 14.6782" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M3 3V9H9" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M3 9C5.32744 6.91141 7.48287 4.54676 10.7453 4.08779C12.6777 3.81593 14.6461 4.17941 16.3539 5.12343C18.0617 6.06746 19.4164 7.54091 20.2139 9.32177" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M21 21V15L15 15" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M21 15C18.6726 17.0886 16.5171 19.4532 13.2547 19.9122C11.3223 20.1841 9.35391 19.8206 7.6461 18.8766C5.93829 17.9325 4.58356 16.4591 3.78604 14.6782" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path d="M3 3V9H9" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M3 9C5.32744 6.91141 7.48287 4.54676 10.7453 4.08779C12.6777 3.81593 14.6461 4.17941 16.3539 5.12343C18.0617 6.06746 19.4164 7.54091 20.2139 9.32177" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M21 21V15L15 15" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M21 15C18.6725 17.0886 16.5171 19.4532 13.2546 19.9122C11.3223 20.1841 9.35388 19.8206 7.64607 18.8766C5.93826 17.9325 4.58353 16.4591 3.78601 14.6782" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M3 3V9H9" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M3 9C5.32744 6.91141 7.48287 4.54676 10.7453 4.08779C12.6777 3.81593 14.6461 4.17941 16.3539 5.12343C18.0617 6.06746 19.4164 7.54091 20.2139 9.32177" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M21 21V15L15 15" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M21 15C18.6726 17.0886 16.5171 19.4532 13.2547 19.9122C11.3223 20.1841 9.35391 19.8206 7.6461 18.8766C5.93829 17.9325 4.58356 16.4591 3.78604 14.6782" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Refresh: VFC<RefreshProps> = (props) => {
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

export default createIcon(Refresh);