interface IProps {
  cloudsColor: string;
}

export const CloudsDecoration = ({ cloudsColor }: IProps) => {
  return (
    <svg
      className='clouds'
      width='826'
      height='612'
      viewBox='0 0 826 612'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='152.538' cy='238.367' r='152.538' fill={cloudsColor} />
      <circle cx='305.501' cy='152.538' r='152.538' fill={cloudsColor} />
      <circle cx='458.464' cy='240.067' r='152.538' fill={cloudsColor} />
      <circle cx='492.456' cy='458.464' r='152.538' fill={cloudsColor} />
      <circle cx='673.462' cy='277.458' r='152.538' fill={cloudsColor} />
      <circle cx='304.651' cy='305.501' r='152.538' fill={cloudsColor} />
    </svg>
  );
};
