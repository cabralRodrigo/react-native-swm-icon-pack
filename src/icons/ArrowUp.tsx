import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type CurvedProps = { strokeColor: Color, strokeWidth: number, };
type DuotoneProps = { strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type ArrowUpProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M12 4L12.5303 3.46967C12.3158 3.25517 11.9932 3.191 11.713 3.30709C11.4327 3.42318 11.25 3.69665 11.25 4H12ZM11.25 20C11.25 20.4142 11.5858 20.75 12 20.75C12.4142 20.75 12.75 20.4142 12.75 20H11.25ZM9.53033 7.53033C9.82322 7.23744 9.82322 6.76256 9.53033 6.46967C9.23744 6.17678 8.76256 6.17678 8.46967 6.46967L9.53033 7.53033ZM5.46967 9.46967C5.17678 9.76256 5.17678 10.2374 5.46967 10.5303C5.76256 10.8232 6.23744 10.8232 6.53033 10.5303L5.46967 9.46967ZM17.4697 10.5303C17.7626 10.8232 18.2374 10.8232 18.5303 10.5303C18.8232 10.2374 18.8232 9.76256 18.5303 9.46967L17.4697 10.5303ZM11.25 4V20H12.75V4H11.25ZM8.46967 6.46967L5.46967 9.46967L6.53033 10.5303L9.53033 7.53033L8.46967 6.46967ZM18.5303 9.46967L12.5303 3.46967L11.4697 4.53033L17.4697 10.5303L18.5303 9.46967Z" fill={props.fillColor} />
);

const Curved: VFC<CurvedProps> = (props) => (
    <Path d="M12 4V20M12 4L18 10M12 4L6 10" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <Path d="M12 4V20M12 4L18 10M12 4L6 10" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M12 4V20M12 4L18 10M12 4L6 10" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const ArrowUp: VFC<ArrowUpProps> = (props) => {
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

export default createIcon(ArrowUp);