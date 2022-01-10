import { Box, Stack } from '@chakra-ui/react';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface WithSectionProps {}

export function withSection<T extends WithSectionProps = WithSectionProps>(
  WrappedComponent: React.ComponentType<T>
) {
  // Try to create a nice displayName for React Dev Tools.
  const displayName =
    WrappedComponent.displayName || WrappedComponent.name || 'Component';

  // Creating the inner component. The calculated Props type here is the where the magic happens.
  const ComponentWithTheme = (props: Omit<T, keyof WithSectionProps>) => {
    // props comes afterwards so the can override the default ones.
    return (
      <Stack direction={'column'} width={'full'} spacing={'0'}>
        <WrappedComponent {...(props as T)} />
        <Box
          width={'full'}
          background={
            'linear-gradient(90deg, #04F8AD 0%, #3F81EF 50.52%, #8750F4 100%)'
          }
          height={'5px'}
        >
          &nbsp;
        </Box>
      </Stack>
    );
  };

  ComponentWithTheme.displayName = `withSection(${displayName})`;

  return ComponentWithTheme;
}
