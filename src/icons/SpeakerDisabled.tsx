import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { color: Color, strokeWidth: number, };
type CurvedProps = { color: Color, strokeWidth: number, };
type DuotoneProps = { color: Color, strokeWidth: number, };
type OutlineProps = { color: Color, strokeWidth: number, };

type SpeakerDisabledProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M10.6 5L13 3V8" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M3 3L21 21" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M7 16H5C3.89543 16 3 15.1046 3 14V10C3 9.63571 3.09739 9.29417 3.26756 9M13 18V21L10 18.5" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M5 8.14307C3.4148 8.66137 3 9.49393 3 10.5V13.5C3 14.6046 3.5 15.5 5.5 16C7.5 16.5 9 21 12 21C12.6098 21 13.0337 19.3265 13.2717 17" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M3 3L21 21" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M9 4.60756C9.84604 3.71548 10.8038 3 12 3C12.7739 3 13.2484 5.69533 13.4233 9" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path d="M10.6 5L13 3V8" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M3 3L21 21" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M13 18V21L7 16H5C3.89543 16 3 15.1046 3 14V10C3 9.63571 3.09739 9.29417 3.26756 9" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M10.6 5L13 3V8" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M3 3L21 21" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M13 18V21L7 16H5C3.89543 16 3 15.1046 3 14V10C3 9.63571 3.09739 9.29417 3.26756 9" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const SpeakerDisabled: VFC<SpeakerDisabledProps> = (props) => {
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

export default createIcon(SpeakerDisabled);