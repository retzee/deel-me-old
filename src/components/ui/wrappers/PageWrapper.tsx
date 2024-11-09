import { PropsWithChildren } from 'react'

const PageWrapper = (props: PropsWithChildren) => {
    return (
        <div className="max-w-6xl m-auto px-4">
            {props.children}
        </div>
    );
}

export default PageWrapper;