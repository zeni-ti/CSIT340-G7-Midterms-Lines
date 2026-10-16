
function StatCard({ label, value }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
      <div>
        <h3 className="text-lg font-semibold">{label}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}
export default StatCard;
