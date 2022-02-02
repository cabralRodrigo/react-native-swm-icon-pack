import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type DuotoneProps = { strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type Share2Props = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M4 18H3.25H4ZM4.75 13C4.75 12.5858 4.41421 12.25 4 12.25C3.58579 12.25 3.25 12.5858 3.25 13H4.75ZM6 20.75C6.41421 20.75 6.75 20.4142 6.75 20C6.75 19.5858 6.41421 19.25 6 19.25V20.75ZM20.75 13C20.75 12.5858 20.4142 12.25 20 12.25C19.5858 12.25 19.25 12.5858 19.25 13H20.75ZM20 18H20.75H20ZM18 20V19.25V20ZM10 19.25C9.58579 19.25 9.25 19.5858 9.25 20C9.25 20.4142 9.58579 20.75 10 20.75V19.25ZM15.4697 7.53033C15.7626 7.82322 16.2374 7.82322 16.5303 7.53033C16.8232 7.23744 16.8232 6.76256 16.5303 6.46967L15.4697 7.53033ZM12 3L12.5303 2.46967C12.3158 2.25517 11.9932 2.191 11.713 2.30709C11.4327 2.42318 11.25 2.69665 11.25 3L12 3ZM7.46967 6.46967C7.17678 6.76257 7.17678 7.23744 7.46967 7.53033C7.76256 7.82323 8.23744 7.82322 8.53033 7.53033L7.46967 6.46967ZM9.53033 6.53033C9.82322 6.23744 9.82322 5.76256 9.53033 5.46967C9.23744 5.17678 8.76256 5.17678 8.46967 5.46967L9.53033 6.53033ZM11.25 15C11.25 15.4142 11.5858 15.75 12 15.75C12.4142 15.75 12.75 15.4142 12.75 15H11.25ZM4.75 18L4.75 13H3.25L3.25 18H4.75ZM6 19.25C5.30964 19.25 4.75 18.6904 4.75 18H3.25C3.25 19.5188 4.48122 20.75 6 20.75V19.25ZM19.25 13V18H20.75V13H19.25ZM19.25 18C19.25 18.6904 18.6904 19.25 18 19.25V20.75C19.5188 20.75 20.75 19.5188 20.75 18H19.25ZM18 19.25H10V20.75H18V19.25ZM16.5303 6.46967L12.5303 2.46967L11.4697 3.53033L15.4697 7.53033L16.5303 6.46967ZM8.53033 7.53033L9.53033 6.53033L8.46967 5.46967L7.46967 6.46967L8.53033 7.53033ZM11.25 3L11.25 15H12.75L12.75 3L11.25 3Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <>
        <Path d="M20 13L20 18C20 19.1046 19.1046 20 18 20L6 20C4.89543 20 4 19.1046 4 18L4 13" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M16 8L12 4M12 4L8 8M12 4L12 16" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
    </>
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M20 13V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18L4 13M16 8L12 4M12 4L8 8M12 4L12 16" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Share2: VFC<Share2Props> = (props) => {
    switch (props.variant) {
        case 'broken':
            return <Broken {...props} />;
        case 'duotone':
            return <Duotone {...props} />;
        case 'outline':
            return <Outline {...props} />;
    }
};

export default createIcon(Share2);