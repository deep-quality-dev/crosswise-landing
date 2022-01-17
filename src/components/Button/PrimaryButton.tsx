import { Button, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

interface PrimaryButtonProps {
  label: string;
  cursor?: string;
  size?: string;
  onClick?: () => void;
}

const PrimaryButton = ({
  label,
  cursor,
  size,
  onClick,
  ...props
}: PrimaryButtonProps) => {
  return (
    <Button
      color={'white'}
      bgImage={'linear-gradient(107deg, #0fa, #4579f5 55%, #9c42f5)'}
      boxShadow={'0 .5rem 1rem rgba(0, 0, 0, .15)'}
      cursor={cursor}
      size={size}
      onClick={onClick}
      _hover={{
        bg: useColorModeValue('gray.100', 'whiteAlpha.100'),
        color: useColorModeValue('gray.600', 'white'),
        textDecoration: 'none',
      }}
      {...props}
    >
      {label}
    </Button>
  );
};

export default PrimaryButton;
