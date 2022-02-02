import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { color: Color, strokeWidth: number, };
type CurvedProps = { color: Color, strokeWidth: number, };
type DuotoneProps = { color: Color, strokeWidth: number, };
type OutlineProps = { color: Color, strokeWidth: number, };

type LocationMed2Props = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M4.20404 15C3.43827 15.5883 3 16.2714 3 17C3 18.5705 5.03656 19.9297 8 20.5842" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12 21C16.9706 21 21 19.2091 21 17C21 16.2714 20.5617 15.5883 19.796 15" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12 17C8.68629 15.4444 6 12.6587 6 9.22222C6 5.78578 8.68629 3 12 3C15.3137 3 18 5.78578 18 9.22222C18 11.4856 16.8347 13.4667 15.0922 15" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12 6.5V11.5" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M9.5 9H10" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12 9H14.5" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M4.20404 15C3.43827 15.5883 3 16.2714 3 17C3 19.2091 7.02944 21 12 21C16.9706 21 21 19.2091 21 17C21 16.2714 20.5617 15.5883 19.796 15" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12 17C15.3137 15.4444 18 12.6587 18 9.22222C18 5.78578 15.3137 3 12 3C8.68629 3 6 5.78578 6 9.22222C6 12.6587 8.68629 15.4444 12 17Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12 6.5V11.5" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M9.5 9H14.5" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <Path opacity="0.15" d="M18 9.22222C18 12.6587 15.3137 15.4444 12 17C8.68629 15.4444 6 12.6587 6 9.22222C6 5.78578 8.68629 3 12 3C15.3137 3 18 5.78578 18 9.22222Z" fill={props.color} />
        <Path d="M4.20404 15C3.43827 15.5883 3 16.2714 3 17C3 19.2091 7.02944 21 12 21C16.9706 21 21 19.2091 21 17C21 16.2714 20.5617 15.5883 19.796 15" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12 17C15.3137 15.4444 18 12.6587 18 9.22222C18 5.78578 15.3137 3 12 3C8.68629 3 6 5.78578 6 9.22222C6 12.6587 8.68629 15.4444 12 17Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12 6.5V11.5" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M9.5 9H14.5" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M4.20404 15C3.43827 15.5883 3 16.2714 3 17C3 19.2091 7.02944 21 12 21C16.9706 21 21 19.2091 21 17C21 16.2714 20.5617 15.5883 19.796 15" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12 17C15.3137 15.4444 18 12.6587 18 9.22222C18 5.78578 15.3137 3 12 3C8.68629 3 6 5.78578 6 9.22222C6 12.6587 8.68629 15.4444 12 17Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12 6.5V11.5" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M9.5 9H14.5" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const LocationMed2: VFC<LocationMed2Props> = (props) => {
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

export default createIcon(LocationMed2);