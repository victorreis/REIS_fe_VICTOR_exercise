import React, {
  useState,
  forwardRef,
  ForwardRefRenderFunction,
  useMemo,
  HTMLInputTypeAttribute,
} from 'react';
import { IconType } from 'react-icons';

import {
  Input,
  InputContainer,
  InputIconsContainer,
  InputLabel,
} from './styles';

export type TextInputProps = {
  value: string;
  onChange: (newValue: string) => void;
  type?: HTMLInputTypeAttribute;
  label?: string;
  leftSlot?: IconType | string;
  rightSlot?: IconType | string;
  min?: string | number;
} & Omit<React.HTMLAttributes<HTMLInputElement>, 'onChange'>;

const TextInputComponent: ForwardRefRenderFunction<
  HTMLInputElement,
  TextInputProps
> = (props, ref) => {
  const {
    value: initialValue,
    onChange,
    label,
    type = 'text',
    leftSlot,
    rightSlot,
    ...others
  } = props;

  const [value, setValue] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(() => newValue);
    onChange(newValue);
  };

  const defaultIconProps = useMemo(
    () => ({
      color: '#777777',
      size: '1.5rem',
    }),
    []
  );

  const renderedLeftSlot = useMemo(() => {
    if (!leftSlot || typeof leftSlot === 'string') return leftSlot;
    return React.createElement(leftSlot, defaultIconProps);
  }, [leftSlot, defaultIconProps]);

  const renderedRightSlot = useMemo(() => {
    if (!rightSlot || typeof rightSlot === 'string') return rightSlot;
    return React.createElement(rightSlot, defaultIconProps);
  }, [rightSlot, defaultIconProps]);

  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>

      <InputIconsContainer>
        {renderedLeftSlot}
        <Input
          ref={ref}
          data-testid="text-input"
          onChange={handleChange}
          type={type}
          value={value}
          {...others}
        />
        {renderedRightSlot}
      </InputIconsContainer>
    </InputContainer>
  );
};

export const TextInput = forwardRef(TextInputComponent);
