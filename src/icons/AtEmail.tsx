import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { color: Color, strokeWidth: number, };
type CurvedProps = { color: Color, strokeWidth: number, };
type DuotoneProps = { color: Color, strokeWidth: number, };
type OutlineProps = { color: Color, strokeWidth: number, };

type AtEmailProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M8.14282 12C8.14282 14.1303 9.86972 15.8572 12 15.8572C14.1302 15.8572 15.8571 14.1303 15.8571 12C15.8571 9.86979 14.1302 8.14288 12 8.14288C9.86972 8.14288 8.14282 9.86979 8.14282 12Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M15.8571 12V13.2857C15.8571 14.7059 17.0084 15.8571 18.4286 15.8571C19.3408 15.8571 20.1422 15.3821 20.5986 14.6658C20.8528 14.2671 21 13.7936 21 13.2857V12C21 9.3345 19.8412 6.93964 18 5.29168M12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C13.9122 21 15.6851 20.4037 17.1429 19.3868" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M8.14282 12C8.14282 14.1302 9.86972 15.8571 12 15.8571C14.1302 15.8571 15.8571 14.1302 15.8571 12C15.8571 9.86972 14.1302 8.14282 12 8.14282C9.86972 8.14282 8.14282 9.86972 8.14282 12Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M15.8571 12V13.2857C15.8571 14.7059 17.0084 15.8571 18.4286 15.8571C19.3408 15.8571 20.1422 15.3821 20.5986 14.6658C20.8528 14.2671 21 13.7936 21 13.2857V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C13.9122 21 15.6851 20.4037 17.1429 19.3868" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path d="M8.14285 12C8.14285 14.1303 9.86975 15.8572 12 15.8572C14.1302 15.8572 15.8571 14.1303 15.8571 12C15.8571 9.86979 14.1302 8.14288 12 8.14288C9.86975 8.14288 8.14285 9.86979 8.14285 12Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M15.8571 12V13.2857C15.8571 14.7059 17.0084 15.8571 18.4286 15.8571C19.3408 15.8571 20.1422 15.3821 20.5986 14.6658C20.8528 14.2671 21 13.7936 21 13.2857V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C13.9122 21 15.6851 20.4037 17.1429 19.3868" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M8.14286 12C8.14286 14.1302 9.86976 15.8571 12 15.8571C14.1302 15.8571 15.8571 14.1302 15.8571 12C15.8571 9.86972 14.1302 8.14282 12 8.14282C9.86976 8.14282 8.14286 9.86972 8.14286 12Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M15.8571 12V13.2857C15.8571 14.7059 17.0084 15.8571 18.4286 15.8571C19.3408 15.8571 20.1422 15.3821 20.5986 14.6658C20.8528 14.2671 21 13.7936 21 13.2857V12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C13.9122 21 15.6851 20.4037 17.1429 19.3868" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const AtEmail: VFC<AtEmailProps> = (props) => {
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

export default createIcon(AtEmail);