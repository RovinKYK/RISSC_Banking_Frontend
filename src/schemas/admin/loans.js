import {currency, date} from '../../helpers/formatters'

export const loansColumns = [
    { 
      field: 'id', headerName: 'Loan ID', minWidth: 50, flex: 0.5
    },
    { 
      field: 'applyDate', headerName: 'Apply Date', type: 'date' , minWidth: 100, flex: 1
    },
    { 
      field: 'approveDate', headerName: 'Approval Date', type: 'date' , minWidth: 100, flex: 1
    },
    { 
      field: 'amount', headerName: 'Amount', minWidth: 70, flex: 1
    },
    { 
      field: 'period', headerName: 'Time Period', minWidth: 70, flex: 1
    },
    {
      field: 'isApproved', headerName: 'Approval Status', minWidth: 100, flex: 1
    },
  ];
 
export function loansRows(loans) {
    const rows = loans?.map(loan => (
    {
        id: loan.ID,
        applyDate: date(loan.applyDate),
        approveDate: loan.approveDate ? date(loan.approveDate) : "Pending approval",
        amount: currency(loan.amount),
        period: `${loan.timePeriod} years`,
        isApproved : loan.isApproved === 1 ? "Approved" : "Pending"
    }
    ))
    return rows
}