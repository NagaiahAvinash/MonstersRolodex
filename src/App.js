import {useState, useEffect} from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component.jsx';

 const App = ()=>{
  const [monsters, setMonsters]= useState([]);
  const [searchField, setSearchField] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then((users)=>setMonsters(users));
  },[]);
    
  

  const onChangeHolder= (event)=>{
    const onSearchChange= event.target.value.toLowerCase();
    setSearchField(onSearchChange);
  }

  useEffect(()=>{
    const newfilteredMonsters= monsters.filter((monster)=>{
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    });
    setFilteredMonsters(newfilteredMonsters);
  },[monsters,searchField]);
    
    
    
    return(
      <div>
        <h1 className='app-title'>Monster Rolodex</h1>
        <SearchBox onChangeHolder={onChangeHolder}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  
}
export default App