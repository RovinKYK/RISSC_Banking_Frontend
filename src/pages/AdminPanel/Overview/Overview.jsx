import "./overview.scss"
import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

import { transactionsColumns, transactionsRows } from "../../../schemas/admin/transactions";

import useGetUsers from '../../../hooks/queries/admin/useGetUsers'
import useGetAccounts from '../../../hooks/queries/admin/useGetAccounts'
import useGetTransactions from '../../../hooks/queries/admin/useGetTransactions'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';

function Overview() {

  const {data: users} = useGetUsers()
  const {data: accounts} = useGetAccounts()
  const {data: transactions} = useGetTransactions()
  transactions?.sort((a, b) => new Date(a.date) < new Date(b.date) ? 1 : -1)

  return (
    <div className="overview">
      <h2>Overview</h2>

      <hr/>

      <div className="content-wrapper">

        <div className="left-section-wrapper">
          <div className="left-section">
            <AdminPanelSettingsIcon className="icon"/>
            <p>Total customers</p>
            <h3>{users?.length}</h3>
            <p>Total accounts</p>
            <h3>{accounts?.length}</h3>
            <p>Total transactions</p>
            <h3>{transactions?.length}</h3>
          </div>
        </div>

        <div className="right-section-wrapper">
          <div className="right-section">

            <h3>Recent Transactions</h3>

            <div style={{ height: 400, width: '90%' }}>
              <div style={{ display: 'flex', height: '100%' }}>
                <div className="table-container">
                  {transactions &&
                  <DataGrid
                    autoHeight
                    className='table'
                    rows={transactionsRows(transactions.slice(0, 5))}
                    columns={transactionsColumns}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                    disableSelectionOnClick
                    disableColumnMenu
                    hideFooterPagination
                    hideFooter
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
        </div>

      </div>
    </div>
  )
}

export default Overview