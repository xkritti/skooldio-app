import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';



function App() {
  const [Data, setData] = useState([]);

  const fetchData = async () => {
    const res = await axios.get("https://tcas-assets.skooldio.com/tmp/mock_tcaster_api.json")
    setData(res.data)
    console.log(res.data)

  };
  useEffect(() => {
    fetchData()
  }, []);
  return (
    <div className="App">
      {Data.map((item, index) => {
        return (
          <Card key={index} Data={item} />
        )
      })}
      <Card />
    </div>
  );
}

export default App;
