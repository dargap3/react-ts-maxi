// Code for 2-react-ts-advanced-components

import { useRef } from "react";

import Form, { type FormHandle } from "./2-react-ts-advanced-components/components/form";
import { Input } from "./2-react-ts-advanced-components/components/input";
import { Button } from "./2-react-ts-advanced-components/components/button";
// import { Container } from "./2-react-ts-advanced-components/components/container";

function App() {
  const customFormRef = useRef<FormHandle>(null)

  function hadleSave(data: unknown) {
    // approach using type casting (as)
    /* const extractedData = data as { name: string; age: string }

    console.log(extractedData, "extracted data"); */

    // alternative approach:
    if (
      !data ||
      typeof data !== 'object' ||
      !('name' in data) ||
      !('age' in data)
    ) {
      return;
    }

    // at this point, TypeScript knows that data MUST BE an object 
    // with a name and age property
    // otherwise, the previous if statement would have returned
    console.log(data);


    customFormRef.current?.clear()
  }

  return (
    <main>
      <Form ref={customFormRef} onSave={hadleSave}>
        <Input type="text" label="Name" id="name" />
        <Input type="number" label="Age" id="age" />

        <p>
          <Button>Save</Button>
        </p>
      </Form>


      {/* <Container as={Button}>
        Click me
      </Container> */}

      {/* <p>
        <Button>A Button</Button>
      </p>

      <p>
        <Button href="https://google.com">
          A Link
        </Button>
      </p> */}
    </main>
  );
}

export default App;

// Code for 1-react-ts-essentials
/* import { useState } from "react";

import CourseGoalList from "./1-react-ts-essentials/components/course-goal-list.tsx";
import Header from "./1-react-ts-essentials/components/header.tsx";
import NewGoal from "./1-react-ts-essentials/components/new-goal.tsx";
import goalsImg from "./assets/goals.jpg";

export type CourseGoalType = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoalType[]>([]);

  function handleAddGoal(goal: string, summary: string) {
    setGoals((prevGoals) => {
      const newGoal: CourseGoalType = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoals, newGoal];
    });
  }

  function handleDeleteGoal(id: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: "A list of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>

      <NewGoal onAddGoal={handleAddGoal} />

      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal} />
    </main>
  );
} */
