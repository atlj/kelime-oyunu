import * as React from "react";

function SvgChevronRight(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M10.5 18l6-6-6-6"
                stroke="currentColor"
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

export default SvgChevronRight;
