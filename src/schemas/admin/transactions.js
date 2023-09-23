import {currency, date} from '../../helpers/formatters'

export const transactionsColumns = [
    { 
      field: 'date', headerName: 'Date', type: 'date' , minWidth: 100, flex: 1
    },
    { 
      field: 'accountNumber', headerName: 'Account', minWidth: 130, flex: 1
    },
    { 
      field: 'transactionType', headerName: 'Type', minWidth: 70, flex: 1
    },
    { 
      field: 'amount', headerName: 'Amount', minWidth: 70, flex: 1
    },
    { 
      field: 'description', headerName: 'Description', minWidth: 130, flex: 1
    },
  ];
  
export function transactionsRows(transactions) {
    const rows = transactions?.map(transaction => (
        {
            date: date(transaction.date),
            id: transaction.type + transaction.ID,
            transactionType: transaction.type,
            accountNumber: transaction.accountNumber || `${transaction.fromAccountID} to ${transaction.toAccountID}`,
            amount: currency(transaction?.amount?.replace("-", "")),
            description: transaction?.remarks,
        }
        ))
    return rows
}