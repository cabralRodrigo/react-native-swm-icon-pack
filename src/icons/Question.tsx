import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type CurvedProps = { fillColor: Color, };
type DuotoneProps = { fillColor: Color, };
type OutlineProps = { fillColor: Color, };

type QuestionProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'curved' } & CurvedProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M11.25 19C11.25 19.4142 11.5858 19.75 12 19.75C12.4142 19.75 12.75 19.4142 12.75 19H11.25ZM12.75 18.99C12.75 18.5758 12.4142 18.24 12 18.24C11.5858 18.24 11.25 18.5758 11.25 18.99H12.75ZM7.39965 7.81306C7.2964 8.2142 7.53789 8.62308 7.93903 8.72633C8.34017 8.82957 8.74906 8.58808 8.8523 8.18694L7.39965 7.81306ZM13.6244 6.18435C13.983 6.39176 14.4418 6.26925 14.6492 5.9107C14.8566 5.55216 14.7341 5.09336 14.3756 4.88595L13.6244 6.18435ZM11.25 16C11.25 16.4142 11.5858 16.75 12 16.75C12.4142 16.75 12.75 16.4142 12.75 16H11.25ZM16.6003 7.81306C16.497 7.41192 16.0881 7.17043 15.687 7.27367C15.2859 7.37692 15.0444 7.7858 15.1476 8.18694L16.6003 7.81306ZM12.75 19V18.99H11.25V19H12.75ZM8.8523 8.18694C9.21313 6.78504 10.4866 5.75 12 5.75V4.25C9.78562 4.25 7.92691 5.76451 7.39965 7.81306L8.8523 8.18694ZM12 5.75C12.5932 5.75 13.1472 5.90826 13.6244 6.18435L14.3756 4.88595C13.6761 4.48134 12.8639 4.25 12 4.25V5.75ZM15.25 9C15.25 9.70955 15.0549 10.137 14.7893 10.469C14.4894 10.8439 14.0907 11.1194 13.55 11.525C13.0399 11.9075 12.4439 12.3822 11.9909 13.0995C11.5289 13.831 11.25 14.7559 11.25 16H12.75C12.75 14.9941 12.9711 14.3565 13.2591 13.9005C13.5561 13.4303 13.96 13.0925 14.45 12.725C14.9092 12.3806 15.5106 11.9686 15.9606 11.406C16.445 10.8005 16.75 10.0405 16.75 9H15.25ZM15.1476 8.18694C15.2143 8.44601 15.25 8.71829 15.25 9H16.75C16.75 8.59111 16.6981 8.19323 16.6003 7.81306L15.1476 8.18694Z" fill={props.fillColor} />
);

const Curved: VFC<CurvedProps> = (props) => (
    <Path d="M11.25 19C11.25 19.4142 11.5858 19.75 12 19.75C12.4142 19.75 12.75 19.4142 12.75 19H11.25ZM12.75 18.99C12.75 18.5758 12.4142 18.24 12 18.24C11.5858 18.24 11.25 18.5758 11.25 18.99H12.75ZM11.25 16C11.25 16.4142 11.5857 16.75 12 16.75C12.4142 16.75 12.75 16.4142 12.75 16H11.25ZM7.39965 7.81306C7.2964 8.2142 7.53789 8.62308 7.93903 8.72633C8.34017 8.82957 8.74906 8.58808 8.8523 8.18694L7.39965 7.81306ZM12.75 19V18.99H11.25V19H12.75ZM15.25 9C15.25 9.70955 15.0549 10.137 14.7893 10.469C14.4893 10.8439 14.0907 11.1194 13.55 11.525C13.0399 11.9075 12.4439 12.3822 11.9908 13.0995C11.5289 13.831 11.25 14.7559 11.25 16H12.75C12.75 14.9941 12.9711 14.3565 13.2591 13.9005C13.5561 13.4303 13.96 13.0925 14.45 12.725C14.9092 12.3806 15.5106 11.9686 15.9606 11.406C16.445 10.8005 16.75 10.0405 16.75 9H15.25ZM12 5.75C13.7949 5.75 15.25 7.20507 15.25 9H16.75C16.75 6.37665 14.6233 4.25 12 4.25V5.75ZM8.8523 8.18694C9.21313 6.78504 10.4866 5.75 12 5.75V4.25C9.78562 4.25 7.92691 5.76451 7.39965 7.81306L8.8523 8.18694Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <Path d="M11.25 19C11.25 19.4142 11.5858 19.75 12 19.75C12.4142 19.75 12.75 19.4142 12.75 19H11.25ZM12.75 18.99C12.75 18.5758 12.4142 18.24 12 18.24C11.5858 18.24 11.25 18.5758 11.25 18.99H12.75ZM11.25 16C11.25 16.4142 11.5857 16.75 12 16.75C12.4142 16.75 12.75 16.4142 12.75 16H11.25ZM7.39965 7.81306C7.2964 8.2142 7.53789 8.62308 7.93903 8.72633C8.34017 8.82957 8.74906 8.58808 8.8523 8.18694L7.39965 7.81306ZM12.75 19V18.99H11.25V19H12.75ZM15.25 9C15.25 9.70955 15.0549 10.137 14.7893 10.469C14.4893 10.8439 14.0907 11.1194 13.55 11.525C13.0399 11.9075 12.4439 12.3822 11.9908 13.0995C11.5289 13.831 11.25 14.7559 11.25 16H12.75C12.75 14.9941 12.9711 14.3565 13.2591 13.9005C13.5561 13.4303 13.96 13.0925 14.45 12.725C14.9092 12.3806 15.5106 11.9686 15.9606 11.406C16.445 10.8005 16.75 10.0405 16.75 9H15.25ZM12 5.75C13.7949 5.75 15.25 7.20507 15.25 9H16.75C16.75 6.37665 14.6233 4.25 12 4.25V5.75ZM8.8523 8.18694C9.21313 6.78504 10.4866 5.75 12 5.75V4.25C9.78562 4.25 7.92691 5.76451 7.39965 7.81306L8.8523 8.18694Z" fill={props.fillColor} />
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M11.25 19C11.25 19.4142 11.5858 19.75 12 19.75C12.4142 19.75 12.75 19.4142 12.75 19H11.25ZM12.75 18.99C12.75 18.5758 12.4142 18.24 12 18.24C11.5858 18.24 11.25 18.5758 11.25 18.99H12.75ZM11.25 16C11.25 16.4142 11.5857 16.75 12 16.75C12.4142 16.75 12.75 16.4142 12.75 16H11.25ZM7.39965 7.81306C7.2964 8.2142 7.53789 8.62308 7.93903 8.72633C8.34017 8.82957 8.74906 8.58808 8.8523 8.18694L7.39965 7.81306ZM12.75 19V18.99H11.25V19H12.75ZM15.25 9C15.25 9.70955 15.0549 10.137 14.7893 10.469C14.4893 10.8439 14.0907 11.1194 13.55 11.525C13.0399 11.9075 12.4439 12.3822 11.9908 13.0995C11.5289 13.831 11.25 14.7559 11.25 16H12.75C12.75 14.9941 12.9711 14.3565 13.2591 13.9005C13.5561 13.4303 13.96 13.0925 14.45 12.725C14.9092 12.3806 15.5106 11.9686 15.9606 11.406C16.445 10.8005 16.75 10.0405 16.75 9H15.25ZM12 5.75C13.7949 5.75 15.25 7.20507 15.25 9H16.75C16.75 6.37665 14.6233 4.25 12 4.25V5.75ZM8.8523 8.18694C9.21313 6.78504 10.4866 5.75 12 5.75V4.25C9.78562 4.25 7.92691 5.76451 7.39965 7.81306L8.8523 8.18694Z" fill={props.fillColor} />
);

const Question: VFC<QuestionProps> = (props) => {
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

export default createIcon(Question);