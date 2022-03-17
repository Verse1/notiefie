import React from 'react';

import ClassCard from '@/components/ClassCard';

export default function Home() {
  return (
    <div className="grid place-items-center">
      <ClassCard
        title="Intro to CO"
        description="CS is just the description"
        enrolled="600"
        order="last"
      />
    </div>
  );
}
