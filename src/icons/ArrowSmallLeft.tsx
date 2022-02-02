import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type CurvedProps = { strokeColor: Color, strokeWidth: number, };
type DuotoneProps = { strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type ArrowSmallLeftProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M7 12L7 11.25C6.69665 11.25 6.42318 11.4327 6.30709 11.713C6.191 11.9932 6.25517 12.3158 6.46967 12.5303L7 12ZM17 12.75C17.4142 12.75 17.75 12.4142 17.75 12C17.75 11.5858 17.4142 11.25 17 11.25V12.75ZM8.46967 9.46967C8.17678 9.76256 8.17678 10.2374 8.46967 10.5303C8.76256 10.8232 9.23744 10.8232 9.53033 10.5303L8.46967 9.46967ZM11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967C11.2374 7.17678 10.7626 7.17678 10.4697 7.46967L11.5303 8.53033ZM10.4697 16.5303C10.7626 16.8232 11.2374 16.8232 11.5303 16.5303C11.8232 16.2374 11.8232 15.7626 11.5303 15.4697L10.4697 16.5303ZM7 12.75L17 12.75V11.25L7 11.25L7 12.75ZM9.53033 10.5303L11.5303 8.53033L10.4697 7.46967L8.46967 9.46967L9.53033 10.5303ZM11.5303 15.4697L7.53033 11.4697L6.46967 12.5303L10.4697 16.5303L11.5303 15.4697Z" fill={props.fillColor} />
);

const Curved: VFC<CurvedProps> = (props) => (
    <Path d="M7 12L17 12M7 12L11 8M7 12L11 16" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <Path d="M7 12L17 12M7 12L11 8M7 12L11 16" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M7 12L17 12M7 12L11 8M7 12L11 16" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const ArrowSmallLeft: VFC<ArrowSmallLeftProps> = (props) => {
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

export default createIcon(ArrowSmallLeft);