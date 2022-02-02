import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type QuoteProps = { fillColor: Color, };

const Quote: VFC<QuoteProps> = (props) => (
    <Path d="M16.5 14L17.0303 13.4697C16.8897 13.329 16.6989 13.25 16.5 13.25V14ZM20 17.5L19.4697 18.0303C19.6842 18.2448 20.0068 18.309 20.287 18.1929C20.5673 18.0768 20.75 17.8033 20.75 17.5H20ZM6.5 14L7.03033 13.4697C6.88968 13.329 6.69891 13.25 6.5 13.25V14ZM10 17.5L9.46967 18.0303C9.68417 18.2448 10.0068 18.309 10.287 18.1929C10.5673 18.0768 10.75 17.8033 10.75 17.5H10ZM16.5 13.25C14.9812 13.25 13.75 12.0188 13.75 10.5H12.25C12.25 12.8472 14.1528 14.75 16.5 14.75V13.25ZM13.75 10.5C13.75 8.98122 14.9812 7.75 16.5 7.75V6.25C14.1528 6.25 12.25 8.15279 12.25 10.5H13.75ZM16.5 7.75C18.0188 7.75 19.25 8.98122 19.25 10.5H20.75C20.75 8.15279 18.8472 6.25 16.5 6.25V7.75ZM15.9697 14.5303L19.4697 18.0303L20.5303 16.9697L17.0303 13.4697L15.9697 14.5303ZM20.75 17.5V10.5H19.25V17.5H20.75ZM6.5 13.25C4.98122 13.25 3.75 12.0188 3.75 10.5H2.25C2.25 12.8472 4.15279 14.75 6.5 14.75V13.25ZM3.75 10.5C3.75 8.98122 4.98122 7.75 6.5 7.75V6.25C4.15279 6.25 2.25 8.15279 2.25 10.5H3.75ZM6.5 7.75C8.01878 7.75 9.25 8.98122 9.25 10.5H10.75C10.75 8.15279 8.84721 6.25 6.5 6.25V7.75ZM5.96967 14.5303L9.46967 18.0303L10.5303 16.9697L7.03033 13.4697L5.96967 14.5303ZM10.75 17.5V10.5H9.25V17.5H10.75Z" fill={props.fillColor} />
);

export default createIcon(Quote);