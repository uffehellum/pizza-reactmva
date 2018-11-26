import React from 'react'
import StorePane from '../../component/StorePane'
import samples from '../../data'

export default function stores() {
  return (
    <div>
      <StorePane stores={samples.stores}/>
    </div>
  )
}
