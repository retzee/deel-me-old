import { PropsWithChildren } from 'react'

const MiniGridWrapper = (props: PropsWithChildren) => {
    return (
        <div className="grid grid-cols-6 gap-4 mb-8">
            <div className="col-start-3 col-span-2 border-2 border-red-800 text-center rounded-lg shadow">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

export default MiniGridWrapper;