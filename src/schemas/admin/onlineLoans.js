import {currency, date} from '../../helpers/formatters'

export const onlineLoansColumns = [
    { 
      field: 'id', headerName: 'Loan ID', minWidth: 50, flex: 0.5
    },
    { 
      field: 'applyDate', headerName: 'Apply Date', type: 'date' , minWidth: 100, flex: 1
    },
    { 
      field: 'amount', headerName: 'Amount', minWidth: 70, flex: 1
    },
    { 
      field: 'period', headerName: 'Time Period', minWidth: 70, flex: 1
    },
    { 
      field: 'FDID', headerName: 'Linked Fixed Deposit', minWidth: 70, flex: 1
    },
    { 
      field: 'linkedAccountID', headerName: 'Linked Account', minWidth: 70, flex: 1
    },
  ];
 
export function onlineLoansRows(loans) {
    const rows = loans?.map(loan => (
    {
        id: loan.ID,
        applyDate: date(loan.applyDate),
        amount: currency(loan.amount),
        period: `${loan.timePeriod} years`,
        linkedAccountID: loan.linkedAccountID,
        FDID: loan.FDID
    }
    ))
    return rows
}