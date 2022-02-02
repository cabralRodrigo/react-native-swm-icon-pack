import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type CurvedProps = { fillColor: Color, };
type DuotoneProps = { fillColor: Color, };
type OutlineProps = { fillColor: Color, };

type Sound1Props = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M3.75 11C3.75 10.5858 3.41421 10.25 3 10.25C2.58579 10.25 2.25 10.5858 2.25 11H3.75ZM2.25 13C2.25 13.4142 2.58579 13.75 3 13.75C3.41421 13.75 3.75 13.4142 3.75 13H2.25ZM6.75 10C6.75 9.58579 6.41421 9.25 6 9.25C5.58579 9.25 5.25 9.58579 5.25 10H6.75ZM5.25 14C5.25 14.4142 5.58579 14.75 6 14.75C6.41421 14.75 6.75 14.4142 6.75 14H5.25ZM9.75 11C9.75 10.5858 9.41421 10.25 9 10.25C8.58579 10.25 8.25 10.5858 8.25 11H9.75ZM8.25 13C8.25 13.4142 8.58579 13.75 9 13.75C9.41421 13.75 9.75 13.4142 9.75 13H8.25ZM12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9H12.75ZM11.25 15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15H11.25ZM15.75 12C15.75 11.5858 15.4142 11.25 15 11.25C14.5858 11.25 14.25 11.5858 14.25 12H15.75ZM14.25 18C14.25 18.4142 14.5858 18.75 15 18.75C15.4142 18.75 15.75 18.4142 15.75 18H14.25ZM15.75 6C15.75 5.58579 15.4142 5.25 15 5.25C14.5858 5.25 14.25 5.58579 14.25 6H15.75ZM14.25 8C14.25 8.41421 14.5858 8.75 15 8.75C15.4142 8.75 15.75 8.41421 15.75 8H14.25ZM18.75 10C18.75 9.58579 18.4142 9.25 18 9.25C17.5858 9.25 17.25 9.58579 17.25 10H18.75ZM17.25 14C17.25 14.4142 17.5858 14.75 18 14.75C18.4142 14.75 18.75 14.4142 18.75 14H17.25ZM21.75 11C21.75 10.5858 21.4142 10.25 21 10.25C20.5858 10.25 20.25 10.5858 20.25 11H21.75ZM20.25 13C20.25 13.4142 20.5858 13.75 21 13.75C21.4142 13.75 21.75 13.4142 21.75 13H20.25ZM2.25 11V13H3.75V11H2.25ZM5.25 10V14H6.75V10H5.25ZM8.25 11V13H9.75V11H8.25ZM11.25 9V15H12.75V9H11.25ZM14.25 12V18H15.75V12H14.25ZM14.25 6V8H15.75V6H14.25ZM17.25 10V14H18.75V10H17.25ZM20.25 11V13H21.75V11H20.25Z" fill={props.fillColor} />
);

const Curved: VFC<CurvedProps> = (props) => (
    <Path d="M3.75 11C3.75 10.5858 3.41421 10.25 3 10.25C2.58579 10.25 2.25 10.5858 2.25 11H3.75ZM2.25 13C2.25 13.4142 2.58579 13.75 3 13.75C3.41421 13.75 3.75 13.4142 3.75 13H2.25ZM6.75 10C6.75 9.58579 6.41421 9.25 6 9.25C5.58579 9.25 5.25 9.58579 5.25 10H6.75ZM5.25 14C5.25 14.4142 5.58579 14.75 6 14.75C6.41421 14.75 6.75 14.4142 6.75 14H5.25ZM9.75 11C9.75 10.5858 9.41421 10.25 9 10.25C8.58579 10.25 8.25 10.5858 8.25 11H9.75ZM8.25 13C8.25 13.4142 8.58579 13.75 9 13.75C9.41421 13.75 9.75 13.4142 9.75 13H8.25ZM12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9H12.75ZM11.25 15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15H11.25ZM15.75 6C15.75 5.58579 15.4142 5.25 15 5.25C14.5858 5.25 14.25 5.58579 14.25 6H15.75ZM14.25 18C14.25 18.4142 14.5858 18.75 15 18.75C15.4142 18.75 15.75 18.4142 15.75 18H14.25ZM18.75 10C18.75 9.58579 18.4142 9.25 18 9.25C17.5858 9.25 17.25 9.58579 17.25 10H18.75ZM17.25 14C17.25 14.4142 17.5858 14.75 18 14.75C18.4142 14.75 18.75 14.4142 18.75 14H17.25ZM21.75 11C21.75 10.5858 21.4142 10.25 21 10.25C20.5858 10.25 20.25 10.5858 20.25 11H21.75ZM20.25 13C20.25 13.4142 20.5858 13.75 21 13.75C21.4142 13.75 21.75 13.4142 21.75 13H20.25ZM2.25 11V13H3.75V11H2.25ZM5.25 10V14H6.75V10H5.25ZM8.25 11V13H9.75V11H8.25ZM11.25 9V15H12.75V9H11.25ZM14.25 6V18H15.75V6H14.25ZM17.25 10V14H18.75V10H17.25ZM20.25 11V13H21.75V11H20.25Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <Path d="M3.75 11C3.75 10.5858 3.41421 10.25 3 10.25C2.58579 10.25 2.25 10.5858 2.25 11H3.75ZM2.25 13C2.25 13.4142 2.58579 13.75 3 13.75C3.41421 13.75 3.75 13.4142 3.75 13H2.25ZM6.75 10C6.75 9.58579 6.41421 9.25 6 9.25C5.58579 9.25 5.25 9.58579 5.25 10H6.75ZM5.25 14C5.25 14.4142 5.58579 14.75 6 14.75C6.41421 14.75 6.75 14.4142 6.75 14H5.25ZM9.75 11C9.75 10.5858 9.41421 10.25 9 10.25C8.58579 10.25 8.25 10.5858 8.25 11H9.75ZM8.25 13C8.25 13.4142 8.58579 13.75 9 13.75C9.41421 13.75 9.75 13.4142 9.75 13H8.25ZM12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9H12.75ZM11.25 15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15H11.25ZM15.75 6C15.75 5.58579 15.4142 5.25 15 5.25C14.5858 5.25 14.25 5.58579 14.25 6H15.75ZM14.25 18C14.25 18.4142 14.5858 18.75 15 18.75C15.4142 18.75 15.75 18.4142 15.75 18H14.25ZM18.75 10C18.75 9.58579 18.4142 9.25 18 9.25C17.5858 9.25 17.25 9.58579 17.25 10H18.75ZM17.25 14C17.25 14.4142 17.5858 14.75 18 14.75C18.4142 14.75 18.75 14.4142 18.75 14H17.25ZM21.75 11C21.75 10.5858 21.4142 10.25 21 10.25C20.5858 10.25 20.25 10.5858 20.25 11H21.75ZM20.25 13C20.25 13.4142 20.5858 13.75 21 13.75C21.4142 13.75 21.75 13.4142 21.75 13H20.25ZM2.25 11V13H3.75V11H2.25ZM5.25 10V14H6.75V10H5.25ZM8.25 11V13H9.75V11H8.25ZM11.25 9V15H12.75V9H11.25ZM14.25 6V18H15.75V6H14.25ZM17.25 10V14H18.75V10H17.25ZM20.25 11V13H21.75V11H20.25Z" fill={props.fillColor} />
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M3.75 11C3.75 10.5858 3.41421 10.25 3 10.25C2.58579 10.25 2.25 10.5858 2.25 11H3.75ZM2.25 13C2.25 13.4142 2.58579 13.75 3 13.75C3.41421 13.75 3.75 13.4142 3.75 13H2.25ZM6.75 10C6.75 9.58579 6.41421 9.25 6 9.25C5.58579 9.25 5.25 9.58579 5.25 10H6.75ZM5.25 14C5.25 14.4142 5.58579 14.75 6 14.75C6.41421 14.75 6.75 14.4142 6.75 14H5.25ZM9.75 11C9.75 10.5858 9.41421 10.25 9 10.25C8.58579 10.25 8.25 10.5858 8.25 11H9.75ZM8.25 13C8.25 13.4142 8.58579 13.75 9 13.75C9.41421 13.75 9.75 13.4142 9.75 13H8.25ZM12.75 9C12.75 8.58579 12.4142 8.25 12 8.25C11.5858 8.25 11.25 8.58579 11.25 9H12.75ZM11.25 15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15H11.25ZM15.75 6C15.75 5.58579 15.4142 5.25 15 5.25C14.5858 5.25 14.25 5.58579 14.25 6H15.75ZM14.25 18C14.25 18.4142 14.5858 18.75 15 18.75C15.4142 18.75 15.75 18.4142 15.75 18H14.25ZM18.75 10C18.75 9.58579 18.4142 9.25 18 9.25C17.5858 9.25 17.25 9.58579 17.25 10H18.75ZM17.25 14C17.25 14.4142 17.5858 14.75 18 14.75C18.4142 14.75 18.75 14.4142 18.75 14H17.25ZM21.75 11C21.75 10.5858 21.4142 10.25 21 10.25C20.5858 10.25 20.25 10.5858 20.25 11H21.75ZM20.25 13C20.25 13.4142 20.5858 13.75 21 13.75C21.4142 13.75 21.75 13.4142 21.75 13H20.25ZM2.25 11V13H3.75V11H2.25ZM5.25 10V14H6.75V10H5.25ZM8.25 11V13H9.75V11H8.25ZM11.25 9V15H12.75V9H11.25ZM14.25 6V18H15.75V6H14.25ZM17.25 10V14H18.75V10H17.25ZM20.25 11V13H21.75V11H20.25Z" fill={props.fillColor} />
);

const Sound1: VFC<Sound1Props> = (props) => {
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

export default createIcon(Sound1);