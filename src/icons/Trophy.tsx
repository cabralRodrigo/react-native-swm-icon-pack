import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type DuotoneProps = { fillColor: Color, strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type TrophyProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M8 20.25C7.58579 20.25 7.25 20.5858 7.25 21C7.25 21.4142 7.58579 21.75 8 21.75V20.25ZM16 21.75C16.4142 21.75 16.75 21.4142 16.75 21C16.75 20.5858 16.4142 20.25 16 20.25V21.75ZM11.25 21C11.25 21.4142 11.5858 21.75 12 21.75C12.4142 21.75 12.75 21.4142 12.75 21H11.25ZM12 17H12.75C12.75 16.5858 12.4142 16.25 12 16.25V17ZM7 4V3.25C6.58579 3.25 6.25 3.58579 6.25 4H7ZM17 4H17.75C17.75 3.58579 17.4142 3.25 17 3.25V4ZM15.4007 14.5496C15.1519 14.8808 15.2187 15.3509 15.5499 15.5997C15.8811 15.8484 16.3513 15.7816 16.6 15.4504L15.4007 14.5496ZM17 5.25C16.5858 5.25 16.25 5.58579 16.25 6C16.25 6.41421 16.5858 6.75 17 6.75V5.25ZM17 10.25C16.5858 10.25 16.25 10.5858 16.25 11C16.25 11.4142 16.5858 11.75 17 11.75V10.25ZM7 11.75C7.41421 11.75 7.75 11.4142 7.75 11C7.75 10.5858 7.41421 10.25 7 10.25V11.75ZM7 6.75C7.41421 6.75 7.75 6.41421 7.75 6C7.75 5.58579 7.41421 5.25 7 5.25V6.75ZM8 21.75H16V20.25H8V21.75ZM12.75 21V17H11.25V21H12.75ZM7 4.75H17V3.25H7V4.75ZM16.25 4V12H17.75V4H16.25ZM7.75 12V4H6.25V12H7.75ZM12 16.25C9.65279 16.25 7.75 14.3472 7.75 12H6.25C6.25 15.1756 8.82436 17.75 12 17.75V16.25ZM16.25 12C16.25 12.9576 15.9342 13.8393 15.4007 14.5496L16.6 15.4504C17.3219 14.4894 17.75 13.2936 17.75 12H16.25ZM20.25 8.5C20.25 9.4665 19.4665 10.25 18.5 10.25V11.75C20.2949 11.75 21.75 10.2949 21.75 8.5H20.25ZM18.5 6.75C19.4665 6.75 20.25 7.5335 20.25 8.5H21.75C21.75 6.70507 20.2949 5.25 18.5 5.25V6.75ZM18.5 5.25H17V6.75H18.5V5.25ZM18.5 10.25H17V11.75H18.5V10.25ZM3.75 8.5C3.75 7.5335 4.5335 6.75 5.5 6.75V5.25C3.70507 5.25 2.25 6.70507 2.25 8.5H3.75ZM5.5 10.25C4.5335 10.25 3.75 9.4665 3.75 8.5H2.25C2.25 10.2949 3.70507 11.75 5.5 11.75V10.25ZM5.5 11.75H7V10.25H5.5V11.75ZM5.5 6.75H7V5.25H5.5V6.75Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <>
        <Path opacity="0.15" d="M7 4H17V12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12V4Z" fill={props.fillColor} />
        <Path d="M8 21H16M12 21V17M12 17C9.23858 17 7 14.7614 7 12V4H17V12C17 14.7614 14.7614 17 12 17ZM17 6H18.5C19.8807 6 21 7.11929 21 8.5C21 9.88071 19.8807 11 18.5 11H17M7 11H5.5C4.11929 11 3 9.88071 3 8.5C3 7.11929 4.11929 6 5.5 6H7" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </>
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M8 21H16M12 21V17M12 17C9.23858 17 7 14.7614 7 12V4H17V12C17 14.7614 14.7614 17 12 17ZM17 6H18.5C19.8807 6 21 7.11929 21 8.5C21 9.88071 19.8807 11 18.5 11H17M7 11H5.5C4.11929 11 3 9.88071 3 8.5C3 7.11929 4.11929 6 5.5 6H7" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Trophy: VFC<TrophyProps> = (props) => {
    switch (props.variant) {
        case 'broken':
            return <Broken {...props} />;
        case 'duotone':
            return <Duotone {...props} />;
        case 'outline':
            return <Outline {...props} />;
    }
};

export default createIcon(Trophy);