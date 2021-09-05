import './App.css';
import kelvin from './assets/kelvin-costa.png'
import charles from './assets/charles-santos.png'
import anna from './assets/anna-bia.png'
import mario from './assets/mario-hisashi.png'

function App() {
  const profiles = [{
    name: "Kelvin Costa",
    picture: kelvin,
    username: "@costa",
    followers: 140,
    following: 207
  },
  {
    name: "Charles Santos",
    picture: charles,
    username: "@charles.santos",
    followers: 302,
    following: 419
  },
  {
    name: "Anna Bia",
    picture: anna,
    username: "@anab",
    followers: 842,
    following: 150
  },
  {
    name: "Mario Hisashi",
    picture: mario,
    username: "@hisashi",
    followers: 28,
    following: 17
  }
  ]
  return (
    <div className="App">
      {profiles.map(unitprofile => 
      <Profile picture={unitprofile.picture}>
        {unitprofile.name}
        {unitprofile.followers}
        {unitprofile.username}
        {unitprofile.following}
        </Profile>)}

      {/* <Profile picture={kelvin}>Kelvin Costa {140} @costa {207}</Profile>
      <Profile picture={charles}>Charles Santos {302} @charles.santos {419}</Profile>
      <Profile picture={anna}>Anna Bia {842} @anab {150}</Profile>
      <Profile picture={mario}>Mario Hisashi {28} @hisashi {17}</Profile> */}
    </div>
  );
}

function Profile({picture, children:[ name, followers, username, following ] }) {
  return (
    <div className="profile">
      <img className="profilePicture" alt={`${name}`} src={picture}></img>
      <h1>{name}</h1>
      <h2>{username}</h2>
      <p>
        {followers} seguidores<br/>
        {following} seguindo
      </p>
    </div>
  )
}

export default App;
