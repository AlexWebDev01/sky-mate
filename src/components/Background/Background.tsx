import './Background.css';

const Background = ({page, pageStyle}: any) => {

    const rainColor = page === 'weatherPage' ? '#FFFFFF' : '#CAE7FD'
    
    if (pageStyle === 'rain' ) {
        return (
            <div className='background-container'>
                <svg width="1279" height="832" viewBox="0 0 1279 832" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M667 424L667 539.5C667 603.289 615.289 655 551.5 655C487.711 655 436 603.289 436 539.5C436 475.711 487.711 424 551.5 424L667 424Z" fill={rainColor}/>
                    <path d="M231 678L231 793.5C231 857.289 179.289 909 115.5 909V909C51.7111 909 7.42182e-06 857.289 1.02101e-05 793.5V793.5C1.29984e-05 729.711 51.7111 678 115.5 678L231 678Z" fill={rainColor}/>
                    <path d="M667 170L667 285.5C667 349.289 615.289 401 551.5 401C487.711 401 436 349.289 436 285.5C436 221.711 487.711 170 551.5 170L667 170Z" fill={rainColor}/>
                    <path d="M1355 170L1355 285.5C1355 349.289 1303.29 401 1239.5 401C1175.71 401 1124 349.289 1124 285.5C1124 221.711 1175.71 170 1239.5 170L1355 170Z" fill={rainColor}/>
                    <path d="M928 170L928 285.5C928 349.289 876.289 401 812.5 401C748.711 401 697 349.289 697 285.5C697 221.711 748.711 170 812.5 170L928 170Z" fill={rainColor}/>
                    <path d="M928 -84L928 31.5C928 95.2889 876.289 147 812.5 147C748.711 147 697 95.2889 697 31.5C697 -32.2889 748.711 -84 812.5 -84L928 -84Z" fill={rainColor}/>
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