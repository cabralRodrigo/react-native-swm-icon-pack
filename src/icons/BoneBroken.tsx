import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { strokeColor: Color, strokeWidth: number, };
type CurvedProps = { strokeColor: Color, strokeWidth: number, };
type DuotoneProps = { fillColor: Color, strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type BoneBrokenProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M21 8.5C21 7.11929 19.8807 6 18.5 6C18.3061 6 18.1174 6.02207 17.9361 6.06385C17.9779 5.88264 18 5.6939 18 5.5C18 4.11929 16.8807 3 15.5 3C14.1193 3 13 4.11929 13 5.5V5.5C13 6.25898 13.1641 7.05918 12.8266 7.739C12.5834 8.22895 12.2913 8.69428 11.9543 9.12765L12.6847 11.4214L14 11L14.876 12.0431C15.3084 11.7072 15.7726 11.416 16.2614 11.1734C16.9411 10.836 17.7411 11 18.5 11V11C18.6712 11 18.8384 10.9828 18.9999 10.95" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M3 15.5C3 16.8807 4.11929 18 5.5 18C5.6939 18 5.88264 17.9779 6.06385 17.9362C6.02207 18.1174 6 18.3061 6 18.5C6 19.8807 7.11929 21 8.5 21C9.88071 21 11 19.8807 11 18.5V18.5C11 17.7412 10.836 16.9412 11.1734 16.2615C11.4172 15.7703 11.7102 15.3037 12.0483 14.8694L10 14V13L9.12601 11.9556C8.69306 12.2921 8.22824 12.5837 7.73884 12.8267C7.05907 13.1641 6.25893 13 5.5 13V13C5.32877 13 5.16155 13.0172 5 13.05" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M18 5.5C18 5.6939 17.9779 5.88264 17.9361 6.06385C18.1174 6.02207 18.3061 6 18.5 6C19.8807 6 21 7.11929 21 8.5C21 9.88071 19.8807 11 18.5 11C17.7411 11 16.9411 10.836 16.2614 11.1734C15.7726 11.416 15.3084 11.7072 14.876 12.0431L14 11L12.6847 11.4214L11.9543 9.12765C12.2913 8.69428 12.5834 8.22895 12.8266 7.739C13.1641 7.05918 13 6.25898 13 5.5C13 4.11929 14.1193 3 15.5 3C16.8807 3 18 4.11929 18 5.5Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M11 18.5C11 19.8807 9.88071 21 8.5 21C7.11929 21 6 19.8807 6 18.5C6 18.3061 6.02207 18.1174 6.06385 17.9362C5.88264 17.9779 5.6939 18 5.5 18C4.11929 18 3 16.8807 3 15.5C3 14.1193 4.11929 13 5.5 13C6.25893 13 7.05907 13.1641 7.73884 12.8267C8.22824 12.5837 8.69306 12.2921 9.12601 11.9556L10 13V14L12.0483 14.8694C11.7102 15.3037 11.4172 15.7703 11.1734 16.2615C10.836 16.9412 11 17.7412 11 18.5Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <G opacity="0.15">
            <Path d="M18 5.5C18 5.6939 17.9779 5.88264 17.9362 6.06385C18.1174 6.02207 18.3061 6 18.5 6C19.8807 6 21 7.11929 21 8.5C21 9.88071 19.8807 11 18.5 11C17.7411 11 16.9411 10.836 16.2614 11.1734C15.7726 11.416 15.3084 11.7072 14.876 12.0431L14 11L12.6847 11.4214L11.9543 9.12765C12.2913 8.69428 12.5834 8.22895 12.8266 7.739C13.1641 7.05918 13 6.25898 13 5.5C13 4.11929 14.1193 3 15.5 3C16.8807 3 18 4.11929 18 5.5Z" fill={props.fillColor} />
            <Path d="M11 18.5C11 19.8807 9.88071 21 8.5 21C7.11929 21 6 19.8807 6 18.5C6 18.3061 6.02207 18.1174 6.06385 17.9362C5.88264 17.9779 5.6939 18 5.5 18C4.11929 18 3 16.8807 3 15.5C3 14.1193 4.11929 13 5.5 13C6.25893 13 7.05907 13.1641 7.73884 12.8266C8.22824 12.5837 8.69306 12.292 9.12601 11.9555L10 13V14L12.0483 14.8693C11.7102 15.3037 11.4172 15.7702 11.1734 16.2615C10.836 16.9412 11 17.7412 11 18.5Z" fill={props.fillColor} />
        </G>
        <Path d="M18 5.5C18 5.6939 17.978 5.88264 17.9362 6.06385C18.1174 6.02207 18.3062 6 18.5 6C19.8808 6 21 7.11929 21 8.5C21 9.88071 19.8808 11 18.5 11C17.7412 11 16.9411 10.836 16.2614 11.1734C15.7727 11.416 15.3085 11.7072 14.876 12.0431L14 11L12.6848 11.4214L11.9543 9.12765C12.2913 8.69428 12.5834 8.22895 12.8267 7.739C13.1642 7.05918 13 6.25898 13 5.5C13 4.11929 14.1193 3 15.5 3C16.8808 3 18 4.11929 18 5.5Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M11 18.5C11 19.8807 9.88071 21 8.5 21C7.11929 21 6 19.8807 6 18.5C6 18.3061 6.02207 18.1174 6.06385 17.9362C5.88264 17.9779 5.6939 18 5.5 18C4.11929 18 3 16.8807 3 15.5C3 14.1193 4.11929 13 5.5 13C6.25893 13 7.05907 13.1641 7.73884 12.8267C8.22824 12.5837 8.69306 12.2921 9.12601 11.9556L10 13V14L12.0483 14.8694C11.7102 15.3037 11.4172 15.7703 11.1734 16.2615C10.836 16.9412 11 17.7412 11 18.5Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M18 5.5C18 5.6939 17.9779 5.88264 17.9361 6.06385C18.1174 6.02207 18.3061 6 18.5 6C19.8807 6 21 7.11929 21 8.5C21 9.88071 19.8807 11 18.5 11C17.7411 11 16.9411 10.836 16.2614 11.1734C15.7726 11.416 15.3084 11.7072 14.876 12.0431L14 11L12.6847 11.4214L11.9543 9.12765C12.2913 8.69428 12.5834 8.22895 12.8266 7.739C13.1641 7.05918 13 6.25898 13 5.5C13 4.11929 14.1193 3 15.5 3C16.8807 3 18 4.11929 18 5.5Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M11 18.5C11 19.8807 9.88071 21 8.5 21C7.11929 21 6 19.8807 6 18.5C6 18.3061 6.02207 18.1174 6.06385 17.9362C5.88264 17.9779 5.6939 18 5.5 18C4.11929 18 3 16.8807 3 15.5C3 14.1193 4.11929 13 5.5 13C6.25893 13 7.05907 13.1641 7.73884 12.8267C8.22824 12.5837 8.69306 12.2921 9.12601 11.9556L10 13V14L12.0483 14.8694C11.7102 15.3037 11.4172 15.7703 11.1734 16.2615C10.836 16.9412 11 17.7412 11 18.5Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </G>
);

const BoneBroken: VFC<BoneBrokenProps> = (props) => {
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

export default createIcon(BoneBroken);