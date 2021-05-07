import './main.css';
import Button from './components/Button.js'

function App() {
  return (
    <div className="font-sans flex">
<section
      class="h-screen w-1/2 bg-purple-200 flex justify-center items-center">
      <h1 class="absolute top-10 text-5xl text-purple-900">Light Mode</h1>
      <div class="flex flex-col">
      <Button color="purple">light btn</Button>
      <Button color="pink">light btn</Button>
      <Button color="indigo">light btn</Button>
      <Button color="green">light btn</Button>
      <Button color="yellow">light btn</Button>
      </div>
      <div class="flex flex-col">
      <Button outline color="purple">light btn</Button>
      <Button outline color="pink">light btn</Button>
      <Button outline color="indigo">light btn</Button>
      <Button outline color="green">light btn</Button>
      <Button outline color="yellow">light btn</Button>
      </div>
    </section>
    <section
      class="h-screen w-1/2 bg-gray-900 flex justify-center items-center dark">
      <h1 class="absolute top-10 text-5xl text-purple-400">Dark Mode</h1>
      <div class="flex flex-col">
      <Button color="purple">light btn</Button>
      <Button color="pink">light btn</Button>
      <Button color="indigo">light btn</Button>
      <Button color="green">light btn</Button>
      <Button color="yellow">light btn</Button>
      </div>
      <div class="flex flex-col">
      <Button outline color="purple">light btn</Button>
      <Button outline color="pink">light btn</Button>
      <Button outline color="indigo">light btn</Button>
      <Button outline color="green">light btn</Button>
      <Button outline color="yellow">light btn</Button>
      </div>
    </section>
    </div>
  );
}

export default App;
