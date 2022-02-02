import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type CurvedProps = { strokeColor: Color, strokeWidth: number, };
type DuotoneProps = { strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type ArrowRightProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M20 12L20.5303 12.5303C20.7448 12.3158 20.809 11.9932 20.6929 11.713C20.5768 11.4327 20.3033 11.25 20 11.25V12ZM4 11.25C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75L4 11.25ZM16.4697 9.53033C16.7626 9.82322 17.2374 9.82322 17.5303 9.53033C17.8232 9.23744 17.8232 8.76256 17.5303 8.46967L16.4697 9.53033ZM14.5303 5.46967C14.2374 5.17678 13.7626 5.17678 13.4697 5.46967C13.1768 5.76256 13.1768 6.23744 13.4697 6.53033L14.5303 5.46967ZM13.4698 17.4697C13.1769 17.7626 13.1769 18.2374 13.4698 18.5303C13.7627 18.8232 14.2376 18.8232 14.5305 18.5303L13.4698 17.4697ZM20 11.25L4 11.25L4 12.75L20 12.75V11.25ZM17.5303 8.46967L14.5303 5.46967L13.4697 6.53033L16.4697 9.53033L17.5303 8.46967ZM14.5305 18.5303L20.5303 12.5303L19.4697 11.4697L13.4698 17.4697L14.5305 18.5303Z" fill={props.fillColor} />
);

const Curved: VFC<CurvedProps> = (props) => (
    <Path d="M20 12L4 12M20 12L14 18M20 12L14 6" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <Path d="M20 12L4 12M20 12L14 18M20 12L14 6" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M20 12L4 12M20 12L14 18M20 12L14 6" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const ArrowRight: VFC<ArrowRightProps> = (props) => {
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

export default createIcon(ArrowRight);