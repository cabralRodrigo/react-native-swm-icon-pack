import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type DuotoneProps = { fillColor: Color, };
type OutlineProps = { fillColor: Color, };

type UserWarningProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M20.75 7C20.75 6.58579 20.4142 6.25 20 6.25C19.5858 6.25 19.25 6.58579 19.25 7H20.75ZM19.25 10.5C19.25 10.9142 19.5858 11.25 20 11.25C20.4142 11.25 20.75 10.9142 20.75 10.5H19.25ZM20.75 13C20.75 12.5858 20.4142 12.25 20 12.25C19.5858 12.25 19.25 12.5858 19.25 13H20.75ZM19.25 13.01C19.25 13.4242 19.5858 13.76 20 13.76C20.4142 13.76 20.75 13.4242 20.75 13.01H19.25ZM20 21V21.75C20.4142 21.75 20.75 21.4142 20.75 21H20ZM4 21H3.25C3.25 21.4142 3.58579 21.75 4 21.75V21ZM8 15.75C8.41421 15.75 8.75 15.4142 8.75 15C8.75 14.5858 8.41421 14.25 8 14.25V15.75ZM12 14.25C11.5858 14.25 11.25 14.5858 11.25 15C11.25 15.4142 11.5858 15.75 12 15.75V14.25ZM12 3.75C12.4142 3.75 12.75 3.41421 12.75 3C12.75 2.58579 12.4142 2.25 12 2.25V3.75ZM16.1141 4.62446C15.9067 4.26591 15.4479 4.14339 15.0893 4.3508C14.7308 4.5582 14.6083 5.017 14.8157 5.37554L16.1141 4.62446ZM19.25 7V10.5H20.75V7H19.25ZM19.25 13V13.01H20.75V13H19.25ZM19.25 19V21H20.75V19H19.25ZM4.75 21V19H3.25V21H4.75ZM16 15.75C17.7949 15.75 19.25 17.2051 19.25 19H20.75C20.75 16.3766 18.6234 14.25 16 14.25V15.75ZM8 14.25C5.37665 14.25 3.25 16.3766 3.25 19H4.75C4.75 17.2051 6.20507 15.75 8 15.75V14.25ZM12 15.75H16V14.25H12V15.75ZM15.25 7C15.25 8.79493 13.7949 10.25 12 10.25V11.75C14.6234 11.75 16.75 9.62335 16.75 7H15.25ZM12 10.25C10.2051 10.25 8.75 8.79493 8.75 7H7.25C7.25 9.62335 9.37665 11.75 12 11.75V10.25ZM8.75 7C8.75 5.20507 10.2051 3.75 12 3.75V2.25C9.37665 2.25 7.25 4.37665 7.25 7H8.75ZM14.8157 5.37554C15.0918 5.85281 15.25 6.40679 15.25 7H16.75C16.75 6.13606 16.5187 5.32388 16.1141 4.62446L14.8157 5.37554ZM4 21.75H20V20.25H4V21.75Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <>
        <Path opacity="0.15" d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" fill={props.fillColor} />
        <Path d="M20.75 7C20.75 6.58579 20.4142 6.25 20 6.25C19.5858 6.25 19.25 6.58579 19.25 7H20.75ZM19.25 10.5C19.25 10.9142 19.5858 11.25 20 11.25C20.4142 11.25 20.75 10.9142 20.75 10.5H19.25ZM20.75 13C20.75 12.5858 20.4142 12.25 20 12.25C19.5858 12.25 19.25 12.5858 19.25 13H20.75ZM19.25 13.01C19.25 13.4242 19.5858 13.76 20 13.76C20.4142 13.76 20.75 13.4242 20.75 13.01H19.25ZM20 21V21.75C20.4142 21.75 20.75 21.4142 20.75 21H20ZM4 21H3.25C3.25 21.4142 3.58579 21.75 4 21.75V21ZM19.25 7V10.5H20.75V7H19.25ZM19.25 13V13.01H20.75V13H19.25ZM8 15.75H16V14.25H8V15.75ZM19.25 19V21H20.75V19H19.25ZM4.75 21V19H3.25V21H4.75ZM16 15.75C17.7949 15.75 19.25 17.2051 19.25 19H20.75C20.75 16.3766 18.6234 14.25 16 14.25V15.75ZM8 14.25C5.37665 14.25 3.25 16.3766 3.25 19H4.75C4.75 17.2051 6.20507 15.75 8 15.75V14.25ZM15.25 7C15.25 8.79493 13.7949 10.25 12 10.25V11.75C14.6234 11.75 16.75 9.62335 16.75 7H15.25ZM12 10.25C10.2051 10.25 8.75 8.79493 8.75 7H7.25C7.25 9.62335 9.37665 11.75 12 11.75V10.25ZM8.75 7C8.75 5.20507 10.2051 3.75 12 3.75V2.25C9.37665 2.25 7.25 4.37665 7.25 7H8.75ZM12 3.75C13.7949 3.75 15.25 5.20507 15.25 7H16.75C16.75 4.37665 14.6234 2.25 12 2.25V3.75ZM4 21.75H20V20.25H4V21.75Z" fill={props.fillColor} />
    </>
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M20.75 7C20.75 6.58579 20.4142 6.25 20 6.25C19.5858 6.25 19.25 6.58579 19.25 7H20.75ZM19.25 10.5C19.25 10.9142 19.5858 11.25 20 11.25C20.4142 11.25 20.75 10.9142 20.75 10.5H19.25ZM20.75 13C20.75 12.5858 20.4142 12.25 20 12.25C19.5858 12.25 19.25 12.5858 19.25 13H20.75ZM19.25 13.01C19.25 13.4242 19.5858 13.76 20 13.76C20.4142 13.76 20.75 13.4242 20.75 13.01H19.25ZM20 21V21.75C20.4142 21.75 20.75 21.4142 20.75 21H20ZM4 21H3.25C3.25 21.4142 3.58579 21.75 4 21.75V21ZM19.25 7V10.5H20.75V7H19.25ZM19.25 13V13.01H20.75V13H19.25ZM8 15.75H16V14.25H8V15.75ZM19.25 19V21H20.75V19H19.25ZM4.75 21V19H3.25V21H4.75ZM16 15.75C17.7949 15.75 19.25 17.2051 19.25 19H20.75C20.75 16.3766 18.6234 14.25 16 14.25V15.75ZM8 14.25C5.37665 14.25 3.25 16.3766 3.25 19H4.75C4.75 17.2051 6.20507 15.75 8 15.75V14.25ZM15.25 7C15.25 8.79493 13.7949 10.25 12 10.25V11.75C14.6234 11.75 16.75 9.62335 16.75 7H15.25ZM12 10.25C10.2051 10.25 8.75 8.79493 8.75 7H7.25C7.25 9.62335 9.37665 11.75 12 11.75V10.25ZM8.75 7C8.75 5.20507 10.2051 3.75 12 3.75V2.25C9.37665 2.25 7.25 4.37665 7.25 7H8.75ZM12 3.75C13.7949 3.75 15.25 5.20507 15.25 7H16.75C16.75 4.37665 14.6234 2.25 12 2.25V3.75ZM4 21.75H20V20.25H4V21.75Z" fill={props.fillColor} />
);

const UserWarning: VFC<UserWarningProps> = (props) => {
    switch (props.variant) {
        case 'broken':
            return <Broken {...props} />;
        case 'duotone':
            return <Duotone {...props} />;
        case 'outline':
            return <Outline {...props} />;
    }
};

export default createIcon(UserWarning);