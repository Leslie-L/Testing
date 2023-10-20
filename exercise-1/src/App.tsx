
import { useState } from 'react';
import './App.css'
interface ObjectList {
  id:string;
  text:string;
}

function App() {
  const [list,setList] = useState([]);
  const handleSubmit = (event:Event)=>{
    event.preventDefault();
    const actual: HTMLInputElement | null  = event.currentTarget.newFrase;
    if(actual){
      const newText:ObjectList ={
        id:crypto.randomUUID(),
        text: actual.value
      };
      setList((prev)=>{
        return [...prev,newText]
      })
      actual.value='';
    }

  }
  const deleteItem = (id:string)=>{
    const updatedList = list.filter(item => item.id !== id);
    setList(updatedList);
  }
  return (
    <main>
     <aside>
      <h1>Prueba Tecnica</h1>
      <form onSubmit={handleSubmit} aria-label='Añadir elementos a la lista'>
        <label>
          Ingrese una frase
          <input name='newFrase' type="text"  placeholder='Amo la musica ♥️' required/>
        </label>
        <button type='submit'>Agregar</button>
      </form>
     </aside>
     <aside>
      <h2>Tu Lista</h2>
      {
        list.length === 0 && <p>No Hay elementos en la lista</p>
      }
      <ul>
        {
          list.map(item=>{
            return <li key={item.id}>
                {item.text}
                <button onClick={()=>deleteItem(item.id)}>X</button>
            </li>
          })
        }
      </ul>
     </aside>
    </main>
  )
}

export default App
