import styles from './styles.module.scss';

type InputTextProps = {
  id?:string,
  label: string,
  name: string,
  value: string,
  placeholder: string,
  onChange: any,
}

const InputText = (props: InputTextProps) => {
  return(
    <div className="mb-4">
      <label htmlFor="price" className="block text-sm font-medium text-gray-700">
        {props.label}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          id={!!props.id ? props.id : ''}
          type="text"
          name={props.name}
          className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-2 sm:text-sm border-gray-300 rounded-md"
          placeholder={props.placeholder}
        />
      </div>
    </div>
  );
}

export default InputText;
