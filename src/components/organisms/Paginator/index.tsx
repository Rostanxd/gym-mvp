import {useEffect, useState} from "react";
import {PAGINATOR_PROPERTIES} from "../../../../utils/constants";

type PaginatorProps = {
  numberRows: number,
  onButtonPageClick: any,
}

interface PaginatorState {
  numberRows: number,
  rowsPerPage: number,
  numberOfPages: number,
  currentPage: number,
}

const INITIAL_STATE: PaginatorState = {
  currentPage: 1,
  numberRows: 0,
  rowsPerPage: PAGINATOR_PROPERTIES.rowsPerPage[0],
  numberOfPages: 1,
}

const Paginator = (props: PaginatorProps) => {
  const [state, setState] = useState(INITIAL_STATE);

  const classNames = {
    backButton: "py-2 px-3 ml-0 leading-tight text-primary bg-silver-1 rounded-l-lg border border-silver",
    backButtonDisabled: "py-2 px-3 ml-0 leading-tight text-silver bg-silver-1 rounded-l-lg border border-silver",
    button: "py-2 px-3 leading-tight text-primary bg-silver-1 border border-silver",
    buttonSelected: "py-2 px-3 leading-tight text-white bg-secondary border border-silver",
    nextButton: "py-2 px-3 leading-tight text-primary bg-silver-1 rounded-r-lg border border-silver",
    nextButtonDisabled: "py-2 px-3 leading-tight text-silver bg-silver-1 rounded-r-lg border border-silver",
  }

  useEffect(() => {
    if (props.numberRows > 0) {
      setState({
        ...state,
        numberRows: props.numberRows,
        rowsPerPage: state.rowsPerPage,
        numberOfPages: +(props.numberRows / state.rowsPerPage).toFixed(0),
      });
    } else {
      setState({
        currentPage: 1,
        numberRows: props.numberRows,
        rowsPerPage: PAGINATOR_PROPERTIES.rowsPerPage[0],
        numberOfPages: 1,
      });
    }
  }, [props.numberRows]);

  const isBackButtonDisabled = () => {
    return state.currentPage === 1;
  }

  const isNextButtonDisabled = () => {
    return state.currentPage === state.numberOfPages;
  }

  const handleOnChangeRowsPerPage = (event: any) => {
    event.preventDefault();
    const value = event.target.value;
    setState({
      ...state,
      currentPage: 1,
      rowsPerPage: value,
      numberOfPages: +(state.numberRows / value).toFixed(0),
    });

    if (!!props.onButtonPageClick) {
      props.onButtonPageClick(1);
    }
  }

  const handleClickOnButtonPage = (event: any, pageNumber: number) => {
    event.preventDefault();
    setState({
      ...state,
      currentPage: pageNumber,
    });

    if (!!props.onButtonPageClick) {
      props.onButtonPageClick(pageNumber);
    }
  }

  const renderRowsPerPageOptions = () => {
    return (
      <select
        value={state.rowsPerPage}
        onChange={(event) => handleOnChangeRowsPerPage(event)}
      >
        {
          PAGINATOR_PROPERTIES.rowsPerPage.map((option, index) =>
            <option key={`paginator-rows-option-${index.toString()}`}>{option.toString()}</option>)
        }
      </select>
    );
  }

  const renderButtonsPages = () => {
    let buttons = [];
    if (state.numberOfPages > 0) {
      for (let x = 0; x < state.numberOfPages; x++) {
        const pageNumber = x + 1;
        buttons.push(
          <li key={`paginator-button-${x.toString()}`}>
            <button
              className={pageNumber === state.currentPage ? classNames['buttonSelected'] : classNames['button']}
              onClick={(event) => handleClickOnButtonPage(event, pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        );
      }
    } else {
      buttons.push(
        <li>
          <button disabled={true} className={classNames['buttonSelected']}>1</button>
        </li>
      );
    }
    return buttons;
  }

  return (
    <div>
      <div>
        <span>Mostrar:</span>
        {renderRowsPerPageOptions()}
      </div>
      <nav aria-label="">
        <ul className="inline-flex -space-x-px">
          <li>
            <button
              disabled={isBackButtonDisabled()}
              className={isBackButtonDisabled() ? classNames['backButtonDisabled'] : classNames['backButton']}
              onClick={(event) => handleClickOnButtonPage(event, state.currentPage - 1)}
            >
              Anterior
            </button>
          </li>
          {renderButtonsPages()}
          <li>
            <button
              disabled={isNextButtonDisabled()}
              className={isNextButtonDisabled() ? classNames['nextButtonDisabled'] : classNames['nextButton']}
              onClick={(event) => handleClickOnButtonPage(event, state.currentPage + 1)}
            >
              Siguiente
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Paginator;
