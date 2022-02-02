import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type DuotoneProps = { strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type TrendingDownProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M21 17V17.75C21.3033 17.75 21.5768 17.5673 21.6929 17.287C21.809 17.0068 21.7448 16.6842 21.5303 16.4697L21 17ZM13 9L13.5303 8.46967C13.2374 8.17678 12.7626 8.17678 12.4697 8.46967L13 9ZM9 13L8.46967 13.5303C8.76256 13.8232 9.23744 13.8232 9.53033 13.5303L9 13ZM3.53033 6.46967C3.23744 6.17678 2.76256 6.17678 2.46967 6.46967C2.17678 6.76256 2.17678 7.23744 2.46967 7.53033L3.53033 6.46967ZM15 16.25C14.5858 16.25 14.25 16.5858 14.25 17C14.25 17.4142 14.5858 17.75 15 17.75V16.25ZM21.75 11C21.75 10.5858 21.4142 10.25 21 10.25C20.5858 10.25 20.25 10.5858 20.25 11H21.75ZM20.25 14C20.25 14.4142 20.5858 14.75 21 14.75C21.4142 14.75 21.75 14.4142 21.75 14H20.25ZM21.5303 16.4697L13.5303 8.46967L12.4697 9.53033L20.4697 17.5303L21.5303 16.4697ZM12.4697 8.46967L8.46967 12.4697L9.53033 13.5303L13.5303 9.53033L12.4697 8.46967ZM9.53033 12.4697L3.53033 6.46967L2.46967 7.53033L8.46967 13.5303L9.53033 12.4697ZM15 17.75H21V16.25H15V17.75ZM20.25 11V14H21.75V11H20.25Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <Path d="M21 17L13 9L9 13L3 7M21 17H15M21 17V11" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M21 17L13 9L9 13L3 7M21 17H15M21 17V11" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const TrendingDown: VFC<TrendingDownProps> = (props) => {
    switch (props.variant) {
        case 'broken':
            return <Broken {...props} />;
        case 'duotone':
            return <Duotone {...props} />;
        case 'outline':
            return <Outline {...props} />;
    }
};

export default createIcon(TrendingDown);