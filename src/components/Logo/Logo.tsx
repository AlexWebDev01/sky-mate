import { Link } from "react-router-dom";

import "./Logo.css";

const Logo = () => {
  return (
    <Link to="/" className="logo-link">
      <svg
        width="85"
        height="22"
        viewBox="0 0 85 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.09683 9.28689C7.4919 7.50615 6.42163 5.92828 4.18802 5.92828C3.02468 5.92828 1.95441 6.62705 1.95441 7.82172C1.95441 11.2029 9.67897 10.3012 9.67897 14.0656C9.67897 16.3648 7.37556 17.4242 5.39789 17.4242C3.30388 17.4242 1.65194 16.2971 1.65194 16.2971L0.581669 17.334H0V12.8033H0.581669L0.628202 12.9611C1.1866 14.6066 2.76874 16.748 5.25829 16.748C6.81716 16.748 7.81763 15.8463 7.81763 14.6291C7.81763 11.4734 0.093067 12.7131 0.093067 8.09221C0.093067 6.17623 1.86134 5.25205 3.88555 5.25205C5.97956 5.25205 7.28249 6.10861 7.28249 6.10861L8.16663 5.36475H8.70177V9.42213H8.14336L8.09683 9.28689Z"
          fill="black"
        />
        <path
          d="M19.3114 7.88934L16.8917 10.0082L20.8237 14.6967C21.545 15.5533 22.5222 16.2295 23.3598 16.2295H23.7321V16.9734H17.8921V16.1844H18.2877C18.9159 16.1844 19.1951 15.6209 18.7297 15.0348L15.5189 11.2254L14.0066 12.5553V14.8545C14.0066 15.7787 14.5883 16.1844 15.4026 16.1844H15.7981V16.9734H10.2374V16.1844H10.6329C11.4705 16.1844 12.0289 15.7787 12.0289 14.8545V2.50205C12.0289 1.53279 10.9819 1.42008 10.121 1.42008V0.631148L13.6576 0H14.0066V11.3607L18.0085 7.82172C19.0322 6.92008 18.9159 6.4918 17.6827 6.4918H16.8684V5.70287H22.848V6.4918H22.4292C21.1495 6.4918 20.5678 6.7623 19.3114 7.88934Z"
          fill="black"
        />
        <path
          d="M24.3179 6.4918H23.7363V5.70287H29.9252V6.4918H29.1109C28.0639 6.4918 27.9243 7.2582 28.2966 8.04713L30.9955 14.0881L33.9969 7.88934C34.3692 7.12295 34.1598 6.4918 33.0895 6.4918H32.2752V5.70287H37.4637V6.4918H36.8587C35.8582 6.4918 35.3464 7.16803 35.0439 7.82172L29.2738 19.7459C28.506 21.3463 27.4822 22 26.2258 22C25.0625 22 23.5734 21.4365 23.5501 20.1066C23.5501 19.3627 24.1783 18.7541 24.9461 18.7541C25.7139 18.7541 26.3421 19.3627 26.3421 20.1066C26.3421 20.4447 26.2025 20.7602 25.9931 20.9857C26.1793 21.0533 26.3887 21.0984 26.5748 21.0984C27.0867 21.0984 27.6451 20.9857 28.25 19.7459L29.9485 16.207L26.2956 8.13729C25.7605 6.94262 25.3184 6.4918 24.3179 6.4918Z"
          fill="black"
        />
        <path
          d="M46.6998 5.25205C48.5844 5.25205 49.1428 6.94262 49.073 8.52049C50.0735 6.92008 51.4928 5.22951 53.4239 5.25205C55.4947 5.27459 56.3555 7.19057 55.5877 9.48975L54.0987 13.9529C53.7031 15.125 53.4472 16.2971 54.2848 16.2971C55.4714 16.2971 56.6115 14.5164 57.356 12.8258L58.1005 13.3443C57.2397 15.2152 55.8437 17.5369 53.8427 17.5369C52.4235 17.5369 51.2834 16.1844 51.9814 14.0881L53.517 9.48975C54.0056 8.04713 54.2383 6.58197 52.9586 6.58197C51.4695 6.58197 49.7478 8.20492 48.3983 11.4283V11.3607L46.5835 16.9508H44.4895L47.0023 9.35451C47.584 7.59631 47.3978 6.4918 46.281 6.4918C44.6524 6.4918 43.0702 8.11475 42.4187 10.1209L40.1851 16.9734H38.0911L40.6039 9.35451C41.1856 7.59631 41.1391 6.4918 40.1619 6.4918C39.0916 6.4918 38.0446 8.13729 37.4397 9.69262L36.7649 9.35451C37.3466 7.61885 38.3703 5.25205 40.6039 5.25205C42.1861 5.25205 42.7212 6.62705 42.7212 8.06967C43.6286 6.55943 44.7687 5.25205 46.6998 5.25205Z"
          fill="black"
        />
        <path
          d="M64.1246 13.457L65.0088 10.1209C65.5439 8.09221 65.4043 6.15369 63.6128 6.15369C61.2396 6.15369 59.3782 10.4816 59.3782 13.2316C59.3782 14.9221 59.7738 16.2971 61.1 16.2971C62.2866 16.2971 63.4964 15.7336 64.1246 13.457ZM63.8222 15.9139C63.0078 16.8607 61.8212 17.5369 60.5183 17.5369C58.2381 17.5369 57.1679 15.3279 57.1679 13.2316C57.1679 9.57992 59.8901 5.25205 63.7524 5.25205C64.8226 5.25205 65.5672 5.79303 65.986 6.53689L66.2186 5.70287H68.2661L65.9394 14.2459C65.7533 14.9672 65.4043 16.2971 66.3117 16.2971C67.0562 16.2971 67.7542 14.9221 68.1265 13.7725L68.8012 14.1332C68.173 16.0041 67.2424 17.5369 65.5672 17.5369C64.5434 17.5369 64.0083 16.793 63.8222 15.9139Z"
          fill="black"
        />
        <path
          d="M75.0035 13.457C74.1891 15.2828 72.4674 17.5369 70.6293 17.5369C68.9541 17.5369 68.2794 15.8463 68.7215 14.2459L70.7224 6.94262H68.4422V5.70287H71.0481L72.0951 1.8709H74.1426L73.0956 5.70287H75.9109V6.94262H72.7699L70.7689 14.2459C70.5828 14.9672 70.4199 16.2971 71.2343 16.2971C72.3976 16.2971 73.6075 14.6066 74.3287 13.0963L75.0035 13.457Z"
          fill="black"
        />
        <path
          d="M83.7203 14.1332C82.5337 15.9139 81.161 17.5369 78.718 17.5369C76.3448 17.5369 74.5998 16.0041 74.5998 13.2992C74.5998 9.80533 77.6942 5.25205 81.9753 5.25205C83.9065 5.25205 85 6.08607 85 7.50615C85 10.2111 80.9283 11.3832 76.8566 12.3074C76.8334 12.5779 76.8101 12.8484 76.8101 13.0963C76.8101 15.0348 77.4848 16.2971 79.0204 16.2971C80.7887 16.2971 82.0917 14.9447 82.9991 13.4344L83.7203 14.1332ZM83.0223 7.50615C83.0223 6.85246 82.8129 6.15369 81.8357 6.15369C79.8115 6.15369 77.8571 8.6332 77.1358 11.1127C80.5328 10.5266 83.0223 9.48975 83.0223 7.50615Z"
          fill="black"
        />
      </svg>
    </Link>
  );
};

export default Logo;
