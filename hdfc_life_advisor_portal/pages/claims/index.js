import fs from 'fs'
import path from 'path'

export async function getServerSideProps()
{
    const filePath = path.join(
        process.cwd(),
        "data",
        "claims.json"
    )

    const fileData = fs.readFileSync(filePath, "utf-8")
    const claims = JSON.parse(fileData)

    return{
        props : {
            claims
        }
    }
}

export default function ClaimsPage({claims})
{
    return(
        <div className="mx-auto max-w-6xl">

            {/* Page Header */}
            <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-red-600">
                    Claims Management
                </p>

                <h2 className="mt-2 text-3xl font-bold text-gray-900">
                    Claims Desk
                </h2>

                <p className="mt-2 text-gray-500">
                    Review and manage insurance claims.
                </p>

                <div className="mt-5 inline-flex rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-700">
                    {claims.length} Claims
                </div>
            </div>


            {/* Claims Cards */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

                {
                    claims.map((claim) =>(
                        <div
                            key={claim.claimNo}
                            className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >

                            {/* Card Top */}
                            <div className="flex items-center justify-between">

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-50 text-xl">
                                    📋
                                </div>

                                <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold capitalize text-amber-700">
                                    {claim.status}
                                </span>

                            </div>


                            {/* Claim Number */}
                            <h3 className="mt-5 text-xl font-bold text-gray-900 transition group-hover:text-red-700">
                                {claim.claimNo}
                            </h3>


                            {/* Policy Number */}
                            <div className="mt-5">
                                <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                                    Policy Number
                                </p>

                                <p className="mt-1 font-semibold text-gray-800">
                                    {claim.policyNo}
                                </p>
                            </div>


                            {/* Status */}
                            <div className="mt-5 border-t border-gray-100 pt-4">
                                <p className="text-sm text-gray-500">
                                    Claim Status
                                </p>

                                <p className="mt-1 font-semibold capitalize text-gray-900">
                                    {claim.status}
                                </p>
                            </div>


                            {/* Footer */}
                            <div className="mt-6 border-t border-gray-100 pt-4">
                                <span className="text-xs font-medium text-gray-400">
                                    HDFC Life
                                </span>
                            </div>

                        </div>
                    ))
                }

            </div>

        </div>
    )
}

