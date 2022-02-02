import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { strokeColor: Color, strokeWidth: number, };
type CurvedProps = { strokeColor: Color, strokeWidth: number, };
type DuotoneProps = { strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type RotateSmallLeftProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M8.22673 13.3292C8.51492 14.1471 9.06116 14.8493 9.78313 15.3298C10.5051 15.8103 11.3637 16.0432 12.2296 15.9934C13.0954 15.9436 13.9216 15.6137 14.5837 15.0535C15.2458 14.4933 15.7078 13.7332 15.9003 12.8876C16.0927 12.042 16.0051 11.1567 15.6507 10.3652C15.2962 9.57374 14.6941 8.91887 13.9351 8.4993C13.176 8.07974 12.3012 7.91819 11.4424 8.03902C10.0777 8.23101 9.0827 9.23345 8 10M8 10V7M8 10H11" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Curved: VFC<CurvedProps> = (props) => (
    <Path d="M8.22673 13.3292C8.51492 14.1471 9.06116 14.8493 9.78313 15.3298C10.5051 15.8103 11.3637 16.0432 12.2296 15.9934C13.0954 15.9436 13.9216 15.6137 14.5837 15.0535C15.2458 14.4933 15.7078 13.7332 15.9003 12.8876C16.0927 12.042 16.0051 11.1567 15.6507 10.3652C15.2962 9.57374 14.6941 8.91887 13.9351 8.4993C13.176 8.07974 12.3012 7.91819 11.4424 8.03902C10.0777 8.23101 9.0827 9.23345 8 10M8 10V7M8 10H11" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <Path d="M8.22673 13.3292C8.51492 14.1471 9.06116 14.8493 9.78313 15.3298C10.5051 15.8103 11.3637 16.0432 12.2296 15.9934C13.0954 15.9436 13.9216 15.6137 14.5837 15.0535C15.2458 14.4933 15.7078 13.7332 15.9003 12.8876C16.0927 12.042 16.0051 11.1567 15.6507 10.3652C15.2962 9.57374 14.6941 8.91887 13.9351 8.4993C13.176 8.07974 12.3012 7.91819 11.4424 8.03902C10.0777 8.23101 9.0827 9.23345 8 10M8 10V7M8 10H11" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M8.22673 13.3292C8.51492 14.1471 9.06116 14.8493 9.78313 15.3298C10.5051 15.8103 11.3637 16.0432 12.2296 15.9934C13.0954 15.9436 13.9216 15.6137 14.5837 15.0535C15.2458 14.4933 15.7078 13.7332 15.9003 12.8876C16.0927 12.042 16.0051 11.1567 15.6507 10.3652C15.2962 9.57374 14.6941 8.91887 13.9351 8.4993C13.176 8.07974 12.3012 7.91819 11.4424 8.03902C10.0777 8.23101 9.0827 9.23345 8 10M8 10V7M8 10H11" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
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