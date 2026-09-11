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
        <div>
            <h1>Policies Catelog</h1>
            {
                policies.map((policy) =>{
                    return(
                        <div key = {policy.policyNo}>
                            <Link href = {`/policies/${policy.policyNo}`}>
                                {policy.policyNo}
                            </Link>
                        </div>
                    )
                })
            }
        </div>
    )
}