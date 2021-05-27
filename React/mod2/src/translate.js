import React, {useState} from 'react'
import Dropdown from './Dropdown'
import Convert from './translateOutput'
import quote2 from './pics/quote2.jpg'

const languages=[{
    label: 'English',
    value: 'en'
},
{
    label: 'Frisian',
    value: 'fy'
}]

const Translate = () =>{
    const [language, setLanguage] = useState(languages[0])
    const [text, setText] = useState('')

    return(

        <div className='translate-grid'>
            <div className='form myForm'>
                <div className='field' >
                    <label>Enter Text</label>
                    <input className='output' value={text} onChange={e => setText(e.target.value)} />
                </div>
            </div>
            <div className='form myForm'>
                <div className='field'>
                    <label>Output:</label>
                    <Convert text={text} language={language}/>
                </div>
            </div>
            <Dropdown
                label='Select a language'
                options={languages}
                selected={language}
                onSelectedChange={setLanguage}
            />
            <hr />
            <img className='quote2' src={quote2} alt="quote2" />
        </div>
    )
}

export default Translate


// export default function Translate() {
    
//     componenentDidMount=()=>{
//         fetch("http://dataservice.accuweather.com/locations/v1/topcities/50?apikey=7j8XVSzvALETebVaGTkz2zBHSRIQxAhL"", {
//             "method": "POST",
//             "headers": {
//                 "content-type": "application/x-www-form-urlencoded",
//                 "accept-encoding": "application/gzip",
//                 "x-rapidapi-key": "AIzaSyAcXAs-9ztsiD4jtDrt-phGzcwyfoLhEUY",
//                 "x-rapidapi-host": "google-translate1.p.rapidapi.com"
//             },
//             "body": {
//                 "q": "Hello, world!",
//                 "target": "es",
//                 "source": "en"
//             }
//         })
//         .then(response => {
//             console.log(response);
//         })
//         .catch(err => {
//             console.error(err);
//         });
//     }
//     return (
//         <div>
//             <h3>Translate</h3>
//             <button onClick={componenentDidMount}></button>
//         </div>
//     )
// }

// AIzaSyAcXAs-9ztsiD4jtDrt-phGzcwyfoLhEUY

// const translateapi = {
// 	key: 'AIzaSyAcXAs-9ztsiD4jtDrt-phGzcwyfoLhEUY',
// 	base: 'http://localhost:9000/translate'
// }

// function Translate() {
// 	const [query, setQuery] = useState('');
  
// 	const search = e => {
// 	  if (e.key === "Enter") {
// 		fetch(`${translateapi.base}?q=${query}&APPID=${api.key}`)
// 		  .then(res => res.json())
// 		  .then(result => {
// 			setQuery('');
// 			console.log(result);
// 		  });
// 	  }
// 	}

// 	return (
// 	  <div>
// 		<main>
// 		  <div className="search-box">
// 			<input 
// 			  type="text"
// 			  className="search-bar"
// 			  placeholder="Search..."
// 			  onChange={e => setQuery(e.target.value)}
// 			  value={query}
// 			  onKeyPress={search}
// 			/>
// 		  </div>
// 		  {(typeof weather.main != "undefined") ? (
// 		  <div>
// 			<div className="location-box">
// 			  <div className="english-translation">{weather.name}, {weather.sys.country}</div>
// 			</div>
// 			<div className="weather-box">
// 			  <div className="frysk-translation">
// 				{}
// 			  </div>
//             </div>
// 		    </div>
// 		  ) : ('')}
// 		</main>
// 	  </div>
// 	);
//   }

//   export default Translate



// class App extends Component {
//     constructor(props){
//       super(props);
  
//       this.state = {
//         value: '',
//         translated: '...'
//       }
//       this.translate=this.translate.bind(this);
//     }
  
//     translate(){
//       axios.post('http://localhost:9000/translate',{q:this.state.value})
//       .then(data => {
//         this.setState({translated: data.data.data.translations[0].translatedText})
//         console.log(data.data.data.translations[0].translatedText)
//       }).catch(err => {
//         console.log('error')
//       })
//     }
  
  
  
//     render() {
//       return (
//         <div>
//           <input 
//             value={this.state.value}
//             onChange={(e)=>this.setState({value: e.target.value})}
//             type="text"/>
//           <button onClick={this.translate}>Submit</button>
//           <h1>{this.state.translated}</h1>
//         </div>
  
//       );
//     }
//   }
