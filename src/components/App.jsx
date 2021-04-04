import Profiles from './Profiles'
import ghIcon from '../images/github.svg'
import funpark from '../images/funpark.jpg'

const App = () => {
    function add(x) {
        return x + x
    }
    return (
        <>
            <h1>My great tite {add(2)}</h1>
            <p>See if you say nice things when you can</p>

            <section className="profile"></section>

            <img src={ghIcon} alt="github icon" width="250"/>
            <img src={funpark} alt="funpark" width="250"/>

            <Profiles />
        </>
    )  
}


export default App