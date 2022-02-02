import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type CurvedProps = { fillColor: Color, };
type DuotoneProps = { fillColor: Color, };
type OutlineProps = { fillColor: Color, };

type ArrowCircleDownProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M12 17H11.25C11.25 17.3033 11.4327 17.5768 11.713 17.6929C11.9932 17.809 12.3158 17.7448 12.5303 17.5303L12 17ZM12.75 7C12.75 6.58579 12.4142 6.25 12 6.25C11.5858 6.25 11.25 6.58579 11.25 7H12.75ZM9.46967 15.5303C9.76256 15.8232 10.2374 15.8232 10.5303 15.5303C10.8232 15.2374 10.8232 14.7626 10.5303 14.4697L9.46967 15.5303ZM8.53033 12.4697C8.23744 12.1768 7.76256 12.1768 7.46967 12.4697C7.17678 12.7626 7.17678 13.2374 7.46967 13.5303L8.53033 12.4697ZM16.5303 13.5303C16.8232 13.2374 16.8232 12.7626 16.5303 12.4697C16.2374 12.1768 15.7626 12.1768 15.4697 12.4697L16.5303 13.5303ZM20.25 12C20.25 16.5563 16.5563 20.25 12 20.25V21.75C17.3848 21.75 21.75 17.3848 21.75 12H20.25ZM12 20.25C7.44365 20.25 3.75 16.5563 3.75 12H2.25C2.25 17.3848 6.61522 21.75 12 21.75V20.25ZM3.75 12C3.75 7.44365 7.44365 3.75 12 3.75V2.25C6.61522 2.25 2.25 6.61522 2.25 12H3.75ZM12 3.75C16.5563 3.75 20.25 7.44365 20.25 12H21.75C21.75 6.61522 17.3848 2.25 12 2.25V3.75ZM12.75 17L12.75 7H11.25L11.25 17H12.75ZM10.5303 14.4697L8.53033 12.4697L7.46967 13.5303L9.46967 15.5303L10.5303 14.4697ZM15.4697 12.4697L11.4697 16.4697L12.5303 17.5303L16.5303 13.5303L15.4697 12.4697Z" fill={props.fillColor} />
);

const Curved: VFC<CurvedProps> = (props) => (
    <Path d="M12 17L11.4697 17.5303C11.6103 17.671 11.8011 17.75 12 17.75C12.1989 17.75 12.3897 17.671 12.5303 17.5303L12 17ZM12.75 7C12.75 6.58579 12.4142 6.25 12 6.25C11.5858 6.25 11.25 6.58579 11.25 7H12.75ZM8.53033 12.4697C8.23744 12.1768 7.76256 12.1768 7.46967 12.4697C7.17678 12.7626 7.17678 13.2374 7.46967 13.5303L8.53033 12.4697ZM16.5303 13.5303C16.8232 13.2374 16.8232 12.7626 16.5303 12.4697C16.2374 12.1768 15.7626 12.1768 15.4697 12.4697L16.5303 13.5303ZM12.75 17L12.75 7H11.25L11.25 17H12.75ZM7.46967 13.5303L11.4697 17.5303L12.5303 16.4697L8.53033 12.4697L7.46967 13.5303ZM12.5303 17.5303L16.5303 13.5303L15.4697 12.4697L11.4697 16.4697L12.5303 17.5303ZM20.25 12C20.25 16.5563 16.5563 20.25 12 20.25V21.75C17.3848 21.75 21.75 17.3848 21.75 12H20.25ZM12 20.25C7.44365 20.25 3.75 16.5563 3.75 12H2.25C2.25 17.3848 6.61522 21.75 12 21.75V20.25ZM3.75 12C3.75 7.44365 7.44365 3.75 12 3.75V2.25C6.61522 2.25 2.25 6.61522 2.25 12H3.75ZM12 3.75C16.5563 3.75 20.25 7.44365 20.25 12H21.75C21.75 6.61522 17.3848 2.25 12 2.25V3.75Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <>
        <Path opacity="0.15" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" fill={props.fillColor} />
        <Path d="M12 17L11.4697 17.5303C11.6103 17.671 11.8011 17.75 12 17.75C12.1989 17.75 12.3897 17.671 12.5303 17.5303L12 17ZM12.75 7C12.75 6.58579 12.4142 6.25 12 6.25C11.5858 6.25 11.25 6.58579 11.25 7H12.75ZM8.53033 12.4697C8.23744 12.1768 7.76256 12.1768 7.46967 12.4697C7.17678 12.7626 7.17678 13.2374 7.46967 13.5303L8.53033 12.4697ZM16.5303 13.5303C16.8232 13.2374 16.8232 12.7626 16.5303 12.4697C16.2374 12.1768 15.7626 12.1768 15.4697 12.4697L16.5303 13.5303ZM12.75 17L12.75 7H11.25L11.25 17H12.75ZM7.46967 13.5303L11.4697 17.5303L12.5303 16.4697L8.53033 12.4697L7.46967 13.5303ZM12.5303 17.5303L16.5303 13.5303L15.4697 12.4697L11.4697 16.4697L12.5303 17.5303ZM20.25 12C20.25 16.5563 16.5563 20.25 12 20.25V21.75C17.3848 21.75 21.75 17.3848 21.75 12H20.25ZM12 20.25C7.44365 20.25 3.75 16.5563 3.75 12H2.25C2.25 17.3848 6.61522 21.75 12 21.75V20.25ZM3.75 12C3.75 7.44365 7.44365 3.75 12 3.75V2.25C6.61522 2.25 2.25 6.61522 2.25 12H3.75ZM12 3.75C16.5563 3.75 20.25 7.44365 20.25 12H21.75C21.75 6.61522 17.3848 2.25 12 2.25V3.75Z" fill={props.fillColor} />
    </>
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M12 17L11.4697 17.5303C11.6103 17.671 11.8011 17.75 12 17.75C12.1989 17.75 12.3897 17.671 12.5303 17.5303L12 17ZM12.75 7C12.75 6.58579 12.4142 6.25 12 6.25C11.5858 6.25 11.25 6.58579 11.25 7H12.75ZM8.53033 12.4697C8.23744 12.1768 7.76256 12.1768 7.46967 12.4697C7.17678 12.7626 7.17678 13.2374 7.46967 13.5303L8.53033 12.4697ZM16.5303 13.5303C16.8232 13.2374 16.8232 12.7626 16.5303 12.4697C16.2374 12.1768 15.7626 12.1768 15.4697 12.4697L16.5303 13.5303ZM12.75 17L12.75 7H11.25L11.25 17H12.75ZM7.46967 13.5303L11.4697 17.5303L12.5303 16.4697L8.53033 12.4697L7.46967 13.5303ZM12.5303 17.5303L16.5303 13.5303L15.4697 12.4697L11.4697 16.4697L12.5303 17.5303ZM20.25 12C20.25 16.5563 16.5563 20.25 12 20.25V21.75C17.3848 21.75 21.75 17.3848 21.75 12H20.25ZM12 20.25C7.44365 20.25 3.75 16.5563 3.75 12H2.25C2.25 17.3848 6.61522 21.75 12 21.75V20.25ZM3.75 12C3.75 7.44365 7.44365 3.75 12 3.75V2.25C6.61522 2.25 2.25 6.61522 2.25 12H3.75ZM12 3.75C16.5563 3.75 20.25 7.44365 20.25 12H21.75C21.75 6.61522 17.3848 2.25 12 2.25V3.75Z" fill={props.fillColor} />
);

const ArrowCircleDown: VFC<ArrowCircleDownProps> = (props) => {
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

export default createIcon(ArrowCircleDown);