import React from 'react'


export default class Suggestions2 extends React.Component{
  render(){
    if(props.suggestions.length>1){
      const options = props.suggestions.map((r, i) => (
        //console.log("entered")
        //console("the r" , r)
        <div key={i} className="selectedValue">
          {r.title_en_us}
        </div>
      ))
      return options;
      }
      else
      {
      return null;
      }
  
  }
  }

// const Suggestions2 = (props) => {

//   // const selectedValue = (e) => {
//   //   const selectedVal = e.target.value
//   //   console.log("entered the suggestion selected value: ", selectedVal);
//   // }

//   //console.log("the length", props.results);
//   if(props.suggestions.length>1){
//   const options = props.suggestions.map((r, i) => (
//     //console.log("entered")
//     //console("the r" , r)
//     <div key={i} className="selectedValue">
//       {r.title_en_us}
//     </div>
//   ))
//   return options;
//   }
//   else
//   {
//   return null;
//   }
// }

// document.getElementsByClassName('selectedValue')
//         .addEventListener('click', function (event) {
//             console.log("enter...................")
//         });


// export default Suggestions2