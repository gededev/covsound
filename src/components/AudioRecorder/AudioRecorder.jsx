import {Recorder, react} from 'react-voice-recorder'
import '../../index.css'
import React, {useState} from 'react'

const AudioRecorder = () =>{
    const [recorderState, setRecorderState] = useState({
        audioDetails: {
            url: null,
            blob: null,
            chunks: null,
            duration: {
              h: 0,
              m: 0,
              s: 0
            }
          }
    })
    
    const handleAudioStop = (data) => {
        console.log(data)
        setRecorderState({ audioDetails: data });
    }
    const handleAudioUpload = (file) => {
        console.log(file);
    }
    
    const handleReset = () => {
        const reset = {
          url: null,
          blob: null,
          chunks: null,
          duration: {
            h: 0,
            m: 0,
            s: 0
          }
        };
        setRecorderState({ audioDetails: reset });
    }
    
    return (
        <>
            <Recorder
            record={true}
            audioURL={recorderState.audioDetails.url}
            showUIAudio
            hideHeader
            handleAudioStop={(data) => handleAudioStop(data)}
            handleAudioUpload={(data) => handleAudioUpload(data)}
            handleReset={() => handleReset()}
            mimeTypeToUseWhenRecording={`audio/webm`} // For specific mimetype.
            />
        </>
    )
}

export default AudioRecorder