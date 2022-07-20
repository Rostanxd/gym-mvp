import {Member} from "../../../interfaces";
import {Paginator} from "../index";
import {useEffect, useState} from "react";
import {PAGINATOR_PROPERTIES} from "../../../../utils/constants";

type MembersTableProps = {
  members: Array<Member>,
}

interface MembersTableState {
  membersPerPage: Array<Member>,
  numberMembersPerPage: number,
  currentPage: number,
}

const INITIAL_STATE:MembersTableState = {
  membersPerPage: [],
  numberMembersPerPage: PAGINATOR_PROPERTIES.rowsPerPage[0],
  currentPage: 1,
}

const MembersTable = (props: MembersTableProps) => {
  const [state, setState] = useState(INITIAL_STATE);

  useEffect(() => {

  }, [props.members]);

  const filterMembersByPageNumber = (pageNumber: number) => {
    let members = [...props.members];
    const startIndex = pageNumber <= 1 ? 1 : state.numberMembersPerPage * (pageNumber - 1);
    members = members.splice(startIndex, state.numberMembersPerPage);
    return members;
  }

  const changePage = (pageNumber: number) => {
    const membersPerPage = filterMembersByPageNumber(pageNumber);
    setState({
      ...state,
      membersPerPage: membersPerPage,
      currentPage: pageNumber,
    });
  }

  return (
    <div>
      <table>
        <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Membresía</th>
          <th>Inicio</th>
          <th>Fin</th>
          <th>Estado</th>
        </tr>
        </thead>
        <tbody>
        {
          state.membersPerPage.map((member, index) => {
            return <tr key={index}>
              <td>{member.id}</td>
              <td>{`${member.first_name} ${member.last_name}`}</td>
              <td>{member.membership}</td>
              <td>{member.start_date}</td>
              <td>{member.end_date}</td>
              <td>{member.status}</td>
            </tr>
          })
        }
        </tbody>
      </table>
      <Paginator
        numberRows={props.members.length}
        onButtonPageClick={changePage}
      />
    </div>
  );
}

export default MembersTable;
