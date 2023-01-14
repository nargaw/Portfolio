import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { StrictMode } from 'react'
import App from './Experience.js'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <StrictMode>
        <Canvas
            shadows
            camera={ {
                fov: 75,
                near: 0.01,
                far: 200,
                position: [ 0, 0, 3 ]
            }}
        >
            <App />
        </Canvas>
    </StrictMode>
    
)