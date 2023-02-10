import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Users = () => {

    const [data, setData] = useState()

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(response => setData(response.data))
    }, [])
    console.log(data);

    const obj = {
        age: '14314',
        sex: 'male',
        name: 'Ivan',
    }

    return (
        <>
            <div>

                {data?.map((info, idInfo) => {
                    return <div key={idInfo} >{info.name}</div>
                })
                }

            </div>
        </>
    )
}

export default Users