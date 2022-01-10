import { useState, useEffect } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { Category } from './types/Category';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter'

const App = () => {
  const[list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const[currentMonth, setCurrentMonth] = useState(getCurrentMonth());

  useEffect(() => {
    setFilteredList( filterListByMonth(list, currentMonth) );
  }, [list, currentMonth]);


  return(
    <C.Container>
      <C.Header>
        <C.HTitle>Expense Tracker</C.HTitle>
      </C.Header>
      <C.Body>
        
        {/*Area de Informacoes*/}

        {/*Area de inserir Informacoes*/}

        {/*Tabela de items*/}


      </C.Body>

    </C.Container>
  );
}

export default App;