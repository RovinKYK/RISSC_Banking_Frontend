import {currency} from '../../helpers/formatters'

export const accountsColumns = [
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
  
  export function accountsRows(accounts) {
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
    return rows
}