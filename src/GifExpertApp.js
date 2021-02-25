import React, {useState} from 'react';
import AddCategory from './components/AddCategory';


const GifExpertApp = ()=>{
   // const categories = ['One punch', 'Samurai X', 'Dragon Ball', 'Simpsons', 'otro'];

   const [categories, setCategories] = useState(['One punch', 'Samurai X', 'Dragon Ball', 'Simpsons']);

//    const handleAdd = () =>{
//         //agrega un elemento al arreglo
//        //necesito usar el setCategories 
//        setCategories([...categories, 'HunterXHunter']);
   
//     }

//     const handleReset = () =>{
//         //agrega un elemento al arreglo
//        //necesito usar el setCategories 
//        setCategories((categories)=> categories= ['One punch', 'Samurai X', 'Dragon Ball', 'Simpsons']);
   
//     }
   
   
   return (
        <>
            <h2>GifexpertApp</h2>
            <AddCategory/>
            <hr/>
            
            <ol>{
                
                categories.map( category => {
                    return <li key={category}> {category} </li>;
                })
            }
            </ol>
        </>
    )
}

export default GifExpertApp;