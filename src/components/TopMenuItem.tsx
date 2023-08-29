import React from 'react';
import Link from 'next/link'

export default function TopMenuItem({ title, pageRef }:{ title:string, pageRef:string}) {
  return (
    <Link href={pageRef} className="hover:text-gray-300">{title}</Link>
  );
}
