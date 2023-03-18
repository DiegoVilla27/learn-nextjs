import Link from 'next/link';
import React from 'react'

function ErrorServerScreen() {
  return (
    <>
      <div>ErrorServerScreen</div>
      <Link href={routes.home.to}>Go to Home</Link>
    </>
  )
}

export default ErrorServerScreen;