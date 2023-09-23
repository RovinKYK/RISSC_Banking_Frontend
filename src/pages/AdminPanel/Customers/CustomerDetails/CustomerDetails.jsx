import "./userId.scss"
import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';

import useApi from '../../../../hooks/useApi'
import { accountsColumns, accountsRows } from "../../../../schemas/admin/accounts";
import { fixedDepositsColumns, fixedDepositsRows } from "../../../../schemas/admin/fixedDeposits";
import { transactionsColumns, transactionsRows } from "../../../../schemas/admin/transactions";
import { loansColumns, loansRows } from "../../../../schemas/admin/loans";
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function CustomerDetails() {

  const params = useParams();
  const { state: userData } = useLocation();

  
  // fetch user detials
  const { data: accountsData } = useApi("/api/admin/listAccounts/user", "POST", false, {customerID : params.userId}, `accounts ${params.userId}}`);
  const userAccounts = accountsData?.accounts;

  const { data: fixedDepositsData } = useApi("/api/admin/fixedDeposits/user", "POST", false, {customerID : params.userId}, `fds ${params.userId}}`);
  const userFixedDeposits = fixedDepositsData?.fixed_deposits;
  // fetch user transactions
  const { data: transactionsData } = useApi("/api/admin/listTransactions/user", "POST", false, {customerID : params.userId},  `transactions ${params.userId}}`);
  const userTransactions = transactionsData?.transactions;

  const { data: loansData } = useApi("/api/admin/listLoans/user", "POST", false, {customerID : params.userId},  `loans ${params.userId}}`);
  const userLoans = loansData?.loans;
  
  return (
    <div className="userId">

      <div className="title">
        <h2>{userData.name}</h2>
      </div>

      <div className="user-profile-container">

        <AccountBoxIcon className="icon"/>

        <div className="user-profile-details">

          <div className="left-user-profile-details">

            <p>Full Name:</p>
            <h3>{userData.name}</h3>

            <p>Phone Number:</p>
            <h3>{userData.phone}</h3>
            
            <p>Address:</p>
            <h3>{userData.address}</h3>

          </div>

          <div className="right-user-profile-details">

            <p>User ID:</p>
            <h3>{params.userId}</h3>

            <p>Username:</p>
            <h3>{userData.username}</h3>

            <p>Email:</p>
            <h3>{userData.email}</h3>
            
          </div>
                 
        </div>

      </div>

      <h3>Accounts</h3>

      <div  className="table-holder">
        <div style={{ display: 'flex', height: '100%' }}>
          <div className="table-container">
            {userAccounts &&
            <DataGrid
              autoHeight
              className='table'
              rows={accountsRows(userAccounts)}
              columns={accountsColumns}
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

      <h3>Fixed Deposits</h3>

      <div  className="table-holder">
        <div style={{ display: 'flex', height: '100%' }}>
          <div className="table-container">
            {userTransactions &&
              <DataGrid
                autoHeight
                className='table'
                rows={fixedDepositsRows(userFixedDeposits)}
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

      <h3>Loans</h3>

      <div  className="table-holder">
        <div style={{ display: 'flex', height: '100%' }}>
          <div className="table-container">
            {userTransactions &&
              <DataGrid
                autoHeight
                className='table'
                rows={loansRows(userLoans)}
                columns={loansColumns}
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

      <h3>Transactions</h3>

      <div  className="table-holder">
        <div style={{ display: 'flex', height: '100%' }}>
          <div className="table-container">
            {userTransactions &&
              <DataGrid
                autoHeight
                className='table'
                rows={transactionsRows(userTransactions)}
                columns={transactionsColumns}
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

export default CustomerDetails