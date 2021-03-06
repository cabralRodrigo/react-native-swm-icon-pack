import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { color: Color, strokeWidth: number, };
type CurvedProps = { color: Color, strokeWidth: number, };
type DuotoneProps = { color: Color, strokeWidth: number, };
type OutlineProps = { color: Color, strokeWidth: number, };

type SyringeProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M5.34324 18.6569L3.22192 20.7782" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M6.05028 15.1214L3.92896 17.2427L6.75738 20.0711L8.8787 17.9498" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M9.93945 9.81806L14.5356 5.22186L18.7783 9.4645L17.2429 10.9999" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M6.0503 15.1215L8.87873 17.9499M6.75757 13L5.34326 14.4143L9.5859 18.657L15 13.2429" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M18.7781 5.22192L16.6567 7.34324" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M16.6567 3.10059L18.7781 5.22191L20.8994 7.34323" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M5.34326 18.6568L3.22194 20.7782M5.28704 18.6007L5.39911 18.7128" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M5.96438 15.0353L5.23094 15.8307C4.50351 16.6196 4.52826 17.842 5.28704 18.6007L5.3991 18.7128C6.15797 19.4717 7.38051 19.4963 8.16935 18.7687L8.96438 18.0353" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M13.1214 6.63602C13.9025 5.85497 15.1688 5.85497 15.9499 6.63602L17.3641 8.05023C18.1451 8.83128 18.1451 10.0976 17.3641 10.8787L10.2074 18.0353C9.86416 18.3786 9.30764 18.3786 8.96439 18.0353L5.96439 15.0353C5.62135 14.6923 5.62135 14.1361 5.96439 13.7931L13.1214 6.63602Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M18.7781 5.22186L16.6567 7.34318" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M16.6567 3.10052L18.7781 5.22185L20.8994 7.34317" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path opacity="0.15" d="M14.5357 5.2218L18.7783 9.46444L9.5859 18.6568L5.34326 14.4142L14.5357 5.2218Z" fill={props.color} />
        <Path d="M5.34324 18.6569L3.22192 20.7782" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M6.05028 15.1214L3.92896 17.2427L6.75738 20.0711L8.8787 17.9498" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M6.0503 15.1214L8.87873 17.9498M14.5357 5.22186L18.7783 9.4645L9.5859 18.6569L5.34326 14.4143L14.5357 5.22186Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M18.7781 5.22192L16.6567 7.34324" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M16.6567 3.10059L18.7781 5.22191L20.8994 7.34323" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M5.34324 18.6569L3.22192 20.7782" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M6.05028 15.1213L3.92896 17.2427L6.75738 20.0711L8.8787 17.9498" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M6.0503 15.1215L8.87873 17.9499M14.5357 5.22192L18.7783 9.46456L9.5859 18.657L5.34326 14.4143L14.5357 5.22192Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M18.7781 5.22192L16.6567 7.34324" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M16.6567 3.10059L18.7781 5.22191L20.8994 7.34323" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Syringe: VFC<SyringeProps> = (props) => {
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

export default createIcon(Syringe);