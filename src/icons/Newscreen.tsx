import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type DuotoneProps = { strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type NewscreenProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M19.9999 4L20.7499 3.99999C20.7499 3.69664 20.5672 3.42317 20.2869 3.30709C20.0067 3.19101 19.6841 3.25517 19.4696 3.46967L19.9999 4ZM9.46961 13.4697C9.17672 13.7626 9.17672 14.2374 9.46961 14.5303C9.7625 14.8232 10.2374 14.8232 10.5303 14.5303L9.46961 13.4697ZM19.25 10C19.25 10.4142 19.5858 10.75 20 10.75C20.4143 10.75 20.75 10.4142 20.75 10L19.25 10ZM17 4.75C17.4142 4.74999 17.75 4.41419 17.75 3.99998C17.75 3.58577 17.4142 3.24999 17 3.25L17 4.75ZM14 3.25009C13.5858 3.25011 13.25 3.5859 13.25 4.00012C13.25 4.41433 13.5858 4.75011 14 4.75009L14 3.25009ZM20.75 14C20.75 13.5858 20.4142 13.25 20 13.25C19.5858 13.25 19.25 13.5858 19.25 14H20.75ZM20 20L20 20.75C20.1989 20.75 20.3897 20.671 20.5303 20.5303C20.671 20.3897 20.75 20.1989 20.75 20H20ZM12 19.25C11.5858 19.25 11.25 19.5858 11.25 20C11.25 20.4142 11.5858 20.75 12 20.75L12 19.25ZM4 20H3.25C3.25 20.1989 3.32902 20.3897 3.46967 20.5303C3.61032 20.671 3.80109 20.75 4 20.75L4 20ZM4 4.00002V3.25002C3.58579 3.25002 3.25 3.5858 3.25 4.00002H4ZM10 4.75002C10.4142 4.75002 10.75 4.41423 10.75 4.00002C10.75 3.5858 10.4142 3.25002 10 3.25002V4.75002ZM7 20.75C7.41422 20.75 7.75 20.4142 7.75 20C7.75 19.5858 7.41421 19.25 7 19.25L7 20.75ZM19.4696 3.46967L9.46961 13.4697L10.5303 14.5303L20.5303 4.53033L19.4696 3.46967ZM20.75 10L20.7499 3.99999L19.2499 4.00001L19.25 10L20.75 10ZM17 3.25L14 3.25009L14 4.75009L17 4.75L17 3.25ZM19.25 14V20H20.75V14H19.25ZM20 19.25L12 19.25L12 20.75L20 20.75L20 19.25ZM4.75 20V4.00002H3.25V20H4.75ZM4 4.75002H10V3.25002H4V4.75002ZM7 19.25L4 19.25L4 20.75L7 20.75L7 19.25Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <Path d="M19.9999 4L9.99994 14M19.9999 4L20 10M19.9999 4L14 4M10 4.00002H4V20H20V14" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M19.9999 4.00001L9.99994 14M19.9999 4.00001L20 10M19.9999 4.00001L14 4M10 4.00001H4V20H20V14" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Newscreen: VFC<NewscreenProps> = (props) => {
    switch (props.variant) {
        case 'broken':
            return <Broken {...props} />;
        case 'duotone':
            return <Duotone {...props} />;
        case 'outline':
            return <Outline {...props} />;
    }
};

export default createIcon(Newscreen);