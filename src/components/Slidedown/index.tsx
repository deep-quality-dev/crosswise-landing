import React, { ReactNode } from 'react';
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';

interface SlideDownProps {
  open: boolean;
  children: ReactNode;
}

export const SlideDropDown = ({ open, children }: SlideDownProps) => {
  return (
    <SlideDown className={'my-dropdown-slidedown'}>
      {open ? children : null}
    </SlideDown>
  );
};
