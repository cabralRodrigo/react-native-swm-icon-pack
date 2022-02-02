import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type CurvedProps = { strokeColor: Color, strokeWidth: number, };
type DuotoneProps = { strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type ArrowSmallRightProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M17 12L17.5303 12.5303C17.7448 12.3158 17.809 11.9932 17.6929 11.713C17.5768 11.4327 17.3033 11.25 17 11.25V12ZM7 11.25C6.58579 11.25 6.25 11.5858 6.25 12C6.25 12.4142 6.58579 12.75 7 12.75L7 11.25ZM14.4697 10.5303C14.7626 10.8232 15.2374 10.8232 15.5303 10.5303C15.8232 10.2374 15.8232 9.76256 15.5303 9.46967L14.4697 10.5303ZM13.5303 7.46967C13.2374 7.17678 12.7626 7.17678 12.4697 7.46967C12.1768 7.76256 12.1768 8.23744 12.4697 8.53033L13.5303 7.46967ZM12.4697 15.4697C12.1768 15.7626 12.1768 16.2374 12.4697 16.5303C12.7626 16.8232 13.2374 16.8232 13.5303 16.5303L12.4697 15.4697ZM17 11.25L7 11.25L7 12.75L17 12.75V11.25ZM15.5303 9.46967L13.5303 7.46967L12.4697 8.53033L14.4697 10.5303L15.5303 9.46967ZM13.5303 16.5303L17.5303 12.5303L16.4697 11.4697L12.4697 15.4697L13.5303 16.5303Z" fill={props.fillColor} />
);

const Curved: VFC<CurvedProps> = (props) => (
    <Path d="M17 12L7 12M17 12L13 16M17 12L13 8" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <Path d="M17 12L7 12M17 12L13 16M17 12L13 8" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M17 12L7 12M17 12L13 16M17 12L13 8" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const ArrowSmallRight: VFC<ArrowSmallRightProps> = (props) => {
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

export default createIcon(ArrowSmallRight);