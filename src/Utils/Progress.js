import { useProgress, Html, useGLTF } from '@react-three/drei'

export default function Progress()
{
    const { progress } = useProgress()
    console.log(progress)

    return <>
        <Html center>
            <span style={{ color: 'white' }}>{progress} % loaded</span>
        </Html>
    </>
}