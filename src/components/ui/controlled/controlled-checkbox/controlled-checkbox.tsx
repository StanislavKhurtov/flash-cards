import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox, CheckboxProps } from '../../checkbox'

export type ControlledCheckboxProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<CheckboxProps, 'checked' | 'id' | 'onChange' | 'onValueChange' | 'value'>

export const ControlledCheckbox = <T extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  ...checkboxProps
}: ControlledCheckboxProps<T>) => {
  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  })

  return (
    <Checkbox
      {...{
        checked: value,
        id: name,
        onValueChange: onChange,
        ...checkboxProps,
      }}
    />
  )
}
