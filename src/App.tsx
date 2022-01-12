import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea/index';

const App = () => {
  const[list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());


  useEffect(() => {
    setFilteredList( filterListByMonth(list, currentMonth) );
  }, [list, currentMonth]);


  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }



  return(
    <C.Container>
      <C.Header>
        <C.HTitle>Expense Tracker</C.HTitle>
      </C.Header>
      <C.Body>
        

        {/*Area de inserir Informacoes*/}

        <TableArea list={filteredList}/>


      </C.Body>

    </C.Container>
  );
}

export default App;