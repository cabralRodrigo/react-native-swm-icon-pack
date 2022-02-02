import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type DuotoneProps = { fillColor: Color, strokeColor: Color, strokeWidth: number, };
type OutlineProps = { fillColor: Color, };

type Star2Props = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M21 12.75C21.4142 12.75 21.75 12.4142 21.75 12C21.75 11.5858 21.4142 11.25 21 11.25V12.75ZM12.75 3C12.75 2.58579 12.4142 2.25 12 2.25C11.5858 2.25 11.25 2.58579 11.25 3H12.75ZM3 11.25C2.58579 11.25 2.25 11.5858 2.25 12C2.25 12.4142 2.58579 12.75 3 12.75V11.25ZM11.25 21C11.25 21.4142 11.5858 21.75 12 21.75C12.4142 21.75 12.75 21.4142 12.75 21H11.25ZM10.2672 9.50019C10.5434 9.19154 10.5171 8.71739 10.2085 8.44115C9.89986 8.1649 9.42571 8.19117 9.14947 8.49981L10.2672 9.50019ZM21 11.25C16.4437 11.25 12.75 7.55635 12.75 3H11.25C11.25 8.38478 15.6152 12.75 21 12.75V11.25ZM3 12.75C7.55635 12.75 11.25 16.4437 11.25 21H12.75C12.75 15.6152 8.38478 11.25 3 11.25V12.75ZM12.75 21C12.75 16.4437 16.4437 12.75 21 12.75V11.25C15.6152 11.25 11.25 15.6152 11.25 21H12.75ZM9.14947 8.49981C7.63776 10.1888 5.4433 11.25 3 11.25V12.75C5.8877 12.75 8.48295 11.4937 10.2672 9.50019L9.14947 8.49981Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <>
        <Path opacity="0.15" d="M12 3C12 7.97056 16.0294 12 21 12C16.0294 12 12 16.0294 12 21C12 16.0294 7.97056 12 3 12C7.97056 12 12 7.97056 12 3Z" fill={props.fillColor} />
        <Path d="M12 3C12 7.97056 16.0294 12 21 12C16.0294 12 12 16.0294 12 21C12 16.0294 7.97056 12 3 12C7.97056 12 12 7.97056 12 3Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </>
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M21 12.75C21.4142 12.75 21.75 12.4142 21.75 12C21.75 11.5858 21.4142 11.25 21 11.25V12.75ZM12.75 3C12.75 2.58579 12.4142 2.25 12 2.25C11.5858 2.25 11.25 2.58579 11.25 3H12.75ZM3 11.25C2.58579 11.25 2.25 11.5858 2.25 12C2.25 12.4142 2.58579 12.75 3 12.75V11.25ZM11.25 21C11.25 21.4142 11.5858 21.75 12 21.75C12.4142 21.75 12.75 21.4142 12.75 21H11.25ZM21 11.25C16.4437 11.25 12.75 7.55635 12.75 3H11.25C11.25 8.38478 15.6152 12.75 21 12.75V11.25ZM11.25 3C11.25 7.55635 7.55635 11.25 3 11.25V12.75C8.38478 12.75 12.75 8.38478 12.75 3H11.25ZM3 12.75C7.55635 12.75 11.25 16.4437 11.25 21H12.75C12.75 15.6152 8.38478 11.25 3 11.25V12.75ZM12.75 21C12.75 16.4437 16.4437 12.75 21 12.75V11.25C15.6152 11.25 11.25 15.6152 11.25 21H12.75Z" fill={props.fillColor} />
);

const Star2: VFC<Star2Props> = (props) => {
    switch (props.variant) {
        case 'broken':
            return <Broken {...props} />;
        case 'duotone':
            return <Duotone {...props} />;
        case 'outline':
            return <Outline {...props} />;
    }
};

export default createIcon(Star2);