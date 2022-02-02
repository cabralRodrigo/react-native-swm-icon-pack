import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type DuotoneProps = { fillColor: Color, };
type OutlineProps = { fillColor: Color, };

type DocumentCheckProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M15.5172 12.5431C15.8172 12.2574 15.8288 11.7827 15.5431 11.4828C15.2574 11.1828 14.7827 11.1712 14.4828 11.4569L15.5172 12.5431ZM10.8 16L10.2828 16.5431C10.5724 16.819 11.0276 16.819 11.3173 16.5431L10.8 16ZM9.51724 13.7426C9.21729 13.4569 8.74256 13.4685 8.4569 13.7685C8.17123 14.0684 8.18281 14.5431 8.48276 14.8288L9.51724 13.7426ZM5 3V2.25C4.58579 2.25 4.25 2.58579 4.25 3H5ZM14 3L14.5303 2.46967C14.3897 2.32902 14.1989 2.25 14 2.25V3ZM19 8H19.75C19.75 7.80109 19.671 7.61032 19.5303 7.46967L19 8ZM4.25 5C4.25 5.41421 4.58579 5.75 5 5.75C5.41421 5.75 5.75 5.41421 5.75 5H4.25ZM18.25 12C18.25 12.4142 18.5858 12.75 19 12.75C19.4142 12.75 19.75 12.4142 19.75 12H18.25ZM5 21H4.25C4.25 21.4142 4.58579 21.75 5 21.75V21ZM19 21V21.75C19.4142 21.75 19.75 21.4142 19.75 21H19ZM5.75 10C5.75 9.58579 5.41421 9.25 5 9.25C4.58579 9.25 4.25 9.58579 4.25 10H5.75ZM19.75 16C19.75 15.5858 19.4142 15.25 19 15.25C18.5858 15.25 18.25 15.5858 18.25 16H19.75ZM14.4828 11.4569L10.2828 15.4569L11.3173 16.5431L15.5172 12.5431L14.4828 11.4569ZM8.48276 14.8288L10.2828 16.5431L11.3173 15.4569L9.51724 13.7426L8.48276 14.8288ZM13 2.25H5V3.75H13V2.25ZM13 3.75H14V2.25H13V3.75ZM19.75 9V8H18.25V9H19.75ZM19.5303 7.46967L14.5303 2.46967L13.4697 3.53033L18.4697 8.53033L19.5303 7.46967ZM4.25 3V5H5.75V3H4.25ZM19.75 12V9H18.25V12H19.75ZM5 21.75H19V20.25H5V21.75ZM4.25 10V21H5.75V10H4.25ZM19.75 21V16H18.25V21H19.75ZM12.25 3V7H13.75V3H12.25ZM12.25 7C12.25 7.74392 12.6144 8.42507 13.0947 8.90533C13.5749 9.38559 14.2561 9.75 15 9.75V8.25C14.7439 8.25 14.4251 8.11441 14.1553 7.84467C13.8856 7.57493 13.75 7.25608 13.75 7H12.25ZM15 9.75H19V8.25H15V9.75Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <>
        <Path opacity="0.15" d="M5 21H19V9H15C13.8954 9 13 8.10457 13 7V3H5V21Z" fill={props.fillColor} />
        <Path d="M15.5172 12.5431C15.8172 12.2574 15.8288 11.7827 15.5431 11.4828C15.2574 11.1828 14.7827 11.1712 14.4828 11.4569L15.5172 12.5431ZM10.8 16L10.2828 16.5431C10.5724 16.819 11.0276 16.819 11.3173 16.5431L10.8 16ZM9.51724 13.7426C9.21729 13.4569 8.74256 13.4685 8.4569 13.7685C8.17123 14.0684 8.18281 14.5431 8.48276 14.8288L9.51724 13.7426ZM5 21H4.25C4.25 21.4142 4.58579 21.75 5 21.75V21ZM19 21V21.75C19.4142 21.75 19.75 21.4142 19.75 21H19ZM5 3V2.25C4.58579 2.25 4.25 2.58579 4.25 3H5ZM14 3L14.5303 2.46967C14.3897 2.32902 14.1989 2.25 14 2.25V3ZM19 8H19.75C19.75 7.80109 19.671 7.61032 19.5303 7.46967L19 8ZM14.4828 11.4569L10.2828 15.4569L11.3173 16.5431L15.5172 12.5431L14.4828 11.4569ZM8.48276 14.8288L10.2828 16.5431L11.3173 15.4569L9.51724 13.7426L8.48276 14.8288ZM5 21.75H19V20.25H5V21.75ZM4.25 3V21H5.75V3H4.25ZM13 2.25H5V3.75H13V2.25ZM19.75 21V9H18.25V21H19.75ZM13 3.75H14V2.25H13V3.75ZM19.75 9V8H18.25V9H19.75ZM19.5303 7.46967L14.5303 2.46967L13.4697 3.53033L18.4697 8.53033L19.5303 7.46967ZM12.25 3V7H13.75V3H12.25ZM12.25 7C12.25 7.74392 12.6144 8.42507 13.0947 8.90533C13.5749 9.38559 14.2561 9.75 15 9.75V8.25C14.7439 8.25 14.4251 8.11441 14.1553 7.84467C13.8856 7.57493 13.75 7.25608 13.75 7H12.25ZM15 9.75H19V8.25H15V9.75Z" fill={props.fillColor} />
    </>
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M15.5172 12.5431C15.8172 12.2574 15.8288 11.7827 15.5431 11.4828C15.2574 11.1828 14.7827 11.1712 14.4828 11.4569L15.5172 12.5431ZM10.8 16L10.2828 16.5431C10.5724 16.819 11.0276 16.819 11.3173 16.5431L10.8 16ZM9.51724 13.7426C9.21729 13.4569 8.74256 13.4685 8.4569 13.7685C8.17123 14.0684 8.18281 14.5431 8.48276 14.8288L9.51724 13.7426ZM5 21H4.25C4.25 21.4142 4.58579 21.75 5 21.75V21ZM19 21V21.75C19.4142 21.75 19.75 21.4142 19.75 21H19ZM5 3V2.25C4.58579 2.25 4.25 2.58579 4.25 3H5ZM14 3L14.5303 2.46967C14.3897 2.32902 14.1989 2.25 14 2.25V3ZM19 8H19.75C19.75 7.80109 19.671 7.61032 19.5303 7.46967L19 8ZM14.4828 11.4569L10.2828 15.4569L11.3173 16.5431L15.5172 12.5431L14.4828 11.4569ZM8.48276 14.8288L10.2828 16.5431L11.3173 15.4569L9.51724 13.7426L8.48276 14.8288ZM5 21.75H19V20.25H5V21.75ZM4.25 3V21H5.75V3H4.25ZM13 2.25H5V3.75H13V2.25ZM19.75 21V9H18.25V21H19.75ZM13 3.75H14V2.25H13V3.75ZM19.75 9V8H18.25V9H19.75ZM19.5303 7.46967L14.5303 2.46967L13.4697 3.53033L18.4697 8.53033L19.5303 7.46967ZM12.25 3V7H13.75V3H12.25ZM12.25 7C12.25 7.74392 12.6144 8.42507 13.0947 8.90533C13.5749 9.38559 14.2561 9.75 15 9.75V8.25C14.7439 8.25 14.4251 8.11441 14.1553 7.84467C13.8856 7.57493 13.75 7.25608 13.75 7H12.25ZM15 9.75H19V8.25H15V9.75Z" fill={props.fillColor} />
);

const DocumentCheck: VFC<DocumentCheckProps> = (props) => {
    switch (props.variant) {
        case 'broken':
            return <Broken {...props} />;
        case 'duotone':
            return <Duotone {...props} />;
        case 'outline':
            return <Outline {...props} />;
    }
};

export default createIcon(DocumentCheck);