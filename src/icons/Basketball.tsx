import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { strokeColor: Color, strokeWidth: number, };
type CurvedProps = { strokeColor: Color, strokeWidth: number, };
type DuotoneProps = { fillColor: Color, strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type BasketballProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M4.75313 6.66208C3.65127 8.15549 3 10.0017 3 12C3 13.9931 3.64785 15.8348 4.74444 17.3261C6.38269 19.5541 9.02249 21 12 21C14.9665 21 17.5977 19.5648 19.2373 17.3509C20.345 15.8552 21 14.0041 21 12C21 10.008 20.3529 8.1672 19.2573 6.6763C17.6192 4.44695 14.9786 3 12 3C9.02775 3 6.39201 4.4408 4.75313 6.66208Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M19.2573 6.6763C18.0306 7.47481 17.0319 8.31524 16.4567 9.7039C16.1552 10.4319 16 11.2121 16 12C16 12.7879 16.1552 13.5682 16.4567 14.2961C17.0356 15.6937 18.0451 16.4972 19.2373 17.3509" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M4.75313 6.66208C5.97869 7.42811 6.97956 8.34295 7.54328 9.7039C7.84481 10.4319 8 11.2121 8 12C8 12.7879 7.84481 13.5681 7.54328 14.2961C6.96817 15.6846 5.9687 16.5246 4.74445 17.3261" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M8 12H3" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M21 12H12" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M12 17V3" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M4.75313 6.66208C3.65127 8.15549 3 10.0017 3 12C3 13.9931 3.64785 15.8348 4.74444 17.3261C6.38269 19.5541 9.02249 21 12 21C14.9665 21 17.5977 19.5648 19.2373 17.3509C20.345 15.8552 21 14.0041 21 12C21 10.008 20.3529 8.1672 19.2573 6.6763C17.6192 4.44695 14.9786 3 12 3C9.02775 3 6.39201 4.4408 4.75313 6.66208Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M19.2574 6.67627C18.0306 7.47477 17.0319 8.31521 16.4567 9.70387C16.1552 10.4318 16 11.212 16 12C16 12.7879 16.1552 13.5681 16.4567 14.2961C17.0356 15.6937 18.0451 16.4972 19.2373 17.3508" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M4.75313 6.66211C5.97869 7.42814 6.97956 8.34298 7.54328 9.70393C7.84481 10.4319 8 11.2121 8 12C8 12.788 7.84481 13.5682 7.54328 14.2961C6.96817 15.6846 5.9687 16.5246 4.74445 17.3262" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M21 12H3" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M12 21V3" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path opacity="0.15" d="M19.2498 6.66602C17.3196 7.66328 16 9.67755 16 12C16 14.3225 17.3196 16.3367 19.2498 17.334C17.6111 19.5575 14.974 21 12 21C9.02601 21 6.38892 19.5575 4.75024 17.334C6.68049 16.3367 8.00003 14.3225 8.00003 12C8.00003 9.67754 6.6805 7.66328 4.75025 6.66602C6.38892 4.44251 9.02602 3 12 3C14.974 3 17.6111 4.44251 19.2498 6.66602Z" fill={props.fillColor} />
        <Path d="M4.75313 6.66208C3.65127 8.15549 3 10.0017 3 12C3 13.9931 3.64785 15.8348 4.74444 17.3261C6.38269 19.5541 9.02249 21 12 21C14.9665 21 17.5977 19.5648 19.2373 17.3509C20.345 15.8552 21 14.0041 21 12C21 10.008 20.3529 8.1672 19.2573 6.6763C17.6192 4.44695 14.9786 3 12 3C9.02775 3 6.39201 4.4408 4.75313 6.66208Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M19.2574 6.6763C18.0306 7.47481 17.0319 8.31524 16.4567 9.7039C16.1552 10.4319 16 11.2121 16 12C16 12.7879 16.1552 13.5682 16.4567 14.2961C17.0356 15.6937 18.0451 16.4972 19.2373 17.3509" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M4.75307 6.66208C5.97863 7.42811 6.9795 8.34295 7.54322 9.7039C7.84475 10.4319 7.99994 11.2121 7.99994 12C7.99994 12.7879 7.84475 13.5681 7.54322 14.2961C6.9681 15.6846 5.96864 16.5246 4.74438 17.3261" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M21 12H3" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M12 21V3" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M4.75313 6.66208C3.65127 8.15549 3 10.0017 3 12C3 13.9931 3.64785 15.8348 4.74444 17.3261C6.38269 19.5541 9.02249 21 12 21C14.9665 21 17.5977 19.5648 19.2373 17.3509C20.345 15.8552 21 14.0041 21 12C21 10.008 20.3529 8.1672 19.2573 6.6763C17.6192 4.44695 14.9786 3 12 3C9.02775 3 6.39201 4.4408 4.75313 6.66208Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M19.2574 6.67627C18.0306 7.47477 17.0319 8.31521 16.4567 9.70387C16.1552 10.4318 16 11.212 16 12C16 12.7879 16.1552 13.5681 16.4567 14.2961C17.0356 15.6937 18.0451 16.4972 19.2373 17.3508" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M4.75313 6.66211C5.97869 7.42814 6.97956 8.34298 7.54328 9.70393C7.84481 10.4319 8 11.2121 8 12C8 12.788 7.84481 13.5682 7.54328 14.2961C6.96817 15.6846 5.9687 16.5246 4.74445 17.3262" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M21 12H3" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M12 21V3" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Basketball: VFC<BasketballProps> = (props) => {
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

export default createIcon(Basketball);