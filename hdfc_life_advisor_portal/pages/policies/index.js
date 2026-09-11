
import fs from 'fs'
import path from 'path'
import Link from 'next/link'

export function getStaticProps()
{
    const filePath = path.join(
        process.cwd(),
        "data",
        "policies.json"
    )

    const fileData = fs.readFileSync(filePath, "utf-8")
    const policies = JSON.parse(fileData)

    return{
        props: {
            policies
        }, 
        revalidate: 60
    }
}

export default function Policies({policies})
{
    return(
        <div className="min-h-screen">

            {/* Page Header */}
            <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-red-600">
                    Insurance
                </p>

                <h1 className="mt-2 text-3xl font-bold text-gray-900">
                    Policy Catalogue
                </h1>

                <p className="mt-2 text-gray-600">
                    Browse all available HDFC Life insurance policies.
                </p>

                <div className="mt-4 inline-block rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-700">
                    {policies.length} Policies
                </div>
            </div>

            {/* Policy Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                {
                    policies.map((policy) =>{
                        return(
                            <div
                                key={policy.policyNo}
                                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >

                                {/* Policy Type */}
                                <div className="mb-5 flex items-center justify-between">
                                    <span className="rounded-full bg-red-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-red-700">
                                        {policy.type}
                                    </span>

                                    <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                                        {policy.status}
                                    </span>
                                </div>

                                {/* Policy Number */}
                                <h2 className="text-xl font-bold text-gray-900">
                                    <Link
                                        href={`/policies/${policy.policyNo}`}
                                        className="transition hover:text-red-700"
                                    >
                                        {policy.policyNo}
                                    </Link>
                                </h2>

                                {/* Customer */}
                                <p className="mt-2 text-sm text-gray-500">
                                    Policy Holder
                                </p>

                                <p className="font-semibold text-gray-800">
                                    {policy.customer}
                                </p>

                                {/* Premium */}
                                <div className="mt-5 border-t border-gray-100 pt-4">
                                    <p className="text-sm text-gray-500">
                                        Base Premium
                                    </p>

                                    <p className="mt-1 text-2xl font-bold text-gray-900">
                                        ₹{policy.basePremium}
                                    </p>
                                </div>

                                {/* View Details */}
                                <Link
                                    href={`/policies/${policy.policyNo}`}
                                    className="mt-5 inline-flex items-center font-semibold text-red-600 transition hover:text-red-800"
                                >
                                    View Policy
                                    <span className="ml-2">→</span>
                                </Link>

                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

