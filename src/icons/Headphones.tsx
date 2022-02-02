import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type DuotoneProps = { fillColor: Color, strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type HeadphonesProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M3 21H2.25C2.25 21.4142 2.58579 21.75 3 21.75V21ZM6 13.25C5.58579 13.25 5.25 13.5858 5.25 14C5.25 14.4142 5.58579 14.75 6 14.75V13.25ZM18 21.75C18.4142 21.75 18.75 21.4142 18.75 21C18.75 20.5858 18.4142 20.25 18 20.25V21.75ZM20.25 21C20.25 21.4142 20.5858 21.75 21 21.75C21.4142 21.75 21.75 21.4142 21.75 21H20.25ZM7.25 16V19H8.75V16H7.25ZM6 20.25H3V21.75H6V20.25ZM7.25 19C7.25 19.6904 6.69036 20.25 6 20.25V21.75C7.51878 21.75 8.75 20.5188 8.75 19H7.25ZM6 14.75C6.69036 14.75 7.25 15.3096 7.25 16H8.75C8.75 14.4812 7.51878 13.25 6 13.25V14.75ZM16.75 19V16H15.25V19H16.75ZM18 14.75H21V13.25H18V14.75ZM16.75 16C16.75 15.3096 17.3096 14.75 18 14.75V13.25C16.4812 13.25 15.25 14.4812 15.25 16H16.75ZM18 20.25C17.3096 20.25 16.75 19.6904 16.75 19H15.25C15.25 20.5188 16.4812 21.75 18 21.75V20.25ZM3.75 12C3.75 7.44365 7.44365 3.75 12 3.75V2.25C6.61522 2.25 2.25 6.61522 2.25 12H3.75ZM12 3.75C16.5563 3.75 20.25 7.44365 20.25 12H21.75C21.75 6.61522 17.3848 2.25 12 2.25V3.75ZM20.25 12V14H21.75V12H20.25ZM20.25 14V21H21.75V14H20.25ZM2.25 12V21H3.75V12H2.25Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <>
        <G opacity="0.15">
            <Path d="M3 14H6C7.10457 14 8 14.8954 8 16V19C8 20.1046 7.10457 21 6 21H3V14Z" fill={props.fillColor} />
            <Path d="M21 21H18C16.8954 21 16 20.1046 16 19V16C16 14.8954 16.8954 14 18 14H21V21Z" fill={props.fillColor} />
        </G>
        <Path d="M3 14H6C7.10457 14 8 14.8954 8 16V19C8 20.1046 7.10457 21 6 21H3V14ZM3 14V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V14M21 14H18C16.8954 14 16 14.8954 16 16V19C16 20.1046 16.8954 21 18 21H21V14Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </>
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M3 14H6C7.10457 14 8 14.8954 8 16V19C8 20.1046 7.10457 21 6 21H3V14ZM3 14V12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12V14M21 14H18C16.8954 14 16 14.8954 16 16V19C16 20.1046 16.8954 21 18 21H21V14Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Headphones: VFC<HeadphonesProps> = (props) => {
    switch (props.variant) {
        case 'broken':
            return <Broken {...props} />;
        case 'duotone':
            return <Duotone {...props} />;
        case 'outline':
            return <Outline {...props} />;
    }
};

export default createIcon(Headphones);