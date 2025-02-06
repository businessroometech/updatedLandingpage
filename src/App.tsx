import React from 'react'
import Layout from './layout'
import Home from './page/Home'
import ScrollArrow from './component/common/ScrollArrow'

const App:React.FC = () => {
  return (
    <Layout>
      <Home/>
      <ScrollArrow/>
    </Layout>
  )
}

export default App