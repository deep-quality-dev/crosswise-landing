import { keyframes } from '@chakra-ui/react';
import {
  fadeIn,
  fadeInLeft,
  fadeInRight,
  fadeInDown,
  fadeInUp,
  fadeInDownBig,
  fadeInUpBig,
  bounceIn,
  slideInDown,
  zoomIn,
  flip,
} from 'react-animations';

const fadeInAnim = keyframes`${fadeIn}`;
const fadeInLeftAnim = keyframes`${fadeInLeft}`;
const fadeInRightAnim = keyframes`${fadeInRight}`;
const fadeInDownAnim = keyframes`${fadeInDown}`;
const fadeInUpAnim = keyframes`${fadeInUp}`;
const fadeInDownBigAnim = keyframes`${fadeInDownBig}`;
const fadeInUpBigAnim = keyframes`${fadeInUpBig}`;

const bounceInAnim = keyframes`${bounceIn}`;

const slideInDownAnim = keyframes`${slideInDown}`;

const zoomInAnim = keyframes`${zoomIn}`;

const flipAnim = keyframes`${flip}`;

export const fadeInAnimation = `${fadeInAnim} 0.5s linear`;
export const fadeInLeftAnimation = `${fadeInLeftAnim} 0.5s linear`;
export const fadeInRightAnimation = `${fadeInRightAnim} 0.5s linear`;
export const fadeInDownAnimation = `${fadeInDownAnim} 0.5s linear`;
export const fadeInUpAnimation = `${fadeInUpAnim} 0.5s linear`;
export const fadeInDownBigAnimation = `${fadeInDownBigAnim} 0.5s linear`;
export const fadeInUpBigAnimation = `${fadeInUpBigAnim} 0.5s linear`;

export const bounceInAnimation = `${bounceInAnim} 2s linear`;

export const slideInDownAnimation = `${slideInDownAnim} 2s linear`;

export const zoomInAnimation = `${zoomInAnim} 1s linear`;

export const flipAnimation = `${flipAnim} 2s linear`;
