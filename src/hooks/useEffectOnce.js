import { useEffect, useRef } from 'react'

function useEffectOne (callback) {
  // mutable ref
  const isCalledRef = useRef(false)

  useEffect(() => {
    if (!isCalledRef.current) {
      isCalledRef.current = true
      callback()
    }
  }, [callback])
}

export default useEffectOne
