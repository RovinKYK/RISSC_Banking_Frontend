import "./transactions.scss"
import { DataGrid } from '@mui/x-data-grid';

import { transactionsColumns, transactionsRows } from "../../../schemas/admin/transactions";

import useGetTransactions from "../../../hooks/queries/admin/useGetTransactions";

function Transactions() {

  // fetch and cache all transactions
  const {data: transactions} = useGetTransactions()
  // console.log(transactions)

  return (
    <div className="transactions">

      <div className="title">
        <h2>Transactions</h2>
      </div>

      <div style={{ height: 700, width: '90%' }}>
        <div style={{ display: 'flex', height: '100%' }}>
          <div className="table-container">
            {transactions &&
            <DataGrid
              autoHeight
              className='table'
              rows={transactionsRows(transactions)}
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

export default Transactions