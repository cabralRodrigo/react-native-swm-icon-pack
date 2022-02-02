import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type CurvedProps = { strokeColor: Color, strokeWidth: number, };
type DuotoneProps = { strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type ArrowSmallDownProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M12 17H11.25C11.25 17.3033 11.4327 17.5768 11.713 17.6929C11.9932 17.809 12.3158 17.7448 12.5303 17.5303L12 17ZM12.75 7C12.75 6.58579 12.4142 6.25 12 6.25C11.5858 6.25 11.25 6.58579 11.25 7L12.75 7ZM9.46967 15.5303C9.76256 15.8232 10.2374 15.8232 10.5303 15.5303C10.8232 15.2374 10.8232 14.7626 10.5303 14.4697L9.46967 15.5303ZM8.53033 12.4697C8.23744 12.1768 7.76256 12.1768 7.46967 12.4697C7.17678 12.7626 7.17678 13.2374 7.46967 13.5303L8.53033 12.4697ZM16.5303 13.5303C16.8232 13.2374 16.8232 12.7626 16.5303 12.4697C16.2374 12.1768 15.7626 12.1768 15.4697 12.4697L16.5303 13.5303ZM12.75 17L12.75 7L11.25 7L11.25 17H12.75ZM10.5303 14.4697L8.53033 12.4697L7.46967 13.5303L9.46967 15.5303L10.5303 14.4697ZM15.4697 12.4697L11.4697 16.4697L12.5303 17.5303L16.5303 13.5303L15.4697 12.4697Z" fill={props.fillColor} />
);

const Curved: VFC<CurvedProps> = (props) => (
    <Path d="M12 17L12 7M12 17L8 13M12 17L16 13" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <Path d="M12 17L12 7M12 17L8 13M12 17L16 13" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M12 17L12 7M12 17L8 13M12 17L16 13" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const ArrowSmallDown: VFC<ArrowSmallDownProps> = (props) => {
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

export default createIcon(ArrowSmallDown);