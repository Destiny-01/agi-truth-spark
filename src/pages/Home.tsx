import { useNavigate } from "react-router-dom";
import { QuizCard } from "@/components/quiz/QuizCard";
import { RobotCharacter } from "@/components/RobotCharacter";
import { quizzes } from "@/data/quizData";
import { useEffect, useState } from "react";

interface QuizProgress {
  [quizId: number]: {
    completed: boolean;
    highScore: number;
  };
}

export default function Home() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState<QuizProgress>({});

  useEffect(() => {
    const savedProgress = localStorage.getItem("quizProgress");
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  const handleStartQuiz = (quizId: number) => {
    navigate(`/quiz/${quizId}`);
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <RobotCharacter mood="neutral" className="mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-glow-primary bg-gradient-primary bg-clip-text text-transparent">
            AGI Myth Buster Quiz
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Test your knowledge and learn fun facts about Artificial General Intelligence! 
            Separate science from science fiction in this playful quiz adventure.
          </p>
        </div>

        {/* Quiz Cards */}
        <div className="space-y-6">
          {quizzes.map((quiz) => (
            <QuizCard
              key={quiz.id}
              quiz={quiz}
              onStart={() => handleStartQuiz(quiz.id)}
              isCompleted={progress[quiz.id]?.completed || false}
              highScore={progress[quiz.id]?.highScore}
            />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-sm text-muted-foreground">
          <p className="mb-2">
            Built to educate about AGI in a fun, accessible way
          </p>
          <p>
            Learn more about AI safety from{" "}
            <a
              href="https://futureoflife.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-glow underline"
            >
              Future of Life Institute
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
