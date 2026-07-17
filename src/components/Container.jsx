export default function Container({ children }) {
  return (
    <div 
      className="container" 
      style={{ 
        maxWidth: '1200px', 
        margin: '0 auto', 
        padding: '0 20px' 
      }}
    >
      {children}
    </div>
  );
}