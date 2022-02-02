import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type DuotoneProps = { fillColor: Color, };
type OutlineProps = { fillColor: Color, };

type MicrophoneProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M14.25 6C14.25 6.41421 14.5858 6.75 15 6.75C15.4142 6.75 15.75 6.41421 15.75 6H14.25ZM15.75 9C15.75 8.58579 15.4142 8.25 15 8.25C14.5858 8.25 14.25 8.58579 14.25 9H15.75ZM18.75 12C18.75 11.5858 18.4142 11.25 18 11.25C17.5858 11.25 17.25 11.5858 17.25 12H18.75ZM12 18V17.25C11.5858 17.25 11.25 17.5858 11.25 18H12ZM8.26695 17.6245C8.61188 17.8539 9.07742 17.7602 9.30675 17.4153C9.53609 17.0703 9.44239 16.6048 9.09746 16.3755L8.26695 17.6245ZM6.75 12C6.75 11.5858 6.41421 11.25 6 11.25C5.58579 11.25 5.25 11.5858 5.25 12H6.75ZM15 21.75C15.4142 21.75 15.75 21.4142 15.75 21C15.75 20.5858 15.4142 20.25 15 20.25V21.75ZM9 20.25C8.58579 20.25 8.25 20.5858 8.25 21C8.25 21.4142 8.58579 21.75 9 21.75V20.25ZM9.75 12V6H8.25V12H9.75ZM12 14.25C10.7574 14.25 9.75 13.2426 9.75 12H8.25C8.25 14.0711 9.92893 15.75 12 15.75V14.25ZM14.25 12C14.25 13.2426 13.2426 14.25 12 14.25V15.75C14.0711 15.75 15.75 14.0711 15.75 12H14.25ZM12 3.75C13.2426 3.75 14.25 4.75736 14.25 6H15.75C15.75 3.92893 14.0711 2.25 12 2.25V3.75ZM12 2.25C9.92893 2.25 8.25 3.92893 8.25 6H9.75C9.75 4.75736 10.7574 3.75 12 3.75V2.25ZM14.25 9V12H15.75V9H14.25ZM17.25 12C17.25 14.8995 14.8995 17.25 12 17.25V18.75C15.7279 18.75 18.75 15.7279 18.75 12H17.25ZM9.09746 16.3755C7.68095 15.4336 6.75 13.8254 6.75 12H5.25C5.25 14.3486 6.45006 16.4165 8.26695 17.6245L9.09746 16.3755ZM11.25 18V21H12.75V18H11.25ZM12 21.75H15V20.25H12V21.75ZM12 20.25H9V21.75H12V20.25Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <>
        <Path opacity="0.15" d="M9 6C9 4.34315 10.3431 3 12 3C13.6569 3 15 4.34315 15 6V12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12V6Z" fill={props.fillColor} />
        <Path d="M18.75 12C18.75 11.5858 18.4142 11.25 18 11.25C17.5858 11.25 17.25 11.5858 17.25 12H18.75ZM6.75 12C6.75 11.5858 6.41421 11.25 6 11.25C5.58579 11.25 5.25 11.5858 5.25 12H6.75ZM15 21.75C15.4142 21.75 15.75 21.4142 15.75 21C15.75 20.5858 15.4142 20.25 15 20.25V21.75ZM9 20.25C8.58579 20.25 8.25 20.5858 8.25 21C8.25 21.4142 8.58579 21.75 9 21.75V20.25ZM14.25 6V12H15.75V6H14.25ZM9.75 12V6H8.25V12H9.75ZM12 14.25C10.7574 14.25 9.75 13.2426 9.75 12H8.25C8.25 14.0711 9.92893 15.75 12 15.75V14.25ZM14.25 12C14.25 13.2426 13.2426 14.25 12 14.25V15.75C14.0711 15.75 15.75 14.0711 15.75 12H14.25ZM12 3.75C13.2426 3.75 14.25 4.75736 14.25 6H15.75C15.75 3.92893 14.0711 2.25 12 2.25V3.75ZM12 2.25C9.92893 2.25 8.25 3.92893 8.25 6H9.75C9.75 4.75736 10.7574 3.75 12 3.75V2.25ZM17.25 12C17.25 14.8995 14.8995 17.25 12 17.25V18.75C15.7279 18.75 18.75 15.7279 18.75 12H17.25ZM12 17.25C9.10051 17.25 6.75 14.8995 6.75 12H5.25C5.25 15.7279 8.27208 18.75 12 18.75V17.25ZM11.25 18V21H12.75V18H11.25ZM12 21.75H15V20.25H12V21.75ZM12 20.25H9V21.75H12V20.25Z" fill={props.fillColor} />
    </>
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M18.75 12C18.75 11.5858 18.4142 11.25 18 11.25C17.5858 11.25 17.25 11.5858 17.25 12H18.75ZM6.75 12C6.75 11.5858 6.41421 11.25 6 11.25C5.58579 11.25 5.25 11.5858 5.25 12H6.75ZM15 21.75C15.4142 21.75 15.75 21.4142 15.75 21C15.75 20.5858 15.4142 20.25 15 20.25V21.75ZM9 20.25C8.58579 20.25 8.25 20.5858 8.25 21C8.25 21.4142 8.58579 21.75 9 21.75V20.25ZM14.25 6V12H15.75V6H14.25ZM9.75 12V6H8.25V12H9.75ZM12 14.25C10.7574 14.25 9.75 13.2426 9.75 12H8.25C8.25 14.0711 9.92893 15.75 12 15.75V14.25ZM14.25 12C14.25 13.2426 13.2426 14.25 12 14.25V15.75C14.0711 15.75 15.75 14.0711 15.75 12H14.25ZM12 3.75C13.2426 3.75 14.25 4.75736 14.25 6H15.75C15.75 3.92893 14.0711 2.25 12 2.25V3.75ZM12 2.25C9.92893 2.25 8.25 3.92893 8.25 6H9.75C9.75 4.75736 10.7574 3.75 12 3.75V2.25ZM17.25 12C17.25 14.8995 14.8995 17.25 12 17.25V18.75C15.7279 18.75 18.75 15.7279 18.75 12H17.25ZM12 17.25C9.10051 17.25 6.75 14.8995 6.75 12H5.25C5.25 15.7279 8.27208 18.75 12 18.75V17.25ZM11.25 18V21H12.75V18H11.25ZM12 21.75H15V20.25H12V21.75ZM12 20.25H9V21.75H12V20.25Z" fill={props.fillColor} />
);

const Microphone: VFC<MicrophoneProps> = (props) => {
    switch (props.variant) {
        case 'broken':
            return <Broken {...props} />;
        case 'duotone':
            return <Duotone {...props} />;
        case 'outline':
            return <Outline {...props} />;
    }
};

export default createIcon(Microphone);