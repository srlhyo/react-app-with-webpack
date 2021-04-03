import { useState } from 'react'

const personOne = {
    name: "Carl",
    age: 18,
}

const personTwo = {
    name: "Jonas",
    age: 24,
}


const Profiles = () => {
    const [profile, setProfile] = useState({})
    return (
        <div>
            <h3>Current Profile:</h3>
            <button onClick={() => setProfile(personOne)}>Jonas Profile</button>
            <button onClick={() => setProfile(personTwo)}>Carl Profile</button>

            <ul>
                {Object.keys(profile).map((info) => (
                    
                    <li key={info}>
                        {info}: {profile[info]}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Profiles