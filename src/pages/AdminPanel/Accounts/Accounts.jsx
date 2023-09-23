import "./accounts.scss"
import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

import {currency} from '../../../helpers/formatters'

import useGetAccounts from '../../../hooks/queries/admin/useGetAccounts'

function Accounts() {

  // fetch and cache all accounts
  const {data: accounts} = useGetAccounts()
  // console.log(accounts);

  const columns = [
    { 
      field: 'id', headerName: 'Account No', minWidth: 100, flex: 1
    },
    { 
      field: 'accountBalance', headerName: 'Balance', minWidth: 80, flex: 1
    },
    { 
      field: 'accountType', headerName: 'Type', minWidth: 70, flex: 1
    },
    {
      field: 'branch', headerName: 'Branch', minWidth: 80, flex: 1
    },
    { 
      field: 'interestRate', headerName: 'Interest Rate' , minWidth: 100, flex: 1
    },
    {
      field: 'maxWithdrawals', headerName: 'Max Withdrawals', minWidth: 80, flex: 1
    },
    {
      field: 'currentWithdrawals', headerName: 'Current Withdrawals', minWidth: 80, flex: 1
    },
  ];
  
  const rows = accounts?.map(account => (
    {
      id: account.accountNumber,
      accountBalance: currency(account.balance),
      accountType: account.accountType,
      branch: account.branch,
      interestRate: account.interestRate,
      maxWithdrawals: account.maxWithdrawals,
      currentWithdrawals: account.currentWithdrawals,
    }
  ))

  return (
    <div className="accounts">

      <div className="title">
        <h2>Accounts</h2>
      </div>
      
      <div style={{ height: 700, width: '90%' }}>
        <div style={{ display: 'flex', height: '100%' }}>
          <div className="table-container">
            {accounts &&
            <DataGrid
              autoHeight
              className='table'
              rows={rows}
              columns={columns}
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

export default Accounts