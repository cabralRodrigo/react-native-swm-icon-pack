import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { color: Color, strokeWidth: number, };
type CurvedProps = { color: Color, strokeWidth: number, };
type DuotoneProps = { color: Color, strokeWidth: number, };
type OutlineProps = { color: Color, strokeWidth: number, };

type HourglassProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M17 17.1056C17 16.7107 16.8831 16.3247 16.6641 15.9962L14.7396 13.1094C14.2917 12.4376 14.2917 11.5624 14.7396 10.8906L16.6641 8.00385C16.8831 7.67531 17 7.2893 17 6.89445V4" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M7 6.89444C7 7.28929 7.11688 7.67531 7.3359 8.00384L9.2604 10.8906C9.70827 11.5624 9.70827 12.4376 9.2604 13.1094L7.3359 15.9961C7.11688 16.3247 7 16.7107 7 17.1055V20" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M5 20H7H17H19" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M5 4H7H17H19" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M7 20.25V17.1056C7 16.7107 7.11688 16.3247 7.3359 15.9962L9.2604 13.1094C9.70827 12.4376 9.70827 11.5624 9.2604 10.8906L7.3359 8.00385C7.11688 7.67531 7 7.2893 7 6.89445V3.75" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M17 20.25V17.1056C17 16.7107 16.8831 16.3247 16.6641 15.9962L14.7396 13.1094C14.2917 12.4376 14.2917 11.5624 14.7396 10.8906L16.6641 8.00385C16.8831 7.67531 17 7.2893 17 6.89445V3.75" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M5 20C5 20 5.75 20.125 7 20.25C8.25 20.375 10 20.5 12 20.5C14 20.5 15.75 20.375 17 20.25C18.25 20.125 19 20 19 20" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M5 4C5 4 5.75 3.875 7 3.75C8.25 3.625 10 3.5 12 3.5C14 3.5 15.75 3.625 17 3.75C18.25 3.875 19 4 19 4" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path opacity="0.15" d="M7 6.89445V4H17V6.89445C17 7.2893 16.8831 7.67531 16.6641 8.00385L14.7396 10.8906C14.2917 11.5624 14.2917 12.4376 14.7396 13.1094L16.6641 15.9962C16.8831 16.3247 17 16.7107 17 17.1056V20H7V17.1056C7 16.7107 7.11688 16.3247 7.3359 15.9962L9.2604 13.1094C9.70827 12.4376 9.70827 11.5624 9.2604 10.8906L7.3359 8.00385C7.11688 7.67531 7 7.2893 7 6.89445Z" fill={props.color} />
        <Path d="M17 4V6.89445C17 7.2893 16.8831 7.67531 16.6641 8.00385L14.7396 10.8906C14.2917 11.5624 14.2917 12.4376 14.7396 13.1094L16.6641 15.9962C16.8831 16.3247 17 16.7107 17 17.1056V20" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M7 4V6.89445C7 7.2893 7.11688 7.67531 7.3359 8.00385L9.2604 10.8906C9.70827 11.5624 9.70827 12.4376 9.2604 13.1094L7.3359 15.9962C7.11688 16.3247 7 16.7107 7 17.1056V20" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M5 20H7H17H19" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M5 4H7H17H19" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M17 4V6.89445C17 7.2893 16.8831 7.67531 16.6641 8.00385L14.7396 10.8906C14.2917 11.5624 14.2917 12.4376 14.7396 13.1094L16.6641 15.9962C16.8831 16.3247 17 16.7107 17 17.1056V20" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M7 4V6.89445C7 7.2893 7.11688 7.67531 7.3359 8.00385L9.2604 10.8906C9.70827 11.5624 9.70827 12.4376 9.2604 13.1094L7.3359 15.9962C7.11688 16.3247 7 16.7107 7 17.1056V20" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M5 20H7H17H19" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M5 4H7H17H19" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Hourglass: VFC<HourglassProps> = (props) => {
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

export default createIcon(Hourglass);