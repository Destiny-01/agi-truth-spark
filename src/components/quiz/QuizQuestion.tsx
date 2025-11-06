import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Question } from "@/data/quizData";
import { RobotCharacter } from "@/components/RobotCharacter";
import { cn } from "@/lib/utils";

interface QuizQuestionProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswer: (isCorrect: boolean) => void;
}

export const QuizQuestion = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswer,
}: QuizQuestionProps) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSubmit = () => {
    if (selectedOption === null) return;

    const correct = selectedOption === question.correctAnswer;
    setIsCorrect(correct);
    setShowFeedback(true);

    setTimeout(() => {
      onAnswer(correct);
      setSelectedOption(null);
      setShowFeedback(false);
    }, 3000);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>Question {questionNumber} of {totalQuestions}</span>
          <span>{Math.round((questionNumber / totalQuestions) * 100)}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-primary transition-all duration-500"
            style={{ width: `${(questionNumber / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Robot Character */}
      <RobotCharacter
        mood={showFeedback ? (isCorrect ? "happy" : "sad") : "thinking"}
        className="mb-8"
      />

      {/* Question Card */}
      <Card className="p-8 bg-gradient-card border-primary/20 card-glow mb-6">
        <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
          {question.question}
        </h2>

        <div className="space-y-3">
          {question.options.map((option, index) => (
            <button
              key={index}
              onClick={() => !showFeedback && setSelectedOption(index)}
              disabled={showFeedback}
              className={cn(
                "w-full p-4 rounded-lg text-left transition-all duration-300 quiz-option",
                "border-2 font-medium",
                selectedOption === index && !showFeedback && "border-primary bg-primary/10 shadow-glow-primary",
                selectedOption !== index && !showFeedback && "border-border hover:border-primary/50",
                showFeedback && index === question.correctAnswer && "border-accent bg-gradient-correct text-accent-foreground shadow-glow-accent",
                showFeedback && selectedOption === index && index !== question.correctAnswer && "border-destructive bg-gradient-wrong text-destructive-foreground animate-shake"
              )}
            >
              <span className="text-muted-foreground mr-3">{String.fromCharCode(65 + index)}.</span>
              {option}
            </button>
          ))}
        </div>
      </Card>

      {/* Feedback Card */}
      {showFeedback && (
        <Card className={cn(
          "p-6 animate-scale-in",
          isCorrect ? "bg-gradient-correct border-accent" : "bg-gradient-wrong border-destructive"
        )}>
          <h3 className={cn(
            "text-xl font-bold mb-2",
            isCorrect ? "text-accent-foreground" : "text-destructive-foreground"
          )}>
            {isCorrect ? "🎉 Correct!" : "❌ Not Quite!"}
          </h3>
          <p className={cn(
            "mb-3",
            isCorrect ? "text-accent-foreground/90" : "text-destructive-foreground/90"
          )}>
            {isCorrect ? question.correctFeedback : question.wrongFeedback}
          </p>
          <p className={cn(
            "text-sm italic",
            isCorrect ? "text-accent-foreground/80" : "text-destructive-foreground/80"
          )}>
            💡 {question.funFact}
          </p>
        </Card>
      )}

      {/* Submit Button */}
      {!showFeedback && (
        <div className="flex justify-center mt-6">
          <Button
            onClick={handleSubmit}
            disabled={selectedOption === null}
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-glow-secondary min-w-[200px]"
          >
            Submit Answer
          </Button>
        </div>
      )}

      {/* Confetti Effect */}
      {showFeedback && isCorrect && (
        <div className="fixed inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-confetti"
              style={{
                left: `${Math.random() * 100}%`,
                top: "0",
                width: "10px",
                height: "10px",
                background: `hsl(${Math.random() * 360}, 100%, 60%)`,
                animationDelay: `${Math.random() * 0.5}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
