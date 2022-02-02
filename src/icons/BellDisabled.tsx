import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { strokeColor: Color, strokeWidth: number, };
type CurvedProps = { strokeColor: Color, strokeWidth: number, };
type DuotoneProps = { strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type BellDisabledProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M8.68335 4C9.65929 3.35265 10.8115 3 12 3C13.5913 3 15.1174 3.63214 16.2427 4.75736C17.3679 5.88258 18 7.4087 18 9C18 10.7834 18.7068 13.2736 19.2801 15" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M3 3L21 21" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M5.96047 10C5.67984 13.6403 4 17 4 17H12.5" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M14.7716 19.1481C14.6209 19.512 14.3999 19.8427 14.1213 20.1213C13.8427 20.3999 13.512 20.6209 13.1481 20.7716C12.7841 20.9224 12.394 21 12 21C11.606 21 11.2159 20.9224 10.8519 20.7716C10.488 20.6209 10.1573 20.3999 9.87868 20.1213C9.6001 19.8427 9.37913 19.512 9.22836 19.1481C9.0776 18.7841 9 18.394 9 18V17" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M8 4.58208C9.06151 3.86265 10.4633 3.5 12 3.5C15.3137 3.5 18 5.18629 18 8.5C18 10.4392 18.7051 12.6133 19.4316 14.3389C19.6624 14.8871 19.6566 15.4786 19.4745 16" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M5.84215 10.21C5.59387 11.6487 5.08678 13.1073 4.56874 14.3378C3.96555 15.7706 4.97779 17.4996 6.53238 17.4996H13" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M9 17.5V18.5C9 20.1569 10.3431 21 12 21C13.3572 21 14.5039 20.4343 14.8743 19.319" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M3 3.5L21 21.5" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path d="M8.68332 4C9.65926 3.35265 10.8114 3 12 3C13.5913 3 15.1174 3.63214 16.2426 4.75736C17.3678 5.88258 18 7.4087 18 9C18 10.7834 18.7068 13.2736 19.28 15" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M3 3L21 21" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M5.96047 10C5.67984 13.6403 4 17 4 17H12.5" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M14.7716 19.1481C14.6209 19.512 14.3999 19.8427 14.1213 20.1213C13.8427 20.3999 13.512 20.6209 13.1481 20.7716C12.7841 20.9224 12.394 21 12 21C11.606 21 11.2159 20.9224 10.8519 20.7716C10.488 20.6209 10.1573 20.3999 9.87868 20.1213C9.6001 19.8427 9.37913 19.512 9.22836 19.1481C9.0776 18.7841 9 18.394 9 18V17" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M8.68333 4C9.65927 3.35265 10.8115 3 12 3C13.5913 3 15.1174 3.63214 16.2426 4.75736C17.3679 5.88258 18 7.4087 18 9C18 10.7834 18.7068 13.2736 19.28 15" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M3 3L21 21" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M5.96047 10C5.67984 13.6403 4 17 4 17H12.5" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M14.7716 19.1481C14.6209 19.512 14.3999 19.8427 14.1213 20.1213C13.8427 20.3999 13.512 20.6209 13.1481 20.7716C12.7841 20.9224 12.394 21 12 21C11.606 21 11.2159 20.9224 10.8519 20.7716C10.488 20.6209 10.1573 20.3999 9.87868 20.1213C9.6001 19.8427 9.37913 19.512 9.22836 19.1481C9.0776 18.7841 9 18.394 9 18V17" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const BellDisabled: VFC<BellDisabledProps> = (props) => {
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

export default createIcon(BellDisabled);