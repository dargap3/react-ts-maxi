import { type FC, type PropsWithChildren, type ReactNode } from "react";

// First aproach to type a component with children
/* interface CourseGoalProps {
  title: string;
  children: ReactNode;
} */

// Second approach to type a component with children
type CourseGoalProps = PropsWithChildren<{
  id: number;
  title: string;
  onDelete: (id: number) => void;
}>;

// First aproach to type a Components using function declaration
export default function CourseGoal({
  id,
  title,
  onDelete,
  children,
}: CourseGoalProps) {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}

// Second aproach to type a Components using arrow function
/* const CourseGoal: FC<CourseGoalProps> = ({ title, children }) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
};

export default CourseGoal; */
