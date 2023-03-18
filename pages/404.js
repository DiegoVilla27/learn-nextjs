import Link from 'next/link';
import React from 'react';
import {routes} from '../routes';

function NotFoundScreen() {
  return (
    <>
      <div>NotFoundScreen</div>
      <Link href={routes.home.to}>Go to Home</Link>
    </>
  )
}

export default NotFoundScreen;