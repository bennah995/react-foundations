export default function Card({ title, children }) {
  return (
    <div 
      className="card" 
      style={{ 
        border: '1px solid #ddd', 
        borderRadius: '8px', 
        padding: '16px', 
        marginBottom: '16px' 
      }}
    >
      <h2 style={{ marginTop: 0 }}>{title}</h2>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
}