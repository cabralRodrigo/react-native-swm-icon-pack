import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type CurvedProps = { strokeColor: Color, strokeWidth: number, };
type DuotoneProps = { strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type ArrowDownProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M12 20H11.25C11.25 20.3033 11.4327 20.5768 11.713 20.6929C11.9932 20.809 12.3158 20.7448 12.5303 20.5303L12 20ZM12.75 4C12.75 3.58579 12.4142 3.25 12 3.25C11.5858 3.25 11.25 3.58579 11.25 4L12.75 4ZM8.46967 17.5303C8.76256 17.8232 9.23744 17.8232 9.53033 17.5303C9.82322 17.2374 9.82322 16.7626 9.53033 16.4697L8.46967 17.5303ZM6.53033 13.4697C6.23744 13.1768 5.76256 13.1768 5.46967 13.4697C5.17678 13.7626 5.17678 14.2374 5.46967 14.5303L6.53033 13.4697ZM18.5303 14.5303C18.8232 14.2374 18.8232 13.7626 18.5303 13.4697C18.2374 13.1768 17.7626 13.1768 17.4697 13.4697L18.5303 14.5303ZM12.75 20L12.75 4L11.25 4L11.25 20H12.75ZM9.53033 16.4697L6.53033 13.4697L5.46967 14.5303L8.46967 17.5303L9.53033 16.4697ZM17.4697 13.4697L11.4697 19.4697L12.5303 20.5303L18.5303 14.5303L17.4697 13.4697Z" fill={props.fillColor} />
);

const Curved: VFC<CurvedProps> = (props) => (
    <Path d="M12 20L12 4M12 20L6 14M12 20L18 14" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <Path d="M12 20L12 4M12 20L6 14M12 20L18 14" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M12 20L12 4M12 20L6 14M12 20L18 14" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const ArrowDown: VFC<ArrowDownProps> = (props) => {
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

export default createIcon(ArrowDown);