import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { strokeColor: Color, strokeWidth: number, };
type CurvedProps = { strokeColor: Color, strokeWidth: number, };
type DuotoneProps = { fillColor: Color, strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type MedsProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M9 14H10" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M12 14H15" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M12 11V17" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M8 7V9L6.21115 12.5777C6.07229 12.8554 6 13.1616 6 13.4721V19C6 20.1046 6.89543 21 8 21" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M16 7V9L17.7889 12.5777C17.9277 12.8554 18 13.1616 18 13.4721V19C18 20.1046 17.1046 21 16 21H12" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M11 4H8C7.44772 4 7 4.44772 7 5V6C7 6.55228 7.44772 7 8 7H16C16.5523 7 17 6.55228 17 6V5C17 4.44772 16.5523 4 16 4H15" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M9 14H15" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M12 11V17" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M6 13.4722C6 13.1617 6.07229 12.8554 6.21115 12.5777L7.05649 10.887C7.67697 9.64608 8 8.2777 8 6.89026M16 6.89026C16 8.2777 16.323 9.64608 16.9435 10.887L17.7889 12.5777C17.9277 12.8554 18 13.1617 18 13.4722V17C18 19.2092 16.2091 21 14 21H10C7.79086 21 6 19.2092 6 17V13.5" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M12 4C9.77778 4 7.83333 4.08333 7.55556 4.16667C7.27778 4.25 7 4.83333 7 5.5C7 6.16667 7.27778 6.75 7.55556 6.83333C7.61994 6.85265 7.77385 6.87196 8 6.89024C8.74959 6.95082 10.2928 7 12 7C13.7072 7 15.2504 6.95082 16 6.89024C16.2262 6.87196 16.3801 6.85265 16.4444 6.83333C16.7222 6.75 17 6.16667 17 5.5C17 4.83333 16.7222 4.25 16.4444 4.16667C16.1667 4.08333 14.2222 4 12 4Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path opacity="0.15" d="M6 13.4721C6 13.1616 6.07229 12.8554 6.21115 12.5777L8 9V7H16V9L17.7889 12.5777C17.9277 12.8554 18 13.1616 18 13.4721V19C18 20.1046 17.1046 21 16 21H8C6.89543 21 6 20.1046 6 19V13.4721Z" fill={props.fillColor} />
        <Path d="M9 14H15" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M12 11V17" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M8 7V9L6.21115 12.5777C6.07229 12.8554 6 13.1616 6 13.4721V19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19V13.4721C18 13.1616 17.9277 12.8554 17.7889 12.5777L16 9V7" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M7 5C7 4.44772 7.44772 4 8 4H16C16.5523 4 17 4.44772 17 5V6C17 6.55228 16.5523 7 16 7H8C7.44772 7 7 6.55228 7 6V5Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M9 14H15" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M12 11V17" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M8 7V9L6.21115 12.5777C6.07229 12.8554 6 13.1616 6 13.4721V19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19V13.4721C18 13.1616 17.9277 12.8554 17.7889 12.5777L16 9V7" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M7 5C7 4.44772 7.44772 4 8 4H16C16.5523 4 17 4.44772 17 5V6C17 6.55228 16.5523 7 16 7H8C7.44772 7 7 6.55228 7 6V5Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Meds: VFC<MedsProps> = (props) => {
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

export default createIcon(Meds);