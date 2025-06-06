// Code for 2-react-ts-advanced-components

import { Button } from "./2-react-ts-advanced-components/components/button";

function App() {
  return (
    <main>
      <p>
        <Button el="button">A Button</Button>
      </p>

      <p>
        <Button el="anchor" href="https://google.com">
          A Link
        </Button>
      </p>
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
