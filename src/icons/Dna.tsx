import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { color: Color, strokeWidth: number, };
type CurvedProps = { color: Color, strokeWidth: number, };
type DuotoneProps = { color: Color, strokeWidth: number, };
type OutlineProps = { color: Color, strokeWidth: number, };

type DnaProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M20.6777 15.0208L19.2635 16.4351" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M15.0208 20.6777L16.435 19.2635" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M17.8492 12.1924L15.0208 15.0208" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12.1924 6.53555L10.7782 7.94977" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M6.53564 12.1924L7.94986 10.7782" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M3.70709 9.36395L6.53552 6.53553" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M15.7279 21.3848L15.0208 20.6777L12.1924 17.8492C10.6303 16.2871 10.6303 13.7545 12.1924 12.1924C13.7545 10.6303 16.2871 10.6303 17.8492 12.1924L20.6777 15.0208L21.3848 15.7279" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M3 8.65686L3.70711 9.36397L6.53553 12.1924C8.09763 13.7545 10.6303 13.7545 12.1924 12.1924C13.7545 10.6303 13.7545 8.09764 12.1924 6.53554L9.36396 3.70711L8.65685 3.00001" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M20.6777 15.0209L15.0209 20.6777" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12.1924 17.8492L17.8492 12.1924" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12.1924 6.53553L6.53552 12.1924" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M9.36401 3.70716L3.70715 9.36401" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M15.728 21.3848L15.0209 20.6777L12.1924 17.8493C10.6303 16.2872 10.6303 13.7545 12.1924 12.1924C13.7545 10.6303 16.2872 10.6303 17.8493 12.1924L20.6777 15.0209L21.3848 15.728" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M3 8.65686L3.70711 9.36397L6.53553 12.1924C8.09763 13.7545 10.6303 13.7545 12.1924 12.1924C13.7545 10.6303 13.7545 8.09764 12.1924 6.53554L9.36396 3.70711L8.65685 3.00001" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path opacity="0.15" d="M12.0001 12C13.5621 10.4379 16.0948 10.4379 17.6569 12L20.4853 14.8284L14.8285 20.4853L12.0001 17.6568C10.438 16.0947 10.438 13.5621 12.0001 12C10.438 13.5621 7.90529 13.5621 6.3432 12L3.51477 9.17156L9.17162 3.51471L12.0001 6.34314C13.5621 7.90523 13.5621 10.4379 12.0001 12Z" fill={props.color} />
        <Path d="M20.6777 15.0208L15.0209 20.6777" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12.1924 17.8492L17.8492 12.1924" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12.1924 6.53553L6.53552 12.1924" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M9.36401 3.7071L3.70715 9.36395" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M15.728 21.3848L15.0209 20.6777L12.1924 17.8492C10.6303 16.2871 10.6303 13.7545 12.1924 12.1924C13.7545 10.6303 16.2872 10.6303 17.8493 12.1924L20.6777 15.0208L21.3848 15.7279" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M3 8.65686L3.70711 9.36397L6.53553 12.1924C8.09763 13.7545 10.6303 13.7545 12.1924 12.1924C13.7545 10.6303 13.7545 8.09764 12.1924 6.53554L9.36396 3.70711L8.65685 3.00001" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M20.6777 15.0209L15.0209 20.6777" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12.1924 17.8492L17.8492 12.1924" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12.1924 6.53553L6.53552 12.1924" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M9.36401 3.70716L3.70715 9.36401" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M15.728 21.3848L15.0209 20.6777L12.1924 17.8493C10.6303 16.2872 10.6303 13.7545 12.1924 12.1924C13.7545 10.6303 16.2872 10.6303 17.8493 12.1924L20.6777 15.0209L21.3848 15.728" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M3 8.65686L3.70711 9.36397L6.53553 12.1924C8.09763 13.7545 10.6303 13.7545 12.1924 12.1924C13.7545 10.6303 13.7545 8.09764 12.1924 6.53554L9.36396 3.70711L8.65685 3.00001" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Dna: VFC<DnaProps> = (props) => {
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

export default createIcon(Dna);