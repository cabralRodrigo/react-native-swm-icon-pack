import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
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
    <G>
        <Path d="M16 10C14.9173 9.23345 13.9223 8.23101 12.5576 8.03902C11.6988 7.91819 10.824 8.07974 10.0649 8.4993C9.3059 8.91887 8.7038 9.57374 8.34934 10.3652C7.99489 11.1567 7.90728 12.042 8.09972 12.8876C8.29217 13.7332 8.75424 14.4933 9.41631 15.0535C10.0784 15.6137 10.9046 15.9436 11.7704 15.9934C12.6363 16.0432 13.4949 15.8103 14.2169 15.3298C14.9388 14.8493 15.4851 14.1471 15.7733 13.3292" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M16 7V10H13" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M16 10C14.9173 9.23345 13.9223 8.23101 12.5576 8.03902C11.6988 7.91819 10.824 8.07974 10.0649 8.4993C9.3059 8.91887 8.7038 9.57374 8.34934 10.3652C7.99489 11.1567 7.90728 12.042 8.09972 12.8876C8.29217 13.7332 8.75424 14.4933 9.41631 15.0535C10.0784 15.6137 10.9046 15.9436 11.7704 15.9934C12.6363 16.0432 13.4949 15.8103 14.2169 15.3298C14.9388 14.8493 15.4851 14.1471 15.7733 13.3292" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M16 7V10H13" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path d="M16 10C14.9173 9.23345 13.9223 8.23101 12.5576 8.03902C11.6988 7.91819 10.824 8.07974 10.0649 8.4993C9.3059 8.91887 8.7038 9.57374 8.34934 10.3652C7.99489 11.1567 7.90728 12.042 8.09972 12.8876C8.29217 13.7332 8.75424 14.4933 9.41631 15.0535C10.0784 15.6137 10.9046 15.9436 11.7704 15.9934C12.6363 16.0432 13.4949 15.8103 14.2169 15.3298C14.9388 14.8493 15.4851 14.1471 15.7733 13.3292" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M16 7V10H13" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M16 10C14.9173 9.23345 13.9223 8.23101 12.5576 8.03902C11.6988 7.91819 10.824 8.07974 10.0649 8.4993C9.3059 8.91887 8.7038 9.57374 8.34934 10.3652C7.99489 11.1567 7.90728 12.042 8.09972 12.8876C8.29217 13.7332 8.75424 14.4933 9.41631 15.0535C10.0784 15.6137 10.9046 15.9436 11.7704 15.9934C12.6363 16.0432 13.4949 15.8103 14.2169 15.3298C14.9388 14.8493 15.4851 14.1471 15.7733 13.3292" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M16 7V10H13" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
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