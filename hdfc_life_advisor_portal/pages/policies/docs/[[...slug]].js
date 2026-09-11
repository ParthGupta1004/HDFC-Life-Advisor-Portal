export function getStaticPaths()
{
    return{
        paths : [
            {
                params: {
                    slug : []
                }
            },
            {
                params: {
                    slug : ["claims", "file"]
                }
            },
        ],
        fallback: false
    }
}

export function getStaticProps({params})
{
    const slug = params?.slug
        ? params.slug.join("/")
        : null

    return{
        props: {
            slug
        }
    }
}

export default function DocsPage({slug})
{
    return(
        <div className="mx-auto max-w-4xl">

            {/* Header */}
            <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-red-600">
                    Resources
                </p>

                <h2 className="mt-2 text-3xl font-bold text-gray-900">
                    Advisor Docs
                </h2>

                <p className="mt-2 text-gray-500">
                    Access documentation and resources for HDFC Life advisors.
                </p>
            </div>


            {/* Documentation Card */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

                {/* Card Header */}
                <div className="flex items-center gap-4 border-b border-gray-100 px-6 py-5 sm:px-8">

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-2xl">
                        📚
                    </div>

                    <div>
                        <h3 className="font-bold text-gray-900">
                            Advisor Documentation
                        </h3>

                        <p className="text-sm text-gray-500">
                            Helpful resources for advisors
                        </p>
                    </div>

                </div>


                {/* Content */}
                <div className="p-6 sm:p-8">

                    {slug ? (
                        <div className="rounded-xl bg-gray-50 p-5">

                            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                                Document Path
                            </p>

                            <p className="mt-2 rounded-lg bg-white px-4 py-3 font-mono text-sm font-semibold text-gray-800 shadow-sm">
                                {slug}
                            </p>

                        </div>
                    ) : (
                        <div className="rounded-xl border border-dashed border-gray-300 p-8 text-center">

                            <p className="text-lg font-semibold text-gray-800">
                                Welcome to Advisor Documentation
                            </p>

                            <p className="mt-2 text-sm text-gray-500">
                                Select a documentation resource to continue.
                            </p>

                        </div>
                    )}

                </div>

            </div>

        </div>
    )
}

