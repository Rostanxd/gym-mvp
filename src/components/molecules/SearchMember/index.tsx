import {useState} from "react";
import {InputText} from "../../atoms";

type SearchMemberProps = {

}

interface SearchMemberState {
  userId: string,
  userFullName: string,
}

const INITIAL_STATE: SearchMemberState = {
  userId: "",
  userFullName: "",
};

const SearchMember = (props: SearchMemberProps) => {
  const [state, setState] = useState(INITIAL_STATE);

  const handleInputUpdates = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    const newState = {...state};
    newState[name] = value;
    setState(newState);
  }

  return (
    <div className="p-4">
      <InputText
        name={'userId'}
        value={state.userId}
        label={'ID'}
        placeholder={'Ingrese la cédula...'}
        onChange={handleInputUpdates}
      />
      <InputText
        name={'userFullName'}
        value={state.userFullName}
        label={'Nombres o Apellidos'}
        placeholder={'Ingrese texto...'}
        onChange={handleInputUpdates}
      />
    </div>
  );
}

export default SearchMember;
