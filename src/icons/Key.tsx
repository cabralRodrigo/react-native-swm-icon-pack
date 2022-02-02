import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { color: Color, strokeWidth: number, };
type CurvedProps = { color: Color, strokeWidth: number, };
type DuotoneProps = { color: Color, strokeWidth: number, };
type OutlineProps = { color: Color, strokeWidth: number, };

type KeyProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M18 6L20 8L17 11L15 9" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M11.6915 12.3086L21.0001 3" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M8.49878 20C6.01485 20 4 17.9833 4 15.5C4 13.0167 6.01485 11 8.49878 11C10.9851 11 13 13.0167 13 15.5C13 16.4247 12.7206 17.2847 12.2415 18" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M18 6L20 8L17 11L15 9" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M11.6915 12.3086L21.0001 3" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path fillRule="evenodd" clipRule="evenodd" d="M13 15.5C13 17.9833 10.9851 20 8.49878 20C6.01485 20 4 17.9833 4 15.5C4 13.0167 6.01485 11 8.49878 11C10.9851 11 13 13.0167 13 15.5Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path opacity="0.15" fillRule="evenodd" clipRule="evenodd" d="M13 15.5C13 17.9833 10.9851 20 8.49878 20C6.01485 20 4 17.9833 4 15.5C4 13.0167 6.01485 11 8.49878 11C10.9851 11 13 13.0167 13 15.5Z" fill={props.color} />
        <Path d="M18 6L20 8L17 11L15 9" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M11.6915 12.3086L21.0001 3" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path fillRule="evenodd" clipRule="evenodd" d="M13 15.5C13 17.9833 10.9851 20 8.49878 20C6.01485 20 4 17.9833 4 15.5C4 13.0167 6.01485 11 8.49878 11C10.9851 11 13 13.0167 13 15.5Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M18 6L20 8L17 11L15 9" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M11.6915 12.3086L21.0001 3" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path fillRule="evenodd" clipRule="evenodd" d="M13 15.5C13 17.9833 10.9851 20 8.49878 20C6.01485 20 4 17.9833 4 15.5C4 13.0167 6.01485 11 8.49878 11C10.9851 11 13 13.0167 13 15.5Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Key: VFC<KeyProps> = (props) => {
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

export default createIcon(Key);