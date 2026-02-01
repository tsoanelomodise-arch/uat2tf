import React, { memo } from 'react';
import {
  Dialog,
  DialogContent,
} from '@/components/ui/dialog';
import { CheckCircle, XCircle, AlertCircle } from 'lucide-react';

interface ResultModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

interface IncompleteModalProps extends ResultModalProps {
  onCheckEligibility: () => void;
  onCheckDocuments: () => void;
  appState: { elig: boolean; docs: boolean };
}

interface SuccessModalProps extends ResultModalProps {
  onContinue: () => void;
}

// Eligibility Success Modal
export const SuccessModal: React.FC<SuccessModalProps> = memo(({ open, onOpenChange, onContinue }) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="sm:max-w-[450px] text-center p-8 bg-white">
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-12 h-12 text-green-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Congratulations!
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Based on your responses, your business appears to meet the basic eligibility criteria for the Transformation Fund.
        </p>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 w-full">
          <p className="text-green-700 text-sm">
            ✓ Eligibility check complete. You can now proceed to the document checklist.
          </p>
        </div>
        <button
          onClick={onContinue}
          className="w-full py-3 bg-[#007847] text-white rounded-lg font-semibold hover:bg-[#006038] transition-colors"
        >
          Continue to Document Check
        </button>
      </div>
    </DialogContent>
  </Dialog>
));
SuccessModal.displayName = 'SuccessModal';

// Eligibility Reject Modal
export const RejectModal: React.FC<ResultModalProps> = memo(({ open, onOpenChange }) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="sm:max-w-[450px] text-center p-8 bg-white">
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
          <XCircle className="w-12 h-12 text-red-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Not Eligible
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Unfortunately, based on your responses, your business does not currently meet the eligibility criteria for the Transformation Fund.
        </p>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6 w-full text-left">
          <p className="text-amber-800 font-medium mb-2">Common reasons include:</p>
          <ul className="text-amber-700 text-sm space-y-1">
            <li>• Less than 51% Black ownership</li>
            <li>• Business not registered with CIPC</li>
            <li>• Not tax compliant with SARS</li>
          </ul>
        </div>
        <p className="text-sm text-gray-600 mb-4">
          If your circumstances change, you're welcome to retake the eligibility quiz.
        </p>
        <button
          onClick={() => onOpenChange(false)}
          className="w-full py-3 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
        >
          Close
        </button>
      </div>
    </DialogContent>
  </Dialog>
));
RejectModal.displayName = 'RejectModal';

// Document Success Modal
export const DocSuccessModal: React.FC<SuccessModalProps> = memo(({ open, onOpenChange, onContinue }) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="sm:max-w-[450px] text-center p-8 bg-white">
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-12 h-12 text-green-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Documents Ready!
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Great news! You have all the required documents ready for your application.
        </p>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 w-full">
          <p className="text-green-700 text-sm">
            ✓ All 3 required documents confirmed. You're ready to apply!
          </p>
        </div>
        <button
          onClick={onContinue}
          className="w-full py-3 bg-[#007847] text-white rounded-lg font-semibold hover:bg-[#006038] transition-colors"
        >
          Start Application
        </button>
      </div>
    </DialogContent>
  </Dialog>
));
DocSuccessModal.displayName = 'DocSuccessModal';

// Document Reject Modal
export const DocRejectModal: React.FC<ResultModalProps> = memo(({ open, onOpenChange }) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="sm:max-w-[450px] text-center p-8 bg-white">
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mb-6">
          <AlertCircle className="w-12 h-12 text-amber-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Missing Documents
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          It looks like you're missing some required documents. Please gather all necessary documentation before applying.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 w-full text-left">
          <p className="text-blue-800 font-medium mb-2">Need help getting documents?</p>
          <ul className="text-blue-700 text-sm space-y-1">
            <li>• CIPC: <a href="https://www.cipc.co.za" target="_blank" rel="noopener noreferrer" className="underline">www.cipc.co.za</a></li>
            <li>• SARS Tax Clearance: <a href="https://www.sars.gov.za" target="_blank" rel="noopener noreferrer" className="underline">www.sars.gov.za</a></li>
            <li>• B-BBEE: Contact a verification agency</li>
          </ul>
        </div>
        <button
          onClick={() => onOpenChange(false)}
          className="w-full py-3 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
        >
          Close
        </button>
      </div>
    </DialogContent>
  </Dialog>
));
DocRejectModal.displayName = 'DocRejectModal';

// Incomplete Modal (tried to apply without completing checks)
export const IncompleteModal: React.FC<IncompleteModalProps> = memo(({ 
  open, 
  onOpenChange, 
  onCheckEligibility, 
  onCheckDocuments,
  appState 
}) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="sm:max-w-[450px] text-center p-8 bg-white">
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mb-6">
          <AlertCircle className="w-12 h-12 text-amber-500" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Complete Required Steps
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Before you can apply, please complete the following steps:
        </p>
        
        <div className="w-full space-y-3 mb-6">
          <div className={`flex items-center justify-between p-4 rounded-lg ${
            appState.elig ? 'bg-green-50 border border-green-200' : 'bg-gray-50 border border-gray-200'
          }`}>
            <span className={appState.elig ? 'text-green-700' : 'text-gray-700'}>
              {appState.elig ? '✓' : '○'} Eligibility Check
            </span>
            {!appState.elig && (
              <button
                onClick={() => {
                  onOpenChange(false);
                  onCheckEligibility();
                }}
                className="text-[#007847] font-medium hover:underline"
              >
                Start →
              </button>
            )}
          </div>
          
          <div className={`flex items-center justify-between p-4 rounded-lg ${
            appState.docs ? 'bg-green-50 border border-green-200' : 'bg-gray-50 border border-gray-200'
          }`}>
            <span className={appState.docs ? 'text-green-700' : 'text-gray-700'}>
              {appState.docs ? '✓' : '○'} Document Check
            </span>
            {!appState.docs && (
              <button
                onClick={() => {
                  onOpenChange(false);
                  onCheckDocuments();
                }}
                className="text-[#007847] font-medium hover:underline"
              >
                Start →
              </button>
            )}
          </div>
        </div>

        <button
          onClick={() => onOpenChange(false)}
          className="w-full py-3 bg-gray-200 text-gray-900 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
        >
          Close
        </button>
      </div>
    </DialogContent>
  </Dialog>
));
IncompleteModal.displayName = 'IncompleteModal';
