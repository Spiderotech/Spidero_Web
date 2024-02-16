import {Html,useProgress} from '@react-three/drei'

import React from 'react';

export const Canvasloader = () => {
  const progress=useProgress()
  return (
   <Html>
    <span className='canvas-load'></span>
   
   </Html>
  )
};
