import {useState, useEffect} from 'react'
import AudioRecorder from './components/AudioRecorder/AudioRecorder';
import Form from './components/Form/Form';
import logo from './resources/logo.png'

const Body = ()=>{
    
    const [step, setStep] = useState(0)
    const [userData, setUserData] = useState ({gender: '', age: []})

    return(
        <>
            <img src={logo} width={'15%'}/>
            <div className="app-body">
                {step === 0 &&
                    <Form step={step} increment={setStep} dataSetter={setUserData}/>
                }
                {step === 1 &&
                    <AudioRecorder data={userData}/>
                }
            </div>
        </>
    )
}

export default Body;