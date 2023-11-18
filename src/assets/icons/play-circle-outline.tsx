import { Ref, SVGProps, forwardRef, memo } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    fill={'none'}
    height={'24'}
    ref={ref}
    viewBox={'0 0 24 24'}
    width={'24'}
    xmlns={'http://www.w3.org/2000/svg'}
    {...props}
  >
    <path
      d={
        'M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z'
      }
      fill={'black'}
    />
    <path
      d={
        'M12.34 7.45001C12.095 7.2242 11.789 7.07538 11.4601 7.02204C11.1312 6.96871 10.7938 7.0132 10.49 7.15001C10.1951 7.26932 9.94239 7.47385 9.76426 7.73748C9.58614 8.0011 9.49065 8.31185 9.49001 8.63001V15.37C9.49065 15.6882 9.58614 15.9989 9.76426 16.2625C9.94239 16.5262 10.1951 16.7307 10.49 16.85C10.7068 16.9483 10.942 16.9995 11.18 17C11.6089 16.9981 12.022 16.8379 12.34 16.55L16 13.18C16.1637 13.0301 16.2944 12.8478 16.3838 12.6446C16.4733 12.4415 16.5195 12.222 16.5195 12C16.5195 11.778 16.4733 11.5585 16.3838 11.3554C16.2944 11.1522 16.1637 10.9699 16 10.82L12.34 7.45001ZM11.5 14.6V9.40001L14.31 12L11.5 14.6Z'
      }
      fill={'black'}
    />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)

export default memo(ForwardRef)
