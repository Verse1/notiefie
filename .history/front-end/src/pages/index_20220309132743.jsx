import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import ClassCard from '@/components/ClassCard';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (

    <div className="grid h-screen place-items-center">
      <Navigation/>

      <ClassCard
        title="Introduction to Computer Science"
        enrolled="2"
        description="This is a description WOAH"
      />
    </div>
  );
}
