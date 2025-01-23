'use client'

import { useState } from 'react'

export function Counter({ children }) {
  const [count, setCount] = useState(0)
  return (
    <div className="flex items-center gap-2">
      <button 
        onClick={() => setCount(prev => prev + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Increment
      </button>
      <span>
        {children} {count}
      </span>
    </div>
  )
}