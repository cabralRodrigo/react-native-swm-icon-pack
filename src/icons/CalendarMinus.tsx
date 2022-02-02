import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type DuotoneProps = { fillColor: Color, };
type OutlineProps = { fillColor: Color, };

type CalendarMinusProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M13 16.25C12.5858 16.25 12.25 16.5858 12.25 17C12.25 17.4142 12.5858 17.75 13 17.75V16.25ZM21 17.75C21.4142 17.75 21.75 17.4142 21.75 17C21.75 16.5858 21.4142 16.25 21 16.25V17.75ZM10 11.75C10.4142 11.75 10.75 11.4142 10.75 11C10.75 10.5858 10.4142 10.25 10 10.25V11.75ZM4 10.25C3.58579 10.25 3.25 10.5858 3.25 11C3.25 11.4142 3.58579 11.75 4 11.75V10.25ZM9.75 3C9.75 2.58579 9.41421 2.25 9 2.25C8.58579 2.25 8.25 2.58579 8.25 3H9.75ZM8.25 7C8.25 7.41421 8.58579 7.75 9 7.75C9.41421 7.75 9.75 7.41421 9.75 7H8.25ZM15.75 3C15.75 2.58579 15.4142 2.25 15 2.25C14.5858 2.25 14.25 2.58579 14.25 3H15.75ZM14.25 7C14.25 7.41421 14.5858 7.75 15 7.75C15.4142 7.75 15.75 7.41421 15.75 7H14.25ZM9 4.25C8.58579 4.25 8.25 4.58579 8.25 5C8.25 5.41421 8.58579 5.75 9 5.75V4.25ZM12 5.75C12.4142 5.75 12.75 5.41421 12.75 5C12.75 4.58579 12.4142 4.25 12 4.25V5.75ZM15 4.25C14.5858 4.25 14.25 4.58579 14.25 5C14.25 5.41421 14.5858 5.75 15 5.75V4.25ZM19.25 9C19.25 9.41421 19.5858 9.75 20 9.75C20.4142 9.75 20.75 9.41421 20.75 9H19.25ZM6 5.75C6.41421 5.75 6.75 5.41421 6.75 5C6.75 4.58579 6.41421 4.25 6 4.25V5.75ZM9 21.75C9.41421 21.75 9.75 21.4142 9.75 21C9.75 20.5858 9.41421 20.25 9 20.25V21.75ZM13 17.75H21V16.25H13V17.75ZM10 10.25H4V11.75H10V10.25ZM8.25 3V7H9.75V3H8.25ZM14.25 3V7H15.75V3H14.25ZM9 5.75H12V4.25H9V5.75ZM18 5.75C18.6904 5.75 19.25 6.30964 19.25 7H20.75C20.75 5.48122 19.5188 4.25 18 4.25V5.75ZM18 4.25H15V5.75H18V4.25ZM19.25 7V9H20.75V7H19.25ZM4.75 19V7H3.25V19H4.75ZM6 20.25C5.30964 20.25 4.75 19.6904 4.75 19H3.25C3.25 20.5188 4.48122 21.75 6 21.75V20.25ZM6 4.25C4.48122 4.25 3.25 5.48122 3.25 7H4.75C4.75 6.30964 5.30964 5.75 6 5.75V4.25ZM6 21.75H9V20.25H6V21.75Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <Path d="M13 16.25C12.5858 16.25 12.25 16.5858 12.25 17C12.25 17.4142 12.5858 17.75 13 17.75V16.25ZM21 17.75C21.4142 17.75 21.75 17.4142 21.75 17C21.75 16.5858 21.4142 16.25 21 16.25V17.75ZM10 11.75C10.4142 11.75 10.75 11.4142 10.75 11C10.75 10.5858 10.4142 10.25 10 10.25V11.75ZM4 10.25C3.58579 10.25 3.25 10.5858 3.25 11C3.25 11.4142 3.58579 11.75 4 11.75V10.25ZM19.25 9C19.25 9.41421 19.5858 9.75 20 9.75C20.4142 9.75 20.75 9.41421 20.75 9H19.25ZM10 21.75C10.4142 21.75 10.75 21.4142 10.75 21C10.75 20.5858 10.4142 20.25 10 20.25V21.75ZM15.75 3C15.75 2.58579 15.4142 2.25 15 2.25C14.5858 2.25 14.25 2.58579 14.25 3H15.75ZM14.25 7C14.25 7.41421 14.5858 7.75 15 7.75C15.4142 7.75 15.75 7.41421 15.75 7H14.25ZM9.75 3C9.75 2.58579 9.41421 2.25 9 2.25C8.58579 2.25 8.25 2.58579 8.25 3H9.75ZM8.25 7C8.25 7.41421 8.58579 7.75 9 7.75C9.41421 7.75 9.75 7.41421 9.75 7H8.25ZM13 17.75H21V16.25H13V17.75ZM10 10.25H4V11.75H10V10.25ZM4.75 19V7H3.25V19H4.75ZM6 20.25C5.30964 20.25 4.75 19.6904 4.75 19H3.25C3.25 20.5188 4.48122 21.75 6 21.75V20.25ZM6 4.25C4.48122 4.25 3.25 5.48122 3.25 7H4.75C4.75 6.30964 5.30964 5.75 6 5.75V4.25ZM20.75 9V7H19.25V9H20.75ZM18 5.75C18.6904 5.75 19.25 6.30964 19.25 7H20.75C20.75 5.48122 19.5188 4.25 18 4.25V5.75ZM18 4.25H6V5.75H18V4.25ZM6 21.75H10V20.25H6V21.75ZM14.25 3V7H15.75V3H14.25ZM8.25 3V7H9.75V3H8.25Z" fill={props.fillColor} />
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M13 16.25C12.5858 16.25 12.25 16.5858 12.25 17C12.25 17.4142 12.5858 17.75 13 17.75V16.25ZM21 17.75C21.4142 17.75 21.75 17.4142 21.75 17C21.75 16.5858 21.4142 16.25 21 16.25V17.75ZM10 11.75C10.4142 11.75 10.75 11.4142 10.75 11C10.75 10.5858 10.4142 10.25 10 10.25V11.75ZM4 10.25C3.58579 10.25 3.25 10.5858 3.25 11C3.25 11.4142 3.58579 11.75 4 11.75V10.25ZM19.25 9C19.25 9.41421 19.5858 9.75 20 9.75C20.4142 9.75 20.75 9.41421 20.75 9H19.25ZM10 21.75C10.4142 21.75 10.75 21.4142 10.75 21C10.75 20.5858 10.4142 20.25 10 20.25V21.75ZM15.75 3C15.75 2.58579 15.4142 2.25 15 2.25C14.5858 2.25 14.25 2.58579 14.25 3H15.75ZM14.25 7C14.25 7.41421 14.5858 7.75 15 7.75C15.4142 7.75 15.75 7.41421 15.75 7H14.25ZM9.75 3C9.75 2.58579 9.41421 2.25 9 2.25C8.58579 2.25 8.25 2.58579 8.25 3H9.75ZM8.25 7C8.25 7.41421 8.58579 7.75 9 7.75C9.41421 7.75 9.75 7.41421 9.75 7H8.25ZM13 17.75H21V16.25H13V17.75ZM10 10.25H4V11.75H10V10.25ZM4.75 19V7H3.25V19H4.75ZM6 20.25C5.30964 20.25 4.75 19.6904 4.75 19H3.25C3.25 20.5188 4.48122 21.75 6 21.75V20.25ZM6 4.25C4.48122 4.25 3.25 5.48122 3.25 7H4.75C4.75 6.30964 5.30964 5.75 6 5.75V4.25ZM20.75 9V7H19.25V9H20.75ZM18 5.75C18.6904 5.75 19.25 6.30964 19.25 7H20.75C20.75 5.48122 19.5188 4.25 18 4.25V5.75ZM18 4.25H6V5.75H18V4.25ZM6 21.75H10V20.25H6V21.75ZM14.25 3V7H15.75V3H14.25ZM8.25 3V7H9.75V3H8.25Z" fill={props.fillColor} />
);

const CalendarMinus: VFC<CalendarMinusProps> = (props) => {
    switch (props.variant) {
        case 'broken':
            return <Broken {...props} />;
        case 'duotone':
            return <Duotone {...props} />;
        case 'outline':
            return <Outline {...props} />;
    }
};

export default createIcon(CalendarMinus);