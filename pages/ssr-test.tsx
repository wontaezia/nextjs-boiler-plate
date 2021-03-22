import React from 'react'
import Layout from '@layout/Layout';
import Axios from 'axios';

function SSRTest({users}: {users: any[]}) {


    return (
        <Layout>
            {users?.map(user => <li key={user.id}>{user.username}</li>)}
        </Layout>
    )
}

SSRTest.getInitialProps =  async ({req}: any) => {
    const response = await Axios.get('https://jsonplaceholder.typicode.com/users');
    return {
      users: response.data
    }
  }

export default SSRTest