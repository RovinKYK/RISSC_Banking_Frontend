import "./lateinstallments.scss"
import React from 'react'
import { DataGrid } from '@mui/x-data-grid';

import { currency, date } from "../../../helpers/formatters";

import useGetLateInstallments from '../../../hooks/queries/admin/useGetLateInstallments'

function LateInstallments() {

  // fetch and cache all accounts
  const {data: installments} = useGetLateInstallments();

  const installmentsColumns = [
    { 
      field: 'loanID', headerName: 'Loan ID', minWidth: 50, flex: 0.5
    },
    { 
      field: 'type', headerName: 'Loan Type', minWidth: 50, flex: 1
    },
    { 
      field: 'payment', headerName: 'Payment', minWidth: 130, flex: 1
    },
    { 
      field: 'date', headerName: 'Date', type: 'date',  minWidth: 70, flex: 1
    },
    { 
      field: 'installmentNumber', headerName: 'Installment No', minWidth: 70, flex: 1
    },
    { 
      field: 'status', headerName: 'Status', minWidth: 130, flex: 1
    },
  ];

  const installmentsRows = installments?.map(installment => (
    { 
        id: installment.ID,
        loanID: installment.loanID || installment.onlineLoanID,
        type: installment.loanID ? "loan" : "online loan",
        payment: currency(installment.payment),
        date: date(installment.date),
        installmentNumber: installment.installmentNumber,
        status: installment.status,
    }
    ))

  return (
    <div className="accounts">

      <div className="title">
        <h2>Late Installments</h2>
      </div>
      
      <div style={{ height: 700, width: '90%' }}>
        <div style={{ display: 'flex', height: '100%' }}>
          <div className="table-container">
            {installments &&
            <DataGrid
              autoHeight
              className='table'
              rows={installmentsRows}
              columns={installmentsColumns}
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

export default LateInstallments