import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type DuotoneProps = { fillColor: Color, };
type OutlineProps = { fillColor: Color, };

type FullscreenProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M9.00002 4.74998C9.41423 4.74998 9.75002 4.4142 9.75002 3.99998C9.75002 3.58577 9.41423 3.24998 9.00002 3.24998V4.74998ZM4.00004 3.99998V3.24998C3.58582 3.24998 3.25004 3.58577 3.25004 3.99998L4.00004 3.99998ZM3.25 9C3.25 9.41421 3.58578 9.75 3.99999 9.75C4.41421 9.75001 4.75 9.41422 4.75 9.00001L3.25 9ZM19.25 8.99999C19.25 9.4142 19.5858 9.74999 20 9.74999C20.4142 9.74999 20.75 9.4142 20.75 8.99999H19.25ZM20 4H20.75C20.75 3.58579 20.4142 3.25001 20 3.25L20 4ZM15 3.24997C14.5858 3.24997 14.25 3.58575 14.25 3.99996C14.25 4.41418 14.5858 4.74997 15 4.74997L15 3.24997ZM15 19.25C14.5858 19.25 14.25 19.5858 14.25 20C14.25 20.4142 14.5858 20.75 15 20.75V19.25ZM20 20V20.75C20.4142 20.75 20.75 20.4142 20.75 20L20 20ZM20.75 15C20.75 14.5858 20.4142 14.25 20 14.25C19.5858 14.25 19.25 14.5858 19.25 15L20.75 15ZM4.75 15C4.75 14.5858 4.41421 14.25 4 14.25C3.58579 14.25 3.25 14.5858 3.25 15H4.75ZM4 20H3.25C3.25 20.4142 3.58578 20.75 3.99999 20.75L4 20ZM9.00001 20.75C9.41423 20.75 9.75002 20.4142 9.75002 20C9.75002 19.5858 9.41424 19.25 9.00002 19.25L9.00001 20.75ZM9.00002 3.24998H4.00004V4.74998H9.00002V3.24998ZM3.25004 3.99998L3.25 9L4.75 9.00001L4.75004 3.99999L3.25004 3.99998ZM20.75 8.99999V4H19.25V8.99999H20.75ZM20 3.25L15 3.24997L15 4.74997L20 4.75L20 3.25ZM15 20.75H20V19.25H15V20.75ZM20.75 20L20.75 15L19.25 15L19.25 20L20.75 20ZM3.25 15L3.25 20H4.75L4.75 15H3.25ZM3.99999 20.75L9.00001 20.75L9.00002 19.25L4.00001 19.25L3.99999 20.75Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <Path d="M9.00002 4.74998C9.41423 4.74998 9.75002 4.4142 9.75002 3.99998C9.75002 3.58577 9.41423 3.24998 9.00002 3.24998V4.74998ZM4.00004 3.99998V3.24998C3.58582 3.24998 3.25004 3.58577 3.25004 3.99998L4.00004 3.99998ZM3.25 9C3.25 9.41421 3.58578 9.75 3.99999 9.75C4.41421 9.75001 4.75 9.41422 4.75 9.00001L3.25 9ZM19.25 8.99999C19.25 9.4142 19.5858 9.74999 20 9.74999C20.4142 9.74999 20.75 9.4142 20.75 8.99999H19.25ZM20 4H20.75C20.75 3.58579 20.4142 3.25001 20 3.25L20 4ZM15 3.24997C14.5858 3.24997 14.25 3.58575 14.25 3.99996C14.25 4.41418 14.5858 4.74997 15 4.74997L15 3.24997ZM15 19.25C14.5858 19.25 14.25 19.5858 14.25 20C14.25 20.4142 14.5858 20.75 15 20.75V19.25ZM20 20V20.75C20.4142 20.75 20.75 20.4142 20.75 20L20 20ZM20.75 15C20.75 14.5858 20.4142 14.25 20 14.25C19.5858 14.25 19.25 14.5858 19.25 15L20.75 15ZM4.75 15C4.75 14.5858 4.41421 14.25 4 14.25C3.58579 14.25 3.25 14.5858 3.25 15H4.75ZM4 20H3.25C3.25 20.4142 3.58578 20.75 3.99999 20.75L4 20ZM9.00001 20.75C9.41423 20.75 9.75002 20.4142 9.75002 20C9.75002 19.5858 9.41424 19.25 9.00002 19.25L9.00001 20.75ZM9.00002 3.24998H4.00004V4.74998H9.00002V3.24998ZM3.25004 3.99998L3.25 9L4.75 9.00001L4.75004 3.99999L3.25004 3.99998ZM20.75 8.99999V4H19.25V8.99999H20.75ZM20 3.25L15 3.24997L15 4.74997L20 4.75L20 3.25ZM15 20.75H20V19.25H15V20.75ZM20.75 20L20.75 15L19.25 15L19.25 20L20.75 20ZM3.25 15L3.25 20H4.75L4.75 15H3.25ZM3.99999 20.75L9.00001 20.75L9.00002 19.25L4.00001 19.25L3.99999 20.75Z" fill={props.fillColor} />
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M9.00002 4.74997C9.41423 4.74997 9.75002 4.41418 9.75002 3.99997C9.75002 3.58576 9.41423 3.24997 9.00002 3.24997V4.74997ZM4.00004 3.99997V3.24997C3.58582 3.24997 3.25004 3.58575 3.25004 3.99996L4.00004 3.99997ZM3.25 8.99998C3.25 9.4142 3.58578 9.74998 3.99999 9.74999C4.41421 9.74999 4.75 9.41421 4.75 8.99999L3.25 8.99998ZM19.25 8.99999C19.25 9.4142 19.5858 9.74999 20 9.74999C20.4142 9.74999 20.75 9.4142 20.75 8.99999H19.25ZM20 4H20.75C20.75 3.58579 20.4142 3.25001 20 3.25L20 4ZM15 3.24997C14.5858 3.24997 14.25 3.58575 14.25 3.99996C14.25 4.41418 14.5858 4.74997 15 4.74997L15 3.24997ZM15 19.25C14.5858 19.25 14.25 19.5858 14.25 20C14.25 20.4142 14.5858 20.75 15 20.75V19.25ZM20 20V20.75C20.4142 20.75 20.75 20.4142 20.75 20L20 20ZM20.75 15C20.75 14.5858 20.4142 14.25 20 14.25C19.5858 14.25 19.25 14.5858 19.25 15L20.75 15ZM4.75 15C4.75 14.5858 4.41421 14.25 4 14.25C3.58579 14.25 3.25 14.5858 3.25 15H4.75ZM4 20H3.25C3.25 20.4142 3.58578 20.75 3.99999 20.75L4 20ZM9.00001 20.75C9.41423 20.75 9.75002 20.4142 9.75002 20C9.75002 19.5858 9.41424 19.25 9.00002 19.25L9.00001 20.75ZM9.00002 3.24997H4.00004V4.74997H9.00002V3.24997ZM3.25004 3.99996L3.25 8.99998L4.75 8.99999L4.75004 3.99997L3.25004 3.99996ZM20.75 8.99999V4H19.25V8.99999H20.75ZM20 3.25L15 3.24997L15 4.74997L20 4.75L20 3.25ZM15 20.75H20V19.25H15V20.75ZM20.75 20L20.75 15L19.25 15L19.25 20L20.75 20ZM3.25 15L3.25 20H4.75L4.75 15H3.25ZM3.99999 20.75L9.00001 20.75L9.00002 19.25L4.00001 19.25L3.99999 20.75Z" fill={props.fillColor} />
);

const Fullscreen: VFC<FullscreenProps> = (props) => {
    switch (props.variant) {
        case 'broken':
            return <Broken {...props} />;
        case 'duotone':
            return <Duotone {...props} />;
        case 'outline':
            return <Outline {...props} />;
    }
};

export default createIcon(Fullscreen);