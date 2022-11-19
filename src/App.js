import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BankList from './components/BankList/BankList';
import { useEffect, useState } from 'react';
import data from './data.json';


const App = () => {
  const [bankData, setBankData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setBankData(data);
    setFilterData(data);
    setLoading(false);
  }, [])

  return (
    <>
      <Header bankData={bankData} setFilterData={setFilterData} setBankData={setBankData} />
      <BankList filterData={filterData} loading={loading} />
      <Footer />
    </>
  );
}

export default App;
