import AddTimer from "./components/AddTimer.tsx";
import Header from "./components/Header.tsx";
import Timers from "./components/Timers.tsx";
import Button from "./components/UI/Button.tsx";
import Form from "./components/UI/Form.tsx";
import Input from "./components/UI/Input.tsx";

function App() {
  function handleSave(data: unknown) {
    const extractedData = data as {name: string; email: string};
    console.log(extractedData);
  }
  return (
    <>
      <Header />
      <main>
        <AddTimer />
        <Timers />
        <Button el="a">Click Me</Button>
        <Form onSave={handleSave}>
          <Input type="text" name="name" label="Name" id="name" />
          <Input type="text" name="email" label="Email" id="name" />
          <Button el="button" type="submit">
            Submit
          </Button>
        </Form>
      </main>
    </>
  );
}

export default App;
