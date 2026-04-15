import Navbar from "./components/Navbar";
import PropertyCard from "./components/PropertyCard";
import listings from "./data/listings";

function App() {
  return (
    <>
      <Navbar />

      <h1 className="text-center text-4xl text-red-500 mt-6">
        Airbnb Clone 🔥
      </h1>

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {listings.map((item) => (
          <PropertyCard key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}

export default App;