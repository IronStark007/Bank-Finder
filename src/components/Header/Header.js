import './Header.css';
import { useEffect, useState } from 'react';
import data from '../../data.json';

const Header = ({ bankData, setFilterData, setBankData }) => {
  const [bank, setBank] = useState("select-bank");
  const [selectData, setSelectData] = useState([]);

  useEffect(() => {
    if (bankData.length) {
      let data = bankData.map(ele => {
        return ele.Bank;
      })
      setSelectData(data);
    }
  }, [bankData])

  const handleChange = e => {
    e.preventDefault();
    setBank(e.target.value);
    let data = bankData.filter(ele => {
      return ele.Bank === e.target.value;
    })
    setFilterData(data);
  }

  const titleHandler = e => {
    e.preventDefault();
    setBankData(data);
    setFilterData(data);
    setBank("select-bank");
  }

  return (
    <div className="header">
      <h1 className='title' onClick={titleHandler} >Bank Finder</h1>
      <form className='search'>
        <select value={bank} onChange={handleChange}>
          <option value="select-bank" disabled>Select Bank</option>
          {selectData.map((ele, idx) => {
            return (<option key={idx} value={ele}>{ele}</option>)
          })}
        </select>
      </form>
    </div>
  );
}

export default Header;