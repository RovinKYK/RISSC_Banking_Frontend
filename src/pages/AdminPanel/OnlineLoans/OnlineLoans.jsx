import "./loans.scss"
import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

import { onlineLoansColumns, onlineLoansRows } from "../../../schemas/admin/onlineLoans";

import useGetOnlineLoans from '../../../hooks/queries/admin/useGetOnlineLoans'

function OnlineLoans() {

  // fetch and cache all accounts
  const {data: o_loans} = useGetOnlineLoans();

  return (
    <div className="onlineloans">

      <div className="title">
        <h2>Online Loans</h2>
      </div>
      
      <div style={{ height: 250, width: '90%' }}>
        <div style={{ display: 'flex', height: '100%' }}>
          <div className="table-container">
            {o_loans &&
            <DataGrid
              autoHeight
              className='table'
              rows={onlineLoansRows(o_loans)}
              columns={onlineLoansColumns}
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

export default OnlineLoans