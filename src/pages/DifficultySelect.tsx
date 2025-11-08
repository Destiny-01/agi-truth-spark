import { useNavigate } from "react-router-dom";
import { RobotCharacter } from "@/components/RobotCharacter";
import { difficulties } from "@/data/quizData";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

interface DifficultyProgress {
  [difficulty: string]: {
    [setId: number]: {
      completed: boolean;
      highScore: number;
    };
  };
}

export default function DifficultySelect() {
  const navigate = useNavigate();
  const [progress, setProgress] = useState<DifficultyProgress>({});

  useEffect(() => {
    const savedProgress = localStorage.getItem("quizProgress");
    if (savedProgress) {
      setProgress(JSON.parse(savedProgress));
    }
  }, []);

  const getCompletedSets = (difficultyId: string) => {
    if (!progress[difficultyId]) return 0;
    return Object.values(progress[difficultyId]).filter(set => set.completed).length;
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
            Choose your difficulty level and start busting myths about Sentient AGI, 
            ROMA framework, Dobby model, and cutting-edge architectures!
          </p>
        </div>

        {/* Difficulty Levels */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {difficulties.map((difficulty) => {
            const completed = getCompletedSets(difficulty.id);
            const total = difficulty.sets.length;
            
            return (
              <Card
                key={difficulty.id}
                onClick={() => navigate(`/level/${difficulty.id}`)}
                className="p-8 cursor-pointer transition-all duration-300 hover:scale-105 bg-gradient-card border-primary/20 card-glow group"
              >
                <div className="text-center">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">
                    {difficulty.icon}
                  </div>
                  <h2 className="text-2xl font-bold mb-2 text-primary-glow">
                    {difficulty.title}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {difficulty.description}
                  </p>
                  
                  {completed > 0 && (
                    <Badge className="bg-gradient-correct text-accent-foreground shadow-glow-accent">
                      {completed}/{total} Sets Complete
                    </Badge>
                  )}
                  
                  <div className="mt-6 text-sm text-muted-foreground">
                    {total} Question Sets
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
