import { useProgress, Html, useGLTF, Loader, Environment, OrbitControls } from '@react-three/drei'
import * as React from 'react'
import { lerp } from 'three/src/math/MathUtils'

export default function Progress()
{

    const Counter = () => {
        
        return <>
        
        </>
    }

    const CustomLoader = () => {
        // console.log(useProgress())
        const { progress } = useProgress()
        const newProgress = Math.round(progress)
        // console.log('loading: ' + progress)

        const update = () => {
            const element = document.getElementById('progressBar')
            let width = 1
            if(element)
            {
                let identity = setInterval(count, 5)
                function count()
                {
                    if(newProgress == 100)
                    {
                        clearInterval(identity)

                    } else {
                        
                        width = lerp(width, newProgress, 0.1)
                        console.log(width)
                        // width = progress
                        element.style.width = width + '%'
                    }
                }
            } 
        }


        return <>
            {update()}
            <Html center>
                <div id='Progress_Status'>
                    <div id='progressBar'></div>
                </div>
                {/* <div >{Math.round(progress)}% loaded</div> */}
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
        <OrbitControls />
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