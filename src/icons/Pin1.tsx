import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type DuotoneProps = { fillColor: Color, };
type OutlineProps = { fillColor: Color, };

type Pin1Props = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M12.75 16C12.75 15.5858 12.4142 15.25 12 15.25C11.5858 15.25 11.25 15.5858 11.25 16H12.75ZM11.25 21C11.25 21.4142 11.5858 21.75 12 21.75C12.4142 21.75 12.75 21.4142 12.75 21H11.25ZM11.25 16V21H12.75V16H11.25ZM16.25 8C16.25 10.3472 14.3472 12.25 12 12.25V13.75C15.1756 13.75 17.75 11.1756 17.75 8H16.25ZM12 12.25C9.65279 12.25 7.75 10.3472 7.75 8H6.25C6.25 11.1756 8.82436 13.75 12 13.75V12.25ZM7.75 8C7.75 5.65279 9.65279 3.75 12 3.75V2.25C8.82436 2.25 6.25 4.82436 6.25 8H7.75ZM12 3.75C14.3472 3.75 16.25 5.65279 16.25 8H17.75C17.75 4.82436 15.1756 2.25 12 2.25V3.75Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <>
        <Path opacity="0.15" d="M17 8C17 10.7614 14.7614 13 12 13C9.23858 13 7 10.7614 7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8Z" fill={props.fillColor} />
        <Path d="M11.25 21C11.25 21.4142 11.5858 21.75 12 21.75C12.4142 21.75 12.75 21.4142 12.75 21H11.25ZM11.25 13V21H12.75V13H11.25ZM16.25 8C16.25 10.3472 14.3472 12.25 12 12.25V13.75C15.1756 13.75 17.75 11.1756 17.75 8H16.25ZM12 12.25C9.65279 12.25 7.75 10.3472 7.75 8H6.25C6.25 11.1756 8.82436 13.75 12 13.75V12.25ZM7.75 8C7.75 5.65279 9.65279 3.75 12 3.75V2.25C8.82436 2.25 6.25 4.82436 6.25 8H7.75ZM12 3.75C14.3472 3.75 16.25 5.65279 16.25 8H17.75C17.75 4.82436 15.1756 2.25 12 2.25V3.75Z" fill={props.fillColor} />
    </>
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M11.25 21C11.25 21.4142 11.5858 21.75 12 21.75C12.4142 21.75 12.75 21.4142 12.75 21H11.25ZM11.25 13V21H12.75V13H11.25ZM16.25 8C16.25 10.3472 14.3472 12.25 12 12.25V13.75C15.1756 13.75 17.75 11.1756 17.75 8H16.25ZM12 12.25C9.65279 12.25 7.75 10.3472 7.75 8H6.25C6.25 11.1756 8.82436 13.75 12 13.75V12.25ZM7.75 8C7.75 5.65279 9.65279 3.75 12 3.75V2.25C8.82436 2.25 6.25 4.82436 6.25 8H7.75ZM12 3.75C14.3472 3.75 16.25 5.65279 16.25 8H17.75C17.75 4.82436 15.1756 2.25 12 2.25V3.75Z" fill={props.fillColor} />
);

const Pin1: VFC<Pin1Props> = (props) => {
    switch (props.variant) {
        case 'broken':
            return <Broken {...props} />;
        case 'duotone':
            return <Duotone {...props} />;
        case 'outline':
            return <Outline {...props} />;
    }
};

export default createIcon(Pin1);