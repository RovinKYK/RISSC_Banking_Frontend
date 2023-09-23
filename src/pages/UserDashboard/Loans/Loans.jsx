import "./loans.scss"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';

import { loansColumns, loansRows } from "../../../schemas/admin/loans";
import { onlineLoansColumns, onlineLoansRows } from "../../../schemas/admin/onlineLoans";

import useGetUserLoans from "../../../hooks/queries/users/useGetUserLoans";
import useGetUserOnlineLoans from "../../../hooks/queries/users/useGetUserOnlineLoans";

function Loans() {
  const navigate = useNavigate()

  const {data: p_loans} = useGetUserLoans();
  const {data: o_loans} = useGetUserOnlineLoans();
  // console.log(loans);

  return (
    <div className="loans">

      <div className="title">
        <h2>Online Loans</h2>
        <div className="loan-actions">
        <Link to={"/userdashboard/onlineloan"}>
        <button>
          + Get Online Loan
        </button>
        </Link>
        </div>
      </div>
      <p>
      Click on online loan to see installment payments 
      </p>

      <div style={{ height: 250, width: '90%' }}>
        <div style={{ display: 'flex', height: '100%' }}>
          <div className="table-container">
            {o_loans &&
            <DataGrid
              autoHeight
              className='table'
              rows={onlineLoansRows(o_loans)}
              columns={onlineLoansColumns}
              onRowClick={params => (
                navigate(`/userdashboard/loans/${params.row.id}`, {
                  state: {
                    type: "online loan",
                  }
                })
              )}
              pageSize={10}
              rowsPerPageOptions={[10]}
              disableSelectionOnClick
              sx={{
                '& .MuiDataGrid-cell:hover': {
                  cursor: 'pointer'
                },
              }}
            />
            }
          </div>
        </div>
      </div>

      <div className="title">
        <h2>Loans</h2>
      </div>
      <p>
      Click on loan to see installment payments 
      </p>

      <div style={{ height: 300, width: '90%' }}>
        <div style={{ display: 'flex', height: '100%' }}>
          <div className="table-container">
            {p_loans &&
            <DataGrid
              autoHeight
              className='table'
              rows={loansRows(p_loans)}
              columns={loansColumns}
              onRowClick={params => (
                navigate(`/userdashboard/loans/${params.row.id}`, {
                  state: {
                    type: "loan",
                  }
                })
              )}
              pageSize={10}
              rowsPerPageOptions={[10]}
              disableSelectionOnClick
              sx={{
                '& .MuiDataGrid-cell:hover': {
                  cursor: 'pointer'
                },
              }}
            />
            }
          </div>
        </div>
      </div>

    </div>
  )
}

export default Loans