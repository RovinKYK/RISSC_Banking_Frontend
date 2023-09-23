import "./fixeddeposits.scss"
import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

import { fixedDepositsColumns, fixedDepositsRows } from "../../../schemas/admin/fixedDeposits";

import useGetFixedDeposits from '../../../hooks/queries/admin/useGetFixedDeposits'

function FixedDeposits() {

  // fetch and cache all accounts
  const {data: fixed_deposits} = useGetFixedDeposits()
  // console.log(accounts);

  return (
    <div className="accounts">

      <div className="title">
        <h2>Fixed Deposits</h2>
      </div>
      
      <div style={{ height: 700, width: '90%' }}>
        <div style={{ display: 'flex', height: '100%' }}>
          <div className="table-container">
            {fixed_deposits &&
            <DataGrid
              autoHeight
              className='table'
              rows={fixedDepositsRows(fixed_deposits)}
              columns={fixedDepositsColumns}
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

export default FixedDeposits