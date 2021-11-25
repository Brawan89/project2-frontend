import React , {useState , useEffect} from 'react';
import "./style.css";
import axios from 'axios';

const BASE_URL = "http://localhost:5000";

 const Quiz = () => {
	const [quizes , setQuizes] = useState([]);

	useEffect(() => {
		getAllUquizes();
	}, []);

  const getAllUquizes = async () =>{
	  const quize = await axios.get(`${BASE_URL}/quiz/questions`)
	  console.log(quize.data);
	  setQuizes(quize.data);
  };

  return(
	  <>
	  <div>
		  <ul>
		  
		  {quizes.map((quiz , i)=>{
			  return(
			  <div key={quiz._id} >
				  <li>{quiz.description}</li>
				  {/* <li>{quiz.alternative}</li> */}
			  </div>
			  )
		  })}
		  </ul>
	  </div>
	  </>
  )

}


export default Quiz;