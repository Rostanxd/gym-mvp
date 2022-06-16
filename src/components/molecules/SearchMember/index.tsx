import {useState} from "react";
import {Button, Dropdown, InputText} from "../../atoms";

type SearchMemberProps = {}

interface SearchMemberState {
  userId: string,
  userFullName: string,
  membershipState: string,
}

const INITIAL_STATE: SearchMemberState = {
  userId: "",
  userFullName: "",
  membershipState: "",
};

const SearchMember = (props: SearchMemberProps) => {
  const [state, setState] = useState(INITIAL_STATE);
  const options = [
    {value: 'A', text: 'Activo'},
    {value: 'I', text: 'Inactivo'}
  ];

  const handleInputUpdates = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const newState = {...state};
    newState[name] = value;
    setState(newState);
  }

  const handleSelectChanges = (value) => {
    setState({
      ...state,
      membershipState: value,
    })
  }

  const searchMemberships = () => {
    alert(JSON.stringify(state));
  }

  return (
    <div className="p-4">
      <div className="flex flex-row gap-2">
        <div className="w-1/3">
          <InputText
            name={'userId'}
            value={state.userId}
            label={'ID'}
            placeholder={'Ingrese la cédula...'}
            onChange={handleInputUpdates}
          />
        </div>
        <div className="w-1/3">
          <Dropdown
            options={options}
            handleChange={handleSelectChanges}
          />
        </div>
      </div>
      <div className="flex flex-row gap-2">
        <div className="w-1/3">
          <InputText
            name={'userFullName'}
            value={state.userFullName}
            label={'Nombres o Apellidos'}
            placeholder={'Ingrese texto...'}
            onChange={handleInputUpdates}
          />
        </div>
        <div className="w-1/3">
          <Button
            text={"Buscar"}
            handleOnClick={searchMemberships}
          />
        </div>
        <div className="w-1/3">
          <Button
            text={"Crear"}
            handleOnClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchMember;
