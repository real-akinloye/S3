import Navigation from '../components/Navigation';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <Navigation />
      <h1 className="text-4xl font-bold">Home Page</h1>
    </div>
  );
}
