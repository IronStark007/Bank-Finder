import { useEffect, useState } from 'react';
import './StockList.css';


const StockList = ({ filterData, loading }) => {

  const [headerData, setHeaderData] = useState([]);

  useEffect(() => {
    if (filterData.length) {
      setHeaderData(Object.keys(filterData[0]));
    }
  }, [filterData]);

  return (
    <>
      {!loading && filterData.length ? <table className="bank-list">
        <thead>
          <tr>
            {headerData.map((data, idx) => {
              return (
                <td key={idx}>{data}</td>
              )
            })}
          </tr>
        </thead>
        <tbody>
          {filterData.map((ele, idx) => {
            return (
              <tr className="bank-card" key={idx}>
                <td>{ele.Bank ? ele.Bank : "Not Found"}</td>
                <td>{ele.IFSC ? ele.IFSC : "Not Found"}</td>
                <td>{ele.Branch ? ele.Branch : "Not Found"}</td>
                <td>{ele.BankId ? ele.BankId : "Not Found"}</td>
                <td>{ele.Address ? ele.Address : "Not Found"}</td>
              </tr>
            )
          })}
        </tbody>
      </table> : <div className="load"></div>}
    </>
  );
}

export default StockList;
