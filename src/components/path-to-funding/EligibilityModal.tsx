import React, { memo } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Slider } from '@/components/ui/slider';
import type { EligibilityAnswers } from '@/hooks/usePathToFundingQuiz';

interface EligibilityModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  step: number;
  setStep: (step: number) => void;
  answers: EligibilityAnswers;
  updateAnswer: <K extends keyof EligibilityAnswers>(field: K, value: EligibilityAnswers[K]) => void;
  onComplete: () => void;
}

const questions = [
  {
    id: 'blackOwnership',
    type: 'slider',
    question: 'What percentage of your business is Black-owned?',
    description: 'Move the slider to indicate ownership percentage',
  },
  {
    id: 'activeInvolvement',
    type: 'radio',
    question: 'Are the black owners actively involved in operations?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
  },
  {
    id: 'designatedGroups',
    type: 'radio',
    question: 'Is your business majority owned (≥51%) by women, youth, and persons with disabilities?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
  },
  {
    id: 'cipcRegistered',
    type: 'radio',
    question: 'Is your business registered with CIPC?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
  },
  {
    id: 'taxCompliant',
    type: 'radio',
    question: 'Is your business tax compliant with SARS?',
    options: [
      { value: 'yes', label: 'Yes' },
      { value: 'no', label: 'No' },
    ],
  },
];

const EligibilityModal: React.FC<EligibilityModalProps> = memo(({
  open,
  onOpenChange,
  step,
  setStep,
  answers,
  updateAnswer,
  onComplete,
}) => {
  const currentQuestion = questions[step];
  const totalSteps = questions.length;

  const canProceed = () => {
    const questionId = currentQuestion.id as keyof EligibilityAnswers;
    if (currentQuestion.type === 'slider') return true;
    return answers[questionId] !== '';
  };

  const handleNext = () => {
    if (step < totalSteps - 1) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Eligibility Checklist
          </DialogTitle>
          <p className="text-sm text-gray-600">
            Question {step + 1} of {totalSteps}
          </p>
        </DialogHeader>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 px-6 py-4">
          {questions.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === step
                  ? 'bg-[#007847]'
                  : index < step
                  ? 'bg-[#007847]/50'
                  : 'bg-gray-200'
              }`}
            />
          ))}
        </div>

        <div className="p-6 pt-0">
          <div className="min-h-[250px]">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {currentQuestion.question}
            </h3>

            {currentQuestion.type === 'slider' && (
              <div className="space-y-6">
                <p className="text-sm text-gray-600">
                  {currentQuestion.description}
                </p>
                <div className="py-4">
                  <Slider
                    value={[answers.blackOwnership]}
                    onValueChange={(value) => updateAnswer('blackOwnership', value[0])}
                    max={100}
                    min={0}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-600">
                    <span>0%</span>
                    <span className="text-2xl font-bold text-[#007847]">
                      {answers.blackOwnership}%
                    </span>
                    <span>100%</span>
                  </div>
                </div>
                {answers.blackOwnership < 51 && (
                  <p className="text-amber-600 text-sm bg-amber-50 p-3 rounded-lg">
                    ⚠️ Note: Minimum 51% Black ownership is required for eligibility.
                  </p>
                )}
              </div>
            )}

            {currentQuestion.type === 'radio' && (
              <div className="space-y-3">
                {currentQuestion.options?.map((option) => (
                  <label
                    key={option.value}
                    className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all ${
                      answers[currentQuestion.id as keyof EligibilityAnswers] === option.value
                        ? 'border-[#007847] bg-[#007847]/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name={currentQuestion.id}
                      value={option.value}
                      checked={answers[currentQuestion.id as keyof EligibilityAnswers] === option.value}
                      onChange={(e) =>
                        updateAnswer(
                          currentQuestion.id as keyof EligibilityAnswers,
                          e.target.value as any
                        )
                      }
                      className="sr-only"
                    />
                    <div
                      className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                        answers[currentQuestion.id as keyof EligibilityAnswers] === option.value
                          ? 'border-[#007847] bg-[#007847]'
                          : 'border-gray-300'
                      }`}
                    >
                      {answers[currentQuestion.id as keyof EligibilityAnswers] === option.value && (
                        <div className="w-2 h-2 rounded-full bg-white" />
                      )}
                    </div>
                    <span className="text-gray-900 font-medium">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-between mt-6 pt-4 border-t">
            <button
              onClick={handleBack}
              disabled={step === 0}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                step === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              Back
            </button>
            <button
              onClick={handleNext}
              disabled={!canProceed()}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                canProceed()
                  ? 'bg-[#007847] text-white hover:bg-[#006038]'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {step === totalSteps - 1 ? 'Submit' : 'Next'}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
});

EligibilityModal.displayName = 'EligibilityModal';

export default EligibilityModal;
