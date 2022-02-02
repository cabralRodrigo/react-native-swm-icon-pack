import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type DuotoneProps = { fillColor: Color, strokeColor: Color, strokeWidth: number, };
type OutlineProps = { fillColor: Color, };

type Home2Props = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M19.75 10C19.75 9.58579 19.4142 9.25 19 9.25C18.5858 9.25 18.25 9.58579 18.25 10L19.75 10ZM19 20V20.75C19.1989 20.75 19.3897 20.671 19.5303 20.5303C19.671 20.3897 19.75 20.1989 19.75 20H19ZM9 19.25C8.58579 19.25 8.25 19.5858 8.25 20C8.25 20.4142 8.58579 20.75 9 20.75V19.25ZM12 3L12.5303 2.46967C12.3897 2.32902 12.1989 2.25 12 2.25C11.8011 2.25 11.6103 2.32902 11.4697 2.46967L12 3ZM5 10L4.46967 9.46967C4.32902 9.61032 4.25 9.80109 4.25 10L5 10ZM4.25 20C4.25 20.4142 4.58579 20.75 5 20.75C5.41422 20.75 5.75 20.4142 5.75 20H4.25ZM14.9697 7.03033C15.2626 7.32322 15.7374 7.32322 16.0303 7.03033C16.3232 6.73744 16.3232 6.26256 16.0303 5.96967L14.9697 7.03033ZM18.25 10L18.25 20H19.75L19.75 10L18.25 10ZM19 19.25H9V20.75H19V19.25ZM11.4697 2.46967L4.46967 9.46967L5.53033 10.5303L12.5303 3.53033L11.4697 2.46967ZM5.75 20L5.75 10L4.25 10L4.25 20H5.75ZM16.0303 5.96967L12.5303 2.46967L11.4697 3.53033L14.9697 7.03033L16.0303 5.96967Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <>
        <Path opacity="0.15" d="M5 10L12 3L19 10L19 20H5L5 10Z" fill={props.fillColor} />
        <Path d="M4.99999 10L12 3L19 10L19 20H5L4.99999 10Z" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </>
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M12 3L12.5303 2.46967C12.3897 2.32902 12.1989 2.25 12 2.25C11.8011 2.25 11.6103 2.32902 11.4697 2.46967L12 3ZM5 10L4.46967 9.46967C4.32901 9.61032 4.25 9.80109 4.25 10L5 10ZM19 10L19.75 10C19.75 9.80109 19.671 9.61032 19.5303 9.46967L19 10ZM19 20V20.75C19.1989 20.75 19.3897 20.671 19.5303 20.5303C19.671 20.3897 19.75 20.1989 19.75 20H19ZM5 20H4.25C4.25 20.4142 4.58579 20.75 5 20.75V20ZM11.4697 2.46967L4.46967 9.46967L5.53033 10.5303L12.5303 3.53033L11.4697 2.46967ZM19.5303 9.46967L12.5303 2.46967L11.4697 3.53033L18.4697 10.5303L19.5303 9.46967ZM18.25 10L18.25 20H19.75L19.75 10L18.25 10ZM19 19.25H5V20.75H19V19.25ZM5.75 20L5.75 10L4.25 10L4.25 20H5.75Z" fill={props.fillColor} />
);

const Home2: VFC<Home2Props> = (props) => {
    switch (props.variant) {
        case 'broken':
            return <Broken {...props} />;
        case 'duotone':
            return <Duotone {...props} />;
        case 'outline':
            return <Outline {...props} />;
    }
};

export default createIcon(Home2);