import { JSX } from "react";

const PageWrapper = (props: { children: JSX.Element }) => {
    return (
        <div className="max-w-6xl m-auto px-4">
            {props.children}
        </div>
    );
}

export default PageWrapper;