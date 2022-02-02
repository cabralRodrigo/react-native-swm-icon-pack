import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type DuotoneProps = { fillColor: Color, };
type OutlineProps = { fillColor: Color, };

type Cart2Props = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M7.25 11.01C7.25 11.4242 7.58579 11.76 8 11.76C8.41421 11.76 8.75 11.4242 8.75 11.01H7.25ZM8.75 11C8.75 10.5858 8.41421 10.25 8 10.25C7.58579 10.25 7.25 10.5858 7.25 11H8.75ZM15.25 11.01C15.25 11.4242 15.5858 11.76 16 11.76C16.4142 11.76 16.75 11.4242 16.75 11.01H15.25ZM16.75 11C16.75 10.5858 16.4142 10.25 16 10.25C15.5858 10.25 15.25 10.5858 15.25 11H16.75ZM14.8284 4.17157L14.2981 4.7019L14.8284 4.17157ZM9.17157 4.17157L9.7019 4.7019V4.7019L9.17157 4.17157ZM8 8V8.75C8.41421 8.75 8.75 8.41421 8.75 8H8ZM19.1528 9.83391L18.4054 9.89619L19.1528 9.83391ZM12 7.25C11.5858 7.25 11.25 7.58579 11.25 8C11.25 8.41421 11.5858 8.75 12 8.75V7.25ZM18.7526 14.0623C18.787 14.4751 19.1495 14.7818 19.5623 14.7474C19.9751 14.713 20.2818 14.3505 20.2474 13.9377L18.7526 14.0623ZM4.18051 17.8339L4.92792 17.8962L4.18051 17.8339ZM4.84718 9.83391L5.59458 9.89619L4.84718 9.83391ZM20.5669 17.7716C20.5325 17.3588 20.17 17.0521 19.7572 17.0865C19.3444 17.1209 19.0377 17.4834 19.0721 17.8962L20.5669 17.7716ZM8.75 11.01V11H7.25V11.01H8.75ZM16.75 11.01V11H15.25V11.01H16.75ZM16.75 7C16.75 5.74022 16.2496 4.53204 15.3588 3.64124L14.2981 4.7019C14.9076 5.3114 15.25 6.13805 15.25 7H16.75ZM15.3588 3.64124C14.468 2.75045 13.2598 2.25 12 2.25V3.75C12.862 3.75 13.6886 4.09241 14.2981 4.7019L15.3588 3.64124ZM12 2.25C10.7402 2.25 9.53204 2.75044 8.64124 3.64124L9.7019 4.7019C10.3114 4.09241 11.138 3.75 12 3.75V2.25ZM8.64124 3.64124C7.75045 4.53204 7.25 5.74022 7.25 7H8.75C8.75 6.13805 9.09241 5.3114 9.7019 4.7019L8.64124 3.64124ZM7.25 7V8H8.75V7H7.25ZM15.25 7V8H16.75V7H15.25ZM17.1597 8.75C17.8098 8.75 18.3514 9.24833 18.4054 9.89619L19.9002 9.77163C19.7815 8.34632 18.59 7.25 17.1597 7.25V8.75ZM16 8.75H17.1597V7.25H16V8.75ZM12 8.75H16V7.25H12V8.75ZM18.4054 9.89619L18.7526 14.0623L20.2474 13.9377L19.9002 9.77163L18.4054 9.89619ZM17.8264 19.25H6.1736V20.75H17.8264V19.25ZM4.92792 17.8962L5.59458 9.89619L4.09977 9.77163L3.4331 17.7716L4.92792 17.8962ZM6.1736 19.25C5.4423 19.25 4.86719 18.625 4.92792 17.8962L3.4331 17.7716C3.29949 19.3749 4.56474 20.75 6.1736 20.75V19.25ZM19.0721 17.8962C19.1328 18.625 18.5577 19.25 17.8264 19.25V20.75C19.4353 20.75 20.7005 19.3749 20.5669 17.7716L19.0721 17.8962ZM6.84027 7.25C5.41002 7.25 4.21854 8.34632 4.09977 9.77163L5.59458 9.89619C5.64857 9.24833 6.19016 8.75 6.84027 8.75V7.25ZM6.84027 8.75H8V7.25H6.84027V8.75Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <>
        <Path opacity="0.15" d="M4.97043 9.81038C5.06819 8.78391 5.93031 8 6.96142 8H17.0386C18.0697 8 18.9318 8.78391 19.0296 9.81038L19.7915 17.8104C19.9033 18.9845 18.9799 20 17.8005 20H6.19952C5.02004 20 4.0967 18.9846 4.20853 17.8104L4.97043 9.81038Z" fill={props.fillColor} />
        <Path d="M7.25 11.01C7.25 11.4242 7.58579 11.76 8 11.76C8.41421 11.76 8.75 11.4242 8.75 11.01H7.25ZM8.75 11C8.75 10.5858 8.41421 10.25 8 10.25C7.58579 10.25 7.25 10.5858 7.25 11H8.75ZM15.25 11.01C15.25 11.4242 15.5858 11.76 16 11.76C16.4142 11.76 16.75 11.4242 16.75 11.01H15.25ZM16.75 11C16.75 10.5858 16.4142 10.25 16 10.25C15.5858 10.25 15.25 10.5858 15.25 11H16.75ZM14.8284 4.17157L14.2981 4.7019L14.8284 4.17157ZM9.17157 4.17157L9.7019 4.7019V4.7019L9.17157 4.17157ZM19.1528 9.83391L18.4054 9.89619L19.1528 9.83391ZM19.8195 17.8339L20.5669 17.7716L19.8195 17.8339ZM4.18051 17.8339L4.92792 17.8962L4.18051 17.8339ZM4.84718 9.83391L5.59458 9.89619L4.84718 9.83391ZM8.75 11.01V11H7.25V11.01H8.75ZM16.75 11.01V11H15.25V11.01H16.75ZM16.75 7C16.75 5.74022 16.2496 4.53204 15.3588 3.64124L14.2981 4.7019C14.9076 5.3114 15.25 6.13805 15.25 7H16.75ZM15.3588 3.64124C14.468 2.75045 13.2598 2.25 12 2.25V3.75C12.862 3.75 13.6886 4.09241 14.2981 4.7019L15.3588 3.64124ZM12 2.25C10.7402 2.25 9.53204 2.75044 8.64124 3.64124L9.7019 4.7019C10.3114 4.09241 11.138 3.75 12 3.75V2.25ZM8.64124 3.64124C7.75045 4.53204 7.25 5.74022 7.25 7H8.75C8.75 6.13805 9.09241 5.3114 9.7019 4.7019L8.64124 3.64124ZM7.25 7V8H8.75V7H7.25ZM15.25 7V8H16.75V7H15.25ZM18.4054 9.89619L19.0721 17.8962L20.5669 17.7716L19.9002 9.77163L18.4054 9.89619ZM17.8264 19.25H6.1736V20.75H17.8264V19.25ZM4.92792 17.8962L5.59458 9.89619L4.09977 9.77163L3.4331 17.7716L4.92792 17.8962ZM6.1736 19.25C5.4423 19.25 4.86719 18.625 4.92792 17.8962L3.4331 17.7716C3.29949 19.3749 4.56474 20.75 6.1736 20.75V19.25ZM19.0721 17.8962C19.1328 18.625 18.5577 19.25 17.8264 19.25V20.75C19.4353 20.75 20.7005 19.3749 20.5669 17.7716L19.0721 17.8962ZM17.1597 8.75C17.8098 8.75 18.3514 9.24833 18.4054 9.89619L19.9002 9.77163C19.7815 8.34632 18.59 7.25 17.1597 7.25V8.75ZM6.84027 7.25C5.41002 7.25 4.21854 8.34632 4.09977 9.77163L5.59458 9.89619C5.64857 9.24833 6.19016 8.75 6.84027 8.75V7.25ZM6.84027 8.75H8V7.25H6.84027V8.75ZM8 8.75H16V7.25H8V8.75ZM16 8.75H17.1597V7.25H16V8.75Z" fill={props.fillColor} />
    </>
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M7.25 11.01C7.25 11.4242 7.58579 11.76 8 11.76C8.41421 11.76 8.75 11.4242 8.75 11.01H7.25ZM8.75 11C8.75 10.5858 8.41421 10.25 8 10.25C7.58579 10.25 7.25 10.5858 7.25 11H8.75ZM15.25 11.01C15.25 11.4242 15.5858 11.76 16 11.76C16.4142 11.76 16.75 11.4242 16.75 11.01H15.25ZM16.75 11C16.75 10.5858 16.4142 10.25 16 10.25C15.5858 10.25 15.25 10.5858 15.25 11H16.75ZM14.8284 4.17157L14.2981 4.7019L14.8284 4.17157ZM9.17157 4.17157L9.7019 4.7019V4.7019L9.17157 4.17157ZM19.1528 9.83391L18.4054 9.89619L19.1528 9.83391ZM19.8195 17.8339L20.5669 17.7716L19.8195 17.8339ZM4.18051 17.8339L4.92792 17.8962L4.18051 17.8339ZM4.84718 9.83391L5.59458 9.89619L4.84718 9.83391ZM8.75 11.01V11H7.25V11.01H8.75ZM16.75 11.01V11H15.25V11.01H16.75ZM16.75 7C16.75 5.74022 16.2496 4.53204 15.3588 3.64124L14.2981 4.7019C14.9076 5.3114 15.25 6.13805 15.25 7H16.75ZM15.3588 3.64124C14.468 2.75045 13.2598 2.25 12 2.25V3.75C12.862 3.75 13.6886 4.09241 14.2981 4.7019L15.3588 3.64124ZM12 2.25C10.7402 2.25 9.53204 2.75044 8.64124 3.64124L9.7019 4.7019C10.3114 4.09241 11.138 3.75 12 3.75V2.25ZM8.64124 3.64124C7.75045 4.53204 7.25 5.74022 7.25 7H8.75C8.75 6.13805 9.09241 5.3114 9.7019 4.7019L8.64124 3.64124ZM7.25 7V8H8.75V7H7.25ZM15.25 7V8H16.75V7H15.25ZM18.4054 9.89619L19.0721 17.8962L20.5669 17.7716L19.9002 9.77163L18.4054 9.89619ZM17.8264 19.25H6.1736V20.75H17.8264V19.25ZM4.92792 17.8962L5.59458 9.89619L4.09977 9.77163L3.4331 17.7716L4.92792 17.8962ZM6.1736 19.25C5.4423 19.25 4.86719 18.625 4.92792 17.8962L3.4331 17.7716C3.29949 19.3749 4.56474 20.75 6.1736 20.75V19.25ZM19.0721 17.8962C19.1328 18.625 18.5577 19.25 17.8264 19.25V20.75C19.4353 20.75 20.7005 19.3749 20.5669 17.7716L19.0721 17.8962ZM17.1597 8.75C17.8098 8.75 18.3514 9.24833 18.4054 9.89619L19.9002 9.77163C19.7815 8.34632 18.59 7.25 17.1597 7.25V8.75ZM6.84027 7.25C5.41002 7.25 4.21854 8.34632 4.09977 9.77163L5.59458 9.89619C5.64857 9.24833 6.19016 8.75 6.84027 8.75V7.25ZM6.84027 8.75H8V7.25H6.84027V8.75ZM8 8.75H16V7.25H8V8.75ZM16 8.75H17.1597V7.25H16V8.75Z" fill={props.fillColor} />
);

const Cart2: VFC<Cart2Props> = (props) => {
    switch (props.variant) {
        case 'broken':
            return <Broken {...props} />;
        case 'duotone':
            return <Duotone {...props} />;
        case 'outline':
            return <Outline {...props} />;
    }
};

export default createIcon(Cart2);