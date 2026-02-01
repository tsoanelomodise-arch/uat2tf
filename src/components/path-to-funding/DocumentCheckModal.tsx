import React, { memo } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import type { DocumentAnswers } from '@/hooks/usePathToFundingQuiz';

interface DocumentCheckModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  step: number;
  setStep: (step: number) => void;
  answers: DocumentAnswers;
  updateAnswer: <K extends keyof DocumentAnswers>(field: K, value: DocumentAnswers[K]) => void;
  onComplete: () => void;
}

const documents = [
  {
    id: 'cipcDocs',
    title: 'CIPC Registration Documents',
    description: 'Company registration certificate, MOI, and share certificates',
    icon: '📋',
  },
  {
    id: 'bbbee',
    title: 'B-BBEE Certificate',
    description: 'Valid B-BBEE certificate or sworn affidavit for EMEs',
    icon: '📜',
  },
  {
    id: 'taxClearance',
    title: 'Tax Clearance Certificate',
    description: 'Valid SARS tax clearance certificate (PIN verified)',
    icon: '✅',
  },
];

const DocumentCheckModal: React.FC<DocumentCheckModalProps> = memo(({
  open,
  onOpenChange,
  step,
  setStep,
  answers,
  updateAnswer,
  onComplete,
}) => {
  const currentDoc = documents[step];
  const totalSteps = documents.length;

  const canProceed = () => {
    const docId = currentDoc.id as keyof DocumentAnswers;
    return answers[docId] !== '';
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

  const handleAnswer = (value: 'yes' | 'no') => {
    updateAnswer(currentDoc.id as keyof DocumentAnswers, value);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Document Checklist
          </DialogTitle>
          <p className="text-sm text-gray-600">
            Document {step + 1} of {totalSteps}
          </p>
        </DialogHeader>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 px-6 py-4">
          {documents.map((_, index) => (
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
          <div className="min-h-[200px]">
            <div className="text-center mb-6">
              <span className="text-5xl mb-4 block">{currentDoc.icon}</span>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {currentDoc.title}
              </h3>
              <p className="text-gray-600">
                {currentDoc.description}
              </p>
            </div>

            <p className="text-center text-lg font-medium text-gray-900 mb-4">
              Do you have this document ready?
            </p>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => handleAnswer('yes')}
                className={`flex-1 max-w-[150px] py-4 rounded-xl font-semibold text-lg transition-all ${
                  answers[currentDoc.id as keyof DocumentAnswers] === 'yes'
                    ? 'bg-green-500 text-white ring-4 ring-green-200'
                    : 'bg-gray-100 text-gray-900 hover:bg-green-50 hover:text-green-600'
                }`}
              >
                ✓ Yes
              </button>
              <button
                onClick={() => handleAnswer('no')}
                className={`flex-1 max-w-[150px] py-4 rounded-xl font-semibold text-lg transition-all ${
                  answers[currentDoc.id as keyof DocumentAnswers] === 'no'
                    ? 'bg-red-500 text-white ring-4 ring-red-200'
                    : 'bg-gray-100 text-gray-900 hover:bg-red-50 hover:text-red-600'
                }`}
              >
                ✗ No
              </button>
            </div>
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

DocumentCheckModal.displayName = 'DocumentCheckModal';

export default DocumentCheckModal;
