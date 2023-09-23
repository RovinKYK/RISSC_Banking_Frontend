import "./overview.scss"
import React from 'react'
import mastercard from '../../../images/mastercard_icon.png'
import Charts from '../../../components/chart/Chart'
import useGetUserSavingsAccounts from "../../../hooks/queries/users/useGetUserSavingsAccounts";
import useGetUserCurrentAccounts from "../../../hooks/queries/users/useGetUserCurrentAccounts";
import useGetUserLoans from "../../../hooks/queries/users/useGetUserLoans";
import useGetUserOnlineLoans from "../../../hooks/queries/users/useGetUserOnlineLoans";
import useGetUserTransactions from "../../../hooks/queries/users/useGetUserTransactions";
import { currency } from "../../../helpers/formatters";

function Overview() {

  const {data: s_accounts} = useGetUserSavingsAccounts();
  const {data: c_accounts} = useGetUserCurrentAccounts();
  const accounts = (c_accounts && s_accounts) && s_accounts.concat(c_accounts);
  
  const {data: p_loans} = useGetUserLoans();
  const {data: o_loans} = useGetUserOnlineLoans();
  const loans = (p_loans && o_loans) && p_loans.concat(o_loans);

  const {data: transactions} = useGetUserTransactions();
  
  const totalBalance = accounts && accounts.map(account => account.balance).reduce((x, y) => +x + +y, 0);
  const totalLiabs = loans && loans.map(loan => loan.amount).reduce((x, y) => +x + +y, 0);
  
  const getMonthlySums = (items) => {
    const monthlyInflow = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const monthlyOutflow = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    if (!items) return {monthlyInflow, monthlyOutflow};

    for (const item of items) {
      const date = new Date(item.date);
      const month = date.getMonth();
      if (parseFloat(item.amount) > 0) {
        monthlyInflow[month] += +item.amount;
      } 
      else if (parseFloat(item.amount) < 0) {
        monthlyOutflow[month] += -item.amount;
      }   
    }
    return {monthlyInflow, monthlyOutflow};
  }

   return (
    <div className='overview'>

      <h2>Overview</h2>

      <hr/>

      <div className="content-wrapper">

        <div className="left-section-wrapper">
          <div className="left-section">

            <img src={mastercard} alt='mastercard'></img>

            <div className="balance">
              <p>Total Assets</p>
              <h3>{totalBalance && currency(totalBalance)}</h3>
            </div>

            <div className="balance">
              <p>Total Liablities</p>
              <h3>{totalLiabs && currency(totalLiabs)}</h3>
            </div>

          </div>

        </div>

        <div className="right-section-wrapper">
          <div className="right-section">
            <h4>Transactions Summary</h4>
            <div className="chart-holder">
              <Charts chartData = {transactions? getMonthlySums(transactions) : {}}/>

            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Overview