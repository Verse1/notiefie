import React from 'react';
import Head from 'next/head';
import ClassCard from '@/components/ClassCard';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <div className="grid h-screen place-items-center">
      <Head>
        <title>Notiefi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      

      <ClassCard
        title="Introduction to Computer Science"
        enrolled="2"
        description="This is a description WOAH"
      />
    </div>
  );
}
