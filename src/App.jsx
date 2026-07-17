import Button from "./components/Button.jsx";
import ProfileCard from "./components/ProfileCard.jsx";

import Container from "./components/Container.jsx";
import Card from "./components/Card.jsx";
import Counter from "./components/Counter.jsx";
import Toggle from "./components/Toggle.jsx";
function App() {
  const cards = [
    { id: 1, title: "Home", body: "Welcome home" },
    { id: 2, title: "About", body: "About us" },
    { id: 3, title: "Contact", body: "Get in touch" },
  ];

  return (
    <div>
      {/* DAY 1 */}
      {/* <ProfileCard name="Wanjiru" role="Developer" avatar="https://placehold.co/80" />
      <ProfileCard name="Brian" role="Designer" avatar="https://placehold.co/80" />
      <Button /> */}

      {/* DAY 2 */}
      {/* Task 1-3 */}
      {/* <Container>
        <Card title="Welcome">
          <p>This is the first card.</p>
          <Button onClick={() => alert("Card 1 clicked")}>Click me</Button>
        </Card>
        <Card title="About">
          <p>This is the second card.</p>
          <Button onClick={() => alert("Card 2 clicked")}>More info</Button>
        </Card>
      </Container> */}

      {/* Task 4 */}
      <Container>
        {cards.map((card) => (
          <Card key={card.id} title={card.title}>
            <p>{card.body}</p>
          </Card>
        ))}
      </Container>

      <Counter />
      <Toggle />
    </div>
  );
}

export default App;