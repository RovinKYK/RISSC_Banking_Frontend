import {currency, date} from '../../helpers/formatters'

export const fixedDepositsColumns = [
    { 
      field: 'id', headerName: 'FD No', minWidth: 130, flex: 0.5
    },
    { 
      field: 'accId', headerName: 'Savings Account No', minWidth: 130, flex: 1
    },
    { 
      field: 'amount', headerName: 'Amount', minWidth: 80, flex: 1
    },
    { 
      field: 'period', headerName: 'Time Period', minWidth: 100, flex: 1
    },
    { 
      field: 'interestRate', headerName: 'Interest Rate', minWidth: 80, flex: 1
    },
    { 
      field: 'matuarityDate', headerName: 'Maturity Date', minWidth: 100, flex: 1
    },
  ];

export function fixedDepositsRows(fixed_deposits) {
  const rows = fixed_deposits?.map(fd => (
    {
      id: fd.ID,
      accId: fd.linkedAccountID,
      amount: currency(fd.amount),
      period: `${fd.period} years`,
      interestRate: `${fd.interestRate}%`,
      matuarityDate: date(fd.maturityDate),
    }
  ))
  return rows
}