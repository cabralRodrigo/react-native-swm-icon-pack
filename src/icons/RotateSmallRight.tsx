import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { strokeColor: Color, strokeWidth: number, };
type CurvedProps = { strokeColor: Color, strokeWidth: number, };
type DuotoneProps = { strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type RotateSmallRightProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M15.7733 13.3292C15.4851 14.1471 14.9388 14.8493 14.2169 15.3298C13.4949 15.8103 12.6363 16.0432 11.7704 15.9934C10.9046 15.9436 10.0784 15.6137 9.41631 15.0535C8.75424 14.4933 8.29217 13.7332 8.09972 12.8876C7.90728 12.042 7.99489 11.1567 8.34934 10.3652C8.7038 9.57374 9.3059 8.91887 10.0649 8.4993C10.824 8.07974 11.6988 7.91819 12.5576 8.03902C13.9223 8.23101 14.9173 9.23345 16 10M16 10V7M16 10H13" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Curved: VFC<CurvedProps> = (props) => (
    <Path d="M15.7733 13.3292C15.4851 14.1471 14.9388 14.8493 14.2169 15.3298C13.4949 15.8103 12.6363 16.0432 11.7704 15.9934C10.9046 15.9436 10.0784 15.6137 9.41631 15.0535C8.75424 14.4933 8.29217 13.7332 8.09972 12.8876C7.90728 12.042 7.99489 11.1567 8.34934 10.3652C8.7038 9.57374 9.3059 8.91887 10.0649 8.4993C10.824 8.07974 11.6988 7.91819 12.5576 8.03902C13.9223 8.23101 14.9173 9.23345 16 10M16 10V7M16 10H13" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <Path d="M15.7733 13.3292C15.4851 14.1471 14.9388 14.8493 14.2169 15.3298C13.4949 15.8103 12.6363 16.0432 11.7704 15.9934C10.9046 15.9436 10.0784 15.6137 9.41631 15.0535C8.75424 14.4933 8.29217 13.7332 8.09972 12.8876C7.90728 12.042 7.99489 11.1567 8.34934 10.3652C8.7038 9.57374 9.3059 8.91887 10.0649 8.4993C10.824 8.07974 11.6988 7.91819 12.5576 8.03902C13.9223 8.23101 14.9173 9.23345 16 10M16 10V7M16 10H13" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M15.7733 13.3292C15.4851 14.1471 14.9388 14.8493 14.2169 15.3298C13.4949 15.8103 12.6363 16.0432 11.7704 15.9934C10.9046 15.9436 10.0784 15.6137 9.41631 15.0535C8.75424 14.4933 8.29217 13.7332 8.09972 12.8876C7.90728 12.042 7.99489 11.1567 8.34934 10.3652C8.7038 9.57374 9.3059 8.91887 10.0649 8.4993C10.824 8.07974 11.6988 7.91819 12.5576 8.03902C13.9223 8.23101 14.9173 9.23345 16 10M16 10V7M16 10H13" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const RotateSmallRight: VFC<RotateSmallRightProps> = (props) => {
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

export default createIcon(RotateSmallRight);