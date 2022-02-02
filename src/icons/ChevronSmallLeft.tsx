import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type CurvedProps = { fillColor: Color, };
type DuotoneProps = { strokeColor: Color, strokeWidth: number, };
type OutlineProps = { fillColor: Color, };

type ChevronSmallLeftProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M10.9697 8.96967C10.6768 9.26256 10.6768 9.73744 10.9697 10.0303C11.2626 10.3232 11.7374 10.3232 12.0303 10.0303L10.9697 8.96967ZM14.5303 7.53033C14.8232 7.23744 14.8232 6.76256 14.5303 6.46967C14.2374 6.17678 13.7626 6.17678 13.4697 6.46967L14.5303 7.53033ZM13.4697 17.5303C13.7626 17.8232 14.2374 17.8232 14.5303 17.5303C14.8232 17.2374 14.8232 16.7626 14.5303 16.4697L13.4697 17.5303ZM9.53033 11.4697C9.23744 11.1768 8.76256 11.1768 8.46967 11.4697C8.17678 11.7626 8.17678 12.2374 8.46967 12.5303L9.53033 11.4697ZM12.0303 10.0303L14.5303 7.53033L13.4697 6.46967L10.9697 8.96967L12.0303 10.0303ZM14.5303 16.4697L9.53033 11.4697L8.46967 12.5303L13.4697 17.5303L14.5303 16.4697Z" fill={props.fillColor} />
);

const Curved: VFC<CurvedProps> = (props) => (
    <Path d="M14.5303 7.53033C14.8232 7.23744 14.8232 6.76256 14.5303 6.46967C14.2374 6.17678 13.7626 6.17678 13.4697 6.46967L14.5303 7.53033ZM9 12L8.46967 11.4697C8.17678 11.7626 8.17678 12.2374 8.46967 12.5303L9 12ZM13.4697 17.5303C13.7626 17.8232 14.2374 17.8232 14.5303 17.5303C14.8232 17.2374 14.8232 16.7626 14.5303 16.4697L13.4697 17.5303ZM13.4697 6.46967L8.46967 11.4697L9.53033 12.5303L14.5303 7.53033L13.4697 6.46967ZM8.46967 12.5303L13.4697 17.5303L14.5303 16.4697L9.53033 11.4697L8.46967 12.5303Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <Path d="M14 7L9 12L14 17" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M14.5303 7.53033C14.8232 7.23744 14.8232 6.76256 14.5303 6.46967C14.2374 6.17678 13.7626 6.17678 13.4697 6.46967L14.5303 7.53033ZM9 12L8.46967 11.4697C8.17678 11.7626 8.17678 12.2374 8.46967 12.5303L9 12ZM13.4697 17.5303C13.7626 17.8232 14.2374 17.8232 14.5303 17.5303C14.8232 17.2374 14.8232 16.7626 14.5303 16.4697L13.4697 17.5303ZM13.4697 6.46967L8.46967 11.4697L9.53033 12.5303L14.5303 7.53033L13.4697 6.46967ZM8.46967 12.5303L13.4697 17.5303L14.5303 16.4697L9.53033 11.4697L8.46967 12.5303Z" fill={props.fillColor} />
);

const ChevronSmallLeft: VFC<ChevronSmallLeftProps> = (props) => {
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

export default createIcon(ChevronSmallLeft);