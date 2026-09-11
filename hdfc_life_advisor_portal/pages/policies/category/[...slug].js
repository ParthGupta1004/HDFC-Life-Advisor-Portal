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
  const status = slug[1]? slug[1].toLowerCase() : null

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
        <div>
            <h2>Policy Category</h2>
            <p>Type: {category}</p>
            {status && <p>Status: {status}</p>}
            {
                policies.map((policy) =>(
                    <div key = {policy.policyNo}>
                        <p>{policy.policyNo}</p>
                        <p>{policy.customer}</p>
                        <p>{policy.type}</p>
                        <p>{policy.status}</p>
                    </div>
                ))
            }
        </div>
    )
}