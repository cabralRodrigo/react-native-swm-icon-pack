import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type CurvedProps = { fillColor: Color, };
type DuotoneProps = { strokeColor: Color, strokeWidth: number, };
type OutlineProps = { fillColor: Color, };

type ChevronSmallDownProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M8.96967 13.0303C9.26256 13.3232 9.73744 13.3232 10.0303 13.0303C10.3232 12.7374 10.3232 12.2626 10.0303 11.9697L8.96967 13.0303ZM7.53033 9.46967C7.23744 9.17678 6.76256 9.17678 6.46967 9.46967C6.17678 9.76256 6.17678 10.2374 6.46967 10.5303L7.53033 9.46967ZM17.5303 10.5303C17.8232 10.2374 17.8232 9.76256 17.5303 9.46967C17.2374 9.17678 16.7626 9.17678 16.4697 9.46967L17.5303 10.5303ZM11.4697 14.4697C11.1768 14.7626 11.1768 15.2374 11.4697 15.5303C11.7626 15.8232 12.2374 15.8232 12.5303 15.5303L11.4697 14.4697ZM10.0303 11.9697L7.53033 9.46967L6.46967 10.5303L8.96967 13.0303L10.0303 11.9697ZM16.4697 9.46967L11.4697 14.4697L12.5303 15.5303L17.5303 10.5303L16.4697 9.46967Z" fill={props.fillColor} />
);

const Curved: VFC<CurvedProps> = (props) => (
    <Path d="M7.53033 9.46967C7.23744 9.17678 6.76256 9.17678 6.46967 9.46967C6.17678 9.76256 6.17678 10.2374 6.46967 10.5303L7.53033 9.46967ZM12 15L11.4697 15.5303C11.7626 15.8232 12.2374 15.8232 12.5303 15.5303L12 15ZM17.5303 10.5303C17.8232 10.2374 17.8232 9.76256 17.5303 9.46967C17.2374 9.17678 16.7626 9.17678 16.4697 9.46967L17.5303 10.5303ZM6.46967 10.5303L11.4697 15.5303L12.5303 14.4697L7.53033 9.46967L6.46967 10.5303ZM12.5303 15.5303L17.5303 10.5303L16.4697 9.46967L11.4697 14.4697L12.5303 15.5303Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <Path d="M7 10L12 15L17 10" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M7.53033 9.46967C7.23744 9.17678 6.76256 9.17678 6.46967 9.46967C6.17678 9.76256 6.17678 10.2374 6.46967 10.5303L7.53033 9.46967ZM12 15L11.4697 15.5303C11.7626 15.8232 12.2374 15.8232 12.5303 15.5303L12 15ZM17.5303 10.5303C17.8232 10.2374 17.8232 9.76256 17.5303 9.46967C17.2374 9.17678 16.7626 9.17678 16.4697 9.46967L17.5303 10.5303ZM6.46967 10.5303L11.4697 15.5303L12.5303 14.4697L7.53033 9.46967L6.46967 10.5303ZM12.5303 15.5303L17.5303 10.5303L16.4697 9.46967L11.4697 14.4697L12.5303 15.5303Z" fill={props.fillColor} />
);

const ChevronSmallDown: VFC<ChevronSmallDownProps> = (props) => {
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

export default createIcon(ChevronSmallDown);