import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type DuotoneProps = { strokeColor: Color, strokeWidth: number, };
type OutlineProps = { strokeColor: Color, strokeWidth: number, };

type DownloadProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M4 18H4.75H4ZM4.75 15C4.75 14.5858 4.41421 14.25 4 14.25C3.58579 14.25 3.25 14.5858 3.25 15H4.75ZM6 20.75C6.41421 20.75 6.75 20.4142 6.75 20C6.75 19.5858 6.41421 19.25 6 19.25V20.75ZM20.75 15C20.75 14.5858 20.4142 14.25 20 14.25C19.5858 14.25 19.25 14.5858 19.25 15H20.75ZM20 18H20.75H20ZM18 20V19.25V20ZM10 19.25C9.58579 19.25 9.25 19.5858 9.25 20C9.25 20.4142 9.58579 20.75 10 20.75V19.25ZM8.53033 10.4697C8.23744 10.1768 7.76256 10.1768 7.46967 10.4697C7.17678 10.7626 7.17678 11.2374 7.46967 11.5303L8.53033 10.4697ZM12 15L11.4697 15.5303C11.6842 15.7448 12.0068 15.809 12.287 15.6929C12.5673 15.5768 12.75 15.3033 12.75 15H12ZM16.5303 11.5303C16.8232 11.2374 16.8232 10.7626 16.5303 10.4697C16.2374 10.1768 15.7626 10.1768 15.4697 10.4697L16.5303 11.5303ZM14.4697 11.4697C14.1768 11.7626 14.1768 12.2374 14.4697 12.5303C14.7626 12.8232 15.2374 12.8232 15.5303 12.5303L14.4697 11.4697ZM12.75 3C12.75 2.58579 12.4142 2.25 12 2.25C11.5858 2.25 11.25 2.58579 11.25 3L12.75 3ZM4.75 18L4.75 15H3.25L3.25 18H4.75ZM6 19.25C5.30964 19.25 4.75 18.6904 4.75 18H3.25C3.25 19.5188 4.48122 20.75 6 20.75V19.25ZM19.25 15V18H20.75V15H19.25ZM19.25 18C19.25 18.6904 18.6904 19.25 18 19.25V20.75C19.5188 20.75 20.75 19.5188 20.75 18H19.25ZM18 19.25H10V20.75H18V19.25ZM7.46967 11.5303L11.4697 15.5303L12.5303 14.4697L8.53033 10.4697L7.46967 11.5303ZM15.4697 10.4697L14.4697 11.4697L15.5303 12.5303L16.5303 11.5303L15.4697 10.4697ZM12.75 15V3L11.25 3L11.25 15H12.75Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <Path d="M20 15V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18L4 15M8 11L12 15M12 15L16 11M12 15V3" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M20 15V18C20 19.1046 19.1046 20 18 20H6C4.89543 20 4 19.1046 4 18L4 15M8 11L12 15M12 15L16 11M12 15V3" stroke={props.strokeColor} stroke-width={props.strokeWidth} stroke-linecap="round" stroke-linejoin="round" />
);

const Download: VFC<DownloadProps> = (props) => {
    switch (props.variant) {
        case 'broken':
            return <Broken {...props} />;
        case 'duotone':
            return <Duotone {...props} />;
        case 'outline':
            return <Outline {...props} />;
    }
};

export default createIcon(Download);