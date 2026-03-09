import React from 'react'
import CollectFees from '../../Component/CollectFees/CollectFees'
import StudentList from '../../Component/StudentList/StudentList'
import FeesDetails from '../../Component/FeesDetails/FeesDetails'

const Fees = () => {
  return (
    <div>
        <CollectFees/>
        <StudentList/>
        <FeesDetails/>
    </div>
  )
}

export default Fees