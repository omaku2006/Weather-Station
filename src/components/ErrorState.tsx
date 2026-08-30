import './ErrorState.css';
import { RotateCcw, SearchX } from 'lucide-react';

interface ErrorStateProps {
  message: string;
  onRetry?: () => void;
}

const ErrorState = ({ message, onRetry }: ErrorStateProps) => {
  return (
    <div className="errorState">
      <div className="errorCard">
        <div className="errorIcon">
          <SearchX size={56} />
        </div>
        <h2>City not found</h2>
        <p>{message}</p>
        {onRetry && (
          <button type="button" className="errorRetryBtn" onClick={onRetry}>
            <RotateCcw size={18} /> Try Again
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorState;
