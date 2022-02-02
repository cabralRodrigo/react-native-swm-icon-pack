import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type CurvedProps = { fillColor: Color, };
type DuotoneProps = { fillColor: Color, };
type OutlineProps = { fillColor: Color, };

type InfoSmallProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M11.25 7.01002C11.25 7.42424 11.5858 7.76002 12 7.76002C12.4142 7.76002 12.75 7.42424 12.75 7.01002L11.25 7.01002ZM12.75 7.00003C12.75 6.58582 12.4142 6.25003 12 6.25003C11.5858 6.25003 11.25 6.58582 11.25 7.00003L12.75 7.00003ZM11.25 17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17H11.25ZM12.75 10C12.75 9.5858 12.4142 9.25001 12 9.25001C11.5858 9.25001 11.25 9.5858 11.25 10H12.75ZM12.75 7.01002V7.00003L11.25 7.00003V7.01002L12.75 7.01002ZM12.75 17L12.75 10H11.25L11.25 17H12.75Z" fill={props.fillColor} />
);

const Curved: VFC<CurvedProps> = (props) => (
    <Path d="M11.25 7.01002C11.25 7.42424 11.5858 7.76002 12 7.76002C12.4142 7.76002 12.75 7.42424 12.75 7.01002L11.25 7.01002ZM12.75 7.00003C12.75 6.58582 12.4142 6.25003 12 6.25003C11.5858 6.25003 11.25 6.58582 11.25 7.00003L12.75 7.00003ZM11.25 17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17H11.25ZM12.75 10C12.75 9.5858 12.4142 9.25001 12 9.25001C11.5858 9.25001 11.25 9.5858 11.25 10H12.75ZM12.75 7.01002V7.00003L11.25 7.00003V7.01002L12.75 7.01002ZM12.75 17L12.75 10H11.25L11.25 17H12.75Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <Path d="M11.25 7.01002C11.25 7.42424 11.5858 7.76002 12 7.76002C12.4142 7.76002 12.75 7.42424 12.75 7.01002L11.25 7.01002ZM12.75 7.00003C12.75 6.58582 12.4142 6.25003 12 6.25003C11.5858 6.25003 11.25 6.58582 11.25 7.00003L12.75 7.00003ZM11.25 17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17H11.25ZM12.75 10C12.75 9.5858 12.4142 9.25001 12 9.25001C11.5858 9.25001 11.25 9.5858 11.25 10H12.75ZM12.75 7.01002V7.00003L11.25 7.00003V7.01002L12.75 7.01002ZM12.75 17L12.75 10H11.25L11.25 17H12.75Z" fill={props.fillColor} />
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M11.25 7.00999C11.25 7.42421 11.5858 7.75999 12 7.75999C12.4142 7.75999 12.75 7.42421 12.75 7.00999L11.25 7.00999ZM12.75 7C12.75 6.58579 12.4142 6.25 12 6.25C11.5858 6.25 11.25 6.58579 11.25 7L12.75 7ZM11.25 17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17H11.25ZM12.75 10C12.75 9.58579 12.4142 9.25 12 9.25C11.5858 9.25 11.25 9.58579 11.25 10H12.75ZM12.75 7.00999V7L11.25 7V7.00999L12.75 7.00999ZM12.75 17L12.75 10H11.25L11.25 17H12.75Z" fill={props.fillColor} />
);

const InfoSmall: VFC<InfoSmallProps> = (props) => {
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

export default createIcon(InfoSmall);