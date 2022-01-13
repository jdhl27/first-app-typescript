import { useEffect } from "react"
import { reqResApi } from "../api/reqRes"
import { ReqResListado } from "../interfaces/reqRes"

export const Users = () => {

  useEffect(() => {
    // GET API
    reqResApi.get<ReqResListado>('/users')
        .then(res => {
          console.log(res.data.data);
        })
        .catch(console.log)

  }, [])

  return (
    <>
      <h3>Users</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
      </table>
    </>
  )
}
