import {useEffect, useState} from "react";

import {SearchMember} from "../../src/components/molecules";
import {MembersTable} from "../../src/components/organisms";
import Layout from "../../src/components/Layout";
import {Member} from "../../src/interfaces";

import MembersAPI from '../../src/services/membersAPI';

const TEST_USERS = [
  {
    id: '0923175756',
    first_name: 'Rostan',
    last_name: 'Soriano',
    membership: 'Horario de mañana',
    start_date: '04/07/2022',
    end_date: '04/08/2022',
    status: 'Activo'
  }, {
    id: '0923175756',
    first_name: 'Rostan',
    last_name: 'Soriano',
    membership: 'Horario de mañana',
    start_date: '04/07/2022',
    end_date: '04/08/2022',
    status: 'Activo'
  }, {
    id: '0923175756',
    first_name: 'Rostan',
    last_name: 'Soriano',
    membership: 'Horario de mañana',
    start_date: '04/07/2022',
    end_date: '04/08/2022',
    status: 'Activo'
  }, {
    id: '0923175756',
    first_name: 'Rostan',
    last_name: 'Soriano',
    membership: 'Horario de mañana',
    start_date: '04/07/2022',
    end_date: '04/08/2022',
    status: 'Activo'
  }, {
    id: '0923175756',
    first_name: 'Rostan',
    last_name: 'Soriano',
    membership: 'Horario de mañana',
    start_date: '04/07/2022',
    end_date: '04/08/2022',
    status: 'Activo'
  }, {
    id: '0923175756',
    first_name: 'Rostan',
    last_name: 'Soriano',
    membership: 'Horario de mañana',
    start_date: '04/07/2022',
    end_date: '04/08/2022',
    status: 'Activo'
  }, {
    id: '0923175756',
    first_name: 'Rostan',
    last_name: 'Soriano',
    membership: 'Horario de mañana',
    start_date: '04/07/2022',
    end_date: '04/08/2022',
    status: 'Activo'
  }, {
    id: '0923175756',
    first_name: 'Rostan',
    last_name: 'Soriano',
    membership: 'Horario de mañana',
    start_date: '04/07/2022',
    end_date: '04/08/2022',
    status: 'Activo'
  }, {
    id: '0923175756',
    first_name: 'Rostan',
    last_name: 'Soriano',
    membership: 'Horario de mañana',
    start_date: '04/07/2022',
    end_date: '04/08/2022',
    status: 'Activo'
  }, {
    id: '0923175756',
    first_name: 'Rostan',
    last_name: 'Soriano',
    membership: 'Horario de mañana',
    start_date: '04/07/2022',
    end_date: '04/08/2022',
    status: 'Activo'
  }, {
    id: '0923175756',
    first_name: 'Rostan',
    last_name: 'Soriano',
    membership: 'Horario de mañana',
    start_date: '04/07/2022',
    end_date: '04/08/2022',
    status: 'Activo'
  }, {
    id: '0923175756',
    first_name: 'Rostan',
    last_name: 'Soriano',
    membership: 'Horario de mañana',
    start_date: '04/07/2022',
    end_date: '04/08/2022',
    status: 'Activo'
  }, {
    id: '0923175756',
    first_name: 'Rostan',
    last_name: 'Soriano',
    membership: 'Horario de mañana',
    start_date: '04/07/2022',
    end_date: '04/08/2022',
    status: 'Activo'
  }, {
    id: '0923175756',
    first_name: 'Rostan',
    last_name: 'Soriano',
    membership: 'Horario de mañana',
    start_date: '04/07/2022',
    end_date: '04/08/2022',
    status: 'Activo'
  }, {
    id: '0923175756',
    first_name: 'Rostan',
    last_name: 'Soriano',
    membership: 'Horario de mañana',
    start_date: '04/07/2022',
    end_date: '04/08/2022',
    status: 'Activo'
  }
];

interface MembersPageState {
  query: string,
  members: Array<Member>,
  isLoading: boolean,
  errorMessage: string,
}

const INITIAL_STATE: MembersPageState = {
  query: "",
  members: TEST_USERS,
  isLoading: false,
  errorMessage: "",
}

const MembersPage = () => {
  const [state, setState] = useState(INITIAL_STATE);

  useEffect(() => {
    //  TODO: uncomment this as soon the API is ready
    // getMembers();
  }, []);

  const getMembers = () => {
    setState({...state, isLoading: true, errorMessage: "",});

    MembersAPI
      .getMembers(state.query)
      .then((result) => {
        setState({
          ...state,
          members: result.data,
          errorMessage: "",
        });
      })
      .catch((error) => {
        console.error('There was an error', error);
        setState({
          ...state,
          members: [],
          errorMessage: "Hubo un error...",
        });
      })
      .finally(() => {
        setState({
          ...state,
          isLoading: false,
        })
      });
  }

  return <Layout title="Miembros">
    <SearchMember/>
    <MembersTable members={state.members}/>
  </Layout>
}

export default MembersPage;
