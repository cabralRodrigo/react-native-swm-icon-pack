import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { color: Color, strokeWidth: number, };
type CurvedProps = { color: Color, strokeWidth: number, };
type DuotoneProps = { color: Color, strokeWidth: number, };
type OutlineProps = { color: Color, strokeWidth: number, };

type RotateCircleRightProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M16 10C14.9173 9.23345 13.9223 8.23101 12.5576 8.03902C11.6988 7.91819 10.824 8.07974 10.0649 8.4993C9.3059 8.91887 8.7038 9.57374 8.34934 10.3652C7.99489 11.1567 7.90728 12.042 8.09972 12.8876C8.29217 13.7332 8.75424 14.4933 9.41631 15.0535C10.0784 15.6137 10.9046 15.9436 11.7704 15.9934C12.6363 16.0432 13.4949 15.8103 14.2169 15.3298C14.9388 14.8493 15.4851 14.1471 15.7733 13.3292" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M16 7V10H13" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M16 10C14.9173 9.23345 13.9223 8.23101 12.5576 8.03902C11.6988 7.91819 10.824 8.07974 10.0649 8.4993C9.3059 8.91887 8.7038 9.57374 8.34934 10.3652C7.99489 11.1567 7.90728 12.042 8.09972 12.8876C8.29217 13.7332 8.75424 14.4933 9.41631 15.0535C10.0784 15.6137 10.9046 15.9436 11.7704 15.9934C12.6363 16.0432 13.4949 15.8103 14.2169 15.3298C14.9388 14.8493 15.4851 14.1471 15.7733 13.3292" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M16 7V10H13" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path opacity="0.15" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" fill={props.color} />
        <Path d="M16 10C14.9173 9.23345 13.9223 8.23101 12.5576 8.03902C11.6988 7.91819 10.824 8.07974 10.0649 8.4993C9.3059 8.91887 8.7038 9.57374 8.34934 10.3652C7.99489 11.1567 7.90728 12.042 8.09972 12.8876C8.29217 13.7332 8.75424 14.4933 9.41631 15.0535C10.0784 15.6137 10.9046 15.9436 11.7704 15.9934C12.6363 16.0432 13.4949 15.8103 14.2169 15.3298C14.9388 14.8493 15.4851 14.1471 15.7733 13.3292" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M16 7V10H13" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M16 10C14.9173 9.23345 13.9223 8.23101 12.5576 8.03902C11.6988 7.91819 10.824 8.07974 10.0649 8.4993C9.3059 8.91887 8.7038 9.57374 8.34934 10.3652C7.99489 11.1567 7.90728 12.042 8.09972 12.8876C8.29217 13.7332 8.75424 14.4933 9.41631 15.0535C10.0784 15.6137 10.9046 15.9436 11.7704 15.9934C12.6363 16.0432 13.4949 15.8103 14.2169 15.3298C14.9388 14.8493 15.4851 14.1471 15.7733 13.3292" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M16 7V10H13" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const RotateCircleRight: VFC<RotateCircleRightProps> = (props) => {
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

export default createIcon(RotateCircleRight);