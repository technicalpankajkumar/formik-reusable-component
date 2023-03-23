import React from 'react'
import CheckBox from './Fields/CheckBox';
import DatePicker from './Fields/DatePicker';
import Input from './Fields/Input';
import RadioButton from './Fields/RadioButton';
import Select from './Fields/Select';
import TextArea from './Fields/TextArea';

function FormikControl(props) {
    const {control, ...rest} = props

    switch(control){
        case 'input':
            return <Input {...rest}/>
        case 'textarea':
            return <TextArea {...rest}/>
        case 'select':
            return <Select {...rest}/>
        case 'radio':
            return <RadioButton {...rest}/>
        case 'checkbox':
            return <CheckBox {...rest} />
        case 'date':
            return <DatePicker {...rest} />
        default : return null;
    }
}

export default FormikControl