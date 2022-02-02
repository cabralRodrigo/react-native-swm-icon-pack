import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type CurvedProps = { fillColor: Color, };
type DuotoneProps = { strokeColor: Color, strokeWidth: number, };
type OutlineProps = { fillColor: Color, };

type ChevronDownProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M8.46967 14.5303C8.76256 14.8232 9.23744 14.8232 9.53033 14.5303C9.82322 14.2374 9.82322 13.7626 9.53033 13.4697L8.46967 14.5303ZM4.53033 8.46967C4.23744 8.17678 3.76256 8.17678 3.46967 8.46967C3.17678 8.76256 3.17678 9.23744 3.46967 9.53033L4.53033 8.46967ZM20.5303 9.53033C20.8232 9.23744 20.8232 8.76256 20.5303 8.46967C20.2374 8.17678 19.7626 8.17678 19.4697 8.46967L20.5303 9.53033ZM11.4697 16.4697C11.1768 16.7626 11.1768 17.2374 11.4697 17.5303C11.7626 17.8232 12.2374 17.8232 12.5303 17.5303L11.4697 16.4697ZM9.53033 13.4697L4.53033 8.46967L3.46967 9.53033L8.46967 14.5303L9.53033 13.4697ZM19.4697 8.46967L11.4697 16.4697L12.5303 17.5303L20.5303 9.53033L19.4697 8.46967Z" fill={props.fillColor} />
);

const Curved: VFC<CurvedProps> = (props) => (
    <Path d="M4.53033 8.46967C4.23744 8.17678 3.76256 8.17678 3.46967 8.46967C3.17678 8.76256 3.17678 9.23744 3.46967 9.53033L4.53033 8.46967ZM12 17L11.4697 17.5303C11.7626 17.8232 12.2374 17.8232 12.5303 17.5303L12 17ZM20.5303 9.53033C20.8232 9.23744 20.8232 8.76256 20.5303 8.46967C20.2374 8.17678 19.7626 8.17678 19.4697 8.46967L20.5303 9.53033ZM3.46967 9.53033L11.4697 17.5303L12.5303 16.4697L4.53033 8.46967L3.46967 9.53033ZM12.5303 17.5303L20.5303 9.53033L19.4697 8.46967L11.4697 16.4697L12.5303 17.5303Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <Path d="M4 9L12 17L20 9" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M4.53033 8.46967C4.23744 8.17678 3.76256 8.17678 3.46967 8.46967C3.17678 8.76256 3.17678 9.23744 3.46967 9.53033L4.53033 8.46967ZM12 17L11.4697 17.5303C11.7626 17.8232 12.2374 17.8232 12.5303 17.5303L12 17ZM20.5303 9.53033C20.8232 9.23744 20.8232 8.76256 20.5303 8.46967C20.2374 8.17678 19.7626 8.17678 19.4697 8.46967L20.5303 9.53033ZM3.46967 9.53033L11.4697 17.5303L12.5303 16.4697L4.53033 8.46967L3.46967 9.53033ZM12.5303 17.5303L20.5303 9.53033L19.4697 8.46967L11.4697 16.4697L12.5303 17.5303Z" fill={props.fillColor} />
);

const ChevronDown: VFC<ChevronDownProps> = (props) => {
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

export default createIcon(ChevronDown);