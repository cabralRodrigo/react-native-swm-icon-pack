import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type LocationMed2Props = { fillColor: Color, };

const LocationMed2: VFC<LocationMed2Props> = (props) => (
    <Path d="M4.66098 15.5947C4.98944 15.3424 5.05113 14.8715 4.79877 14.5431C4.54641 14.2146 4.07556 14.1529 3.7471 14.4053L4.66098 15.5947ZM7.83825 21.3166C8.24271 21.4059 8.64301 21.1504 8.73235 20.746C8.82168 20.3415 8.56622 19.9412 8.16175 19.8519L7.83825 21.3166ZM12 20.25C11.5858 20.25 11.25 20.5858 11.25 21C11.25 21.4142 11.5858 21.75 12 21.75V20.25ZM20.2529 14.4053C19.9244 14.1529 19.4536 14.2146 19.2012 14.5431C18.9489 14.8715 19.0106 15.3424 19.339 15.5947L20.2529 14.4053ZM11.6813 17.6789C12.0563 17.8549 12.5029 17.6937 12.6789 17.3187C12.8549 16.9437 12.6937 16.4971 12.3187 16.3211L11.6813 17.6789ZM14.5968 14.437C14.2858 14.7106 14.2556 15.1845 14.5292 15.4955C14.8028 15.8064 15.2767 15.8367 15.5877 15.563L14.5968 14.437ZM12.75 6.5C12.75 6.08579 12.4142 5.75 12 5.75C11.5858 5.75 11.25 6.08579 11.25 6.5H12.75ZM11.25 11.5C11.25 11.9142 11.5858 12.25 12 12.25C12.4142 12.25 12.75 11.9142 12.75 11.5H11.25ZM9.5 8.25C9.08579 8.25 8.75 8.58579 8.75 9C8.75 9.41421 9.08579 9.75 9.5 9.75V8.25ZM10 9.75C10.4142 9.75 10.75 9.41421 10.75 9C10.75 8.58579 10.4142 8.25 10 8.25V9.75ZM12 8.25C11.5858 8.25 11.25 8.58579 11.25 9C11.25 9.41421 11.5858 9.75 12 9.75V8.25ZM14.5 9.75C14.9142 9.75 15.25 9.41421 15.25 9C15.25 8.58579 14.9142 8.25 14.5 8.25V9.75ZM3.75 17C3.75 16.5968 3.99177 16.1089 4.66098 15.5947L3.7471 14.4053C2.88478 15.0678 2.25 15.9461 2.25 17H3.75ZM8.16175 19.8519C6.74115 19.5381 5.59304 19.0651 4.81985 18.5219C4.03332 17.9694 3.75 17.4345 3.75 17H2.25C2.25 18.1361 2.98496 19.066 3.95758 19.7493C4.94353 20.442 6.29542 20.9758 7.83825 21.3166L8.16175 19.8519ZM20.25 17C20.25 17.3082 20.1126 17.6584 19.7494 18.0399C19.3826 18.4254 18.8164 18.8066 18.0594 19.1431C16.5471 19.8152 14.4055 20.25 12 20.25V21.75C14.5651 21.75 16.9234 21.2894 18.6686 20.5138C19.5402 20.1264 20.292 19.6457 20.836 19.074C21.3838 18.4985 21.75 17.7963 21.75 17H20.25ZM19.339 15.5947C20.0082 16.1089 20.25 16.5968 20.25 17H21.75C21.75 15.9461 21.1152 15.0678 20.2529 14.4053L19.339 15.5947ZM12.3187 16.3211C9.12486 14.8218 6.75 12.2373 6.75 9.22222H5.25C5.25 13.08 8.24773 16.0671 11.6813 17.6789L12.3187 16.3211ZM6.75 9.22222C6.75 6.17405 9.12598 3.75 12 3.75V2.25C8.2466 2.25 5.25 5.39751 5.25 9.22222H6.75ZM12 3.75C14.874 3.75 17.25 6.17405 17.25 9.22222H18.75C18.75 5.39751 15.7534 2.25 12 2.25V3.75ZM17.25 9.22222C17.25 11.2097 16.229 13.0007 14.5968 14.437L15.5877 15.563C17.4403 13.9328 18.75 11.7615 18.75 9.22222H17.25ZM11.25 6.5V11.5H12.75V6.5H11.25ZM9.5 9.75H10V8.25H9.5V9.75ZM12 9.75H14.5V8.25H12V9.75Z" fill={props.fillColor} />
);

export default createIcon(LocationMed2);