import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'

function CheckBox(props) {
  const {label,name,options, ...rest} = props
  return (
       <div>
          <label className='fw-bold my-1'>{label}</label>
          <Field name={name} {...rest}>
            {
                (props)=>{
                     const { field } = props
                     return options.map((option)=>{
                        return <div key={option.key}>
                            <input  type="checkbox" 
                                    id={option.value}
                                    {...field}
                                    value={option.value}
                                    checked={field.value.includes(option.value)}
                            />
                            <label htmlFor={option.value}>{option.key}</label>
                        </div>
                     })
                }
            }
          </Field>
          <ErrorMessage name={name} component={TextError}/>
       </div>
  )
}

export default CheckBox