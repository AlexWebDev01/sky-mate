interface IProps {
  warmColor: string;
}

export const SunDecoration = ({ warmColor }: IProps) => {
  return (
    <svg
      className='sun'
      viewBox='0 0 626 626'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='313' cy='313' r='313' fill={warmColor} />
    </svg>
  );
};
