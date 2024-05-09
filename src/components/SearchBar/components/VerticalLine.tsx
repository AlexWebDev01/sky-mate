import { LightColors } from '@shared/helpers/defineColor';

interface IProps {
  color: LightColors | '';
}

export const VerticalLine = ({ color }: IProps) => {
  return (
    <svg
      className='vertical-line'
      width='2'
      height='32'
      viewBox='0 0 2 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M1 0L0.999999 32' stroke={color} />
    </svg>
  );
};