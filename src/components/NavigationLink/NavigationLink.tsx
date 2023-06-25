import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import './NavigationLink.css'

const NavigationLink = ({ currentPage }: { currentPage: string }) => {

    if(currentPage === '/') {

        return(
            <div className="navigation-link">
                <Link to='/look' className="link" >View more</Link>
                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.03312e-06 10C1.02092e-06 9.86042 0.0549687 9.72655 0.152812 9.62785C0.250655 9.52915 0.38336 9.4737 0.521731 9.4737L22.2179 9.4737L13.7176 0.89895C13.6197 0.800194 13.5647 0.666252 13.5647 0.526591C13.5647 0.38693 13.6197 0.25299 13.7176 0.154235C13.8155 0.0554795 13.9483 -1.02585e-06 14.0867 -1.0407e-06C14.2252 -1.05556e-06 14.3579 0.0554794 14.4558 0.154235L23.847 9.62764C23.8955 9.67652 23.934 9.73456 23.9602 9.79846C23.9865 9.86235 24 9.93084 24 10C24 10.0692 23.9865 10.1376 23.9602 10.2015C23.934 10.2654 23.8955 10.3235 23.847 10.3724L14.4558 19.8458C14.4074 19.8947 14.3498 19.9335 14.2865 19.9599C14.2232 19.9864 14.1553 20 14.0867 20C14.0182 20 13.9503 19.9864 13.8869 19.9599C13.8236 19.9335 13.7661 19.8947 13.7176 19.8458C13.6691 19.7969 13.6307 19.7388 13.6044 19.6749C13.5782 19.611 13.5647 19.5426 13.5647 19.4734C13.5647 19.4043 13.5782 19.3358 13.6044 19.2719C13.6307 19.208 13.6691 19.1499 13.7176 19.1011L22.2179 10.5263L0.521732 10.5263C0.38336 10.5263 0.250656 10.4709 0.152812 10.3722C0.0549687 10.2735 1.04532e-06 10.1396 1.03312e-06 10Z" fill="black"/>
                </svg>
            </div>
        );
    }

    if (currentPage === '/look') {

        return (
            <div className="navigation-link">
                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 10C24 9.86042 23.945 9.72655 23.8472 9.62785C23.7493 9.52915 23.6166 9.4737 23.4783 9.4737L1.78212 9.4737L10.2824 0.89895C10.3803 0.800194 10.4353 0.666253 10.4353 0.526592C10.4353 0.386931 10.3803 0.252989 10.2824 0.154234C10.1845 0.0554787 10.0517 -1.71144e-06 9.91329 -1.7263e-06C9.77484 -1.74116e-06 9.64206 0.0554786 9.54416 0.154234L0.153017 9.62764C0.104509 9.67652 0.0660266 9.73456 0.0397709 9.79846C0.0135152 9.86235 8.80274e-07 9.93083 8.74228e-07 10C8.68181e-07 10.0692 0.0135152 10.1376 0.0397709 10.2015C0.0660266 10.2654 0.104509 10.3235 0.153017 10.3724L9.54416 19.8458C9.59263 19.8947 9.65018 19.9335 9.71351 19.9599C9.77685 19.9864 9.84473 20 9.91328 20C9.98184 20 10.0497 19.9864 10.1131 19.9599C10.1764 19.9335 10.2339 19.8947 10.2824 19.8458C10.3309 19.7969 10.3693 19.7388 10.3956 19.6749C10.4218 19.611 10.4353 19.5426 10.4353 19.4734C10.4353 19.4043 10.4218 19.3358 10.3956 19.2719C10.3693 19.208 10.3309 19.1499 10.2824 19.1011L1.78212 10.5263L23.4783 10.5263C23.6166 10.5263 23.7493 10.4709 23.8472 10.3722C23.945 10.2735 24 10.1396 24 10Z" fill="black"/>
                </svg>
                <Link to='/' className="link" >Go back</Link>
            </div>

        );
    }
};

export default NavigationLink;