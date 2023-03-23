import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'

function RadioButton(props) {
    const {label,name, options, ...rest} = props
  return (
        <div>
            <label className='fw-bold my-1'>{label}</label>
            <Field name={name} {...rest}>
                {
                    (props)=>{
                        const {field}= props
                        console.log(field)

                        return options.map((option)=>{
                            return <div key={option.key}>
                                <input type="radio" 
                                       id={option.value}
                                       {...field}
                                       value={option.value}
                                       checked={ option.value === field.value}
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

export default RadioButton