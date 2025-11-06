import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quiz } from "@/data/quizData";
import { cn } from "@/lib/utils";

interface QuizCardProps {
  quiz: Quiz;
  onStart: () => void;
  isCompleted: boolean;
  highScore?: number;
}

export const QuizCard = ({ quiz, onStart, isCompleted, highScore }: QuizCardProps) => {
  return (
    <Card className="p-6 bg-gradient-card border-primary/20 hover:border-primary/50 transition-all duration-300 card-glow group">
      <div className="flex items-start gap-4">
        <div className="text-5xl group-hover:animate-float">
          {quiz.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-bold text-foreground mb-2 text-glow-primary">
            {quiz.title}
          </h3>
          <p className="text-muted-foreground mb-4">
            {quiz.description}
          </p>
          <div className="flex items-center justify-between">
            <div className="text-sm text-muted-foreground">
              {quiz.questions.length} questions
              {isCompleted && highScore !== undefined && (
                <span className="ml-2 text-accent font-semibold">
                  Best: {highScore}/{quiz.questions.length}
                </span>
              )}
            </div>
            <Button
              onClick={onStart}
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow-primary"
            >
              {isCompleted ? "Try Again" : "Start Quiz"}
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};
