import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type CurvedProps = { fillColor: Color, };
type DuotoneProps = { strokeColor: Color, strokeWidth: number, };
type OutlineProps = { fillColor: Color, };

type CheckProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M20.5303 7.53033C20.8232 7.23743 20.8232 6.76256 20.5303 6.46967C20.2374 6.17678 19.7625 6.17678 19.4697 6.46967L20.5303 7.53033ZM10.9697 14.9697C10.6768 15.2626 10.6768 15.7374 10.9697 16.0303C11.2626 16.3232 11.7375 16.3232 12.0304 16.0303L10.9697 14.9697ZM4.53032 12.4697C4.23742 12.1768 3.76255 12.1768 3.46966 12.4697C3.17677 12.7626 3.17678 13.2374 3.46968 13.5303L4.53032 12.4697ZM8.46978 18.5303C8.76268 18.8232 9.23755 18.8232 9.53044 18.5303C9.82333 18.2374 9.82332 17.7625 9.53043 17.4696L8.46978 18.5303ZM19.4697 6.46967L10.9697 14.9697L12.0304 16.0303L20.5303 7.53033L19.4697 6.46967ZM3.46968 13.5303L8.46978 18.5303L9.53043 17.4696L4.53032 12.4697L3.46968 13.5303Z" fill={props.fillColor} />
);

const Curved: VFC<CurvedProps> = (props) => (
    <Path d="M20.5303 7.53033C20.8232 7.23744 20.8232 6.76256 20.5303 6.46967C20.2374 6.17678 19.7626 6.17678 19.4697 6.46967L20.5303 7.53033ZM9.00004 18L8.46972 18.5303C8.76261 18.8232 9.23748 18.8232 9.53037 18.5303L9.00004 18ZM4.53026 12.4697C4.23736 12.1768 3.76249 12.1768 3.4696 12.4697C3.17671 12.7626 3.17672 13.2374 3.46962 13.5303L4.53026 12.4697ZM19.4697 6.46967L8.46971 17.4696L9.53037 18.5303L20.5303 7.53033L19.4697 6.46967ZM3.46962 13.5303L8.46972 18.5303L9.53036 17.4696L4.53026 12.4697L3.46962 13.5303Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <Path d="M20.0001 7L9.0001 18L4 13" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M20.5303 7.53033C20.8232 7.23744 20.8232 6.76256 20.5303 6.46967C20.2374 6.17678 19.7626 6.17678 19.4697 6.46967L20.5303 7.53033ZM9.00004 18L8.46972 18.5303C8.76261 18.8232 9.23748 18.8232 9.53037 18.5303L9.00004 18ZM4.53026 12.4697C4.23736 12.1768 3.76249 12.1768 3.4696 12.4697C3.17671 12.7626 3.17672 13.2374 3.46962 13.5303L4.53026 12.4697ZM19.4697 6.46967L8.46971 17.4696L9.53037 18.5303L20.5303 7.53033L19.4697 6.46967ZM3.46962 13.5303L8.46972 18.5303L9.53036 17.4696L4.53026 12.4697L3.46962 13.5303Z" fill={props.fillColor} />
);

const Check: VFC<CheckProps> = (props) => {
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

export default createIcon(Check);