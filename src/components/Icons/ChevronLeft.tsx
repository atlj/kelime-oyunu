import * as React from "react";

function SvgChevronLeft(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M18.667 24l-8-8 8-8"
                stroke="currentColor"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default SvgChevronLeft;
