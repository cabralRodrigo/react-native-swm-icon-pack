import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type CurvedProps = { fillColor: Color, };
type DuotoneProps = { strokeColor: Color, strokeWidth: number, };
type OutlineProps = { fillColor: Color, };

type ChevronSmallUpProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M10.0303 12.0303C10.3232 11.7374 10.3232 11.2626 10.0303 10.9697C9.73744 10.6768 9.26256 10.6768 8.96967 10.9697L10.0303 12.0303ZM6.46967 13.4697C6.17678 13.7626 6.17678 14.2374 6.46967 14.5303C6.76256 14.8232 7.23744 14.8232 7.53033 14.5303L6.46967 13.4697ZM16.4697 14.5303C16.7626 14.8232 17.2374 14.8232 17.5303 14.5303C17.8232 14.2374 17.8232 13.7626 17.5303 13.4697L16.4697 14.5303ZM12.5303 8.46967C12.2374 8.17678 11.7626 8.17678 11.4697 8.46967C11.1768 8.76256 11.1768 9.23744 11.4697 9.53033L12.5303 8.46967ZM8.96967 10.9697L6.46967 13.4697L7.53033 14.5303L10.0303 12.0303L8.96967 10.9697ZM17.5303 13.4697L12.5303 8.46967L11.4697 9.53033L16.4697 14.5303L17.5303 13.4697Z" fill={props.fillColor} />
);

const Curved: VFC<CurvedProps> = (props) => (
    <Path d="M16.4697 14.5303C16.7626 14.8232 17.2374 14.8232 17.5303 14.5303C17.8232 14.2374 17.8232 13.7626 17.5303 13.4697L16.4697 14.5303ZM12 9L12.5303 8.46967C12.2374 8.17678 11.7626 8.17678 11.4697 8.46967L12 9ZM6.46967 13.4697C6.17678 13.7626 6.17678 14.2374 6.46967 14.5303C6.76256 14.8232 7.23744 14.8232 7.53033 14.5303L6.46967 13.4697ZM17.5303 13.4697L12.5303 8.46967L11.4697 9.53033L16.4697 14.5303L17.5303 13.4697ZM11.4697 8.46967L6.46967 13.4697L7.53033 14.5303L12.5303 9.53033L11.4697 8.46967Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <Path d="M17 14L12 9L7 14" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M16.4697 14.5303C16.7626 14.8232 17.2374 14.8232 17.5303 14.5303C17.8232 14.2374 17.8232 13.7626 17.5303 13.4697L16.4697 14.5303ZM12 9L12.5303 8.46967C12.2374 8.17678 11.7626 8.17678 11.4697 8.46967L12 9ZM6.46967 13.4697C6.17678 13.7626 6.17678 14.2374 6.46967 14.5303C6.76256 14.8232 7.23744 14.8232 7.53033 14.5303L6.46967 13.4697ZM17.5303 13.4697L12.5303 8.46967L11.4697 9.53033L16.4697 14.5303L17.5303 13.4697ZM11.4697 8.46967L6.46967 13.4697L7.53033 14.5303L12.5303 9.53033L11.4697 8.46967Z" fill={props.fillColor} />
);

const ChevronSmallUp: VFC<ChevronSmallUpProps> = (props) => {
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

export default createIcon(ChevronSmallUp);