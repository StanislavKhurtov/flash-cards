type Props = {
  disabled?: boolean
}

export const CheckMark = ({ disabled }: Props) => {
  return (
    <svg
      fill={'none'}
      height={'18'}
      viewBox={'0 0 18 14'}
      width={'18'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      <svg
        fill={'none'}
        height={'16'}
        viewBox={'0 0 16 12'}
        width={'16'}
        xmlns={'http://www.w3.org/2000/svg'}
      >
        <rect fill={disabled ? '#dcdae0' : '#000'} height={'12'} width={'16'} />
      </svg>

      <path
        d={
          'M16 0H2C0.89 0 0 0.9 0 2V16C0 17.1 0.89 18 2 18H16C17.11 18 18 17.1 18 16V2C18 0.9 17.11 0 16 0ZM7 14L2 9L3.41 7.59L7 11.17L14.59 3.58L16 5L7 14Z'
        }
        fill={disabled ? '#808080' : '#fff'}
      />
    </svg>
  )
}
