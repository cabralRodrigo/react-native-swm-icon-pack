import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type CurvedProps = { fillColor: Color, };
type DuotoneProps = { strokeColor: Color, strokeWidth: number, };
type OutlineProps = { fillColor: Color, };

type ChevronLeftProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M9.46967 8.46967C9.17678 8.76256 9.17678 9.23744 9.46967 9.53033C9.76256 9.82322 10.2374 9.82322 10.5303 9.53033L9.46967 8.46967ZM15.5303 4.53033C15.8232 4.23744 15.8232 3.76256 15.5303 3.46967C15.2374 3.17678 14.7626 3.17678 14.4697 3.46967L15.5303 4.53033ZM14.4697 20.5303C14.7626 20.8232 15.2374 20.8232 15.5303 20.5303C15.8232 20.2374 15.8232 19.7626 15.5303 19.4697L14.4697 20.5303ZM7.53033 11.4697C7.23744 11.1768 6.76256 11.1768 6.46967 11.4697C6.17678 11.7626 6.17678 12.2374 6.46967 12.5303L7.53033 11.4697ZM10.5303 9.53033L15.5303 4.53033L14.4697 3.46967L9.46967 8.46967L10.5303 9.53033ZM15.5303 19.4697L7.53033 11.4697L6.46967 12.5303L14.4697 20.5303L15.5303 19.4697Z" fill={props.fillColor} />
);

const Curved: VFC<CurvedProps> = (props) => (
    <Path d="M15.5303 4.53033C15.8232 4.23744 15.8232 3.76256 15.5303 3.46967C15.2374 3.17678 14.7626 3.17678 14.4697 3.46967L15.5303 4.53033ZM7 12L6.46967 11.4697C6.17678 11.7626 6.17678 12.2374 6.46967 12.5303L7 12ZM14.4697 20.5303C14.7626 20.8232 15.2374 20.8232 15.5303 20.5303C15.8232 20.2374 15.8232 19.7626 15.5303 19.4697L14.4697 20.5303ZM14.4697 3.46967L6.46967 11.4697L7.53033 12.5303L15.5303 4.53033L14.4697 3.46967ZM6.46967 12.5303L14.4697 20.5303L15.5303 19.4697L7.53033 11.4697L6.46967 12.5303Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <Path d="M15 4L7 12L15 20" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M15.5303 4.53033C15.8232 4.23744 15.8232 3.76256 15.5303 3.46967C15.2374 3.17678 14.7626 3.17678 14.4697 3.46967L15.5303 4.53033ZM7 12L6.46967 11.4697C6.17678 11.7626 6.17678 12.2374 6.46967 12.5303L7 12ZM14.4697 20.5303C14.7626 20.8232 15.2374 20.8232 15.5303 20.5303C15.8232 20.2374 15.8232 19.7626 15.5303 19.4697L14.4697 20.5303ZM14.4697 3.46967L6.46967 11.4697L7.53033 12.5303L15.5303 4.53033L14.4697 3.46967ZM6.46967 12.5303L14.4697 20.5303L15.5303 19.4697L7.53033 11.4697L6.46967 12.5303Z" fill={props.fillColor} />
);

const ChevronLeft: VFC<ChevronLeftProps> = (props) => {
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

export default createIcon(ChevronLeft);