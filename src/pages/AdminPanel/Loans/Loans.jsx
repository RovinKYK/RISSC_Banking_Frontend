import "./loans.scss"
import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';
import Button from '@mui/material/Button';

import { loansColumns, loansRows } from "../../../schemas/admin/loans";

import useGetLoans from '../../../hooks/queries/admin/useGetLoans'
import popAction from "../../../helpers/popAction";
import apiCrud from "../../../api/apiCrud";
import { sqlDate } from "../../../helpers/formatters";
import { AuthContext } from "../../../context/Auth-context";

function Loans() {
  const { role } = useContext(AuthContext);

  // fetch and cache all accounts
  const {data: loans} = useGetLoans();
  const newLoansColumns = (role === "manager") ? [...loansColumns,     
  {   field: 'actions', 
      headerName: 'Actions', 
      minWidth: 110,
      flex: 1,
      align: 'center',
      renderCell: (params) => usersActions(params)
  },] :
  loansColumns;

  const usersActions = (params) => (
    params.row.isApproved === "Pending" &&
    <div className='actions'>
        <Button variant="contained" className="activate"
          onClick={() => popAction(
            'Are you sure?', 
            "This loan will be approved",
            'Approve',
            ()=>apiCrud(`/api/manager/approveLoan`, 'POST', 'Loan approved', {
              loanID: params.row.id,
              approveDate: sqlDate(new Date()),
            })()
            )}>
          Approve
        </Button> 
    </div>
  )

  return (
    <div className="accounts">

      <div className="title">
        <h2>Loans</h2>
        <div className="loan-actions">
        <Link to={"/adminpanel/loan-request"}>
        <button>
          + New Loan Request
        </button>
        </Link>
        </div>
      </div>
      
      <div style={{ height: 250, width: '90%' }}>
        <div style={{ display: 'flex', height: '100%' }}>
          <div className="table-container">
            {loans &&
            <DataGrid
              autoHeight
              className='table'
              rows={loansRows(loans)}
              columns={newLoansColumns}
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