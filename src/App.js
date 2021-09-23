import React from 'react';
import './App.css';
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Home } from './components/pages/Home';
import Fingerprintrequest from './components/pages/Fingerprintrequest';
import Withorwithoutcard from './components/pages/Withorwithoutcard';
import Fingerprintmatched from './components/pages/Fingerprintmatched';
import Fingerprintmismatched from './components/pages/Fingerprintmismatched';
import Loading from './components/pages/Loading';
import SelectTransaction from './components/pages/SelectTransaction';
import SelectAmount from './components/pages/SelectAmount';
import ProceedConfirmation from './components/pages/ProceedConfirmation';
import Display from './components/pages/Display';
import EnterAmount from './components/pages/EnterAmount';
import RequestProcessing from './components/pages/RequestProcessing';
import TransactionCompleted from './components/pages/TransactionCompleted';
import InsertCard from './components/pages/InsertCard';
import EnterPin from './components/pages/EnterPin';
import WithcardSelectAmount from './components/pages/WithcardSelectAmount';
import ApproveTransactionChoice from './components/pages/ApproveTransactionChoice';
import WithCardSelectTransaction from './components/pages/WithCardSelectTransaction';
import WithCardFingerprintRequest from './components/pages/WithCardFingerprintRequest';
import WithCardLoading from './components/pages/WithCardLoading';
import WithCardFingerprintMatched from './components/pages/WithCardFingerprintMatched';
import WithCardEnterConfirmationCode from './components/pages/WithCardEnterConfirmationCode';
import CodeConfirmed from './components/pages/CodeConfirmed';
import AccountBalance from './components/pages/balanceEquiry/AccountBalance';
import YesOrNo from './components/pages/balanceEquiry/YesOrNo';
import Transfer from './components/pages/transfer/Transfer';
import EnterTransferAmount from './components/pages/transfer/EnterTransferAmount';
import ConfirmTransfer from './components/pages/transfer/ConfirmTransfer';
import WelcomePage from './components/pages/MyExchange/WelcomePage';
import InsertMoney from './components/pages/MyExchange/InsertMoney';
import ProceedConversion from './components/pages/MyExchange/ProceedConversion';
import ProcessingTransaction from './components/pages/MyExchange/ProcessingTransaction';
import ReceiptRequest from './components/pages/MyExchange/ReceiptRequest';
import TransactionSuccessful from './components/pages/MyExchange/TransactionSuccessful';
import TakeReceipt from './components/pages/MyExchange/TakeReceipt';
import NoProcessingTransaction from './components/pages/MyExchange/NoProcessingTransaction';
import NoTransactionSuccessful from './components/pages/MyExchange/NoTransactionSuccessful';


function App () {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component = {Home}/>
          <Route path = '/Withorwithoutcard' exact component = {Withorwithoutcard}/>
          <Route path = '/Fingerprintrequest' exact component = {Fingerprintrequest}/>
          <Route path = '/Fingerprintmatched' exact component = {Fingerprintmatched}/>
          <Route path = '/Fingerprintmismatched' exact component = {Fingerprintmismatched}/>
          <Route path = '/Loading' exact component = {Loading}/>
          <Route path = '/SelectTransaction' exact component = {SelectTransaction}/>
          <Route path = '/SelectAmount' exact component = {SelectAmount}/>
          <Route path = '/ProceedConfirmation' exact component = {ProceedConfirmation}/>
          <Route path = '/EnterAmount' exact component = {EnterAmount}/>
          <Route path = '/Display' exact component = {Display}/>
          <Route path = '/RequestProcessing' exact component = {RequestProcessing}/>
          <Route path = '/TransactionCompleted' exact component = {TransactionCompleted}/>
          <Route path = '/InsertCard' exact component = {InsertCard}/>
          <Route path = '/EnterPin' exact component = {EnterPin}/>
          <Route path = '/WithcardSelectAmount' exact component = {WithcardSelectAmount}/>
          <Route path = '/ApproveTransactionChoice' exact component = {ApproveTransactionChoice}/>
          <Route path = '/WithCardSelectTransaction' exact component = {WithCardSelectTransaction}/>
          <Route path = '/WithCardFingerprintRequest' exact component = {WithCardFingerprintRequest}/>
          <Route path = '/WithCardLoading' exact component = {WithCardLoading}/>
          <Route path = '/WithCardFingerprintMatched' exact component = {WithCardFingerprintMatched}/>
          <Route path = '/WithCardEnterConfirmationCode' exact component = {WithCardEnterConfirmationCode}/>
          <Route path = '/CodeConfirmed' exact component = {CodeConfirmed}/>
          <Route path = '/AccountBalance' exact component = {AccountBalance}/>
          <Route path = '/YesOrNo' exact component = {YesOrNo}/>
          <Route path = '/Transfer' exact component = {Transfer}/>
          <Route path = '/EnterTransferAmount' exact component = {EnterTransferAmount}/>
          <Route path = '/ConfirmTransfer' exact component = {ConfirmTransfer}/>
          <Route path = '/WelcomePage' exact component = {WelcomePage}/>
          <Route path = '/InsertMoney' exact component = {InsertMoney}/>
          <Route path = '/ProceedConversion' exact component = {ProceedConversion}/>
          <Route path = '/ProcessingTransaction' exact component = {ProcessingTransaction}/>
          <Route path = '/ReceiptRequest' exact component = {ReceiptRequest}/>
          <Route path = '/TransactionSuccessful' exact component = {TransactionSuccessful}/>
          <Route path = '/TakeReceipt' exact component = {TakeReceipt}/>
          <Route path = '/NoProcessingTransaction' exact component = {NoProcessingTransaction}/>
          <Route path = '/NoTransactionSuccessful' exact component = {NoTransactionSuccessful}/>
        </Switch>
      </Router>
    </>
  )
}

export default App;
