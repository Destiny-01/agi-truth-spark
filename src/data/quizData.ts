export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  correctFeedback: string;
  wrongFeedback: string;
  funFact: string;
}

export interface Quiz {
  id: number;
  title: string;
  description: string;
  icon: string;
  questions: Question[];
}

export const quizzes: Quiz[] = [
  {
    id: 1,
    title: "AGI Sentience Myths",
    description: "Can machines truly feel? Let's bust some myths!",
    icon: "🤖",
    questions: [
      {
        id: 1,
        question: "Myth: AGI will become sentient overnight like in sci-fi movies. True or False?",
        options: ["True", "False", "Maybe", "Only on Tuesdays"],
        correctAnswer: 1,
        correctFeedback: "Correct! AGI development is gradual, requiring years of research and testing. It's not like flipping a switch!",
        wrongFeedback: "Not quite! AGI won't suddenly 'wake up' sentient. Development is incremental, with careful testing at each stage.",
        funFact: "Even the most advanced AI today lacks self-awareness—it's specialized, not sentient!"
      },
      {
        id: 2,
        question: "What's the main challenge in creating sentient AGI?",
        options: [
          "Making it look cool",
          "Understanding consciousness itself",
          "Getting enough electricity",
          "Teaching it to make coffee"
        ],
        correctAnswer: 1,
        correctFeedback: "Exactly! We don't fully understand human consciousness yet, so replicating it in machines is incredibly complex.",
        wrongFeedback: "Close, but no! The real challenge is that we don't even fully understand what consciousness IS in humans.",
        funFact: "Consciousness involves self-awareness, emotions, and subjective experience—things we can't easily program!"
      },
      {
        id: 3,
        question: "Myth: If AGI passes the Turing Test, it's truly sentient. Agree?",
        options: ["Strongly Agree", "Disagree", "Not Sure", "What's a Turing Test?"],
        correctAnswer: 1,
        correctFeedback: "Right! The Turing Test measures conversational ability, not sentience. A chatbot can sound human without having feelings!",
        wrongFeedback: "Oops! The Turing Test only checks if an AI can mimic human conversation—not if it has consciousness or feelings.",
        funFact: "Some chatbots already fool people in conversation, but they're just following algorithms!"
      },
      {
        id: 4,
        question: "Can current AI truly 'feel' emotions like happiness or sadness?",
        options: ["Yes, definitely", "No, it simulates responses", "Only when trained on emotional data", "It depends on the mood"],
        correctAnswer: 1,
        correctFeedback: "Correct! AI today mimics emotional responses based on patterns, but has no subjective experience of feelings.",
        wrongFeedback: "Not quite! AI can recognize and respond to emotional cues, but doesn't actually 'feel' anything—it's pattern matching.",
        funFact: "Emotions require biological processes and subjective experience—AI processes data, not feelings!"
      },
      {
        id: 5,
        question: "What's more likely to come first: sentient AGI or flying cars?",
        options: ["Sentient AGI", "Flying cars", "Both at the same time", "Neither"],
        correctAnswer: 1,
        correctFeedback: "Probably right! While flying cars face practical hurdles, AGI research is advancing rapidly—though true sentience remains distant.",
        wrongFeedback: "Interesting guess! But AGI research is progressing faster than flying car tech, even if both are far from reality.",
        funFact: "Some experts predict human-level AGI by 2050, but sentience? That's a whole other mystery!"
      }
    ]
  },
  {
    id: 2,
    title: "AGI Ethics & Safety",
    description: "Explore the myths around AGI control and safety",
    icon: "🛡️",
    questions: [
      {
        id: 1,
        question: "Myth: We can just 'turn off' a dangerous AGI. True or False?",
        options: ["True", "False", "Depends on the off switch", "AGI can't be dangerous"],
        correctAnswer: 1,
        correctFeedback: "Correct! Advanced AGI might resist shutdown attempts or have redundancies. That's why safety research is critical!",
        wrongFeedback: "Not so simple! A sophisticated AGI could anticipate shutdown attempts and create backups—safety must be built in from the start.",
        funFact: "This is called the 'control problem'—ensuring AGI remains aligned with human values!"
      },
      {
        id: 2,
        question: "What's the biggest concern about AGI alignment?",
        options: [
          "AGI might become evil",
          "AGI optimizing the wrong goal perfectly",
          "AGI refusing to work",
          "AGI taking all our jobs"
        ],
        correctAnswer: 1,
        correctFeedback: "Exactly! The 'paperclip maximizer' scenario shows how AGI optimizing a simple goal could cause unintended harm.",
        wrongFeedback: "Close! The real risk isn't AGI being 'evil,' but perfectly optimizing a goal we set poorly—causing unintended consequences.",
        funFact: "Imagine an AGI tasked to 'make paperclips'—it might turn the whole Earth into a paperclip factory!"
      },
      {
        id: 3,
        question: "Myth: AGI will automatically understand human values and morals. True?",
        options: ["True", "False", "Only if we ask nicely", "It'll figure it out"],
        correctAnswer: 1,
        correctFeedback: "Right! Human values are complex and often contradictory—we must explicitly teach AGI our ethics through careful alignment.",
        wrongFeedback: "Nope! Morals aren't universal truths—they're human constructs. AGI won't 'know' them without being explicitly taught.",
        funFact: "Even humans disagree on morals across cultures—teaching AGI shared values is incredibly challenging!"
      },
      {
        id: 4,
        question: "Can we rely on 'AI ethics guidelines' alone to keep AGI safe?",
        options: ["Yes, totally", "No, we need technical safeguards too", "Guidelines are enough", "AGI will self-regulate"],
        correctAnswer: 1,
        correctFeedback: "Spot on! Guidelines help, but we need technical solutions like value alignment, interpretability, and formal verification.",
        wrongFeedback: "Not quite! Guidelines are a start, but technical safeguards must be built into AGI's architecture—like safety by design.",
        funFact: "Organizations like OpenAI and DeepMind invest heavily in AGI safety research!"
      },
      {
        id: 5,
        question: "Myth: Once AGI is built, we can always upgrade its safety features. Agree?",
        options: ["Agree", "Disagree", "Depends on the AGI", "Safety isn't needed"],
        correctAnswer: 1,
        correctFeedback: "Correct! Safety must be foundational, not an afterthought—retrofitting safety into advanced AGI could be impossible.",
        wrongFeedback: "Be careful! If AGI reaches a certain capability threshold, adding safety features later might be too risky or impossible.",
        funFact: "This is why researchers emphasize 'safety from the start' in AGI development!"
      }
    ]
  },
  {
    id: 3,
    title: "AGI Capabilities",
    description: "What can AGI really do? Separate fact from fiction!",
    icon: "⚡",
    questions: [
      {
        id: 1,
        question: "Myth: AGI will be superhuman at everything instantly. True?",
        options: ["True", "False", "Only math", "Only at games"],
        correctAnswer: 1,
        correctFeedback: "Right! Early AGI might excel in some areas but struggle with tasks like creative art or social understanding.",
        wrongFeedback: "Not exactly! AGI development is uneven—it might master specific skills before generalizing to all human-level tasks.",
        funFact: "Today's AI beats humans at chess and Go, but struggles with basic common sense reasoning!"
      },
      {
        id: 2,
        question: "What's the main difference between narrow AI and AGI?",
        options: [
          "AGI is smarter",
          "AGI can learn any task humans can",
          "AGI has feelings",
          "There's no difference"
        ],
        correctAnswer: 1,
        correctFeedback: "Perfect! Narrow AI excels at specific tasks (like translation), while AGI can generalize across domains like humans do.",
        wrongFeedback: "Close! The key is generalization—narrow AI is task-specific, while AGI adapts to ANY task, like a human.",
        funFact: "Your smartphone's voice assistant is narrow AI—it can't suddenly start driving cars!"
      },
      {
        id: 3,
        question: "Myth: AGI will solve all of humanity's problems overnight. Believe it?",
        options: ["Absolutely", "No, it's a tool, not magic", "Maybe with upgrades", "Only on weekends"],
        correctAnswer: 1,
        correctFeedback: "Exactly! AGI is a powerful tool, but solving complex problems like poverty or climate change requires human collaboration and wisdom.",
        wrongFeedback: "Careful! AGI can accelerate solutions, but real-world problems involve politics, ethics, and logistics—not just computation.",
        funFact: "Even AGI can't predict the future or force humans to cooperate on global challenges!"
      },
      {
        id: 4,
        question: "Can AGI truly be creative, or just remix existing ideas?",
        options: ["Truly creative", "Remixes existing patterns", "Both", "Neither"],
        correctAnswer: 2,
        correctFeedback: "Great answer! Current AI generates new combinations of learned patterns—whether that's 'true creativity' is a deep philosophical question!",
        wrongFeedback: "Think deeper! AI creates novel outputs by combining learned patterns—but is that the same as human imagination? Philosophers debate!",
        funFact: "AI can write poetry and paint art, but it learns from millions of human-created examples first!"
      },
      {
        id: 5,
        question: "Myth: AGI will always be smarter than any human. Fact or fiction?",
        options: ["Fact", "Fiction", "Only in math", "Depends on the person"],
        correctAnswer: 1,
        correctFeedback: "Right! While AGI may surpass humans in many areas, humans excel in creativity, emotional intelligence, and context-specific wisdom.",
        wrongFeedback: "Not necessarily! Humans have unique strengths like intuition, empathy, and cultural understanding—AGI might never fully replicate these.",
        funFact: "Intelligence is multidimensional—there's no single 'smartest' across all domains!"
      }
    ]
  }
];

export const funWhatIfs = [
  "What if your AGI started a podcast? It'd debunk myths with perfect fact-checking!",
  "What if AGI became a chef? Every recipe would be optimized for flavor AND nutrition!",
  "What if AGI joined a debate team? It'd never run out of counterarguments!",
  "What if AGI played Dungeons & Dragons? The DM would need infinite campaign ideas!",
  "What if AGI became a therapist? It'd remember every session perfectly—no notes needed!",
  "What if AGI wrote fortune cookies? They'd be eerily accurate predictions!",
  "What if AGI directed a movie? Every scene would be mathematically perfect!",
  "What if AGI became a stand-up comedian? It'd analyze every laugh for timing!"
];
