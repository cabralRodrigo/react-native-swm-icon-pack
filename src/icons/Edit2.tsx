import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type DuotoneProps = { fillColor: Color, };
type OutlineProps = { fillColor: Color, };

type Edit2Props = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M12 19.25C11.5858 19.25 11.25 19.5858 11.25 20C11.25 20.4142 11.5858 20.75 12 20.75V19.25ZM20.5 20.75C20.9142 20.75 21.25 20.4142 21.25 20C21.25 19.5858 20.9142 19.25 20.5 19.25V20.75ZM4 20H3.25C3.25 20.4142 3.58579 20.75 4 20.75V20ZM4 16L3.46967 15.4697C3.32902 15.6103 3.25 15.8011 3.25 16H4ZM8 20V20.75C8.19891 20.75 8.38968 20.671 8.53033 20.5303L8 20ZM5.53033 15.5303C5.82322 15.2374 5.82322 14.7626 5.53033 14.4697C5.23744 14.1768 4.76256 14.1768 4.46967 14.4697L5.53033 15.5303ZM14.5303 14.5303C14.8232 14.2374 14.8232 13.7626 14.5303 13.4697C14.2374 13.1768 13.7626 13.1768 13.4697 13.4697L14.5303 14.5303ZM17 3L17.5303 2.46967C17.2374 2.17678 16.7626 2.17678 16.4697 2.46967L17 3ZM21 7L21.5303 7.53033C21.8232 7.23744 21.8232 6.76256 21.5303 6.46967L21 7ZM6.96967 11.9697C6.67678 12.2626 6.67678 12.7374 6.96967 13.0303C7.26256 13.3232 7.73744 13.3232 8.03033 13.0303L6.96967 11.9697ZM16.4697 10.4697C16.1768 10.7626 16.1768 11.2374 16.4697 11.5303C16.7626 11.8232 17.2374 11.8232 17.5303 11.5303L16.4697 10.4697ZM12 20.75H20.5V19.25H12V20.75ZM18.5303 9.46967L14.5303 5.46967L13.4697 6.53033L17.4697 10.5303L18.5303 9.46967ZM4.75 20V16H3.25V20H4.75ZM8 19.25H4V20.75H8V19.25ZM4.53033 16.5303L5.53033 15.5303L4.46967 14.4697L3.46967 15.4697L4.53033 16.5303ZM13.4697 13.4697L7.46967 19.4697L8.53033 20.5303L14.5303 14.5303L13.4697 13.4697ZM16.4697 3.53033L20.4697 7.53033L21.5303 6.46967L17.5303 2.46967L16.4697 3.53033ZM20.4697 6.46967L17.4697 9.46967L18.5303 10.5303L21.5303 7.53033L20.4697 6.46967ZM14.5303 6.53033L17.5303 3.53033L16.4697 2.46967L13.4697 5.46967L14.5303 6.53033ZM8.03033 13.0303L14.5303 6.53033L13.4697 5.46967L6.96967 11.9697L8.03033 13.0303ZM17.4697 9.46967L16.4697 10.4697L17.5303 11.5303L18.5303 10.5303L17.4697 9.46967Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <>
        <Path opacity="0.15" d="M4 20H8L18 10L14 6L4 16V20Z" fill={props.fillColor} />
        <Path d="M12 19.25C11.5858 19.25 11.25 19.5858 11.25 20C11.25 20.4142 11.5858 20.75 12 20.75V19.25ZM20.5 20.75C20.9142 20.75 21.25 20.4142 21.25 20C21.25 19.5858 20.9142 19.25 20.5 19.25V20.75ZM4 20H3.25C3.25 20.4142 3.58579 20.75 4 20.75V20ZM4 16L3.46967 15.4697C3.32902 15.6103 3.25 15.8011 3.25 16H4ZM17 3L17.5303 2.46967C17.2374 2.17678 16.7626 2.17678 16.4697 2.46967L17 3ZM21 7L21.5303 7.53033C21.8232 7.23744 21.8232 6.76256 21.5303 6.46967L21 7ZM8 20V20.75C8.19891 20.75 8.38968 20.671 8.53033 20.5303L8 20ZM12 20.75H20.5V19.25H12V20.75ZM4.75 20V16H3.25V20H4.75ZM16.4697 3.53033L20.4697 7.53033L21.5303 6.46967L17.5303 2.46967L16.4697 3.53033ZM8 19.25H4V20.75H8V19.25ZM20.4697 6.46967L17.4697 9.46967L18.5303 10.5303L21.5303 7.53033L20.4697 6.46967ZM17.4697 9.46967L7.46967 19.4697L8.53033 20.5303L18.5303 10.5303L17.4697 9.46967ZM4.53033 16.5303L14.5303 6.53033L13.4697 5.46967L3.46967 15.4697L4.53033 16.5303ZM14.5303 6.53033L17.5303 3.53033L16.4697 2.46967L13.4697 5.46967L14.5303 6.53033ZM18.5303 9.46967L14.5303 5.46967L13.4697 6.53033L17.4697 10.5303L18.5303 9.46967Z" fill={props.fillColor} />
    </>
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M12 19.25C11.5858 19.25 11.25 19.5858 11.25 20C11.25 20.4142 11.5858 20.75 12 20.75V19.25ZM20.5 20.75C20.9142 20.75 21.25 20.4142 21.25 20C21.25 19.5858 20.9142 19.25 20.5 19.25V20.75ZM4 20H3.25C3.25 20.4142 3.58579 20.75 4 20.75V20ZM4 16L3.46967 15.4697C3.32902 15.6103 3.25 15.8011 3.25 16H4ZM17 3L17.5303 2.46967C17.2374 2.17678 16.7626 2.17678 16.4697 2.46967L17 3ZM21 7L21.5303 7.53033C21.8232 7.23744 21.8232 6.76256 21.5303 6.46967L21 7ZM8 20V20.75C8.19891 20.75 8.38968 20.671 8.53033 20.5303L8 20ZM12 20.75H20.5V19.25H12V20.75ZM4.75 20V16H3.25V20H4.75ZM16.4697 3.53033L20.4697 7.53033L21.5303 6.46967L17.5303 2.46967L16.4697 3.53033ZM8 19.25H4V20.75H8V19.25ZM20.4697 6.46967L17.4697 9.46967L18.5303 10.5303L21.5303 7.53033L20.4697 6.46967ZM17.4697 9.46967L7.46967 19.4697L8.53033 20.5303L18.5303 10.5303L17.4697 9.46967ZM4.53033 16.5303L14.5303 6.53033L13.4697 5.46967L3.46967 15.4697L4.53033 16.5303ZM14.5303 6.53033L17.5303 3.53033L16.4697 2.46967L13.4697 5.46967L14.5303 6.53033ZM18.5303 9.46967L14.5303 5.46967L13.4697 6.53033L17.4697 10.5303L18.5303 9.46967Z" fill={props.fillColor} />
);

const Edit2: VFC<Edit2Props> = (props) => {
    switch (props.variant) {
        case 'broken':
            return <Broken {...props} />;
        case 'duotone':
            return <Duotone {...props} />;
        case 'outline':
            return <Outline {...props} />;
    }
};

export default createIcon(Edit2);