import { View, Text, FlatList } from 'react-native'
import Greet from '../components/Greet'
import React from 'react'
import ComponentA from '../components/ComponentA'
import NameComponent from '../components/NameComponent'
import TextComponent from '../components/TextComponent'
import ButtonComponent from '../components/ButtonComponent'
import ImagesComponents from '../components/ImagesComponents'
import DynamicContent from '../components/DynamicContent'
import InlineStyle from '../componentsTwo/InlineStyle'
import InternalStyle from '../componentsTwo/InternalStyle'
import ExternalStyle from '../componentsTwo/ExternalStyle'
import LIstData from '../componentsThree/LIstData'
import ArrayOfObject from '../componentsThree/ArrayOfObject'
import ParentComponent from '../componentsProp/ParentComponent'
import Product from '../componentsProp/Product'
import Condi from '../componentConditional/conditionalStatement'
import ANDOperator from '../componentConditional/ANDOperator'
import TernaryOperator from '../componentConditional/TernaryOperator'
const Index = () => {
      
    const products=[
      {
        productName:'Laptop',
        price:1000,
        productDescription:'This is a laptop'
      },
      {
        productName:'Mobile',
        price:500,
        productDescription:'This is a mobile'
      },
      {
        productName:'Tablet',
        price:300,
        productDescription:'This is a tablet'
      }
    ];

  return (
   <View>

    {/*
    <ComponentA />
    <Greet />
  <NameComponent />
    

    <TextComponent />
    <ButtonComponent />
    
    <ImagesComponents />
    
    <DynamicContent />

    <InlineStyle />
    <InternalStyle />

     
    <ExternalStyle />
     
     <LIstData />


    
           //objectList
     <ArrayOfObject />

         //props
   <ParentComponent />

    
          //props prodcut list
      <FlatList 
        data={products} 
        renderItem={({item})=>(
          <Product
            name={item.productName}
            price={item.price}
            description={item.productDescription}
          />

        )}
        />
 
        //Conditional Statemnt
     <Condi />

      <ANDOperator/>
      */}

      <TernaryOperator/>
      
  </View>
  );
}


 /*  Component 

function Component(){
  return <Text>Component</Text>;
}

export default Component
*/



export default Index