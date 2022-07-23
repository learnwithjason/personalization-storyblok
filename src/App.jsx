import { useStoryblok, StoryblokComponent } from '@storyblok/react';
import './App.css';

function App() {
  const story = useStoryblok('home', {
    version: 'draft',
  });

  return (
    <div className="App">
      <StoryblokComponent blok={story.content} />
    </div>
  );
}

export default App;
