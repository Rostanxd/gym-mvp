import {useState} from "react";
import {IconButton, InputText} from "../../atoms";

type SearchMemberProps = {}

interface SearchMemberState {
  userQuery: string,
  membershipState: string,
}

const INITIAL_STATE: SearchMemberState = {
  userQuery: "",
  membershipState: "",
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
            name={'userQuery'}
            value={state.userQuery}
            label={'Id o Nombre'}
            placeholder={'Ingrese su búsqueda...'}
            onChange={handleInputUpdates}
          />
        </div>
        <div className="w-1/3">
          <IconButton/>
        </div>
      </div>
    </div>
  );
}

export default SearchMember;
