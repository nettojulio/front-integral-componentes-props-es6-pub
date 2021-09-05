import './App.css';
import alert from './assets/alert.svg'
import cookie from './assets/cookie.svg'
import close from './assets/close.svg'

function Card({picture, type, children, buttonText}) {
  return (
    <div className="card">
      <img src={close} alt="close" className="close" />
      <img src={picture} alt={type} className="icon"/>
      <p>
        {children}
      </p>
      <button className={type}>{buttonText}</button>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Card type="cookie" picture={cookie} buttonText="Tudo bem!">
        Nós utilizamos cookies para melhorar nossa UX, analytics e marketing.
      </Card>
      <Card type="alert" picture={alert} buttonText="Extender login">
      Você será deslogado <br/> imediatamente!
      </Card>
    </div>
  );
}

export default App;
