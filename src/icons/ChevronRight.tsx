import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type CurvedProps = { fillColor: Color, };
type DuotoneProps = { strokeColor: Color, strokeWidth: number, };
type OutlineProps = { fillColor: Color, };

type ChevronRightProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M13.4697 9.53033C13.7626 9.82322 14.2374 9.82322 14.5303 9.53033C14.8232 9.23744 14.8232 8.76256 14.5303 8.46967L13.4697 9.53033ZM9.53033 3.46967C9.23744 3.17678 8.76256 3.17678 8.46967 3.46967C8.17678 3.76256 8.17678 4.23744 8.46967 4.53033L9.53033 3.46967ZM8.46967 19.4697C8.17678 19.7626 8.17678 20.2374 8.46967 20.5303C8.76256 20.8232 9.23744 20.8232 9.53033 20.5303L8.46967 19.4697ZM17.5303 12.5303C17.8232 12.2374 17.8232 11.7626 17.5303 11.4697C17.2374 11.1768 16.7626 11.1768 16.4697 11.4697L17.5303 12.5303ZM14.5303 8.46967L9.53033 3.46967L8.46967 4.53033L13.4697 9.53033L14.5303 8.46967ZM9.53033 20.5303L17.5303 12.5303L16.4697 11.4697L8.46967 19.4697L9.53033 20.5303Z" fill={props.fillColor} />
);

const Curved: VFC<CurvedProps> = (props) => (
    <Path d="M8.46967 19.4697C8.17678 19.7626 8.17678 20.2374 8.46967 20.5303C8.76256 20.8232 9.23744 20.8232 9.53033 20.5303L8.46967 19.4697ZM17 12L17.5303 12.5303C17.671 12.3897 17.75 12.1989 17.75 12C17.75 11.8011 17.671 11.6103 17.5303 11.4697L17 12ZM9.53033 3.46967C9.23744 3.17678 8.76256 3.17678 8.46967 3.46967C8.17678 3.76256 8.17678 4.23744 8.46967 4.53033L9.53033 3.46967ZM9.53033 20.5303L17.5303 12.5303L16.4697 11.4697L8.46967 19.4697L9.53033 20.5303ZM17.5303 11.4697L9.53033 3.46967L8.46967 4.53033L16.4697 12.5303L17.5303 11.4697Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <Path d="M9 20L17 12L9 4" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M8.46967 19.4697C8.17678 19.7626 8.17678 20.2374 8.46967 20.5303C8.76256 20.8232 9.23744 20.8232 9.53033 20.5303L8.46967 19.4697ZM17 12L17.5303 12.5303C17.671 12.3897 17.75 12.1989 17.75 12C17.75 11.8011 17.671 11.6103 17.5303 11.4697L17 12ZM9.53033 3.46967C9.23744 3.17678 8.76256 3.17678 8.46967 3.46967C8.17678 3.76256 8.17678 4.23744 8.46967 4.53033L9.53033 3.46967ZM9.53033 20.5303L17.5303 12.5303L16.4697 11.4697L8.46967 19.4697L9.53033 20.5303ZM17.5303 11.4697L9.53033 3.46967L8.46967 4.53033L16.4697 12.5303L17.5303 11.4697Z" fill={props.fillColor} />
);

const ChevronRight: VFC<ChevronRightProps> = (props) => {
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

export default createIcon(ChevronRight);