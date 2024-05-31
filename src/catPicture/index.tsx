import React from 'react';
import Cat from './cat';

type cat = {
  id: string;
  url: string;
  width: number;
  height: number;
};

const Catpicture = ({ res }: { res: cat[] }) => {
  const render = res.map((cat: cat) => {
    return (
      <div className="flex">
        <Cat cat={cat} key={cat.id} />
      </div>
    );
  });

  return <div className="grid grid-cols-2 px-60 py-8 gap-y-8">{render}</div>;
};

export default Catpicture;
