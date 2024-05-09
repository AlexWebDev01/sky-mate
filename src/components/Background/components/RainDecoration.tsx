interface IProps {
  coldColor: string;
}

export const RainDecoration = ({ coldColor }: IProps) => {
  return (
    <>
      {Array.from({ length: 6 }).map((_, index) => (
        <svg
          key={index}
          className={`blob rain-${index + 1}`}
          viewBox='0 0 231 231'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            id='Rectangle 168'
            d='M231 0L231 115.5C231 179.289 179.289 231 115.5 231C51.7111 231 7.42182e-06 179.289 1.02101e-05 115.5C1.29984e-05 51.7111 51.7111 -7.83697e-06 115.5 -5.04866e-06L231 0Z'
            fill={coldColor}
          />
        </svg>
      ))}
    </>
  );
};
