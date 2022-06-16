type DropdownProps = {
  options: Array<any>,
  handleChange: any,
}

const Dropdown = (props: DropdownProps) => {

  const handleSelectChange = (event) => {
   const value = event.target.value;
   props.handleChange(value);
  }

  return (
    <>
      <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <select
            className="form-select appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Default select example"
            onChange={handleSelectChange}
          >
            <option>Seleccione...</option>
            {
              props.options.map((option, index) => {
                return <option key={index} value={option.value}>{option.text}</option>
              })
            }
          </select>
        </div>
      </div>
    </>
  );
}

export default Dropdown;
