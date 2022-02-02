import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type DuotoneProps = { fillColor: Color, };
type OutlineProps = { fillColor: Color, };

type BasketProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M3 10L2.46967 9.46967C2.29235 9.64699 2.21539 9.90119 2.26456 10.1471L3 10ZM21 10L21.7354 10.1471C21.7795 9.92676 21.7225 9.69827 21.58 9.52451C21.4376 9.35074 21.2247 9.25 21 9.25V10ZM19 20V20.75C19.3575 20.75 19.6653 20.4977 19.7354 20.1471L19 20ZM5 19.25C4.58579 19.25 4.25 19.5858 4.25 20C4.25 20.4142 4.58579 20.75 5 20.75V19.25ZM3.26456 15.1471C3.3458 15.5533 3.74092 15.8167 4.14709 15.7354C4.55326 15.6542 4.81667 15.2591 4.73544 14.8529L3.26456 15.1471ZM9.53033 4.53033C9.82322 4.23744 9.82322 3.76256 9.53033 3.46967C9.23744 3.17678 8.76256 3.17678 8.46967 3.46967L9.53033 4.53033ZM17.4697 7.53033C17.7626 7.82322 18.2374 7.82322 18.5303 7.53033C18.8232 7.23744 18.8232 6.76256 18.5303 6.46967L17.4697 7.53033ZM15.5303 3.46967C15.2374 3.17678 14.7626 3.17678 14.4697 3.46967C14.1768 3.76256 14.1768 4.23744 14.4697 4.53033L15.5303 3.46967ZM3 10.75H21V9.25H3V10.75ZM20.2646 9.85291L18.2646 19.8529L19.7354 20.1471L21.7354 10.1471L20.2646 9.85291ZM19 19.25H5V20.75H19V19.25ZM4.73544 14.8529L3.73544 9.85291L2.26456 10.1471L3.26456 15.1471L4.73544 14.8529ZM3.53033 10.5303L9.53033 4.53033L8.46967 3.46967L2.46967 9.46967L3.53033 10.5303ZM18.5303 6.46967L15.5303 3.46967L14.4697 4.53033L17.4697 7.53033L18.5303 6.46967Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <>
        <Path opacity="0.15" d="M3 10H21L19 20H5L3 10Z" fill={props.fillColor} />
        <Path d="M3 10L2.46967 9.46967C2.29235 9.64699 2.21539 9.90119 2.26456 10.1471L3 10ZM21 10L21.7354 10.1471C21.7846 9.90119 21.7076 9.64699 21.5303 9.46967L21 10ZM19 20V20.75C19.3575 20.75 19.6653 20.4977 19.7354 20.1471L19 20ZM5 20L4.26456 20.1471C4.33468 20.4977 4.64249 20.75 5 20.75V20ZM9.53033 4.53033C9.82322 4.23744 9.82322 3.76256 9.53033 3.46967C9.23744 3.17678 8.76256 3.17678 8.46967 3.46967L9.53033 4.53033ZM15.5303 3.46967C15.2374 3.17678 14.7626 3.17678 14.4697 3.46967C14.1768 3.76256 14.1768 4.23744 14.4697 4.53033L15.5303 3.46967ZM3 10.75H21V9.25H3V10.75ZM20.2646 9.85291L18.2646 19.8529L19.7354 20.1471L21.7354 10.1471L20.2646 9.85291ZM19 19.25H5V20.75H19V19.25ZM5.73544 19.8529L3.73544 9.85291L2.26456 10.1471L4.26456 20.1471L5.73544 19.8529ZM3.53033 10.5303L9.53033 4.53033L8.46967 3.46967L2.46967 9.46967L3.53033 10.5303ZM21.5303 9.46967L15.5303 3.46967L14.4697 4.53033L20.4697 10.5303L21.5303 9.46967Z" fill={props.fillColor} />
    </>
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M3 10L2.46967 9.46967C2.29235 9.64699 2.21539 9.90119 2.26456 10.1471L3 10ZM21 10L21.7354 10.1471C21.7846 9.90119 21.7076 9.64699 21.5303 9.46967L21 10ZM19 20V20.75C19.3575 20.75 19.6653 20.4977 19.7354 20.1471L19 20ZM5 20L4.26456 20.1471C4.33468 20.4977 4.64249 20.75 5 20.75V20ZM9.53033 4.53033C9.82322 4.23744 9.82322 3.76256 9.53033 3.46967C9.23744 3.17678 8.76256 3.17678 8.46967 3.46967L9.53033 4.53033ZM15.5303 3.46967C15.2374 3.17678 14.7626 3.17678 14.4697 3.46967C14.1768 3.76256 14.1768 4.23744 14.4697 4.53033L15.5303 3.46967ZM3 10.75H21V9.25H3V10.75ZM20.2646 9.85291L18.2646 19.8529L19.7354 20.1471L21.7354 10.1471L20.2646 9.85291ZM19 19.25H5V20.75H19V19.25ZM5.73544 19.8529L3.73544 9.85291L2.26456 10.1471L4.26456 20.1471L5.73544 19.8529ZM3.53033 10.5303L9.53033 4.53033L8.46967 3.46967L2.46967 9.46967L3.53033 10.5303ZM21.5303 9.46967L15.5303 3.46967L14.4697 4.53033L20.4697 10.5303L21.5303 9.46967Z" fill={props.fillColor} />
);

const Basket: VFC<BasketProps> = (props) => {
    switch (props.variant) {
        case 'broken':
            return <Broken {...props} />;
        case 'duotone':
            return <Duotone {...props} />;
        case 'outline':
            return <Outline {...props} />;
    }
};

export default createIcon(Basket);