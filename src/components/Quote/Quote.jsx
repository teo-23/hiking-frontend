// import React from 'react';
import './Quote.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

// export default function CardPhotoRight() {
//     return (
//         <div>
//         <div className="row align-items-center">
//             <div className="col-12 content container">
//                 <p className="quote">“I took the one less traveled by, <br></br>
//                 And that has made all the difference.” <br></br>
//                 <span className="span-quote"> – Robert Frost</span></p>
//             </div>
//         </div>               
//         </div>
//     )
// }

// import React, { Component } from 'react'

import React, { Component } from 'react'
import axios from 'axios';

export default class Quote extends Component {

    constructor(props) {
        super(props)
        this.state = {
           quote: '',
           author: ''
        }
     }
    
     componentDidMount() {
        this.getQuote()
     }
    
     getQuote() {
        let url = 'https://gist.githubusercontent.com/teo-23/8e6fe785160ba913c2873156277e8107/raw/82f65e0eb3c4efc17ebe41581713df4befeb6832/Quote-hiking'
    
        axios.get(url)
           .then(res => {
              let data = res.data.quotes
              let quoteNum = Math.floor(Math.random() * data.length)
              let randomQuote = data[quoteNum]
              // let randomQuote = data[Math.floor(Math.random() * data.length)]
    
              this.setState({
                 quote: randomQuote['quote'],
                 author: randomQuote['author']
              })
           })
     }
    
     getNewQuote = () => {
        this.getQuote()
     }

    render() {
        const { quote, author } = this.state
        return (
           <div id='wrapper'>
    
              <div id='quote-box'>
                 <QuoteBox quote={quote} author={author} />
              </div>
           </div>
        )
     }
    }
    
    const QuoteBox = ({ quote, author }) => {
     return (
        <React.Fragment>
           <div id='text'><p>{quote}</p></div>
           <div id='author'><h5>{author}</h5></div>
        </React.Fragment>
     )
}
