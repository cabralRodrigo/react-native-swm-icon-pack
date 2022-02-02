import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { strokeColor: Color, strokeWidth: number, };
type CurvedProps = { strokeColor: Color, strokeWidth: number, };
type DuotoneProps = { strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type RefreshSmallProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M7 14C7.50963 15.0039 8.37532 15.8345 9.46665 16.3667C10.558 16.8989 11.8158 17.1038 13.0506 16.9505C15.0687 16.7 16.4753 15.3884 18 14.1814" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M18 17V14H15" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M17 10C16.4904 8.99609 15.6247 8.16548 14.5334 7.63331C13.442 7.10113 12.1842 6.89624 10.9494 7.04949C8.93127 7.29995 7.52468 8.61162 6 9.81861" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M6 7V10H9" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M7 14C7.50963 15.0039 8.37532 15.8345 9.46665 16.3667C10.558 16.8989 11.8158 17.1038 13.0506 16.9505C15.0687 16.7 16.4753 15.3884 18 14.1814" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M18 17V14H15" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M17 10C16.4904 8.99609 15.6247 8.16548 14.5334 7.63331C13.442 7.10113 12.1842 6.89624 10.9494 7.04949C8.93127 7.29995 7.52468 8.61162 6 9.81861" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M6 7V10H9" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path d="M7 14C7.50963 15.0039 8.37532 15.8345 9.46665 16.3667C10.558 16.8989 11.8158 17.1038 13.0506 16.9505C15.0687 16.7 16.4753 15.3884 18 14.1814" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M18 17V14H15" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M17 10C16.4904 8.99609 15.6247 8.16548 14.5334 7.63331C13.442 7.10113 12.1842 6.89624 10.9494 7.04949C8.93127 7.29995 7.52468 8.61162 6 9.81861" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M6 7V10H9" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M7 14C7.50963 15.0039 8.37532 15.8345 9.46665 16.3667C10.558 16.8989 11.8158 17.1038 13.0506 16.9505C15.0687 16.7 16.4753 15.3884 18 14.1814" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M18 17V14H15" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M17 10C16.4904 8.99609 15.6247 8.16548 14.5334 7.63331C13.442 7.10113 12.1842 6.89624 10.9494 7.04949C8.93127 7.29995 7.52468 8.61162 6 9.81861" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M6 7V10H9" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const RefreshSmall: VFC<RefreshSmallProps> = (props) => {
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

export default createIcon(RefreshSmall);