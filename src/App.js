import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import StockList from './components/StockList/StockList';
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
      <StockList filterData={filterData} loading={loading} />
      <Footer />
    </>
  );
}

export default App;
