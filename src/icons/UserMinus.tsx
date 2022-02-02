import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { strokeColor: Color, strokeWidth: number, };
type CurvedProps = { strokeColor: Color, strokeWidth: number, };
type DuotoneProps = { fillColor: Color, strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type UserMinusProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M17 11L23 11" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M8 15C5.79086 15 4 16.7909 4 19V21H12H20V19C20 16.7909 18.2091 15 16 15H12" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11C14.2091 11 16 9.20914 16 7C16 6.27143 15.8052 5.58835 15.4649 5" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M17 12L23 12" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M17.5 21.0001H6.5C5.11929 21.0001 4 19.8808 4 18.5001C4 14.4194 10 14.5001 12 14.5001C14 14.5001 20 14.4194 20 18.5001C20 19.8808 18.8807 21.0001 17.5 21.0001Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path opacity="0.15" d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" fill={props.fillColor} />
        <Path d="M17 11L23 11" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M16 15H8C5.79086 15 4 16.7909 4 19V21H12H20V19C20 16.7909 18.2091 15 16 15Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M17 11L23 11" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M16 15H8C5.79086 15 4 16.7909 4 19V21H12H20V19C20 16.7909 18.2091 15 16 15Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const UserMinus: VFC<UserMinusProps> = (props) => {
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

export default createIcon(UserMinus);