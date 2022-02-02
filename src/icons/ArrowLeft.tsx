import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type CurvedProps = { strokeColor: Color, strokeWidth: number, };
type DuotoneProps = { strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type ArrowLeftProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M4 12L4 11.25C3.69665 11.25 3.42318 11.4327 3.30709 11.713C3.191 11.9932 3.25517 12.3158 3.46967 12.5303L4 12ZM20 12.75C20.4142 12.75 20.75 12.4142 20.75 12C20.75 11.5858 20.4142 11.25 20 11.25V12.75ZM6.46967 8.46967C6.17678 8.76256 6.17678 9.23744 6.46967 9.53033C6.76256 9.82322 7.23744 9.82322 7.53033 9.53033L6.46967 8.46967ZM10.5303 6.53033C10.8232 6.23744 10.8232 5.76256 10.5303 5.46967C10.2374 5.17678 9.76256 5.17678 9.46967 5.46967L10.5303 6.53033ZM9.46967 18.5303C9.76256 18.8232 10.2374 18.8232 10.5303 18.5303C10.8232 18.2374 10.8232 17.7626 10.5303 17.4697L9.46967 18.5303ZM4 12.75L20 12.75V11.25L4 11.25L4 12.75ZM7.53033 9.53033L10.5303 6.53033L9.46967 5.46967L6.46967 8.46967L7.53033 9.53033ZM10.5303 17.4697L4.53033 11.4697L3.46967 12.5303L9.46967 18.5303L10.5303 17.4697Z" fill={props.fillColor} />
);

const Curved: VFC<CurvedProps> = (props) => (
    <Path d="M4 12L20 12M4 12L10 6M4 12L10 18" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <Path d="M4 12L20 12M4 12L10 6M4 12L10 18" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M4 12L20 12M4 12L10 6M4 12L10 18" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const ArrowLeft: VFC<ArrowLeftProps> = (props) => {
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

export default createIcon(ArrowLeft);