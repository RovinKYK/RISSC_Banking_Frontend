import "./loaninstallments.scss"
import { useParams, useLocation } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';

import { currency, date } from "../../../../helpers/formatters";
import useApi from "../../../../hooks/useApi";

function LoanInstallments() {
  const params = useParams();
  const { state: loanData } = useLocation();

  const { data: installmentsData } = useApi("/api/loaninstallments", "POST", false, {loanID: params.loanID, loanType: loanData.type})
  const installments = installmentsData?.installments;

  const installmentsColumns = [
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
        payment: currency(installment.payment),
        date: date(installment.date),
        installmentNumber: installment.installmentNumber,
        status: installment.status,
    }
    ))

  return (
    <div className="transactions">

      <div className="title">
        <h2>Installments - {(loanData.type === "loan" ? "Loan " : "Online Loan ") + params.loanID} </h2>
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

export default LoanInstallments