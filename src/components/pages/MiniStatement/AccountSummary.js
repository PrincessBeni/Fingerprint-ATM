import React from 'react'
import {Button} from '../../Button'
import button from '../Withorwithoutcard'
import './AccountSummary.css'
import { useTable } from 'react-table';

function AccountSummary() {

    const data = React.useMemo(() =>
    [
    {
    accountType: 'DEBIT/CREDIT',
    amount: 'GHS',
    bankName: 'Cal Bank',
    date: 'DD/MM/YY',
    time: 'HR/MINS/SEC',
    },

    {
    accountType: 'DEBIT/CREDIT',
    amount: 'GHS',
    bankName: 'Cal Bank',
    date: 'DD/MM/YY',
    time: 'HR/MINS/SEC',
    },

    {
    accountType: 'DEBIT/CREDIT',
    amount: 'GHS',
    bankName: 'Cal Bank',
    date: 'DD/MM/YY',
    time: 'HR/MINS/SEC',
    },

    {
    accountType: 'DEBIT/CREDIT',
    amount: 'GHS',
    bankName: 'Cal Bank',
    date: 'DD/MM/YY',
    time: 'HR/MINS/SEC',
    },
    {
        accountType: 'DEBIT/CREDIT',
        amount: 'GHS',
        bankName: 'Cal Bank',
        date: 'DD/MM/YY',
        time: 'HR/MINS/SEC',
        },
    
        {
        accountType: 'DEBIT/CREDIT',
        amount: 'GHS',
        bankName: 'Cal Bank',
        date: 'DD/MM/YY',
        time: 'HR/MINS/SEC',
        },
    
        {
        accountType: 'DEBIT/CREDIT',
        amount: 'GHS',
        bankName: 'Cal Bank',
        date: 'DD/MM/YY',
        time: 'HR/MINS/SEC',
        },
    
        {
        accountType: 'DEBIT/CREDIT',
        amount: 'GHS',
        bankName: 'Cal Bank',
        date: 'DD/MM/YY',
        time: 'HR/MINS/SEC',
        },
    ],
    
    []
   )

   const columns = React.useMemo(
    () => [
    {
    Header: 'Account Details',
    columns: [
    {
    Header: 'Account Type',
    accessor: 'accountType',
    },
    {
    Header: 'Amount',
    accessor: 'amount',
    },
    {
    Header: 'Bank Name',
    accessor: 'bankName',
    },
    {
    Header: 'Date',
    accessor: 'date',
    },
    {
    Header: 'Time',
    accessor: 'time',
    },
],
    },
    ],
    []
   )
   
   const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
   } = useTable({ columns, data })
   


    return (
        <div className = 'account-summary-container'>
<table className = 'table' {...getTableProps()}>
   <thead>
     {headerGroups.map(headerGroup => (
       <tr className = 'table-row' {...headerGroup.getHeaderGroupProps()}>
         {headerGroup.headers.map(column => (
           <th className = 'table-head' {...column.getHeaderProps()}>{column.render('Header')}</th>
         ))}
       </tr>
     ))}
   </thead>
   <tbody {...getTableBodyProps()}>
     {rows.map(row => {
       prepareRow(row)
       return (
         <tr {...row.getRowProps()}>
           {row.cells.map(cell => {
             return <td className = 'table-data' {...cell.getCellProps()}>{cell.render('Cell')}</td>
           })}
         </tr>
       )
     })}
   </tbody>
 </table>
            <div className = 'account-summary-btn'>
                {button && <Button onClick = {() => window.location.href = '/YesOrNo'}
                    className='transaction-btns-list-1'
                    buttonStyle='secondary--btn'
                    buttonSize='stylished-small-btn'>
                    OK
                </Button>}
            </div>
        </div>
    )
}

export default AccountSummary
