import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl';

function FormikContainer() {

    const inititalValues = {
        name: '',
        description: '',
        topic:'',
        radio: '',
        check: [],
        birthData: ''
    };
    const onSubmit = values =>{
         console.log("form values : ", values);
         console.log("form value", JSON.parse(JSON.stringify(values)))
    }

    const validationSchema = Yup.object({
        name: Yup.string().required("Field is Mandatory"),
        description: Yup.string().required("Field is Mandatory"),
        topic: Yup.string().required(),
        radio:Yup.string().required(),
        check : Yup.array().length(1).required(),
        birthData : Yup.string().nullable()
    });

    const options = [
        { key: "Select-Topic", value: "Select-Topic" },
        { key: "Option 1", value: "Value 1" },
        { key: "Option 2", value: "Value 2" },
        { key: "Option 3", value: "Value 3" },
        { key: "Option 4", value: "Value 4" }
    ]

    const radioOptions = [
        { key: " Opt 1", value: "Value 1" },
        { key: " Opt 2", value: "Value 2" },
        { key: " Opt 3", value: "Value 3" },
        { key: " Opt 4", value: "Value 4" }
    ]

    const checkBoxOption = [
        { key: " CheckOpt 1", value: "Cvalue 1" },
        { key: " CheckOpt 2", value: "Cvalue 2" },
        { key: " CheckOpt 3", value: "Cvalue 3" },
        { key: " CheckOpt 4", value: "Cvalue 4" }
    ]

    return (
        <Formik
            initialValues={inititalValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {
                formik => {
                    console.log("formik ", formik)
                    return (
                        <Form>
                            <FormikControl control="input" type="text" name="name" label="Name" className="form-control" />
                            <FormikControl control="textarea" name="description" label="Discription" className="form-control" />
                            <FormikControl control="select" options={options} name="topic" label="Select-Topic" className="form-control" />
                            <FormikControl control='radio' options={radioOptions} name="radio" label="Select" className="form-control" />
                            <FormikControl control='checkbox' options={checkBoxOption} name="check" label="Checked-Option " className="form-control" />
                            <FormikControl control="date" label="Pick a Data" name="birthDate" className="form-control" />
                            <button type='submit' className='btn btn-sm m-1 bg-primary'>Submit</button>
                        </Form>
                    )
                }
            }
        </Formik>
    )
}

export default FormikContainer