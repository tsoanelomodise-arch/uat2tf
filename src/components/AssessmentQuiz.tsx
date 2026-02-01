import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AssessmentQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const questions = [
    {
      question: "What is your current business stage?",
      options: [
        "Early-stage/Startup (0-2 years)",
        "Growing business (2-5 years)", 
        "Established business (5+ years)",
        "Informal business looking to formalize"
      ]
    },
    {
      question: "What is your primary funding need?",
      options: [
        "Seed capital to start",
        "Working capital for operations",
        "Growth capital for expansion",
        "Equipment/infrastructure investment"
      ]
    },
    {
      question: "What funding amount are you seeking?",
      options: [
        "R50K - R250K",
        "R250K - R1M",
        "R1M - R10M",
        "R10M+"
      ]
    }
  ];

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const getRecommendation = () => {
    // Simple logic to recommend programs based on answers
    if (answers[0]?.includes("Early-stage") || answers[0]?.includes("Informal")) {
      return "Startup and Informal Business Grants";
    } else if (answers[1]?.includes("Growth") || answers[2]?.includes("R1M")) {
      return "Growth and Expansion Loans";
    } else if (answers[2]?.includes("R10M+")) {
      return "Equity and Co-Investment Instruments";
    } else {
      return "Blended Finance and Guarantees";
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
  };

  if (currentQuestion >= questions.length && answers.length === questions.length) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-primary">
            Your Recommended Program
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <div className="p-6 bg-primary/10 rounded-lg">
            <h3 className="text-xl font-bold text-primary mb-2">
              {getRecommendation()}
            </h3>
            <p className="text-muted-foreground">
              Based on your responses, this program best matches your current needs and business stage.
            </p>
          </div>
          <div className="flex gap-4 justify-center">
            <Button variant="cta">Apply Now</Button>
            <Button variant="outline" onClick={resetQuiz}>Take Quiz Again</Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">
          Question {currentQuestion + 1} of {questions.length}
        </CardTitle>
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-300" 
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <h3 className="text-lg font-semibold">
          {questions[currentQuestion].question}
        </h3>
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-full text-left justify-start h-auto p-4"
              onClick={() => handleAnswer(option)}
            >
              {option}
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default AssessmentQuiz;