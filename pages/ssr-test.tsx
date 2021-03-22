import React from 'react'
import Layout from '@layout/Layout';
import Axios from 'axios';

function SSRTest({users, req}: {users: any[], req: string}) {


    return (
        <Layout>
            <p>{req}</p>
            {users?.map(user => <li key={user.id}>{user.username}</li>)}
        </Layout>
    )
}

SSRTest.getInitialProps =  async ({req}: any) => {
    const response = await Axios.get('https://jsonplaceholder.typicode.com/users');
    return {
      users: response.data,
      req: req ? 'server' : 'client'
    }
  }

export default SSRTest