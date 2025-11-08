import { useNavigate, useParams } from "react-router-dom";
import { difficulties } from "@/data/quizData";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";

interface DifficultyProgress {
  [difficulty: string]: {
    [setId: number]: {
      completed: boolean;
      highScore: number;
    };
  };
}

export default function SetSelect() {
  const { difficulty } = useParams();
  const navigate = useNavigate();
  const [progress, setProgress] = useState<DifficultyProgress>({});

  useEffect(() => {
    const savedProgress = localStorage.getItem("quizProgress");
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  const difficultyLevel = difficulties.find(d => d.id === difficulty);

  if (!difficultyLevel) {
    navigate("/");
    return null;
  }

  const isSetCompleted = (setId: number) => {
    return progress[difficulty!]?.[setId]?.completed || false;
  };

  const getHighScore = (setId: number) => {
    return progress[difficulty!]?.[setId]?.highScore || 0;
  };

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Button
          onClick={() => navigate("/")}
          variant="ghost"
          className="mb-8 hover:bg-primary/10 text-primary"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Difficulty Select
        </Button>

        <div className="text-center mb-12">
          <div className="text-6xl mb-4">{difficultyLevel.icon}</div>
          <h1 className="text-4xl font-bold mb-2 text-glow-primary bg-gradient-primary bg-clip-text text-transparent">
            {difficultyLevel.title} Level
          </h1>
          <p className="text-xl text-muted-foreground">
            Choose a question set to begin
          </p>
        </div>

        <div className="space-y-6">
          {difficultyLevel.sets.map((set) => {
            const completed = isSetCompleted(set.id);
            const highScore = getHighScore(set.id);

            return (
              <Card
                key={set.id}
                onClick={() => navigate(`/quiz/${difficulty}/${set.id}`)}
                className="p-6 cursor-pointer transition-all duration-300 hover:scale-[1.02] bg-gradient-card border-primary/20 card-glow group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="text-2xl font-bold text-primary-glow group-hover:text-glow-primary transition-all">
                        Set {set.id}: {set.title}
                      </h2>
                      {completed && (
                        <CheckCircle2 className="h-6 w-6 text-accent animate-scale-in" />
                      )}
                    </div>
                    <p className="text-muted-foreground mb-3">
                      {set.description}
                    </p>
                    <div className="flex gap-3">
                      <Badge variant="outline" className="border-primary/50">
                        {set.questions.length} Questions
                      </Badge>
                      {completed && (
                        <Badge className="bg-gradient-correct text-accent-foreground shadow-glow-accent">
                          High Score: {highScore}/{set.questions.length}
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
