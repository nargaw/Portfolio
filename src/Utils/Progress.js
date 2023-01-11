import { useProgress, Html, useGLTF, Loader, Environment } from '@react-three/drei'
import * as React from 'react'

export default function Progress()
{
    const CustomLoader = () => {
        const { progress } = useProgress()
        console.log(progress)
        return <>
            <Html center>
                <span style={{ color: 'Black' }}>{Math.round(progress)} % loaded</span>
            </Html>
        </>
    }

    const Shoe = () => {
        const { nodes } = useGLTF(
          'https://threejs.org/examples/models/gltf/MaterialsVariantsShoe/glTF/MaterialsVariantsShoe.gltf'
        )
      
        return <primitive object={nodes['Shoe']} />
      }

    return <>
        
        <React.Suspense
            fallback={
                <CustomLoader />
            }
        >
            <Environment preset='studio' />
            <Shoe />
        </React.Suspense>
    </>
}