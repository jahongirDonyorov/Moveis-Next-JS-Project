import { TextFildProps } from './text-field.props';
import { FieldHookConfig, useField } from 'formik';

const TextFild = ({...props}: TextFildProps & FieldHookConfig<string>) => {
  const [field, meta, helpers] = useField(props)

  return (
    <label className='inline-block w-full'>
       <input className='input' {...props}/>
    </label>
  )
}

export default TextFild