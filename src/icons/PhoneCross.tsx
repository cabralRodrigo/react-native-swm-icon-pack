import React, { VFC } from 'react';
import { Color, Path } from 'react-native-svg';
import { createIcon } from '../helpers';

type BrokenProps = { fillColor: Color, };
type DuotoneProps = { fillColor: Color, };
type OutlineProps = { fillColor: Color, };

type PhoneCrossProps = 
    { variant: 'broken' } & BrokenProps |
    { variant: 'duotone' } & DuotoneProps |
    { variant: 'outline' } & OutlineProps;

const Broken: VFC<BrokenProps> = (props) => (
    <Path d="M21.5303 3.53033C21.8232 3.23744 21.8232 2.76256 21.5303 2.46967C21.2374 2.17678 20.7626 2.17678 20.4697 2.46967L21.5303 3.53033ZM14.4697 8.46967C14.1768 8.76256 14.1768 9.23744 14.4697 9.53033C14.7626 9.82322 15.2374 9.82322 15.5303 9.53033L14.4697 8.46967ZM15.5303 2.46967C15.2374 2.17678 14.7626 2.17678 14.4697 2.46967C14.1768 2.76256 14.1768 3.23744 14.4697 3.53033L15.5303 2.46967ZM20.4697 9.53033C20.7626 9.82322 21.2374 9.82322 21.5303 9.53033C21.8232 9.23744 21.8232 8.76256 21.5303 8.46967L20.4697 9.53033ZM20.9994 16.4767L20.2496 16.458C20.2495 16.4643 20.2494 16.4705 20.2494 16.4767H20.9994ZM20.9994 19.1864H20.2494L20.2494 19.1895L20.9994 19.1864ZM20.5709 15.2641L19.9991 15.7494L20.5709 15.2641ZM15.8851 13.935L15.7289 13.2014L15.8851 13.935ZM13.8405 15.5644L13.4703 16.2167C13.7635 16.3831 14.1317 16.3334 14.3703 16.0952L13.8405 15.5644ZM19.0938 20.246C18.6812 20.2088 18.3166 20.5131 18.2794 20.9256C18.2422 21.3381 18.5465 21.7027 18.959 21.7399L19.0938 20.246ZM11.5173 12.9126C11.2174 12.6269 10.7427 12.6384 10.457 12.9383C10.1713 13.2382 10.1828 13.713 10.4827 13.9987L11.5173 12.9126ZM4.80811 3.00009V2.25009L4.8074 2.25009L4.80811 3.00009ZM7.52325 3.00009V3.75012L7.53062 3.75005L7.52325 3.00009ZM8.72131 3.43684L8.23284 4.00596V4.00596L8.72131 3.43684ZM10.0428 8.10428L10.7763 8.26101L10.0428 8.10428ZM7.88039 9.61399C7.58721 9.90659 7.58674 10.3815 7.87934 10.6746C8.17194 10.9678 8.64682 10.9683 8.94 10.6757L7.88039 9.61399ZM3.00706 4.96919L3.75706 4.96978C3.75708 4.947 3.75606 4.92424 3.75401 4.90155L3.00706 4.96919ZM14.8191 21.2352C15.2211 21.3351 15.6279 21.0902 15.7279 20.6882C15.8278 20.2862 15.5829 19.8794 15.1809 19.7795L14.8191 21.2352ZM20.4697 2.46967L14.4697 8.46967L15.5303 9.53033L21.5303 3.53033L20.4697 2.46967ZM14.4697 3.53033L20.4697 9.53033L21.5303 8.46967L15.5303 2.46967L14.4697 3.53033ZM20.2494 16.4767V19.1864H21.7494V16.4767H20.2494ZM19.9991 15.7494C20.167 15.9472 20.2561 16.1994 20.2496 16.458L21.7492 16.4953C21.7648 15.868 21.5488 15.2571 21.1426 14.7787L19.9991 15.7494ZM16.0412 14.6686C16.4183 14.5883 17.2499 14.6466 18.1485 14.8801C18.5799 14.9922 18.9897 15.1355 19.3278 15.2975C19.6782 15.4655 19.8953 15.6272 19.9991 15.7494L21.1426 14.7787C20.8417 14.4242 20.4084 14.1521 19.9762 13.945C19.5317 13.7318 19.027 13.5585 18.5257 13.4283C17.5588 13.177 16.4523 13.0475 15.7289 13.2014L16.0412 14.6686ZM14.3703 16.0952C14.532 15.9339 14.6946 15.7535 14.8396 15.5953C14.991 15.4303 15.1317 15.2798 15.2753 15.1446C15.5686 14.8684 15.8112 14.7175 16.0412 14.6686L15.7289 13.2014C15.1012 13.3351 14.6149 13.7061 14.2469 14.0526C14.0599 14.2287 13.887 14.4147 13.7341 14.5815C13.5748 14.7553 13.4423 14.9022 13.3107 15.0335L14.3703 16.0952ZM20.2494 19.1895C20.2518 19.7851 19.6976 20.3005 19.0938 20.246L18.959 21.7399C20.4468 21.8741 21.7554 20.6595 21.7494 19.1834L20.2494 19.1895ZM10.4827 13.9987C11.38 14.8534 12.3825 15.5993 13.4703 16.2167L14.2106 14.9121C13.2299 14.3555 12.3261 13.6831 11.5173 12.9126L10.4827 13.9987ZM4.80811 3.75009H7.52325V2.25009H4.80811V3.75009ZM7.53062 3.75005C7.78828 3.74752 8.03785 3.8386 8.23284 4.00596L9.20979 2.86772C8.73872 2.46341 8.13667 2.24403 7.51588 2.25012L7.53062 3.75005ZM8.23284 4.00596C8.35543 4.11118 8.51653 4.32916 8.68363 4.67844C8.84491 5.01557 8.98754 5.42365 9.09912 5.85282C9.3316 6.74707 9.38943 7.57289 9.30937 7.94755L10.7763 8.26101C10.9305 7.53916 10.801 6.43759 10.5509 5.47541C10.4211 4.97637 10.2486 4.47397 10.0368 4.0311C9.83069 3.60038 9.56061 3.16883 9.20979 2.86772L8.23284 4.00596ZM9.30937 7.94755C9.26052 8.17614 9.10977 8.41795 8.83294 8.71075C8.69747 8.85403 8.54667 8.99453 8.38127 9.1456C8.22279 9.29036 8.0421 9.45259 7.88039 9.61399L8.94 10.6757C9.07164 10.5443 9.21884 10.4121 9.39289 10.2531C9.56004 10.1005 9.74642 9.92793 9.9229 9.74128C10.27 9.3742 10.6422 8.8885 10.7763 8.26101L9.30937 7.94755ZM3.75401 4.90155C3.7 4.30506 4.20998 3.75065 4.80881 3.75009L4.8074 2.25009C3.33717 2.25147 2.12575 3.55284 2.26012 5.03682L3.75401 4.90155ZM15.1809 19.7795C8.51701 18.1232 3.75136 12.2036 3.75706 4.96978L2.25706 4.96859C2.25082 12.8915 7.48566 19.4126 14.8191 21.2352L15.1809 19.7795Z" fill={props.fillColor} />
);

const Duotone: VFC<DuotoneProps> = (props) => (
    <>
        <Path opacity="0.15" d="M20.9994 16.4767V19.1864C21.0036 20.2223 20.0722 21.0873 19.0264 20.9929C10 21 3 13.935 3.00706 4.96919C2.91287 3.92895 3.77358 3.00106 4.80811 3.00009H7.52325C7.96247 2.99577 8.38828 3.151 8.72131 3.43684C9.66813 4.24949 10.2771 7.00777 10.0428 8.10428C9.85987 8.96036 8.9969 9.55929 8.41019 10.1448C9.69858 12.4062 11.5746 14.2785 13.8405 15.5644C14.4272 14.9788 15.0273 14.1176 15.8851 13.935C16.9855 13.7008 19.7615 14.3106 20.5709 15.264C20.8579 15.6021 21.0104 16.0337 20.9994 16.4767Z" fill={props.fillColor} />
        <Path d="M21.5303 3.53033C21.8232 3.23744 21.8232 2.76256 21.5303 2.46967C21.2374 2.17678 20.7626 2.17678 20.4697 2.46967L21.5303 3.53033ZM14.4697 8.46967C14.1768 8.76256 14.1768 9.23744 14.4697 9.53033C14.7626 9.82322 15.2374 9.82322 15.5303 9.53033L14.4697 8.46967ZM15.5303 2.46967C15.2374 2.17678 14.7626 2.17678 14.4697 2.46967C14.1768 2.76256 14.1768 3.23744 14.4697 3.53033L15.5303 2.46967ZM20.4697 9.53033C20.7626 9.82322 21.2374 9.82322 21.5303 9.53033C21.8232 9.23744 21.8232 8.76256 21.5303 8.46967L20.4697 9.53033ZM20.9994 16.4767L20.2496 16.458C20.2495 16.4642 20.2494 16.4705 20.2494 16.4767H20.9994ZM20.9994 19.1864H20.2494L20.2494 19.1895L20.9994 19.1864ZM4.80811 3.00009V2.25009L4.8074 2.25009L4.80811 3.00009ZM7.52325 3.00009V3.75012L7.53062 3.75005L7.52325 3.00009ZM8.72131 3.43684L8.23284 4.00596V4.00596L8.72131 3.43684ZM8.41019 10.1448L7.88039 9.61399C7.64106 9.85285 7.59115 10.2223 7.75854 10.5161L8.41019 10.1448ZM13.8405 15.5644L13.4703 16.2167C13.7635 16.383 14.1317 16.3334 14.3703 16.0952L13.8405 15.5644ZM20.5709 15.264L21.1426 14.7786V14.7786L20.5709 15.264ZM10.0428 8.10428L10.7763 8.26101L10.0428 8.10428ZM15.8851 13.935L16.0412 14.6686L15.8851 13.935ZM19.0264 20.9929L19.0938 20.246C19.0712 20.2439 19.0485 20.2429 19.0258 20.2429L19.0264 20.9929ZM3.00706 4.96919L3.75706 4.96978C3.75708 4.947 3.75606 4.92424 3.75401 4.90155L3.00706 4.96919ZM20.4697 2.46967L14.4697 8.46967L15.5303 9.53033L21.5303 3.53033L20.4697 2.46967ZM14.4697 3.53033L20.4697 9.53033L21.5303 8.46967L15.5303 2.46967L14.4697 3.53033ZM20.2494 16.4767V19.1864H21.7494V16.4767H20.2494ZM4.80811 3.75009H7.52325V2.25009H4.80811V3.75009ZM7.53062 3.75005C7.78828 3.74752 8.03785 3.8386 8.23284 4.00596L9.20979 2.86772C8.73872 2.46341 8.13667 2.24403 7.51588 2.25012L7.53062 3.75005ZM7.75854 10.5161C9.11382 12.8949 11.0872 14.8643 13.4703 16.2167L14.2106 14.9121C12.0621 13.6928 10.2833 11.9175 9.06185 9.77357L7.75854 10.5161ZM19.9991 15.7494C20.167 15.9472 20.2561 16.1994 20.2496 16.458L21.7492 16.4953C21.7648 15.868 21.5488 15.257 21.1426 14.7786L19.9991 15.7494ZM8.23284 4.00596C8.35543 4.11118 8.51653 4.32916 8.68363 4.67844C8.84491 5.01557 8.98754 5.42365 9.09912 5.85282C9.3316 6.74707 9.38943 7.57289 9.30937 7.94755L10.7763 8.26101C10.9305 7.53916 10.801 6.43759 10.5509 5.47541C10.4211 4.97637 10.2486 4.47397 10.0368 4.0311C9.83069 3.60038 9.56061 3.16883 9.20979 2.86772L8.23284 4.00596ZM16.0412 14.6686C16.4183 14.5883 17.2499 14.6466 18.1485 14.8801C18.5799 14.9922 18.9897 15.1355 19.3278 15.2975C19.6782 15.4655 19.8953 15.6272 19.9991 15.7494L21.1426 14.7786C20.8417 14.4242 20.4084 14.1521 19.9762 13.9449C19.5317 13.7318 19.027 13.5585 18.5257 13.4283C17.5588 13.177 16.4523 13.0475 15.7289 13.2014L16.0412 14.6686ZM14.3703 16.0952C14.532 15.9338 14.6946 15.7535 14.8396 15.5953C14.991 15.4303 15.1317 15.2798 15.2753 15.1446C15.5686 14.8684 15.8112 14.7175 16.0412 14.6686L15.7289 13.2014C15.1012 13.335 14.6149 13.7061 14.2469 14.0526C14.0599 14.2287 13.887 14.4147 13.7341 14.5815C13.5748 14.7552 13.4423 14.9021 13.3107 15.0335L14.3703 16.0952ZM9.30937 7.94755C9.26052 8.17614 9.10977 8.41795 8.83294 8.71075C8.69747 8.85403 8.54667 8.99453 8.38127 9.1456C8.22279 9.29036 8.0421 9.45259 7.88039 9.61399L8.94 10.6757C9.07164 10.5443 9.21884 10.4121 9.39289 10.2531C9.56004 10.1005 9.74642 9.92793 9.9229 9.74128C10.27 9.3742 10.6422 8.8885 10.7763 8.26101L9.30937 7.94755ZM19.0258 20.2429C10.4162 20.2497 3.75032 13.523 3.75706 4.96978L2.25706 4.96859C2.24968 14.3469 9.58379 21.7503 19.027 21.7429L19.0258 20.2429ZM20.2494 19.1895C20.2518 19.7851 19.6976 20.3004 19.0938 20.246L18.959 21.7399C20.4468 21.8741 21.7554 20.6595 21.7494 19.1834L20.2494 19.1895ZM3.75401 4.90155C3.7 4.30506 4.20998 3.75065 4.80881 3.75009L4.8074 2.25009C3.33717 2.25147 2.12575 3.55284 2.26012 5.03682L3.75401 4.90155Z" fill={props.fillColor} />
    </>
);

const Outline: VFC<OutlineProps> = (props) => (
    <Path d="M21.5303 3.53033C21.8232 3.23744 21.8232 2.76256 21.5303 2.46967C21.2374 2.17678 20.7626 2.17678 20.4697 2.46967L21.5303 3.53033ZM14.4697 8.46967C14.1768 8.76256 14.1768 9.23744 14.4697 9.53033C14.7626 9.82322 15.2374 9.82322 15.5303 9.53033L14.4697 8.46967ZM15.5303 2.46967C15.2374 2.17678 14.7626 2.17678 14.4697 2.46967C14.1768 2.76256 14.1768 3.23744 14.4697 3.53033L15.5303 2.46967ZM20.4697 9.53033C20.7626 9.82322 21.2374 9.82322 21.5303 9.53033C21.8232 9.23744 21.8232 8.76256 21.5303 8.46967L20.4697 9.53033ZM20.9995 16.4767L20.2497 16.458C20.2495 16.4642 20.2495 16.4705 20.2495 16.4767H20.9995ZM20.9995 19.1864H20.2494L20.2495 19.1895L20.9995 19.1864ZM4.80817 3.00009V2.25009L4.80746 2.25009L4.80817 3.00009ZM7.52331 3.00009V3.75012L7.53068 3.75005L7.52331 3.00009ZM8.72138 3.43684L8.2329 4.00596V4.00596L8.72138 3.43684ZM8.41026 10.1448L7.88045 9.61399C7.64112 9.85285 7.59121 10.2223 7.7586 10.5161L8.41026 10.1448ZM13.8405 15.5644L13.4704 16.2167C13.7636 16.383 14.1317 16.3334 14.3703 16.0952L13.8405 15.5644ZM20.5709 15.264L21.1427 14.7786V14.7786L20.5709 15.264ZM10.0429 8.10428L10.7763 8.26101L10.0429 8.10428ZM15.8851 13.935L16.0413 14.6686L15.8851 13.935ZM19.0265 20.9929L19.0938 20.246C19.0712 20.2439 19.0486 20.2429 19.0259 20.2429L19.0265 20.9929ZM3.00713 4.96919L3.75713 4.96978C3.75714 4.947 3.75612 4.92424 3.75407 4.90155L3.00713 4.96919ZM20.4697 2.46967L14.4697 8.46967L15.5303 9.53033L21.5303 3.53033L20.4697 2.46967ZM14.4697 3.53033L20.4697 9.53033L21.5303 8.46967L15.5303 2.46967L14.4697 3.53033ZM20.2495 16.4767V19.1864H21.7495V16.4767H20.2495ZM4.80817 3.75009H7.52331V2.25009H4.80817V3.75009ZM7.53068 3.75005C7.78834 3.74752 8.03791 3.8386 8.2329 4.00596L9.20985 2.86772C8.73878 2.46341 8.13673 2.24403 7.51594 2.25012L7.53068 3.75005ZM7.7586 10.5161C9.11389 12.8949 11.0873 14.8643 13.4704 16.2167L14.2107 14.9121C12.0622 13.6928 10.2834 11.9175 9.06191 9.77357L7.7586 10.5161ZM19.9992 15.7494C20.1671 15.9472 20.2561 16.1994 20.2497 16.458L21.7492 16.4953C21.7648 15.868 21.5488 15.257 21.1427 14.7786L19.9992 15.7494ZM8.2329 4.00596C8.35549 4.11118 8.51659 4.32916 8.68369 4.67844C8.84497 5.01557 8.9876 5.42365 9.09918 5.85282C9.33166 6.74707 9.38949 7.57289 9.30943 7.94755L10.7763 8.26101C10.9306 7.53916 10.8011 6.43759 10.5509 5.47541C10.4212 4.97637 10.2487 4.47397 10.0368 4.0311C9.83075 3.60038 9.56067 3.16883 9.20985 2.86772L8.2329 4.00596ZM16.0413 14.6686C16.4183 14.5883 17.25 14.6466 18.1485 14.8801C18.58 14.9922 18.9898 15.1355 19.3278 15.2975C19.6782 15.4655 19.8954 15.6272 19.9992 15.7494L21.1427 14.7786C20.8418 14.4242 20.4084 14.1521 19.9763 13.9449C19.5318 13.7318 19.0271 13.5585 18.5258 13.4283C17.5589 13.177 16.4523 13.0475 15.729 13.2014L16.0413 14.6686ZM14.3703 16.0952C14.5321 15.9338 14.6946 15.7535 14.8397 15.5953C14.991 15.4303 15.1318 15.2798 15.2754 15.1446C15.5686 14.8684 15.8113 14.7175 16.0413 14.6686L15.729 13.2014C15.1012 13.335 14.6149 13.7061 14.247 14.0526C14.06 14.2287 13.8871 14.4147 13.7341 14.5815C13.5748 14.7552 13.4424 14.9021 13.3107 15.0335L14.3703 16.0952ZM9.30943 7.94755C9.26059 8.17614 9.10984 8.41795 8.833 8.71075C8.69753 8.85403 8.54673 8.99453 8.38134 9.1456C8.22285 9.29036 8.04217 9.45259 7.88045 9.61399L8.94006 10.6757C9.0717 10.5443 9.21891 10.4121 9.39295 10.2531C9.5601 10.1005 9.74648 9.92793 9.92296 9.74128C10.27 9.3742 10.6422 8.8885 10.7763 8.26101L9.30943 7.94755ZM19.0259 20.2429C10.4163 20.2497 3.75039 13.523 3.75713 4.96978L2.25713 4.96859C2.24974 14.3469 9.58385 21.7503 19.027 21.7429L19.0259 20.2429ZM20.2495 19.1895C20.2519 19.7851 19.6976 20.3004 19.0938 20.246L18.9591 21.7399C20.4469 21.8741 21.7555 20.6595 21.7494 19.1834L20.2495 19.1895ZM3.75407 4.90155C3.70006 4.30506 4.21004 3.75065 4.80887 3.75009L4.80746 2.25009C3.33723 2.25147 2.12581 3.55284 2.26018 5.03682L3.75407 4.90155Z" fill={props.fillColor} />
);

const PhoneCross: VFC<PhoneCrossProps> = (props) => {
    switch (props.variant) {
        case 'broken':
            return <Broken {...props} />;
        case 'duotone':
            return <Duotone {...props} />;
        case 'outline':
            return <Outline {...props} />;
    }
};

export default createIcon(PhoneCross);