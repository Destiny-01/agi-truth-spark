import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { QuizQuestion } from "@/components/quiz/QuizQuestion";
import { difficulties, funWhatIfs } from "@/data/quizData";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RobotCharacter } from "@/components/RobotCharacter";
import { ArrowLeft } from "lucide-react";
import { toast } from "sonner";

interface DifficultyProgress {
  [difficulty: string]: {
    [setId: number]: {
      completed: boolean;
      highScore: number;
    };
  };
}

export default function Quiz() {
  const { difficulty, setId } = useParams();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [randomWhatIf, setRandomWhatIf] = useState("");

  const difficultyLevel = difficulties.find(d => d.id === difficulty);
  const quizSet = difficultyLevel?.sets.find(s => s.id === Number(setId));

  useEffect(() => {
    if (!difficultyLevel || !quizSet) {
      navigate("/");
    }
    setRandomWhatIf(funWhatIfs[Math.floor(Math.random() * funWhatIfs.length)]);
  }, [difficultyLevel, quizSet, navigate]);

  if (!difficultyLevel || !quizSet) return null;

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
      setStreak(streak + 1);
      if (streak >= 2) {
        toast.success(`🔥 ${streak + 1} streak! You're on fire!`);
      }
    } else {
      setStreak(0);
    }

    if (currentQuestionIndex < quizSet.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Quiz complete
      setIsComplete(true);
      saveProgress();
    }
  };

  const saveProgress = () => {
    const progress: DifficultyProgress = JSON.parse(localStorage.getItem("quizProgress") || "{}");
    
    if (!progress[difficulty!]) {
      progress[difficulty!] = {};
    }
    
    const currentHigh = progress[difficulty!][Number(setId)]?.highScore || 0;
    
    progress[difficulty!][Number(setId)] = {
      completed: true,
      highScore: Math.max(score + 1, currentHigh), // +1 because we haven't incremented yet
    };
    
    localStorage.setItem("quizProgress", JSON.stringify(progress));
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setStreak(0);
    setIsComplete(false);
    setRandomWhatIf(funWhatIfs[Math.floor(Math.random() * funWhatIfs.length)]);
  };

  if (isComplete) {
    const percentage = Math.round((score / quizSet.questions.length) * 100);
    const isPerfect = score === quizSet.questions.length;

    return (
      <div className="min-h-screen py-12 px-4 flex items-center justify-center">
        <div className="max-w-2xl w-full">
          <RobotCharacter mood={isPerfect ? "happy" : "neutral"} className="mb-8" />
          
          <Card className="p-8 bg-gradient-card border-primary/20 card-glow text-center">
            <h1 className="text-4xl font-bold mb-4 text-glow-primary">
              {isPerfect ? "🎉 Perfect Score!" : "Quiz Complete!"}
            </h1>
            
            <div className="text-6xl font-bold text-primary mb-6">
              {score}/{quizSet.questions.length}
            </div>
            
            <div className="mb-4">
              <Badge className="bg-secondary/20 text-secondary-foreground border-secondary">
                {difficultyLevel.title} - {quizSet.title}
              </Badge>
            </div>
            
            <p className="text-xl text-muted-foreground mb-2">
              {percentage}% Myths Busted!
            </p>
            
            {isPerfect && (
              <div className="bg-gradient-correct text-accent-foreground p-4 rounded-lg mb-6 shadow-glow-accent">
                <p className="font-bold">🏆 Myth Buster Champion!</p>
                <p className="text-sm">You got every question right!</p>
              </div>
            )}
            
            <Card className="p-6 bg-muted/50 border-secondary/20 mb-6">
              <p className="text-lg font-semibold text-secondary mb-2">💭 What If Scenario</p>
              <p className="text-foreground italic">{randomWhatIf}</p>
            </Card>
            
            <div className="flex gap-4 justify-center">
              <Button
                onClick={handleRetry}
                size="lg"
                className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-glow-secondary"
              >
                Try Again
              </Button>
              <Button
                onClick={() => navigate(`/level/${difficulty}`)}
                size="lg"
                variant="outline"
                className="border-primary/50 hover:border-primary hover:bg-primary/10"
              >
                Back to Sets
              </Button>
              <Button
                onClick={() => navigate("/")}
                size="lg"
                variant="ghost"
                className="hover:bg-primary/10 text-primary"
              >
                Home
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-6xl mx-auto mb-8 px-4">
        <Button
          onClick={() => navigate(`/level/${difficulty}`)}
          variant="ghost"
          className="hover:bg-primary/10 text-primary"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Sets
        </Button>
      </div>

      <div className="mb-8 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Badge className="bg-secondary/20 text-secondary-foreground border-secondary">
            {difficultyLevel.title}
          </Badge>
          <span className="text-muted-foreground">•</span>
          <Badge className="bg-primary/20 text-primary-foreground border-primary">
            {quizSet.title}
          </Badge>
        </div>
        {streak > 0 && (
          <div className="text-accent font-bold animate-pulse-glow">
            🔥 Streak: {streak}
          </div>
        )}
      </div>

      <QuizQuestion
        question={quizSet.questions[currentQuestionIndex]}
        questionNumber={currentQuestionIndex + 1}
        totalQuestions={quizSet.questions.length}
        onAnswer={handleAnswer}
      />
    </div>
  );
}
