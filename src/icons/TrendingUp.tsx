import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type DuotoneProps = { strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type TrendingUpProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M21 7H21.75C21.75 6.69665 21.5673 6.42318 21.287 6.30709C21.0068 6.191 20.6842 6.25517 20.4697 6.46967L21 7ZM13 15L12.4697 15.5303C12.7626 15.8232 13.2374 15.8232 13.5303 15.5303L13 15ZM9 11L9.53033 10.4697C9.23744 10.1768 8.76256 10.1768 8.46967 10.4697L9 11ZM2.46967 16.4697C2.17678 16.7626 2.17678 17.2374 2.46967 17.5303C2.76256 17.8232 3.23744 17.8232 3.53033 17.5303L2.46967 16.4697ZM20.25 13C20.25 13.4142 20.5858 13.75 21 13.75C21.4142 13.75 21.75 13.4142 21.75 13H20.25ZM15 6.25C14.5858 6.25 14.25 6.58579 14.25 7C14.25 7.41421 14.5858 7.75 15 7.75V6.25ZM18 7.75C18.4142 7.75 18.75 7.41421 18.75 7C18.75 6.58579 18.4142 6.25 18 6.25V7.75ZM20.4697 6.46967L12.4697 14.4697L13.5303 15.5303L21.5303 7.53033L20.4697 6.46967ZM13.5303 14.4697L9.53033 10.4697L8.46967 11.5303L12.4697 15.5303L13.5303 14.4697ZM8.46967 10.4697L2.46967 16.4697L3.53033 17.5303L9.53033 11.5303L8.46967 10.4697ZM21.75 13V7H20.25V13H21.75ZM15 7.75H18V6.25H15V7.75Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <Path d="M21 7L13 15L9 11L3 17M21 7H15M21 7V13" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M21 7L13 15L9 11L3 17M21 7H15M21 7V13" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const TrendingUp: VFC<TrendingUpProps> = (props) => {
    switch (props.variant) {
        case 'broken':
            return <Broken {...props} />;
        case 'duotone':
            return <Duotone {...props} />;
        case 'outline':
            return <Outline {...props} />;
    }
};

export default createIcon(TrendingUp);