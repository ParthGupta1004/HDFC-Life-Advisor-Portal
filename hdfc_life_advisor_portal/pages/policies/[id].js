import fs from 'fs'
import path from 'path'
import { useRouter } from 'next/router'

export function getStaticPaths()
{
    const filePath = path.join(
        process.cwd(),
        "data",
        "policies.json"
    )

    const fileData = fs.readFileSync(filePath, "utf-8")
    const policies = JSON.parse(fileData)

    const paths = policies.map((policy) => ({
        params: { id: policy.policyNo }
    }))

    return{
        paths,
        fallback: false
    }
}

export function getStaticProps({params})
{
    const filePath = path.join(
        process.cwd(),
        "data",
        "policies.json"
    )

    const fileData = fs.readFileSync(filePath, "utf-8")
    const policies = JSON.parse(fileData)

    const policy = policies.find(
        (policy) => policy.policyNo === params.id
    )

    if(!policy){
        return {
            notFound: true
        }
    }

    return{
        props: { policy }
    }
}

export default function PolicyDetail({ policy }) {
    const router = useRouter()

    if(router.isFallback) {
        return (
            <div className="flex min-h-[60vh] items-center justify-center">
                <p className="text-lg font-semibold text-gray-600">
                    Loading...
                </p>
            </div>
        )
    }

    return (
        <div className="mx-auto max-w-4xl">

            {/* Page Header */}
            <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-wider text-red-600">
                    Insurance Policy
                </p>

                <h2 className="mt-2 text-3xl font-bold text-gray-900">
                    Policy Detail
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                    Policy id: {router.query.id}
                </p>
            </div>


            {/* Main Policy Card */}
            <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg">

                {/* Red Header */}
                <div className="bg-red-700 px-6 py-6 text-white sm:px-8">

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                        <div>
                            <p className="text-sm text-red-100">
                                Policy Number
                            </p>

                            <h3 className="mt-1 text-2xl font-bold">
                                {policy.policyNo}
                            </h3>
                        </div>

                        <span className="w-fit rounded-full bg-white px-4 py-2 text-sm font-bold text-red-700">
                            {policy.status}
                        </span>

                    </div>

                </div>


                {/* Policy Information */}
                <div className="grid gap-5 p-6 sm:grid-cols-2 sm:p-8">

                    {/* Customer */}
                    <div className="rounded-xl bg-gray-50 p-5">
                        <p className="text-sm font-medium text-gray-500">
                            Policy Holder
                        </p>

                        <p className="mt-2 text-lg font-bold text-gray-900">
                            {policy.customer}
                        </p>
                    </div>


                    {/* Type */}
                    <div className="rounded-xl bg-gray-50 p-5">
                        <p className="text-sm font-medium text-gray-500">
                            Policy Type
                        </p>

                        <p className="mt-2 text-lg font-bold text-gray-900">
                            {policy.type}
                        </p>
                    </div>


                    {/* Premium */}
                    <div className="rounded-xl bg-gray-50 p-5">
                        <p className="text-sm font-medium text-gray-500">
                            Base Premium
                        </p>

                        <p className="mt-2 text-2xl font-bold text-gray-900">
                            ₹{policy.basePremium}
                        </p>
                    </div>


                    {/* Status */}
                    <div className="rounded-xl bg-gray-50 p-5">
                        <p className="text-sm font-medium text-gray-500">
                            Policy Status
                        </p>

                        <span className="mt-2 inline-block rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                            {policy.status}
                        </span>
                    </div>

                </div>


                {/* Footer */}
                <div className="border-t border-gray-200 bg-gray-50 px-6 py-4 sm:px-8">
                    <p className="text-sm text-gray-500">
                        HDFC Life Advisor Portal
                    </p>
                </div>

            </div>

        </div>
    )
}

