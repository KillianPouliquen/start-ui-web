import React, { useEffect, useState } from 'react';

import { Checkbox } from '@chakra-ui/react';
import { FieldProps, useField } from '@formiz/core';

import { FormGroup, FormGroupProps } from '@/components/FormGroup';

export type FieldBooleanCheckboxProps = FieldProps &
  FormGroupProps & {
    optionLabel?: string;
    size?: 'sm' | 'md' | 'lg';
  };

export const FieldBooleanCheckbox = (props: FieldBooleanCheckboxProps) => {
  const { errorMessage, id, isValid, isSubmitted, resetKey, setValue, value } =
    useField(props);
  const { required } = props;
  const {
    children,
    label,
    helper,
    optionLabel,
    size = 'md',
    isDisabled,
    ...otherProps
  } = props;
  const [isTouched, setIsTouched] = useState(false);
  const showError = !isValid && (isTouched || isSubmitted);

  useEffect(() => {
    setIsTouched(false);
  }, [resetKey]);

  const formGroupProps = {
    errorMessage,
    helper,
    id,
    isRequired: !!required,
    isDisabled,
    label,
    showError,
    ...otherProps,
  };

  return (
    <FormGroup {...formGroupProps}>
      <Checkbox
        id={id}
        size={size}
        value={value ?? false}
        isDisabled={isDisabled}
        onChange={() => setValue(!value)}
      >
        {optionLabel || <>&nbsp;</>}
      </Checkbox>
      {children}
    </FormGroup>
  );
};
