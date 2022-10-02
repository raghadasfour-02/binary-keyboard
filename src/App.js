import Spline from '@splinetool/react-spline';

function App() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
      <div className="relative" id="home">
        <Spline scene="https://prod.spline.design/qiwG55ZtideqQuZo/scene.splinecode" />
      </div>
    </div>
  );
}

export default App;