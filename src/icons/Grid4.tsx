import React, { VFC } from 'react';
import { Color, G, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type DuotoneProps = { fillColor: Color, };
type OutlineProps = { fillColor: Color, };

type Grid4Props = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M3.5 3.5V2.75C3.08579 2.75 2.75 3.08579 2.75 3.5H3.5ZM10.5 3.5H11.25C11.25 3.08579 10.9142 2.75 10.5 2.75V3.5ZM10.5 10.5V11.25C10.9142 11.25 11.25 10.9142 11.25 10.5H10.5ZM3.5 10.5H2.75C2.75 10.9142 3.08579 11.25 3.5 11.25V10.5ZM10.5 13.5H11.25C11.25 13.0858 10.9142 12.75 10.5 12.75V13.5ZM10.5 20.5V21.25C10.9142 21.25 11.25 20.9142 11.25 20.5H10.5ZM3.5 20.5H2.75C2.75 20.9142 3.08579 21.25 3.5 21.25V20.5ZM3.5 13.5V12.75C3.08579 12.75 2.75 13.0858 2.75 13.5H3.5ZM5 14.25C5.41421 14.25 5.75 13.9142 5.75 13.5C5.75 13.0858 5.41421 12.75 5 12.75V14.25ZM9 12.75C8.58579 12.75 8.25 13.0858 8.25 13.5C8.25 13.9142 8.58579 14.25 9 14.25V12.75ZM13.5 3.5V2.75C13.0858 2.75 12.75 3.08579 12.75 3.5H13.5ZM20.5 3.5H21.25C21.25 3.08579 20.9142 2.75 20.5 2.75V3.5ZM20.5 10.5V11.25C20.9142 11.25 21.25 10.9142 21.25 10.5H20.5ZM13.5 10.5H12.75C12.75 10.9142 13.0858 11.25 13.5 11.25V10.5ZM12.75 5C12.75 5.41421 13.0858 5.75 13.5 5.75C13.9142 5.75 14.25 5.41421 14.25 5H12.75ZM14.25 9C14.25 8.58579 13.9142 8.25 13.5 8.25C13.0858 8.25 12.75 8.58579 12.75 9H14.25ZM13.5 13.5V12.75C13.0858 12.75 12.75 13.0858 12.75 13.5H13.5ZM20.5 13.5H21.25C21.25 13.0858 20.9142 12.75 20.5 12.75V13.5ZM20.5 20.5V21.25C20.9142 21.25 21.25 20.9142 21.25 20.5H20.5ZM13.5 20.5H12.75C12.75 20.9142 13.0858 21.25 13.5 21.25V20.5ZM3.5 4.25H10.5V2.75H3.5V4.25ZM9.75 3.5V10.5H11.25V3.5H9.75ZM10.5 9.75H3.5V11.25H10.5V9.75ZM4.25 10.5V3.5H2.75V10.5H4.25ZM9.75 13.5V20.5H11.25V13.5H9.75ZM10.5 19.75H3.5V21.25H10.5V19.75ZM4.25 20.5V13.5H2.75V20.5H4.25ZM3.5 14.25H5V12.75H3.5V14.25ZM9 14.25H10.5V12.75H9V14.25ZM13.5 4.25H20.5V2.75H13.5V4.25ZM19.75 3.5V10.5H21.25V3.5H19.75ZM20.5 9.75H13.5V11.25H20.5V9.75ZM14.25 5V3.5H12.75V5H14.25ZM14.25 10.5V9H12.75V10.5H14.25ZM13.5 14.25H20.5V12.75H13.5V14.25ZM19.75 13.5V20.5H21.25V13.5H19.75ZM20.5 19.75H13.5V21.25H20.5V19.75ZM14.25 20.5V13.5H12.75V20.5H14.25Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <>
        <G opacity="0.15">
            <Path d="M3.5 13.5H10.5V20.5H3.5V13.5Z" fill={props.fillColor} />
            <Path d="M13.5 3.5H20.5V10.5H13.5V3.5Z" fill={props.fillColor} />
            <Path d="M13.5 13.5H20.5V20.5H13.5V13.5Z" fill={props.fillColor} />
        </G>
        <Path d="M3.5 3.5V2.75C3.08579 2.75 2.75 3.08579 2.75 3.5H3.5ZM10.5 3.5H11.25C11.25 3.08579 10.9142 2.75 10.5 2.75V3.5ZM10.5 10.5V11.25C10.9142 11.25 11.25 10.9142 11.25 10.5H10.5ZM3.5 10.5H2.75C2.75 10.9142 3.08579 11.25 3.5 11.25V10.5ZM3.5 13.5V12.75C3.08579 12.75 2.75 13.0858 2.75 13.5H3.5ZM10.5 13.5H11.25C11.25 13.0858 10.9142 12.75 10.5 12.75V13.5ZM10.5 20.5V21.25C10.9142 21.25 11.25 20.9142 11.25 20.5H10.5ZM3.5 20.5H2.75C2.75 20.9142 3.08579 21.25 3.5 21.25V20.5ZM13.5 3.5V2.75C13.0858 2.75 12.75 3.08579 12.75 3.5H13.5ZM20.5 3.5H21.25C21.25 3.08579 20.9142 2.75 20.5 2.75V3.5ZM20.5 10.5V11.25C20.9142 11.25 21.25 10.9142 21.25 10.5H20.5ZM13.5 10.5H12.75C12.75 10.9142 13.0858 11.25 13.5 11.25V10.5ZM13.5 13.5V12.75C13.0858 12.75 12.75 13.0858 12.75 13.5H13.5ZM20.5 13.5H21.25C21.25 13.0858 20.9142 12.75 20.5 12.75V13.5ZM20.5 20.5V21.25C20.9142 21.25 21.25 20.9142 21.25 20.5H20.5ZM13.5 20.5H12.75C12.75 20.9142 13.0858 21.25 13.5 21.25V20.5ZM3.5 4.25H10.5V2.75H3.5V4.25ZM9.75 3.5V10.5H11.25V3.5H9.75ZM10.5 9.75H3.5V11.25H10.5V9.75ZM4.25 10.5V3.5H2.75V10.5H4.25ZM3.5 14.25H10.5V12.75H3.5V14.25ZM9.75 13.5V20.5H11.25V13.5H9.75ZM10.5 19.75H3.5V21.25H10.5V19.75ZM4.25 20.5V13.5H2.75V20.5H4.25ZM13.5 4.25H20.5V2.75H13.5V4.25ZM19.75 3.5V10.5H21.25V3.5H19.75ZM20.5 9.75H13.5V11.25H20.5V9.75ZM14.25 10.5V3.5H12.75V10.5H14.25ZM13.5 14.25H20.5V12.75H13.5V14.25ZM19.75 13.5V20.5H21.25V13.5H19.75ZM20.5 19.75H13.5V21.25H20.5V19.75ZM14.25 20.5V13.5H12.75V20.5H14.25Z" fill={props.fillColor} />
    </>
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M3.5 3.5V2.75C3.08579 2.75 2.75 3.08579 2.75 3.5H3.5ZM10.5 3.5H11.25C11.25 3.08579 10.9142 2.75 10.5 2.75V3.5ZM10.5 10.5V11.25C10.9142 11.25 11.25 10.9142 11.25 10.5H10.5ZM3.5 10.5H2.75C2.75 10.9142 3.08579 11.25 3.5 11.25V10.5ZM3.5 13.5V12.75C3.08579 12.75 2.75 13.0858 2.75 13.5H3.5ZM10.5 13.5H11.25C11.25 13.0858 10.9142 12.75 10.5 12.75V13.5ZM10.5 20.5V21.25C10.9142 21.25 11.25 20.9142 11.25 20.5H10.5ZM3.5 20.5H2.75C2.75 20.9142 3.08579 21.25 3.5 21.25V20.5ZM13.5 3.5V2.75C13.0858 2.75 12.75 3.08579 12.75 3.5H13.5ZM20.5 3.5H21.25C21.25 3.08579 20.9142 2.75 20.5 2.75V3.5ZM20.5 10.5V11.25C20.9142 11.25 21.25 10.9142 21.25 10.5H20.5ZM13.5 10.5H12.75C12.75 10.9142 13.0858 11.25 13.5 11.25V10.5ZM13.5 13.5V12.75C13.0858 12.75 12.75 13.0858 12.75 13.5H13.5ZM20.5 13.5H21.25C21.25 13.0858 20.9142 12.75 20.5 12.75V13.5ZM20.5 20.5V21.25C20.9142 21.25 21.25 20.9142 21.25 20.5H20.5ZM13.5 20.5H12.75C12.75 20.9142 13.0858 21.25 13.5 21.25V20.5ZM3.5 4.25H10.5V2.75H3.5V4.25ZM9.75 3.5V10.5H11.25V3.5H9.75ZM10.5 9.75H3.5V11.25H10.5V9.75ZM4.25 10.5V3.5H2.75V10.5H4.25ZM3.5 14.25H10.5V12.75H3.5V14.25ZM9.75 13.5V20.5H11.25V13.5H9.75ZM10.5 19.75H3.5V21.25H10.5V19.75ZM4.25 20.5V13.5H2.75V20.5H4.25ZM13.5 4.25H20.5V2.75H13.5V4.25ZM19.75 3.5V10.5H21.25V3.5H19.75ZM20.5 9.75H13.5V11.25H20.5V9.75ZM14.25 10.5V3.5H12.75V10.5H14.25ZM13.5 14.25H20.5V12.75H13.5V14.25ZM19.75 13.5V20.5H21.25V13.5H19.75ZM20.5 19.75H13.5V21.25H20.5V19.75ZM14.25 20.5V13.5H12.75V20.5H14.25Z" fill={props.fillColor} />
);

const Grid4: VFC<Grid4Props> = (props) => {
    switch (props.variant) {
        case 'broken':
            return <Broken {...props} />;
        case 'duotone':
            return <Duotone {...props} />;
        case 'outline':
            return <Outline {...props} />;
    }
};

export default createIcon(Grid4);