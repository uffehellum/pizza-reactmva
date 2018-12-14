import React from 'react'

export default class Suggestions2 extends React.Component{
  constructor(props)
  {
    super(props)
    this.state = {
      selectedSearch: ''
    }
  }
  hnadleSelectedValue = (e) => {
    console.log("the suggestion result", document.getElementsByClassName);
  }
  render(){
    if(this.props.suggestions.length>1){
      const options = this.props.suggestions.map((r, i) => (
        //console.log("entered")
        //console("the r" , r)
        <div key={i} className={i} >
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
// const Suggestions = (props) => {

//   // selectedValue = () => {
//   //   alert("hello")
//   // }
//   //console.log("the length", props.results);
//   if(props.suggestions.length>1){
//   const options = props.suggestions.map((r, i) => (
//     //console.log("entered")
//     //console("the r" , r)
//     <div key={i} className="selectedValue" >
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

// // document.getElementsByClassName('selectedValue')
// //         .addEventListener('click', function (event) {
// //             console.log("enter...................")
// //         });


// export default Suggestions