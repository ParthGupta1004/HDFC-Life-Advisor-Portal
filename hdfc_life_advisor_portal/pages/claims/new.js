import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { useState } from "react"

const validationSchema = Yup.object({
    policyNo: Yup.string()
        .required("policynumber is required")
        .matches(`^HDFC-LIFE-[0-9]{4}$`),

    claimAmount: Yup.number()
        .required("Claim amount is required")
        .min(1, "minimum amount at least one")
        .max(500000, "max amount goes upto 5 lakhs")
        .positive("Claim amount must be greater than 0"),

    urgency: Yup.string()
        .required("urgency is required"),

    hospitalName: Yup.string("hospital name is required"),

    email: Yup.string()
        .email("enter a valid email")
        .required("email is required"),

    remarks: Yup.string()
        .required("remarks are required")
})

export default function NewClaim() {
    const [successMessage, setSuccessMessage] = useState("")
    return (
        <div className="min-h-screen bg-gray-50 px-4 py-10">

            <div className="mx-auto max-w-3xl">

                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900">
                        File a New Claim
                    </h2>

                    <p className="mt-2 text-gray-600">
                        Submit the details below to file a new insurance claim.
                    </p>
                </div>

                {successMessage && (
                    <div className="mb-6 rounded-lg bg-green-100 p-4 font-medium text-green-700">
                        {successMessage}
                    </div>
                )}
                <Formik
                    initialValues={{
                        policyNo: "",
                        claimAmount: "",
                        urgency: "",
                        hospitalName: "",
                        email: "",
                        remarks: ""
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, {resetForm}) => {
                        setSuccessMessage(`Claim submitted for ${values.policyNo}`)
                        console.log(values)
                        resetForm()
                    }}
                >
                    <Form className="rounded-xl bg-white p-8 shadow-md">

                        <div className="mb-5">
                            <label className="mb-2 block font-medium text-gray-700">
                                Policy Number
                            </label>

                            <Field
                                name="policyNo"
                                placeholder="HDFC-LIFE-1001"
                                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            />

                            <ErrorMessage
                                name="policyNo"
                                component="div"
                                className="mt-1 text-sm text-red-600"
                            />
                        </div>

                        <div className="mb-5">
                            <label className="mb-2 block font-medium text-gray-700">
                                Claim Amount
                            </label>

                            <Field
                                name="claimAmount"
                                type="number"
                                placeholder="Enter claim amount"
                                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            />

                            <ErrorMessage
                                name="claimAmount"
                                component="div"
                                className="mt-1 text-sm text-red-600"
                            />
                        </div>

                        <div className="mb-5">
                            <label className="mb-2 block font-medium text-gray-700">
                                Urgency
                            </label>

                            <Field
                                name="urgency"
                                placeholder="Enter urgency"
                                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            />

                            <ErrorMessage
                                name="urgency"
                                component="div"
                                className="mt-1 text-sm text-red-600"
                            />
                        </div>

                        <div className="mb-5">
                            <label className="mb-2 block font-medium text-gray-700">
                                Hospital Name
                            </label>

                            <Field
                                name="hospitalName"
                                placeholder="Enter hospital name"
                                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            />

                            <ErrorMessage
                                name="hospitalName"
                                component="div"
                                className="mt-1 text-sm text-red-600"
                            />
                        </div>

                        <div className="mb-5">
                            <label className="mb-2 block font-medium text-gray-700">
                                Email
                            </label>

                            <Field
                                name="email"
                                type="email"
                                placeholder="advisor@example.com"
                                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            />

                            <ErrorMessage
                                name="email"
                                component="div"
                                className="mt-1 text-sm text-red-600"
                            />
                        </div>

                        <div className="mb-6">
                            <label className="mb-2 block font-medium text-gray-700">
                                Remarks
                            </label>

                            <Field
                                name="remarks"
                                as="textarea"
                                rows="4"
                                placeholder="Enter claim remarks..."
                                className="w-full resize-none rounded-lg border border-gray-300 px-4 py-2.5 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                            />

                            <ErrorMessage
                                name="remarks"
                                component="div"
                                className="mt-1 text-sm text-red-600"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                        >
                            Submit Claim
                        </button>

                    </Form>
                </Formik>

            </div>
        </div>
    )
}
