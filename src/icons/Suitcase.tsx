import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { color: Color, strokeWidth: number, };
type CurvedProps = { color: Color, strokeWidth: number, };
type DuotoneProps = { color: Color, strokeWidth: number, };
type OutlineProps = { color: Color, strokeWidth: number, };

type SuitcaseProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M12 12V14V16" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M4 17V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V12" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M20 8C20 6.89543 19.1046 6 18 6H6C4.89543 6 4 6.89543 4 8V12C4 13.1046 4.89543 14 6 14H12H18C19.1046 14 20 13.1046 20 12V11" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M15 6V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V6" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M12 12C12 12 12 13.219 12 14C12 14.781 12 16 12 16" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M4.06127 11C4 13 8 14 12 14C16 14 20 13 19.9387 11" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M19.1111 19.2222C19.5556 18.8333 20 16.1111 20 13C20 12.3069 19.9779 11.633 19.9387 11C19.802 8.79172 19.4565 7.08002 19.1111 6.77778C18.6667 6.38889 15 6.09322 15 6.09322C14.0786 6.0345 13.059 6 12 6C10.941 6 9.92143 6.0345 9 6.09322C9 6.09322 5.33333 6.38889 4.88889 6.77778C4.54346 7.08002 4.19804 8.79172 4.06127 11C4.02206 11.633 4 12.3069 4 13C4 16.1111 4.44444 18.8333 4.88889 19.2222C5.33333 19.6111 8.44444 20 12 20C15.5556 20 18.6667 19.6111 19.1111 19.2222Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M9 6.09322V5C9 3.22496 10.6373 3 12 3C13.3627 3 15 3.22496 15 5V6.09322" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path opacity="0.15" d="M4 8C4 6.89543 4.89543 6 6 6H18C19.1046 6 20 6.89543 20 8V12C20 13.1046 19.1046 14 18 14H6C4.89543 14 4 13.1046 4 12V8Z" fill={props.color} />
        <Path d="M12 12V14V16" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M4 12V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V12" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M18 6H6C4.89543 6 4 6.89543 4 8V12C4 13.1046 4.89543 14 6 14H12H18C19.1046 14 20 13.1046 20 12V8C20 6.89543 19.1046 6 18 6Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M15 6V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V6" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M12 12V14V16" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M4 12V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V12" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M18 6H6C4.89543 6 4 6.89543 4 8V12C4 13.1046 4.89543 14 6 14H12H18C19.1046 14 20 13.1046 20 12V8C20 6.89543 19.1046 6 18 6Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M15 6V5C15 3.89543 14.1046 3 13 3H11C9.89543 3 9 3.89543 9 5V6" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Suitcase: VFC<SuitcaseProps> = (props) => {
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

export default createIcon(Suitcase);