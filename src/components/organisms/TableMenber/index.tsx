type ButtonProps = {
    row:number  ,
    column: number,
  }

  const TableMenber = (props: ButtonProps)=>{
    
    const drawnColumn = () => {
        const components = [];
        for (let c = 0; c < props.column; c= c+1) {
           components.push(
            <>
              <th className="border-b-2 border-gray-400 py-6 border">ID</th>
              <br/>
              {console.log("columna"+ c)}
            </>
          );
        }
        return components;
    };

    const drawnRow = () => {
        const components = [];
        for (let r = 0; r < props.row; r++) {
            components.push(
            <div>
              <td className="border-b-2 border-gray-400 text-center">44444444560</td>
              <br/>
            </div>
            );  
        }
        return components
    };

    return(
        <div className="text-center  pl-36">
    
          <table className="w-auto border">
            <thead className="">
              <tr>{drawnColumn()}</tr>
            </thead>
    
            <tbody className="w-auto border">
              <tr>{drawnRow()}</tr>
            </tbody>
          </table>
        </div>
    );

}
export default TableMenber;