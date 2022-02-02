import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { color: Color, strokeWidth: number, };
type CurvedProps = { color: Color, strokeWidth: number, };
type DuotoneProps = { color: Color, strokeWidth: number, };
type OutlineProps = { color: Color, strokeWidth: number, };

type RotateSmallLeftProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M8 10C9.0827 9.23345 10.0777 8.23101 11.4424 8.03902C12.3012 7.91819 13.176 8.07974 13.9351 8.4993C14.6941 8.91887 15.2962 9.57374 15.6507 10.3652C16.0051 11.1567 16.0927 12.042 15.9003 12.8876C15.7078 13.7332 15.2458 14.4933 14.5837 15.0535C13.9216 15.6137 13.0954 15.9436 12.2296 15.9934C11.3637 16.0432 10.5051 15.8103 9.78313 15.3298C9.06116 14.8493 8.51492 14.1471 8.22673 13.3292" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M8 7V10H11" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M8 10C9.0827 9.23345 10.0777 8.23101 11.4424 8.03902C12.3012 7.91819 13.176 8.07974 13.9351 8.4993C14.6941 8.91887 15.2962 9.57374 15.6507 10.3652C16.0051 11.1567 16.0927 12.042 15.9003 12.8876C15.7078 13.7332 15.2458 14.4933 14.5837 15.0535C13.9216 15.6137 13.0954 15.9436 12.2296 15.9934C11.3637 16.0432 10.5051 15.8103 9.78313 15.3298C9.06116 14.8493 8.51492 14.1471 8.22673 13.3292" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M8 7V10H11" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path d="M8 10C9.0827 9.23345 10.0777 8.23101 11.4424 8.03902C12.3012 7.91819 13.176 8.07974 13.9351 8.4993C14.6941 8.91887 15.2962 9.57374 15.6507 10.3652C16.0051 11.1567 16.0927 12.042 15.9003 12.8876C15.7078 13.7332 15.2458 14.4933 14.5837 15.0535C13.9216 15.6137 13.0954 15.9436 12.2296 15.9934C11.3637 16.0432 10.5051 15.8103 9.78313 15.3298C9.06116 14.8493 8.51492 14.1471 8.22673 13.3292" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M8 7V10H11" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M8 10C9.0827 9.23345 10.0777 8.23101 11.4424 8.03902C12.3012 7.91819 13.176 8.07974 13.9351 8.4993C14.6941 8.91887 15.2962 9.57374 15.6507 10.3652C16.0051 11.1567 16.0927 12.042 15.9003 12.8876C15.7078 13.7332 15.2458 14.4933 14.5837 15.0535C13.9216 15.6137 13.0954 15.9436 12.2296 15.9934C11.3637 16.0432 10.5051 15.8103 9.78313 15.3298C9.06116 14.8493 8.51492 14.1471 8.22673 13.3292" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M8 7V10H11" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const RotateSmallLeft: VFC<RotateSmallLeftProps> = (props) => {
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

export default createIcon(RotateSmallLeft);