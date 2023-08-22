import './Background.css';

const Background = ({page, pageStyle}: any) => {

    const rainColor = page === 'weatherPage' ? '#FFFFFF' : '#CAE7FD'
    
    if (pageStyle === 'rain' ) {
        return (
            <div className='background-container'>   
                <svg className='rain-1 blob' viewBox="0 0 231 231" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Rectangle 168" d="M231 0L231 115.5C231 179.289 179.289 231 115.5 231C51.7111 231 7.42182e-06 179.289 1.02101e-05 115.5C1.29984e-05 51.7111 51.7111 -7.83697e-06 115.5 -5.04866e-06L231 0Z" fill={rainColor}/>
                </svg>
                <svg className='rain-2 blob' viewBox="0 0 231 231" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Rectangle 168" d="M231 0L231 115.5C231 179.289 179.289 231 115.5 231C51.7111 231 7.42182e-06 179.289 1.02101e-05 115.5C1.29984e-05 51.7111 51.7111 -7.83697e-06 115.5 -5.04866e-06L231 0Z" fill={rainColor}/>
                </svg>
                <svg className='rain-3 blob' viewBox="0 0 231 231" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Rectangle 168" d="M231 0L231 115.5C231 179.289 179.289 231 115.5 231C51.7111 231 7.42182e-06 179.289 1.02101e-05 115.5C1.29984e-05 51.7111 51.7111 -7.83697e-06 115.5 -5.04866e-06L231 0Z" fill={rainColor}/>
                </svg>
                <svg className='rain-4 blob' viewBox="0 0 231 231" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Rectangle 168" d="M231 0L231 115.5C231 179.289 179.289 231 115.5 231C51.7111 231 7.42182e-06 179.289 1.02101e-05 115.5C1.29984e-05 51.7111 51.7111 -7.83697e-06 115.5 -5.04866e-06L231 0Z" fill={rainColor}/>
                </svg>
                <svg className='rain-5 blob' viewBox="0 0 231 231" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Rectangle 168" d="M231 0L231 115.5C231 179.289 179.289 231 115.5 231C51.7111 231 7.42182e-06 179.289 1.02101e-05 115.5C1.29984e-05 51.7111 51.7111 -7.83697e-06 115.5 -5.04866e-06L231 0Z" fill={rainColor}/>
                </svg>
                <svg className='rain-6 blob' viewBox="0 0 231 231" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path id="Rectangle 168" d="M231 0L231 115.5C231 179.289 179.289 231 115.5 231C51.7111 231 7.42182e-06 179.289 1.02101e-05 115.5C1.29984e-05 51.7111 51.7111 -7.83697e-06 115.5 -5.04866e-06L231 0Z" fill={rainColor}/>
                </svg>
                <img src="./rain-character.png" className='rain-character'/>
            </div>
        );
    }

    // if (pageStyle === 'snow') {
    //     return (

    //     );
    // }
};

export default Background;