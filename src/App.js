
import { click } from '@testing-library/user-event/dist/click';
import './App.css';

function App() {

  
  updateQuote();


  return (
    <div className="App container">
      <div className='parent d-flex align-items-center flex-column'>
        <div id='quote-box' className='d-flex flex-column'>

          <div id='quote-text'>
            <i id="b" className='fa fa-quote-left fa-lg'></i>
            <span id="a" className='text'></span>
          </div>

          <p id='author'></p>

          <div className='d-flex justify-content-around pt-3'>
            <a id='tweet' className='btn btn-primary' href='https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjYz_afu_qBAxUF_7sIHbaLArYQFnoECAYQAQ&url=https%3A%2F%2Ftwitter.com%2F%3Flang%3Den&usg=AOvVaw1Sd3B-_cNZOLSmhw9z2lOm&opi=89978449' title='tweet this quote!'>
              <span className='fa-stack fa-xs'>
                <i className="fa fa-square-o fa-stack-2x"></i>
                <i className="fa fa-times fa-stack-2x"></i>
              </span>
            </a>

            <button id='new-quote' className='btn btn-primary' onClick={updateQuote}>new quote</button>
          </div>

        </div>
        

        <p id="saadiq" className='d-flex justify-content-center pt-3'>By saadiq</p>

      </div>
      

    </div>
  );
}

export default App;


async function updateQuote() {
  // Fetch a random quote from the Quotable API
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  if (response.ok) {
    // Update DOM elements
    document.getElementById("a").innerText = data.content;
    document.getElementById("author").innerText = "-" + data.author;

  }
}
