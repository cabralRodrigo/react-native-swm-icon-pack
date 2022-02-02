import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type CurvedProps = { strokeColor: Color, strokeWidth: number, };
type DuotoneProps = { strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type ArrowSmallUpProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M12 7L12.5303 6.46967C12.3158 6.25517 11.9932 6.191 11.713 6.30709C11.4327 6.42318 11.25 6.69665 11.25 7H12ZM11.25 17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17H11.25ZM10.5303 9.53033C10.8232 9.23744 10.8232 8.76256 10.5303 8.46967C10.2374 8.17678 9.76256 8.17678 9.46967 8.46967L10.5303 9.53033ZM7.46967 10.4697C7.17678 10.7626 7.17678 11.2374 7.46967 11.5303C7.76256 11.8232 8.23744 11.8232 8.53033 11.5303L7.46967 10.4697ZM15.4697 11.5303C15.7626 11.8232 16.2374 11.8232 16.5303 11.5303C16.8232 11.2374 16.8232 10.7626 16.5303 10.4697L15.4697 11.5303ZM11.25 7V17H12.75V7H11.25ZM9.46967 8.46967L7.46967 10.4697L8.53033 11.5303L10.5303 9.53033L9.46967 8.46967ZM16.5303 10.4697L12.5303 6.46967L11.4697 7.53033L15.4697 11.5303L16.5303 10.4697Z" fill={props.fillColor} />
);

const Curved: VFC<CurvedProps> = (props) => (
    <Path d="M12 7V17M12 7L16 11M12 7L8 11" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <Path d="M12 7V17M12 7L16 11M12 7L8 11" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M12 7V17M12 7L16 11M12 7L8 11" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const ArrowSmallUp: VFC<ArrowSmallUpProps> = (props) => {
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

export default createIcon(ArrowSmallUp);