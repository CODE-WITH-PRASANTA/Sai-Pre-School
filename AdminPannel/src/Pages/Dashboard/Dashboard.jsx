export default function Dashboard() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-6">
        Dashboard
      </h1>

      <div className="grid grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded shadow">
          Total Users: 120
        </div>

        <div className="bg-white p-6 rounded shadow">
          Orders: 340
        </div>

        <div className="bg-white p-6 rounded shadow">
          Revenue: ₹45,000
        </div>

      </div>
    </>
  );
}