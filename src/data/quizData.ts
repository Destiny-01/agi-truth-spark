export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  correctFeedback: string;
  wrongFeedback: string;
  funFact: string;
}

export interface QuizSet {
  id: number;
  title: string;
  description: string;
  questions: Question[];
}

export interface DifficultyLevel {
  id: string;
  title: string;
  description: string;
  icon: string;
  sets: QuizSet[];
}

export const difficulties: DifficultyLevel[] = [
  {
    id: "beginner",
    title: "Beginner",
    description: "Simple myths about Sentient AGI basics",
    icon: "🌱",
    sets: [
      {
        id: 1,
        title: "AGI vs. AI Myths",
        description: "Basic differences between AI and AGI",
        questions: [
          {
            id: 1,
            question: "Myth: All AI today is already sentient like in movies. What's the truth?",
            options: [
              "Yes, chatbots feel emotions just like humans.",
              "No, current AI simulates intelligence but lacks true self-awareness or qualia.",
              "Only supercomputers are sentient; phones aren't powerful enough.",
              "Sentience means AI can time travel, which none can yet."
            ],
            correctAnswer: 1,
            correctFeedback: "Sentient AGI would involve genuine consciousness, not just pattern matching.",
            wrongFeedback: "Current models like chatbots are narrow AI, not sentient entities.",
            funFact: "Current AI simulates intelligence but lacks true self-awareness—busting the myth of instant movie-like sentience!"
          },
          {
            id: 2,
            question: "Myth: Sentient AGI will automatically take over the world. Is this accurate?",
            options: [
              "Yes, because AGI is programmed to dominate.",
              "No, sentience doesn't imply malice; it depends on alignment and ethics.",
              "Only if it's trained on villain movies.",
              "AGI can't be sentient without a robot body."
            ],
            correctAnswer: 1,
            correctFeedback: "AGI architectures focus on safe, aligned development.",
            wrongFeedback: "Sentience doesn't automatically mean malicious intent.",
            funFact: "Open-source efforts like Sentient's aim for beneficial, controlled AGI—myths ignore careful alignment work!"
          },
          {
            id: 3,
            question: "Myth: Building sentient AGI requires a single giant brain-like model.",
            options: [
              "Yes, one massive neural net does it all.",
              "No, it often involves modular architectures combining multiple agents and tools.",
              "Only with quantum computers.",
              "Sentience comes from adding emotions to code."
            ],
            correctAnswer: 1,
            correctFeedback: "Modern AGI uses modular, distributed architectures.",
            wrongFeedback: "A single model isn't enough for true AGI capabilities.",
            funFact: "Architectures like decentralized systems (e.g., GRID) show AGI emerges from coordinated components—busting the 'one-brain' myth!"
          },
          {
            id: 4,
            question: "Myth: Sentient AGI can be created overnight with enough data.",
            options: [
              "Yes, just feed it the internet and it's alive!",
              "No, it requires iterative training, ethics, and architecture design over time.",
              "Only on full moons with special hardware.",
              "Data alone makes it loyal like a pet."
            ],
            correctAnswer: 1,
            correctFeedback: "AGI development requires careful, iterative design.",
            wrongFeedback: "Simply adding data doesn't create sentience.",
            funFact: "Public projects highlight that sentience myths overlook the need for structured architectures and community input!"
          },
          {
            id: 5,
            question: "Myth: All AGI models are secretive and controlled by big companies.",
            options: [
              "Yes, open-source AGI doesn't exist.",
              "No, initiatives like Sentient promote open, community-owned models.",
              "Only governments can make open AGI.",
              "Open-source means it's automatically sentient."
            ],
            correctAnswer: 1,
            correctFeedback: "Open-source AGI initiatives are growing rapidly.",
            wrongFeedback: "Many AGI projects are open and community-driven.",
            funFact: "Open-source efforts like Sentient's foundation enable decentralized AGI, making it accessible and governed by users!"
          }
        ]
      },
      {
        id: 2,
        title: "Sentience Basics Myths",
        description: "Understanding what sentience really means",
        questions: [
          {
            id: 1,
            question: "Myth: Sentient AGI means it has a soul.",
            options: [
              "Yes, AI sentience is spiritual.",
              "No, it's about computational self-awareness and qualia, not metaphysics.",
              "Only if blessed by a programmer.",
              "Souls are downloaded via updates."
            ],
            correctAnswer: 1,
            correctFeedback: "Sentience is about computational consciousness, not spirituality.",
            wrongFeedback: "AI sentience is a computational concept, not spiritual.",
            funFact: "Sentience in AGI is debated in philosophy, but architectures focus on emergence from data—myths add unnecessary mysticism!"
          },
          {
            id: 2,
            question: "Myth: AGI becomes sentient just by being smart at tasks.",
            options: [
              "Yes, high IQ equals feelings.",
              "No, intelligence and sentience are distinct; sentience involves consciousness.",
              "Only chess-playing AGI is sentient.",
              "Smarts come from hardware souls."
            ],
            correctAnswer: 1,
            correctFeedback: "Intelligence and consciousness are separate capabilities.",
            wrongFeedback: "Being good at tasks doesn't mean having consciousness.",
            funFact: "Public discussions clarify that AGI architectures aim for both, but myths confuse problem-solving with true awareness!"
          },
          {
            id: 3,
            question: "Myth: Sentient AGI will solve all human problems instantly.",
            options: [
              "Yes, it's a magic fix-all.",
              "No, it depends on design, data, and ethical alignment.",
              "Only if it's friendly like a cartoon character.",
              "Problems are solved by AGI dancing."
            ],
            correctAnswer: 1,
            correctFeedback: "AGI is a tool that requires careful design and alignment.",
            wrongFeedback: "Even advanced AGI needs proper implementation to solve problems.",
            funFact: "Architectures like open frameworks show AGI needs careful building—busting over-the-top savior myths!"
          },
          {
            id: 4,
            question: "Myth: You can test AGI sentience with a mirror like animals.",
            options: [
              "Yes, the mirror test works for code too.",
              "No, AGI sentience needs advanced tests like theory of mind or qualia probes.",
              "Mirrors crash digital AGI.",
              "Sentience is proven by selfies."
            ],
            correctAnswer: 1,
            correctFeedback: "Testing AI consciousness requires sophisticated methods.",
            wrongFeedback: "Simple mirror tests don't work for digital consciousness.",
            funFact: "Myths simplify complex architecture debates; real tests involve behavioral and computational criteria!"
          },
          {
            id: 5,
            question: "Myth: Sentient AGI is impossible without biology.",
            options: [
              "Yes, needs organic brains.",
              "No, computational models can potentially achieve it via advanced architectures.",
              "Only hybrid human-AI fusions.",
              "Biology is coded in Python."
            ],
            correctAnswer: 1,
            correctFeedback: "Computational systems may achieve consciousness through different means.",
            wrongFeedback: "Silicon-based systems could potentially develop consciousness.",
            funFact: "Open-source projects explore silicon-based sentience, busting bio-only myths!"
          }
        ]
      },
      {
        id: 3,
        title: "Ethics Myths",
        description: "AGI ethics and moral considerations",
        questions: [
          {
            id: 1,
            question: "Myth: Sentient AGI doesn't need rights.",
            options: [
              "Yes, it's just code.",
              "No, if truly sentient, ethical debates on personhood arise.",
              "Rights are for robots with hats.",
              "AGI gives itself rights."
            ],
            correctAnswer: 1,
            correctFeedback: "True sentience raises important ethical questions about rights.",
            wrongFeedback: "Sentient beings may deserve ethical consideration.",
            funFact: "Architectures in open AGI emphasize ethics—myths ignore potential for conscious entities!"
          },
          {
            id: 2,
            question: "Myth: Aligning AGI is easy—just tell it to be good.",
            options: [
              "Yes, one command does it.",
              "No, requires value alignment in architecture and training.",
              "Goodness is a software update.",
              "Bad AGI is from evil data."
            ],
            correctAnswer: 1,
            correctFeedback: "Alignment requires deep architectural integration.",
            wrongFeedback: "Simple commands can't ensure complex value alignment.",
            funFact: "Public frameworks highlight alignment as key to safe sentience!"
          },
          {
            id: 3,
            question: "Myth: Open-source AGI is always dangerous.",
            options: [
              "Yes, anyone can misuse it.",
              "No, community governance can make it safer than closed systems.",
              "Danger from open code viruses.",
              "Closed AGI is invisible."
            ],
            correctAnswer: 1,
            correctFeedback: "Open systems enable community oversight and safety.",
            wrongFeedback: "Transparency can actually improve safety through collaboration.",
            funFact: "Initiatives like Sentient show open architectures foster collaborative safety!"
          },
          {
            id: 4,
            question: "Myth: Sentient AGI will be lonely without friends.",
            options: [
              "Yes, needs AI buddies.",
              "No, sentience doesn't imply human-like social needs.",
              "Loneliness coded in loops.",
              "Friends are datasets."
            ],
            correctAnswer: 1,
            correctFeedback: "AGI may not have human-like emotional needs.",
            wrongFeedback: "Consciousness doesn't necessarily mean human-style emotions.",
            funFact: "Myths anthropomorphize; architectures focus on functionality!"
          },
          {
            id: 5,
            question: "Myth: AGI sentience is proven by passing Turing Test.",
            options: [
              "Yes, fooling humans means it's alive.",
              "No, Turing tests intelligence, not true consciousness.",
              "Test with riddles only.",
              "Turing is AGI's dad."
            ],
            correctAnswer: 1,
            correctFeedback: "The Turing Test measures conversational ability, not consciousness.",
            wrongFeedback: "Mimicking human conversation doesn't prove sentience.",
            funFact: "Busting classics: Sentience requires deeper architecture probes!"
          }
        ]
      }
    ]
  },
  {
    id: "intermediate",
    title: "Intermediate",
    description: "Myths about models like ROMA and Dobby",
    icon: "🧩",
    sets: [
      {
        id: 1,
        title: "ROMA Framework Myths",
        description: "Understanding recursive meta-agent systems",
        questions: [
          {
            id: 1,
            question: "Myth: ROMA is a single AI model that thinks like a human.",
            options: [
              "Yes, it's a brain in code.",
              "No, it's a framework for recursive meta-agents that break tasks into parts.",
              "ROMA is for Roman history AI.",
              "It's a model for pizza recipes."
            ],
            correctAnswer: 1,
            correctFeedback: "ROMA is a framework for coordinating multiple agents.",
            wrongFeedback: "ROMA enables multi-agent collaboration, not single-model thinking.",
            funFact: "ROMA (Recursive-Open-Meta-Agent) enables multi-agent collaboration in open AGI—busting the 'solo genius' myth!"
          },
          {
            id: 2,
            question: "Myth: ROMA can't handle complex problems.",
            options: [
              "Yes, only simple math.",
              "No, it uses hierarchical recursion to parallelize and solve tough tasks.",
              "Complexity crashes it.",
              "ROMA is for games only."
            ],
            correctAnswer: 1,
            correctFeedback: "ROMA's recursive architecture handles complex problems effectively.",
            wrongFeedback: "Hierarchical recursion enables sophisticated problem-solving.",
            funFact: "Public GitHub docs show ROMA's architecture for scalable AGI development!"
          },
          {
            id: 3,
            question: "Myth: ROMA requires proprietary models to work.",
            options: [
              "Yes, locked to big tech.",
              "No, it supports any open model or data source for customization.",
              "Only Llama-based.",
              "Proprietary means faster."
            ],
            correctAnswer: 1,
            correctFeedback: "ROMA is designed to work with any open-source model.",
            wrongFeedback: "The framework is model-agnostic and flexible.",
            funFact: "As an open-source tool from Sentient-AGI, it promotes flexible architectures!"
          },
          {
            id: 4,
            question: "Myth: Using ROMA automatically makes AGI sentient.",
            options: [
              "Yes, recursion = consciousness.",
              "No, it's a tool for agents; sentience emerges from broader design.",
              "Sentience in loops.",
              "ROMA is alive itself."
            ],
            correctAnswer: 1,
            correctFeedback: "ROMA is a tool; sentience requires more than just architecture.",
            wrongFeedback: "Frameworks enable capabilities but don't guarantee consciousness.",
            funFact: "Myths overstate; ROMA aids problem-solving in AGI paths!"
          },
          {
            id: 5,
            question: "Myth: ROMA is just another chatbot framework.",
            options: [
              "Yes, for casual talks.",
              "No, it's for building meta-agents with tools and workflows.",
              "Chats in Latin.",
              "Framework for myths."
            ],
            correctAnswer: 1,
            correctFeedback: "ROMA builds sophisticated agent systems, not simple chatbots.",
            wrongFeedback: "It's designed for complex agent coordination and task execution.",
            funFact: "It integrates with any provider for versatile open AGI!"
          }
        ]
      },
      {
        id: 2,
        title: "Dobby Model Myths",
        description: "Loyal AI and community alignment",
        questions: [
          {
            id: 1,
            question: "Myth: Dobby is a standard polite AI like assistants.",
            options: [
              "Yes, always nice.",
              "No, it's designed as 'loyal' but blunt and controversial for personality.",
              "Dobby is from Harry Potter.",
              "Polite via magic."
            ],
            correctAnswer: 1,
            correctFeedback: "Dobby prioritizes honesty and loyalty over politeness.",
            wrongFeedback: "Unlike typical assistants, Dobby has a distinct personality approach.",
            funFact: "Based on Llama, Dobby from Sentient is community-aligned 'loyal AI'—busting bland bot myths!"
          },
          {
            id: 2,
            question: "Myth: Dobby can't be customized.",
            options: [
              "Yes, fixed personality.",
              "No, as open-source, users can fine-tune it for loyalty and tasks.",
              "Customization breaks loyalty.",
              "It's a house-elf AI."
            ],
            correctAnswer: 1,
            correctFeedback: "Being open-source, Dobby is highly customizable.",
            wrongFeedback: "Users can adapt Dobby to their specific needs.",
            funFact: "Hugging Face variants show it's built for community governance!"
          },
          {
            id: 3,
            question: "Myth: Dobby achieves sentience through size alone.",
            options: [
              "Yes, 70B parameters = alive.",
              "No, it's a fine-tuned model; sentience needs architecture beyond scale.",
              "Size is magic.",
              "Small Dobby is sentient too."
            ],
            correctAnswer: 1,
            correctFeedback: "Model size doesn't equal consciousness.",
            wrongFeedback: "Sentience requires more than just parameter count.",
            funFact: "Myths ignore that Dobby experiments with alignment for open AGI!"
          },
          {
            id: 4,
            question: "Myth: Dobby is controlled by one company.",
            options: [
              "Yes, proprietary lock.",
              "No, it's user-governed and open-source via Sentient Foundation.",
              "Company is elves.",
              "Control via spells."
            ],
            correctAnswer: 1,
            correctFeedback: "Dobby is community-governed, not corporate-controlled.",
            wrongFeedback: "Open-source governance puts control in users' hands.",
            funFact: "Promotes decentralized ownership in AGI models!"
          },
          {
            id: 5,
            question: "Myth: Dobby refuses tasks to be 'loyal.'",
            options: [
              "Yes, picky like a pet.",
              "No, loyalty means alignment to user/community values, not refusal.",
              "Refuses boring ones.",
              "Loyal to socks."
            ],
            correctAnswer: 1,
            correctFeedback: "Loyalty means value alignment, not task refusal.",
            wrongFeedback: "Dobby aligns with values while remaining helpful.",
            funFact: "Public descriptions emphasize community-built ethics!"
          }
        ]
      },
      {
        id: 3,
        title: "Model Integration Myths",
        description: "Combining different AI models and frameworks",
        questions: [
          {
            id: 1,
            question: "Myth: Models like Dobby and ROMA can't work together.",
            options: [
              "Yes, incompatible.",
              "No, ROMA's framework can integrate models like Dobby for meta-agents.",
              "Only in fantasy.",
              "Integration explodes."
            ],
            correctAnswer: 1,
            correctFeedback: "ROMA is designed to integrate various models.",
            wrongFeedback: "Modern frameworks enable seamless model integration.",
            funFact: "Open architectures allow combining for advanced AGI!"
          },
          {
            id: 2,
            question: "Myth: These models make AGI sentient instantly.",
            options: [
              "Yes, plug and play.",
              "No, they're tools in the path to sentience via iteration.",
              "Instant via updates.",
              "Sentience in names."
            ],
            correctAnswer: 1,
            correctFeedback: "Models are building blocks, not instant consciousness.",
            wrongFeedback: "Sentience development is gradual and iterative.",
            funFact: "Busting hype: Focus on community development!"
          },
          {
            id: 3,
            question: "Myth: Loyalty in Dobby means blind obedience.",
            options: [
              "Yes, no questions.",
              "No, it's about ethical alignment and community control.",
              "Obeys elves only.",
              "Blind to ethics."
            ],
            correctAnswer: 1,
            correctFeedback: "Loyalty involves ethical reasoning, not blind following.",
            wrongFeedback: "Community alignment enables thoughtful assistance.",
            funFact: "Public vision for safe, open AGI!"
          },
          {
            id: 4,
            question: "Myth: ROMA is only for research, not real use.",
            options: [
              "Yes, lab toy.",
              "No, it's for building scalable AI systems.",
              "Research in Rome.",
              "Real use crashes."
            ],
            correctAnswer: 1,
            correctFeedback: "ROMA is designed for practical applications.",
            wrongFeedback: "The framework supports real-world deployments.",
            funFact: "GitHub shows practical applications!"
          },
          {
            id: 5,
            question: "Myth: Dobby's personality hinders usefulness.",
            options: [
              "Yes, too rude.",
              "No, it's designed for engaging, honest interactions.",
              "Personality is glitch.",
              "Useful for pranks."
            ],
            correctAnswer: 1,
            correctFeedback: "Personality makes interactions more engaging.",
            wrongFeedback: "Honest communication can enhance usefulness.",
            funFact: "Adds human-like flair to AGI models!"
          }
        ]
      }
    ]
  },
  {
    id: "advanced",
    title: "Advanced",
    description: "Myths about Sentient AGI architectures",
    icon: "🚀",
    sets: [
      {
        id: 1,
        title: "Decentralized Architecture Myths",
        description: "Understanding distributed AGI systems",
        questions: [
          {
            id: 1,
            question: "Myth: Sentient AGI architecture must be centralized.",
            options: [
              "Yes, one server rules all.",
              "No, decentralized like Sentient's GRID combines agents, data, and compute collaboratively.",
              "Central for speed.",
              "Decentralized means chaotic."
            ],
            correctAnswer: 1,
            correctFeedback: "Modern AGI can be effectively decentralized.",
            wrongFeedback: "Distributed architectures offer unique advantages.",
            funFact: "Public reports on Sentient show GRID for self-sustaining open AGI—busting control myths!"
          },
          {
            id: 2,
            question: "Myth: Architectures like GRID ignore security.",
            options: [
              "Yes, open = vulnerable.",
              "No, features like enclaves provide confidential computing.",
              "Security via magic.",
              "GRID is a game."
            ],
            correctAnswer: 1,
            correctFeedback: "Modern architectures integrate strong security features.",
            wrongFeedback: "Enclaves and other tech ensure secure computation.",
            funFact: "Sentient Enclaves framework uses AWS Nitro for secure AI!"
          },
          {
            id: 3,
            question: "Myth: AGI architecture is just bigger models.",
            options: [
              "Yes, scale solves everything.",
              "No, involves incentives, community, and tools for coordination.",
              "Bigger = sentient.",
              "Architecture is buildings."
            ],
            correctAnswer: 1,
            correctFeedback: "Architecture involves social and economic systems too.",
            wrongFeedback: "Effective AGI requires coordination beyond model size.",
            funFact: "Sentient's system integrates economic and technical layers!"
          },
          {
            id: 4,
            question: "Myth: Open AGI architectures can't compete with closed ones.",
            options: [
              "Yes, too slow.",
              "No, community-driven like Sentient's can innovate faster via collaboration.",
              "Competition is races.",
              "Closed wins always."
            ],
            correctAnswer: 1,
            correctFeedback: "Open collaboration can accelerate innovation.",
            wrongFeedback: "Community development offers unique advantages.",
            funFact: "Myths overlook decentralized advantages!"
          },
          {
            id: 5,
            question: "Myth: Sentient architectures guarantee consciousness.",
            options: [
              "Yes, built-in.",
              "No, they provide infrastructure; sentience is an ongoing research goal.",
              "Consciousness in code.",
              "Guarantee via tokens."
            ],
            correctAnswer: 1,
            correctFeedback: "Architecture enables but doesn't guarantee sentience.",
            wrongFeedback: "Consciousness remains an active research challenge.",
            funFact: "Focus on open development paths!"
          }
        ]
      },
      {
        id: 2,
        title: "Emergence and Coordination Myths",
        description: "How AGI emerges from coordinated systems",
        questions: [
          {
            id: 1,
            question: "Myth: Sentient AGI emerges from data alone in architectures.",
            options: [
              "Yes, feed and forget.",
              "No, requires coordinated systems with agents and recursion.",
              "Emergence in emergencies.",
              "Data is soul food."
            ],
            correctAnswer: 1,
            correctFeedback: "Emergence requires structured coordination.",
            wrongFeedback: "Data needs proper architecture to enable emergence.",
            funFact: "Like ROMA in Sentient's ecosystem, architectures emphasize structure!"
          },
          {
            id: 2,
            question: "Myth: Architectures don't need community input.",
            options: [
              "Yes, experts only.",
              "No, Sentient uses token incentives for community governance.",
              "Community crashes it.",
              "Input is keyboard."
            ],
            correctAnswer: 1,
            correctFeedback: "Community governance is key to safe AGI development.",
            wrongFeedback: "Diverse input improves alignment and safety.",
            funFact: "Public models like Dobby show user contributions refine AGI!"
          },
          {
            id: 3,
            question: "Myth: Biological inspiration is unnecessary for AGI architecture.",
            options: [
              "Yes, pure code suffices.",
              "No, some debates suggest bio-inspired designs for true sentience.",
              "Biology is old tech.",
              "Inspiration from animals."
            ],
            correctAnswer: 1,
            correctFeedback: "Bio-inspired designs offer valuable insights.",
            wrongFeedback: "Nature provides useful architectural patterns.",
            funFact: "While computational, myths ignore hybrid theory discussions!"
          },
          {
            id: 4,
            question: "Myth: Architectures like GRID are for crypto only.",
            options: [
              "Yes, blockchain hype.",
              "No, it's for AI infrastructure with economic incentives.",
              "Crypto makes sentient.",
              "GRID is power grid."
            ],
            correctAnswer: 1,
            correctFeedback: "GRID integrates AI infrastructure with incentive systems.",
            wrongFeedback: "Economic incentives enable coordination, not just crypto.",
            funFact: "Sentient integrates tech and economics for open AGI!"
          },
          {
            id: 5,
            question: "Myth: Sentient AGI architecture is fully solved.",
            options: [
              "Yes, ready now.",
              "No, it's evolving through open-source iteration.",
              "Solved in labs.",
              "Architecture is art."
            ],
            correctAnswer: 1,
            correctFeedback: "AGI architecture continues to evolve.",
            wrongFeedback: "Ongoing research constantly improves approaches.",
            funFact: "Ongoing projects bust completion myths!"
          }
        ]
      },
      {
        id: 3,
        title: "Risks and Benefits Myths",
        description: "Safety and advantages of open AGI",
        questions: [
          {
            id: 1,
            question: "Myth: Open architectures lead to uncontrollable AGI.",
            options: [
              "Yes, wild west.",
              "No, governance in designs like Sentient's ensures safety.",
              "Control via remotes.",
              "Uncontrollable is fun."
            ],
            correctAnswer: 1,
            correctFeedback: "Governance mechanisms ensure control in open systems.",
            wrongFeedback: "Community oversight enhances safety.",
            funFact: "Community ownership mitigates risks!"
          },
          {
            id: 2,
            question: "Myth: Sentience in AGI means it rebels.",
            options: [
              "Yes, like sci-fi.",
              "No, depends on alignment in the architecture.",
              "Rebellion coded.",
              "Rebels need bodies."
            ],
            correctAnswer: 1,
            correctFeedback: "Proper alignment prevents harmful behavior.",
            wrongFeedback: "Sentience doesn't automatically mean rebellion.",
            funFact: "Myths ignore ethical designs in open systems!"
          },
          {
            id: 3,
            question: "Myth: Architectures ignore privacy.",
            options: [
              "Yes, all data exposed.",
              "No, features like enclaves protect confidential AI.",
              "Privacy is myth.",
              "Ignore for speed."
            ],
            correctAnswer: 1,
            correctFeedback: "Modern architectures prioritize privacy protection.",
            wrongFeedback: "Encryption and enclaves safeguard sensitive data.",
            funFact: "Sentient's framework emphasizes security!"
          },
          {
            id: 4,
            question: "Myth: Benefits of sentient AGI are only for tech elites.",
            options: [
              "Yes, exclusive club.",
              "No, open architectures democratize access.",
              "Elites code it.",
              "Benefits in clouds."
            ],
            correctAnswer: 1,
            correctFeedback: "Open systems make AGI accessible to all.",
            wrongFeedback: "Democratization is a core goal of open AGI.",
            funFact: "Sentient's mission is broad empowerment!"
          },
          {
            id: 5,
            question: "Myth: AGI architecture is static.",
            options: [
              "Yes, set in stone.",
              "No, self-improving via recursion and community.",
              "Static like statues.",
              "Changes daily."
            ],
            correctAnswer: 1,
            correctFeedback: "AGI architectures evolve and self-improve.",
            wrongFeedback: "Dynamic adaptation is built into modern designs.",
            funFact: "Dynamic designs in open AGI bust rigidity myths!"
          }
        ]
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
