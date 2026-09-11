import fs from 'fs'
import path from 'path'

export function getStaticPaths()
{
    return{
        paths : [
            {
                params: {
                    slug : ["term"]
                }
            },
            {
                params: {
                    slug : ["term", "active"]
                }
            },
            {
                params: {
                    slug : ["ulip"]
                }
            }
        ],
        fallback: false
    }
}

export function getStaticProps({params})
{
    const filePath = path.join(
        process.cwd(),
        "data",
        "policies.json"
    );

    const fileData = fs.readFileSync(filePath, "utf-8");
    const allPolicies = JSON.parse(fileData);
    const slug = params.slug

    const category = slug[0].toLowerCase()
    const status = slug[1] ? slug[1].toLowerCase() : null

    const policies = allPolicies.filter((policy) => {
        const typeMatch = policy.type.toLowerCase() === category

        if(!status)
        {
            return typeMatch
        }

        return(
            typeMatch && 
            policy.status.toLowerCase() === status
        )
    })

    return{
        props: {
            policies,
            category,
            status
        }
    }
}

export default function Categorypage({policies, category, status})
{
    return(
        <div className="mx-auto max-w-6xl">

            {/* Page Header */}
            <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-red-600">
                    Insurance
                </p>

                <h2 className="mt-2 text-3xl font-bold text-gray-900">
                    Policy Category
                </h2>

                <p className="mt-2 text-gray-500">
                    View policies based on their type and status.
                </p>

                {/* Filters */}
                <div className="mt-5 flex flex-wrap gap-3">

                    <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-semibold capitalize text-red-700">
                        Type: {category}
                    </span>

                    {status && (
                        <span className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold capitalize text-gray-700">
                            Status: {status}
                        </span>
                    )}

                    <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
                        {policies.length} {policies.length === 1 ? "Policy" : "Policies"}
                    </span>

                </div>
            </div>


            {/* Policy Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                {
                    policies.map((policy) =>(
                        <div
                            key={policy.policyNo}
                            className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                        >

                            {/* Card Top */}
                            <div className="flex items-center justify-between">

                                <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-700">
                                    {policy.type}
                                </span>

                                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                                    {policy.status}
                                </span>

                            </div>


                            {/* Policy Number */}
                            <h3 className="mt-6 text-xl font-bold text-gray-900 transition group-hover:text-red-700">
                                {policy.policyNo}
                            </h3>


                            {/* Customer */}
                            <div className="mt-5">
                                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                                    Policy Holder
                                </p>

                                <p className="mt-1 text-base font-semibold text-gray-800">
                                    {policy.customer}
                                </p>
                            </div>


                            {/* Premium */}
                            <div className="mt-5 border-t border-gray-100 pt-5">
                                <p className="text-sm text-gray-500">
                                    Base Premium
                                </p>

                                <p className="mt-1 text-2xl font-bold text-gray-900">
                                    ₹{policy.basePremium}
                                </p>
                            </div>


                            {/* Footer */}
                            <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">

                                <span className="text-xs font-medium text-gray-400">
                                    HDFC Life
                                </span>

                                <span className="text-sm font-semibold text-red-600 transition group-hover:text-red-800">
                                    View Policy →
                                </span>

                            </div>

                        </div>
                    ))
                }

            </div>

        </div>
    )
}

