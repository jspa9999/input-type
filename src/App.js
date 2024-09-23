import logo from './logo.svg';
import './App.css';

function App() {

  let abhiResult=()=>{
    return 34;
  }
  console.log(abhiResult());

  let sreeResult=()=>{
    return 56;
  }
  let total = sreeResult();
  console.log(total);

   let sujiResult= ()=>{

     let totalMarks=89;
     return totalMarks;
   }
    console.log(sujiResult());

    let rajiResult=(engMarks,telMarks,hinMarks,mathMarks,sciMarks,socMarks)=>{
      
      let totalMarks= engMarks+telMarks+hinMarks+mathMarks+sciMarks+socMarks;

      let perc=totalMarks/600*100;
       return [totalMarks,perc];
       
    }
      let result=rajiResult(89,78,67,89,56,45);
      console.log(result);
     

      let akiResult=(engMarks,telMarks,hinMarks,mathMarks,sciMarks,socMarks)=>{
      
        let totalMarks= engMarks+telMarks+hinMarks+mathMarks+sciMarks+socMarks;

        let passMarks=35;

        if(engMarks>=passMarks&&
           telMarks>=passMarks&&
           hinMarks>=passMarks&&
           mathMarks>=passMarks&&
           sciMarks>=passMarks&&
           socMarks>=passMarks){


        }else{

        }
        let perc=totalMarks/600*100;

        let summary ={
          total:totalMarks,
          perc:perc,
        }
         return summary;
         
      }
        let marks=akiResult(89,78,67,89,56,45);
        console.log(marks);
  
        let jayaResult=(engMarks,telMarks,hinMarks,mathMarks,sciMarks,socMarks)=>{
      
          let totalMarks= engMarks+telMarks+hinMarks+mathMarks+sciMarks+socMarks;
  
          let passMarks=35;
          let result;
  
          if(engMarks>=passMarks&&
             telMarks>=passMarks&&
             hinMarks>=passMarks&&
             mathMarks>=passMarks&&
             sciMarks>=passMarks&&
             socMarks>=passMarks){
  
              result ="pass";
          }else{
                  result ="fail";
          }
          let perc=totalMarks/600*100;
  
          let summary ={
            total:totalMarks,
            perc:perc,
            result:result,
          }
           return summary;
           
        }
          let update=jayaResult(89,78,67,89,56,45);
          console.log(update);
    



  return (
   <div>
   
   </div>
  );
}

export default App;
