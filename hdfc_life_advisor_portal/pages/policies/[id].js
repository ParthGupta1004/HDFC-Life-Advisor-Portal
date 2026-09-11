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
            params: {id: policy.policyNo}
        }))
    return{
        paths,
        fallback: true
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
        props: {policy}
    }
}

export default function PolicyDetail({ policy }) {
  const router = useRouter();
  if(router.isFallback) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h2>Policy Detail</h2>

      <p>Policy id: {router.query.id}</p>

      <p>{policy.policyNo}</p>
      <p>{policy.customer}</p>
      <p>{policy.type}</p>
      <p>{policy.basePremium}</p>
      <p>{policy.status}</p>
    </div>
  );
}