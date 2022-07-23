import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  storyblokInit,
  apiPlugin,
  StoryblokComponent,
  storyblokEditable,
} from '@storyblok/react';
import App from './App';
import './index.css';

function Page({ blok }) {
  const now = new Date();
  const summerMonthsNorth = [4, 5, 6, 7];
  // const summerMonthsSouth = [11, 0, 1, 2];
  const isSummer = summerMonthsNorth.includes(now.getMonth());

  return blok.body.map((b) => {
    if (b.hasOwnProperty('summer') && b.summer !== isSummer) {
      return null;
    }

    return <StoryblokComponent blok={b} />;
  });
}

function Teaser({ blok }) {
  return <h1 {...storyblokEditable(blok)}>{blok.headline}</h1>;
}

function Grid({ blok }) {
  return (
    <div {...storyblokEditable(blok)}>
      {blok.columns.map((b) => (
        <StoryblokComponent blok={b} />
      ))}
    </div>
  );
}

function Feature({ blok }) {
  return <h2 {...storyblokEditable(blok)}>{blok.name}</h2>;
}

storyblokInit({
  accessToken: 'hqvrfb0EISzx9WSUfVIt4wtt',
  use: [apiPlugin],
  components: {
    page: Page,
    teaser: Teaser,
    grid: Grid,
    feature: Feature,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
