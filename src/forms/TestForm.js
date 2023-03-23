import React from 'react'
import FormikContainer from '../component/FormikContainer'

function TestForm() {
  return (
    <div className='row justify-content-center'>
        <div className='col-sm-4'>
            <h3 className='text-center'>Test Form</h3>
            <hr/>
            <FormikContainer/>
        </div>
    </div>
  )
}

export default TestForm