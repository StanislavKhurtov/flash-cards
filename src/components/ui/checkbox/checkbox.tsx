import { CheckMark } from '@/assets/icons/check-mark'
import { Typography } from '@/components/ui/typography'
import * as CheckboxRadix from '@radix-ui/react-checkbox'

import s from './checkbox.module.scss'

export type CheckboxProps = {
  checked?: boolean
  className?: string
  disabled?: boolean
  label?: string
  onValueChange?: (checked: boolean) => void
  required?: boolean
}

export const Checkbox = ({
  checked,
  className = '',
  disabled,
  label,
  onValueChange,
  required,
}: CheckboxProps) => {
  const classNames = {
    checkBox: `${s.default} ${!checked ? s.uncheck : ''} ${className}`,
    label: `${s.label} ${disabled ? s.labelDisabled : ''}`,
  }

  return (
    <Typography as={'label'} className={classNames.label} variant={'body2'}>
      <CheckboxRadix.Root
        checked={checked}
        className={classNames.checkBox}
        disabled={disabled}
        onCheckedChange={onValueChange}
        required={required}
      >
        <CheckboxRadix.Indicator>
          {checked && <CheckMark disabled={disabled} />}
        </CheckboxRadix.Indicator>
      </CheckboxRadix.Root>
      {label}
    </Typography>
  )
}
