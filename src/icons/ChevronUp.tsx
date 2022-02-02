import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type CurvedProps = { fillColor: Color, };
type DuotoneProps = { strokeColor: Color, strokeWidth: number, };
type OutlineProps = { fillColor: Color, };

type ChevronUpProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M9.53033 10.5303C9.82322 10.2374 9.82322 9.76256 9.53033 9.46967C9.23744 9.17678 8.76256 9.17678 8.46967 9.46967L9.53033 10.5303ZM3.46967 14.4697C3.17678 14.7626 3.17678 15.2374 3.46967 15.5303C3.76256 15.8232 4.23744 15.8232 4.53033 15.5303L3.46967 14.4697ZM19.4697 15.5303C19.7626 15.8232 20.2374 15.8232 20.5303 15.5303C20.8232 15.2374 20.8232 14.7626 20.5303 14.4697L19.4697 15.5303ZM12.5303 6.46967C12.2374 6.17678 11.7626 6.17678 11.4697 6.46967C11.1768 6.76256 11.1768 7.23744 11.4697 7.53033L12.5303 6.46967ZM8.46967 9.46967L3.46967 14.4697L4.53033 15.5303L9.53033 10.5303L8.46967 9.46967ZM20.5303 14.4697L12.5303 6.46967L11.4697 7.53033L19.4697 15.5303L20.5303 14.4697Z" fill={props.fillColor} />
);

const Curved: VFC<CurvedProps> = (props) => (
    <Path d="M19.4697 15.5303C19.7626 15.8232 20.2374 15.8232 20.5303 15.5303C20.8232 15.2374 20.8232 14.7626 20.5303 14.4697L19.4697 15.5303ZM12 7L12.5303 6.46967C12.2374 6.17678 11.7626 6.17678 11.4697 6.46967L12 7ZM3.46967 14.4697C3.17678 14.7626 3.17678 15.2374 3.46967 15.5303C3.76256 15.8232 4.23744 15.8232 4.53033 15.5303L3.46967 14.4697ZM20.5303 14.4697L12.5303 6.46967L11.4697 7.53033L19.4697 15.5303L20.5303 14.4697ZM11.4697 6.46967L3.46967 14.4697L4.53033 15.5303L12.5303 7.53033L11.4697 6.46967Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <Path d="M20 15L12 7L4 15" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M19.4697 15.5303C19.7626 15.8232 20.2374 15.8232 20.5303 15.5303C20.8232 15.2374 20.8232 14.7626 20.5303 14.4697L19.4697 15.5303ZM12 7L12.5303 6.46967C12.2374 6.17678 11.7626 6.17678 11.4697 6.46967L12 7ZM3.46967 14.4697C3.17678 14.7626 3.17678 15.2374 3.46967 15.5303C3.76256 15.8232 4.23744 15.8232 4.53033 15.5303L3.46967 14.4697ZM20.5303 14.4697L12.5303 6.46967L11.4697 7.53033L19.4697 15.5303L20.5303 14.4697ZM11.4697 6.46967L3.46967 14.4697L4.53033 15.5303L12.5303 7.53033L11.4697 6.46967Z" fill={props.fillColor} />
);

const ChevronUp: VFC<ChevronUpProps> = (props) => {
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

export default createIcon(ChevronUp);