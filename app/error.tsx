'use client'; // Error boundaries must be Client Components

import { useEffect } from 'react';
import { NextResponse } from 'next/server';

export default function Error({ error, reset }: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error.digest + ': ' + error.message);
  }, [error]);

  return ( // TODO: should look nicer
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
