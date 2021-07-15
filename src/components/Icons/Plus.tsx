import * as React from "react";

function SvgPlus(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M14 5.833v16.334M5.833 14h16.334"
                stroke="currentColor"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default SvgPlus;
