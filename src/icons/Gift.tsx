import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { color: Color, strokeWidth: number, };
type CurvedProps = { color: Color, strokeWidth: number, };
type DuotoneProps = { color: Color, strokeWidth: number, };
type OutlineProps = { color: Color, strokeWidth: number, };

type GiftProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <G>
        <Path d="M19 10.0802H5V20.0802H19V14" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M5 10.0802H19H20V7.0802H4V10.0802H5Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12 7.0802C12.8333 5.24687 14.9999 1.5802 16.9999 3.5802C18.9999 5.5802 14.5 6.91353 12 7.0802Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12 7.0802C11.1667 5.24687 8.99999 1.5802 6.99999 3.5802C4.99999 5.5802 9.49999 6.91353 12 7.0802Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Curved: VFC<CurvedProps> = (props) => (
    <G>
        <Path d="M18.5 9.88501C18.5 9.88501 19 11.6111 19 14.5C19 17.3889 18.6111 19.9167 18.2222 20.2778C17.8333 20.6389 15.1111 21 12 21C8.88889 21 6.16667 20.6389 5.77778 20.2778C5.38889 19.9167 5 17.3889 5 14.5C5 11.6111 5.5 9.88501 5.5 9.88501" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12 7C8.44444 7 5.33333 7.08333 4.88889 7.16667C4.44444 7.25 4 7.83333 4 8.5C4 9.16667 4.44444 9.75 4.88889 9.83333C4.98211 9.85081 5.19265 9.86829 5.5 9.885C6.65798 9.94796 9.19021 10 12 10C14.8098 10 17.342 9.94796 18.5 9.885C18.8074 9.86829 19.0179 9.85081 19.1111 9.83333C19.5556 9.75 20 9.16667 20 8.5C20 7.83333 19.5556 7.25 19.1111 7.16667C18.6667 7.08333 15.5556 7 12 7Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M11.8659 6.84997C12.415 4.80106 15.562 1.25185 17.0621 3.84997C18.5622 6.44821 13.915 7.39914 11.8659 6.84997Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12.0623 6.84997C11.5132 4.80106 8.36619 1.25185 6.86617 3.84997C5.36607 6.44821 10.0132 7.39914 12.0623 6.84997Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <G>
        <G opacity="0.15">
            <Path d="M5 10H19V20H5V10Z" fill={props.color} />
            <Path d="M4 7H20V10H4V7Z" fill={props.color} />
        </G>
        <Path d="M19 20.0802H5V10.0802H19V20.0802Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M5 10.0802H19H20V7.0802H4V10.0802H5Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12 7.0802C12.8333 5.24687 14.9999 1.5802 16.9999 3.5802C18.9999 5.5802 14.5 6.91353 12 7.0802Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12 7.0802C11.1667 5.24687 8.99999 1.5802 6.99999 3.5802C4.99999 5.5802 9.49999 6.91353 12 7.0802Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Outline: VFC<OutlineProps> = (props) => (
    <G>
        <Path d="M19 20.0802H5V10.0802H19V20.0802Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M5 10.0802H19H20V7.0802H4V10.0802H5Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12 7.0802C12.8333 5.24687 14.9999 1.5802 16.9999 3.5802C18.9999 5.5802 14.5 6.91353 12 7.0802Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
        <Path d="M12 7.0802C11.1667 5.24687 8.99999 1.5802 6.99999 3.5802C4.99999 5.5802 9.49999 6.91353 12 7.0802Z" stroke={props.color} strokeWidth={props.strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </G>
);

const Gift: VFC<GiftProps> = (props) => {
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

export default createIcon(Gift);