export default function Button({ children, onClick }) {
  return (
    <button 
      onClick={onClick} 
      className="btn"
      style={{
        padding: '8px 16px',
        cursor: 'pointer',
        borderRadius: '4px',
        border: '1px solid #ccc',
        backgroundColor: '#343434'
      }}
    >
      {children}
    </button>
  );
}