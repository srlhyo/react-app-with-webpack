import Profiles from './Profiles'

const App = () => {
    function add(x) {
        return x + x
    }
    return (
        <>
            <h1>My great tite {add(2)}</h1>
            <p>See if you say nice things when you can</p>

            <Profiles />
        </>
    )  
}


export default App